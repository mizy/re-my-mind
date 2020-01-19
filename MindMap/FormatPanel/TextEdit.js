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
		const span = item.getDOM().text.querySelector("span") || {};
		const { style = {} } = span;
		this.setState({
			color: style.color
		});
	}

	execute = (command, data) => {
		if (MM.App.editing) {
			document.execCommand("styleWithCSS", null, null);
			document.execCommand(command, null, data);
		} else {
			MM.Command.Edit.execute();
			const selection = getSelection();
			const range = selection.getRangeAt(0);
			range.selectNodeContents(MM.App.current.getDOM().text);
			selection.removeAllRanges();
			selection.addRange(range);
			this.execute(command, data);
			MM.Command.Finish.execute();
		}
	};

	changeFontColor = e => {
		const rgb = e.rgb;
		const color = `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`;
		this.setState({
			color
		});
		this.execute("foreColor", color);
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
								this.execute("bold");
							}}>
							<span style={{ fontWeight: "bold" }}>B</span>
						</Button>
						<Button
							onClick={() => {
								this.execute("italic");
							}}>
							<span style={{ fontStyle: "italic" }}>I</span>
						</Button>
						<Button
							onClick={() => {
								this.execute("underline");
							}}>
							<span style={{ textDecoration: "underline" }}>U</span>
						</Button>
						<Button
							onClick={() => {
								this.execute("strikeThrough");
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
