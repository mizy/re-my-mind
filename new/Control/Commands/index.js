
const getAllCommands = (remind)=>{
    const isValid = ()=>{
        // if (MM.App.note.status === "show") {
        //     return false;
        // }
        if (!remind.page.editing) {
            return true;
        }
        // if (this.editMode === null) {
        //     return true;
        // }
        // if (this.editMode && MM.App.editing) {
        //     return true;
        // }
        return false;
    }
    return [
    {
        name:"InsertSibling",
        keys:[{ keyCode: 13 }],
        prevent:true,
        isValid,
        execute : function () {
            const item = remind.page.current;
            if (item.isRoot()) {
                var action = this.remind.action.execute('InsertNewItem',item, item.getChildren().length);
            } else {
                var parent = item.getParent();
                var index = parent.getChildren().indexOf(item);
                var action = remind.action.InsertNewItem(parent, index + 1);
            }
        
            if(remind.options.autoEdit&&!action._item._data.disableEdit){
                Command.Edit.execute();
            }
        }
    },
    {
        name:'InsertChild',
        isValid,
        prevent:true,
        keys:[
			{ keyCode: 9, ctrlKey: false },
			{ keyCode: 45 }
		],
        execute : function () {
            const item = remind.page.current;
            const action = remind.action.execute('InsertNewItem',item, item.children.length);
             
            if(remind.options.autoEdit&&!action._item.data.disableEdit){
                remind.command.execute("Edit");
            }
        }

    },{
        name:"Edit",
        keys:[
			{ keyCode: 32 },
			{ keyCode: 113 }
		],
        execute : function(){
            if(remind.page.current){
                const range = document.createRange();
                range.selectNodeContents(remind.page.current.textDOM);
                const selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range)
                remind.page.current.startEdit();
            }
        }
    },{
        name:"Finish",
        keys:[{ keyCode: 13, altKey: false, ctrlKey: false, shiftKey: false }],
        execute : function(){
            const item = remind.page.current;
            item.stopEdit();
            if(item.data.text===item.oldText){
                return;
            }
            remind.action.execute('SetText',item, item.data.text, item.oldText);
            remind.fire("item-change", item);
        }
    }
]
}
export default getAllCommands;