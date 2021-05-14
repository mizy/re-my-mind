function taper(item){
    const {direction} = this;
    if(item.data.shrink || !item.children.length){
        return item;
    } 
    const itemPos = {
        x:item.x + item.contentRect.width * 0.5,
        y:item.y + item.contentRect.height * 0.5
    }
    const halfThick = this.LINE_THICKNESS / 2;
    item.children.forEach(child=>{
        const x = child.x + child.contentRect.width * 0.5; 
        const y = child.y + (direction !== 'bottom' ? child.contentRect.height : 0); 

        const angle = Math.atan2(y - itemPos.y,x - itemPos.x) + Math.PI / 2;
        const dx = Math.cos(angle) * halfThick;
        const dy = Math.sin(angle) * halfThick;
        const color = child.getColor();
        const data = {
            path:[],
            fill:color,
            color
        };
        data.path.push({
            x:itemPos.x - dx,
            y:itemPos.y - dy,
            type:"moveTo"
        })
        data.path.push({
            x1:x,
            y1:(y + itemPos.y) / 2,
            x,
            y,
            type:"bezier2"
        })
        data.path.push({
            y1:(y + itemPos.y) / 2,
            x1:x,
            x:itemPos.x + dx,
            y:itemPos.y + dy,
            type:"bezier2"
        })
        this.page.lines.push(data)
    })
   

}
// 不得使用箭头函数
export default taper