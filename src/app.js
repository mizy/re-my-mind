
import Command from './Control/Command';
import KeyBoard from './Control/Keyboard'

import Page from './Model/Page';
import Action from './Control/Action';
import Menu from "./View/Menu";
import History from './Control/History';
import line from './Layout/Lines';
import theme from './View/Theme';
import Controller from './Control/Controller'
import Note from './View/Note'
import Nodes from './View/Nodes/Nodes'

import './index.less'
// import MouseManager from './Control/Mou'
/**
 * 入口类
 */
class Remind {
    /**
     * @constructor
     * @param {*} container 
     * @param {*} options 
     * @returns {Remind}
     */
    constructor(container,options = {}){
        if(container){
            return this.init(container,options)
        }
    }
    
    /**
     * @param  {HTMLElement} container
     * @param  {Object} options - 
     * {
     *      autoEdit:true,
            disableDrag:false,
            showHeadTitle:false,
            disableEdit:false,// 阻止触发该Item或所有的MM.Command.Edit
            headTitle: " - 脑图",
            showArrow:true,// 是否显示线的箭头
            renderEngine:'svg',
            readonly:false,
            controller:{
                animationFrame:14
            },
            site:{
                spaceX:8,
                spaceY:60
            },
            map:{
                spaceX:60,
                spaceY:8
            },
            tree:{
                spaceX:20,
                spaceY:8,
                dx:10
            },
            fish:{
                minFishWidth: 300,
                minFishHeight: 50,
                fishTailWidth : 50,
                headGap : 50,
                angle:Math.PI / 3,
                root:{
                    spaceX:0,
                    minLength:80
                },
                one:{
                    minLength:80,
                    spaceY:8,
                    tailGap:10,
                    headGap:10,
                },
                other:{
                    spaceX:8,
                    spaceY:4,
                    tailGap:5,
                    headGap:10,
                    minLength:0
                }
            }
        }
     */
    init(container,options = {}){
        this.options = Object.assign({
            autoEdit:true,
            disableDrag:false,
            showHeadTitle:false,
            disableEdit:false,// 阻止触发该Item或所有的MM.Command.Edit
            headTitle: " - 脑图",
            showArrow:true,// 是否显示线的箭头
            renderEngine:'svg',
            readonly:false,
            controller:{
                animationFrame:14
            },
            site:{
                spaceX:8,
                spaceY:60
            },
            map:{
                spaceX:60,
                spaceY:8
            },
            tree:{
                spaceX:20,
                spaceY:8,
                dx:10
            },
            fish:{
                minFishWidth: 300,
                minFishHeight: 50,
                fishTailWidth : 50,
                headGap : 50,
                angle:Math.PI / 3,
                root:{
                    spaceX:0,
                    minLength:80
                },
                one:{
                    minLength:80,
                    spaceY:8,
                    tailGap:10,
                    headGap:10,
                },
                other:{
                    spaceX:8,
                    spaceY:4,
                    tailGap:5,
                    headGap:10,
                    minLength:0
                }
            }
        }, options);
        this.container = container;
        this.initDOM();

        this.command = new Command(this);
        this.action = new Action(this);
        this.history = new History(this);
        this.menu = new Menu(this);
        this.keyboard = new KeyBoard(this)
        // this.clipManager = new ClipManager(this);
        this.controller = new Controller(this);
        this.page = new Page(this);
        this.note = new Note(this);

        this.addEvents();
		return this;
    }

    deselect(){
        this.current.deselect();
    }
 
    destroy(){
        this.keyboard.destroy();
        this.page.destroy();
        this.off();
        this.remindDOM.remove();
        this.remindDOM = undefined;
    }

    initDOM(){
        const remindDOM = document.createElement("div");
        remindDOM.className = ` remind`;
        this.remindDOM = remindDOM;
        this.container.appendChild(remindDOM);

        const dom = document.createElement("div");
        remindDOM.appendChild(dom);
		this.dom = dom;
		this.dom.className += ` remind-scroll`;
    }


    addEvents(){
		if(this.options.showHeadTitle){
			this.on("item:change", (publisher) => {
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

    /**
     * 
     */
	clear(){
		this._subscribers = {}
	}
    
	/**
	 * @param  {String} message 事件名
	 * @param  {Object} publisher 数据1
	 * @param  {Object} data 数据2
	 */
	fire (message, publisher, data) {
		var subscribers = this._subscribers[message] || [];
		subscribers.forEach(function (subscriber) {
			subscriber.handleMessage ? subscriber.handleMessage(message, publisher, data) : subscriber(publisher, data);
		});
	}
	/**
	 * @param  {String} message 事件名
	 * @param  {Function} subscriber 箭头函数
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
Remind.nodes = Nodes;
Remind.line = line;// 暴露出去可用复写
/**
 * @exports Remind
 */
export default Remind;