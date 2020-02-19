(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MM"] = factory();
	else
		root["MM"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @namespace
 */

window.MM = {
  _subscribers: {},
  clear: function clear() {
    MM._subscribers = {};
  },
  publish: function publish(message, publisher, data) {
    var subscribers = this._subscribers[message] || [];
    subscribers.forEach(function (subscriber) {
      subscriber.handleMessage ? subscriber.handleMessage(message, publisher, data) : subscriber(publisher, data);
    });
  },
  subscribe: function subscribe(message, subscriber) {
    if (!(message in this._subscribers)) {
      this._subscribers[message] = [];
    }

    var index = this._subscribers[message].indexOf(subscriber);

    if (index == -1) {
      this._subscribers[message].push(subscriber);
    }
  },
  unsubscribe: function unsubscribe(message, subscriber) {
    if (!subscriber) {
      return this._subscribers[message] = [];
    }

    var index = this._subscribers[message].indexOf(subscriber);

    if (index > -1) {
      this._subscribers[message].splice(index, 1);
    }
  },
  generateId: function generateId() {
    var str = "";

    for (var i = 0; i < 8; i++) {
      var code = Math.floor(Math.random() * 26);
      str += String.fromCharCode("a".charCodeAt(0) + code);
    }

    return str;
  }
};

__webpack_require__(8);

__webpack_require__(9), __webpack_require__(10), __webpack_require__(11), __webpack_require__(12), __webpack_require__(13), __webpack_require__(14), __webpack_require__(15), __webpack_require__(16), __webpack_require__(17), __webpack_require__(18), __webpack_require__(19), __webpack_require__(20), __webpack_require__(21), __webpack_require__(22), __webpack_require__(23), __webpack_require__(24);
/* harmony default export */ __webpack_exports__["default"] = (window.MM);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(4);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(6)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// Module
exports.push([module.i, ".re-mind {\n  position: relative;\n  overflow: hidden;\n  /* root */\n}\n.re-mind * {\n  box-sizing: border-box;\n}\n.re-mind ul,\n.re-mind li {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.re-mind ul li,\n.re-mind li li {\n  list-style: none;\n}\n.re-mind .menu {\n  position: absolute;\n  z-index: 2;\n  /* border: 1px solid #666; */\n  background-color: #fff;\n  box-shadow: 0 0 5px 0px #666;\n  border-radius: 2px;\n  padding: 10px 0;\n}\n.re-mind .menu button {\n  display: block;\n  background-color: transparent;\n  border: none;\n  margin: 0;\n  padding: 3px 6px;\n  font-size: 15px;\n  width: 130px;\n  text-align: left;\n  cursor: pointer;\n}\n.re-mind .menu button:hover {\n  background: #0ae;\n  color: #fff;\n}\n.re-mind .menu span {\n  display: block;\n  border-top: 1px solid #eee;\n  margin-top: 4px;\n  padding-top: 4px;\n}\n.re-mind .item {\n  position: absolute;\n}\n.re-mind .item .re-mind-icon {\n  z-index: 1;\n  display: inline-block;\n}\n.re-mind .item .cut {\n  opacity: 0.5;\n}\n.re-mind .item.collapsed .children {\n  display: none;\n}\n.re-mind .item .content {\n  display: flex;\n  position: absolute;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 5px;\n}\n.re-mind .item .content > * {\n  vertical-align: middle;\n}\n.re-mind .item .content .text {\n  z-index: 1;\n  text-align: left;\n  display: inline-block;\n  min-height: 22px;\n  word-wrap: break-word;\n  white-space: nowrap;\n  word-break: break-all;\n  font-weight: normal;\n  outline: none;\n}\n.re-mind .item .content .value,\n.re-mind .item .content .status {\n  margin-right: 0.2em;\n}\n.re-mind .item .content .text ~ .value,\n.re-mind .item .content .text ~ .status {\n  margin-left: 0.2em;\n  margin-right: 0;\n}\n.re-mind .item .content .value {\n  opacity: 0.7;\n  display: none;\n}\n.re-mind .item .content .value:not(:empty):before {\n  content: \"(\";\n}\n.re-mind .item .content .value:not(:empty):after {\n  content: \")\";\n}\n.re-mind .shape-box > .content {\n  padding: 4px 10px;\n  background-color: #4a90e2;\n  color: #fff;\n  border-radius: 3px;\n}\n.re-mind .shape-box > .content .text,\n.re-mind .shape-box > .content .note-button {\n  min-height: 25px;\n  font-size: 18px;\n}\n.re-mind .shape-ellipse > .content {\n  border: 1px solid transparent;\n  padding: 10px 20px;\n  color: #fff;\n}\n.re-mind .shape-ellipse > .content .text,\n.re-mind .shape-ellipse > .content .note-button {\n  min-height: 33px;\n  font-size: 24px;\n}\n.re-mind > .item > .content {\n  font-weight: bold;\n  border-width: 2px;\n  font-size: 140%;\n  color: #fff;\n  border: 0;\n  background-color: #50c28b;\n}\n.re-mind > .item > .toggle {\n  display: none;\n}\n.re-mind .current > .content:before {\n  content: \" \";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: -6px;\n  top: -6px;\n  box-sizing: content-box;\n  border: 2px solid #7cb9ff;\n  padding: 4px;\n}\n.re-mind > .item > .children > .item > .children .current > .content:before {\n  left: -2px;\n  top: -2px;\n  padding: 0px;\n}\n.re-mind .note-button::after {\n  font-family: \"iconfont\" !important;\n  font-style: normal;\n  content: \"\\e6db\";\n}\n.re-mind .note-button {\n  margin-left: 5px;\n  z-index: 1;\n}\n.re-mind :not(.current):not(.collapsed) > .toggle {\n  /* NOT display:none - we need to have non-zero dimensions for layouting */\n  visibility: hidden;\n}\n.re-mind .mm-note {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 80px;\n  left: 0px;\n  z-index: 2;\n  background: #fff;\n  transition: opacity, height 300ms ease-in;\n  overflow: hidden;\n  width: 300px;\n  border: 1px solid #efefef;\n  border-radius: 3px;\n  box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.2);\n}\n.re-mind .mm-note .note-util {\n  height: 30px;\n  width: 100%;\n  border-bottom: 1px solid #efefef;\n}\n.re-mind .mm-note .note-content {\n  height: 300px;\n  width: 100%;\n  overflow: scroll;\n}\n.re-mind .mm-note .note-content p {\n  white-space: pre-line;\n  padding: 10px;\n  outline: none;\n  height: 300px;\n  width: 100%;\n}\n.re-mind .mm-note.hide {\n  height: 0;\n  opacity: 0;\n}\n.re-mind .status {\n  font-size: 150%;\n  line-height: 0.8;\n}\n.re-mind .status.yes:after {\n  content: \"✔\";\n  color: #0f0;\n}\n.re-mind .status.no:after {\n  content: \"✘\";\n  color: #f00;\n}\n.re-mind canvas {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.re-mind .toggle {\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  line-height: 12px;\n  cursor: pointer;\n  border-radius: 50%;\n  border: 1px solid #00f;\n  background-color: #88f;\n  text-align: center;\n  font-weight: bold;\n  font-family: sans-serif;\n  color: #fff;\n  opacity: 0.7;\n}\n.re-mind .toggle:hover {\n  opacity: 1;\n}\n.re-mind .toggle:before {\n  content: \"−\";\n  line-height: 8px;\n  margin-top: -2px;\n  position: absolute;\n  left: 1px;\n  top: 3px;\n  font-size: 12px;\n}\n.re-mind .collapsed > .toggle:before {\n  content: \"+\";\n  line-height: 8px;\n  margin-top: -2px;\n  position: absolute;\n  left: 1px;\n  top: 2px;\n  font-size: 12px;\n}\n.re-mind .re-mind-icon {\n  display: inline-flex !important;\n  align-items: center;\n  flex-direction: row-reverse;\n}\n.re-mind .re-mind-icon > li {\n  font-size: 18px;\n  display: inline-block;\n  margin-left: -5px;\n}\n.re-mind .re-mind-icon > li:last-child {\n  margin-left: 0px;\n}\n.re-mind .re-mind-icon > li:first-child {\n  margin-right: 5px;\n}\n", ""]);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Prototype for all things categorizable: shapes, layouts, commands, formats, backends...
 */
MM.Repo = {
  id: "",

  /* internal ID */
  label: "",

  /* human-readable label */
  getAll: function getAll() {
    var all = [];

    for (var p in this) {
      var val = this[p];

      if (this.isPrototypeOf(val)) {
        all.push(val);
      }
    }

    return all;
  },
  getByProperty: function getByProperty(property, value) {
    return this.getAll().filter(function (item) {
      return item[property] == value;
    })[0] || null;
  },
  getById: function getById(id) {
    return this.getByProperty("id", id);
  },
  buildOption: function buildOption() {
    var o = document.createElement("option");
    o.value = this.id;
    o.innerHTML = this.label;
    return o;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (MM);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
MM.Item = function (options) {
  var _this = this;

  options = options || {};
  this._parent = null;
  this._children = [];
  this._collapsed = false;
  this._data = {};
  this._layout = null;
  this._shape = null;
  this._autoShape = true;
  this._color = options.color || null;
  this._value = null;
  this._status = null;
  this._side = null;
  /* side preference */

  this._icon = {};
  this._id = MM.generateId();
  this._oldText = "";
  this._computed = {
    value: 0,
    status: null
  };
  this._dom = {
    node: document.createElement("li"),
    content: document.createElement("div"),
    status: document.createElement("span"),
    icon: document.createElement("ul"),
    value: document.createElement("span"),
    text: document.createElement("div"),
    children: document.createElement("ul"),
    toggle: document.createElement("div"),
    canvas: document.createElement("canvas"),
    note: document.createElement("i")
  };

  this._dom.node.classList.add("item");

  this._dom.content.classList.add("content");

  this._dom.status.classList.add("status");

  this._dom.icon.classList.add("icon");

  this._dom.value.classList.add("value");

  this._dom.text.classList.add("text");

  this._dom.toggle.classList.add("toggle");

  this._dom.children.classList.add("children");

  this._dom.note.classList.add("note-button");

  this._dom.note.innerHTML = "";

  this._dom.note.addEventListener("click", function () {
    _this.startNote();
  });

  this._dom.content.appendChild(this._dom.text);
  /* status+value are appended in layout */


  this._dom.node.appendChild(this._dom.canvas);

  this._dom.node.appendChild(this._dom.content);
  /* toggle+children are appended when children exist */


  this.setText(options.name || "");

  this._dom.toggle.addEventListener("click", this);
};

MM.Item.COLOR = "#999999";
/* RE explanation:
 *          _________________________________________________________________________ One of the three possible variants
 *           ____________________ scheme://x
 *                                ___________________________ aa.bb.cc
 *                                                            _______________________ aa.bb/
 *                                                                                    ______ path, search
 *                                                                                          __________________________ end with a non-forbidden char
 *                                                                                                                    ______ end of word or end of string
 */

MM.Item.RE = /\b(([a-z][\w-]+:\/\/\w)|(([\w-]+\.){2,}[a-z][\w-]+)|([\w-]+\.[a-z][\w-]+\/))[^\s]*([^\s,.;:?!<>\(\)\[\]'"])?($|\b)/i;

MM.Item.fromJSON = function (data) {
  return new this().fromJSON(data);
};

MM.Item.prototype.toJSON = function () {
  var data = {
    id: this._id,
    text: this.getText()
  };

  if (this._side) {
    data.side = this._side;
  }

  if (this._color) {
    data.color = this._color;
  }

  if (this._icon) {
    data.icon = this._icon;
  }

  if (this._value) {
    data.value = this._value;
  }

  if (this._status) {
    data.status = this._status;
  }

  if (this._layout) {
    data.layout = this._layout.id;
  }

  if (!this._autoShape) {
    data.shape = this._shape.id;
  }

  if (this._collapsed) {
    data.collapsed = 1;
  }

  if (this.note) {
    data.note = this.note;
  }

  if (this._children.length) {
    data.children = this._children.map(function (child) {
      return child.toJSON();
    });
  }

  var content = this.getDOM().content;

  if (content.style.backgroundColor) {
    data.backgroundColor = content.style.backgroundColor;
  }

  this._data = data;
  return data;
};
/**
 * Only when creating a new item. To merge existing items, use .mergeWith().
 */


MM.Item.prototype.fromJSON = function (data) {
  this.setText(data.text);

  if (data.id) {
    this._id = data.id;
  }

  if (data.side) {
    this._side = data.side;
  }

  if (data.color) {
    this._color = data.color;
  }

  if (data.icon) {
    this._icon = data.icon;
  }

  if (data.value) {
    this._value = data.value;
  }

  if (data.status) {
    this._status = data.status;

    if (this._status == "maybe") {
      this._status = "computed";
    }
  }

  if (data.collapsed) {
    this.collapse();
  }

  if (data.layout) {
    this._layout = MM.Layout.getById(data.layout);
  }

  if (data.shape) {
    this.setShape(MM.Shape.getById(data.shape));
  }

  if (data.note) {
    this.note = data.note;

    this._dom.content.appendChild(this._dom.note);
  }

  (data.children || []).forEach(function (child) {
    this.insertChild(MM.Item.fromJSON(child));
  }, this);
  this._data = data;
  return this;
};

MM.Item.prototype.mergeWith = function (data) {
  var dirty = 0;

  if (this.getText() != data.text && !this._dom.text.contentEditable) {
    this.setText(data.text);
  }

  if (this._side != data.side) {
    this._side = data.side;
    dirty = 1;
  }

  if (this._color != data.color) {
    this._color = data.color;
    dirty = 2;
  }

  if (this._icon != data.icon) {
    this._icon = data.icon;
    dirty = 1;
  }

  if (this._value != data.value) {
    this._value = data.value;
    dirty = 1;
  }

  if (this._status != data.status) {
    this._status = data.status;
    dirty = 1;
  }

  if (this._collapsed != !!data.collapsed) {
    this[this._collapsed ? "expand" : "collapse"]();
  }

  if (this.getOwnLayout() != data.layout) {
    this._layout = MM.Layout.getById(data.layout);
    dirty = 2;
  }

  var s = this._autoShape ? null : this._shape.id;

  if (s != data.shape) {
    this.setShape(MM.Shape.getById(data.shape));
  }

  (data.children || []).forEach(function (child, index) {
    if (index >= this._children.length) {
      /* new child */
      this.insertChild(MM.Item.fromJSON(child));
    } else {
      /* existing child */
      var myChild = this._children[index];

      if (myChild.getId() == child.id) {
        /* recursive merge */
        myChild.mergeWith(child);
      } else {
        /* changed; replace */
        this.removeChild(this._children[index]);
        this.insertChild(MM.Item.fromJSON(child), index);
      }
    }
  }, this);
  /* remove dead children */

  var newLength = (data.children || []).length;

  while (this._children.length > newLength) {
    this.removeChild(this._children[this._children.length - 1]);
  }

  if (dirty == 1) {
    this.update();
  }

  if (dirty == 2) {
    this.updateSubtree();
  }
};

MM.Item.prototype.clone = function () {
  var data = this.toJSON();

  var removeId = function removeId(obj) {
    delete obj.id;
    obj.children && obj.children.forEach(removeId);
  };

  removeId(data);
  return this.constructor.fromJSON(data);
};

MM.Item.prototype.select = function () {
  this._dom.node.classList.add("current");

  this.getMap().ensureItemVisibility(this);
  MM.Clipboard.focus();
  /* going to mode 2c */

  MM.publish("item-select", this);
};

MM.Item.prototype.deselect = function () {
  /* we were in 2b; finish that via 3b */
  if (MM.App.editing) {
    MM.Command.Finish.execute();
  }

  this._dom.node.classList.remove("current");
};

MM.Item.prototype.update = function (doNotRecurse) {
  var map = this.getMap();

  if (!map || !map.isVisible()) {
    return this;
  }

  MM.publish("item-change", this);

  if (this._autoShape) {
    /* check for changed auto-shape */
    var autoShape = this._getAutoShape();

    if (autoShape != this._shape) {
      if (this._shape) {
        this._shape.unset(this);
      }

      this._shape = autoShape;

      this._shape.set(this);
    }
  }

  if (this.getDOM().text.clientWidth > 301) {
    this.getDOM().text.style.width = "300px";
    this.getDOM().text.style.whiteSpace = "normal";
  } else if (this.getDOM().text.clientHeight < 40) {
    this.getDOM().text.style.whiteSpace = "nowrap";
    this.getDOM().text.style.width = "auto";
  }

  this._updateStatus();

  this._updateIcon();

  this._updateValue();

  this.updateBackground();

  this._dom.node.classList[this._collapsed ? "add" : "remove"]("collapsed");

  this.getLayout().update(this);
  this.getShape().update(this);

  if (!this.isRoot() && !doNotRecurse) {
    this._parent.update();
  }

  return this;
};

MM.Item.prototype.updateBackground = function () {
  var data = this._data;
  var content = this.getDOM().content;
  if (data.backgroundColor) content.style.backgroundColor = data.backgroundColor;

  if (data.border) {
    content.style.border = data.border;
  }
};
/**
 * 更新子节点
 */


MM.Item.prototype.updateSubtree = function (isSubChild) {
  this._children.forEach(function (child) {
    child.updateSubtree(true);
  });

  return this.update(isSubChild);
};

MM.Item.prototype.setText = function (text) {
  this._dom.text.innerHTML = text;

  this._findLinks(this._dom.text);

  return this.update();
};

MM.Item.prototype.getId = function () {
  return this._id;
};

MM.Item.prototype.getText = function () {
  return this._dom.text.innerHTML;
};

MM.Item.prototype.collapse = function () {
  if (this._collapsed) {
    return;
  }

  this._collapsed = true;
  return this.update();
};

MM.Item.prototype.expand = function () {
  if (!this._collapsed) {
    return;
  }

  this._collapsed = false;
  this.update();
  return this.updateSubtree();
};

MM.Item.prototype.isCollapsed = function () {
  return this._collapsed;
};

MM.Item.prototype.setValue = function (value) {
  this._value = value;
  return this.update();
};

MM.Item.prototype.getValue = function () {
  return this._value;
};

MM.Item.prototype.getComputedValue = function () {
  return this._computed.value;
};

MM.Item.prototype.setStatus = function (status) {
  this._status = status;
  return this.update();
};

MM.Item.prototype.getStatus = function () {
  return this._status;
};

MM.Item.prototype.setIcon = function (icon) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
  this._icon[type] = icon;
  return this.update();
};

MM.Item.prototype.deleteIcon = function (type) {
  if (!type) {
    this._icon = {};
    return this.update;
  }

  delete this._icon[type];
  return this.update();
};

MM.Item.prototype.getIcon = function () {
  return this._icon;
};

MM.Item.prototype.getComputedStatus = function () {
  return this._computed.status;
};

MM.Item.prototype.setSide = function (side) {
  this._side = side;
  return this;
};

MM.Item.prototype.getSide = function () {
  return this._side;
};

MM.Item.prototype.getChildren = function () {
  return this._children;
};

MM.Item.prototype.setColor = function (color) {
  this._color = color;
  return this.updateSubtree();
};

MM.Item.prototype.getColor = function () {
  return this._color || (this.isRoot() ? MM.Item.COLOR : this._parent.getColor());
};

MM.Item.prototype.getOwnColor = function () {
  return this._color;
};

MM.Item.prototype.getLayout = function () {
  return this._layout || this._parent.getLayout();
};

MM.Item.prototype.getOwnLayout = function () {
  return this._layout;
};
/**
 * 设置layut
 */


MM.Item.prototype.setLayout = function (layout) {
  this._layout = layout;
  return this.updateSubtree();
};

MM.Item.prototype.getShape = function () {
  return this._shape;
};

MM.Item.prototype.getOwnShape = function () {
  return this._autoShape ? null : this._shape;
};

MM.Item.prototype.setShape = function (shape) {
  if (this._shape) {
    this._shape.unset(this);
  }

  if (shape) {
    this._autoShape = false;
    this._shape = shape;
  } else {
    this._autoShape = true;
    this._shape = this._getAutoShape();
  }

  this._shape.set(this);

  return this.update();
};

MM.Item.prototype.getDOM = function () {
  return this._dom;
};

MM.Item.prototype.getMap = function () {
  var item = this._parent;

  while (item) {
    if (item instanceof MM.Map) {
      return item;
    }

    item = item.getParent();
  }

  return null;
};

MM.Item.prototype.getParent = function () {
  return this._parent;
};

MM.Item.prototype.isRoot = function () {
  return this._parent instanceof MM.Map;
};

MM.Item.prototype.setParent = function (parent) {
  this._parent = parent;
  return this.updateSubtree();
};

MM.Item.prototype.insertChild = function (child, index) {
  /* Create or remove child as necessary. This must be done before computing the index (inserting own child) */
  var newChild = false;

  if (!child) {
    child = new MM.Item();
    newChild = true;
  } else if (child.getParent() && child.getParent().removeChild) {
    /* only when the child has non-map parent */
    child.getParent().removeChild(child);
  }

  if (!this._children.length) {
    this._dom.node.appendChild(this._dom.toggle);

    this._dom.node.appendChild(this._dom.children);
  }

  if (arguments.length < 2) {
    index = this._children.length;
  }

  var next = null;

  if (index < this._children.length) {
    next = this._children[index].getDOM().node;
  }

  this._dom.children.insertBefore(child.getDOM().node, next);

  this._children.splice(index, 0, child);

  return child.setParent(this);
};

MM.Item.prototype.removeChild = function (child) {
  var index = this._children.indexOf(child);

  this._children.splice(index, 1);

  var node = child.getDOM().node;
  node.parentNode.removeChild(node);
  child.setParent(null);

  if (!this._children.length) {
    this._dom.toggle.parentNode.removeChild(this._dom.toggle);

    this._dom.children.parentNode.removeChild(this._dom.children);
  }

  return this.update();
};

MM.Item.prototype.startEditing = function () {
  this._oldText = this.getText();
  this._dom.text.contentEditable = true;

  this._dom.text.focus();
  /* switch to 2b */


  document.execCommand("styleWithCSS", null, false);

  this._dom.text.addEventListener("input", this);

  this._dom.text.addEventListener("keydown", this);

  this._dom.text.addEventListener("blur", this);

  return this;
};

MM.Item.prototype.stopEditing = function () {
  this._dom.text.removeEventListener("input", this);

  this._dom.text.removeEventListener("keydown", this);

  this._dom.text.removeEventListener("blur", this);

  this._dom.text.blur();

  this._dom.text.contentEditable = false;
  var result = this._dom.text.innerHTML;
  this._dom.text.innerHTML = this._oldText;
  this._oldText = "";
  this.update();
  /* text changed */

  MM.Clipboard.focus();
  return result;
};

MM.Item.prototype.startNote = function (text) {
  this._dom.content.appendChild(this._dom.note); // 


  MM.App.note.show(this);
  this.update();
};

MM.Item.prototype.endNote = function (text) {
  if (!this.note) {
    this._dom.content.removeChild(this._dom.note);
  }
};

MM.Item.prototype.handleEvent = function (e) {
  switch (e.type) {
    case "input":
      this.update();
      this.getMap().ensureItemVisibility(this);
      break;

    case "keydown":
      if (e.keyCode == 9) {
        e.preventDefault();
      }
      /* TAB has a special meaning in this app, do not use it to change focus */


      break;

    case "blur":
      /* 3d */
      MM.Command.Finish.execute();
      break;

    case "click":
      if (this._collapsed) {
        this.expand();
      } else {
        this.collapse();
      }

      MM.App.select(this);
      e.stopPropagation();
      break;
  }
};

MM.Item.prototype._getAutoShape = function () {
  var depth = 0;
  var node = this;

  while (!node.isRoot()) {
    depth++;
    node = node.getParent();
  }

  switch (depth) {
    case 0:
      return MM.Shape.Ellipse;

    case 1:
      return MM.Shape.Box;

    default:
      return MM.Shape.Underline;
  }
};

MM.Item.prototype._updateStatus = function () {
  this._dom.status.className = "status";
  this._dom.status.style.display = "";
  var status = this._status;

  if (this._status == "computed") {
    var childrenStatus = this._children.every(function (child) {
      return child.getComputedStatus() !== false;
    });

    status = childrenStatus ? "yes" : "no";
  }

  switch (status) {
    case "yes":
      this._dom.status.classList.add("yes");

      this._computed.status = true;
      break;

    case "no":
      this._dom.status.classList.add("no");

      this._computed.status = false;
      break;

    default:
      this._computed.status = null;
      this._dom.status.style.display = "none";
      break;
  }
};

MM.Item.prototype._updateIcon = function () {
  this._dom.icon.className = "re-mind-icon";
  this._dom.icon.style.display = "";
  var icon = this._icon;

  if (JSON.stringify(icon) !== '{}') {
    var iconList = '';

    for (var key in icon) {
      if (icon[key]) iconList += "<li class=\"".concat(icon[key], "\" data-key=\"").concat(key, "\"></li>");
    }

    this._dom.icon.innerHTML = iconList;
    this._computed.icon = true;
  } else {
    this._dom.icon.innerHTML = null;
    this._computed.icon = null;
    this._dom.icon.style.display = "none";
  }
};

MM.Item.prototype._updateValue = function () {
  this._dom.value.style.display = "";

  if (typeof this._value == "number") {
    this._computed.value = this._value;
    this._dom.value.innerHTML = this._value;
    return;
  }

  var childValues = this._children.map(function (child) {
    return child.getComputedValue();
  });

  var result = 0;

  switch (this._value) {
    case "sum":
      result = childValues.reduce(function (prev, cur) {
        return prev + cur;
      }, 0);
      break;

    case "avg":
      var sum = childValues.reduce(function (prev, cur) {
        return prev + cur;
      }, 0);
      result = childValues.length ? sum / childValues.length : 0;
      break;

    case "max":
      result = Math.max.apply(Math, childValues);
      break;

    case "min":
      result = Math.min.apply(Math, childValues);
      break;

    default:
      this._computed.value = 0;
      this._dom.value.innerHTML = "";
      this._dom.value.style.display = "none";
      return;
      break;
  }

  this._computed.value = result;
  this._dom.value.innerHTML = Math.round(result) == result ? result : result.toFixed(3);
};

MM.Item.prototype._findLinks = function (node) {
  var children = [].slice.call(node.childNodes);

  for (var i = 0; i < children.length; i++) {
    var child = children[i];

    switch (child.nodeType) {
      case 1:
        /* element */
        if (child.nodeName.toLowerCase() == "a") {
          continue;
        }

        this._findLinks(child);

        break;

      case 3:
        /* text */
        var result = child.nodeValue.match(this.constructor.RE);

        if (result) {
          var before = child.nodeValue.substring(0, result.index);
          var after = child.nodeValue.substring(result.index + result[0].length);
          var link = document.createElement("a");
          link.innerHTML = link.href = result[0];

          if (before) {
            node.insertBefore(document.createTextNode(before), child);
          }

          node.insertBefore(link, child);

          if (after) {
            child.nodeValue = after;
            i--;
            /* re-try with the aftertext */
          } else {
            node.removeChild(child);
          }
        }

        break;
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (MM.Item);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var Note =
/*#__PURE__*/
function () {
  function Note(app) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Note);

    this.app = app;
    this.initDom();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Note, [{
    key: "initDom",
    value: function initDom() {
      var note = document.createElement("div");
      note.className = "mm-note hide";
      note.innerHTML = "<div class=\"note-util\">\u5907\u6CE8</div><div  class=\"note-content\"><p /></div>";

      this.app._port.appendChild(note);

      this.note = note;
    }
  }, {
    key: "getPosition",
    value: function getPosition(item, index) {
      this.x += (index === 0 ? item._dom.content.offsetLeft : 0) + item._dom.node.offsetLeft;
      this.y += (index === 0 ? item._dom.content.offsetTop : 0) + item._dom.node.offsetTop;

      if (item._parent && item._parent._dom) {
        this.index++;
        this.getPosition(item._parent, 1);
      }
    }
  }, {
    key: "show",
    value: function show(item) {
      this.status = "show";
      var content = this.note.querySelector(".note-content p");
      content.contentEditable = true;
      content.innerHTML = decodeURIComponent(item.note || "");
      this.x = 0;
      this.y = 0;
      this.index = 0;
      this.getPosition(item, 0);
      this.note.style.top = (this.index < 1 ? 80 : 40) + this.y + "px";
      this.note.style.left = this.x + "px";
      this.note.className = "mm-note";
      this.item = item;
      setTimeout(function () {
        var selection = getSelection();
        var range = selection.getRangeAt(0);
        selection.removeAllRanges();
        range.selectNodeContents(content); // selection.addRange(range);

        content.focus();
      }, 100);
    }
  }, {
    key: "hide",
    value: function hide() {
      this.status = "hide";
      this.note.className = "mm-note hide";
      var content = this.note.querySelector(".note-content p");
      this.item.note = encodeURIComponent(content.innerHTML);
      this.item.endNote();
      content.innerHTML = "";
    }
  }]);

  return Note;
}();

MM.Note = Note;
/* harmony default export */ __webpack_exports__["default"] = (Note);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
MM.Map = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var o = {
    root: options.rootName || "Root",
    layout: MM.Layout.Map
  };

  for (var p in options) {
    o[p] = options[p];
  }

  this._root = null;
  this._visible = false;
  this._position = [0, 0];

  if (options.data) {
    this.fromJSON(options.data);
  } else {
    this._setRoot(new MM.Item().setText(o.root).setLayout(o.layout));
  }
};

MM.Map.fromJSON = function (data) {
  return new this().fromJSON(data);
};

MM.Map.prototype.toJSON = function () {
  var data = {
    root: this._root.toJSON()
  };
  return data;
};

MM.Map.prototype.fromJSON = function (data) {
  this._setRoot(MM.Item.fromJSON(data.root));

  return this;
};

MM.Map.prototype.mergeWith = function (data) {
  /* store a sequence of nodes to be selected when merge is over */
  var ids = [];
  var current = MM.App.current;
  var node = current;

  while (node != this) {
    ids.push(node.getId());
    node = node.getParent();
  }

  this._root.mergeWith(data.root);

  if (current.getMap()) {
    /* selected node still in tree, cool */

    /* if one of the parents got collapsed, act as if the node got removed */
    var node = current.getParent();
    var hidden = false;

    while (node != this) {
      if (node.isCollapsed()) {
        hidden = true;
      }

      node = node.getParent();
    }

    if (!hidden) {
      return;
    }
    /* nothing bad happened, continue */

  }
  /* previously selected node is no longer in the tree OR it is folded */

  /* what if the node was being edited? */


  if (MM.App.editing) {
    current.stopEditing();
  }
  /* get all items by their id */


  var idMap = {};

  var scan = function scan(item) {
    idMap[item.getId()] = item;
    item.getChildren().forEach(scan);
  };

  scan(this._root);
  /* select the nearest existing parent */

  while (ids.length) {
    var id = ids.shift();

    if (id in idMap) {
      MM.App.select(idMap[id]);
      return;
    }
  }
};

MM.Map.prototype.isVisible = function () {
  return this._visible;
};

MM.Map.prototype.update = function () {
  this._root.updateSubtree();

  return this;
};

MM.Map.prototype.show = function (where) {
  var node = this._root.getDOM().node;

  where.appendChild(node);
  this._visible = true;

  this._root.updateSubtree();

  this.center();
  MM.App.select(this._root);
  return this;
};

MM.Map.prototype.hide = function () {
  var node = this._root.getDOM().node;

  node.parentNode.removeChild(node);
  this._visible = false;
  return this;
};

MM.Map.prototype.center = function () {
  var node = this._root.getDOM().node;

  var port = MM.App.portSize;
  var left = (port[0] - node.offsetWidth) / 2;
  var top = (port[1] - node.offsetHeight) / 2;

  this._moveTo(Math.round(left), Math.round(top));

  return this;
};

MM.Map.prototype.moveBy = function (dx, dy) {
  return this._moveTo(this._position[0] + dx, this._position[1] + dy);
};

MM.Map.prototype.getClosestItem = function (x, y) {
  var all = [];

  var scan = function scan(item) {
    var rect = item.getDOM().content.getBoundingClientRect();
    var dx = rect.left + rect.width / 2 - x;
    var dy = rect.top + rect.height / 2 - y;
    all.push({
      item: item,
      dx: dx,
      dy: dy
    });

    if (!item.isCollapsed()) {
      item.getChildren().forEach(scan);
    }
  };

  scan(this._root);
  all.sort(function (a, b) {
    var da = a.dx * a.dx + a.dy * a.dy;
    var db = b.dx * b.dx + b.dy * b.dy;
    return da - db;
  });
  return all[0];
};

MM.Map.prototype.getItemFor = function (node) {
  var port = this._root.getDOM().node.parentNode;

  while (node != port && !node.classList.contains("content")) {
    node = node.parentNode;
  }

  if (node == port) {
    return null;
  }

  var scan = function scan(item, node) {
    if (item.getDOM().content == node) {
      return item;
    }

    var children = item.getChildren();

    for (var i = 0; i < children.length; i++) {
      var result = scan(children[i], node);

      if (result) {
        return result;
      }
    }

    return null;
  };

  return scan(this._root, node);
};

MM.Map.prototype.ensureItemVisibility = function (item) {
  var padding = 10;
  var node = item.getDOM().content;
  var itemRect = node.getBoundingClientRect();

  var root = this._root.getDOM().node;

  var parentRect = root.parentNode.getBoundingClientRect();
  var delta = [0, 0];
  var dx = parentRect.left - itemRect.left + padding;

  if (dx > 0) {
    delta[0] = dx;
  }

  var dx = parentRect.right - itemRect.right - padding;

  if (dx < 0) {
    delta[0] = dx;
  }

  var dy = parentRect.top - itemRect.top + padding;

  if (dy > 0) {
    delta[1] = dy;
  }

  var dy = parentRect.bottom - itemRect.bottom - padding;

  if (dy < 0) {
    delta[1] = dy;
  }

  if (delta[0] || delta[1]) {
    this.moveBy(delta[0], delta[1]);
  }
};

MM.Map.prototype.getParent = function () {
  return null;
};

MM.Map.prototype.getRoot = function () {
  return this._root;
};

MM.Map.prototype.getName = function () {
  var name = this._root.getText();

  return MM.Format.br2nl(name).replace(/\n/g, " ").replace(/<.*?>/g, "").trim();
};

MM.Map.prototype.getId = function () {
  return this._root.getId();
};

MM.Map.prototype.pick = function (item, direction) {
  var candidates = [];
  var currentRect = item.getDOM().content.getBoundingClientRect();

  this._getPickCandidates(currentRect, this._root, direction, candidates);

  if (!candidates.length) {
    return item;
  }

  candidates.sort(function (a, b) {
    return a.dist - b.dist;
  });
  return candidates[0].item;
};

MM.Map.prototype._getPickCandidates = function (currentRect, item, direction, candidates) {
  if (!item.isCollapsed()) {
    item.getChildren().forEach(function (child) {
      this._getPickCandidates(currentRect, child, direction, candidates);
    }, this);
  }

  var node = item.getDOM().content;
  var rect = node.getBoundingClientRect();

  if (direction == "left" || direction == "right") {
    var x1 = currentRect.left + currentRect.width / 2;
    var x2 = rect.left + rect.width / 2;

    if (direction == "left" && x2 > x1) {
      return;
    }

    if (direction == "right" && x2 < x1) {
      return;
    }

    var diff1 = currentRect.top - rect.bottom;
    var diff2 = rect.top - currentRect.bottom;
    var dist = Math.abs(x2 - x1);
  } else {
    var y1 = currentRect.top + currentRect.height / 2;
    var y2 = rect.top + rect.height / 2;

    if (direction == "top" && y2 > y1) {
      return;
    }

    if (direction == "bottom" && y2 < y1) {
      return;
    }

    var diff1 = currentRect.left - rect.right;
    var diff2 = rect.left - currentRect.right;
    var dist = Math.abs(y2 - y1);
  }

  var diff = Math.max(diff1, diff2);

  if (diff > 0) {
    return;
  }

  if (!dist || dist < diff) {
    return;
  }

  candidates.push({
    item: item,
    dist: dist
  });
};

MM.Map.prototype._moveTo = function (left, top) {
  this._position = [left, top];

  var node = this._root.getDOM().node;

  node.style.left = left + "px";
  node.style.top = top + "px";
};
/**
 * 设置根节点
 */


MM.Map.prototype._setRoot = function (item) {
  this._root = item;

  this._root.setParent(this);
};

/* harmony default export */ __webpack_exports__["default"] = (MM.Map);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @class
 */
MM.Keyboard = {};

MM.Keyboard.init = function () {
  window.addEventListener("keydown", this);
  window.addEventListener("keypress", this);
};

MM.Keyboard.handleEvent = function (e) {
  /* mode 2a: ignore keyboard when the activeElement resides somewhere inside of the UI pane */
  if (["TEXTAREA", "INPUT"].indexOf(document.activeElement.tagName) > -1 && document.activeElement.className !== "re-mind-clip") {
    return;
  } //如果没有在工作区删除


  var commands = MM.Command.getAll();

  for (var i = 0; i < commands.length; i++) {
    var command = commands[i];

    if (!command.isValid()) {
      continue;
    }

    var keys = command.keys;

    for (var j = 0; j < keys.length; j++) {
      if (this._keyOK(keys[j], e)) {
        command.prevent && e.preventDefault();
        command.execute(e);
        return;
      }
    }
  }
};

MM.Keyboard._keyOK = function (key, e) {
  if ("keyCode" in key && e.type != "keydown") {
    return false;
  }

  if ("charCode" in key && e.type != "keypress") {
    return false;
  }

  for (var p in key) {
    if (key[p] != e[p]) {
      return false;
    }
  }

  return true;
};

/* harmony default export */ __webpack_exports__["default"] = (MM.Keyboard);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
MM.Action = function () {};

MM.Action.prototype.perform = function () {};

MM.Action.prototype.undo = function () {};

MM.Action.Multi = function (actions) {
  this._actions = actions;
};

MM.Action.Multi.prototype = Object.create(MM.Action.prototype);

MM.Action.Multi.prototype.perform = function () {
  this._actions.forEach(function (action) {
    action.perform();
  });
};

MM.Action.Multi.prototype.undo = function () {
  this._actions.slice().reverse().forEach(function (action) {
    action.undo();
  });
};

MM.Action.InsertNewItem = function (parent, index) {
  this._parent = parent;
  this._index = index;
  var options = {};
  var color = MM.App.options.colors[index % MM.App.options.colors.length];

  if (parent.isRoot()) {
    options.color = color;
  }

  this._item = new MM.Item(options);
};

MM.Action.InsertNewItem.prototype = Object.create(MM.Action.prototype);

MM.Action.InsertNewItem.prototype.perform = function () {
  this._parent.expand();

  this._item = this._parent.insertChild(this._item, this._index);
  MM.App.select(this._item);
};

MM.Action.InsertNewItem.prototype.undo = function () {
  this._parent.removeChild(this._item);

  MM.App.select(this._parent);
};

MM.Action.AppendItem = function (parent, item) {
  this._parent = parent;
  this._item = item;
};

MM.Action.AppendItem.prototype = Object.create(MM.Action.prototype);

MM.Action.AppendItem.prototype.perform = function () {
  this._parent.insertChild(this._item);

  MM.App.select(this._item);
};

MM.Action.AppendItem.prototype.undo = function () {
  this._parent.removeChild(this._item);

  MM.App.select(this._parent);
};

MM.Action.RemoveItem = function (item) {
  this._item = item;
  this._parent = item.getParent();
  this._index = this._parent.getChildren().indexOf(this._item);
};

MM.Action.RemoveItem.prototype = Object.create(MM.Action.prototype);

MM.Action.RemoveItem.prototype.perform = function () {
  this._parent.removeChild(this._item);

  MM.App.select(this._parent);
};

MM.Action.RemoveItem.prototype.undo = function () {
  this._parent.insertChild(this._item, this._index);

  MM.App.select(this._item);
};

MM.Action.MoveItem = function (item, newParent, newIndex, newSide) {
  this._item = item;
  this._newParent = newParent;
  this._newIndex = arguments.length < 3 ? null : newIndex;
  this._newSide = newSide || "";
  this._oldParent = item.getParent();
  this._oldIndex = this._oldParent.getChildren().indexOf(item);
  this._oldSide = item.getSide();

  if (newParent.isRoot()) {
    var color = MM.App.options.colors[newIndex];

    if (!color) {
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    }

    this._item.setColor(color);
  }
};

MM.Action.MoveItem.prototype = Object.create(MM.Action.prototype);

MM.Action.MoveItem.prototype.perform = function () {
  this._item.setSide(this._newSide);

  if (this._newIndex === null) {
    this._newParent.insertChild(this._item);
  } else {
    this._newParent.insertChild(this._item, this._newIndex);
  }

  MM.App.select(this._item);
};

MM.Action.MoveItem.prototype.undo = function () {
  this._item.setSide(this._oldSide);

  this._oldParent.insertChild(this._item, this._oldIndex);

  MM.App.select(this._newParent);
};

MM.Action.Swap = function (item, diff) {
  this._item = item;
  this._parent = item.getParent();

  var children = this._parent.getChildren();

  var sibling = this._parent.getLayout().pickSibling(this._item, diff);

  this._sourceIndex = children.indexOf(this._item);
  this._targetIndex = children.indexOf(sibling);
};

MM.Action.Swap.prototype = Object.create(MM.Action.prototype);

MM.Action.Swap.prototype.perform = function () {
  this._parent.insertChild(this._item, this._targetIndex);
};

MM.Action.Swap.prototype.undo = function () {
  this._parent.insertChild(this._item, this._sourceIndex);
};

MM.Action.SetLayout = function (item, layout) {
  this._item = item;
  this._layout = layout;
  this._oldLayout = item.getOwnLayout();
};

MM.Action.SetLayout.prototype = Object.create(MM.Action.prototype);

MM.Action.SetLayout.prototype.perform = function () {
  this._item.setLayout(this._layout);
};

MM.Action.SetLayout.prototype.undo = function () {
  this._item.setLayout(this._oldLayout);
};

MM.Action.SetShape = function (item, shape) {
  this._item = item;
  this._shape = shape;
  this._oldShape = item.getOwnShape();
};

MM.Action.SetShape.prototype = Object.create(MM.Action.prototype);

MM.Action.SetShape.prototype.perform = function () {
  this._item.setShape(this._shape);
};

MM.Action.SetShape.prototype.undo = function () {
  this._item.setShape(this._oldShape);
};

MM.Action.SetColor = function (item, color) {
  this._item = item;
  this._color = color;
  this._oldColor = item.getOwnColor();
};

MM.Action.SetColor.prototype = Object.create(MM.Action.prototype);

MM.Action.SetColor.prototype.perform = function () {
  this._item.setColor(this._color);
};

MM.Action.SetColor.prototype.undo = function () {
  this._item.setColor(this._oldColor);
};

MM.Action.SetText = function (item, text) {
  this._item = item;
  this._text = text;
  this._oldText = item.getText();
  this._oldValue = item.getValue();
  /* adjusting text can also modify value! */
};

MM.Action.SetText.prototype = Object.create(MM.Action.prototype);

MM.Action.SetText.prototype.perform = function () {
  this._item.setText(this._text);

  var numText = Number(this._text);

  if (numText == this._text) {
    this._item.setValue(numText);
  }
};

MM.Action.SetText.prototype.undo = function () {
  this._item.setText(this._oldText);

  this._item.setValue(this._oldValue);
};

MM.Action.SetValue = function (item, value) {
  this._item = item;
  this._value = value;
  this._oldValue = item.getValue();
};

MM.Action.SetValue.prototype = Object.create(MM.Action.prototype);

MM.Action.SetValue.prototype.perform = function () {
  this._item.setValue(this._value);
};

MM.Action.SetValue.prototype.undo = function () {
  this._item.setValue(this._oldValue);
};

MM.Action.SetStatus = function (item, status) {
  this._item = item;
  this._status = status;
  this._oldStatus = item.getStatus();
};

MM.Action.SetStatus.prototype = Object.create(MM.Action.prototype);

MM.Action.SetStatus.prototype.perform = function () {
  this._item.setStatus(this._status);
};

MM.Action.SetStatus.prototype.undo = function () {
  this._item.setStatus(this._oldStatus);
};

MM.Action.SetIcon = function (item, icon) {
  this._item = item;
  this._icon = icon;
  this._oldIcon = item.getIcon();
};

MM.Action.SetIcon.prototype = Object.create(MM.Action.prototype);

MM.Action.SetIcon.prototype.perform = function () {
  this._item.setIcon(this._icon);
};

MM.Action.SetIcon.prototype.undo = function () {
  this._item.setIcon(this._oldIcon);
};

MM.Action.SetSide = function (item, side) {
  this._item = item;
  this._side = side;
  this._oldSide = item.getSide();
};

MM.Action.SetSide.prototype = Object.create(MM.Action.prototype);

MM.Action.SetSide.prototype.perform = function () {
  this._item.setSide(this._side);

  this._item.getMap().update();
};

MM.Action.SetSide.prototype.undo = function () {
  this._item.setSide(this._oldSide);

  this._item.getMap().update();
};

/* harmony default export */ __webpack_exports__["default"] = (MM.Action);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @class
 */
MM.Clipboard = {
  _item: null,
  _mode: "",
  _delay: 50,
  _node: document.createElement("textarea")
};

MM.Clipboard.init = function () {
  this._node.style.position = "absolute";
  this._node.style.width = 0;
  this._node.style.height = 0;
  this._node.style.left = "-100px";
  this._node.style.top = "-100px";
  this._node.className = "re-mind-clip";
  document.body.appendChild(this._node);
};

MM.Clipboard.focus = function () {
  this._node.focus();

  this._empty();
};

MM.Clipboard.copy = function (sourceItem) {
  this._endCut();

  this._item = sourceItem.clone();
  this._mode = "copy";

  this._expose();
};

MM.Clipboard.paste = function (targetItem) {
  setTimeout(function () {
    var pasted = this._node.value;

    this._empty();

    if (!pasted) {
      return;
    }
    /* nothing */


    if (!MM.App.editing) {
      /* pasted a previously copied/cut item */
      this._pasteItem(this._item, targetItem);
    } else {
      /* pasted some external data */
      this._pastePlaintext(pasted, targetItem);
    }
  }.bind(this), this._delay);
};

MM.Clipboard._pasteItem = function (sourceItem, targetItem) {
  switch (this._mode) {
    case "cut":
      if (sourceItem == targetItem || sourceItem.getParent() == targetItem) {
        /* abort by pasting on the same node or the parent */
        this._endCut();

        return;
      }

      var item = targetItem;

      while (!item.isRoot()) {
        if (item == sourceItem) {
          return;
        }
        /* moving to a child => forbidden */


        item = item.getParent();
      }

      var action = new MM.Action.MoveItem(sourceItem, targetItem);
      MM.App.action(action);

      this._endCut();

      break;

    case "copy":
      var action = new MM.Action.AppendItem(targetItem, sourceItem.clone());
      MM.App.action(action);
      break;
  }
};

MM.Clipboard._pastePlaintext = function (plaintext, targetItem) {
  if (this._mode == "cut") {
    this._endCut();
  }
  /* external paste => abort cutting */


  var json = MM.Format.Plaintext.from(plaintext);
  var map = MM.Map.fromJSON(json);
  var root = map.getRoot();

  if (root.getText()) {
    var action = new MM.Action.AppendItem(targetItem, root);
    MM.App.action(action);
  } else {
    var actions = root.getChildren().map(function (item) {
      return new MM.Action.AppendItem(targetItem, item);
    });
    var action = new MM.Action.Multi(actions);
    MM.App.action(action);
  }
};

MM.Clipboard.cut = function (sourceItem) {
  this._endCut();

  this._item = sourceItem;

  this._item.getDOM().node.classList.add("cut");

  this._mode = "cut";

  this._expose();
};
/**
 * Expose plaintext data to the textarea to be copied to system clipboard. Clear afterwards.
 */


MM.Clipboard._expose = function () {
  var json = this._item.toJSON();

  var plaintext = json.text;
  this._node.value = plaintext;
  this._node.selectionStart = 0;
  this._node.selectionEnd = this._node.value.length;
  setTimeout(this._empty.bind(this), this._delay);
};

MM.Clipboard._empty = function () {
  /* safari needs a non-empty selection in order to actually perfrom a real copy on cmd+c */
  this._node.value = "\n";
  this._node.selectionStart = 0;
  this._node.selectionEnd = this._node.value.length;
};

MM.Clipboard._endCut = function () {
  if (this._mode != "cut") {
    return;
  }

  this._item.getDOM().node.classList.remove("cut");

  this._item = null;
  this._mode = "";
};

/* harmony default export */ __webpack_exports__["default"] = (MM.Clipboard);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
MM.Menu = {
  _dom: {},
  _port: null,
  open: function open(x, y, target) {
    this._dom.node.style.display = "";
    var w = this._dom.node.offsetWidth;
    var h = this._dom.node.offsetHeight;
    var left = x;
    var top = y;

    if (left > this._port.offsetWidth / 2) {
      left -= w;
    }

    if (top > this._port.offsetHeight / 2) {
      top -= h;
    }

    this.nowTarget = target;
    this._dom.node.style.left = left + "px";
    this._dom.node.style.top = top + "px";

    var iconCommand = this._dom.node.querySelector("[data-command=DeleteIcon]");

    if (!iconCommand) return;

    if (target.getAttribute("data-key")) {
      iconCommand.style.display = 'block';
    } else {
      iconCommand.style.display = 'none';
    }
  },
  close: function close() {
    this._dom.node.style.display = "none";
  },
  handleEvent: function handleEvent(e) {
    if (e.currentTarget != this._dom.node) {
      this.close();
      return;
    }

    e.stopPropagation();
    /* no dragdrop, no blur of activeElement */

    e.preventDefault();
    /* we do not want to focus the button */

    var command = e.target.getAttribute("data-command");

    if (!command) {
      return;
    }

    command = MM.Command[command];

    if (!command.isValid()) {
      return;
    }

    command.execute(this.nowTarget);
    this.close();
  },
  init: function init(port) {
    this._port = port;
    this._dom.node = port.querySelector(".menu");

    var buttons = this._dom.node.querySelectorAll("[data-command]");

    this._port.addEventListener("mousedown", this);

    this._dom.node.addEventListener("mousedown", this);

    this.close();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (MM.Menu);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
MM.Command = Object.create(MM.Repo, {
  keys: {
    value: []
  },
  editMode: {
    value: false
  },
  prevent: {
    value: true
  },

  /* prevent default keyboard action? */
  label: {
    value: ""
  }
});

MM.Command.isValid = function () {
  if (MM.App.note.status === "show") {
    return false;
  }

  if (!this.editMode && !MM.App.editing) {
    return true;
  }

  if (this.editMode === null) {
    return true;
  }

  if (this.editMode && MM.App.editing) {
    return true;
  }

  return false;
};

MM.Command.execute = function () {};

MM.Command.Undo = Object.create(MM.Command, {
  label: {
    value: "Undo"
  },
  keys: {
    value: [{
      keyCode: "Z".charCodeAt(0),
      metaKey: true,
      shiftKey: false
    }, {
      keyCode: "Z".charCodeAt(0),
      ctrlKey: true,
      shiftKey: false
    }]
  }
});

MM.Command.Undo.isValid = function () {
  return MM.Command.isValid.call(this) && !!MM.App.historyIndex;
};

MM.Command.Undo.execute = function () {
  MM.App.history[MM.App.historyIndex - 1].undo();
  MM.App.historyIndex--;
  MM.publish("undo", MM.App.historyIndex);
};

MM.Command.Redo = Object.create(MM.Command, {
  label: {
    value: "Redo"
  },
  keys: {
    value: [{
      keyCode: "Z".charCodeAt(0),
      metaKey: true,
      shiftKey: true
    }, {
      keyCode: "Z".charCodeAt(0),
      ctrlKey: true,
      shiftKey: true
    }]
  }
});

MM.Command.Redo.isValid = function () {
  return MM.Command.isValid.call(this) && MM.App.historyIndex != MM.App.history.length;
};

MM.Command.Redo.execute = function () {
  MM.App.history[MM.App.historyIndex].perform();
  MM.App.historyIndex++;
  MM.publish("redo", MM.App.historyIndex);
};

MM.Command.InsertSibling = Object.create(MM.Command, {
  label: {
    value: "Insert a sibling"
  },
  keys: {
    value: [{
      keyCode: 13
    }]
  }
});

MM.Command.InsertSibling.execute = function () {
  var item = MM.App.current;

  if (item.isRoot()) {
    var action = new MM.Action.InsertNewItem(item, item.getChildren().length);
  } else {
    var parent = item.getParent();
    var index = parent.getChildren().indexOf(item);
    var action = new MM.Action.InsertNewItem(parent, index + 1);
  }

  MM.App.action(action);
  MM.Command.Edit.execute();
  MM.publish("command-sibling");
};

MM.Command.InsertChild = Object.create(MM.Command, {
  label: {
    value: "Insert a child"
  },
  keys: {
    value: [{
      keyCode: 9,
      ctrlKey: false
    }, {
      keyCode: 45
    }]
  }
});

MM.Command.InsertChild.execute = function () {
  var item = MM.App.current;
  var action = new MM.Action.InsertNewItem(item, item.getChildren().length);
  MM.App.action(action);
  MM.Command.Edit.execute();
  MM.publish("command-child");
};

MM.Command.Delete = Object.create(MM.Command, {
  label: {
    value: "Delete an item"
  },
  keys: {
    value: [{
      keyCode: 46
    }, {
      keyCode: 8
    }]
  }
});

MM.Command.Delete.isValid = function () {
  return MM.Command.isValid.call(this) && !MM.App.current.isRoot();
};

MM.Command.Delete.execute = function () {
  var action = new MM.Action.RemoveItem(MM.App.current);
  MM.App.action(action);
};

MM.Command.Swap = Object.create(MM.Command, {
  label: {
    value: "Swap sibling"
  },
  keys: {
    value: [{
      keyCode: 38,
      ctrlKey: true
    }, {
      keyCode: 40,
      ctrlKey: true
    }]
  }
});

MM.Command.Swap.execute = function (e) {
  var current = MM.App.current;

  if (current.isRoot() || current.getParent().getChildren().length < 2) {
    return;
  }

  var diff = e.keyCode == 38 ? -1 : 1;
  var action = new MM.Action.Swap(MM.App.current, diff);
  MM.App.action(action);
};

MM.Command.Side = Object.create(MM.Command, {
  label: {
    value: "Change side"
  },
  keys: {
    value: [{
      keyCode: 37,
      ctrlKey: true
    }, {
      keyCode: 39,
      ctrlKey: true
    }]
  }
});

MM.Command.Side.execute = function (e) {
  var current = MM.App.current;

  if (current.isRoot() || !current.getParent().isRoot()) {
    return;
  }

  var side = e.keyCode == 37 ? "left" : "right";
  var action = new MM.Action.SetSide(MM.App.current, side);
  MM.App.action(action);
};

MM.Command.Save = Object.create(MM.Command, {
  label: {
    value: "Save map"
  },
  keys: {
    value: [{
      keyCode: "S".charCodeAt(0),
      ctrlKey: true,
      shiftKey: false
    }, {
      keyCode: "S".charCodeAt(0),
      metaKey: true,
      shiftKey: false
    }]
  }
});

MM.Command.Save.execute = function (e) {
  e.preventDefault();
  MM.publish("save", "command");
};

MM.Command.SaveAs = Object.create(MM.Command, {
  label: {
    value: "Save as&hellip;"
  },
  keys: {
    value: [{
      keyCode: "S".charCodeAt(0),
      ctrlKey: true,
      shiftKey: true
    }]
  }
});

MM.Command.SaveAs.execute = function () {
  MM.App.io.show("save");
};

MM.Command.Load = Object.create(MM.Command, {
  label: {
    value: "Load map"
  },
  keys: {
    value: [{
      keyCode: "O".charCodeAt(0),
      ctrlKey: true
    }]
  }
});

MM.Command.Load.execute = function () {
  MM.App.io.show("load");
};

MM.Command.Center = Object.create(MM.Command, {
  label: {
    value: "Center map"
  },
  keys: {
    value: [{
      keyCode: "C".charCodeAt(0),
      ctrlKey: false,
      metaKey: false,
      shiftKey: false
    }]
  }
});

MM.Command.Center.execute = function () {
  MM.App.map.center();
}; // MM.Command.New = Object.create(MM.Command, {
// 	label: { value: "New map" },
// 	keys: { value: [{ keyCode: "N".charCodeAt(0), ctrlKey: true }] }
// });
// MM.Command.New.execute = function () {
// 	if (!confirm("Throw away your current map and start a new one?")) { return; }
// 	var map = new MM.Map();
// 	MM.App.setMap(map);
// 	MM.publish("map-new", this);
// }


MM.Command.ZoomIn = Object.create(MM.Command, {
  label: {
    value: "Zoom in"
  },
  keys: {
    value: [{
      charCode: "+".charCodeAt(0)
    }]
  }
});

MM.Command.ZoomIn.execute = function () {
  MM.App.zoom(1);
};

MM.Command.ZoomOut = Object.create(MM.Command, {
  label: {
    value: "Zoom out"
  },
  keys: {
    value: [{
      charCode: "-".charCodeAt(0)
    }]
  }
});

MM.Command.ZoomOut.execute = function () {
  MM.App.zoom(-1);
};

MM.Command.Pan = Object.create(MM.Command, {
  label: {
    value: "Pan the map"
  },
  keys: {
    value: [{
      keyCode: "W".charCodeAt(0),
      ctrlKey: false,
      altKey: false,
      metaKey: false
    }, {
      keyCode: "A".charCodeAt(0),
      ctrlKey: false,
      altKey: false,
      metaKey: false
    }, {
      keyCode: "S".charCodeAt(0),
      ctrlKey: false,
      altKey: false,
      metaKey: false
    }, {
      keyCode: "D".charCodeAt(0),
      ctrlKey: false,
      altKey: false,
      metaKey: false
    }]
  },
  chars: {
    value: []
  }
});

MM.Command.Pan.execute = function (e) {
  var ch = String.fromCharCode(e.keyCode);
  var index = this.chars.indexOf(ch);

  if (index > -1) {
    return;
  }

  if (!this.chars.length) {
    window.addEventListener("keyup", this);
    this.interval = setInterval(this._step.bind(this), 50);
  }

  this.chars.push(ch);

  this._step();
};

MM.Command.Pan._step = function () {
  var dirs = {
    "W": [0, 1],
    "A": [-1, 0],
    "S": [0, -1],
    "D": [1, 0]
  };
  var offset = [0, 0];
  this.chars.forEach(function (ch) {
    offset[0] += dirs[ch][0];
    offset[1] += dirs[ch][1];
  });
  MM.App.map.moveBy(15 * offset[0], 15 * offset[1]);
};

MM.Command.Pan.handleEvent = function (e) {
  var ch = String.fromCharCode(e.keyCode);
  var index = this.chars.indexOf(ch);

  if (index > -1) {
    this.chars.splice(index, 1);

    if (!this.chars.length) {
      window.removeEventListener("keyup", this);
      clearInterval(this.interval);
    }
  }
};

MM.Command.Copy = Object.create(MM.Command, {
  label: {
    value: "Copy"
  },
  prevent: {
    value: false
  },
  keys: {
    value: [{
      keyCode: "C".charCodeAt(0),
      ctrlKey: true
    }, {
      keyCode: "C".charCodeAt(0),
      metaKey: true
    }]
  }
});

MM.Command.Copy.execute = function () {
  MM.Clipboard.copy(MM.App.current);
};

MM.Command.Cut = Object.create(MM.Command, {
  label: {
    value: "Cut"
  },
  prevent: {
    value: false
  },
  keys: {
    value: [{
      keyCode: "X".charCodeAt(0),
      ctrlKey: true
    }, {
      keyCode: "X".charCodeAt(0),
      metaKey: true
    }]
  }
});

MM.Command.Cut.execute = function () {
  MM.Clipboard.cut(MM.App.current);
};

MM.Command.Paste = Object.create(MM.Command, {
  label: {
    value: "Paste"
  },
  prevent: {
    value: false
  },
  keys: {
    value: [{
      keyCode: "V".charCodeAt(0),
      ctrlKey: true
    }, {
      keyCode: "V".charCodeAt(0),
      metaKey: true
    }]
  }
});

MM.Command.Paste.execute = function () {
  MM.Clipboard.paste(MM.App.current);
};

MM.Command.Fold = Object.create(MM.Command, {
  label: {
    value: "Fold/Unfold"
  },
  keys: {
    value: [{
      charCode: "f".charCodeAt(0),
      ctrlKey: false
    }]
  }
});

MM.Command.Fold.execute = function () {
  var item = MM.App.current;

  if (item.isCollapsed()) {
    item.expand();
  } else {
    item.collapse();
  }

  MM.App.map.ensureItemVisibility(item);
};

MM.Command.Edit = Object.create(MM.Command, {
  label: {
    value: "Edit item"
  },
  keys: {
    value: [{
      keyCode: 32
    }, {
      keyCode: 113
    }]
  }
});

MM.Command.Edit.execute = function () {
  MM.App.current.startEditing();
  MM.App.editing = true;
  var range = document.createRange();
  range.selectNodeContents(MM.App.current._dom.text);
  var selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
};

MM.Command.Finish = Object.create(MM.Command, {
  keys: {
    value: [{
      keyCode: 13,
      altKey: false,
      ctrlKey: false,
      shiftKey: false
    }]
  },
  editMode: {
    value: true
  }
});

MM.Command.Finish.execute = function () {
  MM.App.editing = false;
  var text = MM.App.current.stopEditing();

  if (text) {
    var action = new MM.Action.SetText(MM.App.current, text);
  } else {
    var action = new MM.Action.RemoveItem(MM.App.current);
  }

  MM.App.action(action);
};

MM.Command.Newline = Object.create(MM.Command, {
  label: {
    value: "Line break"
  },
  keys: {
    value: [{
      keyCode: 13,
      shiftKey: true
    }, {
      keyCode: 13,
      ctrlKey: true
    }]
  },
  editMode: {
    value: true
  }
});

MM.Command.Newline.execute = function () {
  var range = getSelection().getRangeAt(0);
  var br = document.createElement("br");
  range.insertNode(br);
  range.setStartAfter(br);
  MM.App.current.updateSubtree();
};

MM.Command.Cancel = Object.create(MM.Command, {
  editMode: {
    value: true
  },
  keys: {
    value: [{
      keyCode: 27
    }]
  }
});

MM.Command.Cancel.execute = function () {
  MM.App.editing = false;
  MM.App.current.stopEditing();
  var oldText = MM.App.current.getText();

  if (!oldText) {
    /* newly added node */
    var action = new MM.Action.RemoveItem(MM.App.current);
    MM.App.action(action);
  }
};

MM.Command.Style = Object.create(MM.Command, {
  editMode: {
    value: null
  },
  command: {
    value: ""
  }
});

MM.Command.Style.execute = function () {
  if (MM.App.editing) {
    document.execCommand(this.command, null, null);
  } else {
    MM.Command.Edit.execute();
    var selection = getSelection();
    var range = selection.getRangeAt(0);
    range.selectNodeContents(MM.App.current.getDOM().text);
    selection.removeAllRanges();
    selection.addRange(range);
    this.execute();
    MM.Command.Finish.execute();
  }
};

MM.Command.Bold = Object.create(MM.Command.Style, {
  command: {
    value: "bold"
  },
  label: {
    value: "Bold"
  },
  keys: {
    value: [{
      keyCode: "B".charCodeAt(0),
      ctrlKey: true
    }]
  }
});
MM.Command.Underline = Object.create(MM.Command.Style, {
  command: {
    value: "underline"
  },
  label: {
    value: "Underline"
  },
  keys: {
    value: [{
      keyCode: "U".charCodeAt(0),
      ctrlKey: true
    }]
  }
});
MM.Command.Italic = Object.create(MM.Command.Style, {
  command: {
    value: "italic"
  },
  label: {
    value: "Italic"
  },
  keys: {
    value: [{
      keyCode: "I".charCodeAt(0),
      ctrlKey: true
    }]
  }
});
MM.Command.Strikethrough = Object.create(MM.Command.Style, {
  command: {
    value: "strikeThrough"
  },
  label: {
    value: "Strike-through"
  },
  keys: {
    value: [{
      keyCode: "S".charCodeAt(0),
      ctrlKey: true,
      shiftKey: true
    }]
  }
});
MM.Command.Value = Object.create(MM.Command, {
  label: {
    value: "Set value"
  },
  keys: {
    value: [{
      charCode: "v".charCodeAt(0),
      ctrlKey: false,
      metaKey: false
    }]
  }
});

MM.Command.Value.execute = function () {
  var item = MM.App.current;
  var oldValue = item.getValue();
  var newValue = prompt("Set item value", oldValue);

  if (newValue == null) {
    return;
  }

  if (!newValue.length) {
    newValue = null;
  }

  var numValue = parseFloat(newValue);
  var action = new MM.Action.SetValue(item, isNaN(numValue) ? newValue : numValue);
  MM.App.action(action);
};

MM.Command.Yes = Object.create(MM.Command, {
  label: {
    value: "Yes"
  },
  keys: {
    value: [{
      charCode: "y".charCodeAt(0),
      ctrlKey: false
    }]
  }
});

MM.Command.Yes.execute = function () {
  var item = MM.App.current;
  var status = item.getStatus() == "yes" ? null : "yes";
  var action = new MM.Action.SetStatus(item, status);
  MM.App.action(action);
};

MM.Command.No = Object.create(MM.Command, {
  label: {
    value: "No"
  },
  keys: {
    value: [{
      charCode: "n".charCodeAt(0),
      ctrlKey: false
    }]
  }
});

MM.Command.No.execute = function () {
  var item = MM.App.current;
  var status = item.getStatus() == "no" ? null : "no";
  var action = new MM.Action.SetStatus(item, status);
  MM.App.action(action);
}; // MM.Command.Computed = Object.create(MM.Command, {
// 	label: { value: "Computed" },
// 	keys: { value: [{ charCode: "c".charCodeAt(0), ctrlKey: false, metaKey: false }] }
// });
// MM.Command.Computed.execute = function () {
// 	var item = MM.App.current;
// 	var status = (item.getStatus() == "computed" ? null : "computed");
// 	var action = new MM.Action.SetStatus(item, status);
// 	MM.App.action(action);
// }


MM.Command.Select = Object.create(MM.Command, {
  label: {
    value: "Move selection"
  },
  keys: {
    value: [{
      keyCode: 38,
      ctrlKey: false
    }, {
      keyCode: 37,
      ctrlKey: false
    }, {
      keyCode: 40,
      ctrlKey: false
    }, {
      keyCode: 39,
      ctrlKey: false
    }]
  }
});

MM.Command.Select.execute = function (e) {
  var dirs = {
    37: "left",
    38: "top",
    39: "right",
    40: "bottom"
  };
  var dir = dirs[e.keyCode];
  var layout = MM.App.current.getLayout();
  var item =
  /*MM.App.map*/
  layout.pick(MM.App.current, dir);
  MM.App.select(item);
};

MM.Command.SelectRoot = Object.create(MM.Command, {
  label: {
    value: "Select root"
  },
  keys: {
    value: [{
      keyCode: 36
    }]
  }
});

MM.Command.SelectRoot.execute = function () {
  var item = MM.App.current;

  while (!item.isRoot()) {
    item = item.getParent();
  }

  MM.App.select(item);
};

MM.Command.SelectParent = Object.create(MM.Command, {
  label: {
    value: "Select parent"
  },
  keys: {
    value: [{
      keyCode: 8
    }]
  }
});

MM.Command.SelectParent.execute = function () {
  if (MM.App.current.isRoot()) {
    return;
  }

  MM.App.select(MM.App.current.getParent());
};

MM.Command.DeleteIcon = Object.create(MM.Command, {
  label: {
    value: "Delete Icon"
  },
  keys: {
    value: [{
      keyCode: "I".charCodeAt(0)
    }]
  }
});

MM.Command.DeleteIcon.execute = function (target) {
  var key = target.getAttribute("data-key");

  if (key) {
    var item = MM.App.current;
    item.deleteIcon(key);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (MM.Command);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

MM.Layout = Object.create(MM.Repo, {
  ALL: {
    value: []
  },
  SPACING_RANK: {
    value: 4
  },
  SPACING_CHILD: {
    value: 4
  }
});

MM.Layout.getAll = function () {
  return this.ALL;
};
/**
 * Re-draw an item and its children
 */


MM.Layout.update = function (item) {
  return this;
};
/**
 * @param {MM.Item} child Child node (its parent uses this layout)
 */


MM.Layout.getChildDirection = function (child) {
  return "";
};

MM.Layout.pick = function (item, dir) {
  var opposite = {
    left: "right",
    right: "left",
    top: "bottom",
    bottom: "top"
  };
  /* direction for a child */

  if (!item.isCollapsed()) {
    var children = item.getChildren();

    for (var i = 0; i < children.length; i++) {
      var child = children[i];

      if (this.getChildDirection(child) == dir) {
        return child;
      }
    }
  }

  if (item.isRoot()) {
    return item;
  }

  var parentLayout = item.getParent().getLayout();
  var thisChildDirection = parentLayout.getChildDirection(item);

  if (thisChildDirection == dir) {
    return item;
  } else if (thisChildDirection == opposite[dir]) {
    return item.getParent();
  } else {
    return parentLayout.pickSibling(item, dir == "left" || dir == "top" ? -1 : +1);
  }
};

MM.Layout.pickSibling = function (item, dir) {
  if (item.isRoot()) {
    return item;
  }

  var children = item.getParent().getChildren();
  var index = children.indexOf(item);
  index += dir;
  index = (index + children.length) % children.length;
  return children[index];
};
/**
 * Adjust canvas size and position
 */


MM.Layout._anchorCanvas = function (item) {
  var dom = item.getDOM();
  dom.canvas.width = dom.node.offsetWidth;
  dom.canvas.height = dom.node.offsetHeight;
};

MM.Layout._anchorToggle = function (item, x, y, side) {
  var node = item.getDOM().toggle;
  var w = node.offsetWidth;
  var h = node.offsetHeight;
  var l = x;
  var t = y;

  switch (side) {
    case "left":
      t -= h / 2;
      l -= w;
      break;

    case "right":
      t -= h / 2;
      break;

    case "top":
      l -= w / 2;
      t -= h;
      break;

    case "bottom":
      l -= w / 2;
      break;
  }

  node.style.left = Math.round(l) + "px";
  node.style.top = Math.round(t) + "px";
};

MM.Layout._getChildAnchor = function (item, side) {
  var dom = item.getDOM();

  if (side == "left" || side == "right") {
    var pos = dom.node.offsetLeft + dom.content.offsetLeft;

    if (side == "left") {
      pos += dom.content.offsetWidth;
    }
  } else {
    var pos = dom.node.offsetTop + dom.content.offsetTop;

    if (side == "top") {
      pos += dom.content.offsetHeight;
    }
  }

  return pos;
};

MM.Layout._computeChildrenBBox = function (children, childIndex) {
  var bbox = [0, 0];
  var rankIndex = childIndex ? 0 : 1;
  children.forEach(function (child, index) {
    var node = child.getDOM().node;
    var childSize = [node.offsetWidth, node.offsetHeight];
    bbox[rankIndex] = Math.max(bbox[rankIndex], childSize[rankIndex]);
    /* adjust cardinal size */

    bbox[childIndex] += childSize[childIndex];
    /* adjust orthogonal size */
  }, this);

  if (children.length > 1) {
    bbox[childIndex] += this.SPACING_CHILD * (children.length - 1); // const offsetY = children[0].getDOM().node.offsetTop;//线高度1px
    // bbox[1] -= offsetY
  }
  /* child separation */


  return bbox;
};

MM.Layout._alignItem = function (item, side) {
  var dom = item.getDOM(); // 所有情况都插入

  dom.content.insertBefore(dom.icon, dom.content.firstChild);

  switch (side) {
    case "left":
      dom.content.appendChild(dom.value);
      dom.content.appendChild(dom.status);
      break;

    case "right":
      dom.content.insertBefore(dom.value, dom.content.firstChild);
      dom.content.insertBefore(dom.status, dom.content.firstChild);
      break;
  }
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
MM.Layout.Graph = Object.create(MM.Layout, {
  SPACING_RANK: {
    value: 64
  },
  childDirection: {
    value: ""
  },
  thirdChildOffsetTop: {
    value: -14
  }
});

MM.Layout.Graph.getChildDirection = function (child) {
  return this.childDirection;
};

MM.Layout.Graph.create = function (direction, id, label) {
  var layout = Object.create(this, {
    childDirection: {
      value: direction
    },
    id: {
      value: id
    },
    label: {
      value: label
    }
  });
  MM.Layout.ALL.push(layout);
  return layout;
};

MM.Layout.Graph.update = function (item) {
  var side = this.childDirection;

  if (!item.isRoot()) {
    side = item.getParent().getLayout().getChildDirection(item);
  }

  this._alignItem(item, side);

  this._layoutItem(item, this.childDirection);

  if (this.childDirection == "left" || this.childDirection == "right") {
    this._drawLinesHorizontal(item, this.childDirection);
  } else {
    this._drawLinesVertical(item, this.childDirection);
  }

  return this;
};
/**
 * Generic graph child layout routine. Updates item's orthogonal size according to the sum of its children.
 */


MM.Layout.Graph._layoutItem = function (item, rankDirection) {
  var shape = item.getShape().id;
  var spacingRank = this.SPACING_RANK;
  var sizeProps = ["width", "height"];
  var posProps = ["left", "top"];
  var rankIndex = rankDirection == "left" || rankDirection == "right" ? 0 : 1;
  var childIndex = rankIndex === 0 ? 1 : 0;
  var rankPosProp; // 左右排是css的left,上下是以top为基准 

  var childPosProp; // 排列方式的的另一个css属性

  var rankSizeProp; //  

  var childSizeProp; // 宽高

  if (rankDirection == "left" || rankDirection == "right") {
    rankPosProp = "left", childPosProp = "top";
    rankSizeProp = "width";
    childSizeProp = "height";
  } else {
    rankPosProp = "top", childPosProp = "left";
    rankSizeProp = "height";
    childSizeProp = "width";
  }

  var dom = item.getDOM();
  /* content size */

  var contentSize = [dom.content.offsetWidth, dom.content.offsetHeight];
  /* children size */
  // 撑开孩子节点的属性

  var bbox = this._computeChildrenBBox(item.getChildren(), childIndex);

  var rankSize = contentSize[rankIndex];

  if (bbox[rankIndex]) {
    rankSize += bbox[rankIndex] + spacingRank;
  }

  var childSize = Math.max(bbox[childIndex], contentSize[childIndex]);
  var offset = [0, 0];

  if (rankDirection == "right") {
    offset[0] = contentSize[0] + spacingRank;
  }

  if (rankDirection == "bottom") {
    offset[1] = contentSize[1] + spacingRank;
  } // 居中子元素所需要的偏移量


  offset[childIndex] = Math.round((childSize - bbox[childIndex]) / 2);

  if (shape === 'box') {
    this._layoutBoxChildren(item.getChildren(), rankDirection, offset, bbox);
  } else {
    this._layoutChildren(item.getChildren(), rankDirection, offset, bbox);
  }
  /* label position */


  var labelPos = 0;

  if (rankDirection == "left") {
    labelPos = rankSize - contentSize[0];
  }

  if (rankDirection == "top") {
    labelPos = rankSize - contentSize[1];
  }

  var offsetY = 0;

  if (item.getChildren().length) {
    var child = item.getChildren()[0]; // 父子节点都为Underline的情况不用偏移

    if (child.getShape().id === "underline" && shape !== "underline") {
      var childNode = child.getDOM().text;
      offsetY = childNode.offsetHeight / 2 + 1; //线高度1px
    } else if (item.getChildren().length) {
      //TODO: 当只有一个children时，兼容多行文本
      offsetY = (child.getDOM().text.offsetHeight - dom.content.offsetHeight) / 2;
      offsetY = offsetY < 0 ? 0 : offsetY;
    }
  }

  dom.content.style[childPosProp] = Math.round((childSize - contentSize[childIndex]) / 2) + offsetY + "px";
  dom.content.style[rankPosProp] = labelPos + "px"; // 当元素的子节点布局完成后，重新设置子节点的高度，避免子节点偏移后，高度不准确

  var itemSize = [dom.content.offsetWidth + dom.content.offsetLeft, dom.content.offsetHeight + dom.content.offsetTop];
  childSize = Math.max(bbox[childIndex], itemSize[childIndex]);
  dom.node.style[rankSizeProp] = rankSize + "px"; // 父元素的宽度为文字的宽度

  dom.node.style[childSizeProp] = childSize + "px"; // 子元素撑开的高度就是父元素的高度

  return this;
};

MM.Layout.Graph._layoutBoxChildren = function (children, rankDirection, offset, bbox) {
  var posProps = ["left", "top"];
  var rankIndex = rankDirection == "left" || rankDirection == "right" ? 0 : 1;
  var childIndex = (rankIndex + 1) % 2;
  var rankPosProp = posProps[rankIndex];
  var childPosProp = posProps[childIndex];
  children.forEach(function (child, index) {
    var node = child.getDOM().node; // 下划线的Y

    var offsetY = node.offsetHeight + child.getShape().VERTICAL_OFFSET - node.offsetHeight / 2 - 1; //线高度1px

    var childSize = [node.offsetWidth, node.offsetHeight];

    if (rankDirection == "left") {
      offset[0] = bbox[0] - childSize[0];
    }

    if (rankDirection == "top") {
      offset[1] = bbox[1] - childSize[1] - 10;
    } // //横向情况
    // if (rankIndex === 0 && index === 0) {
    // 	offset[1] -= offsetY;
    // }
    // 这个常量会被css修改，要注意修改


    node.style[childPosProp] = offset[childIndex] + "px";
    node.style[rankPosProp] = offset[rankIndex] + "px";
    offset[childIndex] += childSize[childIndex] + this.SPACING_CHILD;
    /* offset for next child */
  }, this);
  return bbox;
};

MM.Layout.Graph._layoutChildren = function (children, rankDirection, offset, bbox) {
  var posProps = ["left", "top"];
  var rankIndex = rankDirection == "left" || rankDirection == "right" ? 0 : 1;
  var childIndex = (rankIndex + 1) % 2;
  var rankPosProp = posProps[rankIndex];
  var childPosProp = posProps[childIndex];
  children.forEach(function (child, index) {
    var node = child.getDOM().node;
    var childSize = [node.offsetWidth, node.offsetHeight];

    if (rankDirection == "left") {
      offset[0] = bbox[0] - childSize[0];
    }

    if (rankDirection == "top") {
      offset[1] = bbox[1] - childSize[1];
    }

    node.style[childPosProp] = offset[childIndex] + "px";
    node.style[rankPosProp] = offset[rankIndex] + "px";
    offset[childIndex] += childSize[childIndex] + this.SPACING_CHILD;
    /* offset for next child */
  }, this);
  return bbox;
};

MM.Layout.Graph._drawLinesHorizontal = function (item, side) {
  this._anchorCanvas(item);

  this._drawHorizontalConnectors(item, side, item.getChildren());
};

MM.Layout.Graph._drawLinesVertical = function (item, side) {
  this._anchorCanvas(item);

  this._drawVerticalConnectors(item, side, item.getChildren());
};

MM.Layout.Graph._drawHorizontalConnectors = function (item, side, children) {
  if (children.length == 0) {
    return;
  }

  var dom = item.getDOM();
  var canvas = dom.canvas;
  var ctx = canvas.getContext("2d");
  ctx.strokeStyle = item.getColor();
  var R = this.SPACING_RANK / 2;
  /* first part */

  var y1 = item.getShape().getVerticalAnchor(item);

  if (side == "left") {
    var x1 = dom.content.offsetLeft - 0.5;
  } else {
    var x1 = dom.content.offsetWidth + dom.content.offsetLeft + 0.5;
  }

  this._anchorToggle(item, x1, y1, side);

  if (item.isCollapsed()) {
    return;
  }

  if (children.length == 1) {
    //一个子节点时的情况
    var child = children[0];
    var y2 = child.getShape().getVerticalAnchor(child) + child.getDOM().node.offsetTop;

    var x2 = this._getChildAnchor(child, side);

    ctx.beginPath();
    ctx.moveTo(x1, y1); // ctx.lineTo(x2, y1);

    ctx.bezierCurveTo((x1 + x2) / 2, y1, (x1 + x2) / 2, y2, x2, y2);
    ctx.stroke();
    return;
  }

  if (side == "left") {
    var x2 = x1 - R;
  } else {
    var x2 = x1 + R;
  } // 当前节点到子节点直接的直线


  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y1);
  ctx.stroke();
  /* rounded connectors */

  var c1 = children[0];
  var c2 = children[children.length - 1];
  var x = x2;
  var y = y1;
  var xx = x + (side == "left" ? -R : R);
  var sideVal = side === "left" ? -1 : 1;
  var y1 = c1.getShape().getVerticalAnchor(c1) + c1.getDOM().node.offsetTop;
  var y2 = c2.getShape().getVerticalAnchor(c2) + c2.getDOM().node.offsetTop;

  var x1 = this._getChildAnchor(c1, side);

  var x2 = this._getChildAnchor(c2, side);

  ctx.beginPath(); // 重构这部分逻辑，写死倒角大小
  // 三级节点的直线部分

  var r = 12;
  ctx.moveTo(x1, y1);
  ctx.lineTo(xx, y1);
  ctx.lineTo(x + sideVal * (r - 1), y1);
  ctx.arcTo(x, y1, x, y1 + r, r);
  ctx.lineTo(x, y2 - r + 1);
  ctx.arcTo(x, y2, x + sideVal * r, y2, r);
  ctx.moveTo(x + sideVal * (r - 1), y2);
  ctx.lineTo(x2, y2);

  for (var i = 1; i < children.length - 1; i++) {
    var c = children[i];

    var _x = this._getChildAnchor(c, side);

    var y = c.getShape().getVerticalAnchor(c) + c.getDOM().node.offsetTop; // 节点下的下划线

    ctx.moveTo(_x, y);
    var offsetTop = 0;

    if (item.getShape().id === "underline") {
      offsetTop = dom.content.offsetTop + item.getShape().VERTICAL_OFFSET + dom.content.offsetHeight;
    } else {
      offsetTop = dom.content.offsetTop + dom.content.offsetHeight / 2;
    }

    if (Math.abs(y - offsetTop) <= 1) {
      ctx.lineTo(x, y);
      continue;
    }

    var offsetX = side === "right" ? 5 : -5;
    var offsetY = y > offsetTop ? -5 : 5;
    ctx.lineTo(x + offsetX, y);
    ctx.quadraticCurveTo(x, y, x, y + offsetY);
  }

  ctx.stroke();
};

MM.Layout.Graph._drawVerticalConnectors = function (item, side, children) {
  if (children.length == 0) {
    return;
  }

  var dom = item.getDOM();
  var canvas = dom.canvas;
  var ctx = canvas.getContext("2d");
  ctx.strokeStyle = item.getColor();
  /* first part */

  var R = this.SPACING_RANK / 2;
  var x = item.getShape().getHorizontalAnchor(item);
  var height = children.length == 1 ? 2 * R : R;

  if (side == "top") {
    var y1 = canvas.height - dom.content.offsetHeight;
    var y2 = y1 - height;

    this._anchorToggle(item, x, y1, side);
  } else {
    var y1 = item.getShape().getVerticalAnchor(item);
    var y2 = dom.content.offsetHeight + height;

    this._anchorToggle(item, x, dom.content.offsetHeight, side);
  }

  ctx.beginPath();
  ctx.moveTo(x, y1);
  ctx.lineTo(x, y2);
  ctx.stroke();

  if (children.length == 1) {
    return;
  }
  /* rounded connectors */


  var c1 = children[0];
  var c2 = children[children.length - 1];
  var offset = dom.content.offsetHeight + height;
  var y = Math.round(side == "top" ? canvas.height - offset : offset) + 0.5;
  var x1 = c1.getShape().getHorizontalAnchor(c1) + c1.getDOM().node.offsetLeft;
  var x2 = c2.getShape().getHorizontalAnchor(c2) + c2.getDOM().node.offsetLeft;

  var y1 = this._getChildAnchor(c1, side);

  var y2 = this._getChildAnchor(c2, side); // var center = [(x1+x2)/2,y1];
  //写死


  R = 12;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.arcTo(x1, y, x1 + R, y, R);
  ctx.lineTo(x2 - R, y);
  ctx.arcTo(x2, y, x2, y2, R);
  ctx.lineTo(x2, y2);

  for (var i = 1; i < children.length - 1; i++) {
    var c = children[i];
    var x = c.getShape().getHorizontalAnchor(c) + c.getDOM().node.offsetLeft;
    ctx.moveTo(x, y);
    ctx.lineTo(x, this._getChildAnchor(c, side));
  }

  ctx.stroke();
};

MM.Layout.Graph.Down = MM.Layout.Graph.create("bottom", "graph-bottom", "Bottom");
MM.Layout.Graph.Up = MM.Layout.Graph.create("top", "graph-top", "Top");
MM.Layout.Graph.Left = MM.Layout.Graph.create("left", "graph-left", "Left");
MM.Layout.Graph.Right = MM.Layout.Graph.create("right", "graph-right", "Right");
/* harmony default export */ __webpack_exports__["default"] = (MM.Layout.Graph);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
MM.Layout.Tree = Object.create(MM.Layout, {
  SPACING_RANK: {
    value: 32
  },
  childDirection: {
    value: ""
  }
});

MM.Layout.Tree.getChildDirection = function (child) {
  return this.childDirection;
};

MM.Layout.Tree.create = function (direction, id, label) {
  var layout = Object.create(this, {
    childDirection: {
      value: direction
    },
    id: {
      value: id
    },
    label: {
      value: label
    }
  });
  MM.Layout.ALL.push(layout);
  return layout;
};

MM.Layout.Tree.update = function (item) {
  var side = this.childDirection;

  if (!item.isRoot()) {
    side = item.getParent().getLayout().getChildDirection(item);
  }

  this._alignItem(item, side);

  this._layoutItem(item, this.childDirection);

  this._anchorCanvas(item);

  this._drawLines(item, this.childDirection);

  return this;
};
/**
 * Generic graph child layout routine. Updates item's orthogonal size according to the sum of its children.
 */


MM.Layout.Tree._layoutItem = function (item, rankDirection) {
  var dom = item.getDOM();
  /* content size */

  var contentSize = [dom.content.offsetWidth, dom.content.offsetHeight];
  /* children size */

  var bbox = this._computeChildrenBBox(item.getChildren(), 1);
  /* node size */


  var rankSize = contentSize[0];
  var childSize = bbox[1] + contentSize[1];

  if (bbox[0]) {
    rankSize = Math.max(rankSize, bbox[0] + this.SPACING_RANK);
    childSize += this.SPACING_CHILD;
  }

  dom.node.style.width = rankSize + "px";
  dom.node.style.height = childSize + "px";
  var offset = [this.SPACING_RANK, contentSize[1] + this.SPACING_CHILD];

  if (rankDirection == "left") {
    offset[0] = rankSize - bbox[0] - this.SPACING_RANK;
  }

  this._layoutChildren(item.getChildren(), rankDirection, offset, bbox);
  /* label position */


  var labelPos = 0;

  if (rankDirection == "left") {
    labelPos = rankSize - contentSize[0];
  }

  dom.content.style.left = labelPos + "px";
  dom.content.style.top = 0;
  return this;
};

MM.Layout.Tree._layoutChildren = function (children, rankDirection, offset, bbox) {
  children.forEach(function (child, index) {
    var node = child.getDOM().node;
    var childSize = [node.offsetWidth, node.offsetHeight];
    var left = offset[0];

    if (rankDirection == "left") {
      left += bbox[0] - childSize[0];
    }

    node.style.left = left + "px";
    node.style.top = offset[1] + "px";
    offset[1] += childSize[1] + this.SPACING_CHILD;
    /* offset for next child */
  }, this);
  return bbox;
};

MM.Layout.Tree._drawLines = function (item, side) {
  var dom = item.getDOM();
  var canvas = dom.canvas;
  var R = this.SPACING_RANK / 4;
  var x = (side == "left" ? canvas.width - 2 * R : 2 * R) + 0.5;

  this._anchorToggle(item, x, dom.content.offsetHeight, "bottom");

  var children = item.getChildren();

  if (children.length == 0 || item.isCollapsed()) {
    return;
  }

  var ctx = canvas.getContext("2d");
  ctx.strokeStyle = item.getColor();
  var y1 = item.getShape().getVerticalAnchor(item);
  var last = children[children.length - 1];
  var y2 = last.getShape().getVerticalAnchor(last) + last.getDOM().node.offsetTop;
  ctx.beginPath();
  ctx.moveTo(x, y1);
  ctx.lineTo(x, y2 - R);
  /* rounded connectors */

  for (var i = 0; i < children.length; i++) {
    var c = children[i];
    var y = c.getShape().getVerticalAnchor(c) + c.getDOM().node.offsetTop;

    var anchor = this._getChildAnchor(c, side);

    ctx.moveTo(x, y - R);
    ctx.arcTo(x, y, anchor, y, R);
    ctx.lineTo(anchor, y);
  }

  ctx.stroke();
};

MM.Layout.Tree.Left = MM.Layout.Tree.create("left", "tree-left", "Left");
MM.Layout.Tree.Right = MM.Layout.Tree.create("right", "tree-right", "Right");
/* harmony default export */ __webpack_exports__["default"] = (MM.Layout.Tree);

/***/ }),
/* 20 */
/***/ (function(module, exports) {

MM.Layout.Map = Object.create(MM.Layout.Graph, {
  id: {
    value: "map"
  },
  label: {
    value: "Map"
  },
  ROOT_SPACE: {
    value: 64
  },
  LINE_THICKNESS: {
    value: 8
  }
});
MM.Layout.ALL.push(MM.Layout.Map);
var rightLayout = Object.create(MM.Layout.Map, {
  id: {
    value: "map-right"
  },
  label: {
    value: "Map-Right"
  },
  ROOT_SPACE: {
    value: 64
  },
  LINE_THICKNESS: {
    value: 8
  }
});
MM.Layout.ALL.push(rightLayout);
var leftLayout = Object.create(MM.Layout.Map, {
  id: {
    value: "map-left"
  },
  label: {
    value: "Map-Left"
  },
  ROOT_SPACE: {
    value: 64
  },
  LINE_THICKNESS: {
    value: 8
  }
});
MM.Layout.ALL.push(leftLayout);

MM.Layout.Map.update = function (item) {
  if (item.isRoot()) {
    this._layoutRoot(item);
  } else {
    var side = this.getChildDirection(item);
    var name = side.charAt(0).toUpperCase() + side.substring(1);
    MM.Layout.Graph[name].update(item);
  }
};
/**
 * @param {MM.Item} child Child node
 */


MM.Layout.Map.getChildDirection = function (child) {
  while (!child.getParent().isRoot()) {
    child = child.getParent();
  }
  /* child is now the sub-root node */
  //区分左右map布局


  if (this.id === 'map-right') {
    return 'right';
  } else if (this.id === 'map-left') {
    return 'left';
  }

  var side = child.getSide();

  if (side) {
    return side;
  }

  var counts = {
    left: 0,
    right: 0
  };
  var children = child.getParent().getChildren();

  for (var i = 0; i < children.length; i++) {
    var side = children[i].getSide();

    if (!side) {
      side = counts.right > counts.left ? "left" : "right";
      children[i].setSide(side);
    }

    counts[side]++;
  }

  return child.getSide();
};

MM.Layout.Map.pickSibling = function (item, dir) {
  if (item.isRoot()) {
    return item;
  }

  var parent = item.getParent();
  var children = parent.getChildren();

  if (parent.isRoot()) {
    var side = this.getChildDirection(item);
    children = children.filter(function (child) {
      return this.getChildDirection(child) == side;
    }, this);
  }

  var index = children.indexOf(item);
  index += dir;
  index = (index + children.length) % children.length;
  return children[index];
};

MM.Layout.Map._layoutRoot = function (item) {
  this._alignItem(item, "right");

  var dom = item.getDOM();
  var children = item.getChildren();
  var childrenLeft = [];
  var childrenRight = [];
  children.forEach(function (child, index) {
    var node = child.getDOM().node;
    var side = this.getChildDirection(child);

    if (side == "left") {
      childrenLeft.push(child);
    } else {
      childrenRight.push(child);
    }
  }, this);

  var bboxLeft = this._computeChildrenBBox(childrenLeft, 1);

  var bboxRight = this._computeChildrenBBox(childrenRight, 1);

  var height = Math.max(bboxLeft[1], bboxRight[1], dom.content.offsetHeight);
  var left = 0;

  this._layoutChildren(childrenLeft, "left", [left, Math.round((height - bboxLeft[1]) / 2)], bboxLeft);

  left += bboxLeft[0];

  if (childrenLeft.length) {
    left += this.ROOT_SPACE;
  }

  dom.content.style.left = left + "px";
  left += dom.content.offsetWidth;

  if (childrenRight.length) {
    left += this.ROOT_SPACE;
  }

  this._layoutChildren(childrenRight, "right", [left, Math.round((height - bboxRight[1]) / 2)], bboxRight);

  left += bboxRight[0];
  dom.content.style.top = Math.round((height - dom.content.offsetHeight) / 2) + "px";
  dom.node.style.height = height + "px";
  dom.node.style.width = left + "px";

  this._anchorCanvas(item);

  this._drawRootConnectors(item, "left", childrenLeft);

  this._drawRootConnectors(item, "right", childrenRight);
};

MM.Layout.Map._drawRootConnectors = function (item, side, children) {
  if (children.length == 0 || item.isCollapsed()) {
    return;
  }

  var dom = item.getDOM();
  var canvas = dom.canvas;
  var ctx = canvas.getContext("2d");
  var R = this.SPACING_RANK / 2;
  var x1 = dom.content.offsetLeft + dom.content.offsetWidth / 2;
  var y1 = item.getShape().getVerticalAnchor(item);
  var half = this.LINE_THICKNESS / 2;

  for (var i = 0; i < children.length; i++) {
    var child = children[i];

    var x2 = this._getChildAnchor(child, side);

    var y2 = child.getShape().getVerticalAnchor(child) + child.getDOM().node.offsetTop;
    var angle = Math.atan2(y2 - y1, x2 - x1) + Math.PI / 2;
    var dx = Math.cos(angle) * half;
    var dy = Math.sin(angle) * half;
    ctx.fillStyle = ctx.strokeStyle = child.getColor();
    ctx.beginPath();
    ctx.moveTo(x1 - dx, y1 - dy);
    ctx.quadraticCurveTo((x2 + x1) / 2, y2, x2, y2);
    ctx.quadraticCurveTo((x2 + x1) / 2, y2, x1 + dx, y1 + dy);
    ctx.fill();
    ctx.stroke();
  }
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @class
 */
MM.Shape = Object.create(MM.Repo, {
  VERTICAL_OFFSET: {
    value: 0.5
  }
});

MM.Shape.set = function (item) {
  item.getDOM().node.classList.add("shape-" + this.id);
  return this;
};

MM.Shape.unset = function (item) {
  item.getDOM().node.classList.remove("shape-" + this.id);
  return this;
};

MM.Shape.update = function (item) {
  var data = item._data;
  return this;
};

MM.Shape.getHorizontalAnchor = function (item) {
  var node = item.getDOM().content;
  return Math.round(node.offsetLeft + node.offsetWidth / 2) + 0.5;
};

MM.Shape.getVerticalAnchor = function (item) {
  var node = item.getDOM().content;
  return node.offsetTop + Math.round(node.offsetHeight * this.VERTICAL_OFFSET);
};

MM.Shape.Box = Object.create(MM.Shape, {
  id: {
    value: "box"
  },
  label: {
    value: "Box"
  }
});

MM.Shape.Box.update = function (item) {
  var data = item._data;

  if (data.backgroundColor) {
    item.getDOM().content.style.backgroundColor = data.backgroundColor;
  } else {
    item.getDOM().content.style.backgroundColor = "#4a90e2";
  }

  return this;
};

MM.Shape.Ellipse = Object.create(MM.Shape, {
  id: {
    value: "ellipse"
  },
  label: {
    value: "Ellipse"
  }
});

MM.Shape.Ellipse.update = function (item) {
  var data = item._data;

  if (data.backgroundColor) {
    item.getDOM().content.style.backgroundColor = data.backgroundColor;
  } else {
    item.getDOM().content.style.backgroundColor = "#50c28b";
  }

  return this;
};

MM.Shape.Underline = Object.create(MM.Shape, {
  id: {
    value: "underline"
  },
  label: {
    value: "Underline"
  },
  VERTICAL_OFFSET: {
    value: -3
  }
});

MM.Shape.Underline.update = function (item) {
  var dom = item.getDOM();
  var ctx = dom.canvas.getContext("2d");
  ctx.strokeStyle = item.getColor();
  var left = dom.content.offsetLeft;
  var right = left + dom.content.offsetWidth;
  var top = this.getVerticalAnchor(item);
  ctx.beginPath();
  ctx.moveTo(left, top);
  ctx.lineTo(right, top);
  ctx.stroke();
};

MM.Shape.Underline.getVerticalAnchor = function (item) {
  var node = item.getDOM().content;
  return node.offsetTop + node.offsetHeight + this.VERTICAL_OFFSET;
};

/* harmony default export */ __webpack_exports__["default"] = (MM.Shape);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
MM.Format = Object.create(MM.Repo, {
  extension: {
    value: ""
  },
  mime: {
    value: ""
  }
});

MM.Format.getByName = function (name) {
  var index = name.lastIndexOf(".");

  if (index == -1) {
    return null;
  }

  var extension = name.substring(index + 1).toLowerCase();
  return this.getByProperty("extension", extension);
};

MM.Format.getByMime = function (mime) {
  return this.getByProperty("mime", mime);
};

MM.Format.to = function (data) {};

MM.Format.from = function (data) {};

MM.Format.nl2br = function (str) {
  return str.replace(/\n/g, "<br/>");
};

MM.Format.br2nl = function (str) {
  return str.replace(/<br\s*\/?>/g, "\n");
};

MM.Format.JSON = Object.create(MM.Format, {
  id: {
    value: "json"
  },
  label: {
    value: "Native (JSON)"
  },
  extension: {
    value: "mymind"
  },
  mime: {
    value: "application/vnd.mymind+json"
  }
});

MM.Format.JSON.to = function (data) {
  return JSON.stringify(data, null, "\t") + "\n";
};

MM.Format.JSON.from = function (data) {
  return JSON.parse(data);
};

/* harmony default export */ __webpack_exports__["default"] = (MM.Format);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @class
 */
MM.Mouse = {
  TOUCH_DELAY: 500,
  _port: null,
  _cursor: [0, 0],
  _pos: [0, 0],

  /* ghost pos */
  _mode: "",
  _item: null,
  _ghost: null,
  _oldDragState: null,
  _touchTimeout: null
};

MM.Mouse.init = function (port) {
  this._port = port;

  this._port.addEventListener("touchstart", this);

  this._port.addEventListener("mousedown", this);

  this._port.addEventListener("click", this);

  this._port.addEventListener("dblclick", this);

  this._port.addEventListener("wheel", this);

  this._port.addEventListener("mouseleave", this);

  this._port.addEventListener("mousewheel", this);

  this._port.addEventListener("contextmenu", this);
};

MM.Mouse.handleEvent = function (e) {
  switch (e.type) {
    case "click":
      var item = MM.App.map.getItemFor(e.target);

      if (MM.App.editing && item._id == MM.App.current._id) {
        return;
      }
      /* ignore on edited node */


      if (item) {
        MM.App.select(item);
      }

      if (!item && MM.App.note.status !== "show") {
        MM.App.current.deselect();
      }

      break;

    case "dblclick":
      var item = MM.App.map.getItemFor(e.target);

      if (item) {
        MM.Command.Edit.execute();
      }

      break;

    case "contextmenu":
      this._endDrag();

      e.preventDefault();
      var item = MM.App.map.getItemFor(e.target);
      item && MM.App.select(item);
      MM.Menu.open(e.clientX, e.clientY, e.target);
      break;

    case "touchstart":
      if (e.touches.length > 1) {
        return;
      }

      e.clientX = e.touches[0].clientX;
      e.clientY = e.touches[0].clientY;

    case "mousedown":
      var item = MM.App.map.getItemFor(e.target);

      if (MM.App.editing) {
        if (item == MM.App.current) {
          return;
        }
        /* ignore dnd on edited node */


        MM.Command.Finish.execute();
        /* clicked elsewhere => finalize edit */
      }

      if (MM.App.note.status === "show") {
        if (!this.isNote(e.target)) {
          MM.App.note.hide();
        }

        return;
      }

      if (e.type == "mousedown") {
        e.preventDefault();
      }
      /* to prevent blurring the clipboard node */


      if (e.type == "touchstart") {
        /* context menu here, after we have the item */
        this._touchTimeout = setTimeout(function () {
          item && MM.App.select(item);
          MM.Menu.open(e.clientX, e.clientY);
        }, this.TOUCH_DELAY);
      }

      this._startDrag(e, item);

      break;

    case "touchmove":
      if (e.touches.length > 1) {
        return;
      }

      e.clientX = e.touches[0].clientX;
      e.clientY = e.touches[0].clientY;
      clearTimeout(this._touchTimeout);

    case "mousemove":
      this._processDrag(e);

      break;

    case "touchend":
      clearTimeout(this._touchTimeout);

    case "mouseup":
    case "mouseleave":
      this._endDrag();

      break;

    case "wheel":
    case "mousewheel":
      if (MM.App.note.status === 'show') return;
      var dir = 0;

      if (e.wheelDelta) {
        if (e.wheelDelta < 0) {
          dir = -1;
        } else if (e.wheelDelta > 0) {
          dir = 1;
        }
      }

      if (e.deltaY) {
        if (e.deltaY > 0) {
          dir = -1;
        } else if (e.deltaY < 0) {
          dir = 1;
        }
      }

      if (dir) {
        // 暂时去掉缩放
        // MM.App.adjustFontSize(dir);
        MM.publish("mousewheel", e);
      }

      break;
  }
};

MM.Mouse.isNote = function (target) {
  var parent = target;
  var flag = false;

  do {
    if (parent.className === undefined) {
      parent = false;
    } else if (parent.className.indexOf("mm-note") === 0) {
      flag = true;
      parent = false;
    } else {
      parent = parent.parentNode;
    }
  } while (parent);

  return flag;
};

MM.Mouse._startDrag = function (e, item) {
  if (e.type == "mousedown") {
    e.preventDefault();
    /* no selections allowed. only for mouse; preventing touchstart would prevent Safari from emulating clicks */

    this._port.addEventListener("mousemove", this);

    this._port.addEventListener("mouseup", this);
  } else {
    this._port.addEventListener("touchmove", this);

    this._port.addEventListener("touchend", this);
  }

  this._cursor[0] = e.clientX;
  this._cursor[1] = e.clientY;

  if (item && !item.isRoot()) {
    this._mode = "drag";
    this._item = item;
  } else {
    this._mode = "pan";
    this._port.style.cursor = "move";
  }
};

MM.Mouse._processDrag = function (e) {
  e.preventDefault();
  var dx = e.clientX - this._cursor[0];
  var dy = e.clientY - this._cursor[1];
  this._cursor[0] = e.clientX;
  this._cursor[1] = e.clientY;
  console.log(e);

  switch (this._mode) {
    case "drag":
      if (!this._ghost) {
        this._port.style.cursor = "move";

        this._buildGhost(dx, dy);
      }

      this._moveGhost(dx, dy);

      var state = this._computeDragState();

      this._visualizeDragState(state);

      break;

    case "pan":
      MM.App.map.moveBy(dx, dy);
      break;
  }
};

MM.Mouse._endDrag = function () {
  this._port.style.cursor = "";

  this._port.removeEventListener("mousemove", this);

  this._port.removeEventListener("mouseup", this);

  if (this._mode == "pan") {
    return;
  }
  /* no cleanup after panning */


  if (this._ghost) {
    var state = this._computeDragState();

    this._finishDragDrop(state);

    this._ghost.parentNode.removeChild(this._ghost);

    this._ghost = null;
  }

  this._item = null;
};

MM.Mouse._buildGhost = function () {
  var content = this._item.getDOM().content;

  this._ghost = content.cloneNode(true);

  this._ghost.classList.add("ghost");

  this._pos[0] = content.offsetLeft;
  this._pos[1] = content.offsetTop;
  content.parentNode.appendChild(this._ghost);
};

MM.Mouse._moveGhost = function (dx, dy) {
  this._pos[0] += dx;
  this._pos[1] += dy;
  this._ghost.style.left = this._pos[0] + "px";
  this._ghost.style.top = this._pos[1] + "px";

  var state = this._computeDragState();
};

MM.Mouse._finishDragDrop = function (state) {
  this._visualizeDragState(null);

  var target = state.item;

  switch (state.result) {
    case "append":
      var action = new MM.Action.MoveItem(this._item, target);
      break;

    case "sibling":
      var index = target.getParent().getChildren().indexOf(target);
      var targetIndex = index + (state.direction == "right" || state.direction == "bottom" ? 1 : 0);
      var action = new MM.Action.MoveItem(this._item, target.getParent(), targetIndex, target.getSide());
      break;

    default:
      return;
      break;
  }

  MM.App.action(action);
};
/**
 * Compute a state object for a drag: current result (""/"append"/"sibling"), parent/sibling, direction
 */


MM.Mouse._computeDragState = function () {
  var rect = this._ghost.getBoundingClientRect();

  var closest = MM.App.map.getClosestItem(rect.left + rect.width / 2, rect.top + rect.height / 2);
  var target = closest.item;
  var state = {
    result: "",
    item: target,
    direction: ""
  };
  var tmp = target;

  while (!tmp.isRoot()) {
    if (tmp == this._item) {
      return state;
    }
    /* drop on a child or self */


    tmp = tmp.getParent();
  }

  var w1 = this._item.getDOM().content.offsetWidth;

  var w2 = target.getDOM().content.offsetWidth;
  var w = Math.max(w1, w2);

  var h1 = this._item.getDOM().content.offsetHeight;

  var h2 = target.getDOM().content.offsetHeight;
  var h = Math.max(h1, h2);

  if (target.isRoot()) {
    /* append here */
    state.result = "append";
  } else if (Math.abs(closest.dx) < w && Math.abs(closest.dy) < h) {
    /* append here */
    state.result = "append";
  } else {
    state.result = "sibling";
    var childDirection = target.getParent().getLayout().getChildDirection(target);
    var diff = -1 * (childDirection == "top" || childDirection == "bottom" ? closest.dx : closest.dy);

    if (childDirection == "left" || childDirection == "right") {
      state.direction = closest.dy < 0 ? "bottom" : "top";
    } else {
      state.direction = closest.dx < 0 ? "right" : "left";
    }
  }

  return state;
};

MM.Mouse._visualizeDragState = function (state) {
  if (this._oldState && state && this._oldState.item == state.item && this._oldState.result == state.result) {
    return;
  }
  /* nothing changed */


  if (this._oldDragState) {
    /* remove old vis */
    var item = this._oldDragState.item;
    var node = item.getDOM().content;
    node.style.boxShadow = "";
  }

  this._oldDragState = state;

  if (state) {
    /* show new vis */
    var item = state.item;
    var node = item.getDOM().content;
    var x = 0;
    var y = 0;
    var offset = 5;

    if (state.result == "sibling") {
      if (state.direction == "left") {
        x = -1;
      }

      if (state.direction == "right") {
        x = +1;
      }

      if (state.direction == "top") {
        y = -1;
      }

      if (state.direction == "bottom") {
        y = +1;
      }
    }

    var spread = x || y ? -2 : 2;
    node.style.boxShadow = x * offset + "px " + y * offset + "px 2px " + spread + "px #000";
  }
};

/* harmony default export */ __webpack_exports__["default"] = (MM.Mouse);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @namespace
 */
MM.App = {
  options: {
    headTitle: " - 脑图",
    colors: ['#fec936', '#f88b15', '#fe7e4d', '#ec6d7a', '#ef3224', '#9bc039', '#67c97e', '#00a7cd', '#40b5c6', '#2da4ff', '#956fe7', '#882e99', '#FF84BA']
  },
  keyboard: null,
  current: null,
  editing: false,
  zoomRatio: 0.2,
  //每次缩放递进比例
  scale: 1,
  //原始比例
  history: [],
  historyIndex: 0,
  portSize: [0, 0],
  map: null,
  ui: null,
  io: null,
  help: null,
  _port: null,
  _throbber: null,
  _drag: {
    pos: [0, 0],
    item: null,
    ghost: null
  },
  _fontSize: 100,
  destroy: function destroy() {
    this._port.innerHTML = null;
    this.map = null;
    this.current = null;
    this.scale = null;
    this.history = [];
    this._drag = {
      pos: [0, 0],
      item: null,
      ghost: null
    };
    MM.clear();
  },
  action: function action(_action) {
    if (this.historyIndex < this.history.length) {
      /* remove undoed actions */
      this.history.splice(this.historyIndex, this.history.length - this.historyIndex);
    }

    this.history.push(_action);
    this.historyIndex++;

    _action.perform();

    return this;
  },
  setMap: function setMap(map) {
    if (this.map) {
      this.map.hide();
    }

    this.history = [];
    this.historyIndex = 0;
    this.map = map;
    this.map.show(this._port);
  },
  select: function select(item) {
    if (this.current && this.current != item) {
      this.current.deselect();
    }

    this.current = item;
    this.current.select();
  },
  adjustFontSize: function adjustFontSize(diff) {
    this._fontSize = Math.max(30, this._fontSize + 10 * diff);
    this._port.style.fontSize = this._fontSize + "%";
    this.map.update();
    this.map.ensureItemVisibility(this.current);
  },
  zoom: function zoom(val) {
    val = val * this.zoomRatio;
    this.scale = this.scale * val;
    var node = this.map.getRoot().getDOM().node;
    node.style.transform = "scale(".concat(this.scale, ")");
  },
  handleEvent: function handleEvent(e) {
    switch (e.type) {
      case "resize":
        this._syncPort();

        break;

      case "click":
        break;

      case "beforeunload":
        e.preventDefault();
        return "";
        break;
    }
  },
  setThrobber: function setThrobber(visible) {
    this._throbber.classList[visible ? "add" : "remove"]("visible");
  },
  initMenu: function initMenu() {
    var _menu = document.createElement("div");

    _menu.className = "menu";
    _menu.innerHTML = "\n\t\t\t<button data-command=\"InsertChild\">\u63D2\u5165\u8282\u70B9</button>\n\t\t\t<button data-command=\"InsertSibling\">\u63D2\u5165\u540C\u7EA7</button>\n\t\t\t<button data-command=\"Delete\">\u5220\u9664</button>\n\t\t\t<button data-command=\"DeleteIcon\" style=\"display:none\">\u5220\u9664\u56FE\u6807</button>\n\t\t\t<span></span>\n\t\t\t<button data-command=\"Edit\">\u7F16\u8F91</button>\n\t\t\t<span></span>\n\t\t\t<button data-command=\"Undo\">\u64A4\u9500</button>\n\t\t\t<button data-command=\"Redo\">\u91CD\u7F6E</button>\n\t\t\t<button data-command=\"Center\">\u8C03\u6574\u5E03\u5C40</button>\n\t\t";

    this._port.appendChild(_menu);

    return _menu;
  },
  init: function init(dom) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this._port = dom;
    this._port.className += " re-mind";
    Object.assign(this.options, options);
    this._menu = options.menu || this.initMenu();
    MM.Keyboard.init();
    MM.Menu.init(this._port);
    MM.Mouse.init(this._port);
    MM.Clipboard.init();
    window.addEventListener("resize", this);
    window.addEventListener("click", this);
    window.addEventListener("beforeunload", this);
    MM.subscribe("ui-change", this._syncPort);
    MM.subscribe("item-change", function (publisher) {
      if (publisher.isRoot() && publisher.getMap() == _this.map) {
        document.title = _this.map.getName() + _this.options.headTitle;
      }
    });

    this._syncPort();

    this.setMap(new MM.Map(options || {}));
    this.note = new MM.Note(this);
    return this;
  },
  _syncPort: function _syncPort() {
    this.portSize = [this._port.clientWidth, this._port.clientHeight];

    if (this.map) {
      this.map.ensureItemVisibility(this.current);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (MM.App);

/***/ })
/******/ ])["default"];
});