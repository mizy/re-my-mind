/**
 * @class
 */
class Menu {

    constructor(remind){
        this.init(remind);
    } 
    
	init = function (remind) {
        this.remind = remind;
        this.options = remind.options;
        this.initMenu(this.options.menuDOM)

		this.dom.addEventListener("click", this.onClick);
        this.remind.dom.addEventListener("click", this.onClick);
		this.close();
	}

	initMenu =function (dom) {
        if(dom){
            dom.className+="menu";
            this.remind.dom.appendChild(dom);
            this.dom = dom;
            return ;
        }
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
		this.remind.dom.appendChild(_menu);
        this.dom = _menu;
		return _menu
	}

    onClick(e){
        if (e.currentTarget != this.dom) {
			this.close();
			return;
		}
		e.stopPropagation();  
		e.preventDefault(); 
		let command = e.target.getAttribute("data-command");
		if (!command) { return; }
		command = this.remind.command[command];
		if (!command.isValid()) { return; }
		command.execute(this.nowTarget);
		this.close();
    }
    
	/**
	 * @param  {} x
	 * @param  {} y
	 * @param  {} target
     * @public
	 */
	open = function (x, y, target) {
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
	}
	 
	close() {
		this.dom.style.display = "none";
	}
     
    destroy(){
        this.dom.removeEventListener("click", this.onClick);
        this.remind.dom.removeEventListener("click", this.onClick);
        this.remind.dom.removeChild(this.dom)
    }
}

export default Menu