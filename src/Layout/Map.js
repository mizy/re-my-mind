MM.Layout.Map = Object.create(MM.Layout.Graph, {
	id: { value: "map" },
	label: { value: "Map" },
	ROOT_SPACE: { value: 64 },
	LINE_THICKNESS: { value: 8 }
});
MM.Layout.ALL.push(MM.Layout.Map);
var rightLayout = Object.create(MM.Layout.Map, {
	id: { value: "map-right" },
	label: { value: "Map-Right" },
	ROOT_SPACE: { value: 64 },
	LINE_THICKNESS: { value: 8 }
});
MM.Layout.ALL.push(rightLayout);
var leftLayout = Object.create(MM.Layout.Map, {
	id: { value: "map-left" },
	label: { value: "Map-Left" },
	ROOT_SPACE: { value: 64 },
	LINE_THICKNESS: { value: 8 }
});
MM.Layout.ALL.push(leftLayout);

MM.Layout.Map.update = function (item) {
	if (item.isRoot()) {
		this._layoutRoot(item);
	} else {
		var side = this.getChildDirection(item);
		var name = side.charAt(0).toUpperCase() + side.substring(1);
		MM.Layout.Graph[name].update(item);
	}
}

/**
 * @param {MM.Item} child Child node
 */
MM.Layout.Map.getChildDirection = function (child) {
	while (!child.getParent().isRoot()) {
		child = child.getParent();
	}
	/* child is now the sub-root node */
	//区分左右map布局
	if (this.id === 'map-right') {
		return 'right'
	} else if (this.id === 'map-left') {
		return 'left'
	}

	var side = child.getSide();
	if (side) { return side; }

	var counts = { left: 0, right: 0 };
	var children = child.getParent().getChildren();
	for (var i = 0; i < children.length; i++) {
		var side = children[i].getSide();
		if (!side) {
			side = (counts.right > counts.left ? "left" : "right");
			children[i].setSide(side);
		}
		counts[side]++;
	}

	return child.getSide();
}

MM.Layout.Map.pickSibling = function (item, dir) {
	if (item.isRoot()) { return item; }

	var parent = item.getParent();
	var children = parent.getChildren();
	if (parent.isRoot()) {
		var side = this.getChildDirection(item);
		children = children.filter(function (child) {
			return (this.getChildDirection(child) == side);
		}, this);
	}

	var index = children.indexOf(item);
	index += dir;
	index = (index + children.length) % children.length;
	return children[index];
}

MM.Layout.Map._layoutRoot = function (item) {
	this._alignItem(item, "right");

	var dom = item.getDOM();

	var children = item.getChildren();
	var childrenLeft = [];
	var childrenRight = [];

	children.forEach(function (child, index) {
		var node = child.getDOM().node;
		var side = this.getChildDirection(child);

		if (side == "left") {
			childrenLeft.push(child);
		} else {
			childrenRight.push(child);
		}
	}, this);

	var bboxLeft = this._computeChildrenBBox(childrenLeft, 1);
	var bboxRight = this._computeChildrenBBox(childrenRight, 1);
	var height = Math.max(bboxLeft[1], bboxRight[1],MM.PolyDom.getOffset(dom.content,"height"));
	var left = 0;
	this._layoutChildren(childrenLeft, "left", [left, Math.round((height - bboxLeft[1]) / 2)], bboxLeft);
	left += bboxLeft[0];

	if (childrenLeft.length) { left += this.ROOT_SPACE; }
	dom.content.style.left = left + "px";
	left += MM.PolyDom.getOffset(dom.content,"width");

	if (childrenRight.length) { left += this.ROOT_SPACE; }
	this._layoutChildren(childrenRight, "right", [left, Math.round((height - bboxRight[1]) / 2)], bboxRight);
	left += bboxRight[0];

	dom.content.style.top = Math.round((height - MM.PolyDom.getOffset(dom.content,"height")) / 2) + "px";
	dom.node.style.height = height + "px";
	dom.node.style.width = left + "px";

	this._anchorCanvas(item);
	this._drawRootConnectors(item, "left", childrenLeft);
	this._drawRootConnectors(item, "right", childrenRight);
}

MM.Layout.Map._drawRootConnectors = function (item, side, children) {
	if (children.length == 0 || item.isCollapsed()) { return; }

	var dom = item.getDOM();
	var canvas = dom.canvas;
	var ctx = canvas.getContext("2d");
	ctx.lineWidth = MM.Theme.theme.lineWidth||2;

	var x1 = MM.PolyDom.getOffset(dom.content,"left") + MM.PolyDom.getOffset(dom.content,"width") / 2;
	var y1 = item.getShape().getVerticalAnchor(item);
	var half = this.LINE_THICKNESS / 2;

	for (var i = 0; i < children.length; i++) {
		var child = children[i];

		var x2 = this._getChildAnchor(child, side);
		var y2 = child.getShape().getVerticalAnchor(child) +  MM.PolyDom.getOffset(child.getDOM().node,'top');
		var angle = Math.atan2(y2 - y1, x2 - x1) + Math.PI / 2;
		var dx = Math.cos(angle) * half;
		var dy = Math.sin(angle) * half;

		ctx.fillStyle = ctx.strokeStyle = child.getColor();
		ctx.beginPath();
		ctx.moveTo(x1 - dx, y1 - dy);
		ctx.quadraticCurveTo((x2 + x1) / 2, y2, x2, y2);
		ctx.quadraticCurveTo((x2 + x1) / 2, y2, x1 + dx, y1 + dy);
		ctx.fill();
		ctx.stroke();
	}

}
