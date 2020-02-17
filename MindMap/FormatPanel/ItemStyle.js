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
			color: content.style.backgroundColor || "#50c28b"
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
		let color = "rgb(80, 194, 139)";
		switch (value) {
			case "underline":
				color = "transparent";
				break;
			case "box":
				color = "rgb(74, 144, 226)";
				break;
		}
		MM.App.current.getDOM().content.style.backgroundColor = color;
		this.setState({
			color: color,
			shape: value
		});
	};

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
						<Dropdown
							trigger="click"
							overlay={
								<SketchPicker
									color={color}
									onChangeComplete={this.changeBackGroundColor}
								/>
							}>
							<div className="right-panel-card-children">
								<div
									className="color-pick-demo"
									style={{ backgroundColor: color }}></div>

								<Button>
									<Icon fill={color} type="bg-colors" />
								</Button>
							</div>
						</Dropdown>
					)}
				</div>
			</div>
		);
	}
}
