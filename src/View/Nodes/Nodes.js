export default {
    nodes:{
        // 支持icon，note的节点
        default:(item,container)=>{
            container.innerHTML = '';
            const {data} = item;
            // 生成icon
            const iconDOM = document.createElement('ul');
            iconDOM.className = 'item-icon';
            const icon = data.icon;
            let iconList = '';
            for (let key in icon) {
                if (icon[key])
                    iconList += `<li class="${icon[key]}" data-key="${key}"></li>`;
            }
            iconDOM.innerHTML = iconList;
            item.iconDOM = iconDOM;
            container.appendChild(iconDOM);
            // 生成text
            const text = document.createElement('div');
            text.className = 'item-text';
            text.innerHTML = data.text === undefined ? '' : data.text;
            item.textDOM = text;
            container.appendChild(text);
             // 生成note
            const note = document.createElement('div');
            note.className = 'item-note';
            // note.innerHTML = data.note||"";
            item.noteDOM = note;
            note.style.display = data.note !== undefined ? 'inline-block' : 'none'
            container.appendChild(note);
        }
 
    },
    
    registerNode:(type,func)=>{
        this.nodes[type] = func
    }
}