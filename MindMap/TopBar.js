import React, { PureComponent } from "react";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { Icon, Popover, Button, Modal, Input, Dropdown, Menu, Divider, message, Tooltip } from "antd";
const MM = window.MM;
class TopBar extends PureComponent {
	scale = 1;
	state = {
		selectedKeys: ["3"],
		show3dView: false
	};

	componentDidMount() {
		this.setState({
			selectedKeys: [MM.App.current.getLayout().id],
			name: this.props.rootName
		});
		MM.subscribe("item-select", (item) => {
			this.setState({
				selectedKeys: [item.getLayout().id]
			});
		});
		MM.subscribe("redo", (index) => {
			this.setState({
				historyIndex: index
			});
		});
		MM.subscribe("undo", (index) => {
			console.log(index);
			this.setState({
				historyIndex: index
			});
		});
		MM.subscribe("save", () => {
			this.save();
		});
		this.startTimeout();
	}

	componentWillUnmount() {
		clearTimeout(this.timeout);
	}

	startTimeout() {
		this.timeout && clearTimeout(this.timeout);
		this.timeout = setTimeout(() => {
			this.save();
			this.startTimeout();
		}, 30000);
	}

	save = () => {
		const { record, name } = this.state;
		let data = this.props.app.map.toJSON();
		this.getBackgroundData(data);
		message.info("保存")
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
		const action = new MM.Action.InsertNewItem(item, item.getChildren().length);
		this.props.app.action(action);
		MM.Command.Edit.execute();
		MM.publish("command-child");
	};

	addItem = () => {
		var item = MM.App.current;
		let action;
		if (item.isRoot()) {
			action = new MM.Action.InsertNewItem(item, item.getChildren().length);
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
		this.scale = this.scale * val;
		const node = this.props.app.map.getRoot().getDOM().node;
		node.style.transform = `scale(${this.scale})`;
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
		MM.App.map.center();
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
		const root = document.querySelector(".re-mind > .item");
		root.style.padding = "50px";
		html2canvas(
			root,
			{ useCORS: true }
		).then(canvas => {
			canvas.toBlob(blob => {
				saveAs(blob, this.state.name + ".png");
			});
			root.style.padding = "0";
		});
	}

	render() {
		const { rootName, message, type } = this.props;
		const { name } = this.state;
		return (
			<div className="minder-header">

				<Input
					value={name || rootName}
					onChange={this.changeName}
					className="title-input"
				/>

				<div className="button-area">
					<div className="handle-button">
						<Tooltip title="保存">
							<i className="iconfont icon-editor-save" onClick={this.save}></i>
							{/* <Icon type="save" onClick={this.save} /> */}
						</Tooltip>
					</div>
					<div className={"handle-button"}>
						<i
							className={`iconfont icon-editor-undo ${
								MM.App.historyIndex > 0 ? "" : "disabled"
								}`}
							onClick={MM.App.historyIndex > 0 && this.undo}
						/>
					</div>
					<div className={"handle-button "}>
						<i
							className={`iconfont icon-editor-redo ${
								MM.App.historyIndex < MM.App.history.length ? "" : "disabled"
								}`}
							onClick={MM.App.historyIndex < MM.App.history.length && this.redo}
						/>
					</div>
					{/* <div className="handle-button">
						<Icon
							type="zoom-in"
							onClick={() => {
								this.zoom(1.2);
							}}
						/>
					</div>
					<div className="handle-button">
						<Icon
							type="zoom-out"
							onClick={() => {
								this.zoom(0.8);
							}}
						/>
					</div> */}
					<div className="handle-button">
						<Tooltip title="插入子主题">
							<i className="iconfont icon-editor-insert-child" onClick={this.add}></i>
						</Tooltip>
					</div>
					<div className="handle-button">
						<Tooltip title="插入同级主题">
							<i className="iconfont icon-editor-insert-brother" onClick={this.addItem}></i>
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
									selectedKeys={this.state.selectedKeys}
								>
									<Menu.Item
										key="map"
									>
										脑图
									</Menu.Item>
									<Menu.Item
										key="map-right"
									>
										脑图-右
									</Menu.Item>
									<Menu.Item
										key="map-left"
									>
										脑图-左
									</Menu.Item>
									<Menu.Divider />
									<Menu.Item
										key="graph-top"
									>
										架构图-上
									</Menu.Item>
									<Menu.Item
										key="graph-bottom"
									>
										架构图-下
									</Menu.Item>
									<Menu.Item
										key="graph-left"
									>
										架构图-左
									</Menu.Item>
									<Menu.Item
										key="graph-right"
									>
										架构图-右
									</Menu.Item>
									<Menu.Divider />
									<Menu.Item
										key="tree-right"
									>
										树图-右
									</Menu.Item>
									<Menu.Item
										key="tree-left"
									>
										树图-左
									</Menu.Item>
								</Menu>
							}>
							<i className="iconfont icon-editor-org"></i>
						</Dropdown>
					</div>
					<div className="handle-button">
						<Tooltip title="格式化">
							<i className="iconfont icon-editor-format" onClick={this.format} />
						</Tooltip>
					</div>
					<div className="handle-button">{message}</div>
				</div>
				<Popover content={<div className="key-list">
					<div><span>保存</span><span>⌘/ctrl+S</span></div>
					<div><span>撤销</span><span>⌘/ctrl+Z</span></div>
					<div><span>回退</span><span>⌘/ctrl+shift+Z</span></div>
					<div><span>插入子节点</span><span>Tab</span></div>
					<div><span>插入同级节点</span><span>Enter</span></div>
					<div><span>复制</span><span>⌘/ctrl+C</span></div>
					<div><span>剪切</span><span>⌘/ctrl+X</span></div>
					<div><span>粘贴</span><span>⌘/ctrl+V</span></div>
					<div><span>折叠</span><span>F</span></div>
					<div><span>编辑</span><span>Space</span></div>
					<div><span>结束编辑</span><span>Enter</span></div>
					<div><span>退出编辑</span><span>Esc</span></div>
					<div><span>换行</span><span>shift+Space</span></div>
					<div><span>加粗</span><span>ctrl+B</span></div>
					<div><span>斜体</span><span>ctrl+I</span></div>
					<div><span>移动节点</span><span>方向键</span></div>
					<div><span>脑图居中</span><span>C</span></div>
					<div><span>移动脑图</span><span>W/A/S/D</span></div>
				</div>} >
					<Icon type="question-circle" />
				</Popover>
				<Button.Group className="button-area-footer">
					<Tooltip title="大纲">
						<Button
							type={type === "mainText" ? "primary" : "default"}
							onClick={() => {
								this.props.mind.showRightPanel("mainText");
							}}>
							<Icon type="unordered-list" />
						</Button>
					</Tooltip>
					{/* <Button
						type={type === "3d" ? "primary" : "default"}
						onClick={() => {
							this.props.mind.show3d();
						}}>
						3D
					</Button> */}
					<Tooltip title="图标">
						<Button
							type={type === "icon" ? "primary" : "default"}
							onClick={() => {
								this.props.mind.showRightPanel("icon");
							}}>
							<Icon type="star" />
						</Button>
					</Tooltip>
					<Tooltip title="格式">
						<Button
							type={type === "format" ? "primary" : "default"}
							onClick={() => {
								this.props.mind.showRightPanel("format");
							}}>
							<Icon type="highlight" />
						</Button>
					</Tooltip>
					<Tooltip title="导出为图片">
						<Button
							key="export"
							type={"default"}
							onClick={() => {
								this.export();
							}}>
							<Icon type="export" />
						</Button>
					</Tooltip>
				</Button.Group>
			</div>
		);
	}
}
export default TopBar;
