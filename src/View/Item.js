import Nodes from './Nodes/Nodes'
import Page from '../Model/Page';
import { v4 as uuidv4 } from 'uuid';
/**
 * 节点类
 */
class Item {
    /**
     * @prop {Array} 子节点数组
     */
    children = [];
    /**
     * 当前节点作为整体时在父容器rect时的相对位置
     * @prop {Object} 
     */
    position = {
        x:0,
        y:0
    };
    /**
     * 当前节点在 当前节点的rect中的位置
     * @prop {Object}
     */
    relativePos = {
        x:0,
        y:0
    } 
    /**
     * 坐标原点的偏移量
     * @prop {Object}
     */
    originPos = { 
        x:0,
        y:0
    }
    /**
     * 节点及子元素rect 的全局偏移
     * @prop {Object}
     */
    globalPos = {
        x:0,y:0
    } 
    /**
     * 节点当前全局坐标 x
     * @prop {Number}
     */
    x=0 
    /**
     * 节点当前全局坐标 y
     * @prop {Number}
     */
    y=0
    /**
     * 当前节点及下游所有节点的rect
     * @prop {Rect}
     */
    rect = undefined 
     /**
     * 当前节点内容dom的rect
     * @prop {Rect}
     */
    contentRect = undefined 
    /**
     * @constructor
     * @param {Page} page 
     * @param {Object} option 
     */
    constructor(page,option = {}){
        const {
            depth,
            data = {
            },
            visible = true
        } = option;
        this.page = page;
        this.depth = depth;
        this.remind = page.remind;
        this.visible = visible

        if(data){
            this.setData(data)
        }
    }

    /**
     * 设置脑图数据，和dom节点
     * @param {TreeData} data 
     */
    setData(data){
        this.clear();
        this.data = data;
        if(!this.data.uuid){
            this.data.uuid = uuidv4();
        }
        this.dom = document.createElement('div');
        this.page.dom.appendChild(this.dom);
        this.updateContent();
        this.updateShape();
        this.initToggle();
        this.addEvents();

        this.updateToggle();
        if(this.data.layout){
            this.setLayout(this.data.layout) 
        } 
        this.initChildren();
    }

    /**
     * 设置布局
     * @param {String} layout 
     */
    setLayout(layout){
        this.data.layout = layout;
        this.layout = this.page.layout[this.data.layout];
    }

    /**
     * 返回当前节点数据
     * @returns {Object}
     */
    getData(){
        const children = [];
        this.children.forEach(item=>{
            children.push(item.getData())
        })
        this.data.children = children;
        return this.data;
    }

    addEvents(){
        this.dom.addEventListener("mousedown",this.onMouseDown);
        this.dom.addEventListener("click",this.onClick);
        this.dom.addEventListener("contextmenu",this.onContextMenu)
        this.dom.addEventListener("dblclick",this.onDoubleClick);
       
    }

    onDoubleClick = ()=>{
        this.remind.command.execute("Edit")
    }

    onMouseDown=(event)=>{
        if(event.button !== 0)return;
        this.mouseStartEvent = event;
        this.remind.remindDOM.addEventListener("mousemove",this.onMouseMove)
    }

    onMouseMove=(event)=>{
        if(Math.abs(this.mouseStartEvent.clientX - event.clientX) > 10){//激活拖拽模式
            event.preventDefault();
            this.page.dragTool.startDrag(this.mouseStartEvent,event,this);
            this.remind.remindDOM.removeEventListener("mousemove",this.onMouseMove)
        }
    }

    onClick = (event)=>{
        event.preventDefault();
        event.stopPropagation();
        this.remind.remindDOM.removeEventListener("mousemove",this.onMouseMove)
        this.page.select(this);
        /**
         * 节点被单击事件
         * @event Remind#item:click 
         * @type {Item}
         */
        this.remind.fire("item:click",this)
    }
    onContextMenu=(event)=>{
        this.page.select(this)
    }

    /**
     * 初始化子节点
     */
    initChildren(){
        const {children = [],shrink} = this.data;
        children.forEach(child=>{
            const childItem = new Item(this.page,{
                data:child,
                depth:this.depth + 1,
                visible:!shrink && this.visible
            });
            this.insertChild(childItem,undefined,false)
        })
    }

    /**
     * 用最新的节点数据更新节点DOM
     */
    updateContent(){
        const {type = 'default',active} = this.data;
       
        try{
            Nodes.nodes[type](this,this.dom);
            delete this.contentRect;
        }catch(e){
            console.warn("解析节点错误，请检查节点类型是否注册")
            throw e;
        }
        if(active){
            this.page.select(this)
        }
    }

    initToggle(){
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="toggle-on">+</div>
            <div class="toggle-off">-</div>
        `;
        div.className = 'remind-toggle';
        this.toggleDOM = div;
        this.toggleDOM.addEventListener('click',this.onToggleClick);
        if(this.data.shrink){
            this.dom.appendChild(this.toggleDOM)
        }
    }

    onToggleClick =()=>{
        /**
         * 点击收缩前
         * @event Remind#item:beforeToggle
         * @type {Item} 
         */
        this.remind.fire("item:beforeToggle",this)
        this.data.shrink = !this.data.shrink;
        this.updateToggle();
        // this.page.rememberPosition(this);
        if(!this.data.shrink){
            this.updateVisible(this.children,true)
            this.update();
        }else{
            this.updateVisible(this.children,false)
            this.update();
        }
        /**
         * 点击收缩后
         * @event Remind#item:afterToggle
         * @type {Item}
         */
        this.remind.fire("item:afterToggle",this)
    }

    /**
     * 递归更新子节点是否可见
     * @param {Array} children 
     * @param {boolean} visible 
     */
    updateVisible(children = [],visible){
        children.forEach(child=>{
            child.visible = visible;
            if(!child.data.shrink){
                this.updateVisible(child.children,visible)
            }
        })
    }

    /**
     * 更新伸缩按钮样式
     */
    updateToggle(){
        const {shrink = false,children} = this.data;
        if(shrink && children && children.length){
            this.toggleDOM.classList.add('toggled');
        }else{
            this.toggleDOM.classList.remove('toggled')
        }
    }
    
    /**
     * 展开当前节点
     */
    expand(){
        if(this.data.shrink){
            this.onToggleClick();
        }
    }
   
    /**
     * 先更新所有下属，然后update
     * @param {Boolean} [recurse=true] recurse 是否递归向上更新
     * @param {Function} [func=undefined] func 子节点执行完后的递归回调函数
     */
    updateSubtree(recurse = true,func){
        this.children.forEach(item=>{
            item.updateSubtree(false,func)
        })
        func ? this[func](recurse) : this.update(recurse);
    }
    
    /**
     * 更新节点自身的样式和布局数据,递归向上
     * @param {Boolean} [recurse=true] recurse 是否递归向上更新
     */
    update(recurse = true){
        this.updateShape();
        if(!this.contentRect)this.updateContentRect();// 避免编辑新增节点初始化时没有contentRect
        this.updateLayout();
        if(recurse){
            this.parent.update(recurse);
        }
    }

    /**
     * 更新数据后重新渲染该节点，递归向上更新
     * @param {Object|undefined} data 
     */
    updateData(data){
        if(data){
            Object.assign(this.data,data)
        }
        this.updateContent();
        this.update();
    }

    /**
     * 更新节点dom的classname
     */
    updateShape(){
        this.dom.className = 'remind-item shape-' + this.getShape();
    }

    /**
     * 更新当前节点布局数据
     */
    updateLayout(){
        this.getLayout().update(this);
    }

    /**
     * 跟下节点本身的Rect
     */
    updateContentRect(){
        const rect = this.dom.getBoundingClientRect();
        // 本体节点rect
        this.contentRect = rect;
    } 

    /**
     * 更新下属的连接线
     */
    updateLine(){
        this.getLayout()?.updateLine(this)
    }
    
    /**
     * 利用已有布局数据渲染该节点及其下属节点
     */
    render(){
        this.updatePosition();
        this.dom.style.display = this.visible ? 'flex' : 'none';
        // if(layout.direction === 'left'){
        //     this.dom.style.right = this.page.root.rect.width - this.x - this.contentRect.width + 'px';
        //     this.dom.style.left = 'auto'
        //     this.dom.style.transform = `matrix(1, 0, 0, 1, 0,${this.y})`;
        // }else{
            this.dom.style.left = '0px'
            this.dom.style.transform = `matrix(1, 0, 0, 1, ${this.x},${this.y})`;
        // }   
        this.children.forEach(child=>{
            child.globalPos = {
                x:this.globalPos.x + this.originPos.x + child.position.x,
                y:this.globalPos.y + this.originPos.y + child.position.y
            }
           
            child.render();
        })
        if(this.visible){
            this.updateLine();
        }
    }

    updatePosition(){
        const {globalPos} = this;
        this.x = globalPos.x + this.relativePos.x + this.originPos.x;
        this.y = globalPos.y + this.relativePos.y + this.originPos.y;
    }

    /**
     * 获取当前的布局类型
     * @returns {String} 
     */
    getLayout(){
        const layout =  this.layout || this.parent?.getLayout();
        
        return layout;
    }

    /**
     * 根据主题获取当前的节点按照规则形状
     * @returns {String}
     */
    getAutoShape(){
        if(!this.depth){this.depth}
        const {theme} = this.page;
        switch (this.depth) {
            case 0: return theme.main;
            case 1: return theme.second;
            default: return theme.node;
        }
    }
 
    /**
     * 获取当前节点形状
     * @returns {String}
     */
    getShape(){
        return this.data.shape || this.getAutoShape();
    }

    /**
     * 获取线的形状
     * @returns {String} 
     */
    getLineShape(){
        const {theme} = this.page;
        return this.data.lineShape || theme.lineShape || "bezier";
    }
    
    /**
     * 获取子节点应该有的颜色，如果没有颜色，会自动生成到子节点数据中
     * @param {Item} child 
     * @returns {String}
     */
    getColor(child){
        if(this.data.color){
            return this.data.color;
        }
        if(this.isRoot() && child){
            const index = this.children.indexOf(child);
            const {theme:{colors}} = this.page;
            child.data.color = colors[ index % colors.length];
            return child.data.color;
        }
        return this.parent.getColor(this);
    }
  
    /**
     * @returns {Boolean}
     */
    isVisible(){
        const {x,y} = this;
        const {remindRect,x:pageX,y:pageY} = this.page;
        const {scrollLeft,scrollTop} = this.remind.remindDOM;
        const globalX = x + pageX + this.contentRect.width / 2;
        const globalY = y + pageY + this.contentRect.height / 2;
        const right = scrollLeft + remindRect.width;
        const bottom = scrollTop + remindRect.height;
        if(globalX < right && globalX > scrollLeft && globalY > scrollTop && globalY < bottom){
            return true;
        }
        return false;
    }
 
    /**
     * 开始进入编辑态
     */
    startEdit=()=>{
        this.oldText = this.data.text || '';
        const {textDOM,dom} = this;
        textDOM.contentEditable = true;
        textDOM.focus();
        if(!this.isVisible()){
            this.center();
        }
        this.page.editing = true;
        dom.style.zIndex = 1000;//不会被盖住 
    }

     /**
     * 退出编辑态
     */
    stopEdit = ()=>{
        this.page.editing = false;
        const {textDOM,dom} = this;
        textDOM.contentEditable = false;
        dom.style.zIndex = 0;//不会被盖住 
        this.data.text = textDOM.innerHTML;
        textDOM.blur();
    }

    /**
     * 进入备注态
     */
    startNote = function () {
        if(!this.data.note)this.data.note = '';// 把undefind置为空，用来显示note图标
        // 更新
        this.updateContent();
        this.update();
        requestAnimationFrame(()=>{
            this.remind.note.show(this)
        })
    }
    
     /**
     * 结束备注态
     * @param {String} text
     */
    endNote = function (text) {
        if (text === this.data.note) return;
        this.data.note = text === '' ? undefined : text;
        if(this.data.note === undefined){
            this.updateContent();
            this.update();
        }
    }

    /**
     * 设置节点的文本并且更新
     * @param {Stirng} text 
     */
    setText(text){
        this.data.text = text;
        this.updateContent();
        this.updateContentRect();
        this.update();
    }

    onKeyDown=(e)=>{
        if (e.keyCode == 9) { //tab
            e.preventDefault(); 
        }
    }

    onBlur=()=>{
        this.remind.command.execute("Finish")
    }

    /**
     * 居中当前节点
     */
    center(){
        const { remindRect,x,y,controller } = this.page;
        const {scale} = controller;
        const pageX = x + this.x * scale;
        const pageY = y + this.y * scale
        this.remind.controller.translate( pageX + this.contentRect.width * scale / 2 - remindRect.width / 2, pageY + this.contentRect.height * scale / 2 - remindRect.height / 2,true) 
    }

    /**
     * 选中当前节点
     */
    select(){
        this.page.select(this)
    }

    /**
     * 获取在父节点中的索引位置
     */
    get index(){
        return (this.parent && this.parent.children) ? this.parent.children.indexOf(this) : undefined
    }

    /**
     * 插入子节点
     * @param {Item} child 子节点实例
     * @param {Number} index 插入位置
     * @param {Boolean} ifUpdate 是否立即更新样式
     * @returns {Item} 子节点
     */
    insertChild(child,index,ifUpdate = true){
        if(child.parent){
            const oldParent = child.parent;
            oldParent.removeChild(child,false);
            oldParent.update(false)
        }
        if(index !== undefined){
            this.children.splice(index,0,child)
        }else{
            this.children.push(child);
        }
        // 挂载父元素到子元素上
        child.depth = this.depth + 1;
        child.parent = this;
        this.dom.appendChild(this.toggleDOM);
        if(ifUpdate){
            child.update();
        }
        return child;
    }

    /**
     * 删除节点
     * @param {Item} child 
     * @param {Boolean} ifUpdate 
     */
    removeChild(child,ifUpdate = true){
        const index = this.children.indexOf(child);
        child.depth = 0;
        child.parent = undefined;
        this.children.splice(index,1);
        if(this.children.length < 1){
            this.dom.removeChild(this.toggleDOM);
        }
        if(ifUpdate){
            this.update();
        }
    }

    /**
     * 清空当前节点的数据,便于重新setData
     */
    clear(){
        this.clearChildren();
        this.clearEvents();
        if(this.dom){
            this.page.dom.removeChild(this.dom,false)
            this.dom = undefined
        }
    }

    clearEvents(){
        if(this.dom){
            this.dom.removeEventListener("click",this.onClick);
            this.dom.removeEventListener("dblclick",this.onDoubleClick)
            this.textDOM.removeEventListener("keydown",this.onKeyDown)
            this.textDOM.removeEventListener("blur",this.onBlur)
        }
    }

    /**
     * 清空所有子节点
     */
    clearChildren(){
        let childrenCopy = [...this.children];
        childrenCopy.forEach(item=>{
            item.destroy(false);
        })
        this.children = [];
    }

    /**
     * 是否为根节点
     * @returns {Boolean}
     */
    isRoot(){
        return this.parent instanceof Page
    }

    /**
     * 销毁
     */
    destroy(){
        if(this.parent){
            this.parent.removeChild(this,false);
        }
        this.clear();
    }
}
export default Item;