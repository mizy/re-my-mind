import React, { PureComponent, Fragment } from "react";
import { Button, Dropdown, Icon, Upload, Checkbox, Modal } from "antd";
import {DeleteOutlined} from '@ant-design/icons';
import { SketchPicker } from "react-color";
import {LoadingOutlined,PlusOutlined} from '@ant-design/icons'

export default class CanvasEdit extends PureComponent {
	state = {
		fileList: []
	}
	componentDidMount() {
		const imageUrl = this.props.mind.state.backgroundImage;
		this.app = this.props.app;
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
		if(!this.app.page.data.style ){
			this.app.page.data.style  = {}
		}
		
	}

	changeStyle(key,value){
		this.app.page.data.style[key] = value;
		this.app.page.updateContainerStyle();
	}

	changeBackGroundColor = e => {
		const rgb = e.rgb;
		const color = `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`;
		this.setState({
			color
		});
		this.app.page.data.style.backgroundColor = color;
		this.app.page.updateContainerStyle();
	};

	clearBack = () => {
		const color = undefined;
		this.setState({
			color
		});
		this.app.page.data.style.backgroundColor = null;
		this.app.page.updateContainerStyle();
	}

	handlePreview = async file => {
		this.setState({
			previewVisible: true
		});
	};

	handleCancel = () => {
		this.setState({
			previewVisible: false
		});
	}

	changeBackUrl = info => {
		
		if(!info.fileList || !info.fileList.length){
			this.setState({
				fileList:undefined
			})
			this.changeStyle("backgroundImage",null)
			return 	false
		}
		const interval = setInterval(()=>{
			if(info.fileList[0].thumbUrl)
			{
				clearInterval(interval);
				this.setState({ loading: true ,fileList:info.fileList});
				this.changeStyle("backgroundImage",`url(${info.fileList[0].thumbUrl})`)
			}			
		},30)

	}

	onSizeChange = (e) => {
		this.setState({
			size: e.target.checked
		});
		this.changeStyle("backgroundSize",e.target.checked ? "100% 100%" : "auto") 
	}

	onRepeatChange = (e) => {
		this.setState({
			repeat: e.target.checked
		});
		this.changeStyle("backgroundRepeat",e.target.checked ? "repeat" : "no-repeat") 
	}

	render() {
		const { color, previewVisible, previewImage, fileList, repeat, size } = this.state || {};

		return (
			<Fragment>
				<div className="right-panel-card">
					<div className="panel-title">背景色</div>
					<div className="right-panel-card-children">
						<Dropdown
							trigger="click"
							overlay={
								<SketchPicker
									color={color}
									onChangeComplete={this.changeBackGroundColor}
								/>
							}>
							<div
								className="color-pick-demo"
								style={{ backgroundColor: color }}></div>
						</Dropdown>
						<div >
							<DeleteOutlined onClick={this.clearBack} style={{ cursor: "pointer" }} />
						</div>
					</div>
				</div >
				<div className="right-panel-card">
					<div className="panel-title">背景图片</div>
					<div className="right-panel-card-children">
						<Upload
							name="avatar"
							listType="picture-card"
							className="avatar-uploader"
							fileList={fileList}
							onChange={this.changeBackUrl}
							onPreview={this.handlePreview}
							beforeUpload={()=>{this.setState({fileList:undefined});return false}}
						>
							{(fileList || []).length > 0 ? null
								: <div>
									{this.state.loading?<LoadingOutlined />:<PlusOutlined />}
									<div className="ant-upload-text">上传</div>
								</div>}
						</Upload>
						<Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
							<img alt="example" style={{ width: "100%" }} src={fileList && fileList[0] ? fileList[0].url : false} />
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
