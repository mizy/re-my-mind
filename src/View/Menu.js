MM.Menu = {
	_dom: {},
	_port: null,

	open: function (x, y, target) {
		this._dom.node.style.display = "";
		var w = this._dom.node.offsetWidth;
		var h = this._dom.node.offsetHeight;
		const {left:containerX,top:containerY} = this.app.container.getBoundingClientRect();
		var left = x - containerX;
		var top = y - containerY;

		if (left > (this.app.container.offsetWidth  - w)) { left -= w; }
		if (top >  (this.app.container.offsetHeight -h)) { top -= h; }
		this.nowTarget = target;
		left = left+this.app.container.scrollLeft;
		top = top +this.app.container.scrollTop;

		this._dom.node.style.transform = `translate(${left}px,${top}px)`; 
		
		const iconCommand = this._dom.node.querySelector("[data-command=DeleteIcon]");

		if (!iconCommand) return;
	
		if (target.getAttribute("data-key")) {
		  iconCommand.style.display = 'block';
		} else {
		  iconCommand.style.display = 'none';
		}
	},

	close: function () {
		this._dom.node.style.display = "none";
	},

	handleEvent: function (e) {
		if (e.currentTarget != this._dom.node) {
			this.close();
			return;
		}

		e.stopPropagation(); /* no dragdrop, no blur of activeElement */
		e.preventDefault(); /* we do not want to focus the button */

		var command = e.target.getAttribute("data-command");
		if (!command) { return; }

		command = MM.Command[command];
		if (!command.isValid()) { return; }

		command.execute(this.nowTarget);
		this.close();
	},

	init: function (app) {
		this.app = app;
		this._port =app._port;
		this._dom.node = app._port.querySelector(".menu");
		var buttons = this._dom.node.querySelectorAll("[data-command]");

		this._port.addEventListener("mousedown", this);
		this._dom.node.addEventListener("mousedown", this);

		this.close();
	}
}

export default MM.Menu;