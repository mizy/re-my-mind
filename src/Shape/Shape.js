/**
 * @class
 */
MM.Shape = Object.create(MM.Repo, {
	VERTICAL_OFFSET: { value: 0.5 },
});

MM.Shape.set = function (item) {
	item.getDOM().node.classList.add("shape-" + this.id);
	return this;
}

MM.Shape.unset = function (item) {
	item.getDOM().node.classList.remove("shape-" + this.id);
	return this;
}

MM.Shape.update = function (item) {
	const data = item._data;

	return this;
}

MM.Shape.getHorizontalAnchor = function (item) {
	var node = item.getDOM().content;
	return Math.round(MM.PolyDom.getOffset(node,"left") + MM.PolyDom.getOffset(node,"width")/ 2) + 0.5;
}

MM.Shape.getVerticalAnchor = function (item) {
	var node = item.getDOM().content;
	return MM.PolyDom.getOffset(node,"top") + Math.round(MM.PolyDom.getOffset(node,"height") * this.VERTICAL_OFFSET);
}
MM.Shape.Box = Object.create(MM.Shape, {
	id: { value: "box" },
	label: { value: "Box" }
});
MM.Shape.Box.update = function (item) {
	const data = item._data;
	if (data.backgroundColor) {
		item.getDOM().content.style.backgroundColor = data.backgroundColor;
	} else {
		item.getDOM().content.style.backgroundColor = undefined
	}
	return this;
}
MM.Shape.Ellipse = Object.create(MM.Shape, {
	id: { value: "ellipse" },
	label: { value: "Ellipse" }
});
MM.Shape.Ellipse.update = function (item) {
	const data = item._data;
	if (data.backgroundColor) {
		item.getDOM().content.style.backgroundColor = data.backgroundColor;
	} else {
		item.getDOM().content.style.backgroundColor = undefined
	}
	return this;
}
MM.Shape.Underline = Object.create(MM.Shape, {
	id: { value: "underline" },
	label: { value: "Underline" },
	VERTICAL_OFFSET: { value: -3 }
});

MM.Shape.Underline.update = function (item) {
	var dom = item.getDOM();

	var ctx = dom.canvas.getContext("2d");
	ctx.strokeStyle = item.getColor();
	ctx.lineWidth = MM.Theme.theme.lineWidth||1;
	
	var left = MM.PolyDom.getOffset(dom.content,"left");
	var right = left + MM.PolyDom.getOffset(dom.content,"width");

	var top = this.getVerticalAnchor(item);

	ctx.beginPath();
	ctx.moveTo(left, top);
	ctx.lineTo(right, top);
	ctx.stroke();
}

MM.Shape.Underline.getVerticalAnchor = function (item) {
	var node = item.getDOM().content;
	return MM.PolyDom.getOffset(node,"top") + MM.PolyDom.getOffset(node,"height") + this.VERTICAL_OFFSET;
}
export default MM.Shape;