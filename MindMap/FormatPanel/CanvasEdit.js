import React, { PureComponent, Fragment } from "react";
import { Button, Dropdown, Icon, Upload, Checkbox, Modal } from "antd";
const MM = window.MM;

import { SketchPicker } from "react-color";
export default class CanvasEdit extends PureComponent {
	state = {
		fileList: []
	}
	componentDidMount() {
		const imageUrl = this.props.mind.state.backgroundImage;
		const fileList = imageUrl ? [{
			uid: "-1",
			name: "背景",
			url: imageUrl,
			status: "done"
		}] : [];
		this.setState({
			color: this.props.mind.state.backgroundColor,
			fileList,
			imageUrl,
			repeat: this.props.mind.state.backgroundRepeat === "repeat",
			size: this.props.mind.state.backgroundSize === "100% 100%"
		});
	}

	changeBackGroundColor = e => {
		const rgb = e.rgb;
		const color = `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`;
		this.setState({
			color
		});
		this.props.mind.setState({
			backgroundColor: color
		});
	};

	clearBack = () => {
		const color = undefined;
		this.setState({
			color
		});
		this.props.mind.setState({
			backgroundColor: null
		});
	}

	handlePreview = async file => {
		this.setState({
			previewImage: file.url,
			previewVisible: true
		});
	};

	handleCancel = () => {
		this.setState({
			previewVisible: false
		});
	}

	changeBackUrl = info => {
		this.setState({
			fileList: info.fileList
		});
		if (info.fileList.length < 1) {
			this.props.mind.setState({
				backgroundImage: null
			});
		}

		if (info.file.status === "uploading") {
			this.setState({ loading: true });
			return;
		}
		if (info.file.status === "done") {
			this.setState({
				imageUrl: info.file.response.data.url,
				loading: false
			});
			this.props.mind.setState({
				backgroundImage: info.file.response.data.url
			});
		}
	}

	onSizeChange = (e) => {
		this.setState({
			size: e.target.checked
		});
		this.props.mind.setState({
			backgroundSize: e.target.checked ? "100% 100%" : "auto"
		});
	}

	onRepeatChange = (e) => {
		this.setState({
			repeat: e.target.checked
		});
		this.props.mind.setState({
			backgroundRepeat: e.target.checked ? "repeat" : "no-repeat"
		});
	}

	render() {
		const { color, previewVisible, previewImage, fileList, repeat, size } = this.state || {};

		return (
			<Fragment>
				<div className="right-panel-card">
					<div className="panel-title">背景色</div>
					<Dropdown
						trigger="click"
						overlay={
							<SketchPicker
								color={color}
								onChangeComplete={this.changeBackGroundColor}
							/>
						}>
						<div className="right-panel-card-children">
							<div className="color-pick-demo" style={{ backgroundColor: color }}></div>
							<Button.Group>
								<Button>
									<Icon fill={color} type="bg-colors" />
								</Button>
								<Button onClick={this.clearBack}>
									<Icon type="delete" />
								</Button>
							</Button.Group>
						</div>
					</Dropdown>
				</div >
				<div className="right-panel-card">
					<div className="panel-title">背景图片</div>
					<div className="right-panel-card-children">
						<Upload
							name="avatar"
							listType="picture-card"
							className="avatar-uploader"
							fileList={fileList}
							onPreview={this.handlePreview}
							action="/api/bucket/upload"
							onChange={this.changeBackUrl}
						>
							{fileList.length > 0 ? null
								: <div>
									<Icon type={this.state.loading ? "loading" : "plus"} />
									<div className="ant-upload-text">上传</div>
								</div>}
						</Upload>
						<Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
							<img alt="example" style={{ width: "100%" }} src={previewImage} />
						</Modal>
						<div >
							<Checkbox
								checked={size}
								onChange={this.onSizeChange}
							>
								拉伸
							</Checkbox>
							<Checkbox
								style={{ marginLeft: 0 }}
								checked={repeat}
								onChange={this.onRepeatChange}
							>
								重复平铺
							</Checkbox>
						</div>

					</div>

				</div >
			</Fragment >
		);
	}
}
