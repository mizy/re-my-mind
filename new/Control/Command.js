import Commands from './Commands/Commands.js'

/**
 * @class
 */
class Command {
    
    constructor(remind){
        this.remind = remind;
        const keys = [];
        const commandMap = new Map();
        for(let key in Commands){
            if(Commands[key].execute){
                const command = {...Commands[key]};// copy，避免多个引用的remind冲突
                command.remind = remind;
                commandMap.set(key,command)
                keys.push(key);
            }
        }
        this.commandNames = keys;
        this.commandMap = commandMap;
    }

     
}
export default Command;