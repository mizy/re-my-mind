import Nodes from './Nodes/Nodes'
import Page from '../Model/Page';
import { v4 as uuidv4 } from 'uuid';
class Item {
    children = [];
    position = {
        x:0,
        y:0
    }; // 当前节点作为整体时在父容器rect时的相对位置
    relativePos = {
        x:0,
        y:0
    } // 当前节点在 当前节点的rect中的位置
    originPos = { // 坐标原点的偏移量
        x:0,
        y:0
    }
    globalPos = {
        x:0,y:0
    } // 节点及子元素rect 的全局偏移
    x=0 // 节点当前全局坐标
    y=0

    rect = undefined // 当前节点及下游所有节点的rect
    contentRect = undefined // 当前节点内容dom的rect
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

    setLayout(layout){
        this.data.layout = layout;
        this.layout = this.page.layout[this.data.layout];
    }

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
        this.remind.fire("item-click",this)
    }
    onContextMenu=(event)=>{
        this.page.select(this)
    }

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
        this.remind.fire("item:afterToggle",this)
    }

    updateVisible(children = [],visible){
        children.forEach(child=>{
            child.visible = visible;
            if(!child.data.shrink){
                this.updateVisible(child.children,visible)
            }
        })
    }

    updateToggle(){
        const {shrink = false} = this.data;
        if(shrink){
            this.toggleDOM.classList.add('toggled');
        }else{
            this.toggleDOM.classList.remove('toggled')
        }
    }
    
    expand(){
        if(this.data.shrink){
            this.onToggleClick();
        }
    }

     /**
     * 更新样式
     */
    updateStyle(){

    }

    /**
     * 更新下属和自己节点的布局信息
     */
    updateSubtree(recurse = true){
        this.children.forEach(item=>{
            item.updateSubtree(false)
        })
        this.updateContentRect();
        this.update(recurse)
 
    }

    // bfs 更新依赖树结构的相关数据和样式
    update(recurse = true){
        if(!this.contentRect)this.updateContentRect();// 避免编辑新增节点初始化时没有contentRect
        this.updateShape();
        this.updateLayout();
        this.updateColor();
        if(recurse){
            this.parent.update(recurse);
        }
    }

    updateData(data){
        if(data){
            Object.assign(this.data,data)
        }
        this.updateContent();
        this.update();
    }

    updateShape(){
        this.dom.className = 'remind-item shape-' + this.getShape();
    }

    updateLayout(){
        this.getLayout().update(this);
    }

    updateContentRect(){
        const rect = this.dom.getBoundingClientRect();
        // 本体节点rect
        this.contentRect = rect;
    } 

    updateLine(){
        this.getLayout()?.updateLine(this)
    }
    // dfs
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

    getLayout(){
        const layout =  this.layout || this.parent?.getLayout();
        
        return layout;
    }

    getAutoShape(){
        if(!this.depth){this.depth}
        const {theme} = this.page;
        switch (this.depth) {
            case 0: return theme.main;
            case 1: return theme.second;
            default: return theme.node;
        }
    }
 
    getShape(){
        return this.data.shape || this.getAutoShape();
    }

    getLineShape(){
        const {theme} = this.page;
        return this.data.lineShape || theme.lineShape || "bezier";
    }

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

    updateColor(){
        // this.toggleDOM.style.color = color;
        // this.toggleDOM.style.backgroundColor = color;
    }

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

    stopEdit = ()=>{
        this.page.editing = false;
        const {textDOM,dom} = this;
        textDOM.contentEditable = false;
        dom.style.zIndex = 0;//不会被盖住 
        this.data.text = textDOM.innerHTML;
        textDOM.blur();
    }

    startNote = function () {
        if(!this.data.note)this.data.note = '';// 把undefind置为空，用来显示note图标
        // 更新
        this.updateContent();
        this.remind.note.show(this)
        this.update();
    }
    
    endNote = function (text) {
        if (text === this.data.note) return;
        this.data.note = text === '' ? undefined : text;
        if(this.data.note === undefined){
            this.updateContent();
            this.update();
        }
    }

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

    center(){
        const { remindRect,x,y } = this.page;
        const pageX = x + this.x;
        const pageY = y + this.y
        this.remind.controller.translate( pageX + this.contentRect.width / 2 - remindRect.width / 2, pageY + this.contentRect.height / 2 - remindRect.height / 2,true) 
    }

    select(){
        this.page.select(this)
    }

    get index(){
        return (this.parent && this.parent.children) ? this.parent.children.indexOf(this) : undefined
    }

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

    clearChildren(){
        let childrenCopy = [...this.children];
        childrenCopy.forEach(item=>{
            item.destroy(false);
        })
        this.children = [];
    }

    isRoot(){
        return this.parent instanceof Page
    }

    destroy(){
        if(this.parent){
            this.parent.removeChild(this,false);
        }
        this.dom.parentElement && this.dom.parentElement.removeChild(this.dom);
        this.clearChildren();
    }
}
export default Item;