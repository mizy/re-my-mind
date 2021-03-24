import Item from "../View/Item";

class Page {
    constructor(remind){
        this.remind = remind;
        this.options = remind.options;
        this.root = null;
        this.visible = false;
        this.position = [0, 0];
        if (this.options.data) {
            this.setData(this.options.data);
        } else {
            this.setData({
                root: {
                    text:this.options.rootName || 'Root',
                    layout: 'map'
                },
            });
        }
        this.show();
    }

    setData(data){
        this.root&&this.root.destroy();
        const root = new Item(this);
        root.setData(data.root);
        this.root = root;
        this.theme = data.theme;
    }
 
 
    toJSON(){
        const data = {
            root: this.root.toJSON(),
            theme: this.theme
        };
        return data;
    }

    update(){
        this.root.updateSubtree();
    }

    updateRootWidth() {
        
        return;
    }

    resetTheme(reRender) {
        this.root.resetTheme();
        return this;
    }

    show(){
        this.update();
        this.updateRootWidth();
        this.center();
        this.remind.select(this.root);
        return this;
    }

    destroy(){
        this.root.destroy();
    }

    center = function() {
        const {node, content} = this._root.getDOM();
        const port = MM.App._port;
        const container = MM.App.container;
        const portWidth = MM.PolyDom.getOffset(port, 'width');
        const portHeight = MM.PolyDom.getOffset(port, 'height');
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        const rootWidth = MM.PolyDom.getOffset(node, 'width');
        const rootHeight = MM.PolyDom.getOffset(node, 'height');
    
        // 配置中心点
        // this._moveTo(Math.round(left), Math.round(top));
    
        // 移动滚动条
        const layout = MM.App.map.getRoot().getLayout().id;
        const pos = content.getBoundingClientRect();
        switch (layout) {
            case 'map-right':
                container.scrollLeft = (portWidth - containerWidth) / 2 - rootWidth / 2;
                container.scrollTop = (portHeight - containerHeight) / 2;
                break;
            case 'map-left':
                container.scrollLeft = (portWidth - containerWidth) / 2 + rootWidth / 2;
                container.scrollTop = (portHeight - containerHeight) / 2;
                break;
            default:
                container.scrollLeft = (portWidth - containerWidth) / 2 ;
                container.scrollTop = (portHeight - containerHeight) / 2;
                break;
        }
    
        return this;
    }

    moveBy = function(dx, dy) {
        const container = MM.App.container;
        container.scrollLeft -= dx;
        container.scrollTop -= dy;
        return;
    };

    getClosestItem = function(x, y) {
        var all = [];
    
        var scan = function(item) {
            var rect = item.getDOM().content.getBoundingClientRect();
            var dx = rect.left + rect.width / 2 - x;
            var dy = rect.top + rect.height / 2 - y;
            all.push({
                item: item,
                dx: dx,
                dy: dy
            });
            if (!item.isCollapsed()) { item.getChildren().forEach(scan); }
        };
    
        scan(this._root);
    
        all.sort(function(a, b) {
            var da = a.dx * a.dx + a.dy * a.dy;
            var db = b.dx * b.dx + b.dy * b.dy;
            return da - db;
        });
    
        return all[0];
    };
    
}
export default Page;
