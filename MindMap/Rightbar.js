import React, { PureComponent, Fragment } from "react";
import { Tabs, message } from "antd";
import TextEdit from "./FormatPanel/TextEdit";
import CanvasEdit from "./FormatPanel/CanvasEdit";
import ItemStyle from "./FormatPanel/ItemStyle";
import iconList from "./icon";
import {DeleteOutlined} from '@ant-design/icons'
import ThemeEdit from "./FormatPanel/ThemeEdit";
const { TabPane } = Tabs;
export default class Rightbar extends PureComponent {
	state = {};

	componentDidMount() {
		this.props.app.on("item:select", () => {
			this.setState({
				nowItem: this.props.app.page.current
			});
		});
		this.generateCSS();
	}

	generateCSS() {
		if (document.querySelector("#mind-icons")) {
			return;
		}
		let str = "";
		for (let key in iconList) {
			const list = iconList[key].icons;
			list.forEach(item => {
				str += `.mind-${key}-${item[0]} {background:url(${(item[1].default)})}`;
			});
		}
		const style = document.createElement("style");
		style.innerHTML = str;
		style.id = "mind-icons";
		document.head.appendChild(style);
	}

	onIconClick(key, item) {
		const { app :{page:{current}}} = this.props.mind;
		if (!current) {
			return message.info("请先选择节点");
		}
		current.data.icon = {...current.data.icon,[key]:`mind-${key}-` + item[0]};
		current.updateContent();
		current.update();
	}

	deleteIconClick(key) {
		const { app } = this.props;
		if (!app.page.current) {
			return message.info("请先选择节点");
		}
		const item = app.page.current;
		app.action.execute('SetIcon',item, null,key);
		app.fire("item:change", item);
	}

	renderIconList() {
		const types = [];
		for (let key in iconList) {
			const iconItem = iconList[key];
			const list = iconItem.icons.map(item => {
				return (
					<i onClick={() => {
						this.onIconClick(key, item);
					}} className={`mind-${key}-${item[0]}`} />
				);
			});
			const type = (
				<div className="icon-item">
					<span>
						{iconItem.name} <DeleteOutlined  onClick={() => this.deleteIconClick(key)} type="delete" />
					</span>
					<div className="icon-list">{list}</div>
				</div>
			);
			types.push(type);
		}
		return <div className="icon-content" style={{ width: 300 }}>{types}</div>;
	}

	render() {
		const { type, mind } = this.props;
		switch (type) {
			case "icon":
				return this.renderIconList();
		}
		const { nowItem } = this.state;
		// format
		return (
			<Tabs defaultActiveKey="1">
				<TabPane tab="样式" key="1">
					{nowItem ?
						<Fragment>
							<TextEdit app={this.props.app} nowItem={nowItem} />
							<ItemStyle app={this.props.app} nowItem={nowItem} />
						</Fragment> :
						<div style={{ paddingTop: 100, textAlign: "center", color: "#bebebe" }}>
							请先选择节点
					</div>}
				</TabPane>
				<TabPane tab="画布" key="2">
					<CanvasEdit  app={this.props.app} mind={mind} />
				</TabPane>
				<TabPane tab="主题" key="3">
					<ThemeEdit app={this.props.app} mind={mind} nowItem={nowItem} />
				</TabPane>
			</Tabs>
		);
	}
}
