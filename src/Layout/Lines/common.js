function renderUnderline(item,startPos){
    startPos.x = item.x+item.contentRect.width;
    startPos.y = item.y+item.contentRect.height;
    const path=[];
    path.push({x:item.x,y:item.y+item.contentRect.height,type:"moveTo"});
    path.push({x:startPos.x,y:startPos.y});
    const color = item.getColor();
    return {
        path,color
    }
}

function renderArrow(middle,end){
    const angle = Math.atan2(end.y-middle.y,end.x-middle.x);
    const topAngle = Math.PI*5/6+angle;
    const bottomAngle = -Math.PI*5/6+angle;
    const length = 5;
    const top = {
        x:end.x + length*Math.cos(topAngle),
        y:end.y -length*Math.sin(topAngle)
    }
    const bottom = {
        x:end.x + length*Math.cos(bottomAngle),
        y:end.y - length*Math.sin(bottomAngle)
    }
    return {
        path:[{
            ...top,
            type:"moveTo"
        },{
            ...end
        },{
            ...bottom
        }]
    } 
}
export {
    renderUnderline,
    renderArrow
}