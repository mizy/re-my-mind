function taper(item){

    if(item.data.shrink || !item.children.length){
        return item;
    } 
    const itemPos = {
        x:item.x + item.contentRect.width * 0.5,
        y:item.y + item.contentRect.height * 0.5
    }
    const halfThick = this.LINE_THICKNESS / 2;
    item.rightChildren.forEach(child=>{
        let x,y;
        const shape = child.getShape();
        x = child.x;
        const isUnderLine = shape.indexOf('underline') > -1;
        // 下划线情况，终点坐标要不太一样
        if(isUnderLine){
            y = child.y + child.contentRect.height;
        }else{
            y = child.y + child.contentRect.height / 2;
        }
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
            x1:(x + itemPos.x) / 2,
            y1:y,
            x,
            y,
            type:"bezier2"
        })
        data.path.push({
            x1:(x + itemPos.x) / 2,
            y1:y,
            x:itemPos.x + dx,
            y:itemPos.y + dy,
            type:"bezier2"
        })
        this.page.lines.push(data)
    })
    item.leftChildren.forEach(child=>{
        let x,y;
        const shape = child.getShape();
        x = child.x + child.contentRect.width;
        const isUnderLine = shape.indexOf('underline') > -1;
        // 下划线情况，终点坐标要不太一样
        if(isUnderLine){
            y = child.y + child.contentRect.height;
        }else{
            y = child.y + child.contentRect.height / 2;
        }
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
            x1:(x + itemPos.x) / 2,
            y1:y,
            x,
            y,
            type:"bezier2"
        })
        data.path.push({
            x1:(x + itemPos.x) / 2,
            y1:y,
            x:itemPos.x + dx,
            y:itemPos.y + dy,
            type:"bezier2"
        })
        this.page.lines.push(data)
    })

}
// 不得使用箭头函数
export default taper