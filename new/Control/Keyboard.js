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
    }
    destroy = ()=>{
        window.removeEventListener("keydown", this.onKeyDown);
        window.removeEventListener("keypress", this.onKeyDown);
    }

    isValid(){
        const remind = this.remind;
        // if (remind.note.status === "show") {
        // 	return false;
        // }
        // if (!this.editMode && !remind.editing) {
        // 	return true;
        // }
        // if (this.editMode === null) {
        // 	return true;
        // }
        // if (this.editMode && remind.editing) {
        // 	return true;
        // }
        return true
    }
    
    onKeyDown = (e)=> {
        if (["TEXTAREA", "INPUT"].indexOf(document.activeElement.tagName) > -1 && document.activeElement.className !== "remind-clip") {
            return;
        }
        //只读模式
        if(this.remind.options.readonly||!this.isValid()){
            return;
        }
        
        const {commandMap} = this.remind.command;
        commandMap.forEach(command=>{
            if (!command||!command.isValid()) { return; }
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
};

export default Keyboard;