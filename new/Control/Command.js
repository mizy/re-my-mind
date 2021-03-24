import Commands from './Commands'

/**
 * @class
 */
class Command {
    
    constructor(remind){
        this.remind = remind;
        for(let key in Commands){
            if(Commands[key].execute){
                this[key] = {...Commands[key]};// copy，避免多个引用的remind冲突
                this[key].remind = remind;
            }
        }
    }

     
}
export default Command;