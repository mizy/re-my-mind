MM.PolyDom = {
	getOffset(node, type) {
		let styleValue = node.style[type]
		if (styleValue && styleValue !== "auto") {
			return parseInt(styleValue.split("px")[0])
		} else {
			node.style[type] = "auto"; // 回归默认，然后取宽度
			const key = type[0].toUpperCase() + type.slice(1);
			let value = node[`offset`+key];
			// var value = data[type];
			node.style[type] = value + "px";
			return value;
		}
	},

	getClient(node, type) {
		let styleName = type
		const value = node.style[styleName] ? node.style[styleName].split("px")[0] : 0;
		return parseInt(value)
	},

}