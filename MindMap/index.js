import React, { PureComponent } from "react";
import ReactDom from "react-dom";
import "./index.less";
import "../src/index.js";
import { Spin } from "antd";
import TopBar from "./TopBar";
import RightBar from "./Rightbar";
const MM = window.MM;
class Minder extends PureComponent {
	scale = 1;
	colors = [
		"#f17c67",
		"#495A80",
		"#9966CC",
		"#EEE8AB",
		"#FD5B78",
		"#228fbd",
		"#fdb933",
		"#7fb80e",
		"#7bbfea",
		"#6f599c",
		"#fedcbd",
		"#00EBC0",
		"#FF84BA"
	];
	state = {
		loading: true,
		shrink: true,
		selectedKeys: ["3"],
		show3dView: false,
		rootName: "未命名脑图"
	};

	componentDidMount() {
		this.init({
			root: {
				text: "demo",
				layout: "map",
				children: []
			}
		});
	}

	init(data) {
		if (data && data.root && data.root.children) {
			data.root.children.forEach((item, index) => {
				if (!item.color) {
					var r = Math.floor(Math.random() * 256);
					var g = Math.floor(Math.random() * 256);
					var b = Math.floor(Math.random() * 256);
					item.color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
				}
			});
		}
		// 初始化背景
		this.initBackground(data);
		this.app = MM.App.init(this.appRef, {
			rootName: data.root.text || "未命名脑图",
			data,
			layout: MM.Layout.getById("map-right")
		});
		this.app.current.deselect();

		this.setState({
			rootName: data.root.text,
			loading: false,
			nowData: data
		});
		MM.subscribe("item-change", msg => {
			this.setState({
				message: "历史记录" + this.app.historyIndex,
				flag: !this.state.flag,
				nowData: this.app.map.toJSON()
			});
		});
		// 鼠标滚动
		MM.subscribe("mousewheel", (e) => {
			const node = MM.App.map.getRoot().getDOM().node;
			const top = parseInt(node.style.top.split("px")[0], 10);
			const left = parseInt(node.style.left.split("px")[0], 10);
			node.style.top = `${-e.deltaY + top}px`;
			node.style.left = `${-e.deltaX + left}px`;
			e.stopPropagation();
			e.preventDefault();
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
			backgroundColor: data.background.color || "#f8f8f8"
		});
	}

	showRightPanel = type => {
		this.setState({
			show3dView: false
		});
		const { shrink } = this.state;
		if (shrink) {
			this.setState({
				shrink: false,
				type: type
			});
		} else {
			this.setState({
				shrink: type === this.state.type,
				type: type === this.state.type ? "" : type
			});
		}
	};

	setData = data => {
		this.app.map.fromJSON(data);
	};

	render() {
		const {
			rootName,
			message,
			shrink,
			type,
			nowData,
			loading = false,
			backgroundColor = "#F8F8F8",
			backgroundImage,
			backgroundRepeat,
			backgroundSize
		} = this.state;
		return (
			<Spin spinning={loading}>
				<div className={"mind-wrap"} >
					{this.app && (
						<TopBar
							type={type}
							match={this.props.match}
							rootName={rootName}
							app={this.app}
							mind={this}
							message={message}
						/>
					)}

					<div className="minder-content" style={{
						height: "calc(100vh - 60px)"
					}}>
						<div
							style={{
								flexGrow: 1,
								backgroundRepeat, backgroundSize, backgroundColor, backgroundImage: `url(${backgroundImage})`,
								display: !this.state.show3dView ? "block" : "none"
							}}
							ref={ref => {
								this.appRef = ref;
							}}
						/>
						<div
							className="rightbar"
							style={{
								width: !shrink ? 300 : 0,
								height: "calc(100vh - 60px)",
								display: !this.state.show3dView ? "block" : "none"
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
		this.app.destroy();
	}
}
ReactDom.render(<Minder />, document.querySelector("#root"))
