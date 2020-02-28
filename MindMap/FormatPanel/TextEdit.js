import React, { PureComponent } from "react";
import { Button, Dropdown, Icon } from "antd";
import { SketchPicker } from "react-color";
const MM = window.MM;
/**
 * 文字编辑
 */
export default class StyleEdit extends PureComponent {
	state = {};

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
		const text = item.getDOM().text || {};
		const { style = {} } = text;
		this.setState({
			color: style.color
		});
	}

	execute = (command, data) => {
		 const text = this.props.nowItem.getDOM().text;
		 const {style = {}} = text;
		 if(style[command]!==data){
			style[command] = data;
			nowItem.style[command] = data;
		 }else{
			style[command] = '';
			delete nowItem.style[command] ;
		 }
		
	};

	changeFontColor = e => {
		const rgb = e.rgb;
		const color = `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`;
		this.setState({
			color
		});
		this.execute("color", color);
		// MM.App.current.getDOM().text.style.color = color;
	};

	render() {
		return (
			<div className="right-panel-card">
				<div className="panel-title">文本</div>
				<div className="right-panel-card-children">
					<Button.Group>
						<Button
							onClick={() => {
								this.execute("fontWeight","bold");
							}}>
							<span style={{ fontWeight: "bold" }}>B</span>
						</Button>
						<Button
							onClick={() => {
								this.execute("fontStyle","italic");
							}}>
							<span style={{ fontStyle: "italic" }}>I</span>
						</Button>
						<Button
							onClick={() => {
								this.execute("textDecoration","underline");
							}}>
							<span style={{ textDecoration: "underline" }}>U</span>
						</Button>
						<Button
							onClick={() => {
								this.execute("textDecoration","line-through");
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
