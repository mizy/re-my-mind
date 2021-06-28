import getAllCommands from './Commands'

/**
 * @class
 */
class Command {
     
    constructor(remind){
        this.remind = remind;
        const commandMap = {};
        const Commands = getAllCommands(remind);
        Commands.forEach(item=>{
            const command = {
                isValid:()=>true,
                ...item
            };// copy，避免多个引用的remind冲突
            commandMap[item.name] = command;
        })
        this.commandMap = commandMap;
    }

    execute(name,...argus){
        const command = this.commandMap[name];
        command.execute(...argus)
    }

     
}
export default Command;