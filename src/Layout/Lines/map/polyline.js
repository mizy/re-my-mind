function polyline(item){
    const { spaceX } = this.remind.options;
    const isUnderLine = item.getShape().indexOf('underline')>-1;

    let startPos = {
        x:item.x+item.contentRect.width/2,
        y:item.y+item.contentRect.height/2
    }
    // 下划线的话给自己底部加上颜色
    let lineData = {
        path:[],
        color:item.getColor()
    }
    if(isUnderLine){
        lineData = this.line.common.renderUnderline.call(this,item,startPos);
    }
    // 收缩不绘制子元素
    if(item.data.shrink||item.children.length<1){
        this.page.lines.push(lineData)
        return item;
    }
     
    const direction = item.getLayout().direction;
    const firstChild = item.children[0];

    const middle = {
        x:firstChild.x-spaceX/2,
        y:startPos.y
    }
    let side = 'right'
    if(firstChild.x>item.x){//右边

    }else{//左边
        side = 'left'
        middle = {
            x:item.x-spaceX/2,
            y:startPos.y
        }
    }
    let leftStartPos = {
        x:item.x,
        y:item.y+item.contentRect.height/2
    }

    if(!isUnderLine){
        lineData.path.push({
            ...startPos,
            type:"moveTo"
        })
    } 
    lineData.path.push({...middle});
    this.page.lines.push(lineData);

    item.children.forEach((child,index)=>{
        let x,y;
        const shape = child.getShape();
        x = child.x;
        const isUnderLine = shape.indexOf('underline')>-1;
        // 下划线情况，终点坐标要不太一样
        if(isUnderLine){
            y = child.y+child.contentRect.height;
        }else{
            y = child.y+child.contentRect.height/2;
        }
        
        const lineData = {
            path:[],
            color:child.getColor()
        }
        
        if(index===0||index===item.children.length-1){
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
            
       
        if(this.remind.options.showArrow){
            const arrowData = this.line.common.renderArrow.call(this,
                {
                    x:middle.x,y
                },
                {x,y});
            arrowData.color = lineData.color;
            this.page.lines.push(arrowData)
        }
        this.page.lines.push(lineData)
    })

    
}
// 不得使用箭头函数
export default polyline