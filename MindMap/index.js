import React, { PureComponent } from "react";
import ReactDom from 'react-dom';
import "./index.less";
import "../src/index.js";
import { Spin } from "antd";
import { get } from "lodash";
import MainText from "./MainText";
import TopBar from "./TopBar";
import RightBar from "./Rightbar";

window.updateTimes = 0;
window.layoutItemTimes = 0;
const MM = window.MM;
class Minder extends PureComponent {
	scale = 1;
	colors = ["#2da4ff", "#9bc039", "#882e99", "#FF84BA", "#f88b15", "#00a7cd", "#fe7e4d", "#ec6d7a", "#fec936", "#67c97e", "#ef3224", "#40b5c6", "#956fe7"];
	state = {
		loading: true,
		shrink: true,
		selectedKeys: ["3"],
		show3dView: false,
		rootName: "未命名脑图"
	};

	// readonly = true

	componentDidMount() {
		this.init({
			root: {
				text: "demo",
				layout: "map-right",
				children: []
			},
			theme:"tree"
		});
	}

	setData(res) {
		const data = this.initData(res);
		this.app.setMap(MM.Map.fromJSON(data));
		this.setState({
			rootName: res.title,
			loading: false,
			nowData: data
		});
	}

	initData(data) {

		if (!data) {
			MM.Theme.theme = MM.Theme.themes["default"];
			return data;
		}
		MM.Theme.theme = MM.Theme.themes[data.theme || "default"];
		if (data && data.root && data.root.children) {
			const colors = MM.Theme.theme.colors || MM.App.options.colors;
			data.root.children.forEach((item, index) => {
				if (!item.color) {
					item.color = colors[index % colors.length];
				}
			});
		}
		// 初始化背景
		this.initBackground(data);
		return data;
	}

	init(res) {
		const { title } = res;
		const data = this.initData(res);
		// 初始化脑图
		this.app = MM.App.init(this.appRef, {
			rootName: title || "未命名脑图",
			data,
			colors: this.colors,
			layout: MM.Layout.getById("map-right")
		});

		this.app.readonly = this.readonly;
		this.app.current.deselect();

		this.setState({
			rootName: title,
			loading: false,
			nowData: data
		});
		MM.subscribe('beforeexpand', msg => {
			this.setState({
				loading: true
			});
		});
		MM.subscribe('afterexpand', msg => {
			this.setState({
				loading: false
			});
		});
		MM.subscribe('beforecollapse', msg => {
			this.setState({
				loading: true
			});
		});
		MM.subscribe('aftercollapse', msg => {
			this.setState({
				loading: false
			});
		});
		MM.subscribe("item-change", msg => {
			clearTimeout(this.changeTimeout);
			this.changeTimeout = setTimeout(() => {
				this.setState({
					message: "历史记录" + this.app.historyIndex,
					flag: !this.state.flag,
					nowData: this.app.map.toJSON()
				});
			}, 500);
		});
		// 鼠标滚动
		MM.subscribe("mousewheel", (e) => {
			const node = MM.App.map.getRoot().getDOM().node;
			e.stopPropagation();
			e.preventDefault();
			if (e.ctrlKey) {// 双指
				let { scale } = this.topbar.state;
				scale = scale * (1 - e.deltaY / 50);
				if (scale < 0.05) return;
				node.style.transform = `scale(${scale})`;
				this.topbar.setState({
					scale
				});
				return;
			}
			MM.App.container.scrollLeft += e.deltaX;
			MM.App.container.scrollTop += e.deltaY;
			return;
			 
		});
	}

	/**
	 * 初始化背景板
	 * @param {*} data
	 */
	initBackground(data = {}) {
		if (!data.background) return false;
		this.setState({
			backgroundRepeat: data.background.repeat,
			backgroundSize: data.background.size,
			backgroundImage: data.background.image,
			backgroundColor: data.background.color || undefined
		});
	}

	// 自动旋转
	autoRotate() {
		const distance = 1000;
		let angle = 0;
		this.rotateInterval = setInterval(() => {
			this.graph.cameraPosition({
				x: distance * Math.sin(angle),
				z: distance * Math.cos(angle)
			});
			angle += Math.PI / 180;
		}, 30);
	}

	showRightPanel = value => {
		const { type } = this.state;
		this.setState({
			shrink: type === value,
			type: type === value ? "" : value

		});

	};

	showMindText(value) {
		this.setState({
			mindType: value
		});
	}

	render() {
		const {
			id,
			rootName,
			message,
			shrink,
			type,
			nowData,
			mindType = "mind",
			loading = false,
			backgroundColor,
			backgroundImage,
			backgroundRepeat,
			backgroundSize,
			record,
		} = this.state;
		return (
			<Spin spinning={loading} tip="正在加载中...">
				<div className={"mind-wrap"} >
					{this.app && (
						<TopBar id={id} readonly={this.readonly} record={record} nowData={nowData}
							ref={ref => { this.topbar = ref; }} type={type} mindType={mindType}
							match={this.props.match} rootName={rootName}
							app={this.app} mind={this} message={message} />
					)}

					<div className="minder-content" style={{
						height: "calc(100vh - 60px)"
					}}>
						<div
							style={{
								flex: 1,
								backgroundRepeat, backgroundSize, backgroundColor, backgroundImage: backgroundImage?`url(${backgroundImage})`:'none',
								display: mindType === "mind" ? "block" : "none"
							}}
							ref={ref => {
								this.appRef = ref;
							}}
						/>
						<MainText mindType={mindType} nowData={nowData} />
						<div
							className="rightbar"
							style={{
								width: !shrink ? 300 : 0,
								height: "calc(100vh - 60px)",
								display: mindType === "mind" ? "block" : "none"
							}}>
							{this.app && <RightBar nowData={nowData} mind={this} type={type} />}
						</div>
					</div>
				</div>
			</Spin>
		);
	}

	componentWillUnmount() {
		MM.unsubscribe("item-change");
		MM.unsubscribe("save");
		MM.unsubscribe("item-select");
		MM.unsubscribe("mousewheel");
		this.app && this.app.destroy();
	}
}

ReactDom.render(<Minder />, document.querySelector("#root"))
