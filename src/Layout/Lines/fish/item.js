function drawItem(item){
     const {rect,contentRect} = item;
     const {direction} = this;
     const isTop = this.isTop(item);
     const color = item.getColor();
     const shape = item.getShape();
     const isUnderLine = shape.indexOf("underline") > -1;
     const {angle} = this.remind.options.fish;
    
    if(isUnderLine){
        const underlineData = this.line.common.renderUnderline.call(this,item,{},isTop);
        this.page.lines.push(underlineData)
    }
    const k = Math.tan(angle)
    const startPos = {
        x:item.x + contentRect.width / 2,
        y:item.y + (isTop ? contentRect.height : 0),
        type:"moveTo"
    }
    const endPos = {
        x:direction === 'right' ? ((rect.height - contentRect.height) / k + item.x + contentRect.width / 2) : item.globalPos.x,
        y:item.globalPos.y + (isTop ? rect.height : 0)
    };
    
     
     if(item.depth % 2 !== 1){// 水平
       
        if(!isUnderLine){
            const disX = contentRect.height / 2 / k;
            startPos.x = item.x + (direction === 'right' ? item.contentRect.width : 0);
            endPos.x = direction === 'right' ? (item.globalPos.x + item.rect.width + disX) : (item.globalPos.x - disX);
            startPos.y = item.y +  contentRect.height * 0.5;
            endPos.y = startPos.y
        }else{
            startPos.x = item.x + (direction === 'right' ? 0 : item.contentRect.width);
            endPos.x = startPos.x + (direction === 'right' ? 1 : -1) * (item.rect.width + item.rect.height / k);
        }
     }
     const bodyData = {
        path:[startPos,endPos],
        color
    }
     this.page.lines.push(bodyData);
    
}
// 不得使用箭头函数
export default drawItem