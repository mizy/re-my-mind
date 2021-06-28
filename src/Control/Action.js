import getAllActions from './Actions/Actions'

/**
 * @class
 */
class Action{
     
    constructor(remind){
        this.remind = remind;
        this.actions = getAllActions(remind)
    }
    
	execute(name,...others) {
		const ActionConstructor = this.actions[name];
        if(!ActionConstructor)return console.warn("没有该actin:",name);

        const action = new ActionConstructor(...others);
        this.remind.history.action(action);
        this.remind.fire("change",action)
        return action;
	}
 
    destroy(){
         this.actions = {}
    }
}
export default Action