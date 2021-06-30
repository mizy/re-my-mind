
import Line from './Lines'; 
class TreeLayout {
    name = 'tree';
	constructor(page,direction = 'right') {
		this.page = page;
        this.line =  {...Line,...Line.tree};
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
		this.layoutItem(item, this.direction);
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
        const { spaceX = 20,dx,spaceY } = this.remind.options.tree;

        const itemDistanceX = dx + spaceX;
        item.rect = {
			width: Math.max(bbox.width + itemDistanceX,item.contentRect.width),
			height: bbox.height + spaceY + item.contentRect.height,
		};
        item.originPos = {
            x:direction === 'right' ? itemDistanceX : (item.rect.width - itemDistanceX),
            y:contentRect.height + spaceY
        } 
        item.relativePos = {
            x:direction === 'right' ? -itemDistanceX : -(item.contentRect.width - itemDistanceX),
            y:-item.originPos.y
        }
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
		const { spaceY = 8 ,dx} = this.remind.options.tree;
		const bbox = {
			width: 0,
			height: 0,
		};
		for (let i = 0; i < items.length; i++) {
			const child = items[i];
			const {rect} = child;
			if (rect.width > bbox.width) {
				bbox.width = rect.width;
			}
			// 计算子元素在父容器的相对坐标
			child.position = {
				x: direction === 'right' ? 0 : -rect.width,
				y: bbox.height,
			};
			bbox.height += rect.height + spaceY;// 让父节点在整个局部范围内垂直居中
		}
		bbox.height -= spaceY;
		return bbox;
	}

	updateLine(item) {
        // 默认用bezier线
        const drawFunction = this.line['bezier'];
        drawFunction.call(this,item);
    }


}
export default TreeLayout;
