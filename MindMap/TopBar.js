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
import CommandKey from "./Modals/CommandKey";
import ImportFile from "./Import/ImportFile";
import History from "./Modals/History/index.js";
const MM = window.MM;

class TopBar extends PureComponent {
	state = {
		scale: 1,

		selectedKeys: ["3"],
		show3dView: false
	};

	componentDidMount() {
		this.oldData = JSON.stringify(this.props.nowData);
		const { root = {} } = this.props.nowData || {};
		const { children = [] } = root;
		const noFold = children.find(item => item.collapsed !== 1);
		if (!noFold) {
			this.setState({
				foldStatus: true
			});
		}
		this.setState({
			selectedKeys: [MM.App.current.getLayout().id]
		});
		MM.subscribe("item-select", item => {
			this.setState({
				selectedKeys: [item.getLayout().id]
			});
		});
		MM.subscribe("redo", index => {
			this.setState({
				historyIndex: index
			});
		});
		MM.subscribe("undo", index => {
			console.log(index);
			this.setState({
				historyIndex: index
			});
		});
		MM.subscribe("save", () => {
			this.save();
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
			this.save(false);
			this.startTimeout();
		}, 120000);
	}

	save = async () => {
		const { record = {} } = this.props;
		let data = this.props.app.map.toJSON();
		this.getBackgroundData(data);
		const json = JSON.stringify(data);
		// 一样的话直接保存
		if (this.oldData === json) return message.success("保存成功");
		this.oldData = json;


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
		const item = MM.App.current;
		const action = new MM.Action.InsertNewItem(
			item,
			item.getChildren().length
		);
		this.props.app.action(action);
		MM.Command.Edit.execute();
		MM.publish("command-child");
	};

	addItem = () => {
		var item = MM.App.current;
		let action;
		if (item.isRoot()) {
			action = new MM.Action.InsertNewItem(
				item,
				item.getChildren().length
			);
		} else {
			const parent = item.getParent();
			const index = parent.getChildren().indexOf(item);
			action = new MM.Action.InsertNewItem(parent, index + 1);
		}
		MM.App.action(action);
		MM.Command.Edit.execute();
		MM.publish("command-sibling");
	};

	zoom = val => {
		let { scale } = this.state;
		scale = scale * val;
		if (scale < 0.05) return;
		const node = this.props.app.map.getRoot().getDOM().node;
		node.style.transition = "transform 0.3s ease-in";
		node.style.transform = `scale(${scale})`;
		clearTimeout(this.transitionTimeout);
		this.transitionTimeout = setTimeout(() => {
			node.style.transition = "";
		}, 500);
		this.setState({
			scale
		});
	};

	changeNodeType = (value, key) => {
		const layout = MM.Layout.getById(value);
		const action = new MM.Action.SetLayout(MM.App.current, layout);
		MM.App.action(action);
		this.setState({
			selectedKeys: [value]
		});
	};

	format = () => {
		const root = MM.App.map.getRoot();
		root._dom.node.style.transition = "left 0.3s ease-in,top 0.3s ease-in";
		MM.App.map.center();
		clearTimeout(this.transitionTimeout);
		this.transitionTimeout = setTimeout(() => {
			root._dom.node.style.transition = "";
		}, 500);
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
		html2canvas(document.querySelector(".re-mind > .item"), {
			useCORS: true
		}).then(canvas => {
			canvas.toBlob(blob => {
				saveAs(blob, this.state.name + ".png");
			});
		});
	};

	addNote = () => {
		MM.App.current.startNote();
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
		const { type, mind, mindType = "mind", readonly, record = {} } = this.props;
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
					{!readonly && (
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
										MM.App.historyIndex > 0
											? ""
											: "disabled"
										}`}
									onClick={
										MM.App.historyIndex > 0 && this.undo
									}
								/>
							</div>
							<div className={"handle-button "}>
								<i
									className={`iconfont icon-editor-redo ${
										MM.App.historyIndex <
											MM.App.history.length
											? ""
											: "disabled"
										}`}
									onClick={
										MM.App.historyIndex <
										MM.App.history.length && this.redo
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
											<Menu.Item key="graph-top">
												架构图-上
											</Menu.Item>
											<Menu.Item key="graph-bottom">
												架构图-下
											</Menu.Item>
											<Menu.Item key="graph-left">
												架构图-左
											</Menu.Item>
											<Menu.Item key="graph-right">
												架构图-右
											</Menu.Item>
											<Menu.Divider />
											<Menu.Item key="tree-right">
												树图-右
											</Menu.Item>
											<Menu.Item key="tree-left">
												树图-左
											</Menu.Item>
										</Menu>
									}
								>
									<i className="iconfont icon-editor-org"></i>
								</Dropdown>
							</div>
						</Fragment>
					)}
					<div className="handle-button">
						<Tooltip title="归位">
							<i
								className="iconfont icon-guiwei"
								onClick={this.format}
							/>
						</Tooltip>
					</div>

					<div className="handle-button">
						<Tooltip title="放大">
							<Icon
								type="zoom-in"
								onClick={() => {
									this.zoom(1.2);
								}}
							/>
						</Tooltip>
					</div>
					<div className="handle-button">
						<Tooltip title="缩小">
							<Icon
								type="zoom-out"
								onClick={() => {
									this.zoom(0.8);
								}}
							/>
						</Tooltip>
					</div>
					<div className="handle-button">
						<Tooltip title="恢复成100%">
							<i
								className="iconfont "
								style={{ fontSize: 14 }}
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
							onClick={() => {
								this.props.mind.showRightPanel("icon");
							}}
						>
							<Icon type="star" />
						</Button>
					</Tooltip>}
					{!readonly && <Tooltip title="格式">
						<Button
							type={type === "format" ? "primary" : "default"}
							onClick={() => {
								this.props.mind.showRightPanel("format");
							}}
						>
							<Icon type="highlight" />
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
						<Button icon="more" />
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
