import React, { PureComponent, Fragment } from "react";

import { Input, Tree, BackTop } from "antd";
const { TreeNode } = Tree;
export default class MainText extends PureComponent {
	state = {}
	renderMainTextChildren(childrens) {
		return childrens.map(item => {
			const icon = [];
			for (let key in item.icon) {
				icon.push(<i className={`mind-icon ${item.icon[key]}`}></i>);
			}
			return (
				<TreeNode title={<div className="mainText-item-title">
					{icon}
					<h3 dangerouslySetInnerHTML={{ __html: item.text }} />
					{item.note ? <pre dangerouslySetInnerHTML={{ __html: decodeURIComponent(item.note) }} className="main-text-note"></pre> : null}
				</div>}>
					{this.renderMainTextChildren(item.children || [])}
				</TreeNode>
				// <li className="mainText-item">
				// 	<span dangerouslySetInnerHTML={{ __html: item.text }}></span>
				// 	<ul className="childrens">
				// 		{this.renderMainTextChildren(item.children || [])}
				// 	</ul>
				// </li>
			);
		});
	}

	// h = n + a

	renderMainText() {
		const { nowData } = this.props;
		const { searchData = nowData } = this.state;
		if (!searchData) {
			return null;
		}
		const icon = [];
		for (let key in searchData.root.icon) {
			icon.push(<i className={`mind-icon ${searchData.root.icon[key]}`}></i>);
		}
		return (
			<Fragment>
				<div className="mainText-content">
					<Input.Search placeholder="请输入搜索" style={{ width: 200 }} onChange={this.changeSearch} />
					<Tree defaultExpandAll={true} >
						<TreeNode title={
							<div className="mainText-item-title">
								{icon}
								<h2 dangerouslySetInnerHTML={{ __html: searchData.root.text }} />
								{searchData.root.note ? <pre dangerouslySetInnerHTML={{ __html: decodeURIComponent(searchData.root.note) }} className="main-text-note"></pre> : null}
							</div>
						}>
							{this.renderMainTextChildren(searchData.root.children || [])}
						</TreeNode>
					</Tree>
				</div>

			</Fragment>
		);
	}

	changeSearch = (e) => {
		const value = e.target.value;
		const { nowData } = this.props;
		const { searchData = nowData } = this.state;
		if (!value) {
			return this.setState({
				searchData: undefined
			});
		}
		const res = JSON.parse(JSON.stringify(nowData));
		res.root = this.checkSearch(value, res.root);
		console.log(res);
		this.setState({
			searchData: { ...res }
		});
	}

	// 递归深度搜索
	checkSearch(value, parent) {
		let visible = false;
		if (parent.text.indexOf(value) > -1) {
			visible = true;
		}
		const children = [];
		parent.children && parent.children.forEach(item => {
			const child = this.checkSearch(value, item);
			if (child.visible) {
				children.push(child);
			}
		});
		if (children.length) visible = true;
		parent.visible = visible;
		parent.children = children;
		return parent;
	}

	render() {
		const { mindType } = this.props;
		return mindType === "text" &&
			<div
				style={{
					flexGrow: 1

				}}
			>
				{this.renderMainText()}

				<BackTop
					style={{
						right: "40px",
						bottom: "40px"
					}}
				/>
			</div>;
	}
}
