function polyline(item){
    const { spaceY } = this.remind.options.site;
    const isUnderLine = item.getShape().indexOf('underline') > -1;
    const {direction} = this;
    // 下划线的话给自己底部加上颜色
    if(isUnderLine){
        this.page.lines.push(this.line.common.renderUnderline.call(this,item,{}));
    }
     
    // 收缩不绘制子元素
    if(item.data.shrink || item.children.length < 1){
        return item;
    }
   
    const startPos = {
        x:item.x + item.contentRect.width / 2,
        y:item.y + (direction === 'bottom' ? item.contentRect.height : 0)
    }
    let middle = {
        x:startPos.x,
        y:startPos.y + (direction === 'bottom' ? spaceY / 2 : -spaceY / 2),
    }
    const lineData = {
        path:[],
        color:item.getColor()
    }
    lineData.path.push({
        ...startPos,
        name:'middle',
        type:"moveTo"
    },middle)
    this.page.lines.push(lineData);
    // 绘制右边子节点的连接线
    item.children.forEach((child,index)=>{
        let x = child.x + child.contentRect.width / 2,
        y = startPos.y + (direction === 'bottom' ? spaceY : -spaceY);
        
        const lineData = {
            path:[],
            name:'connect',
            color:child.getColor()
        }
        if(index === 0 || index === item.children.length - 1){
            lineData.path.push({
                ...middle,
                type:'moveTo'
            },{
                y:middle.y,
                x
            })
        }else{
            lineData.path.push({
                type:"moveTo",
                x,
                y:middle.y
            })
        }
        lineData.path.push({
            x,y
        })
        // 箭头
        if(this.remind.options.showArrow){
            const arrowData = this.line.common.renderArrow.call(this,
                {
                    x,y:middle.y
                },
                {x,y});
            arrowData.color = lineData.color;
            arrowData.name = 'arrow';
            this.page.lines.push(arrowData)
        }
        this.page.lines.push(lineData)
    })
   
    
}
// 不得使用箭头函数
export default polyline