/**
 * @class
 */
class History{
	/**
	 * @prop {Array} history 历史action栈
	 */
    history= []
	/**
	 * @prop {Number} historyIndex 当前堆栈指针
	 */
    historyIndex= 0
    constructor(remind){
        this.remind = remind;
    }
    
	/**
	 * 执行操作事务
	 * @param {Action} action 
	 */
	action(action) {
		this.remind.fire("action",action);
		if(action.stop)return;
		if (this.historyIndex < this.history.length) {
			this.history.splice(this.historyIndex, this.history.length - this.historyIndex);
		}
		this.history.push(action);
		this.historyIndex++;
		action.perform();
		return this;
	}

	/**
	 * 清空
	 */
    clear(){
        this.history = [];
        this.historyIndex = 0;
    }
}
export default History;