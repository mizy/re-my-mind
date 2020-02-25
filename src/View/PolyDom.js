MM.PolyDom =  {
	getOffset(node,type){
		let styleName = type
		const value = node.style[styleName]?node.style[styleName].split("px")[0]:0;
		return parseInt(value)
	},

	getClient(node,type){
		let styleName = type
		const value = node.style[styleName]?node.style[styleName].split("px")[0]:0;
		return parseInt(value)
	}

}