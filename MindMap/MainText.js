import React, { PureComponent, Fragment } from "react";

import { Input, Tree, BackTop } from "antd";
import {SelectOutlined } from '@ant-design/icons'
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
				<TreeNode key={item.uuid} title={<div className="mainText-item-title">
					{icon}
					<span>{item.text}</span>
					{item.note ? <pre  className="main-text-note">{item.note}</pre> : null}
				</div>}>
					{this.renderMainTextChildren(item.children || [])}
				</TreeNode>
			);
		});
	}

	// h = n + a

	makeChildren(children = []){
		return children.map(item=>{
			const icon = [];
			for (let key in item.icon) {
				icon.push(<i className={`mind-icon ${item.icon[key]}`}></i>);
			}
			return {
				title:<div  onDoubleClick={()=>this.onDoubleClick(item)}  className="mainText-item-title">
					{icon}
					<span>{item.text}</span>
					{item.note ? <pre  className="main-text-note">{item.note}</pre> : null}
				</div>,
				key:item.uuid,
				children:this.makeChildren(item.children)
			};
		})
	}

	onDoubleClick(data){
		this.props.showMindText('mind');
		const item = this.props.app.page.getItemByUUID(data.uuid);
		item.select();
		item.center();
	}

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
		const item = searchData.root;
		const treeData = [{
			title:<div className="mainText-item-title">
				{icon}
				<h2>{searchData.root.text}</h2>
				{item.note ? <pre  className="main-text-note">{item.note}</pre> : null}
			</div>,
			key: searchData.root.uuid,
			children:this.makeChildren(searchData.root.children)
		}]
		return (
			<Fragment>
				<div onDoubleClick={()=>{e.preventDefault();e.stopPropagation(); this.onDoubleClick(item)}} className="mainText-content">
					<Input.Search placeholder="请输入搜索" value={this.state.searchValue} style={{ width: "100%" }} onChange={this.changeSearch} />
					<Tree treeData={treeData} className="main-text-tree" defaultExpandAll={true} />
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
			searchValue:value,
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
