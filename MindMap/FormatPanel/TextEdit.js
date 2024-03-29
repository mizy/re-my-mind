import React, { PureComponent } from "react";
import { Button, Dropdown, Icon } from "antd";
import { SketchPicker } from "react-color";
/**
 * 文字编辑
 */
export default class StyleEdit extends PureComponent {
	state = {};

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
		const style = item.style || {};
		this.setState({
			color: style.color
		});
	}

	execute = (command, data) => {
		const nowItem = this.props.nowItem; 
		if(!nowItem.data.textStyle){
			nowItem.data.textStyle = {};
		}
		if(nowItem.data.textStyle[command] === data){
			delete nowItem.data.textStyle[command] 
		}else{
			nowItem.data.textStyle[command] = data
		}
		nowItem.updateContent();
		nowItem.update();
	};

	changeFontColor = e => {
		const rgb = e.rgb;
		const color = `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`;
		this.setState({
			color
		});
		this.execute("color", color);
	};

	render() {
		return (
			<div className="right-panel-card">
				<div className="panel-title">文本</div>
				<div className="right-panel-card-children">
					<Button.Group>
						<Button
							onClick={() => {
								this.execute("fontWeight", "bold");
							}}>
							<span style={{ fontWeight: "bold" }}>B</span>
						</Button>
						<Button
							onClick={() => {
								this.execute("fontStyle", "italic");
							}}>
							<span style={{ fontStyle: "italic" }}>I</span>
						</Button>
						<Button
							onClick={() => {
								this.execute("textDecoration", "underline");
							}}>
							<span style={{ textDecoration: "underline" }}>U</span>
						</Button>
						<Button
							onClick={() => {
								this.execute("textDecoration", "line-through");
							}}>
							<span style={{ textDecoration: "line-through" }}>S</span>
						</Button>
						<Dropdown
							trigger="click"
							overlay={
								<SketchPicker
									color={this.state.color}
									onChangeComplete={this.changeFontColor}
								/>
							}>
							<Button>
								<span
									style={{
										textDecoration: "underline",
										textDecorationColor: this.state.color
									}}>
									A
								</span>
							</Button>
						</Dropdown>
					</Button.Group>
				</div>
			</div>
		);
	}
}
