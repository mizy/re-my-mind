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
			theme: MM.Theme.theme.className || "default"
		});
	}

	async setTheme(theme) {
		MM.Theme.theme = MM.Theme.themes[theme];
		this.props.mind.setState({
			loading: true
		});
		MM.App.map.resetTheme();
		const children = MM.App.map.getRoot().getChildren() || [];
		children.map(item => {
			item._color = undefined;
			item._data.color = undefined;
		});
		this.props.mind.state.backgroundColor = undefined;

		//!!! 无刷新切换主题性能消耗大，建议保存后重载页面

		// await this.props.mind.topbar.save(false);
		// window.location.reload();

		MM.App._port.className = `re-mind ${theme}`;
		const colors = MM.Theme.theme.colors || MM.App.options.colors;
		if (colors) {
			const root = MM.App.map.getRoot();
			const subChildren = root.getChildren();
			subChildren.map((item, index) => {
				item._color = colors[index % colors.length];
			});
		}
		MM.App.map.resetTheme();
		this.props.mind.setState({
			loading: false
		});
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
						<li onClick={() => { this.setTheme(item[0]); }} className={theme === item[0] ? "active" : ""}>
							<img src={item[1]} />
						</li>
					))}
				</ul>
			</div>
		);
	}
}
