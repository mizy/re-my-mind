class History{
    history= []
    historyIndex= 0
    constructor(remind){
        this.remind = remind;
    }
    
	action(action) {
		MM.fire("action",action);
		if(action.stop)return;
		if (this.historyIndex < this.history.length) {
			this.history.splice(this.historyIndex, this.history.length - this.historyIndex);
		}
		this.history.push(action);
		this.historyIndex++;
		action.perform();
		return this;
	}

    clear(){
        this.history = [];
        this.historyIndex = 0;
    }
}
export default History();