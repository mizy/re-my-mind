import React, { PureComponent } from "react";
import 'antd/dist/antd.css'
import "./index.less";
import Remind from "../src/app.js";
import { message, Spin } from "antd";
import MainText from "./MainText";
import TopBar from "./TopBar";
import RightBar from "./Rightbar";
import axios from 'axios'
const data = require("./json.json");
window.updateTimes = 0;
window.layoutItemTimes = 0;

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

	readonly = false

	componentDidMount() {
		this.init( {
			root: {
				text: "Remind",
				layout: "map"
			},
			theme: "default"
		});
	}

	queryData(path = "reminds/main.remind") {
		this.path = path;
		axios.get("/remind-api/get?path=" + path).then(({ data }) => {
			if (data.success) {
				this.app.controller.setScale(1);
				this.app.page.setData(JSON.parse(data.data));
				this.app.page.asyncShow();
				this.setState({
					nowData: this.app.page.data
				})

			} else {
				throw new Error(data.message)
			}
		}).catch(err => {
			message.error(err.message)
		});
	}

	setData(res) {
		this.setState({
			rootName: res.title,
			loading: false,
			nowData: data
		});

	}

	init(data) {
		// 更改主题颜色
		Remind.theme.themes.default.colors = this.colors;
		Remind.theme.themes.default.lineShape = 'taper';

		// 初始化脑图
		this.app = new Remind(this.appRef, {
			data
		});
		window.remind = this.app;
		this.app.readonly = this.readonly;

		this.setState({
			rootName: data.root.text,
			loading: false,
			nowData: data
		});
		this.app.on('item:beforeToggle', msg => {
			this.setState({
				loading: true
			});
		});
		this.app.on('item:afterToggle', msg => {
			this.setState({
				loading: false
			});
		});
		this.app.on("item:change", msg => {
			clearTimeout(this.changeTimeout);
			this.changeTimeout = setTimeout(() => {
				this.setState({
					message: "历史记录" + this.app.historyIndex,
					flag: !this.state.flag,
					nowData: this.app.page.toJSON()
				});
			}, 500);
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

	showMindText = (value) => {
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
							rootName={rootName}
							app={this.app} mind={this} message={message} />
					)}

					<div className="minder-content" style={{
						height: "calc(100vh - 60px)",
					}}>
						<div
							style={{
								flex: 1,
								backgroundRepeat, backgroundSize, backgroundColor, backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
								display: mindType === "mind" ? "block" : "none",
								overflow: "hidden",

							}}
							ref={ref => {
								this.appRef = ref;
							}}
						/>
						<MainText app={this.app} mindType={mindType} showMindText={this.showMindText} nowData={nowData} />
						<div
							className="rightbar"
							style={{
								width: !shrink ? 300 : 0,
								height: "calc(100vh - 60px)",
								display: mindType === "mind" ? "block" : "none"
							}}>
							{this.app && <RightBar app={this.app} nowData={nowData} mind={this} type={type} />}
						</div>
					</div>
				</div>
			</Spin>
		);
	}

	componentWillUnmount() {
		clearTimeout(this.changeTimeout)
		this.app && this.app.destroy();
	}
}
export default Minder;