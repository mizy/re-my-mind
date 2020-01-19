import React, { PureComponent, Fragment } from "react";
import { Button, Dropdown, Icon, Upload, Checkbox } from "antd";
const MM = window.MM;

import { SketchPicker } from "react-color";
export default class CanvasEdit extends PureComponent {
	state = {}
	componentDidMount() {
		this.setState({
			color: this.props.mind.state.backgroundColor,
			imageUrl: this.props.mind.state.backgroundImage,
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

	changeBackUrl = info => {
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
		const { color, imageUrl, repeat, size } = this.state || {};
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

							<Button>
								<Icon fill={color} type="bg-colors" />
							</Button>
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
							showUploadList={false}
							action="/api/bucket/upload"
							onChange={this.changeBackUrl}
						>
							{imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: "100%" }} /> : <div>
								<Icon type={this.state.loading ? "loading" : "plus"} />
								<div className="ant-upload-text">上传</div>
							</div>}
						</Upload>
					</div>
					<div className="right-panel-card-children">
						<Checkbox
							checked={size}
							onChange={this.onSizeChange}
						>
							拉伸
						</Checkbox>
					</div>
					<div className="right-panel-card-children">
						<Checkbox
							checked={repeat}
							onChange={this.onRepeatChange}
						>
							重复平铺
						</Checkbox>
					</div>
				</div >
			</Fragment >
		);
	}
}
