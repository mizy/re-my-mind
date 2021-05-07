
import Line from './Lines';
class TreeLayout {
    LINE_THICKNESS = 8;
    name = 'map';
	constructor(page,direction = 'auto') {
		this.page = page;
        this.line =  {...Line,...Line.map};
		this.remind = page.remind;
        this.direction = direction;
	}

	update(item) {
        if (!item.children || item.children.length < 1 || item.data.shrink) {
			// 已经是最后一级的情况,容器bbox和item bbox相同
			item.rect = item.contentRect;
            item.relativePos = {x:0,y:0};
            item.originPos = {x:0,y:0}
			return false;
		}
        if(this.direction === 'auto' && item.isRoot()){
            return this.layoutAutoItem(item);
        }
		this.layoutItem(item, this.direction);
	}
 
    /**
     * 两端布局
     * @param  {} item
     */
    layoutAutoItem(item){
        const {spaceY,spaceX} = this.remind.options;
        const {contentRect} = item;
        const leftBBox = {
			width: 0,
			height: 0
		};
        const rightBBox = {
            width:0,
            height:0
        }
        const rightChildren = [];
        const leftChildren = [];
        // 计算子元素的位置,两边布局
        const offsetX = contentRect.width + 2 * spaceX;
        item.children.forEach((child,index)=>{
            const {relativePos,contentRect} = child;
            if(index % 2 === 0){
                child.position = {
                    x:0,
                    y:rightBBox.height
                }
                rightChildren.push(child);
                rightBBox.width = Math.max(rightBBox.width,child.rect.width);
                rightBBox.height += Math.max(child.rect.height,(relativePos.y * 2 + contentRect.height)) + spaceY;
            }else{
                
                child.position = {
                    x:-child.rect.width - offsetX,
                    y:leftBBox.height
                }
                leftChildren.push(child);
                leftBBox.width = Math.max(leftBBox.width,child.rect.width);
                leftBBox.height += Math.max(child.rect.height,(relativePos.y * 2 + contentRect.height)) + spaceY;
            }
        })
        if(rightBBox.height > 0){
            rightBBox.height -= spaceY;
        }
        if(leftBBox.height > 0){
            leftBBox.height -= spaceY;
        }
        item.originPos = {
            x:leftBBox.width + offsetX,
            y:0
        }
        let bigChildren = [];
        let smallChildren = [];
        let bigBBox = {};
        const disY = 0.5 * Math.abs(leftBBox.height - rightBBox.height);
        // 高度小的一侧垂直居中
        if(leftBBox.height > rightBBox.height){
            bigChildren = leftChildren;
            smallChildren = rightChildren;
            bigBBox = leftBBox;
        }else{
            bigChildren = rightChildren;
            smallChildren = leftChildren;
            bigBBox = rightBBox
        }
        smallChildren.forEach(child=>{
            child.position.y += disY;
        })
        // 居中当前节点
        const centerY = this.getCenterY(bigChildren,bigBBox);
        const centerDis = centerY - contentRect.height / 2
        if(centerDis > 0){
            item.relativePos = {
                x:-(contentRect.width + spaceX),
                y: centerDis,//自动布局的默认不会有下划线
            }
        }else{
            item.children.forEach(child=>child.position.y -= centerDis);// 主节点特别大的情况
            item.relativePos = {
                x:-(contentRect.width + spaceX),
                y: 0 
            }
        }
        
        item.rect = {
            width:spaceX * 2 + leftBBox.width + contentRect.width + rightBBox.width,
            height:Math.max(bigBBox.height,contentRect.height)
        }
        item.leftChildren = leftChildren;
        item.rightChildren = rightChildren;
    }

    getCenterY(children,bbox){
        const firstChild = children[0];
        const lastChild = children[children.length - 1];
        const firstLineY = firstChild.getShape().indexOf('underline') > -1 ? firstChild.contentRect.height : firstChild.contentRect.height * 0.5;
        const lastLineY = bbox.height - (lastChild.getShape().indexOf('underline') > -1 ? 0 : lastChild.contentRect.height * 0.5);
        const centerY = (firstLineY + lastLineY) * 0.5;
        return centerY;
    }

    /**
     * 计算出当前item的rect
     * @param {*} item 
     * @param {*} direction 
     */
	layoutItem(item, direction) {
		const shape = item.getShape();
		const bbox = this.getChildrenBBox(item.children,direction);
		item.childrenBBox = bbox;
		const { contentRect } = item;
        const { spaceX = 60 } = this.remind.options;

        const itemDistanceX = spaceX + (direction === 'right' ? contentRect.width : 0);
        item.originPos = {
            x:direction === 'right' ? itemDistanceX : bbox.width,
            y:0
        } 
        const centerY = this.getCenterY(item.children,bbox)
        const centerDis = centerY - contentRect.height / 2
        if(centerDis < 0){
            item.children.forEach(child=>child.position.y -= centerDis);// 主节点特别大的情况
            item.relativePos = {
                x: (direction === 'right' ? -1 : 1) * itemDistanceX,
                y: 0,
            };
        }else{
            if (shape.indexOf('underline') == -1) {
                item.relativePos = {
                    x: (direction === 'right' ? -1 : 1) * itemDistanceX,
                    y: centerY - contentRect.height / 2,
                };
            } else {
                item.relativePos = {
                    x: (direction === 'right' ? -1 : 1) * itemDistanceX,
                    y: centerY - contentRect.height,
                };
            }
        }
       
        if(direction === 'right'){
            item.leftChildren = [];
            item.rightChildren = item.children;
        }else{
            item.leftChildren = item.children;
            item.rightChildren = [];
        }
       
		item.rect = {
			width: bbox.width + spaceX + contentRect.width,
			height: Math.max(item.relativePos.y + contentRect.height, bbox.height),
		};
	}

	/**
	 * 以资源所第一个的左上角为原点建立相对坐标系
	 * |————————> x
	 * |[0,0]
	 * |[0,height+spaceY]
	 * |[]
	 * |
	 * |y
	 * @param {*} items
	 */
	getChildrenBBox(items,direction = 'right') {
		const { spaceY = 5 } = this.remind.options;
		const bbox = {
			width: 0,
			height: 0,
		};
		for (let i = 0; i < items.length; i++) {
			const child = items[i];
			const {rect,relativePos,contentRect} = child;
			if (rect.width > bbox.width) {
				bbox.width = rect.width;
			}
            child.side = direction;
			// 计算子元素在父容器的相对坐标
			child.position = {
				x: direction === 'right' ? 0 : -rect.width,
				y: bbox.height,
			};
			bbox.height += Math.max(rect.height,(relativePos.y * 2 + contentRect.height)) + spaceY;// 让父节点在整个局部范围内垂直居中
		}
		bbox.height -= spaceY;
		return bbox;
	}

	updateLine(item) {

        if(item.data.taper){// 如果当前元素是map则当前节点渐细
            this.drawTaperingConnector(item);
        }else{
            // 默认用bezier线
            const drawFunction = this.line[item.getLineShape()];
            drawFunction.call(this,item);
        }
    }

    /**
     * 渲染渐细线
     * @param {*} item 
     */
    drawTaperingConnector(item){
        const itemPos = {
            x:item.x + item.contentRect.width * 0.5,
            y:item.y + item.contentRect.height * 0.5
        }
        const {canvasContext:ctx} = this.page;
        const halfThick = this.LINE_THICKNESS / 2;
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
            const angle = Math.atan2(y - itemPos.y,x - itemPos.x) + Math.PI / 2;
            const dx = Math.cos(angle) * halfThick;
            const dy = Math.sin(angle) * halfThick;
            ctx.fillStyle = ctx.strokeStyle = child.getColor();
            ctx.beginPath();
            ctx.moveTo(itemPos.x - dx, itemPos.y - dy);
            ctx.quadraticCurveTo((x + itemPos.x) / 2, y, x, y);// 贝塞尔过去
            // 贝塞尔回来
            ctx.quadraticCurveTo((x + itemPos.x) / 2, y, itemPos.x + dx, itemPos.y + dy);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        })
    }

}
export default TreeLayout;
