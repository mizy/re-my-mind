/**
 * @class
 */
class Menu {

	/**
	 * 
	 * @param {Remind} remind 
	 */
    constructor(remind){
        this.init(remind);
    } 
    
	init = function (remind) {
        this.remind = remind;
        this.options = remind.options;
        this.initMenu(this.options.menuDOM)

		this.dom.addEventListener("click", this.onClick);
        this.remind.dom.addEventListener("click", this.onClick);
        this.remind.dom.addEventListener("contextmenu", this.onShow);
		this.close();
	}

	/**
	 * 初始化右键菜单
	 * @param {HTMLElement} dom 
	 * @returns {undefined}
	 */
	initMenu =function (dom) {
        if(dom){
            dom.className += "menu";
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
			<button data-command="Redo">重做</button>
			<button data-command="Center">居中</button>
		`
		this.remind.dom.appendChild(_menu);
        this.dom = _menu;
		return _menu
	}

	onShow = (e)=>{
		e.preventDefault()
		this.nowEvent = e;
		// const item = this.remind.page.getByEvent(e);

		// if(item){
		// const {x,y} = item.dom.getBoundingClientRect();
		this.open(e.layerX,e.layerY,e.target)
		// }
	}

    onClick = (e)=>{
        if (e.currentTarget !== this.dom) {
			this.close();
			return;
		}
		e.stopPropagation();  
		e.preventDefault(); 
		let command = e.target.getAttribute("data-command");
		if (!command) { return; }
		command = this.remind.command.execute(command,this.remind.page.current,this.nowEvent);
		this.close();
    }
    
	/**
	 * 打开右键菜单
	 * @param  {Number} x
	 * @param  {Number} y
	 * @param  {HTMLElement} target
	 */
	open = function (x, y, target) {
		this.dom.style.display = 'block';
		this.dom.style.transform = `translate(${x}px,${y}px)`; 
		
		const iconCommand = this.dom.querySelector("[data-command=DeleteIcon]");

		if (!iconCommand) return target; 
	
		if (target.getAttribute("data-key")) {
			iconCommand.style.display = 'block';
		} else {
			iconCommand.style.display = 'none';
		}
		return target
	}

	/**
	 * 关闭右键菜单
	 */
	close() {
		this.dom.style.display = "none";
	}
     
	/**
	 * 销毁
	 */
    destroy(){
        this.dom.removeEventListener("click", this.onClick);
        this.remind.dom.removeEventListener("click", this.onClick);
        this.remind.dom.removeChild(this.dom)
    }
}

export default Menu