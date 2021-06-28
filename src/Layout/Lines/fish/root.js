function drawRoot(item){
     const {rect,contentRect} = item;
     const {direction} = this;
     const { minFishWidth = 200,minFishHeight = 50,angle,fishTailWidth = 50,headGap = 50} = this.remind.options.fish;
        
     const color = item.getColor();
     const startPos = {
        x:item.x + (direction === 'right' ? 0 : -contentRect.width),
        y:item.y + contentRect.height / 2,
        type:"moveTo"
    }
    const endPos = {
        x:(direction === 'right' ? (item.globalPos.x + fishTailWidth) : (item.globalPos.x + rect.width - fishTailWidth)),
        y:startPos.y
    };
     const bodyData = {
         path:[startPos,endPos],
         color
     }
     
     this.page.lines.push(bodyData);

     //尾巴
     const startX = endPos.x + (direction === 'right' ? -fishTailWidth : fishTailWidth);
     const disY = fishTailWidth * Math.tan(angle / 2);
     this.page.lines.push({
        path:[{
            type:'moveTo',
            x:startX,
            y:endPos.y - disY,
        },{
           ...endPos
        },{
            x:startX,
            y:endPos.y + disY,
        }],
        color
     });
    //  if(item.children.length){
    //     item.children.forEach(child=>{
    //         if(child.data.layout && child.data.layout !== 'fish'){
    //            this.line.item.call(this,child)
    //         }
    //     })
    // }
}
// 不得使用箭头函数
export default drawRoot