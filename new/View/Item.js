import Nodes from './Nodes/Nodes'
class Item {
    constructor(page){
        this.page = page;
        this.remind = page.remind;
    }

    setData(data){
        this.data = data;
        if(data.theme){
            this.theme = this.page.theme;
        }
        this.dom = this.initDOM();
    }

    initDOM(){
        const dom = document.createElement('div');
        dom.className='remind-item';
        this.remind.dom.appendChild(dom);
        const {type='default'} = this.data;
        try{
            Nodes.nodes[type](this.data,dom);
        }catch(e){
            console.warn("解析节点错误，请检查节点类型是否注册")
            throw e;
        }
        return dom;
    }

    updateSubtree(){
    }
}
export default Item;