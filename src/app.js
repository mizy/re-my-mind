
import Command from './Control/Command';
import KeyBoard from './Control/Keyboard'

import Page from './Model/Page';
import Action from './Control/Action';
import Menu from "./View/Menu";
import History from './Control/History';
import theme from './View/Theme';
import line from './Layout/Lines'

import './index.less'
// import MouseManager from './Control/Mou'
/**
 * @class
 */
class Remind {
    constructor(container,options = {}){
        if(container){
            return this.init(container,options)
        }
    }
    
    /**
     * @param  {} container
     * @param  {} options={}
     */
    init(container,options = {}){
        this.options = Object.assign({
            autoEdit:true,
            disableDrag:false,
            showHeadTitle:false,
            disableEdit:false,// 阻止触发该Item或所有的MM.Command.Edit
            headTitle: " - 脑图",
            spaceX:60,
            spaceY:8,
            showArrow:true,// 是否显示线的箭头
            renderEngine:'svg',
            readonly:false,
            theme:'default',
            colors: ['#fec936', '#f88b15', '#fe7e4d', '#ec6d7a', '#ef3224', '#9bc039', '#67c97e', '#00a7cd', '#40b5c6', '#2da4ff', '#956fe7', '#882e99', '#FF84BA'],
        }, options);
        this.container = container;
        this.theme = theme.themes[this.options.theme];
        this.initDOM();

        this.command = new Command(this);
        this.action = new Action(this);
        this.history = new History(this);
        // this.menu = new Menu(this);
        this.keyboard = new KeyBoard(this)
        // this.mouseManager = new MouseManager(this)
        // this.clipManager = new ClipManager(this);
        this.page = new Page(this);
        // this.note = new Note(this);

        this.addEvents();
		return this;  
    }

    deselect(){
        this.current.deselect();
    }
 
    initDOM(){
        const remindDOM = document.createElement("div");
        remindDOM.className = ` remind  theme-${this.options.theme || ''}`;
        this.remindDOM = remindDOM;
        this.container.appendChild(remindDOM);

        const dom = document.createElement("div");
        remindDOM.appendChild(dom);
		this.dom = dom;
		this.dom.className += ` remind-scroll`;
    }

    addEvents(){
		if(this.options.showHeadTitle){
			this.on("item-change", (publisher) => {
				if (publisher.isRoot() && publisher.getMap() == this.map) {
					document.title = this.map.getName() + this.options.headTitle;
				}
			});
		}
        this.dom.addEventListener("click",()=>{
            this.page.deselect()
        })
    }
    
    _subscribers= {}

	clear(){
		this._subscribers = {}
	}
    
	/**
	 * @param  {} message
	 * @param  {} publisher
	 * @param  {} data
	 */
	fire (message, publisher, data) {
		var subscribers = this._subscribers[message] || [];
		subscribers.forEach(function (subscriber) {
			subscriber.handleMessage ? subscriber.handleMessage(message, publisher, data) : subscriber(publisher, data);
		});
	}
	/**
	 * @param  {} message
	 * @param  {} subscriber
	 */
	on(message, subscriber) {
		if (!(message in this._subscribers)) {
			this._subscribers[message] = [];
		}
		var index = this._subscribers[message].indexOf(subscriber);
		if (index == -1) { this._subscribers[message].push(subscriber); }
	}

	/**
	 * @param  {} message
	 * @param  {} subscriber
	 */
	off(message, subscriber) {
		if (!subscriber) {
			return this._subscribers[message] = []
		}
		var index = this._subscribers[message].indexOf(subscriber);
		if (index > -1) { this._subscribers[message].splice(index, 1); }
	}
}
window.Remind = Remind;
Remind.theme = theme;
Remind.line = line;// 暴露出去可用复写
export default Remind;