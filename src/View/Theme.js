const theme = {
	themes: {
		default:{
			main: "ellipse",
			second: "box",
			className: "default",
			node: "underline",
			lineShape:"taper"
		}
	},

	registe(name,options){
		theme.themes[name] = Object.assign({},theme.themes.default,{className:name},options);
	}
}

export default theme;