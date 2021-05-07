import Item from "../View/Item";
import {MapLayout} from '../Layout';
const data = (()=>{
    const data = {
        root: {
            text:'Root',
            layout: 'map',
            color:"blue",
            children:[]
        }
    } 
    function make(item,number,depth,index){
        let total = number;
        while(number > 0){
            const child = {
                text:`${depth}-${index}-${number}`,
                color:"red",
                children:[]
            }
            item.children.push(child);
            number--;
            if(depth > 0){
                make(child,total,depth - 1,item.children.length);
            }
        }
    }
    make(data.root,2,2,1);
    return data;
})();
class Page {
    lines=[];
    constructor(remind){
        this.remind = remind;
        this.options = remind.options;
        this.root = null;
        this.visible = false;
        this.position = [0, 0]; 
        this.initDOM();
        this.initLayout();
        this.initCanvas();
        if (this.options.data) {
            this.setData(this.options.data);
        } else {
            this.setData(data);
        }
        // 延时进行操作
        requestAnimationFrame(()=>{
            this.show();
        })
    }

    initLayout(){
        this.layout = {
            map:new MapLayout(this),
            'map-right':new MapLayout(this,'right'),
            'map-left':new MapLayout(this,'left')
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
        const root = new Item(this,{
            depth:0
        });
        root.setData(data.root);
        this.root = root;
        this.root.parent = this;
        this.theme = data.theme;
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
        this.current.dom.classList.add('active');
    }

    deselect(){
        if(!this.current)return;
        this.current.dom.classList.remove('active');
        this.current = undefined;
    }

    getColor(){
        return '#999'
    }
 
    toJSON(){
        const data = {
            root: this.root.toJSON(),
            theme: this.theme
        };
        return data;
    }

    show(){
        this.updateSubtree();
        this.update();
        this.root.center();
        this.select(this.root);
        return this;
    }

    // 更新节点树信息
    updateSubtree(){
        this.root.updateSubtree();
    }

    // 渲染
    update(){
        this.lines = []
        this.updateRootWidth();
        this.render();
        this.refusePosition();
    }

    rememberPosition(item){
        this.oldPosition = {
            item,
            x:item.x,
            y:item.y
        }
    }

    refusePosition(){
        if(!this.oldPosition)return;
        const {x,y,item} = this.oldPosition;
        this.translate(this.x - (item.x - x),this.y - (item.y - y));
        return this.oldPosition = undefined
    }

    updateRootWidth() {
        const rect = this.root.rect;
        const remindRect = this.remind.container.getBoundingClientRect();
        const width = Math.max(rect.width * 3,remindRect.width * 3);
        const height = Math.max(rect.height * 3,remindRect.height * 3)
        this.remind.dom.style.width = width + 'px';
        this.remind.dom.style.height = height + 'px';
        this.scrollLeft = (width - remindRect.width) / 2;
        this.scrollTop = (height - remindRect.height) / 2;
        /**
         * 最外层容器的rect
         * @var 
         */
        this.remindRect = remindRect;
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

    translate(x,y){
        this.dom.style.transform = `matrix(1, 0, 0, 1, ${x},${y})`;
        this.x = x;
        this.y = y;
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
