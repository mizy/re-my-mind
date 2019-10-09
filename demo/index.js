import { PureComponent } from "react";
import "./index.less";
import "re-my-mind";
import { get } from "lodash";
import ForceGraph3D from "3d-force-graph";
import { forceLink, forceRadial, forceY, forceManyBody } from "d3-force-3d";
import SpriteText from "three-spritetext";
import * as THREE from "three";
import TopBar from "./TopBar";
import RightBar from "./Rightbar";
import service from "../Article/service";
const MM = window.MM;
class Minder extends PureComponent {
	scale = 1;
	colors = [
		"#f17c67",
		"#495A80",
		"#9966CC",
		"#EEE8AB",
		"#FD5B78",
		"#228fbd",
		"#fdb933",
		"#7fb80e",
		"#7bbfea",
		"#6f599c",
		"#fedcbd",
		"#00EBC0",
		"#FF84BA"
	];
	state = {
		shrink: true,
		selectedKeys: ["3"],
		show3dView: false,
		rootName: "未命名脑图"
	};

	componentDidMount() {
		service.getBookArticle({ id: +get(this.props, "match.params.articleId") }).then(res => {
			this.setState({
				record: res
			});
			this.init(res);
		});
	}

	init({ title, content }) {
		this.app = MM.App.init(this.appRef, {
			rootName: title || "未命名脑图",
			data: content ? JSON.parse(content) : undefined
		});
		this.setState({
			rootName: title,
			nowData: JSON.parse(content)
		});
		MM.subscribe("item-change", msg => {
			this.setState({
				message: msg + this.app.historyIndex,
				flag: !this.state.flag,
				nowData: this.app.map.toJSON()
			});
		});
	}

	show3d = () => {
		if (!this.graph) {
			this.graph = ForceGraph3D({
				controlType: "orbit"
			})
				.dagMode("tb")
				.dagLevelDistance(300)
				.backgroundColor("#101020")
				.nodeRelSize(1)
				.linkOpacity(0.7)
				.linkCurvature(0.2)
				.linkCurveRotation(-Math.PI / 4)
				.linkWidth(link => {
					return 2 / (link.level + 1);
				})
				.linkColor("color")
				.nodeThreeObject(node => {
					const obj = new THREE.Mesh(
						new THREE.SphereGeometry(node.val, 32, 32),
						new THREE.MeshPhongMaterial({
							//  depthWrite: false,
							transparent: true,
							color: node.color
						})
					);
					const sprite = new SpriteText(node.name);
					sprite.color = "#ffffff";
					sprite.textHeight = 24;
					obj.renderOrder = 1;
					sprite.renderOrder = 2;
					const group = new THREE.Group();
					group.add(obj);
					// group.add(sprite);
					// obj.add(sprite);

					return group;
				})
				.nodeColor("color")(this.ref3d);
		}
		const data = this.app.map.toJSON();
		const nodes = [];
		const links = [];
		window.graph = this.graph;
		this.add3dData(nodes, links, data.root, 0);

		this.setState(
			{
				show3dView: !this.state.show3dView,
				shrink: this.state.show3dView
			},
			() => {
				this.graph.graphData({ nodes, links });
				this.graph.d3Force(
					"charge",
					forceManyBody()
						.theta(0)
						.strength(-2000)
				);
			}
		);
	};

	add3dData(nodes, links, data, zIndex) {
		nodes.push({
			id: data.id,
			name: data.text,
			color: data.color || "#4a9",
			val: 30 / (zIndex + 1),
			level: zIndex
		});
		if (data.children) {
			data.children.forEach(item => {
				item.color = item.color || data.color;
				this.add3dData(nodes, links, item, zIndex + 1);
				links.push({
					level: zIndex,
					color: data.color || "#4a9",
					source: data.id,
					target: item.id
				});
			});
		}
	}

	showRightPanel=(type)=>{
		this.setState({
			show3dView: false
		});
		const { shrink } = this.state;
		this.setState({
			shrink: !shrink,
			type: type
		});
	}

	setData = data => {
		this.app.map.fromJSON(data);
	};

	render() {
		const { rootName, message, shrink, type, nowData } = this.state;
		return (
			<div className={"mind-wrap"}>
				{this.app && (
					<TopBar match={this.props.match} rootName={rootName} app={this.app} mindMap={this} message={message} />
				)}
				<div className="minder-content">
					<div
						ref={ref => {
							this.ref3d = ref;
						}}
						style={{
							flexGrow: 1,
							height: "calc(100vh - 60px)",
							display: this.state.show3dView ? "block" : "none"
						}}
					/>
					<div
						style={{
							flexGrow: 1,
							height: "calc(100vh - 60px)",
							display: !this.state.show3dView ? "block" : "none"
						}}
						ref={ref => {
							this.appRef = ref;
						}}
					/>
					<div
						className="rightbar"
						style={{
							width: !shrink ? 300 : 0,
							height: "calc(100vh - 60px)",
							display: !this.state.show3dView ? "block" : "none"
						}}
					>
						<RightBar nowData={nowData} mind={this} type={type} />
					</div>
				</div>
			</div>
		);
	}
}
export default Minder
