import React, { PureComponent } from "react";
import { get } from "lodash";
import { Modal, message, Upload, Spin } from "antd";
import "./importFile.less";

const { Dragger } = Upload;
class ImportFromFile extends PureComponent {

	state = {
		selectName: "mind",
		loading: false
	}

	show = () => {
		this.setState({
			visible: true
		});
	}

	close = () => {
		this.setState({
			visible: false
		});
	}

	render() {
		const { mind } = this.props;
		const { loading, visible } = this.state;
		const { record = {} } = this.props.mind.state;
		const { catalog = {} } = record;
		let props = {
			name: "file",
			multiple: true,
			onChange: (info) => {

				message.error(`导入失败:${info.file.error.message}`);
				this.setState({
					loading: false
				});
			}
		};

		return (
			<Modal
				title="从文件导入"
				visible={visible}
				maskClosable={true}
				onCancel={this.close}
				afterClose={() => {
					this.setState({
						loading: false
					});
				}}
				destroyOnClose
				footer={null}
				width={600}
				className="import-from-file-modal"
			>
				<div className="main-box">
					<Dragger {...props}>
						<Spin spinning={loading}>
							<p className="ant-upload-drag-icon">

							</p>
							<p className="ant-upload-text">
								点击或拖拽文件到此处进行上传
							</p>
							{
								<p className="ant-upload-hint">
									支持xmind格式文件上传
								</p>
							}
						</Spin>
					</Dragger>
				</div>
			</Modal>
		);
	}
}
export default ImportFromFile;
