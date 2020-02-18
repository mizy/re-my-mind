MM.Layout.Graph = Object.create(MM.Layout, {
	SPACING_RANK: { value: 64 },
	childDirection: { value: "" },
	thirdChildOffsetTop: { value: -14 }
});

MM.Layout.Graph.getChildDirection = function (child) {
	return this.childDirection;
}

MM.Layout.Graph.create = function (direction, id, label) {
	var layout = Object.create(this, {
		childDirection: { value: direction },
		id: { value: id },
		label: { value: label }
	});
	MM.Layout.ALL.push(layout);
	return layout;
}

MM.Layout.Graph.update = function (item) {
	var side = this.childDirection;
	if (!item.isRoot()) {
		side = item.getParent().getLayout().getChildDirection(item);
	}
	this._alignItem(item, side);

	this._layoutItem(item, this.childDirection);

	if (this.childDirection == "left" || this.childDirection == "right") {
		this._drawLinesHorizontal(item, this.childDirection);
	} else {
		this._drawLinesVertical(item, this.childDirection);
	}

	return this;
}
/**
 * Generic graph child layout routine. Updates item's orthogonal size according to the sum of its children.
 */
MM.Layout.Graph._layoutItem = function (item, rankDirection) {
	const shape = item.getShape().id;
	const spacingRank = this.SPACING_RANK;
	var sizeProps = ["width", "height"];
	var posProps = ["left", "top"];

	var rankIndex = (rankDirection == "left" || rankDirection == "right") ? 0 : 1;
	var childIndex = rankIndex === 0 ? 1 : 0;
	var rankPosProp;// 左右排是css的left,上下是以top为基准 
	var childPosProp;// 排列方式的的另一个css属性
	var rankSizeProp; //  
	var childSizeProp;// 宽高
	if (rankDirection == "left" || rankDirection == "right") {
		rankPosProp = "left", childPosProp = "top";
		rankSizeProp = "width"; childSizeProp = "height";
	} else {
		rankPosProp = "top", childPosProp = "left";
		rankSizeProp = "height"; childSizeProp = "width";
	}
	var dom = item.getDOM();

	/* content size */
	var contentSize = [dom.content.offsetWidth, dom.content.offsetHeight];

	/* children size */
	// 撑开孩子节点的属性
	var bbox = this._computeChildrenBBox(item.getChildren(), childIndex);
 
	var rankSize = contentSize[rankIndex];
	if (bbox[rankIndex]) { rankSize += bbox[rankIndex] + spacingRank; }
	var childSize = Math.max(bbox[childIndex], contentSize[childIndex]);
	
	var offset = [0, 0];
	if (rankDirection == "right") { offset[0] = contentSize[0] + spacingRank; }
	if (rankDirection == "bottom") { offset[1] = contentSize[1] + spacingRank; }
	// 居中子元素所需要的偏移量
	offset[childIndex] = Math.round((childSize - bbox[childIndex]) / 2);
	if (shape === 'box') {
		this._layoutBoxChildren(item.getChildren(), rankDirection, offset, bbox);
	} else {
		this._layoutChildren(item.getChildren(), rankDirection, offset, bbox);
	}

	/* label position */
	var labelPos = 0;
	if (rankDirection == "left") { labelPos = rankSize - contentSize[0]; }
	if (rankDirection == "top") { labelPos = rankSize - contentSize[1]; }
	let offsetY = 0
	if (item.getChildren().length) {
		const child = item.getChildren()[0];
		// 父子节点都为Underline的情况不用偏移
		if (child.getShape().id === "underline" && shape !== "underline") {
			const childNode = child.getDOM().text;
			offsetY = childNode.offsetHeight / 2 + 1;//线高度1px
		} else if (item.getChildren().length) {
			//TODO: 当只有一个children时，兼容多行文本
			offsetY = (child.getDOM().text.offsetHeight - dom.content.offsetHeight) / 2;
			offsetY = offsetY < 0 ? 0 : offsetY;
		}
	}
	dom.content.style[childPosProp] = Math.round((childSize - contentSize[childIndex]) / 2) + offsetY + "px";
	dom.content.style[rankPosProp] = labelPos + "px";

	// 当元素的子节点布局完成后，重新设置子节点的高度，避免子节点偏移后，高度不准确
	var itemSize = [dom.content.offsetWidth+dom.content.offsetLeft, dom.content.offsetHeight+dom.content.offsetTop];
	childSize = Math.max(bbox[childIndex], itemSize[childIndex]);
	dom.node.style[rankSizeProp] = rankSize + "px"; // 父元素的宽度为文字的宽度
	dom.node.style[childSizeProp] = childSize + "px";// 子元素撑开的高度就是父元素的高度
	return this;
}

MM.Layout.Graph._layoutBoxChildren = function (children, rankDirection, offset, bbox) {
	var posProps = ["left", "top"];

	var rankIndex = (rankDirection == "left" || rankDirection == "right") ? 0 : 1;
	var childIndex = (rankIndex + 1) % 2;
	var rankPosProp = posProps[rankIndex];
	var childPosProp = posProps[childIndex];
	children.forEach(function (child, index) {
		var node = child.getDOM().node;
		// 下划线的Y
		const offsetY = (node.offsetHeight + child.getShape().VERTICAL_OFFSET) - node.offsetHeight / 2 - 1;//线高度1px
		var childSize = [node.offsetWidth, node.offsetHeight];

		if (rankDirection == "left") {
			offset[0] = bbox[0] - childSize[0];
		}
		if (rankDirection == "top") {
			offset[1] = bbox[1] - childSize[1] - 10;
		}
		// //横向情况
		// if (rankIndex === 0 && index === 0) {
		// 	offset[1] -= offsetY;
		// }
		// 这个常量会被css修改，要注意修改
		node.style[childPosProp] = offset[childIndex] + "px";
		node.style[rankPosProp] = offset[rankIndex] + "px";
		offset[childIndex] += childSize[childIndex] + this.SPACING_CHILD; /* offset for next child */
	}, this);

	return bbox;
}

MM.Layout.Graph._layoutChildren = function (children, rankDirection, offset, bbox) {
	var posProps = ["left", "top"];

	var rankIndex = (rankDirection == "left" || rankDirection == "right" ? 0 : 1);
	var childIndex = (rankIndex + 1) % 2;
	var rankPosProp = posProps[rankIndex];
	var childPosProp = posProps[childIndex];

	children.forEach(function (child, index) {
		var node = child.getDOM().node;
		var childSize = [node.offsetWidth, node.offsetHeight];

		if (rankDirection == "left") {
			offset[0] = bbox[0] - childSize[0];
		}
		if (rankDirection == "top") {
			offset[1] = bbox[1] - childSize[1];
		}

		node.style[childPosProp] = offset[childIndex] + "px";
		node.style[rankPosProp] = offset[rankIndex] + "px";

		offset[childIndex] += childSize[childIndex] + this.SPACING_CHILD; /* offset for next child */
	}, this);

	return bbox;
}

MM.Layout.Graph._drawLinesHorizontal = function (item, side) {
	this._anchorCanvas(item);
	this._drawHorizontalConnectors(item, side, item.getChildren());
}

MM.Layout.Graph._drawLinesVertical = function (item, side) {
	this._anchorCanvas(item);
	this._drawVerticalConnectors(item, side, item.getChildren());
}

MM.Layout.Graph._drawHorizontalConnectors = function (item, side, children) {
	if (children.length == 0) { return; }

	var dom = item.getDOM();
	var canvas = dom.canvas;
	var ctx = canvas.getContext("2d");
	ctx.strokeStyle = item.getColor();
	var R = this.SPACING_RANK / 2;

	/* first part */
	var y1 = item.getShape().getVerticalAnchor(item);
	if (side == "left") {
		var x1 = dom.content.offsetLeft - 0.5;
	} else {
		var x1 = dom.content.offsetWidth + dom.content.offsetLeft + 0.5;
	}

	this._anchorToggle(item, x1, y1, side);
	if (item.isCollapsed()) { return; }

	if (children.length == 1) {
		//一个子节点时的情况
		var child = children[0];
		var y2 = child.getShape().getVerticalAnchor(child) + child.getDOM().node.offsetTop;
		var x2 = this._getChildAnchor(child, side);
		ctx.beginPath();
		ctx.moveTo(x1, y1);
		// ctx.lineTo(x2, y1);
		ctx.bezierCurveTo((x1 + x2) / 2, y1, (x1 + x2) / 2, y2, x2, y2);
		ctx.stroke();
		return;
	}

	if (side == "left") {
		var x2 = x1 - R;
	} else {
		var x2 = x1 + R;
	}
	// 当前节点到子节点直接的直线
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y1);
	ctx.stroke();

	/* rounded connectors */
	var c1 = children[0];
	var c2 = children[children.length - 1];
	var x = x2;
	var y = y1;
	var xx = x + (side == "left" ? -R : R);
	var sideVal = side === "left" ? -1 : 1;
	var y1 = c1.getShape().getVerticalAnchor(c1) + c1.getDOM().node.offsetTop;
	var y2 = c2.getShape().getVerticalAnchor(c2) + c2.getDOM().node.offsetTop;
	var x1 = this._getChildAnchor(c1, side);
	var x2 = this._getChildAnchor(c2, side);

	ctx.beginPath();
	// 重构这部分逻辑，写死倒角大小
	// 三级节点的直线部分
	const r = 12;
	ctx.moveTo(x1, y1);
	ctx.lineTo(xx, y1);
	ctx.lineTo(x + sideVal * (r - 1), y1);
	ctx.arcTo(x, y1, x, y1 + r, r);
	ctx.lineTo(x, y2 - r + 1);
	ctx.arcTo(x, y2, x + sideVal * r, y2, r);
	ctx.moveTo(x + sideVal * (r - 1), y2)
	ctx.lineTo(x2, y2)

	for (var i = 1; i < children.length - 1; i++) {
		var c = children[i];
		const x1 = this._getChildAnchor(c, side)
		var y = c.getShape().getVerticalAnchor(c) + c.getDOM().node.offsetTop;
		// 节点下的下划线
		ctx.moveTo(x1, y);
		let offsetTop = 0;
		if (item.getShape().id === "underline") {
			offsetTop = dom.content.offsetTop + item.getShape().VERTICAL_OFFSET + dom.content.offsetHeight;
		} else {
			offsetTop = dom.content.offsetTop + dom.content.offsetHeight / 2;
		}
		if (Math.abs(y - offsetTop) <= 1) {
			ctx.lineTo(x, y);
			continue;
		}
		const offsetX = (side === "right") ? 5 : -5;
		const offsetY = (y > offsetTop) ? -5 : 5;
		ctx.lineTo(x + offsetX, y);
		ctx.quadraticCurveTo(x, y, x, y + offsetY);

	}
	ctx.stroke();
}

MM.Layout.Graph._drawVerticalConnectors = function (item, side, children) {
	if (children.length == 0) { return; }

	var dom = item.getDOM();
	var canvas = dom.canvas;
	var ctx = canvas.getContext("2d");
	ctx.strokeStyle = item.getColor();

	/* first part */
	var R = this.SPACING_RANK / 2;

	var x = item.getShape().getHorizontalAnchor(item);
	var height = (children.length == 1 ? 2 * R : R);

	if (side == "top") {
		var y1 = canvas.height - dom.content.offsetHeight;
		var y2 = y1 - height;
		this._anchorToggle(item, x, y1, side);
	} else {
		var y1 = item.getShape().getVerticalAnchor(item);
		var y2 = dom.content.offsetHeight + height;
		this._anchorToggle(item, x, dom.content.offsetHeight, side);
	}

	ctx.beginPath();
	ctx.moveTo(x, y1);
	ctx.lineTo(x, y2);
	ctx.stroke();


	if (children.length == 1) { return; }

	/* rounded connectors */
	var c1 = children[0];
	var c2 = children[children.length - 1];
	var offset = dom.content.offsetHeight + height;
	var y = Math.round(side == "top" ? canvas.height - offset : offset) + 0.5;

	var x1 = c1.getShape().getHorizontalAnchor(c1) + c1.getDOM().node.offsetLeft;
	var x2 = c2.getShape().getHorizontalAnchor(c2) + c2.getDOM().node.offsetLeft;
	var y1 = this._getChildAnchor(c1, side);
	var y2 = this._getChildAnchor(c2, side);
	// var center = [(x1+x2)/2,y1];
	//写死
	R = 12
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.arcTo(x1, y, x1 + R, y, R);
	ctx.lineTo(x2 - R, y);
	ctx.arcTo(x2, y, x2, y2, R);
	ctx.lineTo(x2, y2)

	for (var i = 1; i < children.length - 1; i++) {
		var c = children[i];
		var x = c.getShape().getHorizontalAnchor(c) + c.getDOM().node.offsetLeft;
		ctx.moveTo(x, y);

		ctx.lineTo(x, this._getChildAnchor(c, side));
	}
	ctx.stroke();
}


MM.Layout.Graph.Down = MM.Layout.Graph.create("bottom", "graph-bottom", "Bottom");
MM.Layout.Graph.Up = MM.Layout.Graph.create("top", "graph-top", "Top");
MM.Layout.Graph.Left = MM.Layout.Graph.create("left", "graph-left", "Left");
MM.Layout.Graph.Right = MM.Layout.Graph.create("right", "graph-right", "Right");
export default MM.Layout.Graph;