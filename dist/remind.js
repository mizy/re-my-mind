(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Remind"] = factory();
	else
		root["Remind"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 739:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".re-mind.stright {\n  background-color: #f4f9fa;\n}\n.re-mind.stright .shape-ellipse > .content {\n  border-radius: 10px;\n  background-color: #ff383e;\n  border: 3px solid #ff8d8f;\n  padding: 20px;\n}\n.re-mind.stright .shape-ellipse > .content .text {\n  font-size: 28px;\n}\n.re-mind.box {\n  background-color: #1f2934;\n}\n.re-mind.box > .item > .content {\n  background-color: #1f2934;\n  border: 3px solid #20a5a1;\n  font-size: 48px;\n  padding: 20px;\n  color: #20a5a1;\n}\n.re-mind.box > .item > .content .text {\n  color: #20a5a1;\n  font-size: 28px;\n}\n.re-mind.box > .item > .children > .shape-box > .content {\n  background-color: #20a5a1;\n  color: #000;\n  padding: 10px 20px;\n  border-radius: 10px;\n}\n.re-mind.box > .item > .children > .shape-box > .children .shape-box > .content {\n  background-color: transparent;\n  border: none;\n  color: #20a5a1;\n  padding: 5px;\n  font-size: 22px;\n}\n.remind {\n  overflow: scroll;\n  width: 100%;\n  height: 100%;\n}\n.remind * {\n  box-sizing: border-box;\n}\n.remind ul,\n.remind li {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.remind ul li,\n.remind li li {\n  list-style: none;\n}\n.remind .remind-scroll {\n  position: relative;\n}\n.remind .remind-scroll .remind-page {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.remind .remind-scroll .remind-page .remind-canvas {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.remind .remind-scroll .remind-page .remind-selection {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  display: none;\n  transition: all 100ms ease-out;\n  pointer-events: none;\n}\n.remind .remind-scroll .remind-page .remind-selection:after {\n  transition: all 100ms ease-out;\n  content: ' ';\n  display: block;\n  width: calc(100% + 6px);\n  height: calc(100% + 6px);\n  position: absolute;\n  left: -5px;\n  top: -5px;\n  border: 2px solid blue;\n}\n.remind .remind-scroll .remind-page .remind-item {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 4px 10px;\n  color: #123;\n  border-radius: 3px;\n  cursor: pointer;\n  user-select: none;\n}\n.remind .remind-scroll .remind-page .remind-item::before {\n  content: ' ';\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: -4px;\n  left: -4px;\n  padding: 2px;\n  display: none;\n  box-sizing: content-box;\n}\n.remind .remind-scroll .remind-page .remind-item .item-text {\n  display: inline-block;\n  border: none;\n  outline: none;\n  white-space: nowrap;\n}\n.remind .remind-scroll .remind-page .remind-item .item-icon {\n  z-index: 1;\n  display: inline-block;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-toggle {\n  position: absolute;\n  right: -15px;\n  top: calc(50% - 6px);\n  display: none;\n  cursor: pointer;\n  padding-left: 4px;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-toggle > div {\n  width: 12px;\n  height: 12px;\n  border: 1px solid #4a90e2;\n  border-radius: 6px;\n  text-align: center;\n  display: inline-block;\n  background: #fff;\n  color: black;\n  font-size: 12px;\n  line-height: 8px;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-toggle > .toggle-off {\n  display: block;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-toggle > .toggle-on {\n  display: none;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-toggle:hover {\n  display: block;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-toggle.toggled {\n  display: block;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-toggle.toggled > .toggle-off {\n  display: none;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-toggle.toggled > .toggle-on {\n  display: block;\n}\n.remind .remind-scroll .remind-page .remind-item:hover .remind-toggle {\n  display: block;\n}\n.remind .remind-scroll .remind-page .remind-item:hover::before {\n  border: 2px solid #779ecc;\n  display: block;\n}\n.remind .remind-scroll .remind-page .remind-item.active .remind-toggle {\n  display: block;\n}\n.remind .remind-scroll .remind-page .remind-item.active::before {\n  border: 2px solid #0775f3;\n  display: block;\n}\n.remind .remind-scroll .remind-page .shape-box {\n  background-color: #4a90e2;\n  color: #fff;\n}\n.remind .remind-scroll .remind-page .shape-underline {\n  padding: 4px 5px;\n}\n.remind .remind-scroll .remind-page .shape-ellipse {\n  padding: 10px 10px;\n  color: #fff;\n  background-color: #39ac03;\n}\n.remind .remind-scroll .remind-page .mm-note {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 80px;\n  left: 0px;\n  z-index: 2;\n  background: #fff;\n  transition: opacity, height 300ms ease-in;\n  overflow: hidden;\n  width: 300px;\n  border: 1px solid #efefef;\n  border-radius: 3px;\n  box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.2);\n}\n.remind .remind-scroll .remind-page .mm-note .note-util {\n  height: 30px;\n  width: 100%;\n  border-bottom: 1px solid #efefef;\n  padding-left: 10px;\n  padding-top: 4px;\n}\n.remind .remind-scroll .remind-page .mm-note .note-content {\n  height: 300px;\n  width: 100%;\n  overflow: scroll;\n}\n.remind .remind-scroll .remind-page .mm-note .note-content p {\n  white-space: pre-line;\n  padding: 10px;\n  outline: none;\n  height: 300px;\n  width: 100%;\n}\n.remind .remind-scroll .remind-page .mm-note.hide {\n  height: 0;\n  opacity: 0;\n}\n.remind .remind-scroll .remind-page .menu {\n  outline: none;\n  margin: 0;\n  padding: 5px 0;\n  list-style: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 2;\n  background: #fff;\n  -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  width: 200px;\n}\n.remind .remind-scroll .remind-page .menu > button {\n  height: 32px;\n  line-height: 32px;\n  padding: 0 20px;\n  color: #666;\n  font-size: 13px;\n  font-weight: 400;\n  cursor: pointer;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  white-space: nowrap;\n  display: block;\n  background-color: transparent;\n  border: none;\n  margin: 0;\n  width: 100%;\n  text-align: left;\n}\n.remind .remind-scroll .remind-page .menu > button:hover {\n  background: #efefef;\n}\n.remind .remind-scroll .remind-page .menu span {\n  display: block;\n  border-top: 1px solid #eee;\n  margin-top: 4px;\n  padding-top: 4px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 379:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ app)
});

// NAMESPACE OBJECT: ./src/Layout/Lines/common.js
var common_namespaceObject = {};
__webpack_require__.r(common_namespaceObject);
__webpack_require__.d(common_namespaceObject, {
  "renderArrow": () => (renderArrow),
  "renderUnderline": () => (renderUnderline)
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function classCallCheck_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function createClass_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function defineProperty_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
;// CONCATENATED MODULE: ./src/Control/Commands/index.js
var getAllCommands = function getAllCommands(remind) {
  var _isValid = function isValid() {
    // if (MM.App.note.status === "show") {
    //     return false;
    // }
    if (!remind.page.current) {
      return false;
    }

    if (remind.page.editing) {
      return false;
    } // if (this.editMode === null) {
    //     return true;
    // }
    // if (this.editMode && MM.App.editing) {
    //     return true;
    // }


    return true;
  };

  return [{
    name: "InsertSibling",
    keys: [{
      keyCode: 13
    }],
    prevent: true,
    isValid: function isValid() {
      return _isValid() && !remind.options.readonly;
    },
    execute: function execute() {
      var item = remind.page.current;

      if (item.isRoot()) {
        this.remind.action.execute('InsertNewItem', item, item.getChildren().length);
      } else {
        var parent = item.getParent();
        var index = parent.getChildren().indexOf(item);
        remind.action.InsertNewItem(parent, index + 1);
      }

      if (remind.options.autoEdit && !action._item._data.disableEdit) {
        Command.Edit.execute();
      }
    }
  }, {
    name: 'InsertChild',
    isValid: _isValid,
    prevent: true,
    keys: [{
      keyCode: 9,
      ctrlKey: false
    }, {
      keyCode: 45
    }],
    execute: function execute() {
      var item = remind.page.current;
      var action = remind.action.execute('InsertNewItem', item, item.children.length);

      if (remind.options.autoEdit && !action._item.data.disableEdit) {
        remind.command.execute("Edit");
      }
    }
  }, {
    name: "Edit",
    keys: [{
      keyCode: 32
    }, {
      keyCode: 113
    }],
    execute: function execute() {
      if (remind.page.current) {
        var range = document.createRange();
        range.selectNodeContents(remind.page.current.textDOM);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        remind.page.current.startEdit();
      }
    }
  }, {
    name: "Finish",
    keys: [{
      keyCode: 13,
      altKey: false,
      ctrlKey: false,
      shiftKey: false
    }],
    execute: function execute() {
      var item = remind.page.current;
      item.stopEdit();

      if (!item.data.text) {
        remind.action.execute('RemoveItem', item);
        remind.fire("item-change", item);
      }

      if (item.data.text === item.oldText) {
        return;
      }

      remind.action.execute('SetText', item, item.data.text, item.oldText);
      remind.fire("item-change", item);
    }
  }, {
    name: "Delete",
    keys: [{
      keyCode: 46
    }, {
      keyCode: 8
    }],
    isValid: function isValid() {
      return _isValid() && !remind.page.current.isRoot();
    },
    execute: function execute() {
      var item = remind.page.current;
      remind.action.execute('RemoveItem', item);
    }
  }];
};

/* harmony default export */ const Control_Commands = (getAllCommands);
;// CONCATENATED MODULE: ./src/Control/Command.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/**
 * @class
 */

var Command_Command = /*#__PURE__*/function () {
  function Command(remind) {
    classCallCheck_classCallCheck(this, Command);

    this.remind = remind;
    var commandMap = new Map();
    var Commands = Control_Commands(remind);
    Commands.forEach(function (item) {
      var command = _objectSpread({
        isValid: function isValid() {
          return true;
        }
      }, item); // copy，避免多个引用的remind冲突


      commandMap.set(item.name, command);
    });
    this.commandMap = commandMap;
  }

  createClass_createClass(Command, [{
    key: "execute",
    value: function execute(name) {
      var command = this.commandMap.get(name);

      for (var _len = arguments.length, argus = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        argus[_key - 1] = arguments[_key];
      }

      command.execute.apply(command, argus);
    }
  }]);

  return Command;
}();

/* harmony default export */ const Control_Command = (Command_Command);
;// CONCATENATED MODULE: ./src/Control/Keyboard.js


/**
 * @class
 */
var Keyboard = function Keyboard(remind) {
  var _this = this;

  classCallCheck_classCallCheck(this, Keyboard);

  this.init = function () {
    window.addEventListener("keydown", this.onKeyDown);
    window.addEventListener("keypress", this.onKeyDown);
  };

  this.destroy = function () {
    window.removeEventListener("keydown", _this.onKeyDown);
    window.removeEventListener("keypress", _this.onKeyDown);
  };

  this.onKeyDown = function (e) {
    if (["TEXTAREA", "INPUT"].indexOf(document.activeElement.tagName) > -1 && document.activeElement.className !== "remind-clip") {
      return;
    } //只读模式


    if (_this.remind.options.readonly) {
      return;
    }

    var commandMap = _this.remind.command.commandMap;
    commandMap.forEach(function (command) {
      if (!command || !command.isValid()) {
        return;
      }

      var keys = command.keys;

      for (var j = 0; j < keys.length; j++) {
        if (_this.checkKey(keys[j], e)) {
          command.prevent && e.preventDefault();
          command.execute(e);
          return;
        }
      }
    });
  };

  this.checkKey = function (key, e) {
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

  this.remind = remind;
  this.init();
};

/* harmony default export */ const Control_Keyboard = (Keyboard);
;// CONCATENATED MODULE: ./src/View/Nodes/Nodes.js
var _this = undefined;

/* harmony default export */ const Nodes = ({
  nodes: {
    "default": function _default(item, container) {
      var data = item.data; // 生成icon

      var iconDOM = document.createElement('ul');
      iconDOM.className = 'item-icon';
      var icon = data.icon;
      var iconList = '';

      for (var key in icon) {
        if (icon[key]) iconList += "<li class=\"".concat(icon[key], "\" data-key=\"").concat(key, "\"></li>");
      }

      iconDOM.innerHTML = iconList;
      item.iconDOM = iconDOM;
      container.appendChild(iconDOM); // 生成text

      var text = document.createElement('div');
      text.className = 'item-text';
      text.innerHTML = data.text === undefined ? '' : data.text;
      item.textDOM = text;
      container.appendChild(text); // 生成note

      var note = document.createElement('div');
      note.className = 'item-note';
      note.innerHTML = data.note;
      item.noteDOM = note;
      note.style.display = data.note ? 'inline-block' : 'none';
      container.appendChild(note);
    },
    flowNode: function flowNode(item, container) {
      var data = item.data; // 生成icon

      var iconDOM = document.createElement('ul');
      iconDOM.className = 'item-icon';
      var icon = data.icon;
      var iconList = '';

      for (var key in icon) {
        if (icon[key]) iconList += "<li class=\"".concat(icon[key], "\" data-key=\"").concat(key, "\"></li>");
      }

      iconDOM.innerHTML = iconList;
      item.iconDOM = iconDOM;
      container.appendChild(iconDOM); // 生成text

      var text = document.createElement('div');
      text.className = 'item-text';
      text.innerHTML = data.text === undefined ? '' : data.text;
      item.textDOM = text;
      container.appendChild(text); // 生成note

      var note = document.createElement('div');
      note.className = 'item-note';
      note.innerHTML = data.note;
      item.noteDOM = note;
      note.style.display = data.note ? 'inline-block' : 'none';
      container.appendChild(note);
    }
  },
  registerNode: function registerNode(type, func) {
    _this.nodes[type] = func;
  }
});
;// CONCATENATED MODULE: ./src/View/Item.js





var Item = /*#__PURE__*/function () {
  // 当前节点作为整体时在父容器rect时的相对位置
  // 当前节点在 当前节点的rect中的位置
  // 节点及子元素rect 的全局偏移
  // 节点当前全局坐标
  // 当前节点及下游所有节点的rect
  // 当前节点内容dom的rect
  function Item(page) {
    var _this = this;

    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    classCallCheck_classCallCheck(this, Item);

    this.children = [];
    this.position = {
      x: 0,
      y: 0
    };
    this.relativePos = {
      x: 0,
      y: 0
    };
    this.originPos = {
      // 坐标原点的偏移量
      x: 0,
      y: 0
    };
    this.globalPos = {
      x: 0,
      y: 0
    };
    this.x = 0;
    this.y = 0;
    this.rect = undefined;
    this.contentRect = undefined;

    this.onDoubleClick = function () {
      _this.remind.command.execute("Edit");
    };

    this.onClick = function (event) {
      event.preventDefault();
      event.stopPropagation();

      _this.page.select(_this);
    };

    this.onToggleClick = function () {
      _this.data.shrink = !_this.data.shrink;

      _this.updateToggle();

      _this.page.rememberPosition(_this);

      if (!_this.data.shrink) {
        _this.updateVisible(_this.children, true);

        _this.update();
      } else {
        _this.updateVisible(_this.children, false);

        _this.update();
      }
    };

    this.startEdit = function () {
      _this.oldText = _this.data.text || '';
      var textDOM = _this.textDOM,
          dom = _this.dom;
      textDOM.contentEditable = true;
      textDOM.focus();

      if (!_this.isVisible()) {
        _this.center();
      }

      _this.page.editing = true;
      dom.style.zIndex = 1000; //不会被盖住 
    };

    this.stopEdit = function () {
      _this.page.editing = false;
      var textDOM = _this.textDOM,
          dom = _this.dom;
      textDOM.contentEditable = false;
      dom.style.zIndex = 0; //不会被盖住 

      _this.data.text = textDOM.innerHTML;
      textDOM.blur();
    };

    this.onKeyDown = function (e) {
      if (e.keyCode == 9) {
        //tab
        e.preventDefault();
      }
    };

    this.onBlur = function () {
      _this.remind.command.execute("Finish");
    };

    var depth = option.depth,
        _option$data = option.data,
        data = _option$data === void 0 ? {} : _option$data,
        _option$visible = option.visible,
        visible = _option$visible === void 0 ? true : _option$visible;
    this.page = page;
    this.depth = depth;
    this.remind = page.remind;
    this.visible = visible;

    if (data) {
      this.setData(data);
    }
  }

  createClass_createClass(Item, [{
    key: "setData",
    value: function setData(data) {
      this.clear();
      this.data = data;
      this.dom = this.initDOM();
      this.updateShape();
      this.initToggle();
      this.addEvents();
      this.updateToggle(); // this.updateContent();//更新rect

      if (this.data.layout) {
        this.layout = this.page.layout[this.data.layout];
      }

      this.initChildren();
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.data;
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      this.dom.addEventListener("click", this.onClick);
      this.dom.addEventListener("dblclick", this.onDoubleClick);
      this.textDOM.addEventListener("keydown", this.onKeyDown);
      this.textDOM.addEventListener("blur", this.onBlur);
    }
  }, {
    key: "initChildren",
    value: function initChildren() {
      var _this2 = this;

      var _this$data = this.data,
          _this$data$children = _this$data.children,
          children = _this$data$children === void 0 ? [] : _this$data$children,
          shrink = _this$data.shrink;
      children.forEach(function (child) {
        var childItem = new Item(_this2.page, {
          data: child,
          depth: _this2.depth + 1,
          visible: !shrink && _this2.visible
        });

        _this2.insertChild(childItem, undefined, false);
      });
    }
  }, {
    key: "initDOM",
    value: function initDOM() {
      var dom = document.createElement('div');
      this.page.dom.appendChild(dom);
      var _this$data$type = this.data.type,
          type = _this$data$type === void 0 ? 'default' : _this$data$type;

      try {
        Nodes.nodes[type](this, dom);
      } catch (e) {
        console.warn("解析节点错误，请检查节点类型是否注册");
        throw e;
      }

      return dom;
    }
  }, {
    key: "initToggle",
    value: function initToggle() {
      var div = document.createElement('div');
      div.innerHTML = "\n            <div class=\"toggle-on\">+</div>\n            <div class=\"toggle-off\">-</div>\n        ";
      div.className = 'remind-toggle';
      this.toggleDOM = div;
      this.toggleDOM.addEventListener('click', this.onToggleClick);

      if (this.data.shrink) {
        this.dom.appendChild(this.toggleDOM);
      }
    }
  }, {
    key: "updateVisible",
    value: function updateVisible() {
      var _this3 = this;

      var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var visible = arguments.length > 1 ? arguments[1] : undefined;
      children.forEach(function (child) {
        child.visible = visible;

        if (!child.data.shrink) {
          _this3.updateVisible(child.children, visible);
        }
      });
    }
  }, {
    key: "updateToggle",
    value: function updateToggle() {
      var _this$data$shrink = this.data.shrink,
          shrink = _this$data$shrink === void 0 ? false : _this$data$shrink;

      if (shrink) {
        this.toggleDOM.classList.add('toggled');
      } else {
        this.toggleDOM.classList.remove('toggled');
      }
    }
  }, {
    key: "expand",
    value: function expand() {
      if (this.data.shrink) {
        this.onToggleClick();
      }
    }
    /**
    * 更新样式
    */

  }, {
    key: "updateStyle",
    value: function updateStyle() {}
    /**
     * 更新下属和自己节点的布局信息
     */

  }, {
    key: "updateSubtree",
    value: function updateSubtree() {
      this.children.forEach(function (item) {
        item.updateSubtree();
      });
      this.updateContent();
      this.update(false);
    } // bfs 更新依赖树结构的相关数据和样式

  }, {
    key: "update",
    value: function update() {
      var recurse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!this.contentRect) this.updateContent(); // 避免编辑新增节点初始化时没有contentRect

      this.updateShape();
      this.updateLayout();
      this.updateColor();

      if (recurse) {
        this.parent.update(recurse);
      }
    }
  }, {
    key: "updateShape",
    value: function updateShape() {
      this.dom.className = 'remind-item shape-' + this.getShape();
    }
  }, {
    key: "updateLayout",
    value: function updateLayout() {
      this.getLayout().update(this);
    }
  }, {
    key: "updateContent",
    value: function updateContent() {
      var rect = this.dom.getBoundingClientRect(); // 本体节点rect

      this.contentRect = rect;
    }
  }, {
    key: "updateLine",
    value: function updateLine() {
      this.getLayout().updateLine(this);
    } // dfs

  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      this.updatePosition();
      this.dom.style.display = this.visible ? 'block' : 'none';

      if (this.side === 'left') {
        this.dom.style.right = this.page.root.rect.width - this.x - this.contentRect.width + 'px';
        this.dom.style.left = 'auto';
        this.dom.style.transform = "matrix(1, 0, 0, 1, 0,".concat(this.y, ")");
      } else {
        this.dom.style.left = '0px';
        this.dom.style.transform = "matrix(1, 0, 0, 1, ".concat(this.x, ",").concat(this.y, ")");
      }

      this.children.forEach(function (child) {
        child.globalPos = {
          x: _this4.globalPos.x + _this4.originPos.x + child.position.x,
          y: _this4.globalPos.y + _this4.originPos.y + child.position.y
        };
        child.render();
      });

      if (this.visible) {
        this.updateLine();
      }
    }
  }, {
    key: "updatePosition",
    value: function updatePosition() {
      var globalPos = this.globalPos;
      this.x = globalPos.x + this.relativePos.x + this.originPos.x;
      this.y = globalPos.y + this.relativePos.y + this.originPos.y;
    }
  }, {
    key: "getLayout",
    value: function getLayout() {
      var layout = this.layout || this.parent.getLayout();

      if (layout.name === 'map' && layout.direction === 'auto' && !this.isRoot()) {
        // 兼容一旦
        var index = this.parent.children.indexOf(this);

        if (index % 2 === 0) {
          return this.page.layout['map-right'];
        } else {
          return this.page.layout['map-left'];
        }
      }

      return layout;
    }
  }, {
    key: "getAutoShape",
    value: function getAutoShape() {
      if (!this.depth) {
        this.depth;
      }

      var theme = this.remind.theme;

      switch (this.depth) {
        case 0:
          return theme.main;

        case 1:
          return theme.second;

        default:
          return theme.node;
      }
    }
  }, {
    key: "getShape",
    value: function getShape() {
      return this.data.shape || this.getAutoShape();
    }
  }, {
    key: "getLineShape",
    value: function getLineShape() {
      var theme = this.remind.theme;
      return this.data.lineShape || theme.lineShape || "bezier";
    }
  }, {
    key: "getColor",
    value: function getColor() {
      return this.data.color ? this.data.color : this.parent.getColor();
    }
  }, {
    key: "updateColor",
    value: function updateColor() {// this.toggleDOM.style.color = color;
      // this.toggleDOM.style.backgroundColor = color;
    }
  }, {
    key: "isVisible",
    value: function isVisible() {
      var x = this.x,
          y = this.y;
      var _this$page = this.page,
          remindRect = _this$page.remindRect,
          pageX = _this$page.x,
          pageY = _this$page.y;
      var _this$remind$remindDO = this.remind.remindDOM,
          scrollLeft = _this$remind$remindDO.scrollLeft,
          scrollTop = _this$remind$remindDO.scrollTop;
      var globalX = x + pageX + this.contentRect.width / 2;
      var globalY = y + pageY + this.contentRect.height / 2;
      var right = scrollLeft + remindRect.width;
      var bottom = scrollTop + remindRect.height;

      if (globalX < right && globalX > scrollLeft && globalY > scrollTop && globalY < bottom) {
        return true;
      }

      return false;
    }
  }, {
    key: "setText",
    value: function setText(text) {
      this.data.text = text;
      this.updateContent();
      this.update();
    }
  }, {
    key: "center",
    value: function center() {
      var _this$page2 = this.page,
          scrollLeft = _this$page2.scrollLeft,
          scrollTop = _this$page2.scrollTop,
          remindRect = _this$page2.remindRect;
      this.page.translate(scrollLeft + remindRect.width / 2 - this.x, scrollTop + remindRect.height / 2 - this.y);
      this.remind.remindDOM.scrollLeft = scrollLeft;
      this.remind.remindDOM.scrollTop = scrollTop;
    }
  }, {
    key: "insertChild",
    value: function insertChild(child, index) {
      var ifUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (child.parent) {
        child.parent.removeChild(child);
      }

      if (index) {
        this.children.splice(index, 0, child);
      } else {
        this.children.push(child);
      } // 挂载父元素到子元素上


      child.depth = this.depth + 1;
      child.parent = this;
      this.dom.appendChild(this.toggleDOM);

      if (ifUpdate) {
        child.update();
      }

      return child;
    }
  }, {
    key: "removeChild",
    value: function removeChild(child) {
      var ifUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var index = this.children.indexOf(child);
      child.depth = 0;
      child.parent = undefined;
      this.children.splice(index, 1);

      if (this.children.length < 1) {
        this.dom.removeChild(this.toggleDOM);
      }

      if (ifUpdate) {
        this.update();
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.clearChildren();
      this.clearEvents();

      if (this.dom) {
        this.page.dom.removeChild(this.dom, false);
        this.dom = undefined;
      }
    }
  }, {
    key: "clearEvents",
    value: function clearEvents() {
      if (this.dom) {
        this.dom.removeEventListener("click", this.onClick);
        this.dom.removeEventListener("dblclick", this.onDoubleClick);
        this.textDOM.removeEventListener("keydown", this.onKeyDown);
        this.textDOM.removeEventListener("blur", this.onBlur);
      }
    }
  }, {
    key: "clearChildren",
    value: function clearChildren() {
      var _this5 = this;

      this.children.forEach(function (item) {
        _this5.removeChild(item, false);

        item.destroy();
      });
      this.children = [];
    }
  }, {
    key: "isRoot",
    value: function isRoot() {
      return this.parent instanceof Model_Page;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.parent) {
        this.parent.removeChild(this, false);
      }

      this.dom.parentElement && this.dom.parentElement.removeChild(this.dom);
      this.clearChildren();
    }
  }]);

  return Item;
}();

/* harmony default export */ const View_Item = (Item);
;// CONCATENATED MODULE: ./src/Layout/Lines/map/bezier.js


function bezier_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function bezier_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { bezier_ownKeys(Object(source), true).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { bezier_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function bezier(item) {
  var _this = this;

  var spaceX = this.remind.options.spaceX;
  var isUnderLine = item.getShape().indexOf('underline') > -1;
  var startPos = {
    x: item.x + item.contentRect.width,
    y: item.y + item.contentRect.height / 2
  }; // 下划线的话给自己底部加上颜色

  if (isUnderLine) {
    this.page.lines.push(this.line.common.renderUnderline.call(this, item, startPos));
  }

  if (item.data.shrink || !item.children.length) {
    return item;
  }

  item.rightChildren.forEach(function (child) {
    var x,
        y,
        start = startPos;
    var shape = child.getShape();
    x = child.x;
    var isUnderLine = shape.indexOf('underline') > -1; // 下划线情况，终点坐标要不太一样

    if (isUnderLine) {
      y = child.y + child.contentRect.height;
    } else {
      y = child.y + child.contentRect.height / 2;
    }

    var bezierPos = {
      x1: (start.x + x) * 0.5,
      y1: start.y,
      x2: (start.x + x) * 0.5,
      y2: y
    };
    var data = {
      path: [],
      color: child.getColor()
    };
    data.path.push({
      x: start.x,
      y: start.y,
      type: "moveTo"
    });
    data.path.push(bezier_objectSpread(bezier_objectSpread({}, bezierPos), {}, {
      x: x,
      y: y,
      type: "bezier3"
    }));

    _this.page.lines.push(data);
  });
  var leftStartPos = {
    x: item.x,
    y: startPos.y
  };
  item.leftChildren.forEach(function (child) {
    var x,
        y,
        start = leftStartPos;
    var shape = child.getShape();
    x = child.x + child.contentRect.width;
    var isUnderLine = shape.indexOf('underline') > -1; // 下划线情况，终点坐标要不太一样

    if (isUnderLine) {
      y = child.y + child.contentRect.height;
    } else {
      y = child.y + child.contentRect.height / 2;
    }

    var bezierPos = {
      x1: (start.x + x) * 0.5,
      y1: start.y,
      x2: (start.x + x) * 0.5,
      y2: y
    };
    var data = {
      path: [],
      color: child.getColor()
    };
    data.path.push({
      x: start.x,
      y: start.y,
      type: "moveTo"
    });
    data.path.push(bezier_objectSpread(bezier_objectSpread({}, bezierPos), {}, {
      x: x,
      y: y,
      type: "bezier3"
    }));

    _this.page.lines.push(data);
  });
} // 不得使用箭头函数


/* harmony default export */ const map_bezier = (bezier);
;// CONCATENATED MODULE: ./src/Layout/Lines/common.js


function common_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function common_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { common_ownKeys(Object(source), true).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { common_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function renderUnderline(item, startPos) {
  startPos.x = item.x + item.contentRect.width;
  startPos.y = item.y + item.contentRect.height;
  var path = [];
  path.push({
    x: item.x,
    y: item.y + item.contentRect.height,
    type: "moveTo"
  });
  path.push({
    x: startPos.x,
    y: startPos.y
  });
  var color = item.getColor();
  return {
    path: path,
    color: color
  };
}

function renderArrow(middle, end) {
  var angle = Math.atan2(end.y - middle.y, end.x - middle.x);
  var topAngle = Math.PI * 5 / 6 + angle;
  var bottomAngle = -Math.PI * 5 / 6 + angle;
  var length = 5;
  var top = {
    x: end.x + length * Math.cos(topAngle),
    y: end.y - length * Math.sin(topAngle)
  };
  var bottom = {
    x: end.x + length * Math.cos(bottomAngle),
    y: end.y - length * Math.sin(bottomAngle)
  };
  return {
    path: [common_objectSpread(common_objectSpread({}, top), {}, {
      type: "moveTo"
    }), common_objectSpread({}, end), common_objectSpread({}, bottom)]
  };
}


;// CONCATENATED MODULE: ./src/Layout/Lines/map/polyline.js


function polyline_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function polyline_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { polyline_ownKeys(Object(source), true).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { polyline_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function polyline(item) {
  var _this = this;

  var spaceX = this.remind.options.spaceX;
  var isUnderLine = item.getShape().indexOf('underline') > -1;
  var color = item.getColor();
  var startPos = {
    x: item.x + item.contentRect.width / 2,
    y: item.y + item.contentRect.height / 2
  }; // 下划线的话给自己底部加上颜色

  var underlineData = {
    name: "underline",
    path: [],
    color: color
  };

  if (isUnderLine) {
    underlineData = this.line.common.renderUnderline.call(this, item, startPos);
    this.page.lines.push(underlineData);
  } // 收缩不绘制子元素


  if (item.data.shrink || item.children.length < 1) {
    return item;
  } // 绘制左右两边的链接中线


  var firstChild = item.rightChildren[0];

  if (firstChild) {
    var middle = {
      x: firstChild.x - spaceX / 2,
      y: startPos.y
    };
    var lineData = {
      path: [],
      color: color
    };
    lineData.path.push(polyline_objectSpread(polyline_objectSpread({}, startPos), {}, {
      type: "moveTo"
    }), middle);
    this.page.lines.push(lineData); // 绘制右边子节点的连接线

    item.rightChildren.forEach(function (child, index) {
      var x, y;
      var shape = child.getShape();
      x = child.x;
      var isUnderLine = shape.indexOf('underline') > -1; // 下划线情况，终点坐标要不太一样

      if (isUnderLine) {
        y = child.y + child.contentRect.height;
      } else {
        y = child.y + child.contentRect.height / 2;
      }

      var lineData = {
        path: [],
        name: 'connect',
        color: color
      };

      if (index === 0 || index === item.children.length - 1) {
        lineData.path.push(polyline_objectSpread(polyline_objectSpread({}, middle), {}, {
          type: 'moveTo'
        }), {
          x: middle.x,
          y: y
        });
      } else {
        lineData.path.push({
          type: "moveTo",
          x: middle.x,
          y: y
        });
      }

      lineData.path.push({
        x: x,
        y: y
      }); // 箭头

      if (_this.remind.options.showArrow) {
        var arrowData = _this.line.common.renderArrow.call(_this, {
          x: middle.x,
          y: y
        }, {
          x: x,
          y: y
        });

        arrowData.color = color;
        arrowData.name = 'arrow';

        _this.page.lines.push(arrowData);
      }

      _this.page.lines.push(lineData);
    });
  }

  firstChild = item.leftChildren[0];

  if (firstChild) {
    var _middle = {
      x: item.x - spaceX / 2,
      y: startPos.y
    };
    startPos.x = item.x;
    this.page.lines.push({
      path: [polyline_objectSpread(polyline_objectSpread({}, startPos), {}, {
        type: "moveTo"
      }), _middle],
      color: color
    }); // 绘制左边子节点的线

    item.leftChildren.forEach(function (child, index) {
      var x, y;
      var shape = child.getShape();
      x = child.x + child.contentRect.width;
      var isUnderLine = shape.indexOf('underline') > -1; // 下划线情况，终点坐标要不太一样

      if (isUnderLine) {
        y = child.y + child.contentRect.height;
      } else {
        y = child.y + child.contentRect.height / 2;
      }

      var lineData = {
        path: [],
        name: 'connect',
        color: color
      };

      if (index === 0 || index === item.children.length - 1) {
        lineData.path.push(polyline_objectSpread(polyline_objectSpread({}, _middle), {}, {
          type: 'moveTo'
        }), {
          x: _middle.x,
          y: y
        });
      } else {
        lineData.path.push({
          type: "moveTo",
          x: _middle.x,
          y: y
        });
      }

      lineData.path.push({
        x: x,
        y: y
      }); // 箭头

      if (_this.remind.options.showArrow) {
        var arrowData = _this.line.common.renderArrow.call(_this, {
          x: _middle.x,
          y: y
        }, {
          x: x,
          y: y
        });

        arrowData.color = lineData.color;
        arrowData.name = 'arrow';

        _this.page.lines.push(arrowData);
      }

      _this.page.lines.push(lineData);
    });
  }
} // 不得使用箭头函数


/* harmony default export */ const map_polyline = (polyline);
;// CONCATENATED MODULE: ./src/Layout/Lines/map/taper.js
function taper(item) {
  var _this = this;

  if (item.data.shrink || !item.children.length) {
    return item;
  }

  var itemPos = {
    x: item.x + item.contentRect.width * 0.5,
    y: item.y + item.contentRect.height * 0.5
  };
  var halfThick = this.LINE_THICKNESS / 2;
  item.rightChildren.forEach(function (child) {
    var x, y;
    var shape = child.getShape();
    x = child.x;
    var isUnderLine = shape.indexOf('underline') > -1; // 下划线情况，终点坐标要不太一样

    if (isUnderLine) {
      y = child.y + child.contentRect.height;
    } else {
      y = child.y + child.contentRect.height / 2;
    }

    var angle = Math.atan2(y - itemPos.y, x - itemPos.x) + Math.PI / 2;
    var dx = Math.cos(angle) * halfThick;
    var dy = Math.sin(angle) * halfThick;
    var color = child.getColor();
    var data = {
      path: [],
      fill: color,
      color: color
    };
    data.path.push({
      x: itemPos.x - dx,
      y: itemPos.y - dy,
      type: "moveTo"
    });
    data.path.push({
      x1: (x + itemPos.x) / 2,
      y1: y,
      x: x,
      y: y,
      type: "bezier2"
    });
    data.path.push({
      x1: (x + itemPos.x) / 2,
      y1: y,
      x: itemPos.x + dx,
      y: itemPos.y + dy,
      type: "bezier2"
    });

    _this.page.lines.push(data);
  });
  item.leftChildren.forEach(function (child) {
    var x, y;
    var shape = child.getShape();
    x = child.x + child.contentRect.width;
    var isUnderLine = shape.indexOf('underline') > -1; // 下划线情况，终点坐标要不太一样

    if (isUnderLine) {
      y = child.y + child.contentRect.height;
    } else {
      y = child.y + child.contentRect.height / 2;
    }

    var angle = Math.atan2(y - itemPos.y, x - itemPos.x) + Math.PI / 2;
    var dx = Math.cos(angle) * halfThick;
    var dy = Math.sin(angle) * halfThick;
    var color = child.getColor();
    var data = {
      path: [],
      fill: color,
      color: color
    };
    data.path.push({
      x: itemPos.x - dx,
      y: itemPos.y - dy,
      type: "moveTo"
    });
    data.path.push({
      x1: (x + itemPos.x) / 2,
      y1: y,
      x: x,
      y: y,
      type: "bezier2"
    });
    data.path.push({
      x1: (x + itemPos.x) / 2,
      y1: y,
      x: itemPos.x + dx,
      y: itemPos.y + dy,
      type: "bezier2"
    });

    _this.page.lines.push(data);
  });
} // 不得使用箭头函数


/* harmony default export */ const map_taper = (taper);
;// CONCATENATED MODULE: ./src/Layout/Lines/index.js




var Lines_Line = {
  map: {
    bezier: map_bezier,
    polyline: map_polyline,
    taper: map_taper
  },
  common: common_namespaceObject
};
/* harmony default export */ const Lines = (Lines_Line);
;// CONCATENATED MODULE: ./src/Layout/Map.js




function Map_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Map_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Map_ownKeys(Object(source), true).forEach(function (key) { defineProperty_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Map_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var MapLayout = /*#__PURE__*/function () {
  function MapLayout(page) {
    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

    classCallCheck_classCallCheck(this, MapLayout);

    this.LINE_THICKNESS = 8;
    this.name = 'map';
    this.page = page;
    this.line = Map_objectSpread(Map_objectSpread({}, Lines), Lines.map);
    this.remind = page.remind;
    this.direction = direction;
  }

  createClass_createClass(MapLayout, [{
    key: "update",
    value: function update(item) {
      if (!item.children || item.children.length < 1 || item.data.shrink) {
        // 已经是最后一级的情况,容器bbox和item bbox相同
        item.rect = item.contentRect;
        item.relativePos = {
          x: 0,
          y: 0
        };
        item.originPos = {
          x: 0,
          y: 0
        };
        return false;
      }

      if (this.direction === 'auto' && item.isRoot()) {
        return this.layoutAutoItem(item);
      }

      this.layoutItem(item, this.direction);
    }
    /**
     * 两端布局
     * @param  {} item
     */

  }, {
    key: "layoutAutoItem",
    value: function layoutAutoItem(item) {
      var _this$remind$options = this.remind.options,
          spaceY = _this$remind$options.spaceY,
          spaceX = _this$remind$options.spaceX;
      var contentRect = item.contentRect;
      var leftBBox = {
        width: 0,
        height: 0
      };
      var rightBBox = {
        width: 0,
        height: 0
      };
      var rightChildren = [];
      var leftChildren = []; // 计算子元素的位置,两边布局

      var offsetX = contentRect.width + 2 * spaceX;
      item.children.forEach(function (child, index) {
        var relativePos = child.relativePos,
            contentRect = child.contentRect;

        if (index % 2 === 0) {
          child.position = {
            x: 0,
            y: rightBBox.height
          };
          rightChildren.push(child);
          rightBBox.width = Math.max(rightBBox.width, child.rect.width);
          rightBBox.height += Math.max(child.rect.height, relativePos.y * 2 + contentRect.height) + spaceY;
        } else {
          child.position = {
            x: -child.rect.width - offsetX,
            y: leftBBox.height
          };
          leftChildren.push(child);
          leftBBox.width = Math.max(leftBBox.width, child.rect.width);
          leftBBox.height += Math.max(child.rect.height, relativePos.y * 2 + contentRect.height) + spaceY;
        }
      });

      if (rightBBox.height > 0) {
        rightBBox.height -= spaceY;
      }

      if (leftBBox.height > 0) {
        leftBBox.height -= spaceY;
      }

      item.originPos = {
        x: leftBBox.width + offsetX,
        y: 0
      };
      var bigChildren = [];
      var smallChildren = [];
      var bigBBox = {};
      var disY = 0.5 * Math.abs(leftBBox.height - rightBBox.height); // 高度小的一侧垂直居中

      if (leftBBox.height > rightBBox.height) {
        bigChildren = leftChildren;
        smallChildren = rightChildren;
        bigBBox = leftBBox;
      } else {
        bigChildren = rightChildren;
        smallChildren = leftChildren;
        bigBBox = rightBBox;
      }

      smallChildren.forEach(function (child) {
        child.position.y += disY;
      }); // 居中当前节点

      var centerY = this.getCenterY(bigChildren, bigBBox);
      var centerDis = centerY - contentRect.height / 2;

      if (centerDis > 0) {
        item.relativePos = {
          x: -(contentRect.width + spaceX),
          y: centerDis //自动布局的默认不会有下划线

        };
      } else {
        item.children.forEach(function (child) {
          return child.position.y -= centerDis;
        }); // 主节点特别大的情况

        item.relativePos = {
          x: -(contentRect.width + spaceX),
          y: 0
        };
      }

      item.rect = {
        width: spaceX * 2 + leftBBox.width + contentRect.width + rightBBox.width,
        height: Math.max(bigBBox.height, contentRect.height)
      };
      item.leftChildren = leftChildren;
      item.rightChildren = rightChildren;
    }
  }, {
    key: "getCenterY",
    value: function getCenterY(children, bbox) {
      var firstChild = children[0];
      var lastChild = children[children.length - 1];
      var firstLineY = firstChild.getShape().indexOf('underline') > -1 ? firstChild.contentRect.height : firstChild.contentRect.height * 0.5;
      var lastLineY = bbox.height - (lastChild.getShape().indexOf('underline') > -1 ? 0 : lastChild.contentRect.height * 0.5);
      var centerY = (firstLineY + lastLineY) * 0.5;
      return centerY;
    }
    /**
     * 计算出当前item的rect
     * @param {*} item 
     * @param {*} direction 
     */

  }, {
    key: "layoutItem",
    value: function layoutItem(item, direction) {
      var shape = item.getShape();
      var bbox = this.getChildrenBBox(item.children, direction);
      item.childrenBBox = bbox;
      var contentRect = item.contentRect;
      var _this$remind$options$ = this.remind.options.spaceX,
          spaceX = _this$remind$options$ === void 0 ? 60 : _this$remind$options$;
      var itemDistanceX = spaceX + (direction === 'right' ? contentRect.width : 0);
      item.originPos = {
        x: direction === 'right' ? itemDistanceX : bbox.width,
        y: 0
      };
      var centerY = this.getCenterY(item.children, bbox);
      var centerDis = centerY - contentRect.height / 2;

      if (centerDis < 0) {
        item.children.forEach(function (child) {
          return child.position.y -= centerDis;
        }); // 主节点特别大的情况

        item.relativePos = {
          x: (direction === 'right' ? -1 : 1) * itemDistanceX,
          y: 0
        };
      } else {
        if (shape.indexOf('underline') == -1) {
          item.relativePos = {
            x: (direction === 'right' ? -1 : 1) * itemDistanceX,
            y: centerY - contentRect.height / 2
          };
        } else {
          item.relativePos = {
            x: (direction === 'right' ? -1 : 1) * itemDistanceX,
            y: centerY - contentRect.height
          };
        }
      }

      if (direction === 'right') {
        item.leftChildren = [];
        item.rightChildren = item.children;
      } else {
        item.leftChildren = item.children;
        item.rightChildren = [];
      }

      item.rect = {
        width: bbox.width + spaceX + contentRect.width,
        height: Math.max(item.relativePos.y + contentRect.height, bbox.height)
      };
    }
    /**
     * 以资源所第一个的左上角为原点建立相对坐标系
     * |————————> x
     * |[0,0]
     * |[0,height+spaceY]
     * |[]
     * |
     * |y
     * @param {*} items
     */

  }, {
    key: "getChildrenBBox",
    value: function getChildrenBBox(items) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'right';
      var _this$remind$options$2 = this.remind.options.spaceY,
          spaceY = _this$remind$options$2 === void 0 ? 5 : _this$remind$options$2;
      var bbox = {
        width: 0,
        height: 0
      };

      for (var i = 0; i < items.length; i++) {
        var child = items[i];
        var rect = child.rect,
            relativePos = child.relativePos,
            contentRect = child.contentRect;

        if (rect.width > bbox.width) {
          bbox.width = rect.width;
        }

        child.side = direction; // 计算子元素在父容器的相对坐标

        child.position = {
          x: direction === 'right' ? 0 : -rect.width,
          y: bbox.height
        };
        bbox.height += Math.max(rect.height, relativePos.y * 2 + contentRect.height) + spaceY; // 让父节点在整个局部范围内垂直居中
      }

      bbox.height -= spaceY;
      return bbox;
    }
  }, {
    key: "updateLine",
    value: function updateLine(item) {
      // 默认用bezier线
      var shape = item.getLineShape();

      if (shape === 'taper' && item.depth > 0) {
        shape = 'bezier';
      }

      var drawFunction = this.line[shape];
      drawFunction.call(this, item);
    }
    /**
     * 渲染渐细线
     * @param {*} item 
     */

  }, {
    key: "drawTaperingConnector",
    value: function drawTaperingConnector(item) {
      var itemPos = {
        x: item.x + item.contentRect.width * 0.5,
        y: item.y + item.contentRect.height * 0.5
      };
      var ctx = this.page.canvasContext;
      var halfThick = this.LINE_THICKNESS / 2;
      item.children.forEach(function (child) {
        var x, y;
        var shape = child.getShape();
        x = child.x;
        var isUnderLine = shape.indexOf('underline') > -1; // 下划线情况，终点坐标要不太一样

        if (isUnderLine) {
          y = child.y + child.contentRect.height;
        } else {
          y = child.y + child.contentRect.height / 2;
        }

        var angle = Math.atan2(y - itemPos.y, x - itemPos.x) + Math.PI / 2;
        var dx = Math.cos(angle) * halfThick;
        var dy = Math.sin(angle) * halfThick;
        ctx.fillStyle = ctx.strokeStyle = child.getColor();
        ctx.beginPath();
        ctx.moveTo(itemPos.x - dx, itemPos.y - dy);
        ctx.quadraticCurveTo((x + itemPos.x) / 2, y, x, y); // 贝塞尔过去
        // 贝塞尔回来

        ctx.quadraticCurveTo((x + itemPos.x) / 2, y, itemPos.x + dx, itemPos.y + dy);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
      });
    }
  }]);

  return MapLayout;
}();

/* harmony default export */ const Layout_Map = (MapLayout);
;// CONCATENATED MODULE: ./src/Layout/Tree.js




function Tree_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Tree_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Tree_ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Tree_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var TreeLayout = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function TreeLayout(page) {
    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

    _classCallCheck(this, TreeLayout);

    this.LINE_THICKNESS = 8;
    this.name = 'map';
    this.page = page;
    this.line = Tree_objectSpread(Tree_objectSpread({}, Line), Line.map);
    this.remind = page.remind;
    this.direction = direction;
  }

  _createClass(TreeLayout, [{
    key: "update",
    value: function update(item) {
      if (!item.children || item.children.length < 1 || item.data.shrink) {
        // 已经是最后一级的情况,容器bbox和item bbox相同
        item.rect = item.contentRect;
        item.relativePos = {
          x: 0,
          y: 0
        };
        item.originPos = {
          x: 0,
          y: 0
        };
        return false;
      }

      if (this.direction === 'auto' && item.isRoot()) {
        return this.layoutAutoItem(item);
      }

      this.layoutItem(item, this.direction);
    }
    /**
     * 两端布局
     * @param  {} item
     */

  }, {
    key: "layoutAutoItem",
    value: function layoutAutoItem(item) {
      var _this$remind$options = this.remind.options,
          spaceY = _this$remind$options.spaceY,
          spaceX = _this$remind$options.spaceX;
      var contentRect = item.contentRect;
      var leftBBox = {
        width: 0,
        height: 0
      };
      var rightBBox = {
        width: 0,
        height: 0
      };
      var rightChildren = [];
      var leftChildren = []; // 计算子元素的位置,两边布局

      var offsetX = contentRect.width + 2 * spaceX;
      item.children.forEach(function (child, index) {
        var relativePos = child.relativePos,
            contentRect = child.contentRect;

        if (index % 2 === 0) {
          child.position = {
            x: 0,
            y: rightBBox.height
          };
          rightChildren.push(child);
          rightBBox.width = Math.max(rightBBox.width, child.rect.width);
          rightBBox.height += Math.max(child.rect.height, relativePos.y * 2 + contentRect.height) + spaceY;
        } else {
          child.position = {
            x: -child.rect.width - offsetX,
            y: leftBBox.height
          };
          leftChildren.push(child);
          leftBBox.width = Math.max(leftBBox.width, child.rect.width);
          leftBBox.height += Math.max(child.rect.height, relativePos.y * 2 + contentRect.height) + spaceY;
        }
      });

      if (rightBBox.height > 0) {
        rightBBox.height -= spaceY;
      }

      if (leftBBox.height > 0) {
        leftBBox.height -= spaceY;
      }

      item.originPos = {
        x: leftBBox.width + offsetX,
        y: 0
      };
      var bigChildren = [];
      var smallChildren = [];
      var bigBBox = {};
      var disY = 0.5 * Math.abs(leftBBox.height - rightBBox.height); // 高度小的一侧垂直居中

      if (leftBBox.height > rightBBox.height) {
        bigChildren = leftChildren;
        smallChildren = rightChildren;
        bigBBox = leftBBox;
      } else {
        bigChildren = rightChildren;
        smallChildren = leftChildren;
        bigBBox = rightBBox;
      }

      smallChildren.forEach(function (child) {
        child.position.y += disY;
      }); // 居中当前节点

      var centerY = this.getCenterY(bigChildren, bigBBox);
      var centerDis = centerY - contentRect.height / 2;

      if (centerDis > 0) {
        item.relativePos = {
          x: -(contentRect.width + spaceX),
          y: centerDis //自动布局的默认不会有下划线

        };
      } else {
        item.children.forEach(function (child) {
          return child.position.y -= centerDis;
        }); // 主节点特别大的情况

        item.relativePos = {
          x: -(contentRect.width + spaceX),
          y: 0
        };
      }

      item.rect = {
        width: spaceX * 2 + leftBBox.width + contentRect.width + rightBBox.width,
        height: Math.max(bigBBox.height, contentRect.height)
      };
      item.leftChildren = leftChildren;
      item.rightChildren = rightChildren;
    }
  }, {
    key: "getCenterY",
    value: function getCenterY(children, bbox) {
      var firstChild = children[0];
      var lastChild = children[children.length - 1];
      var firstLineY = firstChild.getShape().indexOf('underline') > -1 ? firstChild.contentRect.height : firstChild.contentRect.height * 0.5;
      var lastLineY = bbox.height - (lastChild.getShape().indexOf('underline') > -1 ? 0 : lastChild.contentRect.height * 0.5);
      var centerY = (firstLineY + lastLineY) * 0.5;
      return centerY;
    }
    /**
     * 计算出当前item的rect
     * @param {*} item 
     * @param {*} direction 
     */

  }, {
    key: "layoutItem",
    value: function layoutItem(item, direction) {
      var shape = item.getShape();
      var bbox = this.getChildrenBBox(item.children, direction);
      item.childrenBBox = bbox;
      var contentRect = item.contentRect;
      var _this$remind$options$ = this.remind.options.spaceX,
          spaceX = _this$remind$options$ === void 0 ? 60 : _this$remind$options$;
      var itemDistanceX = spaceX + (direction === 'right' ? contentRect.width : 0);
      item.originPos = {
        x: direction === 'right' ? itemDistanceX : bbox.width,
        y: 0
      };
      var centerY = this.getCenterY(item.children, bbox);
      var centerDis = centerY - contentRect.height / 2;

      if (centerDis < 0) {
        item.children.forEach(function (child) {
          return child.position.y -= centerDis;
        }); // 主节点特别大的情况

        item.relativePos = {
          x: (direction === 'right' ? -1 : 1) * itemDistanceX,
          y: 0
        };
      } else {
        if (shape.indexOf('underline') == -1) {
          item.relativePos = {
            x: (direction === 'right' ? -1 : 1) * itemDistanceX,
            y: centerY - contentRect.height / 2
          };
        } else {
          item.relativePos = {
            x: (direction === 'right' ? -1 : 1) * itemDistanceX,
            y: centerY - contentRect.height
          };
        }
      }

      if (direction === 'right') {
        item.leftChildren = [];
        item.rightChildren = item.children;
      } else {
        item.leftChildren = item.children;
        item.rightChildren = [];
      }

      item.rect = {
        width: bbox.width + spaceX + contentRect.width,
        height: Math.max(item.relativePos.y + contentRect.height, bbox.height)
      };
    }
    /**
     * 以资源所第一个的左上角为原点建立相对坐标系
     * |————————> x
     * |[0,0]
     * |[0,height+spaceY]
     * |[]
     * |
     * |y
     * @param {*} items
     */

  }, {
    key: "getChildrenBBox",
    value: function getChildrenBBox(items) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'right';
      var _this$remind$options$2 = this.remind.options.spaceY,
          spaceY = _this$remind$options$2 === void 0 ? 5 : _this$remind$options$2;
      var bbox = {
        width: 0,
        height: 0
      };

      for (var i = 0; i < items.length; i++) {
        var child = items[i];
        var rect = child.rect,
            relativePos = child.relativePos,
            contentRect = child.contentRect;

        if (rect.width > bbox.width) {
          bbox.width = rect.width;
        }

        child.side = direction; // 计算子元素在父容器的相对坐标

        child.position = {
          x: direction === 'right' ? 0 : -rect.width,
          y: bbox.height
        };
        bbox.height += Math.max(rect.height, relativePos.y * 2 + contentRect.height) + spaceY; // 让父节点在整个局部范围内垂直居中
      }

      bbox.height -= spaceY;
      return bbox;
    }
  }, {
    key: "updateLine",
    value: function updateLine(item) {
      if (item.data.taper) {
        // 如果当前元素是map则当前节点渐细
        this.drawTaperingConnector(item);
      } else {
        // 默认用bezier线
        var drawFunction = this.line[item.getLineShape()];
        drawFunction.call(this, item);
      }
    }
    /**
     * 渲染渐细线
     * @param {*} item 
     */

  }, {
    key: "drawTaperingConnector",
    value: function drawTaperingConnector(item) {
      var itemPos = {
        x: item.x + item.contentRect.width * 0.5,
        y: item.y + item.contentRect.height * 0.5
      };
      var ctx = this.page.canvasContext;
      var halfThick = this.LINE_THICKNESS / 2;
      item.children.forEach(function (child) {
        var x, y;
        var shape = child.getShape();
        x = child.x;
        var isUnderLine = shape.indexOf('underline') > -1; // 下划线情况，终点坐标要不太一样

        if (isUnderLine) {
          y = child.y + child.contentRect.height;
        } else {
          y = child.y + child.contentRect.height / 2;
        }

        var angle = Math.atan2(y - itemPos.y, x - itemPos.x) + Math.PI / 2;
        var dx = Math.cos(angle) * halfThick;
        var dy = Math.sin(angle) * halfThick;
        ctx.fillStyle = ctx.strokeStyle = child.getColor();
        ctx.beginPath();
        ctx.moveTo(itemPos.x - dx, itemPos.y - dy);
        ctx.quadraticCurveTo((x + itemPos.x) / 2, y, x, y); // 贝塞尔过去
        // 贝塞尔回来

        ctx.quadraticCurveTo((x + itemPos.x) / 2, y, itemPos.x + dx, itemPos.y + dy);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
      });
    }
  }]);

  return TreeLayout;
}()));

/* harmony default export */ const Tree = ((/* unused pure expression or super */ null && (TreeLayout)));
;// CONCATENATED MODULE: ./src/Layout/index.js




;// CONCATENATED MODULE: ./src/Model/Page.js





var data = function () {
  var data = {
    root: {
      text: 'Root',
      layout: 'map',
      color: "blue",
      children: []
    }
  };

  function make(item, number, depth, index) {
    var total = number;

    while (number > 0) {
      var child = {
        text: "".concat(depth, "-").concat(index, "-").concat(number),
        color: "red",
        children: []
      };
      item.children.push(child);
      number--;

      if (depth > 0) {
        make(child, total, depth - 1, item.children.length);
      }
    }
  }

  make(data.root, 2, 2, 1);
  return data;
}();

var Page = /*#__PURE__*/function () {
  function Page(remind) {
    var _this = this;

    classCallCheck_classCallCheck(this, Page);

    this.lines = [];
    this.paths = [];
    this.remind = remind;
    this.options = remind.options;
    this.root = null;
    this.visible = false;
    this.position = [0, 0];
    this.initDOM();
    this.initLayout();
    this.initCanvas();

    if (this.options.data) {
      this.setData(this.options.data);
    } else {
      this.setData(data);
    } // 延时进行操作


    requestAnimationFrame(function () {
      _this.show();
    });
  }

  createClass_createClass(Page, [{
    key: "initLayout",
    value: function initLayout() {
      this.layout = {
        map: new Layout_Map(this),
        'map-right': new Layout_Map(this, 'right'),
        'map-left': new Layout_Map(this, 'left')
      };
    }
  }, {
    key: "initDOM",
    value: function initDOM() {
      this.dom = document.createElement("div");
      this.dom.className = 'remind-page';
      this.remind.dom.appendChild(this.dom);
    }
  }, {
    key: "initCanvas",
    value: function initCanvas() {
      this.canvas = document.createElement("canvas");
      this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      this.svg.innerHTML = "\n        <symbol id=\"arrow\" viewBox=\"0 0 10 10\">\n            <path d=\"M-5 5 L0 0 L-5 -5\" />\n        </symbol>\n        "; // this.svg.className = 'remind-canvas';

      this.canvas.className = 'remind-canvas';
      this.canvasContext = this.canvas.getContext('2d');
      this.dom.appendChild(this.canvas);
      this.dom.appendChild(this.svg);
      var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("tansform", 'translate(5px,5px)');
      this.svg.appendChild(g);
      this.svg.classList.add("remind-canvas");
      this.svgConatiner = g;
    }
  }, {
    key: "setData",
    value: function setData(data) {
      this.root && this.root.destroy();
      var root = new View_Item(this, {
        depth: 0
      });
      root.setData(data.root);
      this.root = root;
      this.root.parent = this;
      this.theme = data.theme;
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(event) {
      var onMouseUp = function onMouseUp() {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
      };

      var onMouseMove = function onMouseMove(event) {// const disX = 
      };

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }
  }, {
    key: "select",
    value: function select(item) {
      this.deselect();

      if (item === this.current) {
        return;
      }

      this.current = item;
      this.current.dom.classList.add('active');
    }
  }, {
    key: "deselect",
    value: function deselect() {
      if (!this.current) return;
      this.current.dom.classList.remove('active');
      this.current = undefined;
    }
  }, {
    key: "getColor",
    value: function getColor() {
      return '#999';
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var data = {
        root: this.root.toJSON(),
        theme: this.theme
      };
      return data;
    }
  }, {
    key: "show",
    value: function show() {
      this.updateSubtree();
      this.update();
      this.root.center();
      this.select(this.root);
      return this;
    } // 更新节点树信息

  }, {
    key: "updateSubtree",
    value: function updateSubtree() {
      this.root.updateSubtree();
    } // 渲染

  }, {
    key: "update",
    value: function update() {
      this.lines = [];
      this.updateRootWidth();
      this.render();
      this.refusePosition();
    }
  }, {
    key: "rememberPosition",
    value: function rememberPosition(item) {
      this.oldPosition = {
        item: item,
        x: item.x,
        y: item.y
      };
    }
  }, {
    key: "refusePosition",
    value: function refusePosition() {
      if (!this.oldPosition) return;
      var _this$oldPosition = this.oldPosition,
          x = _this$oldPosition.x,
          y = _this$oldPosition.y,
          item = _this$oldPosition.item;
      this.translate(this.x - (item.x - x), this.y - (item.y - y));
      return this.oldPosition = undefined;
    }
  }, {
    key: "updateRootWidth",
    value: function updateRootWidth() {
      var rect = this.root.rect;
      var remindRect = this.remind.container.getBoundingClientRect();
      var width = Math.max(rect.width * 3, remindRect.width * 3);
      var height = Math.max(rect.height * 3, remindRect.height * 3);
      this.remind.dom.style.width = width + 'px';
      this.remind.dom.style.height = height + 'px';
      this.scrollLeft = (width - remindRect.width) / 2;
      this.scrollTop = (height - remindRect.height) / 2;
      /**
       * 最外层容器的rect
       * @var 
       */

      this.remindRect = remindRect;
      return;
    }
  }, {
    key: "render",
    value: function render() {
      this.updateCanvasStyle();
      this.root.render();

      if (this.options.renderEngine === 'canvas') {
        this.renderCanvas();
      } else {
        this.renderSVG();
      }
    }
  }, {
    key: "updateCanvasStyle",
    value: function updateCanvasStyle() {
      var rect = this.root.rect;
      this.canvas.width = rect.width + 10;
      this.canvas.height = rect.height + 10;
      this.canvas.style.width = rect.width + 10 + 'px';
      this.canvas.style.height = rect.height + 10 + 'px';
      this.svg.style.width = rect.width + 10 + 'px';
      this.svg.style.height = rect.height + 10 + 'px';
      this.dom.style.width = rect.width + 'px';
      this.dom.style.height = rect.height + 'px';
    }
  }, {
    key: "renderCanvas",
    value: function renderCanvas() {
      var ctx = this.canvasContext;
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.lines.forEach(function (line) {
        ctx.beginPath();
        var fill = line.fill,
            color = line.color;
        ctx.fillStyle = fill;
        ctx.strokeStyle = color;
        line.path.forEach(function (point) {
          var x1 = point.x1,
              y1 = point.y1,
              x2 = point.x2,
              y2 = point.y2,
              x = point.x,
              y = point.y;

          switch (point.type) {
            case 'bezier3':
              ctx.bezierCurveTo(x1, y1, x2, y2, x, y);
              break;

            case 'bezier2':
              ctx.quadraticCurveTo(x1, y1, x, y);
              break;

            case 'moveTo':
              ctx.moveTo(x, y);
              break;

            default:
              ctx.lineTo(x, y);
              break;
          }
        });
        ctx.stroke();
      });
    }
  }, {
    key: "renderSVG",
    value: function renderSVG() {
      var end = 0;
      var allStr = '';
      this.lines.forEach(function (line, index) {
        if (!line) return;
        var pathStr = '';
        var fill = line.fill,
            color = line.color;
        line.path.forEach(function (point) {
          var x1 = point.x1,
              y1 = point.y1,
              x2 = point.x2,
              y2 = point.y2,
              x = point.x,
              y = point.y;

          switch (point.type) {
            case 'bezier3':
              pathStr += " C".concat(x1, " ").concat(y1, " ").concat(x2, " ").concat(y2, " ").concat(x, " ").concat(y);
              break;

            case 'bezier2':
              pathStr += " Q".concat(x1, " ").concat(y1, " ").concat(x, " ").concat(y);
              break;

            case 'moveTo':
              pathStr += "M".concat(x, " ").concat(y);
              break;

            default:
              pathStr += " L".concat(x, " ").concat(y);
          }
        });
        allStr += "<path data-name=\"".concat(line.name || '', "\" d='").concat(pathStr, "' fill=\"").concat(fill ? fill : 'transparent', "\" stroke='").concat(color ? color : 'transparent', "' ></path>");
        end = index;
      });
      this.svgConatiner.innerHTML = allStr;
      this.paths.splice(end, this.paths.length - end);
    }
  }, {
    key: "translate",
    value: function translate(x, y) {
      this.dom.style.transform = "matrix(1, 0, 0, 1, ".concat(x, ",").concat(y, ")");
      this.x = x;
      this.y = y;
    }
  }, {
    key: "resetTheme",
    value: function resetTheme(reRender) {
      this.root.resetTheme();
      return this;
    }
  }, {
    key: "removeChild",
    value: function removeChild() {
      this.root = undefined;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.root.destroy();
      this.remind.dom.removeEventListener("click", this.onClickPage);
    }
  }]);

  return Page;
}();

/* harmony default export */ const Model_Page = (Page);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/construct.js


function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}
;// CONCATENATED MODULE: ./src/Control/Actions/Actions.js



var getAllActions = function getAllActions(remind) {
  var Action = function Action() {};

  Action.prototype.perform = function () {};

  Action.prototype.undo = function () {};

  Action.Multi = function (actions) {
    this._actions = actions;
  };

  Action.Multi.prototype = Object.create(Action.prototype);

  Action.Multi.prototype.perform = function () {
    this._actions.forEach(function (action) {
      action.perform();
    });
  };

  Action.Multi.prototype.undo = function () {
    this._actions.slice().reverse().forEach(function (action) {
      action.undo();
    });
  };

  Action.InsertNewItem = function (parent, index) {
    this._parent = parent;
    this._index = index;
    this.autoSelect = true;
    var options = {}; //    const colors = MM.Theme.theme.colors || MM.App.options.colors;
    //    let color = colors[index % colors.length];
    //    if (parent.isRoot()) {
    //        options.color = color;
    //    }

    this._item = new View_Item(remind.page);
  };

  Action.InsertNewItem.prototype = Object.create(Action.prototype);

  Action.InsertNewItem.prototype.perform = function () {
    this._parent.expand();

    this._item = this._parent.insertChild(this._item, this._index);
    remind.page.select(this._item);
  };

  Action.InsertNewItem.prototype.undo = function () {
    this._parent.removeChild(this._item);

    remind.page.select(this._parent);
  };

  Action.AppendItem = function (parent, item) {
    this._parent = parent;
    this._item = item;
  };

  Action.AppendItem.prototype = Object.create(Action.prototype);

  Action.AppendItem.prototype.perform = function () {
    this._parent.insertChild(this._item);

    remind.page.select(this._item);
  };

  Action.AppendItem.prototype.undo = function () {
    this._parent.removeChild(this._item);

    remind.page.selectt(this._parent);
  };

  Action.RemoveItem = function (item) {
    this._item = item;
    this._parent = item.parent;
    this._index = this._parent.children.indexOf(this._item);
    this.data = item.getData();
  };

  Action.RemoveItem.prototype = Object.create(Action.prototype);

  Action.RemoveItem.prototype.perform = function () {
    this._parent.removeChild(this._item);

    this._item.destroy();

    remind.page.select(this._parent);
  };

  Action.RemoveItem.prototype.undo = function () {
    var childItem = new View_Item(remind.page, {
      data: this.data,
      depth: this._parent.depth + 1,
      visible: !this._parent.data.shrink && this._parent.visible
    });

    this._parent.insertChild(childItem, this._index);

    remind.page.select(this._item);
  };

  Action.MoveItem = function (item, newParent, newIndex, newSide) {
    this._item = item;
    this._newParent = newParent;
    this._newIndex = arguments.length < 3 ? null : newIndex;
    this._newSide = newSide || '';
    this._oldParent = item.getParent();
    this._oldIndex = this._oldParent.getChildren().indexOf(item);
    this._oldSide = item.getSide();
    var colors = remind.theme.colors || remind.options.colors;

    if (newParent.isRoot()) {
      var color = colors[newIndex % colors.length];

      this._item.setColor(color);
    }
  };

  Action.MoveItem.prototype = Object.create(Action.prototype);

  Action.MoveItem.prototype.perform = function () {
    this._item.setSide(this._newSide);

    if (this._newIndex === null) {
      this._newParent.insertChild(this._item);
    } else {
      this._newParent.insertChild(this._item, this._newIndex);
    }

    remind.page.select(this._item);
  };

  Action.MoveItem.prototype.undo = function () {
    this._item.setSide(this._oldSide);

    this._oldParent.insertChild(this._item, this._oldIndex);

    remind.page.select(this._newParent);
  };

  Action.Swap = function (item, diff) {
    this._item = item;
    this._parent = item.getParent();

    var children = this._parent.getChildren();

    var sibling = this._parent.getLayout().pickSibling(this._item, diff);

    this._sourceIndex = children.indexOf(this._item);
    this._targetIndex = children.indexOf(sibling);
  };

  Action.Swap.prototype = Object.create(Action.prototype);

  Action.Swap.prototype.perform = function () {
    this._parent.insertChild(this._item, this._targetIndex);
  };

  Action.Swap.prototype.undo = function () {
    this._parent.insertChild(this._item, this._sourceIndex);
  };

  Action.SetLayout = function (item, layout) {
    this._item = item;
    this._layout = layout;
    this._oldLayout = item.getOwnLayout();
  };

  Action.SetLayout.prototype = Object.create(Action.prototype);

  Action.SetLayout.prototype.perform = function () {
    this._item.setLayout(this._layout);
  };

  Action.SetLayout.prototype.undo = function () {
    this._item.setLayout(this._oldLayout);
  };

  Action.SetShape = function (item, shape) {
    this._item = item;
    this._shape = shape;
    this._oldShape = item.getOwnShape();
  };

  Action.SetShape.prototype = Object.create(Action.prototype);

  Action.SetShape.prototype.perform = function () {
    this._item.setShape(this._shape);
  };

  Action.SetShape.prototype.undo = function () {
    this._item.setShape(this._oldShape);
  };

  Action.SetColor = function (item, color) {
    this._item = item;
    this._color = color;
    this._oldColor = item.getOwnColor();
  };

  Action.SetColor.prototype = Object.create(Action.prototype);

  Action.SetColor.prototype.perform = function () {
    this._item.setColor(this._color);
  };

  Action.SetColor.prototype.undo = function () {
    this._item.setColor(this._oldColor);
  };

  Action.SetText = function (item, text, oldText) {
    this.item = item;
    this.text = text;
    this.oldText = oldText === undefined ? item.data.text : oldText;
  };

  Action.SetText.prototype = Object.create(Action.prototype);

  Action.SetText.prototype.perform = function () {
    this.item.setText(this.text);
  };

  Action.SetText.prototype.undo = function () {
    this.item.setText(this.oldText);
  };

  Action.SetIcon = function (item, icon, type) {
    this._item = item;

    if (icon) {
      this._icon = Object.assign({}, item._icon, defineProperty_defineProperty({}, type, icon));
    } else {
      this._icon = Object.assign({}, item._icon);
      delete this._icon[type];
    }

    this._oldIcon = item.getIcon();
  };

  Action.SetIcon.prototype = Object.create(Action.prototype);

  Action.SetIcon.prototype.perform = function () {
    this._item._icon = this._icon;

    this._item.clearOffset();

    this._item.update();
  };

  Action.SetIcon.prototype.undo = function () {
    this._item._icon = this._oldIcon;

    this._item.clearOffset();

    this._item.update();
  };

  Action.SetSide = function (item, side) {
    this._item = item;
    this._side = side;
    this._oldSide = item.getSide();
  };

  Action.SetSide.prototype = Object.create(Action.prototype);

  Action.SetSide.prototype.perform = function () {
    this._item.setSide(this._side);

    this._item.getMap().update();
  };

  Action.SetSide.prototype.undo = function () {
    this._item.setSide(this._oldSide);

    this._item.getMap().update();
  };

  Action.SetNote = function (item, note) {
    this.oldNote = item.note;
    this.item = item;
    this.note = note;
  };

  Action.SetNote.prototype = Object.create(Action.prototype);

  Action.SetNote.prototype.perform = function () {
    this.item.note = this.note; //更新Note

    if (!this.note) {
      this.item._dom.content.removeChild(this.item._dom.note);

      this.item.update();
    } else {
      this.item._dom.content.appendChild(this.item._dom.note);
    }

    this.item.clearOffset();
    this.item.update();
  };

  Action.SetNote.prototype.undo = function () {
    this.item.note = this.oldNote;

    if (!this.oldNote) {
      // 之前的note为空
      this.item._dom.content.removeChild(this.item._dom.note);
    } else {
      // 之前note不为空
      this.item._dom.content.appendChild(this.item._dom.note);
    }

    this.item.clearOffset();
    this.item.update();
  };

  return Action;
};

/* harmony default export */ const Actions = (getAllActions);
;// CONCATENATED MODULE: ./src/Control/Action.js




/**
 * @class
 */

var Action = /*#__PURE__*/function () {
  function Action(remind) {
    classCallCheck_classCallCheck(this, Action);

    this.remind = remind;
    this.actions = Actions(remind);
  }

  createClass_createClass(Action, [{
    key: "execute",
    value: function execute(name) {
      var ActionConstructor = this.actions[name];
      if (!ActionConstructor) return console.warn("没有该actin:", name);

      for (var _len = arguments.length, others = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        others[_key - 1] = arguments[_key];
      }

      var action = _construct(ActionConstructor, others);

      this.remind.history.action(action);
      return action;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.actions = {};
    }
  }]);

  return Action;
}();

/* harmony default export */ const Control_Action = (Action);
;// CONCATENATED MODULE: ./src/Control/History.js



var History = /*#__PURE__*/function () {
  function History(remind) {
    classCallCheck_classCallCheck(this, History);

    this.history = [];
    this.historyIndex = 0;
    this.remind = remind;
  }

  createClass_createClass(History, [{
    key: "action",
    value: function action(_action) {
      this.remind.fire("action", _action);
      if (_action.stop) return;

      if (this.historyIndex < this.history.length) {
        this.history.splice(this.historyIndex, this.history.length - this.historyIndex);
      }

      this.history.push(_action);
      this.historyIndex++;

      _action.perform();

      return this;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.history = [];
      this.historyIndex = 0;
    }
  }]);

  return History;
}();

/* harmony default export */ const Control_History = (History);
;// CONCATENATED MODULE: ./src/View/Theme.js
var theme = {
  themes: {
    "default": {
      main: "ellipse",
      second: "box",
      className: "default",
      node: "underline",
      lineShape: "taper"
    }
  },
  registe: function registe(name, options) {
    theme.themes[name] = Object.assign({}, theme.themes["default"], {
      className: name
    }, options);
  }
};
/* harmony default export */ const Theme = (theme);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/index.less
var cjs_ruleSet_1_rules_1_use_2_src = __webpack_require__(739);
;// CONCATENATED MODULE: ./src/index.less

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(cjs_ruleSet_1_rules_1_use_2_src/* default */.Z, options);



/* harmony default export */ const src = (cjs_ruleSet_1_rules_1_use_2_src/* default.locals */.Z.locals || {});
;// CONCATENATED MODULE: ./src/app.js










 // import MouseManager from './Control/Mou'

/**
 * @class
 */

var Remind = /*#__PURE__*/function () {
  function Remind(container) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    classCallCheck_classCallCheck(this, Remind);

    this._subscribers = {};

    if (container) {
      return this.init(container, options);
    }
  }
  /**
   * @param  {} container
   * @param  {} options={}
   */


  createClass_createClass(Remind, [{
    key: "init",
    value: function init(container) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.options = Object.assign({
        autoEdit: true,
        disableDrag: false,
        showHeadTitle: false,
        disableEdit: false,
        // 阻止触发该Item或所有的MM.Command.Edit
        headTitle: " - 脑图",
        spaceX: 60,
        spaceY: 8,
        showArrow: true,
        // 是否显示线的箭头
        renderEngine: 'svg',
        readonly: false,
        theme: 'default',
        colors: ['#fec936', '#f88b15', '#fe7e4d', '#ec6d7a', '#ef3224', '#9bc039', '#67c97e', '#00a7cd', '#40b5c6', '#2da4ff', '#956fe7', '#882e99', '#FF84BA']
      }, options);
      this.container = container;
      this.theme = Theme.themes[this.options.theme];
      this.initDOM();
      this.command = new Control_Command(this);
      this.action = new Control_Action(this);
      this.history = new Control_History(this); // this.menu = new Menu(this);

      this.keyboard = new Control_Keyboard(this); // this.mouseManager = new MouseManager(this)
      // this.clipManager = new ClipManager(this);

      this.page = new Model_Page(this); // this.note = new Note(this);

      this.addEvents();
      return this;
    }
  }, {
    key: "deselect",
    value: function deselect() {
      this.current.deselect();
    }
  }, {
    key: "initDOM",
    value: function initDOM() {
      var remindDOM = document.createElement("div");
      remindDOM.className = " remind  theme-".concat(this.options.theme || '');
      this.remindDOM = remindDOM;
      this.container.appendChild(remindDOM);
      var dom = document.createElement("div");
      remindDOM.appendChild(dom);
      this.dom = dom;
      this.dom.className += " remind-scroll";
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      var _this = this;

      if (this.options.showHeadTitle) {
        this.on("item-change", function (publisher) {
          if (publisher.isRoot() && publisher.getMap() == _this.map) {
            document.title = _this.map.getName() + _this.options.headTitle;
          }
        });
      }

      this.dom.addEventListener("click", function () {
        _this.page.deselect();
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      this._subscribers = {};
    }
    /**
     * @param  {} message
     * @param  {} publisher
     * @param  {} data
     */

  }, {
    key: "fire",
    value: function fire(message, publisher, data) {
      var subscribers = this._subscribers[message] || [];
      subscribers.forEach(function (subscriber) {
        subscriber.handleMessage ? subscriber.handleMessage(message, publisher, data) : subscriber(publisher, data);
      });
    }
    /**
     * @param  {} message
     * @param  {} subscriber
     */

  }, {
    key: "on",
    value: function on(message, subscriber) {
      if (!(message in this._subscribers)) {
        this._subscribers[message] = [];
      }

      var index = this._subscribers[message].indexOf(subscriber);

      if (index == -1) {
        this._subscribers[message].push(subscriber);
      }
    }
    /**
     * @param  {} message
     * @param  {} subscriber
     */

  }, {
    key: "off",
    value: function off(message, subscriber) {
      if (!subscriber) {
        return this._subscribers[message] = [];
      }

      var index = this._subscribers[message].indexOf(subscriber);

      if (index > -1) {
        this._subscribers[message].splice(index, 1);
      }
    }
  }]);

  return Remind;
}();

window.Remind = Remind;
Remind.theme = Theme;
Remind.line = Lines; // 暴露出去可用复写

/* harmony default export */ const app = (Remind);
})();

__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});