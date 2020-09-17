
/**
 * @namespace
 */
MM.App = {
	options: {
		disableDrag:false,
		headTitle: " - 脑图",
		colors: ['#fec936', '#f88b15', '#fe7e4d', '#ec6d7a', '#ef3224', '#9bc039', '#67c97e', '#00a7cd', '#40b5c6', '#2da4ff', '#956fe7', '#882e99', '#FF84BA'],
	},
	keyboard: null,
	current: null,
	editing: false,
	zoomRatio: 0.2,//每次缩放递进比例
	scale: 1,//原始比例
	history: [],
	readonly:false,
	historyIndex: 0,
	portSize: [0, 0],
	map: null,
	ui: null,
	io: null,
	help: null,
	_port: null,
	_throbber: null,
	_drag: {
		pos: [0, 0],
		item: null,
		ghost: null
	},
	_fontSize: 100,

	destroy() {
		this.map.destroy();
		this.note.destroy();
		MM.Keyboard.destroy();
		this._port.innerHTML = null;
		this.map = null;
		this.current = null;
		this.scale = null;
		this.history = [];
		this._drag = {
			pos: [0, 0],
			item: null,
			ghost: null
		}
		MM.clear();
	},

	action: function (action) {
		MM.publish("onaction",action);
		if(action.stop)return;
		if (this.historyIndex < this.history.length) { /* remove undoed actions */
			this.history.splice(this.historyIndex, this.history.length - this.historyIndex);
		}

		this.history.push(action);
		this.historyIndex++;
		action.perform();
		return this;
	},

	setMap: function (map) {
		if (this.map) { this.map.destroy(); }

		this.history = [];
		this.historyIndex = 0;

		this.map = map;
		this.map.show(this._port);
	},

	select: function (item) {
		if (this.current && this.current != item) { this.current.deselect(); }
		this.current = item;
		this.current.select();
	},

	adjustFontSize: function (diff) {
		this._fontSize = Math.max(30, this._fontSize + 10 * diff);
		this._port.style.fontSize = this._fontSize + "%";
		this.map.update();
		this.map.ensureItemVisibility(this.current);
	},

	zoom(val) {
		val = val * this.zoomRatio;
		this.scale = this.scale * val;
		const node = this.map.getRoot().getDOM().node;
		node.style.transform = `scale(${this.scale})`;
	},

	handleEvent: function (e) {
		switch (e.type) {
			case "resize":
				// this._syncPort();
				break;
			case "click":
				break;
			case "beforeunload":
				e.preventDefault();
				return "";
				break;
		}
	},

	setThrobber: function (visible) {
		this._throbber.classList[visible ? "add" : "remove"]("visible");
	},

	initMenu: function () {
		const _menu = document.createElement("div");
		_menu.className = "menu";
		_menu.innerHTML = `
			<button data-command="InsertChild">插入节点</button>
			<button data-command="InsertSibling">插入同级</button>
			<button data-command="Delete">删除</button>
			<button data-command="DeleteIcon" style="display:none">删除图标</button>
			<span></span>
			<button data-command="Edit">编辑</button>
			<span></span>
			<button data-command="Undo">撤销</button>
			<button data-command="Redo">重置</button>
			<button data-command="Center">调整布局</button>
		`
		this._port.appendChild(_menu)
		return _menu
	},

	init: function (dom, options = {}) {
		const container = document.createElement("div");
		dom.appendChild(container);
		dom.className+=` re-mind  ${MM.Theme.theme.className}`;
		this.container = dom;
		this._port = container;
		this._port.className += ` re-mind-scroll`;
		Object.assign(this.options, options)
		this._menu = options.menu || this.initMenu();
		MM.Keyboard.init();
		MM.Menu.init(this);
		MM.Mouse.init(this._port);
		MM.Clipboard.init();

		window.addEventListener("resize", this);
		window.addEventListener("click", this);
		window.addEventListener("beforeunload", this);
		MM.subscribe("item-change", (publisher) => {
			if (publisher.isRoot() && publisher.getMap() == this.map) {
				document.title = this.map.getName() + this.options.headTitle;
			}
		});

		this.setMap(new MM.Map(options || {}));
		this.note = new MM.Note(this);
		return this;
	},

	repaint(){
		// 重新渲染需要重新计算宽度
		this.rendering = true;
		this.map.update();
		this.rendering = false;
	},

	
}
export default MM.App;