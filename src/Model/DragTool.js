import Item from '../View/Item';
/**
 * @class
 */
class DragTool{
    constructor(page){
        this.page = page;
        this.initGhost();//初始化一个用来拖拽的GhostItem
    }

    initGhost(){
        this.ghost = new Item(this.page,{
            data:{
                text:'ghost',
                type:"ghost"
            },
            visible:false
        });
        this.ghost.render()
    }   

    startDrag =(startEvent,event,item)=>{
        if(item.isRoot())return;
        this.startEvent = startEvent;
        this.item = item;
        item.updateVisible(item.children,false);
        item.update();
        item.parent.removeChild(item);
        item.dom.style.opacity = 0.5;
        this.pageStartPos = {
            x:this.page.x,
            y:this.page.y
        }
        this.ghost.visible = true;
        this.ghost.data.text  = item.data.text;
        this.ghost.updateContent();
        this.ghost.render();
         
        this.page.dom.addEventListener("mousemove",this.onDragMove);
        window.addEventListener("mouseup",this.onDrop)
    }

    onDragMove = (e)=>{
        e.preventDefault();
        if(this.timeout)return;

        const{item} = this;
        const x = e.layerX - this.page.x ;
        const y = e.layerY - this.page.y;
        this.item.dom.style.transform = `matrix(1, 0, 0, 1, ${x - item.contentRect.width / 2},${y - item.contentRect.height / 2})`;
        const closetItem = this.findDropItem(x,y);
        if(!closetItem || closetItem.data.type === 'ghost' || closetItem.isRoot()){
            return;
        }
        // 计算父容器和序号
        const layout = closetItem.getLayout();
        const direction = closetItem.data.side || layout.direction;
         
        let index = closetItem.index;
        let parent = closetItem.parent;
        if(direction === 'right' || direction === 'left'){
            const shape = closetItem.getShape();
            const isUnderline = shape.indexOf("underline") > -1;
            if((x > (closetItem.x + closetItem.contentRect.width) && direction === 'right') || (x < closetItem.x && direction === 'left')){
                parent = closetItem;
                index = 0;
            }else{
                if(y > (closetItem.y + closetItem.contentRect.height * (isUnderline ? 1 : 0.5))){
                    index++;
                }
            }
        }else{
            if((y > (closetItem.y + closetItem.contentRect.height) && direction === 'bottom') || (y < closetItem.y && direction === 'top')){
                parent = closetItem;
                index = 0;
            }else if(x > (closetItem.x + closetItem.contentRect.width / 2)){
                index++;
            }
        }
        if(this.ghost.parent === parent && this.ghost.index < index){
            index--
        }
        parent.insertChild(this.ghost,index,true);
        this.parent = parent;
        this.index = index;
        this.timeout = 1;

        setTimeout(()=>{
            this.timeout = undefined;//拖动改成30帧
        },30)
    }

    /**
     * 通过坐标找到需要插入的父节点和位置
     * 判断坐标是否在item.childrenBBox中来确定是否要下钻到下一级
     * @param {*}} x 
     * @param {*} y 
     * @returns {Item}
     */
    findDropItem(x,y){
        const {page} = this;
        let closetItem,minDistance = Infinity,direction,res;
        const dfs = (item)=>{
            // 元素中心点
            const center = {
                x:item.x + item.contentRect.width / 2,
                y:item.y + item.contentRect.height / 2
            }
            // 是否在元素内部
            if(this.isInBBox(x,y,{
                ...item.contentRect,
                x:item.x,
                y:item.y
            })){
                res = true;
                closetItem = item;//在元素内部则直接就是它了
                return true;
            }
            const distance = Math.pow(x - center.x,2) + Math.pow(y - center.y,2);
            if(distance <= minDistance){
                minDistance = distance;
                closetItem = item;
            }
            for(let i = 0;i < item.children.length;i++){
                const child = item.children[i];
                if(!res){
                    dfs(child)
                }
            }
        }
        dfs(page.root);
        return closetItem;
    }

    /**
     * 是否坐标在bbox中
     * @param {Number} x 
     * @param {Number} y 
     * @param {SVGBBox} bbox 
     */
    isInBBox(x,y,bbox){
        if(x > bbox.x && x < (bbox.x + bbox.width) && y > bbox.y && y < (bbox.y + bbox.height)){
            return true;
        }
        return false;
    }

    // 重新挂载父节点
    moveDragItem(){
        
    }

    onDrop = (e)=>{
        this.item.dom.style.opacity = 1;
        this.ghost.parent.removeChild(this.ghost);
        this.ghost.visible = false;
        this.ghost.render();
        this.item.updateVisible(this.item.children,true);
        this.parent.insertChild(this.item,this.index);
        this.item = undefined;
        this.parent = undefined;
        this.index = undefined;
        this.page.dom.removeEventListener("mousemove",this.onDragMove);
        window.removeEventListener("mouseup",this.onDrop)
    }

    /**
     * 销毁
     */
    destroy(){
        this.page = undefined;
        this.ghost.destroy();
    }
}
export default DragTool;