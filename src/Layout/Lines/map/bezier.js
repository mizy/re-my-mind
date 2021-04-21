function bezier(item){
        const { spaceX } = this.remind.options;
        const isUnderLine = item.getShape().indexOf('underline')>-1;

        let startPos = {
            x:item.x+item.contentRect.width,
            y:item.y+item.contentRect.height/2
        }
        // 下划线的话给自己底部加上颜色
        if(isUnderLine){
            this.page.lines.push(this.line.common.renderUnderline.call(this,item,startPos));
        }
        if(item.data.shrink||!item.children.length){
            return item;
        }
        let leftStartPos = {
            x:item.x,
            y:item.y+item.contentRect.height/2
        }
        item.rightChildren.forEach(child=>{
            let x,y,start = startPos;
            const shape = child.getShape();
            x = child.x;
             
            const isUnderLine = shape.indexOf('underline')>-1;
            // 下划线情况，终点坐标要不太一样
            if(isUnderLine){
                y = child.y+child.contentRect.height;
            }else{
                y = child.y+child.contentRect.height/2;
            }
            const bezierPos = {
                x1:(start.x+x)*0.5,
                y1:start.y,
                x2:(start.x+x)*0.5,
                y2:y
            }
            const data = {
                path:[],
                color:child.getColor()
            }
            data.path.push({
                x:start.x,
                y:start.y,
                type:"moveTo"
            });
            data.path.push({
                ...bezierPos,x,y,type:"bezier3"
            })
            this.page.lines.push(data)
        })

        item.leftChildren.forEach(child=>{
            let x,y,start = leftStartPos;
            const shape = child.getShape();
            x = child.x+child.contentRect.width;
            
            const isUnderLine = shape.indexOf('underline')>-1;
            // 下划线情况，终点坐标要不太一样
            if(isUnderLine){
                y = child.y+child.contentRect.height;
            }else{
                y = child.y+child.contentRect.height/2;
            }
            const bezierPos = {
                x1:(start.x+x)*0.5,
                y1:start.y,
                x2:(start.x+x)*0.5,
                y2:y
            }
            const data = {
                path:[],
                color:child.getColor()
            }
            data.path.push({
                x:start.x,
                y:start.y,
                type:"moveTo"
            });
            data.path.push({
                ...bezierPos,x,y,type:"bezier3"
            })
            this.page.lines.push(data)
        })

}
// 不得使用箭头函数
export default bezier