function bezier(item){
        const isUnderLine = item.getShape().indexOf('underline') > -1;
        const {direction} = this;
        let underlinePos = {
            x:item.x + item.contentRect.width,
            y:item.y + item.contentRect.height / 2
        }
        // 下划线的话给自己底部加上颜色
        if(isUnderLine){
            this.page.lines.push(this.line.common.renderUnderline.call(this,item,underlinePos));
        }
        if(item.data.shrink || !item.children.length){
            return item;
        } 
        const startPos = {
            x:item.x + item.contentRect.width / 2,
            y:item.y + (direction === 'bottom' ? item.contentRect.height : 0)
        }
        item.children.forEach(child=>{
            let x = child.x + child.contentRect.width / 2,
                y = child.y + (direction !== 'bottom' ? child.contentRect.height : 0),
                start = startPos;

            const bezierPos = {
                x1:start.x,
                y1:(start.y + y) * 0.5,
                x2:x,
                y2:(start.y + y) * 0.5,
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