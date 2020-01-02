
/**
 * @namespace
 */
MM.App = {
	options: {
		headTitle: " - 脑图",
		colors: ['#f17c67', '#495A80', '#9966CC', '#EEE8AB', '#FD5B78', '#228fbd', '#fdb933', '#7fb80e', '#7bbfea', '#6f599c', '#fedcbd', '#00EBC0', '#FF84BA'],
	},
	keyboard: null,
	current: null,
	editing: false,
	zoomRatio: 0.2,//每次缩放递进比例
	scale: 1,//原始比例
	history: [],
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
		if (this.historyIndex < this.history.length) { /* remove undoed actions */
			this.history.splice(this.historyIndex, this.history.length - this.historyIndex);
		}

		this.history.push(action);
		this.historyIndex++;

		action.perform();
		return this;
	},

	setMap: function (map) {
		if (this.map) { this.map.hide(); }

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

	zoom: val => {
		val = val * this.zoomRatio;
		this.scale = this.scale * val;
		const node = this.map.getRoot().getDOM().node;
		node.style.transform = `scale(${this.scale})`;
	},


	handleEvent: function (e) {
		switch (e.type) {
			case "resize":
				this._syncPort();
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
		this._port = dom;
		this._port.className += " re-mind";
		Object.assign(this.options, options)
		this._menu = options.menu || this.initMenu();
		MM.Keyboard.init();
		MM.Menu.init(this._port);
		MM.Mouse.init(this._port);
		MM.Clipboard.init();

		window.addEventListener("resize", this);
		window.addEventListener("click", this);
		window.addEventListener("beforeunload", this);
		MM.subscribe("ui-change", this._syncPort);
		MM.subscribe("item-change", (publisher) => {
			if (publisher.isRoot() && publisher.getMap() == this.map) {
				document.title = this.map.getName() + this.options.headTitle;
			}
		});
		this._syncPort();

		this.setMap(new MM.Map(options || {}));
		return this;
	},

	_syncPort: function () {

		this.portSize = [this._port.clientWidth, this._port.clientHeight];
		if (this.map) { this.map.ensureItemVisibility(this.current); }
	}
}
export default MM.App;