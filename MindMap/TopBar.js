import React, { PureComponent, Fragment } from "react";
import { get } from "lodash";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import {
	Icon,
	Popover,
	Button,
	Modal,
	Menu,
	Input,
	Dropdown,
	Divider,
	message,
	Tooltip
} from "antd";
import {MoreOutlined,StarOutlined,HighlightOutlined,ZoomOutOutlined,ZoomInOutlined} from '@ant-design/icons'
import CommandKey from "./Modals/CommandKey";
import ImportFile from "./Import/ImportFile";
import History from "./Modals/History/index.js";

class TopBar extends PureComponent {
	state = {
		scale: 1,
		selectedKeys: ["3"],
		show3dView: false
	};

	componentDidMount() {
		const {nowData,app} = this.props;
		this.oldData = JSON.stringify(nowData);
		const { root = {} } = nowData || {};
		const { children = [] } = root;
		const noFold = children.find(item => item.collapsed !== 1);
		if (!noFold) {
			this.setState({
				foldStatus: true
			});
		}
		this.setState({
			selectedKeys: [app.page.root.getLayout().name]
		});
		app.on("item-select", item => {
			this.setState({
				selectedKeys: [item.getLayout().name]
			});
		});
		app.on("redo", index => {
			this.setState({
				historyIndex: index
			});
		});
		app.on("undo", index => {
			console.log(index);
			this.setState({
				historyIndex: index
			});
		});
		app.on("save", () => {
			this.save();
		});
		app.on("zoom", (scale) => {
			this.setState({scale})
		});

		window.addEventListener("resize", this.resize);
		this.startTimeout();
	}

	componentWillUnmount() {
		clearTimeout(this.timeout);
	}

	startTimeout() {
		if (this.props.readonly) return;
		this.timeout && clearTimeout(this.timeout);
		this.timeout = setTimeout(() => {
			// this.save(false);
			this.startTimeout();
		}, 120000);
	}

	save = async () => {
		const { record = {} } = this.props;
		let data = this.props.app.page.toJSON();
		this.getBackgroundData(data);
		Modal.info({
			title:"保存数据",
			content:<pre style={{fontSize:12,maxHeight:400,maxWidth:400,overflow:'auto'}}>
				{JSON.stringify(data,undefined,4)}
			</pre>
		})
		message.success("保存成功");
	};

	getBackgroundData(data) {
		data.background = {
			color: this.props.mind.state.backgroundColor,
			image: this.props.mind.state.backgroundImage,
			repeat: this.props.mind.state.backgroundRepeat,
			size: this.props.mind.state.backgroundSize
		};
	}

	undo = () => {
		this.props.app.history[this.props.app.historyIndex - 1].undo();
		this.props.app.historyIndex--;
		this.setState({
			historyIndex: this.props.app.historyIndex
		});
	};

	redo = () => {
		this.props.app.history[this.props.app.historyIndex].perform();
		this.props.app.historyIndex++;
		this.setState({
			historyIndex: this.props.app.historyIndex
		});
	};

	add = () => {
		const {app} = this.props;
		if(!app.page.current){
			app.page.root.select()
		}
		app.command.execute("InsertChild")
		app.fire("command-child");
	};

	addItem = () => {
		const {app} = this.props;
		if(!app.page.current){
			app.page.root.select()
		}
		app.command.execute("InsertSibling")
		app.fire("command-sibling");
	};

	zoom = val => {
		let { app } = this.props;
		let scale = app.controller.scale;
		scale = scale * val;
		if (scale < 0.05) return; 
		app.controller.scale = scale;
		app.controller.update();
		this.setState({
			scale
		});
	};

	changeNodeType = (value, key) => {
		const {app} = this.props;
		const item = app.page.current || app.page.root;
		app.action.execute('SetLayout',item,value)
		this.setState({
			selectedKeys: [value]
		});
	};

	format = () => {
		const {app} = this.props;
		(app.page.current || app.page.root).center()
	};

	goback = () => {
		window.history.go(-1);
	};

	changeName = e => {
		this.setState({
			name: e.target.value
		});
	};

	export = () => {
		html2canvas(document.querySelector(".re-mind .item"), {
			useCORS: true
		}).then(canvas => {
			canvas.toBlob(blob => {
				saveAs(blob, this.state.name + ".png");
			});
		});
	};

	addNote = () => {
		this.props.app.page.current.startNote();
	};

	resize = () => {
		this.resizeTimeout && clearTimeout(this.resizeTimeout);
		this.resizeTimeout = setTimeout(() => {
			if (document.fullscreenElement) {
				this.setState({
					fullscreen: true
				});
			} else {
				this.setState({
					fullscreen: false
				});
			}
		}, 50);
	}

	fullScreen = () => {
		if (this.state.fullscreen) {
			return this.exitFullscreen();
		}

		this.setState({
			fullscreen: true
		});
		var element = document.documentElement;
		if (element.requestFullscreen) {
			element.requestFullscreen();
		} else if (element.msRequestFullscreen) {
			element.msRequestFullscreen();
		} else if (element.mozRequestFullScreen) {
			element.mozRequestFullScreen();
		} else if (element.webkitRequestFullscreen) {
			element.webkitRequestFullscreen();
		}
	};

	// 退出全屏
	exitFullscreen = () => {
		this.setState({
			fullscreen: false
		});
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
	};

	fold = () => {
		const { foldStatus } = this.state;
		this.props.mind.setState({
			loading: true
		});
		setTimeout(() => {
			const children = MM.App.map.getRoot().getChildren();
			children.forEach(item => {
				item._collapsed = !foldStatus;
				item.update(true);
			});
			MM.App.map.getRoot().update();
			this.format();
			this.props.mind.setState({
				loading: false
			});
			this.setState({
				foldStatus: !foldStatus
			});
		}, 100);
	}

	render() {
		const { scale, fullscreen, foldStatus } = this.state;
		const { type,app, mind, mindType = "mind", readonly, record = {} } = this.props;
		const { book = {} } = record;
		const { projectVersion = {} } = book;
		return (
			<div className="minder-header">

				<div className="main-mind-tab">
					<Tooltip title="切换至思维导图">
						<div
							className={mindType === "mind" ? "active" : ""}
							onClick={() => {
								this.props.mind.showMindText("mind");
							}}
						>
							<i className="iconfont icon-editor-org" />
							<div>思维导图</div>
						</div>
					</Tooltip>
					<Tooltip title="切换至大纲">
						<div
							className={mindType === "text" ? "active" : ""}
							onClick={() => {
								this.props.mind.showMindText("text");
							}}
						>
							<i className="iconfont icon-read" />
							<div>大纲</div>
						</div>
					</Tooltip>
				</div>

				<div className="button-area">
						<Fragment>
							<div className="handle-button">
								<Tooltip title="保存为版本">
									<i
										className="iconfont icon-editor-save"
										onClick={() => {
											this.save(true);
										}}
									></i>
								</Tooltip>
							</div>
							<div className={"handle-button"}>
								<i
									className={`iconfont icon-editor-undo ${
										app.history.historyIndex > 0
											? ""
											: "disabled"
										}`}
									onClick={
										app.history.historyIndex > 0 ? this.undo : undefined
									}
								/>
							</div>
							<div className={"handle-button "}>
								<i
									className={`iconfont icon-editor-redo ${
										app.history.historyIndex <
											app.history.history.length
											? ""
											: "disabled"
										}`}
									onClick={
										app.history.historyIndex <
										app.history.history.length ? this.redo : undefined
									}
								/>
							</div>

							<div className="handle-button">
								<Tooltip title="插入子主题">
									<i
										className="iconfont icon-editor-insert-child"
										onClick={this.add}
									></i>
								</Tooltip>
							</div>
							<div className="handle-button">
								<Tooltip title="插入同级主题">
									<i
										className="iconfont icon-editor-insert-brother"
										onClick={this.addItem}
									></i>
								</Tooltip>
							</div>
							<div className="handle-button">
								<Tooltip title="备注">
									<i
										className="iconfont icon-biji"
										onClick={this.addNote}
									></i>
								</Tooltip>
							</div>
							<div className="handle-button">
								<Dropdown
									overlayClassName="tnt-dropdown"
									overlay={
										<Menu
											style={{ width: 120 }}
											onClick={({ item, key }) => {
												this.changeNodeType(key);
											}}
											selectedKeys={
												this.state.selectedKeys
											}
										>
											<Menu.Item key="map">
												脑图
											</Menu.Item>
											<Menu.Item key="map-right">
												脑图-右
											</Menu.Item>
											<Menu.Item key="map-left">
												脑图-左
											</Menu.Item>
											<Menu.Divider />
											<Menu.Item key="site-top">
												架构图-上
											</Menu.Item>
											<Menu.Item key="site-bottom">
												架构图-下
											</Menu.Item>
											<Menu.Divider />
											<Menu.Item key="tree-right">
												树图-右
											</Menu.Item>
											<Menu.Item key="tree-left">
												树图-左
											</Menu.Item>
											<Menu.Item key="fish-right">
												鱼骨图-右
											</Menu.Item>
										</Menu>
									}
								>
									<i className="iconfont icon-editor-org"></i>
								</Dropdown>
							</div>
						</Fragment>
					<div className="handle-button">
						<Tooltip title="归位">
							<i
								className="iconfont icon-guiwei"
								onClick={this.format}
							/>
						</Tooltip>
					</div>

					<div className="handle-button">
						<Tooltip title="放大" >
							<i onClick={() => {
									this.zoom(1.1);
								}}>
								<ZoomInOutlined style={{fontSize:14}} />
							</i>
						</Tooltip>
					</div>
					<div className="handle-button">
						<Tooltip title="缩小">
							<i className="iconfont " onClick={() => {
								this.zoom(0.9);
							}}> <ZoomOutOutlined style={{fontSize:14}} />
							</i>
						</Tooltip>
					</div>
					<div className="handle-button">
						<Tooltip title="恢复成100%">
							<i
								className="iconfont "
								style={{ fontSize: 14,userSelect:"none" }}
								onClick={() => {
									this.zoom(1 / scale);
								}}
							>
								{(scale * 100).toFixed(0)}%
							</i>
						</Tooltip>
					</div>
					<div className="handle-button">
						<Tooltip title="全屏">
							<Icon
								type={
									!fullscreen
										? "fullscreen"
										: "fullscreen-exit"
								}
								onClick={this.fullScreen}
								style={{ fontSize: 14 }}
							/>
						</Tooltip>
					</div>
					<div className="handle-button">
						<Tooltip title="折叠2级节点">
							<Icon
								type={foldStatus ? "folder" : "folder-open"}
								onClick={this.fold}
								style={{ fontSize: 14 }}
							/>
						</Tooltip>
					</div>
				</div>
				{!readonly && <CommandKey />}
				<Button.Group className="button-area-footer">
					{!readonly && <Tooltip title="图标">
						<Button
							type={type === "icon" ? "primary" : "default"}
							icon={<StarOutlined />}
							onClick={() => {
								this.props.mind.showRightPanel("icon");
							}}
						>
						</Button>
					</Tooltip>}
					{!readonly && <Tooltip title="格式">
						<Button
							type={type === "format" ? "primary" : "default"}
							icon={<HighlightOutlined />}
							onClick={() => {
								this.props.mind.showRightPanel("format");
							}}
						>
						</Button>
					</Tooltip>}
					<Dropdown
						overlay={
							<Menu
								onClick={({ domEvent }) =>
									domEvent.stopPropagation()
								}
							>
								{/* <Divider /> */}
								<Menu.Item
									onClick={() => {
										this.export();
									}}
								>
									<Icon type="export" />
									导出为图片
								</Menu.Item>
								{!readonly && <Menu.Item
									onClick={() => {
										this.importFile.show();
									}}
								>
									<Icon type="upload" />
									从xmind文件导入
								</Menu.Item>}
								<Menu.Item
									onClick={() => {
										message.success("服务端完成")
									}}
								>
									<Icon type="download" />
									导出为xmind
								</Menu.Item>
								<Menu.Item
									onClick={() => {
										this.history.show();
									}}
								>
									<Icon type="history" />
									历史记录
								</Menu.Item>
							</Menu>
						}
						class="project-action-more"
						overlayClassName="tnt-dropdown"
						placement="bottomRight"
					>
						<Button icon={<MoreOutlined />} />
					</Dropdown>
				</Button.Group>
				{readonly && <div className="read-only-bar">预览中</div>}
				<History
					mind={mind}
					id={this.props.id}
					ref={ref => {
						this.history = ref;
					}}
				/>
				<ImportFile
					mind={mind}
					id={this.props.id}
					ref={ref => {
						this.importFile = ref;
					}}
				/>
			</div>
		);
	}
}
export default TopBar;
