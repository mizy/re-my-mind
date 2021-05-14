
import Line from './Lines';
class SiteLayout {
    LINE_THICKNESS = 8;
    name = 'site';
	constructor(page,direction = 'auto') {
		this.page = page;
        this.line =  {...Line,...Line.site};
		this.remind = page.remind;
        this.direction = direction;
	}

	update(item) {
		if(this.direction === 'auto' && item.isRoot()){
			this.layoutItemRoot(item);
		}else{
			this.layoutItem(item, this.direction);
		}
	}

	layoutItemRoot(item){
		if (!item.children || item.children.length < 1 || item.data.shrink) {
			// 已经是最后一级的情况,容器bbox和item bbox相同
			item.rect = item.contentRect;
            item.relativePos = {x:0,y:0};
            item.originPos = {x:0,y:0}
			return false;
		}
		const { spaceY = 60 } = this.remind.options.site;
		const top = [];
		const bottom = [];
		item.children.forEach(child=>{
			if(!child.data.side){
				child.data.side = 'bottom';
			}
			if(child.data.side === 'bottom'){
				child.layout = this.page.layout['site-bottom']
				bottom.push(child)
			} else{
				top.push(child);
				child.layout = this.page.layout['site-top'];
			}
		});
		const {contentRect} = item;
		const topBBox = this.getChildrenBBox(top,'top');
		top.bbox = topBBox;
		const bottomBBox = this.getChildrenBBox(bottom,'bottom');
		bottom.bbox = bottomBBox;
		let bigOne,smallOne;
		if(bottomBBox.width > topBBox.width){
			bigOne = bottom;
			smallOne = top;
		}else{
			smallOne = bottom;
			bigOne = top;
		}
		const disX = (bigOne.bbox.width - smallOne.bbox.width) / 2;
		const disY = (bigOne === top ? 1 : -1) * (spaceY * 2 + contentRect.height);
		smallOne.forEach(child=>{
			child.position.x += disX;
			child.position.y += disY;
		})
		item.rect = {
			width:Math.max(bigOne.bbox.width,contentRect.width),
			height:topBBox.height + bottomBBox.height + contentRect.height 
		}
		if(top.length){
			item.rect.height += spaceY
		}
		if(bottom.length){
			item.rect.height += spaceY
		}
		item.originPos = {
            x:0,
            y:bigOne === top ?  topBBox.height : (item.rect.height - bigOne.bbox.height)
        } 
        item.relativePos = {
            x: (bigOne.bbox.width - contentRect.width) / 2,
            y: bigOne === top ? (spaceY ) : (-spaceY - contentRect.height)
        }; 
		item.topBBox = topBBox;
		item.bottomBBox = bottomBBox;
		item.topChildren = top;
		item.bottomChildren = bottom;
	}
 
    getCenterX(children,bbox){
        const firstChild = children[0];
        const lastChild = children[children.length - 1];
        const firstX = firstChild.contentRect.width * 0.5;
        const lastX = bbox.width - lastChild.contentRect.width * 0.5;
        const centerX = (firstX + lastX) * 0.5;
        return centerX;
    }

    /**
     * 计算出当前item的rect
     * @param {*} item 
     * @param {*} direction 
     */
	layoutItem(item, direction) {
        if (!item.children || item.children.length < 1 || item.data.shrink) {
			// 已经是最后一级的情况,容器bbox和item bbox相同
			item.rect = item.contentRect;
            item.relativePos = {x:0,y:0};
            item.originPos = {x:0,y:0}
			return false;
		}
		const bbox = this.getChildrenBBox(item.children,direction);
		item.childrenBBox = bbox;
		const { contentRect } = item;
        const { spaceY = 60 } = this.remind.options.site;

        // 原点距离主节点左上角的距离
        const itemDistanceY = direction === 'bottom' ? (spaceY + contentRect.height) : spaceY;
        item.originPos = {
            x:0,
            y:direction === 'bottom' ?  itemDistanceY : bbox.height
        } 
        const centerX = this.getCenterX(item.children,bbox);
        const centerDis = centerX - contentRect.width / 2
        if(centerDis < 0){
            item.children.forEach(child=>child.position.x -= centerDis);// 主节点特别大的情况
            
        }
        item.relativePos = {
            x: (centerDis > 0 ? centerDis : 0),
            y: direction === 'bottom' ? -item.originPos.y : spaceY
        }; 
		item.rect = {
			width:  Math.max(contentRect.width + (centerDis > 0 ? centerDis : 0), bbox.width + (centerDis < 0 ? -centerDis : 0)),// 子节点需要便宜的时候bbox的宽度会变多
			height: bbox.height + spaceY + contentRect.height,
		};
	}

	/**
	 * 以资源所第一个的左上角为原点建立相对坐标系
	 * |————————> x
	 * |[0,0] [width1,0] [width2,0] 
	 * @param {*} items
	 */
	getChildrenBBox(items,direction = 'bottom') {
		const { spaceX = 5 } = this.remind.options.site;
		const bbox = {
			width: 0,
			height: 0,
		};
		for (let i = 0; i < items.length; i++) {
			const child = items[i];
			const {rect,relativePos,contentRect} = child;
			if (rect.height > bbox.height) {
				bbox.height = rect.height;
			}
			// 计算子元素在父容器的相对坐标
			child.position = {
				x: bbox.width,
				y: direction === 'bottom' ? 0 : -rect.height,
			};
			bbox.width += Math.max(rect.width,(relativePos.x * 2 + contentRect.width)) + spaceX;// 让父节点在整个局部范围内垂直居中
		}
		bbox.width -= spaceX;
		return bbox;
	}

	updateLine(item) {
        // 默认用bezier线
        let shape = item.getLineShape();
        if(shape === 'taper' && item.depth > 0){
            shape = 'bezier';
        }
		
        const drawFunction = this.line[shape];
		if(item.isRoot()){
			const children = item.children;
			if(item.topBBox.width > 0){
				this.direction = 'top';
				item.children = item.topChildren;
				drawFunction.call(this,item);
			}
			if(item.bottomBBox.width > 0){
				this.direction = 'bottom';
				item.children = item.bottomChildren;
				drawFunction.call(this,item);
			}
			item.children = children;
			this.direction = 'auto';
		}else{
			drawFunction.call(this,item);
		}
    }

}
export default SiteLayout;
