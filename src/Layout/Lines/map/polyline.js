function polyline(item){
    const { spaceX } = this.remind.options.map;
    const isUnderLine = item.getShape().indexOf('underline') > -1;

    const color = item.getColor();
    let startPos = {
        x:item.x + item.contentRect.width / 2,
        y:item.y + item.contentRect.height / 2
    }
    // 下划线的话给自己底部加上颜色
    let underlineData = {
        name:"underline",
        path:[],
        color,
    }
    if(isUnderLine){
        underlineData = this.line.common.renderUnderline.call(this,item,startPos);
        this.page.lines.push(underlineData)
    }
    // 收缩不绘制子元素
    if(item.data.shrink || item.children.length < 1){
        return item;
    }
     
    // 绘制左右两边的链接中线
    let firstChild = item.rightChildren[0];
    if(firstChild){
        let middle = {
            x:firstChild.x - spaceX / 2,
            y:startPos.y
        }
        const lineData = {
            path:[],
            color
        }
        lineData.path.push({
            ...startPos,
            type:"moveTo"
        },middle)
        this.page.lines.push(lineData);
        // 绘制右边子节点的连接线
        item.rightChildren.forEach((child,index)=>{
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
            
            const lineData = {
                path:[],
                name:'connect',
                color
            }
            if(index === 0 || index === item.children.length - 1){
                lineData.path.push({
                    ...middle,
                    type:'moveTo'
                },{
                    x:middle.x,
                    y
                })
            }else{
                lineData.path.push({
                    type:"moveTo",
                    x:middle.x,
                    y
                })
            }
            lineData.path.push({
                x,y
            })
            // 箭头
            if(this.remind.options.showArrow){
                const arrowData = this.line.common.renderArrow.call(this,
                    {
                        x:middle.x,y
                    },
                    {x,y});
                arrowData.color = color;
                arrowData.name = 'arrow';
                this.page.lines.push(arrowData)
            }
            this.page.lines.push(lineData)
        })
    }
    firstChild = item.leftChildren[0];
    if(firstChild){
        let middle = {
            x:item.x - spaceX / 2,
            y:startPos.y
        }
        startPos.x = item.x;
        this.page.lines.push({
            path:[{
                ...startPos,
                type:"moveTo"
            },middle],
            color
        });
        // 绘制左边子节点的线
        item.leftChildren.forEach((child,index)=>{
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
            const lineData = {
                path:[],
                name:'connect',
                color
            }
            if(index === 0 || index === item.children.length - 1){
                lineData.path.push({
                    ...middle,
                    type:'moveTo'
                },{
                    x:middle.x,
                    y
                })
            }else{
                lineData.path.push({
                    type:"moveTo",
                    x:middle.x,
                    y
                })
            }
            lineData.path.push({
                x,y
            })
            // 箭头
            if(this.remind.options.showArrow){
                const arrowData = this.line.common.renderArrow.call(this,
                    {
                        x:middle.x,y
                    },
                    {x ,y});
                arrowData.color = lineData.color;
                arrowData.name = 'arrow';
                this.page.lines.push(arrowData)
            }
            this.page.lines.push(lineData)
        })
    }
    
}
// 不得使用箭头函数
export default polyline