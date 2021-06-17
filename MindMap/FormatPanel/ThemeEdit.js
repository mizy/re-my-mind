import React, { PureComponent } from "react";
import { Button, Icon, Tooltip } from "antd";
const MM = window.MM;
const themes = [
	["default", require("../images/default.png").default],
	["stright", require("../images/stright.png").default],
	["box", require("../images/box.png").default]];

export default class ThemeEdit extends PureComponent {

	state = {}

	componentDidMount() {
		this.setState({
			theme: this.props.app.page.data.theme || "default"
		});
	}

	async setTheme(theme) {
		const {page} = this.props.app;
		page.setTheme(theme); 
		
		page.updateSubtree('updateShape');//所有节点更新形状
		requestAnimationFrame(()=>{
			page.updateSubtree('updateContentRect');//所有节点更新宽高
			page.updateSubtree();// 所有节点更新布局位置
			page.update();
		})
		this.setState({
			theme
		});
	
	}

	render() {
		const { theme } = this.state;

		return (
			<div className="theme-save">
				<ul>
					{themes.map(item => (
						<li key={item[0]} onClick={() => { this.setTheme(item[0]); }} className={theme === item[0] ? "active" : ""}>
							<img src={item[1]} />
						</li>
					))}
				</ul>
			</div>
		);
	}
}
