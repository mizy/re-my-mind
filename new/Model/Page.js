import Item from "../View/Item";

class Page {
    constructor(remind){
        this.remind = remind;
        this.options = remind.options;
        this.root = null;
        this.visible = false;
        this.position = [0, 0]; 
        this.initDOM();
        this.initCanvas();
        if (this.options.data) {
            this.setData(this.options.data);
        } else {
            this.setData({
                root: {
                    text:this.options.rootName || 'Root',
                    layout: 'map',
                    children:[{
                        text:'abc',
                        shrink:true,
                        shape:"underline",
                        children:[
                            {
                                text:'abc'
                            }, {
                                text:'abc'
                            }, {
                                text:'abc'
                            }
                        ]
                    },{
                        shape:"underline",
                        text:'abc2',
                    },{
                        shape:"underline",
                        text:'abc3',
                    }]
                },
            });
        }
        this.show();
        this.addEvents();
    }

    initDOM(){
        this.dom =  document.createElement("div");
        this.dom.className = 'remind-page';
        this.remind.dom.appendChild(this.dom);
    }

    initCanvas(){
        this.canvas = document.createElement("canvas");
        this.canvas.className = 'remind-canvas'
        this.canvasContext = this.canvas.getContext('2d');
        this.dom.appendChild(this.canvas);
    } 

    setData(data){
        this.root&&this.root.destroy();
        const root = new Item(this,{
            depth:0
        });
        root.setData(data.root);
        this.root = root;
        this.root.parent = this;
        this.theme = data.theme;
    }

    addEvents(){
        this.dom.addEventListener("click",this.onClickPage);
        // this.dom.addEventListener("mousedown",this.onMouseDown);
    }

    onMouseDown(event){
        const startEvent = event;
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

    onClickPage=(e)=>{
        this.deselect();
    }

    select(item){
        this.deselect();
        if(item===this.current){
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
        this.updateCanvasStyle();
        this.updateRootWidth();
        this.render();
        this.refusePosition();
    }

    rememberPosition(item){
        this.oldPosition={
            item,
            x:item.x,
            y:item.y
        }
    }

    refusePosition(){
        if(!this.oldPosition)return;
        const {x,y,item} = this.oldPosition;
        this.translate(this.x-(item.x-x),this.y-(item.y-y));
        return this.oldPosition = undefined
    }
    
    updateCanvasStyle(){
        const rect = this.root.rect;
        this.canvas.width = rect.width;
        this.canvas.height = rect.height;
        this.canvas.style.width = rect.width+'px';
        this.canvas.style.height = rect.height+'px'
    }

    updateRootWidth() {
        const rect = this.root.rect;
        const remindRect = this.remind.container.getBoundingClientRect();
        const width = Math.max(rect.width*3,remindRect.width*3);
        const height = Math.max(rect.height*3,remindRect.height*3)
        this.remind.dom.style.width = width+'px';
        this.remind.dom.style.height = height+'px';
        this.scrollLeft = (width-remindRect.width)/2;
        this.scrollTop = (height-remindRect.height)/2;
        /**
         * 最外层容器的rect
         * @var 
         */
        this.remindRect = remindRect;
        return;
    }

    render(){
        this.canvasContext.clearRect(0,0,this.canvas.width,this.canvas.height)
        this.root.render();
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

    destroy(){
        this.root.destroy();
        this.remind.dom.removeEventListener("click",this.onClickPage)
    }

}
export default Page;
