/**
 * @class
 */
class Keyboard{
    constructor(remind){
        this.remind = remind;
        this.init();
    }
    init = function () {
        window.addEventListener("keydown", this);
        window.addEventListener("keypress", this);
    }
    destroy = ()=>{
        window.removeEventListener("keydown", this);
        window.removeEventListener("keypress", this);
    }
    
    handleEvent = function (e) {
        /* mode 2a: ignore keyboard when the activeElement resides somewhere inside of the UI pane */
        if (["TEXTAREA", "INPUT"].indexOf(document.activeElement.tagName) > -1 && document.activeElement.className !== "re-mind-clip") {
            return;
        }
        //只读模式
        if(MM.App.readonly){
            return;
        }
        
        var commands = MM.Command.getAll();
        for (var i = 0; i < commands.length; i++) {
            var command = commands[i];
            if (!command.isValid()) { continue; }
            var keys = command.keys;
            for (var j = 0; j < keys.length; j++) {
                if (this._keyOK(keys[j], e)) {
                    command.prevent && e.preventDefault();
                    command.execute(e);
                    return;
                }
            }
        }
    }
    
    _keyOK = function (key, e) {
        if ("keyCode" in key && e.type != "keydown") { return false; }
        if ("charCode" in key && e.type != "keypress") { return false; }
        for (var p in key) {
            if (key[p] != e[p]) { return false; }
        }
        return true;
    }
};

export default Keyboard;