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
	return Math.round(node.offsetLeft + node.offsetWidth / 2) + 0.5;
}

MM.Shape.getVerticalAnchor = function (item) {
	var node = item.getDOM().content;
	return node.offsetTop + Math.round(node.offsetHeight * this.VERTICAL_OFFSET);
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
		item.getDOM().content.style.backgroundColor = "#4a90e2"
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
		item.getDOM().content.style.backgroundColor = "#50c28b"
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

	var left = dom.content.offsetLeft;
	var right = left + dom.content.offsetWidth;

	var top = this.getVerticalAnchor(item);

	ctx.beginPath();
	ctx.moveTo(left, top);
	ctx.lineTo(right, top);
	ctx.stroke();
}

MM.Shape.Underline.getVerticalAnchor = function (item) {
	var node = item.getDOM().content;
	return node.offsetTop + node.offsetHeight + this.VERTICAL_OFFSET;
}
export default MM.Shape;