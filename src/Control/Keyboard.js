/**
 * @class
 */
class Keyboard{
    constructor(remind){
        this.remind = remind;

        this.init();
    }
    init = function () {
        window.addEventListener("keydown", this.onKeyDown);
        window.addEventListener("keypress", this.onKeyDown);
        window.addEventListener("keyup", this.onKeyUp);
    }
    destroy = ()=>{
        window.removeEventListener("keydown", this.onKeyDown);
        window.removeEventListener("keypress", this.onKeyDown);
        window.removeEventListener("keyup", this.onKeyUp);
    }

    onKeyUp = (e)=>{
        // 同步鼠标状态
        ['shiftKey','altKey','ctrlKey'].forEach(key=>{this[key] = e[key]})
    }

    onKeyDown = (e)=> {
        if (["TEXTAREA", "INPUT"].indexOf(document.activeElement.tagName) > -1 && document.activeElement.className !== "remind-clip") {
            return;
        }
        // 同步鼠标状态
        ['shiftKey','altKey','ctrlKey'].forEach(key=>{this[key] = e[key]})
        //只读模式
        if(this.remind.options.readonly){
            return;
        }
        
        const {commandMap} = this.remind.command;
        commandMap.forEach(command=>{
            if (!command || !command.isValid()) { return; }
            const keys = command.keys;
            for (let j = 0; j < keys.length; j++) {
                if (this.checkKey(keys[j], e)) {
                    command.prevent && e.preventDefault();
                    command.execute(e);
                    return;
                }
            }
        })
    }
    
    checkKey = function (key, e) {
        if ("keyCode" in key && e.type != "keydown") { return false; }
        if ("charCode" in key && e.type != "keypress") { return false; }
        for (let p in key) {
            if (key[p] != e[p]) { return false; }
        }
        return true;
    }
}

export default Keyboard;