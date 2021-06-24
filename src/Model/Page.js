import Item from "../View/Item";
import {MapLayout,SiteLayout,TreeLayout,FishLayout} from '../Layout';
import theme from '../View/Theme';
import DragTool from "./DragTool";

class Page {
    lines=[];
    x=0;
    y=0;
    constructor(remind){
        this.remind = remind;
        this.page = remind.page;
        this.options = remind.options;
        this.root = null;
        this.visible = false;
        this.position = [0, 0]; 
        this.controller = remind.controller;
        this.initDOM();
        this.initLayout();
        this.initCanvas();
        if (this.options.data) {
            this.setData(this.options.data);
        } else {
            this.setData({
                root: {
                    text:'Root',
                    layout: 'map',
                    children:[]
                }
            } );
        }
        // 延时进行操作
        this.asyncShow();
        this.dragTool = new DragTool(this);
    }

    asyncShow(){
        requestAnimationFrame(()=>{
            this.show();
        })
    }

    initLayout(){
        this.layout = {
            map:new MapLayout(this),
            'map-right':new MapLayout(this,'right'),
            'map-left':new MapLayout(this,'left'),
            site:new SiteLayout(this),
            'site-bottom':new SiteLayout(this,'bottom'),
            'site-top':new SiteLayout(this,'top'),
            'tree-right':new TreeLayout(this,'right'),
            'tree-left':new TreeLayout(this,'left'),
            'fish-right':new FishLayout(this,'right'),
            'fish-left':new FishLayout(this,'left')
        };
    }

    initDOM(){
        this.dom =  document.createElement("div");
        this.dom.className = 'remind-page';
        this.remind.dom.appendChild(this.dom);
    }

    initCanvas(){
        this.canvas = document.createElement("canvas");
        this.svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
        this.svg.innerHTML = `
        <symbol id="arrow" viewBox="0 0 10 10">
            <path d="M-5 5 L0 0 L-5 -5" />
        </symbol>
        `;
        // this.svg.className = 'remind-canvas';
        this.canvas.className = 'remind-canvas'
        this.canvasContext = this.canvas.getContext('2d');
        this.dom.appendChild(this.canvas);
        this.dom.appendChild(this.svg);
        const g = document.createElementNS("http://www.w3.org/2000/svg","g");
        g.setAttribute("tansform",'translate(5px,5px)');
        this.svg.appendChild(g);
        this.svg.classList.add("remind-canvas")
        this.svgConatiner = g;
    } 

    setData(data){
        this.root && this.root.destroy();
        this.data = data;
        this.setTheme(data.theme);

        const root = new Item(this,{
            depth:0
        });
        root.setData(data.root);
        this.root = root;
        this.root.parent = this;
    }

    updateContainerStyle(){
        if(this.data.style)
        Object.assign(this.remind.remindDOM.style,this.data.style);
    }

    setTheme(value = 'default'){
        this.theme = theme.themes[value];
        this.remind.remindDOM.className = `remind theme-${value}`;
        this.data.theme = value;
    }

    onMouseDown(event){
        const onMouseUp = ()=>{
            window.removeEventListener("mousemove",onMouseMove);
            window.removeEventListener('mouseup',onMouseUp)
        }
        const onMouseMove = (event)=>{
            // const disX = 
        }
        window.addEventListener("mousemove",onMouseMove);
        window.addEventListener('mouseup',onMouseUp)
    }

    select(item){
        this.deselect();
        if(item === this.current){
            return ;
        }
        this.current = item; 
        this.current.data.active = true;
        this.current.dom.classList.add('active');
        this.remind.fire("item:select")
    }

    deselect(){
        if(!this.current)return;
        this.current.dom.classList.remove('active');
        delete this.current.data.active;
        this.current = undefined;
        this.remind.fire("item:deselect")
    }

    getColor(){
        const {theme:{colors}} = this;
        
        return '#999'
    }
 
    toJSON(){
        const {root,...others} = this.data;
        const data = {
            root: this.root.getData(),
            ...others
        };
        return data;
    }

    show(){
        this.updateSubtree(false);// 统一更新
        this.update();
       
        this.select(this.root);
        this.center();
        return this;
    }

    center(){
        if(this.current !== this.root){
            return this.current.center();
        }
        if(this.root.getLayout().name === "fish"){
            this.root.getLayout().center();
        }else{
            this.root.center();
        }
    }

    // 更新节点树信息
    updateSubtree(func){
        this.root.updateSubtree(false,func);
    }

    // 渲染
    update(){
        this.lines = [];
        this.remember();
        this.updateRootWidth();
        this.render();
        this.refuse();
    }

    remember(){
        const item = this.current;
        if(item){
            this.oldPosition = {
                item,
                x:this.x + item.x,
                y:this.y + item.y
            }
        }else{
            this.oldPosition = undefined;
        }
        
    }

    refuse(){
        if(this.current){
            this.select(this.current)
        }
        if(!this.oldPosition)return;
        const {x,y,item} = this.oldPosition;
        const scrollLeft = this.controller.x + (this.x + item.x - x);
        const scrollTop = this.controller.y + (this.y + item.y - y);
        // 拯救scroll不能取小数的偏移
        const disX = scrollLeft - Math.floor(scrollLeft);
        const disY = scrollTop - Math.floor(scrollTop);
        this.x -= disX;
        this.y -= disY
        this.controller.translate(Math.floor(scrollLeft),Math.floor(scrollTop));
        return this.oldPosition = undefined
    }

    // 更新根节点宽高
    updateRootWidth() {
        const rect = this.root.rect;
        const remindRect = this.remind.container.getBoundingClientRect();
        const width = Math.max(rect.width * 3,remindRect.width * 3);
        const height = Math.max(rect.height * 3,remindRect.height * 3)
        this.remind.dom.style.width = width + 'px';
        this.remind.dom.style.height = height + 'px';
        this.scrollLeft = (width - remindRect.width) / 2;
        this.scrollTop = (height - remindRect.height) / 2;
        this.x = this.scrollLeft + (remindRect.width - rect.width) / 2;
        this.y = this.scrollTop + (remindRect.height - rect.height) / 2;
        /**
         * 最外层容器的rect
         * @var 
         */
        this.remindRect = remindRect;
        // 让root居中
        this.dom.style.transform = `matrix(1, 0, 0, 1, ${this.x},${this.y})`;
        return;
    }

    render(){
        this.updateCanvasStyle();
        this.root.render();
        if(this.options.renderEngine === 'canvas'){
            this.renderCanvas();
        }else{
            this.renderSVG();
        }
    }

    updateCanvasStyle(){
        const rect = this.root.rect;
        this.canvas.width = rect.width + 10;
        this.canvas.height = rect.height + 10;
        this.canvas.style.width = rect.width + 10 + 'px';
        this.canvas.style.height = rect.height + 10 + 'px';
        this.svg.style.width = rect.width + 10 + 'px';
        this.svg.style.height = rect.height + 10 + 'px';
        this.dom.style.width = rect.width + 'px';
        this.dom.style.height = rect.height + 'px';
    }

    renderCanvas(){
        const ctx = this.canvasContext;
        ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
        this.lines.forEach(line=>{
            ctx.beginPath();
            const {fill,color} = line;
            ctx.fillStyle = fill;
            ctx.strokeStyle = color;
            line.path.forEach(point=>{
                const {x1,y1,x2,y2,x,y} = point
                switch(point.type){
                    case 'bezier3': ctx.bezierCurveTo(x1,y1,x2,y2,x,y);break;
                    case 'bezier2': ctx.quadraticCurveTo(x1,y1,x,y);break;
                    case 'moveTo': ctx.moveTo(x,y);break;
                    default: ctx.lineTo(x,y);break;
                }
            })
            ctx.stroke();
        })
    }

    paths = [];
    renderSVG(){
        let end = 0;
        let allStr = '';
        this.lines.forEach((line,index)=>{ 
            if(!line)return;
            let pathStr = '';
            const {fill,color} = line;
            line.path.forEach(point=>{
                const {x1,y1,x2,y2,x,y} = point
                switch(point.type){
                    case 'bezier3': pathStr += ` C${x1} ${y1} ${x2} ${y2} ${x} ${y}`;break;
                    case 'bezier2': pathStr += ` Q${x1} ${y1} ${x} ${y}`;break;
                    case 'moveTo': pathStr += `M${x} ${y}`;break;
                    default: pathStr += ` L${x} ${y}`;
                }
            })
            allStr += `<path data-name="${line.name || ''}" d='${pathStr}' fill="${fill ? fill : 'transparent'}" stroke='${color ? color : 'transparent'}' ></path>`
            end = index;
        })
        this.svgConatiner.innerHTML = allStr;
        this.paths.splice(end,this.paths.length - end)
    }

    getByEvent(e){
        let item = e.target;
        while(item && item.className.indexOf("remind-item") === -1){
            item = item.parent
        }
        if(!item)return false;
        let res ;
        const dfs = (items)=>{
            if(res)return;
            for(let i = 0 ;i < items.length;i++){
                if(items[i].dom === item){
                    res = items[i];
                    break;
                }
                dfs(items[i].children)
            }
        }
        dfs([this.root]);
        return res;
    }

    getItemByUUID(uuid){
        let res ;
        function dfs(now){
            if(now.data.uuid === uuid){
                res = now;
                return;
            }else{
                now.children.forEach(child=>{
                    !res && dfs(child)
                })
            }
        }
        dfs(this.root)
        return res; 
    }

    resetTheme(reRender) {
        this.root.resetTheme();
        return this;
    }

    removeChild(){
        this.root = undefined;
    }
    

    destroy(){
        this.root.destroy();
        this.remind.dom.removeEventListener("click",this.onClickPage)
    }

}
export default Page;
