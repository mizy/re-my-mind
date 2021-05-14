const theme = {
	themes: {
		default:{
			main: "ellipse",
			second: "box",
			className: "default",
			node: "underline",
			lineShape:"polyline",
            colors: ['#fec936', '#f88b15', '#fe7e4d', '#ec6d7a', '#ef3224', '#9bc039', '#67c97e', '#00a7cd', '#40b5c6', '#2da4ff', '#956fe7', '#882e99', '#FF84BA']
		}
	},

	registe(name,options){
		theme.themes[name] = Object.assign({},theme.themes.default,{className:name},options);
	}
}

export default theme;