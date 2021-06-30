
const theme = {
	/**
	 * @name Remind.theme.themes
	 */
	themes: {
		default:{
			main: "ellipse",
			second: "box",
			className: "default",
			node: "underline",
			lineShape:"taper",
			lineShape2:"bezier",
            colors: ['#fec936', '#f88b15', '#fe7e4d', '#ec6d7a', '#ef3224', '#9bc039', '#67c97e', '#00a7cd', '#40b5c6', '#2da4ff', '#956fe7', '#882e99', '#FF84BA']
		},
		stright:{
			main: "ellipse",
			second: "underline",
			className: "stright",
			node: "underline",
			lineShape:"polyline",
			lineShape2:"bezier",
            colors: ['#fec936', '#f88b15', '#fe7e4d', '#ec6d7a', '#ef3224', '#9bc039', '#67c97e', '#00a7cd', '#40b5c6', '#2da4ff', '#956fe7', '#882e99', '#FF84BA']
		},
		box:{
			main: "ellipse",
			second: "box",
			className: "box",
			node: "blank",
			lineShape:"taper",
			lineShape2:"bezier",
            colors:  ["#5bd4ff", "#38b2ff", "#2589e5", "#1579b5"]
		}
	},

	/**
	 * @name Remind.theme.themes
	 * @param {String} name 注册主题名
	 * @param {Object} options 主题配置，默认继承default主题
	 */
	registe(name,options){
		theme.themes[name] = Object.assign({},theme.themes.default,{className:name},options);
	}
} 
export default theme;