export default {
    nodes:{
        default:(data,container)=>{
            // 生成text
            const text = document.createElement('div');
            text.className = 'item-text';
            text.innerHTML = data.text;
            container.appendChild(text);
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
            container.appendChild(iconDOM);
        }
    },
    
    registerNode:(type,func)=>{
        this.nodes[type] = func
    }
}