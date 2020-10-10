MM.Item = function (options) {
	options = options || {};
	this._parent = null;
	this._children = [];
	this._collapsed = false;
	this._data = {};
	this._layout = null;
	this._shape = null;
	this._autoShape = true;
	this._color = options.color || null;
	this._status = null;
	this._side = null; /* side preference */
	this._icon = {};
	this._id = MM.generateId();
	this._oldText = "";
	this.style = {};

	this._computed = {
		value: 0,
		status: null
	}

	this._dom = {
		node: document.createElement("li"),
		content: document.createElement("div"),
		status: document.createElement("span"),
		icon: document.createElement("ul"),
		value: document.createElement("span"),
		text: document.createElement("div"),
		children: document.createElement("ul"),
		toggle: document.createElement("div"),
		canvas: document.createElement("canvas"),
		note: document.createElement("i")
	}
	this._dom.node.classList.add("item");
	this._dom.content.classList.add("content");
	this._dom.status.classList.add("status");
	this._dom.icon.classList.add("icon");
	this._dom.text.classList.add("text");
	this._dom.toggle.classList.add("toggle");
	this._dom.children.classList.add("children");
	this._dom.note.classList.add("note-button");
	this._dom.note.innerHTML = "";
	this._dom.note.addEventListener("click", () => {
		this.startNote()
	});
	this._dom.content.appendChild(this._dom.text); /* status+value are appended in layout */
	this._dom.node.appendChild(this._dom.canvas);
	this._dom.node.appendChild(this._dom.content);
	this._dom.content.insertBefore(this._dom.icon, this._dom.content.firstChild);
	this._dom.toggle.addEventListener("click", this);
}


MM.Item.COLOR = "#999999";

/* RE explanation:
 *          _________________________________________________________________________ One of the three possible variants
 *           ____________________ scheme://x
 *                                ___________________________ aa.bb.cc
 *                                                            _______________________ aa.bb/
 *                                                                                    ______ path, search
 *                                                                                          __________________________ end with a non-forbidden char
 *                                                                                                                    ______ end of word or end of string
 */
MM.Item.RE = /\b(([a-z][\w-]+:\/\/\w)|(([\w-]+\.){2,}[a-z][\w-]+)|([\w-]+\.[a-z][\w-]+\/))[^\s]*([^\s,.;:?!<>\(\)\[\]'"])?($|\b)/i;

MM.Item.fromJSON = function (data) {
	return new this().fromJSON(data);
}

MM.Item.prototype.toJSON = function () {
	var data = {
		...this._data,
		id: this._id,
		text: this.getText()
	}

	if (this._side) { data.side = this._side; }
	if (this._color) { data.color = this._color; }
	if (this._icon) { data.icon = this._icon; }

	if (this._status) { data.status = this._status; }
	if (this._layout) { data.layout = this._layout.id; }
	if (!this._autoShape) { data.shape = this._shape.id; }
	if (this._collapsed) { data.collapsed = 1; }
	if (this.note) {
		data.note = this.note;
	}
	if (this._children.length) {
		data.children = this._children.map(function (child) { return child.toJSON(); });
	}
	if (this.style && JSON.stringify(this.style) !== "{}") {
		data.style = this.style;
	}
	const content = this.getDOM().content;
	if (content.style.backgroundColor) {
		data.backgroundColor = content.style.backgroundColor;
	}
	return data;
}

/**
 * Only when creating a new item. To merge existing items, use .mergeWith().
 */
MM.Item.prototype.fromJSON = function (data) {
	if (data.id) { this._id = data.id; }
	if (data.side) { this._side = data.side; }
	if (data.color) { this._color = data.color; }
	if (data.icon) { this._icon = data.icon; }

	if (data.status) {
		this._status = data.status;
		if (this._status == "maybe") { this._status = "computed"; }
	}
	if (data.collapsed) { this.collapse(); }
	if (data.layout) { this._layout = MM.Layout.getById(data.layout); }
	if (data.shape) { this.setShape(MM.Shape.getById(data.shape)); }
	if (data.note) {
		this.note = data.note;
		this._dom.content.appendChild(this._dom.note);
	}
	if (data.style && JSON.stringify(data.style) !== "{}") {
		this.setTextStyle(data.style);
	}
	(data.children || []).forEach(function (child) {
		this.insertChild(MM.Item.fromJSON(child));
	}, this);
	this._data = data;
	this.setText(data.text, false);// 不触发重绘
	return this;
}

MM.Item.prototype.setTextStyle = function (style) {
	const text = this._dom.text;
	for (let name in style) {
		text.style[name] = style[name];
	}
	this.style = style;
}

MM.Item.prototype.mergeWith = function (data) {
	var dirty = 0;
	if (this.getText() != data.text && !this._dom.text.contentEditable) { this.setText(data.text); }

	if (this._side != data.side) {
		this._side = data.side;
		dirty = 1;
	}

	if (this._color != data.color) {
		this._color = data.color;
		dirty = 2;
	}

	if (this._icon != data.icon) {
		this._icon = data.icon;
		dirty = 1;
	}

	if (this._status != data.status) {
		this._status = data.status;
		dirty = 1;
	}

	if (this._collapsed != !!data.collapsed) { this[this._collapsed ? "expand" : "collapse"](); }

	if (this.getOwnLayout() != data.layout) {
		this._layout = MM.Layout.getById(data.layout);
		dirty = 2;
	}

	var s = (this._autoShape ? null : this._shape.id);
	if (s != data.shape) { this.setShape(MM.Shape.getById(data.shape)); }

	(data.children || []).forEach(function (child, index) {
		if (index >= this._children.length) { /* new child */
			this.insertChild(MM.Item.fromJSON(child));
		} else { /* existing child */
			var myChild = this._children[index];
			if (myChild.getId() == child.id) { /* recursive merge */
				myChild.mergeWith(child);
			} else { /* changed; replace */
				this.removeChild(this._children[index]);
				this.insertChild(MM.Item.fromJSON(child), index);
			}
		}
	}, this);

	/* remove dead children */
	var newLength = (data.children || []).length;
	while (this._children.length > newLength) { this.removeChild(this._children[this._children.length - 1]); }

	if (dirty == 1) { this.update(); }
	if (dirty == 2) { this.updateSubtree(); }
}

MM.Item.prototype.clone = function () {
	var data = this.toJSON();

	var removeId = function (obj) {
		delete obj.id;
		obj.children && obj.children.forEach(removeId);
	}
	removeId(data);

	return this.constructor.fromJSON(data);
}
MM.Item.prototype.getDepth = function(){
	let depth = 0;
	let node = this;
	while (node && !node.isRoot()) {
		depth++;
		node = node.getParent();
	}
	return depth;
}

MM.Item.prototype.select = function () {
	this._dom.node.classList.add("current");
	this.getMap().ensureItemVisibility(this);
	MM.Clipboard.focus(); /* going to mode 2c */
	MM.publish("item-select", this);
}

MM.Item.prototype.deselect = function () {
	if (MM.App.editing) {
		MM.Command.Finish.execute();
	}
	this._dom.node.classList.remove("current");
	MM.publish("item-deselect", this);
}


MM.Item.prototype.update = function (doNotRecurse) {
	var map = this.getMap();
	if (!map || !map.isVisible()) { return this; }

	if (this._autoShape) { /* check for changed auto-shape */
		var autoShape = this._getAutoShape();
		if (autoShape != this._shape) {
			if (this._shape) { this._shape.unset(this); }
			this._shape = autoShape;
			this._shape.set(this);
		}
	}

	this._updateIcon();
	// this._updateStatus();
	const contentWidth = MM.PolyDom.getOffset(this._dom.content, "width")
	// 大于300则
	if (contentWidth > 300) {
		this.getDOM().content.style.width = "302px";
		this.getDOM().text.className = "text multi-line";
	} else {
		this.getDOM().text.className = "text";
	}

	this.updateBackground();
	this._dom.node.classList[this._collapsed ? "add" : "remove"]("collapsed");
	this.getLayout().update(this);
	this.getShape().update(this);
	if (!this.isRoot() && !doNotRecurse) { this._parent.update(); }
	if(this.isRoot()){
		this._parent.updateRootWidth();
	}
	return this;
}

MM.Item.prototype.updateBackground = function () {
	var data = this._data;
	var content = this.getDOM().content;
	if (data.backgroundColor)
		content.style.backgroundColor = data.backgroundColor;
	if (data.border) {
		content.style.border = data.border;
	}
}
/**
 * 更新子节点
 */
MM.Item.prototype.updateSubtree = function (isSubChild) {
	this._children.forEach(function (child) {
		child.updateSubtree(true);
	});
	return this.update(isSubChild);
}

MM.Item.prototype.resetTheme = function () {
	this._children.forEach(function (child) {
		child.resetTheme();
	});
	this.clearStyle();
	// if (reRender) {
	this.clearOffset();
	this.update(true);
	// }
}

MM.Item.prototype.clearStyle = function () {
	this._dom.content.style.backgroundColor = null;
	delete this._data.backgroundColor;
	if (this.style) {
		for (let key in this.style) {
			this.style[key] = null;
			delete this.style[key]
		}
	}
}

MM.Item.prototype.setText = function (text, clear = true) {
	if (this._dom.text.innerHTML === text) {
		return;
	}
	this._dom.text.innerHTML = text;
	this._findLinks(this._dom.text);
	clear && this.clearOffset();
	return this.update();
}

MM.Item.prototype.getId = function () {
	return this._id;
}

MM.Item.prototype.getText = function () {
	return this._dom.text.innerHTML;
}

MM.Item.prototype.collapse = function () {
	// this.clearOffset();
	if (this._collapsed) { return; }
	this._collapsed = true;
	MM.publish("beforecollapse",this);
	clearTimeout(this.timeout)
	this.timeout = setTimeout(()=>{
		this.rememberPos();
		this.update();
		this.center();
		MM.publish('aftercollapse', this);
	}, 100);
	return this;
}
MM.Item.prototype.expand = function () {
	// this.clearOffset();
	if (!this._collapsed) { return; }
	this._collapsed = false;
	MM.publish("beforeexpand",this);
	clearTimeout(this.timeout);
	this.timeout = setTimeout(()=>{
		this.rememberPos();
		this.update();
		this.updateSubtree();
		this.center();
		MM.publish('afterexpand');
	}, 100);
	return 
}

MM.Item.prototype.rememberPos = function(){
	this.beforePos = this.getDOM().content.getBoundingClientRect();
}

MM.Item.prototype.center = function(){
	const {left,top} =  this.getDOM().content.getBoundingClientRect();
	if(!this.beforePos){
		this.beforePos = {
			left:MM.App.container.clientWidth/2,
			top:MM.App.container.clientHeight/2
		}
	}
	MM.App.container.scrollLeft -= this.beforePos.left - left;
	MM.App.container.scrollTop -= this.beforePos.top - top; 
	this.beforePos = undefined

}

MM.Item.prototype.clearOffset = function () {
	this._dom.content.style.width = "auto";
	this._dom.content.style.height = "auto";
}


MM.Item.prototype.isCollapsed = function () {
	return this._collapsed;
}
 


MM.Item.prototype.getComputedValue = function () {
	return this._computed.value;
}

MM.Item.prototype.setStatus = function (status) {
	this._status = status;
	return this.update();
}

MM.Item.prototype.getStatus = function () {
	return this._status;
}

MM.Item.prototype.setIcon = function (icon, type = 'default') {
	const action = new MM.Action.SetIcon(this, icon, type);
	MM.App.action(action);
	MM.publish("item-change", this)
}

MM.Item.prototype.deleteIcon = function (type) {
	// 删除icon
	const action = new MM.Action.SetIcon(this, false, type);
	MM.App.action(action);
	MM.publish("item-change", this)

}

MM.Item.prototype.getIcon = function () {
	return this._icon;
}

MM.Item.prototype.getComputedStatus = function () {
	return this._computed.status;
}

MM.Item.prototype.setSide = function (side) {
	this._side = side;
	return this;
}

MM.Item.prototype.getSide = function () {
	return this._side;
}

MM.Item.prototype.getChildren = function () {
	return this._children;
}

MM.Item.prototype.setColor = function (color) {
	this._color = color;
	return this.updateSubtree();
}

MM.Item.prototype.getColor = function () {
	return this._color || (this.isRoot() ? MM.Item.COLOR : this._parent.getColor());
}

MM.Item.prototype.getOwnColor = function () {
	return this._color;
}

MM.Item.prototype.getLayout = function () {
	return this._layout || this._parent.getLayout();
}

MM.Item.prototype.getOwnLayout = function () {
	return this._layout;
}
/**
 * 设置layut
 */
MM.Item.prototype.setLayout = function (layout) {
	this._layout = layout;
	return this.updateSubtree();
}

MM.Item.prototype.getShape = function () {
	return this._shape;
}

MM.Item.prototype.getOwnShape = function () {
	return (this._autoShape ? null : this._shape);
}

MM.Item.prototype.setShape = function (shape) {
	if (this._shape) { this._shape.unset(this); }

	if (shape) {
		this._autoShape = false;
		this._shape = shape;
	} else {
		this._autoShape = true;
		this._shape = this._getAutoShape();
	}

	this._shape.set(this);
	this.clearOffset();
	return this.update();
}

MM.Item.prototype.getDOM = function () {
	return this._dom;
}

MM.Item.prototype.getMap = function () {
	var item = this._parent;
	while (item) {
		if (item instanceof MM.Map) { return item; }
		item = item.getParent();
	}
	return null;
}

MM.Item.prototype.getParent = function () {
	return this._parent;
}

MM.Item.prototype.isRoot = function () {
	return (this._parent instanceof MM.Map);
}

MM.Item.prototype.setParent = function (parent) {
	this._parent = parent;
	return this.updateSubtree();
}

MM.Item.prototype.insertChild = function (child, index) {
	/* Create or remove child as necessary. This must be done before computing the index (inserting own child) */
	var newChild = false;
	if (!child) {
		child = new MM.Item();
		newChild = true;
	} else if (child.getParent() && child.getParent().removeChild) { /* only when the child has non-map parent */
		child.getParent().removeChild(child);
	}

	if (!this._children.length) {
		this._dom.node.appendChild(this._dom.toggle);
		this._dom.node.appendChild(this._dom.children);
	}

	if (arguments.length < 2) { index = this._children.length; }

	var next = null;
	if (index < this._children.length) { next = this._children[index].getDOM().node; }
	this._dom.children.insertBefore(child.getDOM().node, next);
	this._children.splice(index, 0, child);

	return child.setParent(this);
}

MM.Item.prototype.removeChild = function (child) {
	var index = this._children.indexOf(child);
	this._children.splice(index, 1);
	var node = child.getDOM().node;
	node.parentNode.removeChild(node);

	child.setParent(null);

	if (!this._children.length) {
		this._dom.toggle.parentNode.removeChild(this._dom.toggle);
		this._dom.children.parentNode.removeChild(this._dom.children);
	}

	return this.update();
}

MM.Item.prototype.startEditing = function () {
	this._oldText = this.getText();
	this._dom.text.contentEditable = true;
	this._dom.text.focus(); /* switch to 2b */
	document.execCommand("styleWithCSS", null, false);
	this._dom.node.style.zIndex = "1000";
	this._dom.text.addEventListener("input", this);
	this._dom.text.addEventListener("keydown", this);
	this._dom.text.addEventListener("blur", this);
	this.clearContentWidth();
	return this;
}

MM.Item.prototype.stopEditing = function () {
	this._dom.text.removeEventListener("input", this);
	this._dom.text.removeEventListener("keydown", this);
	this._dom.text.removeEventListener("blur", this);
	this._dom.node.style.zIndex = 0;
	this._dom.text.blur();
	this._dom.text.contentEditable = false;

	var result = this._dom.text.innerHTML;
	this.clearContentWidth();
	this.update(); /* text changed */
	this.getMap().ensureItemVisibility(this);

	MM.Clipboard.focus();

	return result;
}

MM.Item.prototype.startNote = function (text) {
	this.clearOffset();
	this._dom.content.appendChild(this._dom.note);
	MM.App.note.show(this);
	this.update();
}

MM.Item.prototype.endNote = function (text) {
	if (text === this.note) return;
	const action = new MM.Action.SetNote(this, text)
	MM.App.action(action)
}

MM.Item.prototype.clearContentWidth = function () {
	if (this._dom.text.clientHeight < 35) {// 先写死40像素，不同文字大小这个值不一样
		this._dom.text.className = "text";
		this._dom.content.style.width = "auto";
	} else {
		this._dom.content.style.width = "302px";
	}
	this._dom.content.style.height = "auto";
}

MM.Item.prototype.handleEvent = function (e) {
	switch (e.type) {
		case "input":
			break;
		case "keydown":
			if (e.keyCode == 9) { e.preventDefault(); } /* TAB has a special meaning in this app, do not use it to change focus */
			break;
		case "blur": /* 3d */
			MM.Command.Finish.execute();
			break;
		case "click":
			if (this._collapsed) { this.expand(); } else { this.collapse(); }
			MM.App.select(this);
			e.stopPropagation();
			break;
	}
}

MM.Item.prototype._getAutoShape = function () {
	const theme = MM.Theme.theme;
	var depth = 0;
	var node = this;
	while (!node.isRoot() && depth < 2) {
		depth++;
		node = node.getParent();
	}
	this.depth = depth;
	switch (depth) {
		case 0: return MM.Shape[theme.main];
		case 1: return MM.Shape[theme.second];
		default: return MM.Shape[theme.node];
	}
}

MM.Item.prototype._updateStatus = function () {
	this._dom.status.className = "status";
	this._dom.status.style.display = "";

	var status = this._status;
	if (this._status == "computed") {
		var childrenStatus = this._children.every(function (child) {
			return (child.getComputedStatus() !== false);
		});
		status = (childrenStatus ? "yes" : "no");
	}

	switch (status) {
		case "yes":
			this._dom.status.classList.add("yes");
			this._computed.status = true;
			break;
		case "no":
			this._dom.status.classList.add("no");
			this._computed.status = false;
			break;
		default:
			this._computed.status = null;
			this._dom.status.style.display = "none";
			break;
	}
}
MM.Item.prototype._updateIcon = function () {
	this._dom.icon.className = "re-mind-icon";
	this._dom.icon.style.display = "";

	var icon = this._icon;
	if (JSON.stringify(icon) !== '{}') {
		let iconList = '';
		for (let key in icon) {
			if (icon[key])
				iconList += `<li class="${icon[key]}" data-key="${key}"></li>`;
		}
		this._dom.icon.innerHTML = iconList;
		this._computed.icon = true;
	} else {
		this._dom.icon.innerHTML = null;
		this._computed.icon = null;
		this._dom.icon.style.display = "none";
	}
}
 

MM.Item.prototype._findLinks = function (node) {

	var children = [].slice.call(node.childNodes);
	for (var i = 0; i < children.length; i++) {
		var child = children[i];
		switch (child.nodeType) {
			case 1: /* element */
				if (child.nodeName.toLowerCase() == "a") { continue; }
				this._findLinks(child);
				break;

			case 3: /* text */
				var result = child.nodeValue.match(this.constructor.RE);
				if (result) {
					var before = child.nodeValue.substring(0, result.index);
					var after = child.nodeValue.substring(result.index + result[0].length);
					var link = document.createElement("a");
					link.innerHTML = link.href = result[0];

					if (before) {
						node.insertBefore(document.createTextNode(before), child);
					}

					node.insertBefore(link, child);

					if (after) {
						child.nodeValue = after;
						i--; /* re-try with the aftertext */
					} else {
						node.removeChild(child);
					}
				}
				break;
		}
	}
}
export default MM.Item;