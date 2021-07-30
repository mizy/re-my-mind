/**
 * @class
 */
class Controller{
    constructor(remind){
        this.remind = remind;
        this.option = Object.assign({
            animationFrame:14
        },remind.options.controller)
        /**
         * @prop {Number}
         */
        this.scale = 1;
        /**
         * @prop {Number}
         */
        this.x = 0;
        /**
         * @prop {Number}
         */
        this.y = 0;
         /**
         * @prop {String} 状态
         */
        this.status = 'normal';
        this.addEvents(); 
    }
 
    addEvents(){
        const {remindDOM} = this.remind;
        remindDOM.addEventListener("mousewheel",(e)=>{
            if (e.ctrlKey) {// 双指
                e.preventDefault();
				let { scale } = this;
				scale = scale * (1 - e.deltaY / 50);
				if (scale < 0.05 || scale > 10) return;
                const originDis = {
                    x:e.layerX - this.remind.page.x,
                    y:e.layerY - this.remind.page.y
                };
                const scaleDis = scale / this.scale;
                const newOriginDis = {
                    x:originDis.x * scaleDis - originDis.x,
                    y:originDis.y * scaleDis - originDis.y
                }
                this.x += newOriginDis.x ;
                this.y += newOriginDis.y;
                this.setScale(scale)
				return;
			}
        })
        remindDOM.addEventListener("mousedown",(e)=>{

			if (!e.path.find(item=>item.tagName === "DIV" && (item.className.indexOf("remind-item") > -1 || item.className.indexOf("mm-note")) > -1)) { /* context menu here, after we have the item */
				return this.startMove(e);
			}
        })
        remindDOM.addEventListener("mousemove",(e)=>{
            if(this.status === 'page:move'){
                return this.pageMove(e)
            }
        })
        remindDOM.addEventListener("scroll",()=>{
            setTimeout(()=>{
                this.x = remindDOM.scrollLeft;
                this.y = remindDOM.scrollTop;
            },1)
        })
    }

    /**
     * 设置缩放并实施
     * @param {Number} scale 
     */
    setScale(scale){
        this.scale = scale;
        this.update();
        this.remind.fire("zoom",this.scale)
    }

    startMove=(event)=>{
        this.status = 'page:move';
        this.startEvent = event;
        this.startPos = {
            x:this.x,
            y:this.y
        }
        window.document.addEventListener("mouseup",this.onEndMove)
    }

    pageMove=(e)=>{
        const {pageX,pageY} = e;
        const disX = pageX - this.startEvent.pageX;
        const disY = pageY - this.startEvent.pageY;
        this.x = -disX + this.startPos.x;
        this.y = -disY + this.startPos.y;
        this.update();
    }

    onEndMove=()=>{
        this.status = 'normal'
        window.document.removeEventListener("mouseup",this.onEndMove)
    }

    /**
     * 移动到指定位置
     * @param {Number} x 
     * @param {Number} y 
     * @param {Boolean} animate 是否动画
     */
    translate(x,y,animate){
        const {animationFrame = 14} = this.option;
        if(!animate || !this.x || !this.y){
            this.x = x;
            this.y = y ;
            cancelAnimationFrame(this.animating);
            this.update();
            return
        }
        if(this.animating){// 动画中的话要先停止现在的动画
            cancelAnimationFrame(this.animating);
            /**
             * @prop {Number} animating 是否正在动画
             */
            this.animating = 0;
        }
        const disX = (x - this.x) / animationFrame;
        const disY = (y - this.y) / animationFrame;
        const update = ()=>{
            this.animating = requestAnimationFrame(()=>{
                this.x += disX;
                this.y += disY;
                if((disX > 0 && this.x > x) || (disX < 0 && this.x < x)){
                    this.x = x;
                }
                if((disY > 0 && this.y > y) || (disY < 0 && this.y < y)){
                    this.y = y;
                }
                this.update();
                if(this.x !== x || this.y !== y){
                    update();
                }else{
                    this.animating = 0;
                }
            })
        }
        update()
    }

    /**
     * 根据数据进行移动
     */
    update(){
        const {scale,x,y} = this;
        this.remind.remindDOM.scrollLeft = x;
        this.remind.remindDOM.scrollTop = y;
        const {page} = this.remind;
        page.dom.style.transform = `matrix(${scale}, 0, 0, ${scale}, ${page.x},${page.y})`;
    }
}

export default Controller;