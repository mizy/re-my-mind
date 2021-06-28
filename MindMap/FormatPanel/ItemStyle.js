import React, { PureComponent } from "react";
import { Button, Dropdown, Icon, Select } from "antd";
import { SketchPicker } from "react-color";
import { BgColorsOutlined, DeleteOutlined } from '@ant-design/icons'
const { Option } = Select;
/**
 * 背景样式
 */
export default class StyleEdit extends PureComponent {
	state = {
		color: "#f8f8f8"
	};

	componentDidMount() {
		this.syncNowItem(this.props.nowItem);
	}

	componentWillReceiveProps(props) {
		if (props.nowItem !== this.props.nowItem) {
			this.syncNowItem(props.nowItem);
		}
		return props;
	}

	// 同步数据
	syncNowItem(item) {
		const content = item.dom;
		this.setState({
			color: content.style.backgroundColor || undefined
		});
		this.setState({
			shape: item.getShape()
		});
	}

	changeBackGroundColor = e => {
		const {nowItem} = this.props;
		const rgb = e.rgb;
		const color = `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`;
		this.setState({
			color: color
		});
		if(!nowItem.data.style){
			nowItem.data.style = {}
		}
		nowItem.data.style.backgroundColor = color;
		nowItem.updateData();
	};

	changeShape = value => {
		const { nowItem } = this.props;
		nowItem.data.shape = value;
		nowItem.update();
		this.setState({
			shape: value
		});
	};

	clearColor = () => {
		const {nowItem} = this.props;
		if(nowItem.data.style)
		delete nowItem.data.style.backgroundColor;
		nowItem.updateData();
		this.setState({
			color: undefined
		});
	}

	render() {
		const { color, shape } = this.state;
		return (
			<div className="right-panel-card">
				<div className="panel-title">形状</div>
				<div className="right-panel-card-children">
					<Select
						style={{ width: 100, marginRight: 20 }}
						placeholder="样式"
						value={shape}
						size="small"
						onChange={this.changeShape}>
						<Option value="box">盒子</Option>
						<Option value="underline">下划线</Option>
						<Option value="ellipse">主节点</Option>
					</Select>
					{shape !== "underline" && (
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
								<DeleteOutlined onClick={this.deleteIcon} style={{ cursor: "pointer" }} />
							</div>
						</div>
					)}
				</div>
			</div>
		);
	}
}
