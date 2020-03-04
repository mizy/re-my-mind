import "./index.less";
/**
 * @namespace
 */
window.MM = {

	_subscribers: {},

	clear: () => {
		MM._subscribers = {}
	},

	publish: function (message, publisher, data) {
		var subscribers = this._subscribers[message] || [];
		subscribers.forEach(function (subscriber) {
			subscriber.handleMessage ? subscriber.handleMessage(message, publisher, data) : subscriber(publisher, data);
		});
	},

	subscribe: function (message, subscriber) {
		if (!(message in this._subscribers)) {
			this._subscribers[message] = [];
		}
		var index = this._subscribers[message].indexOf(subscriber);
		if (index == -1) { this._subscribers[message].push(subscriber); }
	},

	unsubscribe: function (message, subscriber) {
		if (!subscriber) {
			return this._subscribers[message] = []
		}
		var index = this._subscribers[message].indexOf(subscriber);
		if (index > -1) { this._subscribers[message].splice(index, 1); }
	},

	generateId: function () {
		var str = "";
		for (var i = 0; i < 8; i++) {
			var code = Math.floor(Math.random() * 26);
			str += String.fromCharCode("a".charCodeAt(0) + code);
		}
		return str;
	}

};
require("./Model/Repo.js");
require("./View/Item.js"),
require("./View/Theme.js")
	require("./View/Note.js"),
	require("./Model/Map.js"),
	require("./Control/Keyboard.js"),
	require("./Model/Action.js"),
	require("./Control/Clipboard.js"),
	require("./View/Menu.js"),
	require("./Model/Command.js"),
	require("./Layout/Layout.js"),
	require("./Layout/Graph.js"),
	require("./Layout/Tree.js"),
	require("./Layout/Map.js"),
	require("./Shape/Shape.js"),
	require("./Model/Format.js"),
	require("./Control/Mouse.js"),
	require("./View/PolyDom.js")
	require("./app.js")

export default window.MM;