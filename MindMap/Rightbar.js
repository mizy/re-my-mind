import React, { PureComponent } from "react";
import { Tabs, Icon, message } from "antd";
import TextEdit from "./FormatPanel/TextEdit";
import CanvasEdit from "./FormatPanel/CanvasEdit";
import ItemStyle from "./FormatPanel/ItemStyle";
import iconList from "./icon";
const { TabPane } = Tabs;
const MM = window.MM;
export default class Rightbar extends PureComponent {
	state = {};

	componentDidMount() {
		MM.subscribe("item-select", (item) => {
			this.setState({
				nowItem: item
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
			const list = iconList[key];
			list.forEach(item => {
				str += `.mind-icon-${item[0]} {background:url(${(item[1].default)})}`;
			});
		}
		const style = document.createElement("style");
		style.innerHTML = str;
		style.id = "mind-icons";
		document.head.appendChild(style);
	}

	renderMainTextChildren(childrens) {
		return childrens.map(item => {
			return (
				<li className="mainText-item">
					<span dangerouslySetInnerHTML={{ __html: item.text }}></span>
					<ul className="childrens">
						{this.renderMainTextChildren(item.children || [])}
					</ul>
				</li>
			);
		});
	}

	renderMainText() {
		const { nowData } = this.props;
		if (!nowData) {
			return null;
		}
		return (
			<div className="mainText-content">
				<div className="mainText-item">
					<span>{nowData.root.text}</span>
					<ul className="childrens">
						{this.renderMainTextChildren(nowData.root.children || [])}
					</ul>
				</div>
			</div>
		);
	}

	onIconClick(key, item) {
		if (!this.state.nowItem) {
			return message.info("请先选择节点");
		}
		const { app } = this.props.mind;

		app.current.setIcon("mind-icon-" + item[0], key);
	}

	deleteIconClick(key) {
		if (!this.state.nowItem) {
			return message.info("请先选择节点");
		}
		const { app } = this.props.mind;
		app.current.setIcon(false, key);
	}

	renderIconList() {
		const types = [];
		for (let key in iconList) {
			const list = iconList[key].map(item => {
				return (
					<i onClick={() => {
						this.onIconClick(key, item);
					}} className={"mind-icon-" + item[0]} />
				);
			});
			const type = (
				<div className="icon-item">
					<span>
						{key} <Icon onClick={() => this.deleteIconClick(key)} type="delete" />
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
			case "mainText":
				return this.renderMainText();
			case "icon":
				return this.renderIconList();
		}
		const { nowItem } = this.state;
		// format
		return (
			<Tabs defaultActiveKey="1">
				<TabPane tab="样式" key="1">
					{nowItem && <TextEdit nowItem={nowItem} />}
					{nowItem && <ItemStyle nowItem={nowItem} />}
				</TabPane>
				<TabPane tab="画布" key="2">
					<CanvasEdit mind={mind} />
				</TabPane>
			</Tabs>
		);
	}
}
