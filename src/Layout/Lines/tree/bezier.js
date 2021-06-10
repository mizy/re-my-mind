const radius = 4;
function bezier(item){
    const { spaceX } = this.remind.options.tree;
    const {direction} = this;
    const isUnderLine = item.getShape().indexOf('underline') > -1;

    
    // 下划线的话给自己底部加上颜色
    if(isUnderLine){
        this.page.lines.push(this.line.common.renderUnderline.call(this,item,{}));
    }
    if(item.data.shrink || !item.children.length){
        return item;
    }
    const startPos = {
        x:item.x + (direction === 'right' ? spaceX : (item.contentRect.width - spaceX)),
        y:item.y + item.contentRect.height
    }

    // 直接连接到底部的线
    const lastChild = item.children.slice(-1)[0];
    const lastShape = lastChild.getShape();
    const endY = lastChild.y + lastChild.contentRect.height * (lastShape.indexOf('underline') > -1 ? 1 : 0.5)  - radius;//4像素的转角
    const lineData = {
        path:[{
            type:"moveTo",
            ...startPos
        },{
            x:startPos.x,
            y:endY
        }],
        color:item.getColor()
    } 
    this.page.lines.push(lineData);

    item.children.forEach(child=>{
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
        
        const data = {
            path:[],
            color:lineData.color
        }
        data.path.push({
            x:startPos.x,
            y:y - radius,
            type:"moveTo"
        });
        data.path.push({
            x1:startPos.x,
            y1:y,
            x:startPos.x + (direction === 'right' ? radius : -radius),
            y,
            type:"bezier2"
        })
        data.path.push({
            x,
            y
        })
        this.page.lines.push(data)
    })

}
// 不得使用箭头函数
export default bezier