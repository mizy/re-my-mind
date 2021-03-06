MM.Map = function (options = {}) {
	var o = {
		root: options.rootName || "Root",
		layout: MM.Layout.Map
	}
	for (var p in options) { o[p] = options[p]; }
	this._root = null;
	this._visible = false;
	this._position = [0, 0];
	if (options.data) {
		this.fromJSON(options.data)
	} else {
		this._setRoot(new MM.Item().setText(o.root).setLayout(o.layout));
	}
}

MM.Map.fromJSON = function (data) {
	return new this().fromJSON(data);
}

MM.Map.prototype.toJSON = function () {
	var data = {
		root: this._root.toJSON(),
		theme: MM.Theme.theme.className
	};
	return data;
}

MM.Map.prototype.fromJSON = function (data) {
	this._setRoot(MM.Item.fromJSON(data.root));
	return this;
}

MM.Map.prototype.mergeWith = function (data) {
	/* store a sequence of nodes to be selected when merge is over */
	var ids = [];
	var current = MM.App.current;
	var node = current;
	while (node != this) {
		ids.push(node.getId());
		node = node.getParent();
	}

	this._root.mergeWith(data.root);

	if (current.getMap()) { /* selected node still in tree, cool */
		/* if one of the parents got collapsed, act as if the node got removed */
		var node = current.getParent();
		var hidden = false;
		while (node != this) {
			if (node.isCollapsed()) { hidden = true; }
			node = node.getParent();
		}
		if (!hidden) { return; } /* nothing bad happened, continue */
	}

	/* previously selected node is no longer in the tree OR it is folded */

	/* what if the node was being edited? */
	if (MM.App.editing) { current.stopEditing(); }

	/* get all items by their id */
	var idMap = {};
	var scan = function (item) {
		idMap[item.getId()] = item;
		item.getChildren().forEach(scan);
	}
	scan(this._root);

	/* select the nearest existing parent */
	while (ids.length) {
		var id = ids.shift();
		if (id in idMap) {
			MM.App.select(idMap[id]);
			return;
		}
	}
}

MM.Map.prototype.isVisible = function () {
	return this._visible;
}

MM.Map.prototype.update = function () {
	this._root.updateSubtree();
	return this;
}

MM.Map.prototype.updateRootWidth = function(){
	const dom = this._root.getDOM().node;
	const width = MM.PolyDom.getOffset(dom,'width');
	const height = MM.PolyDom.getOffset(dom,'height');
	const finalWidth = Math.max(width*3,10000);
	const finalHeight = Math.max(height*3,10000);
	
	const port = MM.App._port;
	port.style.width = finalWidth+'px';
	port.style.height = finalHeight+'px';

	port.scrollLeft = (finalWidth-width)/2;
	port.scrollTop = (finalHeight-height)/2;
	return;
}

MM.Map.prototype.resetTheme = function (reRender) {
	this._root.resetTheme();
	return this;
}


MM.Map.prototype.show = function (where) {
	var node = this._root.getDOM().node;
	where.appendChild(node);
	this._visible = true;
	this._root.updateSubtree();
	this.center();
	MM.App.select(this._root);
	return this;
}

MM.Map.prototype.destroy = function () {
	var node = this._root.getDOM().node;
	node.parentNode.removeChild(node);
	this._visible = false;
	this._root = null;
	this.children = [];
	return this;
}

MM.Map.prototype.center = function () {
	const{node,content}  = this._root.getDOM();
	const port = MM.App._port;
	const container = MM.App.container;
	const portWidth = MM.PolyDom.getOffset(port,"width");
	const portHeight = MM.PolyDom.getOffset(port,"height");
	const containerWidth = container.clientWidth;
	const containerHeight = container.clientHeight;
	const rootWidth = MM.PolyDom.getOffset(node,"width");
	const rootHeight = MM.PolyDom.getOffset(node,"height");
	
	//配置中心点
	// this._moveTo(Math.round(left), Math.round(top));

	// 移动滚动条
	const layout = MM.App.map.getRoot().getLayout().id;
	const pos = content.getBoundingClientRect();
	switch(layout){
		case 'map-right':
			container.scrollLeft = (portWidth-containerWidth)/2 - rootWidth/2;
			container.scrollTop = (portHeight-containerHeight)/2;
			break;
		case 'map-left':
			container.scrollLeft = (portWidth-containerWidth)/2 + rootWidth/2;
			container.scrollTop = (portHeight-containerHeight)/2;
			break;
		default:
			container.scrollLeft = (portWidth-containerWidth)/2 ;
			container.scrollTop = (portHeight-containerHeight)/2;
			break;
	}
	 
	return this;
}

MM.Map.prototype.moveBy = function (dx, dy) {
	const container = MM.App.container;
	container.scrollLeft -= dx;
	container.scrollTop -= dy;
	return  
}

MM.Map.prototype.getClosestItem = function (x, y) {
	var all = [];

	var scan = function (item) {
		var rect = item.getDOM().content.getBoundingClientRect();
		var dx = rect.left + rect.width / 2 - x;
		var dy = rect.top + rect.height / 2 - y;
		all.push({
			item: item,
			dx: dx,
			dy: dy
		});
		if (!item.isCollapsed()) { item.getChildren().forEach(scan); }
	}

	scan(this._root);

	all.sort(function (a, b) {
		var da = a.dx * a.dx + a.dy * a.dy;
		var db = b.dx * b.dx + b.dy * b.dy;
		return da - db;
	});

	return all[0];
}

MM.Map.prototype.getItemFor = function (node) {
	var port = this._root.getDOM().node.parentNode;
	while (node != port && !node.classList.contains("content")) {
		node = node.parentNode;
	}
	if (node == port) { return null; }

	var scan = function (item, node) {
		if (item.getDOM().content == node) { return item; }
		var children = item.getChildren();
		for (var i = 0; i < children.length; i++) {
			var result = scan(children[i], node);
			if (result) { return result; }
		}
		return null;
	}

	return scan(this._root, node);
}

MM.Map.prototype.ensureItemVisibility = function (item) {
	var padding = 10;

	var node = item.getDOM().content;
	var itemRect = node.getBoundingClientRect();
	var root = this._root.getDOM().node;
	var parentRect = root.parentNode.getBoundingClientRect();

	var delta = [0, 0];

	var dx = parentRect.left - itemRect.left + padding;
	if (dx > 0) { delta[0] = dx; }
	var dx = parentRect.right - itemRect.right - padding;
	if (dx < 0) { delta[0] = dx; }

	var dy = parentRect.top - itemRect.top + padding;
	if (dy > 0) { delta[1] = dy; }
	var dy = parentRect.bottom - itemRect.bottom - padding;
	if (dy < 0) { delta[1] = dy; }

	if (delta[0] || delta[1]) {
		this.moveBy(delta[0], delta[1]);
	}
}

MM.Map.prototype.getParent = function () {
	return null;
}

MM.Map.prototype.getRoot = function () {
	return this._root;
}

MM.Map.prototype.getName = function () {
	var name = this._root.getText();
	return MM.Format.br2nl(name).replace(/\n/g, " ").replace(/<.*?>/g, "").trim();
}

MM.Map.prototype.getId = function () {
	return this._root.getId();
}

MM.Map.prototype.pick = function (item, direction) {
	var candidates = [];
	var currentRect = item.getDOM().content.getBoundingClientRect();

	this._getPickCandidates(currentRect, this._root, direction, candidates);
	if (!candidates.length) { return item; }

	candidates.sort(function (a, b) {
		return a.dist - b.dist;
	});

	return candidates[0].item;
}

MM.Map.prototype._getPickCandidates = function (currentRect, item, direction, candidates) {
	if (!item.isCollapsed()) {
		item.getChildren().forEach(function (child) {
			this._getPickCandidates(currentRect, child, direction, candidates);
		}, this);
	}

	var node = item.getDOM().content;
	var rect = node.getBoundingClientRect();

	if (direction == "left" || direction == "right") {
		var x1 = currentRect.left + currentRect.width / 2;
		var x2 = rect.left + rect.width / 2;
		if (direction == "left" && x2 > x1) { return; }
		if (direction == "right" && x2 < x1) { return; }

		var diff1 = currentRect.top - rect.bottom;
		var diff2 = rect.top - currentRect.bottom;
		var dist = Math.abs(x2 - x1);
	} else {
		var y1 = currentRect.top + currentRect.height / 2;
		var y2 = rect.top + rect.height / 2;
		if (direction == "top" && y2 > y1) { return; }
		if (direction == "bottom" && y2 < y1) { return; }

		var diff1 = currentRect.left - rect.right;
		var diff2 = rect.left - currentRect.right;
		var dist = Math.abs(y2 - y1);
	}

	var diff = Math.max(diff1, diff2);
	if (diff > 0) { return; }
	if (!dist || dist < diff) { return; }

	candidates.push({ item: item, dist: dist });
}

MM.Map.prototype._moveTo = function (left, top) {
	this._position = [left, top];

	var node = this._root.getDOM().node;
	node.style.left = left + "px";
	node.style.top = top + "px";
}

/**
 * 设置根节点
 */
MM.Map.prototype._setRoot = function (item) {
	this._root = item;
	this._root.setParent(this);
}
export default MM.Map;