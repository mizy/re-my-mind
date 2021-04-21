const theme = {
	themes: {
		default:{
			main: "ellipse",
			second: "box",
			className: "default",
			node: "underline",
			lineShape:"bezier"
		}
	},

	registe(name,options){
		theme.thems[name] = Object.assign({},options,theme.themes.default)
	}
}

export default theme;