import React, { PureComponent } from "react";
import { Button, Dropdown, Icon, Select } from "antd";
import { SketchPicker } from "react-color";
const { Option } = Select;
const MM = window.MM;
/**
 * 背景样式
 */
export default class StyleEdit extends PureComponent {
	state = {
		color: "#f8f8f8"
	};

	componentDidMount() {
		this.syncNowItem(MM.App.current);
	}

	componentWillReceiveProps(props) {
		if (props.nowItem !== this.props.nowItem) {
			this.syncNowItem(props.nowItem);
		}
		return props;
	}

	// 同步数据
	syncNowItem(item) {
		const content = item.getDOM().content;
		this.setState({
			color: content.style.backgroundColor || undefined
		});
		this.setState({
			shape: item.getShape().id
		});
	}

	changeBackGroundColor = e => {
		const rgb = e.rgb;
		const color = `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`;
		this.setState({
			color: color
		});
		MM.App.current.getDOM().content.style.backgroundColor = color;
	};

	changeShape = value => {
		MM.App.current.setShape(MM.Shape.getById(value));
		this.setState({
			shape: value
		});
	};

	clearColor = () => {
		this.setState({
			color: undefined
		});
		MM.App.current.getDOM().content.style.backgroundColor = null;
	}

	render() {
		const { color, shape } = this.state;
		return (
			<div className="right-panel-card">
				<div className="panel-title">背景</div>
				<div className="right-panel-card-children">
					<Select
						style={{ width: 100, marginRight: 20 }}
						placeholder="样式"
						value={shape}
						onChange={this.changeShape}>
						<Option value="box">盒子</Option>
						<Option value="underline">下划线</Option>
						<Option value="ellipse">主节点</Option>
					</Select>
					{shape !== "underline" && (
						<div className="right-panel-card-children">
							<div
								className="color-pick-demo"
								style={{ backgroundColor: color }}></div>
							<Button.Group>
								<Dropdown
									trigger="click"
									overlay={
										<SketchPicker
											color={color}
											onChangeComplete={this.changeBackGroundColor}
										/>
									}>
									<Button>
										<Icon fill={color} type="bg-colors" />
									</Button>
								</Dropdown>
								<Button onClick={this.clearColor}>
									<Icon type="delete" />
								</Button>
							</Button.Group>
						</div>
					)}
				</div>
			</div>
		);
	}
}
