import React, { PureComponent } from "react";
import { Modal, Tooltip, List, Icon, Popconfirm, message } from "antd";
export default class History extends PureComponent {
	state = {};
	async getHistory() {
		this.setState({
			loading: true
		});

		this.setState({
			data: [],
			loading: false
		});
	}

	hide = () => {
		this.setState({
			visible: false
		});
	};

	show = () => {
		this.getHistory();
		this.setState({
			visible: true
		});
	};

	reverse = async item => {
		const res = await service.applyHistory({
			historyId: item.id
		});
		if (res) {
			message.success("还原成功");
			window.location.reload();
		}
	};

	onOk = () => { };

	render() {
		const { visible, data = [], loading } = this.state;
		return (
			<Modal
				title="历史记录"
				confirmLoading={loading}
				visible={visible}
				width={450}
				onClose={this.hide}
				onCancel={this.hide}
				onOk={this.hide}
			>
				<List
					style={{ marginTop: -20 }}
					itemLayout="horizontal"
					pagination={{
						pageSize: 5
					}}
					dataSource={data}
					renderItem={item => (
						<List.Item>
							<List.Item.Meta
								title={
									<div className="mind-history-list">
										<span>{item.title}</span>
										<span>
											<Tooltip title="预览">
												<a
													target="_blank"
													href={`?historyId=${item.id}`}
												>
													<Icon
														style={{ fontSize: 16 }}
														type="eye"
													/>
												</a>
											</Tooltip>
											&nbsp;&nbsp;
											<Popconfirm
												title="确认还原该版本？"
												okText="是"
												cancelText="否"
												onConfirm={() => {
													this.reverse(item);
												}}
											>
												<Tooltip title="还原">
													<Icon
														style={{
															cursor: "pointer"
														}}
														type="sync"
													/>
												</Tooltip>
											</Popconfirm>
										</span>
									</div>
								}
								description={
									<div className="mind-history-list">
										<span>{item.user.nickname}</span>
										<span>
											{(
												item.content.length / 1024
											).toFixed(1)}
											KB &nbsp;{item.gmtModify}{" "}
										</span>
									</div>
								}
							/>
						</List.Item>
					)}
				/>
			</Modal>
		);
	}
}
