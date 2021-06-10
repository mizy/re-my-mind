class Controller{
    constructor(remind){
        this.remind = remind;
        this.scale = 1;
        this.x = 0;
        this.y = 0;
        this.stat

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
				this.scale = scale;
                this.update();
                this.remind.fire("zoom",this.scale)
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

    translate(x,y,animate){
        if(!animate || !this.x || !this.y){
            this.x = x;
            this.y = y ;
            this.update();
            return
        }
        const disX = (x - this.x) / 14;
        const disY = (y - this.y) / 14;
        const update = ()=>requestAnimationFrame(()=>{
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
            }
        })
        update()
    }

    update(){
        const {scale,x,y} = this;
        this.remind.remindDOM.scrollLeft = x;
        this.remind.remindDOM.scrollTop = y;
        const {page} = this.remind;
        page.dom.style.transform = `matrix(${scale}, 0, 0, ${scale}, ${page.x},${page.y})`;
    }
}

export default Controller;