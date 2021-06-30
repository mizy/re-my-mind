export default {
    /**
     * 节点渲染器，默认为default
     */
    nodes:{
        /**
         * 支持icon，note的节点
         * @name Remind.nodes#default
         * @function
         * @param {Item} item 
         * @param {HTMLElement} container 
         */
        default:(item,container)=>{
            container.innerHTML = '';
            const {data} = item;
            // 生成icon
            const iconDOM = document.createElement('ul');
            iconDOM.className = 'remind-icon';
            const icon = data.icon;
            let iconList = '';
            for (let key in icon) {
                if (icon[key])
                    iconList += `<li class="mind-icon ${icon[key]}" data-key="${key}"></li>`;
            }
            iconDOM.innerHTML = iconList;
            item.iconDOM = iconDOM;
            container.appendChild(iconDOM);
            // 生成text
            const text = document.createElement('div');
            text.className = 'item-text';
            Object.assign(text.style,data.textStyle);
            text.innerHTML = data.text === undefined ? '' : data.text;
            item.textDOM = text;
            container.appendChild(text);
             // 生成note
            const note = document.createElement('div');
            note.className = 'item-note';
            item.noteDOM = note;
            note.style.display = data.note !== undefined ? 'block' : 'none'
            container.appendChild(note);
            // 注册样式
            if(data.style){
                Object.assign(container.style,data.style)
            }

            // 监听事件
            note.addEventListener("click",()=>{
                item.startNote();
            })
            item.textDOM.addEventListener("keydown",item.onKeyDown);
            item.textDOM.addEventListener("blur",item.onBlur);
        },
        ghost:(item,container)=>{
            container.innerHTML = '';
            const {data} = item; 
            // 生成text
            const text = document.createElement('div');
            text.className = 'item-text item-ghost';
            text.innerHTML = data.text === undefined ? '' : data.text;
            item.textDOM = text;
            container.appendChild(text); 
        },
    },
  
    /**
     * @name Remind.nodes#registerNode
     * @param {String} type 
     * @param {Function} func 
     */
    registerNode:(type,func)=>{
        this.nodes[type] = func
    }
}