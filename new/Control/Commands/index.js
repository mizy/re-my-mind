import getAllActions from "../Actions/Actions";

const getAllCommands = (remind)=>[
    {
        name:"InsertSibling",
        keys:[{ keyCode: 13 }],
        prevent:true,
        execute : function () {
            const item = this.remind.page.current;
            if (item.isRoot()) {
                var action = this.remind.action.execute('InsertNewItem',item, item.getChildren().length);
            } else {
                var parent = item.getParent();
                var index = parent.getChildren().indexOf(item);
                var action = this.remind.action.InsertNewItem(parent, index + 1);
            }
        
            if(this.remind.options.autoEdit&&!action._item._data.disableEdit){
                Command.Edit.execute();
            }
        }
    },
    {
        name:'InsertChild',
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

        }
    }
]
export default getAllCommands;