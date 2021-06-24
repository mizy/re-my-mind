import { PureComponent, Fragment } from "react";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import {
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
import { MoreOutlined, StarOutlined, HighlightOutlined, ZoomOutOutlined, ZoomInOutlined } from '@ant-design/icons'
import CommandKey from "./Modals/CommandKey";
import ImportFile from "./Import/ImportFile";
import FileManager from './Modals/FileManager';
// import History from "./Modals/History/index.js";
import { MenuOutlined,LaptopOutlined , SaveOutlined, FullscreenOutlined, FolderOpenOutlined, FolderOutlined, FileImageOutlined, ImportOutlined, ExportOutlined, CloudDownloadOutlined, UploadOutlined } from '@ant-design/icons'

class TopBar extends PureComponent {
	state = {
		scale: 1,
		selectedKeys: ["3"],
		show3dView: false
	};

	componentDidMount() {
		const { nowData, app } = this.props;
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
			this.setState({ scale })
		});

		app.on("change", () => {
			this.setState({
				historyIndex: app.history.historyIndex
			})
		})
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
		}, 30000);
	}

	save = async (flag) => {
		if(!this.nowPath){
			return this.saveFile();
		}
		let data = this.props.app.page.toJSON();
		const res = await fetch('/remind-api/save', {
			method: "POST",
			body: JSON.stringify({
				path: 'reminds/main.remind',
				data: JSON.stringify(data)
			})
		}).then(res => res.json()).then(res => {
			if (!res.success) {
				message.error("保存失败!", res.message);
				return false;
			}
			return true;
		}).catch(err => {
			message.error(err.message)
		});
		if (flag !== false && res)
			message.success("保存成功");
	};

	undo = () => {
		const { history } = this.props.app;
		history.history[history.historyIndex - 1].undo();
		history.historyIndex--;
		this.setState({
			historyIndex: history.historyIndex
		});
	};

	redo = () => {
		const { history } = this.props.app;
		history.history[history.historyIndex].perform();
		history.historyIndex++;
		this.setState({
			historyIndex: history.historyIndex
		});
	};

	add = () => {
		const { app } = this.props;
		if (!app.page.current) {
			app.page.root.select()
		}
		app.command.execute("InsertChild")
		app.fire("command-child");
	};

	addItem = () => {
		const { app } = this.props;
		if (!app.page.current) {
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
		const { app } = this.props;
		const item = app.page.current || app.page.root;
		app.action.execute('SetLayout', item, value)
		this.setState({
			selectedKeys: [value]
		});
	};

	format = () => {
		const { app } = this.props;
		app.page.center();
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
		html2canvas(document.querySelector(".remind-page"), {
			useCORS: true
		}).then(canvas => {
			const c = document.createElement("canvas");
			const ctx = c.getContext("2d");
			c.width = canvas.width / window.devicePixelRatio + 40;
			c.height = canvas.height / window.devicePixelRatio + 40;
			ctx.fillStyle = '#ffffff';
			ctx.fillRect(0, 0, c.width, c.height);
			ctx.drawImage(canvas, 20, 20, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
 
			c.toBlob(blob => {
				saveAs(blob, (this.state.name || '脑图') + ".png");
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
		const { app: remind } = this.props;
		setTimeout(() => {
			const children = remind.page.root.children;
			children.forEach(item => {
				item.updateVisible(item.children, foldStatus)
			});
			remind.page.root.updateSubtree()
			this.format();
			this.props.mind.setState({
				loading: false
			});
			this.setState({
				foldStatus: !foldStatus
			});
		}, 100);
	}

	openFile = (item)=>{
		if(item.subType === 'mind'){
			this.props.queryData(item.path)
		}
	}

	saveFile = ()=>{
		this.fileManager.show(this.saveToDir,true)
	}

	saveToDir = (path)=>{
		this.nowPath = path;
		this.save();
	}

	render() {
		const { scale, fullscreen, foldStatus } = this.state;
		const { type, app, mind, mindType = "mind", readonly, record = {} } = this.props;
		const { book = {} } = record;
		const { projectVersion = {} } = book;
		return (
			<div className="minder-header">
				<FileManager ref={ref=>{this.fileManager = ref}} />
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
								className={`iconfont icon-editor-undo ${app.history.historyIndex > 0
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
								className={`iconfont icon-editor-redo ${app.history.historyIndex <
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
										<Menu.Item key="fish-left">
											鱼骨图-左
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
								<ZoomInOutlined style={{ fontSize: 14 }} />
							</i>
						</Tooltip>
					</div>
					<div className="handle-button">
						<Tooltip title="缩小">
							<i className="iconfont " onClick={() => {
								this.zoom(0.9);
							}}> <ZoomOutOutlined style={{ fontSize: 14 }} />
							</i>
						</Tooltip>
					</div>
					<div className="handle-button">
						<Tooltip title="恢复成100%">
							<i
								className="iconfont "
								style={{ fontSize: 14, userSelect: "none" }}
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
							<i>
								<FullscreenOutlined
									type={
										!fullscreen
											? "fullscreen"
											: "fullscreen-exit"
									}
									onClick={this.fullScreen}
									style={{ fontSize: 14 }}
								/>
							</i>
						</Tooltip>
					</div>
					<div className="handle-button">
						<Tooltip title="折叠2级节点">
							<i>{foldStatus ? <FolderOutlined
								onClick={this.fold}
								style={{ fontSize: 14 }}
							/> : <FolderOpenOutlined
								onClick={this.fold}
								style={{ fontSize: 14 }} />}</i>
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
					{!readonly && <Tooltip title="格式">
						<Button onClick={()=>{this.fileManager.show(this.openFile)}} icon={<LaptopOutlined style={{cursor:"pointer"}} />} />
					</Tooltip>}
					<Dropdown
						overlay={
							<Menu
								className="more-options"
								onClick={({ domEvent }) =>
									domEvent.stopPropagation()
								}
							>
								<Menu.Item onClick={() => { this.saveFile() }}>
									<SaveOutlined />另存为
								</Menu.Item>
								<Menu.Item
									onClick={() => {
										this.export();
									}}
								>
									<FileImageOutlined />
									导出为图片
								</Menu.Item>
								{!readonly && <Menu.Item
									onClick={() => {
										this.importFile.show();
									}}
								>
									<ImportOutlined />
									从xmind文件导入
								</Menu.Item>}
								<Menu.Item
									onClick={() => {
										message.success("服务端完成")
									}}
								>
									<ExportOutlined />
									导出为xmind
								</Menu.Item>
								<Menu.Item
									onClick={() => {
										message.success("服务端完成")
									}}
								>
									<CloudDownloadOutlined />
									下载
								</Menu.Item>
								<Menu.Item
									onClick={() => {
										message.success("服务端完成")
									}}
								>
									<UploadOutlined />
									上传
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
