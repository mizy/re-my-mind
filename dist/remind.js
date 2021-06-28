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

/***/ 156:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
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

/***/ }),

/***/ 540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function drawItem(item) {
  var rect = item.rect,
      contentRect = item.contentRect;
  var direction = this.direction;
  var isTop = this.isTop(item);
  var color = item.getColor();
  var shape = item.getShape();
  var isUnderLine = shape.indexOf("underline") > -1;
  var angle = this.remind.options.fish.angle;

  if (isUnderLine) {
    var underlineData = this.line.common.renderUnderline.call(this, item, {}, isTop);
    this.page.lines.push(underlineData);
  }

  var k = Math.tan(angle);
  var startPos = {
    x: item.x + contentRect.width / 2,
    y: item.y + (isTop ? contentRect.height : 0),
    type: "moveTo"
  };
  var endPos = {
    x: direction === 'right' ? (rect.height - contentRect.height) / k + item.x + contentRect.width / 2 : item.globalPos.x,
    y: item.globalPos.y + (isTop ? rect.height : 0)
  };

  if (item.depth % 2 !== 1) {
    // 水平
    if (!isUnderLine) {
      var disX = contentRect.height / 2 / k;
      startPos.x = item.x + (direction === 'right' ? item.contentRect.width : 0);
      endPos.x = direction === 'right' ? item.globalPos.x + item.rect.width + disX : item.globalPos.x - disX;
      startPos.y = item.y + contentRect.height * 0.5;
      endPos.y = startPos.y;
    } else {
      startPos.x = item.x + (direction === 'right' ? 0 : item.contentRect.width);
      endPos.x = startPos.x + (direction === 'right' ? 1 : -1) * (item.rect.width + item.rect.height / k);
    }
  }

  var bodyData = {
    path: [startPos, endPos],
    color: color
  };
  this.page.lines.push(bodyData);
} // 不得使用箭头函数


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drawItem);

/***/ }),

/***/ 105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(156);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function drawRoot(item) {
  var rect = item.rect,
      contentRect = item.contentRect;
  var direction = this.direction;
  var _this$remind$options$ = this.remind.options.fish,
      _this$remind$options$2 = _this$remind$options$.minFishWidth,
      minFishWidth = _this$remind$options$2 === void 0 ? 200 : _this$remind$options$2,
      _this$remind$options$3 = _this$remind$options$.minFishHeight,
      minFishHeight = _this$remind$options$3 === void 0 ? 50 : _this$remind$options$3,
      angle = _this$remind$options$.angle,
      _this$remind$options$4 = _this$remind$options$.fishTailWidth,
      fishTailWidth = _this$remind$options$4 === void 0 ? 50 : _this$remind$options$4,
      _this$remind$options$5 = _this$remind$options$.headGap,
      headGap = _this$remind$options$5 === void 0 ? 50 : _this$remind$options$5;
  var color = item.getColor();
  var startPos = {
    x: item.x + (direction === 'right' ? 0 : -contentRect.width),
    y: item.y + contentRect.height / 2,
    type: "moveTo"
  };
  var endPos = {
    x: direction === 'right' ? item.globalPos.x + fishTailWidth : item.globalPos.x + rect.width - fishTailWidth,
    y: startPos.y
  };
  var bodyData = {
    path: [startPos, endPos],
    color: color
  };
  this.page.lines.push(bodyData); //尾巴

  var startX = endPos.x + (direction === 'right' ? -fishTailWidth : fishTailWidth);
  var disY = fishTailWidth * Math.tan(angle / 2);
  this.page.lines.push({
    path: [{
      type: 'moveTo',
      x: startX,
      y: endPos.y - disY
    }, _objectSpread({}, endPos), {
      x: startX,
      y: endPos.y + disY
    }],
    color: color
  }); //  if(item.children.length){
  //     item.children.forEach(child=>{
  //         if(child.data.layout && child.data.layout !== 'fish'){
  //            this.line.item.call(this,child)
  //         }
  //     })
  // }
} // 不得使用箭头函数


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (drawRoot);

/***/ }),

/***/ 275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(156);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function bezier(item) {
  var _this = this;

  var isUnderLine = item.getShape().indexOf('underline') > -1;
  var direction = this.direction;
  var underlinePos = {
    x: item.x + item.contentRect.width,
    y: item.y + item.contentRect.height / 2
  }; // 下划线的话给自己底部加上颜色

  if (isUnderLine) {
    this.page.lines.push(this.line.common.renderUnderline.call(this, item, underlinePos));
  }

  if (item.data.shrink || !item.children.length) {
    return item;
  }

  var startPos = {
    x: item.x + item.contentRect.width / 2,
    y: item.y + (direction === 'bottom' ? item.contentRect.height : 0)
  };
  item.children.forEach(function (child) {
    var x = child.x + child.contentRect.width / 2,
        y = child.y + (direction !== 'bottom' ? child.contentRect.height : 0),
        start = startPos;
    var bezierPos = {
      x1: start.x,
      y1: (start.y + y) * 0.5,
      x2: x,
      y2: (start.y + y) * 0.5
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
    data.path.push(_objectSpread(_objectSpread({}, bezierPos), {}, {
      x: x,
      y: y,
      type: "bezier3"
    }));

    _this.page.lines.push(data);
  });
} // 不得使用箭头函数


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bezier);

/***/ }),

/***/ 133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(156);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function polyline(item) {
  var _this = this;

  var spaceY = this.remind.options.site.spaceY;
  var isUnderLine = item.getShape().indexOf('underline') > -1;
  var direction = this.direction; // 下划线的话给自己底部加上颜色

  if (isUnderLine) {
    this.page.lines.push(this.line.common.renderUnderline.call(this, item, {}));
  } // 收缩不绘制子元素


  if (item.data.shrink || item.children.length < 1) {
    return item;
  }

  var startPos = {
    x: item.x + item.contentRect.width / 2,
    y: item.y + (direction === 'bottom' ? item.contentRect.height : 0)
  };
  var middle = {
    x: startPos.x,
    y: startPos.y + (direction === 'bottom' ? spaceY / 2 : -spaceY / 2)
  };
  var lineData = {
    path: [],
    color: item.getColor()
  };
  lineData.path.push(_objectSpread(_objectSpread({}, startPos), {}, {
    name: 'middle',
    type: "moveTo"
  }), middle);
  this.page.lines.push(lineData); // 绘制右边子节点的连接线

  item.children.forEach(function (child, index) {
    var x = child.x + child.contentRect.width / 2,
        y = startPos.y + (direction === 'bottom' ? spaceY : -spaceY);
    var lineData = {
      path: [],
      name: 'connect',
      color: child.getColor()
    };

    if (index === 0 || index === item.children.length - 1) {
      lineData.path.push(_objectSpread(_objectSpread({}, middle), {}, {
        type: 'moveTo'
      }), {
        y: middle.y,
        x: x
      });
    } else {
      lineData.path.push({
        type: "moveTo",
        x: x,
        y: middle.y
      });
    }

    lineData.path.push({
      x: x,
      y: y
    }); // 箭头

    if (_this.remind.options.showArrow) {
      var arrowData = _this.line.common.renderArrow.call(_this, {
        x: x,
        y: middle.y
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
} // 不得使用箭头函数


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (polyline);

/***/ }),

/***/ 380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function taper(item) {
  var _this = this;

  var direction = this.direction;

  if (item.data.shrink || !item.children.length) {
    return item;
  }

  var itemPos = {
    x: item.x + item.contentRect.width * 0.5,
    y: item.y + item.contentRect.height * 0.5
  };
  var halfThick = this.LINE_THICKNESS / 2;
  item.children.forEach(function (child) {
    var x = child.x + child.contentRect.width * 0.5;
    var y = child.y + (direction !== 'bottom' ? child.contentRect.height : 0);
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
      x1: x,
      y1: (y + itemPos.y) / 2,
      x: x,
      y: y,
      type: "bezier2"
    });
    data.path.push({
      y1: (y + itemPos.y) / 2,
      x1: x,
      x: itemPos.x + dx,
      y: itemPos.y + dy,
      type: "bezier2"
    });

    _this.page.lines.push(data);
  });
} // 不得使用箭头函数


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taper);

/***/ }),

/***/ 607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(156);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var radius = 4;

function bezier(item) {
  var _this = this;

  var spaceX = this.remind.options.tree.spaceX;
  var direction = this.direction;
  var isUnderLine = item.getShape().indexOf('underline') > -1; // 下划线的话给自己底部加上颜色

  if (isUnderLine) {
    this.page.lines.push(this.line.common.renderUnderline.call(this, item, {}));
  }

  if (item.data.shrink || !item.children.length) {
    return item;
  }

  var startPos = {
    x: item.x + (direction === 'right' ? spaceX : item.contentRect.width - spaceX),
    y: item.y + item.contentRect.height
  }; // 直接连接到底部的线

  var lastChild = item.children.slice(-1)[0];
  var lastShape = lastChild.getShape();
  var endY = lastChild.y + lastChild.contentRect.height * (lastShape.indexOf('underline') > -1 ? 1 : 0.5) - radius; //4像素的转角

  var lineData = {
    path: [_objectSpread({
      type: "moveTo"
    }, startPos), {
      x: startPos.x,
      y: endY
    }],
    color: item.getColor()
  };
  this.page.lines.push(lineData);
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

    var data = {
      path: [],
      color: lineData.color
    };
    data.path.push({
      x: startPos.x,
      y: y - radius,
      type: "moveTo"
    });
    data.path.push({
      x1: startPos.x,
      y1: y,
      x: startPos.x + (direction === 'right' ? radius : -radius),
      y: y,
      type: "bezier2"
    });
    data.path.push({
      x: x,
      y: y
    });

    _this.page.lines.push(data);
  });
} // 不得使用箭头函数


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bezier);

/***/ }),

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
___CSS_LOADER_EXPORT___.push([module.id, ".remind.theme-stright {\n  background-color: #f4f9fa;\n}\n.remind.theme-stright .remind-page .shape-ellipse {\n  border-radius: 10px;\n  background-color: #ff383e !important;\n  border: 3px solid #ff8d8f;\n  padding: 20px;\n}\n.remind.theme-stright .remind-page .shape-ellipse .item-text {\n  font-size: 28px;\n}\n.remind.theme-box {\n  background-color: #1f2934;\n}\n.remind.theme-box .remind-scroll .remind-page .shape-ellipse {\n  background-color: #1f2934;\n  border: 3px solid #20a5a1;\n  font-size: 48px;\n  padding: 20px;\n  color: #20a5a1;\n}\n.remind.theme-box .remind-scroll .remind-page .shape-ellipse .item-text {\n  color: #20a5a1;\n  font-size: 28px;\n}\n.remind.theme-box .remind-scroll .remind-page .shape-box {\n  background-color: #20a5a1;\n  color: #000;\n  padding: 10px 20px;\n  border-radius: 10px;\n}\n.remind.theme-box .remind-scroll .remind-page .shape-box > .children .shape-box > .content {\n  background-color: transparent;\n  border: none;\n  color: #20a5a1;\n  padding: 5px;\n  font-size: 22px;\n}\n.remind.theme-box .remind-scroll .remind-page .shape-blank {\n  background-color: transparent;\n  border: none;\n  color: #20a5a1;\n  padding: 5px;\n  font-size: 22px;\n}\n.remind {\n  overflow: scroll;\n  width: 100%;\n  height: 100%;\n  transition: background 400ms ease-out;\n}\n.remind * {\n  box-sizing: border-box;\n}\n.remind ul,\n.remind li {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.remind ul li,\n.remind li li {\n  list-style: none;\n}\n.remind .remind-scroll {\n  position: relative;\n}\n.remind .remind-scroll .remind-page {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.remind .remind-scroll .remind-page .remind-canvas {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.remind .remind-scroll .remind-page .remind-selection {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  display: none;\n  transition: all 100ms ease-out;\n  pointer-events: none;\n}\n.remind .remind-scroll .remind-page .remind-selection:after {\n  transition: all 100ms ease-out;\n  content: ' ';\n  display: block;\n  width: calc(100% + 6px);\n  height: calc(100% + 6px);\n  position: absolute;\n  left: -5px;\n  top: -5px;\n  border: 2px solid blue;\n}\n.remind .remind-scroll .remind-page .remind-item {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 4px 10px;\n  color: #123;\n  border-radius: 3px;\n  cursor: pointer;\n  user-select: none;\n  align-items: center;\n}\n.remind .remind-scroll .remind-page .remind-item::after {\n  content: ' ';\n  z-index: -1;\n  transition: all;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: -4px;\n  left: -4px;\n  padding: 2px;\n  display: none;\n  box-sizing: content-box;\n}\n.remind .remind-scroll .remind-page .remind-item .item-text {\n  display: inline-block;\n  border: none;\n  outline: none;\n  white-space: nowrap;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-icon {\n  display: inline-flex;\n  flex-direction: row-reverse;\n  align-items: center;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-icon > li {\n  font-size: 18px;\n  display: inline-block;\n  margin-left: -5px;\n  width: 24px;\n  height: 24px;\n  background-size: 20px;\n  border: 2px solid #fff;\n  border-radius: 24px;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-icon > li:last-child {\n  margin-left: 0px;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-icon > li:first-child {\n  margin-right: 5px;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-toggle {\n  position: absolute;\n  right: -15px;\n  top: calc(50% - 6px);\n  display: none;\n  cursor: pointer;\n  padding-left: 4px;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-toggle > div {\n  width: 12px;\n  height: 12px;\n  border: 1px solid #4a90e2;\n  border-radius: 6px;\n  text-align: center;\n  display: inline-block;\n  background: #fff;\n  color: black;\n  font-size: 12px;\n  line-height: 8px;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-toggle > .toggle-off {\n  display: block;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-toggle > .toggle-on {\n  display: none;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-toggle:hover {\n  display: block;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-toggle.toggled {\n  display: block;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-toggle.toggled > .toggle-off {\n  display: none;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-toggle.toggled > .toggle-on {\n  display: block;\n}\n.remind .remind-scroll .remind-page .remind-item:hover .remind-toggle {\n  display: block;\n}\n.remind .remind-scroll .remind-page .remind-item:hover::after {\n  border: 2px solid #779ecc;\n  display: block;\n}\n.remind .remind-scroll .remind-page .remind-item.active .remind-toggle {\n  display: block;\n}\n.remind .remind-scroll .remind-page .remind-item.active::after {\n  border: 2px solid #0775f3;\n  display: block;\n}\n.remind .remind-scroll .remind-page .remind-item .item-note::before {\n  content: \"\\1f4dd\";\n}\n.remind .remind-scroll .remind-page .shape-box {\n  background-color: #4a90e2;\n  color: #fff;\n}\n.remind .remind-scroll .remind-page .shape-underline {\n  padding: 4px 5px;\n}\n.remind .remind-scroll .remind-page .shape-ellipse {\n  padding: 10px 10px;\n  color: #fff;\n  background-color: #39ac03;\n}\n.remind .remind-scroll .remind-page .item-ghost {\n  opacity: 0.15;\n}\n.remind .remind-scroll .remind-page .mm-note {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 80px;\n  left: 0px;\n  z-index: 2;\n  background: #fff;\n  transition: opacity, height 300ms ease-in;\n  overflow: hidden;\n  width: 300px;\n  border: 1px solid #efefef;\n  border-radius: 3px;\n  box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.2);\n}\n.remind .remind-scroll .remind-page .mm-note .note-util {\n  height: 30px;\n  width: 100%;\n  border-bottom: 1px solid #efefef;\n  padding-left: 10px;\n  padding-top: 4px;\n}\n.remind .remind-scroll .remind-page .mm-note .note-content {\n  height: 300px;\n  width: 100%;\n  overflow: scroll;\n  outline: none;\n}\n.remind .remind-scroll .remind-page .mm-note .note-content p {\n  white-space: pre-line;\n  padding: 10px;\n  outline: none;\n  height: 300px;\n  width: 100%;\n}\n.remind .remind-scroll .remind-page .mm-note.hide {\n  height: 0;\n  opacity: 0;\n}\n.remind .remind-scroll .menu {\n  outline: none;\n  margin: 0;\n  padding: 5px 0;\n  list-style: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 2;\n  background: #fff;\n  -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  width: 200px;\n}\n.remind .remind-scroll .menu > button {\n  height: 32px;\n  line-height: 32px;\n  padding: 0 20px;\n  color: #666;\n  font-size: 13px;\n  font-weight: 400;\n  cursor: pointer;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  white-space: nowrap;\n  display: block;\n  background-color: transparent;\n  border: none;\n  margin: 0;\n  width: 100%;\n  text-align: left;\n}\n.remind .remind-scroll .menu > button:hover {\n  background: #efefef;\n}\n.remind .remind-scroll .menu span {\n  display: block;\n  border-top: 1px solid #eee;\n  margin-top: 4px;\n  padding-top: 4px;\n}\n", ""]);
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
function _classCallCheck(instance, Constructor) {
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

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(156);
;// CONCATENATED MODULE: ./src/Control/Commands/index.js
var getAllCommands = function getAllCommands(remind) {
  var _isValid = function isValid() {
    if (remind.note.status === "show") {
      return false;
    }

    if (!remind.page.current) {
      return false;
    }

    if (remind.page.editing) {
      return false;
    }

    if (remind.options.readonly) {
      return false;
    }

    return true;
  };

  return [{
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
      remind.fire("item:change", item);
    },
    isValid: function isValid() {
      return remind.page.editing;
    }
  }, {
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
        remind.action.execute('InsertNewItem', item, item.children.length);
      } else {
        var parent = item.parent;
        var index = parent.children.indexOf(item);
        remind.action.execute("InsertNewItem", parent, index + 1);
      }

      if (remind.options.autoEdit) {
        remind.command.execute("Edit");
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
  }, {
    name: "Center",
    keys: [{
      key: 'c'
    }],
    execute: function execute() {
      (remind.page.current || remind.page.root).center();
    }
  }, {
    name: "Save",
    keys: [{
      key: "s",
      ctrlKey: true,
      shiftKey: false
    }, {
      key: "s",
      metaKey: true,
      shiftKey: false
    }],
    prevent: true,
    execute: function execute() {
      console.log('save');
      remind.fire("save");
    }
  }, {
    name: "Undo",
    keys: [{
      key: "z",
      ctrlKey: true,
      shiftKey: false
    }, {
      key: "z",
      metaKey: true,
      shiftKey: false
    }],
    prevent: true,
    execute: function execute() {
      var history = remind.history;
      history.history[history.historyIndex - 1].undo();
      history.historyIndex--;
      remind.fire("undo", history.historyIndex);
    }
  }, {
    name: "Redo",
    keys: [{
      keyCode: "z",
      ctrlKey: true,
      shiftKey: true
    }, {
      keyCode: "z",
      metaKey: true,
      shiftKey: true
    }],
    prevent: true,
    execute: function execute() {
      var history = remind.history;
      history.history[history.historyIndex].perform();
      history.historyIndex++;
      remind.fire("redo", history.historyIndex);
    }
  }];
};

/* harmony default export */ const Control_Commands = (getAllCommands);
;// CONCATENATED MODULE: ./src/Control/Command.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/**
 * @class
 */

var Command = /*#__PURE__*/function () {
  function Command(remind) {
    _classCallCheck(this, Command);

    this.remind = remind;
    var commandMap = {};
    var Commands = Control_Commands(remind);
    Commands.forEach(function (item) {
      var command = _objectSpread({
        isValid: function isValid() {
          return true;
        }
      }, item); // copy，避免多个引用的remind冲突


      commandMap[item.name] = command;
    });
    this.commandMap = commandMap;
  }

  _createClass(Command, [{
    key: "execute",
    value: function execute(name) {
      var command = this.commandMap[name];

      for (var _len = arguments.length, argus = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        argus[_key - 1] = arguments[_key];
      }

      command.execute.apply(command, argus);
    }
  }]);

  return Command;
}();

/* harmony default export */ const Control_Command = (Command);
;// CONCATENATED MODULE: ./src/Control/Keyboard.js


/**
 * @class
 */
var Keyboard = function Keyboard(remind) {
  var _this = this;

  _classCallCheck(this, Keyboard);

  this.init = function () {
    window.addEventListener("keydown", this.onKeyDown);
    window.addEventListener("keypress", this.onKeyDown);
    window.addEventListener("keyup", this.onKeyUp);
  };

  this.destroy = function () {
    window.removeEventListener("keydown", _this.onKeyDown);
    window.removeEventListener("keypress", _this.onKeyDown);
    window.removeEventListener("keyup", _this.onKeyUp);
  };

  this.onKeyUp = function (e) {
    // 同步鼠标状态
    ['shiftKey', 'altKey', 'ctrlKey', 'metaKey'].forEach(function (key) {
      _this[key] = e[key];
    });
  };

  this.onKeyDown = function (e) {
    if (["TEXTAREA", "INPUT"].indexOf(document.activeElement.tagName) > -1 && document.activeElement.className !== "remind-clip") {
      return;
    } // 同步鼠标状态


    ['shiftKey', 'altKey', 'ctrlKey', 'metaKey'].forEach(function (key) {
      _this[key] = e[key];
    }); //只读模式

    if (_this.remind.options.readonly) {
      return;
    }

    var commandMap = _this.remind.command.commandMap;

    for (var key in commandMap) {
      var command = commandMap[key];

      if (!command || !command.isValid()) {
        continue;
      }

      var keys = command.keys;

      for (var j = 0; j < keys.length; j++) {
        if (_this.checkKey(keys[j], e)) {
          command.prevent && e.preventDefault();
          command.execute(e);
          return true;
        }
      }
    }
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
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
;// CONCATENATED MODULE: ./src/View/Nodes/Nodes.js
var _this = undefined;

/* harmony default export */ const Nodes = ({
  nodes: {
    // 支持icon，note的节点
    "default": function _default(item, container) {
      container.innerHTML = '';
      var data = item.data; // 生成icon

      var iconDOM = document.createElement('ul');
      iconDOM.className = 'remind-icon';
      var icon = data.icon;
      var iconList = '';

      for (var key in icon) {
        if (icon[key]) iconList += "<li class=\"mind-icon ".concat(icon[key], "\" data-key=\"").concat(key, "\"></li>");
      }

      iconDOM.innerHTML = iconList;
      item.iconDOM = iconDOM;
      container.appendChild(iconDOM); // 生成text

      var text = document.createElement('div');
      text.className = 'item-text';
      Object.assign(text.style, data.textStyle);
      text.innerHTML = data.text === undefined ? '' : data.text;
      item.textDOM = text;
      container.appendChild(text); // 生成note

      var note = document.createElement('div');
      note.className = 'item-note';
      item.noteDOM = note;
      note.style.display = data.note !== undefined ? 'block' : 'none';
      container.appendChild(note); // 注册样式

      if (data.style) {
        Object.assign(container.style, data.style);
      } // 监听事件


      note.addEventListener("click", function () {
        item.startNote();
      });
      item.textDOM.addEventListener("keydown", item.onKeyDown);
      item.textDOM.addEventListener("blur", item.onBlur);
    },
    ghost: function ghost(item, container) {
      container.innerHTML = '';
      var data = item.data; // 生成text

      var text = document.createElement('div');
      text.className = 'item-text item-ghost';
      text.innerHTML = data.text === undefined ? '' : data.text;
      item.textDOM = text;
      container.appendChild(text);
    }
  },
  registerNode: function registerNode(type, func) {
    _this.nodes[type] = func;
  }
});
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/rng.js
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
// find the complete implementation of crypto (msCrypto) on IE11.
var getRandomValues = typeof crypto != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto != 'undefined' && typeof msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto);
var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

function rng() {
  if (!getRandomValues) {
    throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
  }

  return getRandomValues(rnds8);
}
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/bytesToUuid.js
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex; // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4

  return [bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], '-', bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]], bth[buf[i++]]].join('');
}

/* harmony default export */ const esm_browser_bytesToUuid = (bytesToUuid);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v4.js



function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof options == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }

  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || esm_browser_bytesToUuid(rnds);
}

/* harmony default export */ const esm_browser_v4 = (v4);
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

    _classCallCheck(this, Item);

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

    this.onMouseDown = function (event) {
      if (event.button !== 0) return;
      _this.mouseStartEvent = event;

      _this.remind.remindDOM.addEventListener("mousemove", _this.onMouseMove);
    };

    this.onMouseMove = function (event) {
      if (Math.abs(_this.mouseStartEvent.clientX - event.clientX) > 10) {
        //激活拖拽模式
        event.preventDefault();

        _this.page.dragTool.startDrag(_this.mouseStartEvent, event, _this);

        _this.remind.remindDOM.removeEventListener("mousemove", _this.onMouseMove);
      }
    };

    this.onClick = function (event) {
      event.preventDefault();
      event.stopPropagation();

      _this.remind.remindDOM.removeEventListener("mousemove", _this.onMouseMove);

      _this.page.select(_this);

      _this.remind.fire("item-click", _this);
    };

    this.onContextMenu = function (event) {
      _this.page.select(_this);
    };

    this.onToggleClick = function () {
      _this.remind.fire("item:beforeToggle", _this);

      _this.data.shrink = !_this.data.shrink;

      _this.updateToggle(); // this.page.rememberPosition(this);


      if (!_this.data.shrink) {
        _this.updateVisible(_this.children, true);

        _this.update();
      } else {
        _this.updateVisible(_this.children, false);

        _this.update();
      }

      _this.remind.fire("item:afterToggle", _this);
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

    this.startNote = function () {
      if (!this.data.note) this.data.note = ''; // 把undefind置为空，用来显示note图标
      // 更新

      this.updateContent();
      this.remind.note.show(this);
      this.update();
    };

    this.endNote = function (text) {
      if (text === this.data.note) return;
      this.data.note = text === '' ? undefined : text;

      if (this.data.note === undefined) {
        this.updateContent();
        this.update();
      }
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

  _createClass(Item, [{
    key: "setData",
    value: function setData(data) {
      this.clear();
      this.data = data;

      if (!this.data.uuid) {
        this.data.uuid = esm_browser_v4();
      }

      this.dom = document.createElement('div');
      this.page.dom.appendChild(this.dom);
      this.updateContent();
      this.updateShape();
      this.initToggle();
      this.addEvents();
      this.updateToggle();

      if (this.data.layout) {
        this.setLayout(this.data.layout);
      }

      this.initChildren();
    }
  }, {
    key: "setLayout",
    value: function setLayout(layout) {
      this.data.layout = layout;
      this.layout = this.page.layout[this.data.layout];
    }
  }, {
    key: "getData",
    value: function getData() {
      var children = [];
      this.children.forEach(function (item) {
        children.push(item.getData());
      });
      this.data.children = children;
      return this.data;
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      this.dom.addEventListener("mousedown", this.onMouseDown);
      this.dom.addEventListener("click", this.onClick);
      this.dom.addEventListener("contextmenu", this.onContextMenu);
      this.dom.addEventListener("dblclick", this.onDoubleClick);
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
    key: "updateContent",
    value: function updateContent() {
      var _this$data2 = this.data,
          _this$data2$type = _this$data2.type,
          type = _this$data2$type === void 0 ? 'default' : _this$data2$type,
          active = _this$data2.active;

      try {
        Nodes.nodes[type](this, this.dom);
        delete this.contentRect;
      } catch (e) {
        console.warn("解析节点错误，请检查节点类型是否注册");
        throw e;
      }

      if (active) {
        this.page.select(this);
      }
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
      var recurse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var func = arguments.length > 1 ? arguments[1] : undefined;
      this.children.forEach(function (item) {
        item.updateSubtree(false, func);
      });
      func ? this[func](recurse) : this.update(recurse);
    } // bfs 更新依赖树结构的相关数据和样式

  }, {
    key: "update",
    value: function update() {
      var recurse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.updateShape();
      if (!this.contentRect) this.updateContentRect(); // 避免编辑新增节点初始化时没有contentRect

      this.updateLayout();

      if (recurse) {
        this.parent.update(recurse);
      }
    }
  }, {
    key: "updateData",
    value: function updateData(data) {
      if (data) {
        Object.assign(this.data, data);
      }

      this.updateContent();
      this.update();
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
    key: "updateContentRect",
    value: function updateContentRect() {
      var rect = this.dom.getBoundingClientRect(); // 本体节点rect

      this.contentRect = rect;
    }
  }, {
    key: "updateLine",
    value: function updateLine() {
      var _this$getLayout;

      (_this$getLayout = this.getLayout()) === null || _this$getLayout === void 0 ? void 0 : _this$getLayout.updateLine(this);
    } // dfs

  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      this.updatePosition();
      this.dom.style.display = this.visible ? 'flex' : 'none'; // if(layout.direction === 'left'){
      //     this.dom.style.right = this.page.root.rect.width - this.x - this.contentRect.width + 'px';
      //     this.dom.style.left = 'auto'
      //     this.dom.style.transform = `matrix(1, 0, 0, 1, 0,${this.y})`;
      // }else{

      this.dom.style.left = '0px';
      this.dom.style.transform = "matrix(1, 0, 0, 1, ".concat(this.x, ",").concat(this.y, ")"); // }   

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
      var _this$parent;

      var layout = this.layout || ((_this$parent = this.parent) === null || _this$parent === void 0 ? void 0 : _this$parent.getLayout());
      return layout;
    }
  }, {
    key: "getAutoShape",
    value: function getAutoShape() {
      if (!this.depth) {
        this.depth;
      }

      var theme = this.page.theme;

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
      var theme = this.page.theme;
      return this.data.lineShape || theme.lineShape || "bezier";
    }
  }, {
    key: "getColor",
    value: function getColor(child) {
      if (this.data.color) {
        return this.data.color;
      }

      if (this.isRoot() && child) {
        var index = this.children.indexOf(child);
        var colors = this.page.theme.colors;
        child.data.color = colors[index % colors.length];
        return child.data.color;
      }

      return this.parent.getColor(this);
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
      this.updateContentRect();
      this.update();
    }
  }, {
    key: "center",
    value: function center() {
      var _this$page2 = this.page,
          remindRect = _this$page2.remindRect,
          x = _this$page2.x,
          y = _this$page2.y;
      var pageX = x + this.x;
      var pageY = y + this.y;
      this.remind.controller.translate(pageX + this.contentRect.width / 2 - remindRect.width / 2, pageY + this.contentRect.height / 2 - remindRect.height / 2, true);
    }
  }, {
    key: "select",
    value: function select() {
      this.page.select(this);
    }
  }, {
    key: "index",
    get: function get() {
      return this.parent && this.parent.children ? this.parent.children.indexOf(this) : undefined;
    }
  }, {
    key: "insertChild",
    value: function insertChild(child, index) {
      var ifUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (child.parent) {
        var oldParent = child.parent;
        oldParent.removeChild(child, false);
        oldParent.update(false);
      }

      if (index !== undefined) {
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
      var childrenCopy = _toConsumableArray(this.children);

      childrenCopy.forEach(function (item) {
        item.destroy(false);
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


function bezier_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function bezier_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { bezier_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { bezier_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function bezier(item) {
  var _this = this;

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


function common_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function common_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { common_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { common_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function renderUnderline(item, startPos) {
  var isTop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  startPos.x = item.x + item.contentRect.width;
  startPos.y = !isTop ? item.y : item.y + item.contentRect.height;
  var path = [];
  path.push({
    x: item.x,
    y: startPos.y,
    type: "moveTo"
  });
  path.push({
    x: startPos.x,
    y: startPos.y
  });
  var color = item.getColor();
  return {
    name: "underline",
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
    y: end.y + length * Math.sin(topAngle)
  };
  var bottom = {
    x: end.x + length * Math.cos(bottomAngle),
    y: end.y + length * Math.sin(bottomAngle)
  };
  return {
    path: [common_objectSpread(common_objectSpread({}, top), {}, {
      type: "moveTo"
    }), common_objectSpread({}, end), common_objectSpread({}, bottom)]
  };
}


;// CONCATENATED MODULE: ./src/Layout/Lines/map/polyline.js


function polyline_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function polyline_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { polyline_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { polyline_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function polyline(item) {
  var _this = this;

  var spaceX = this.remind.options.map.spaceX;
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




var Line = {
  map: {
    bezier: map_bezier,
    polyline: map_polyline,
    taper: map_taper
  },
  site: {
    bezier: __webpack_require__(275)/* .default */ .Z,
    polyline: __webpack_require__(133)/* .default */ .Z,
    taper: __webpack_require__(380)/* .default */ .Z
  },
  tree: {
    bezier: __webpack_require__(607)/* .default */ .Z
  },
  fish: {
    root: __webpack_require__(105)/* .default */ .Z,
    item: __webpack_require__(540)/* .default */ .Z
  },
  common: common_namespaceObject
};
/* harmony default export */ const Lines = (Line);
;// CONCATENATED MODULE: ./src/Layout/Map.js




function Map_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Map_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Map_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Map_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var MapLayout = /*#__PURE__*/function () {
  function MapLayout(page) {
    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

    _classCallCheck(this, MapLayout);

    this.LINE_THICKNESS = 8;
    this.name = 'map';
    this.page = page;
    this.line = Map_objectSpread(Map_objectSpread({}, Lines), Lines.map);
    this.remind = page.remind;
    this.direction = direction;
  }

  _createClass(MapLayout, [{
    key: "update",
    value: function update(item) {
      if (this.direction === 'auto') {
        if (!item.isRoot()) {
          // 非根节点的情况，要自适应方向
          var rootSon = item; // 获取儿子节点

          while (!rootSon.parent.isRoot()) {
            rootSon = rootSon.parent;
          } // 把所有rootSon没有方向的都加上方向,这段逻辑只会执行一次，因为有任何一个儿子没方向，都会把全部儿子检查一便


          if (!rootSon.data.side) {
            var left = 0;
            var right = 0;
            rootSon.parent.children.forEach(function (item) {
              if (!item.data.side) {
                item.data.side = right > left ? 'left' : 'right';
              }

              item.data.side === 'right' ? right++ : left++;
            });
          }

          return this.layoutItem(item, rootSon.data.side);
        }

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

      var _this$remind$options$ = this.remind.options.map,
          spaceY = _this$remind$options$.spaceY,
          spaceX = _this$remind$options$.spaceX;
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

        if (child.data.side === 'right') {
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

      var shape = item.getShape();
      var bbox = this.getChildrenBBox(item.children, direction);
      item.childrenBBox = bbox;
      var contentRect = item.contentRect;
      var _this$remind$options$2 = this.remind.options.map.spaceX,
          spaceX = _this$remind$options$2 === void 0 ? 60 : _this$remind$options$2;
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
      var _this$remind$options$3 = this.remind.options.map.spaceY,
          spaceY = _this$remind$options$3 === void 0 ? 5 : _this$remind$options$3;
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
        } // 计算子元素在父容器的相对坐标


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
  }]);

  return MapLayout;
}();

/* harmony default export */ const Map = (MapLayout);
;// CONCATENATED MODULE: ./src/Layout/Tree.js




function Tree_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Tree_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Tree_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Tree_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var TreeLayout = /*#__PURE__*/function () {
  function TreeLayout(page) {
    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'right';

    _classCallCheck(this, TreeLayout);

    this.name = 'tree';
    this.page = page;
    this.line = Tree_objectSpread(Tree_objectSpread({}, Lines), Lines.tree);
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

      this.layoutItem(item, this.direction);
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
      var _this$remind$options$ = this.remind.options.tree,
          _this$remind$options$2 = _this$remind$options$.spaceX,
          spaceX = _this$remind$options$2 === void 0 ? 20 : _this$remind$options$2,
          dx = _this$remind$options$.dx,
          spaceY = _this$remind$options$.spaceY;
      var itemDistanceX = dx + spaceX;
      item.rect = {
        width: Math.max(bbox.width + itemDistanceX, item.contentRect.width),
        height: bbox.height + spaceY + item.contentRect.height
      };
      item.originPos = {
        x: direction === 'right' ? itemDistanceX : item.rect.width - itemDistanceX,
        y: contentRect.height + spaceY
      };
      item.relativePos = {
        x: direction === 'right' ? -itemDistanceX : -(item.contentRect.width - itemDistanceX),
        y: -item.originPos.y
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
      var _this$remind$options$3 = this.remind.options.tree,
          _this$remind$options$4 = _this$remind$options$3.spaceY,
          spaceY = _this$remind$options$4 === void 0 ? 8 : _this$remind$options$4,
          dx = _this$remind$options$3.dx;
      var bbox = {
        width: 0,
        height: 0
      };

      for (var i = 0; i < items.length; i++) {
        var child = items[i];
        var rect = child.rect;

        if (rect.width > bbox.width) {
          bbox.width = rect.width;
        } // 计算子元素在父容器的相对坐标


        child.position = {
          x: direction === 'right' ? 0 : -rect.width,
          y: bbox.height
        };
        bbox.height += rect.height + spaceY; // 让父节点在整个局部范围内垂直居中
      }

      bbox.height -= spaceY;
      return bbox;
    }
  }, {
    key: "updateLine",
    value: function updateLine(item) {
      // 默认用bezier线
      var drawFunction = this.line['bezier'];
      drawFunction.call(this, item);
    }
  }]);

  return TreeLayout;
}();

/* harmony default export */ const Tree = (TreeLayout);
;// CONCATENATED MODULE: ./src/Layout/Site.js




function Site_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Site_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Site_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Site_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var SiteLayout = /*#__PURE__*/function () {
  function SiteLayout(page) {
    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

    _classCallCheck(this, SiteLayout);

    this.LINE_THICKNESS = 8;
    this.name = 'site';
    this.page = page;
    this.line = Site_objectSpread(Site_objectSpread({}, Lines), Lines.site);
    this.remind = page.remind;
    this.direction = direction;
  }

  _createClass(SiteLayout, [{
    key: "update",
    value: function update(item) {
      if (this.direction === 'auto' && item.isRoot()) {
        this.layoutItemRoot(item);
      } else {
        this.layoutItem(item, this.direction);
      }
    }
  }, {
    key: "layoutItemRoot",
    value: function layoutItemRoot(item) {
      var _this = this;

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

      var _this$remind$options$ = this.remind.options.site.spaceY,
          spaceY = _this$remind$options$ === void 0 ? 60 : _this$remind$options$;
      var top = [];
      var bottom = [];
      item.children.forEach(function (child) {
        if (!child.data.side) {
          child.data.side = 'bottom';
        }

        if (child.data.side === 'bottom') {
          child.layout = _this.page.layout['site-bottom'];
          bottom.push(child);
        } else {
          top.push(child);
          child.layout = _this.page.layout['site-top'];
        }
      });
      var contentRect = item.contentRect;
      var topBBox = this.getChildrenBBox(top, 'top');
      top.bbox = topBBox;
      var bottomBBox = this.getChildrenBBox(bottom, 'bottom');
      bottom.bbox = bottomBBox;
      var bigOne, smallOne;

      if (bottomBBox.width > topBBox.width) {
        bigOne = bottom;
        smallOne = top;
      } else {
        smallOne = bottom;
        bigOne = top;
      }

      var disX = (bigOne.bbox.width - smallOne.bbox.width) / 2;
      var disY = (bigOne === top ? 1 : -1) * (spaceY * 2 + contentRect.height);
      smallOne.forEach(function (child) {
        child.position.x += disX;
        child.position.y += disY;
      });
      item.rect = {
        width: Math.max(bigOne.bbox.width, contentRect.width),
        height: topBBox.height + bottomBBox.height + contentRect.height
      };

      if (top.length) {
        item.rect.height += spaceY;
      }

      if (bottom.length) {
        item.rect.height += spaceY;
      }

      item.originPos = {
        x: 0,
        y: bigOne === top ? topBBox.height : item.rect.height - bigOne.bbox.height
      };
      item.relativePos = {
        x: (bigOne.bbox.width - contentRect.width) / 2,
        y: bigOne === top ? spaceY : -spaceY - contentRect.height
      };
      item.topBBox = topBBox;
      item.bottomBBox = bottomBBox;
      item.topChildren = top;
      item.bottomChildren = bottom;
    }
  }, {
    key: "getCenterX",
    value: function getCenterX(children, bbox) {
      var firstChild = children[0];
      var lastChild = children[children.length - 1];
      var firstX = firstChild.contentRect.width * 0.5;
      var lastX = bbox.width - lastChild.contentRect.width * 0.5;
      var centerX = (firstX + lastX) * 0.5;
      return centerX;
    }
    /**
     * 计算出当前item的rect
     * @param {*} item 
     * @param {*} direction 
     */

  }, {
    key: "layoutItem",
    value: function layoutItem(item, direction) {
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

      var bbox = this.getChildrenBBox(item.children, direction);
      item.childrenBBox = bbox;
      var contentRect = item.contentRect;
      var _this$remind$options$2 = this.remind.options.site.spaceY,
          spaceY = _this$remind$options$2 === void 0 ? 60 : _this$remind$options$2; // 原点距离主节点左上角的距离

      var itemDistanceY = direction === 'bottom' ? spaceY + contentRect.height : spaceY;
      item.originPos = {
        x: 0,
        y: direction === 'bottom' ? itemDistanceY : bbox.height
      };
      var centerX = this.getCenterX(item.children, bbox);
      var centerDis = centerX - contentRect.width / 2;

      if (centerDis < 0) {
        item.children.forEach(function (child) {
          return child.position.x -= centerDis;
        }); // 主节点特别大的情况
      }

      item.relativePos = {
        x: centerDis > 0 ? centerDis : 0,
        y: direction === 'bottom' ? -item.originPos.y : spaceY
      };
      item.rect = {
        width: Math.max(contentRect.width + (centerDis > 0 ? centerDis : 0), bbox.width + (centerDis < 0 ? -centerDis : 0)),
        // 子节点需要便宜的时候bbox的宽度会变多
        height: bbox.height + spaceY + contentRect.height
      };
    }
    /**
     * 以资源所第一个的左上角为原点建立相对坐标系
     * |————————> x
     * |[0,0] [width1,0] [width2,0] 
     * @param {*} items
     */

  }, {
    key: "getChildrenBBox",
    value: function getChildrenBBox(items) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'bottom';
      var _this$remind$options$3 = this.remind.options.site.spaceX,
          spaceX = _this$remind$options$3 === void 0 ? 5 : _this$remind$options$3;
      var bbox = {
        width: 0,
        height: 0
      };

      for (var i = 0; i < items.length; i++) {
        var child = items[i];
        var rect = child.rect,
            relativePos = child.relativePos,
            contentRect = child.contentRect;

        if (rect.height > bbox.height) {
          bbox.height = rect.height;
        } // 计算子元素在父容器的相对坐标


        child.position = {
          x: bbox.width,
          y: direction === 'bottom' ? 0 : -rect.height
        };
        bbox.width += Math.max(rect.width, relativePos.x * 2 + contentRect.width) + spaceX; // 让父节点在整个局部范围内垂直居中
      }

      bbox.width -= spaceX;
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

      if (item.isRoot() && this.direction === 'auto') {
        var children = item.children;

        if (item.topBBox.width > 0) {
          this.direction = 'top';
          item.children = item.topChildren;
          drawFunction.call(this, item);
        }

        if (item.bottomBBox.width > 0) {
          this.direction = 'bottom';
          item.children = item.bottomChildren;
          drawFunction.call(this, item);
        }

        item.children = children;
        this.direction = 'auto';
      } else {
        drawFunction.call(this, item);
      }
    }
  }]);

  return SiteLayout;
}();

/* harmony default export */ const Site = (SiteLayout);
;// CONCATENATED MODULE: ./src/Layout/Fish.js




function Fish_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Fish_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Fish_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Fish_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var FishLayout = /*#__PURE__*/function () {
  function FishLayout(page) {
    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'right';

    _classCallCheck(this, FishLayout);

    this.LINE_THICKNESS = 8;
    this.name = 'fish';
    this.page = page;
    this.line = Fish_objectSpread(Fish_objectSpread({}, Lines), Lines.fish);
    this.remind = page.remind;
    this.direction = direction;
  }

  _createClass(FishLayout, [{
    key: "update",
    value: function update(item) {
      if (item.isRoot()) {
        return this.layoutRoot(item, this.direction);
      }

      if (item.depth % 2 === 1) {
        this.layoutVerticalItem(item, this.direction);
      } else {
        this.layoutHorizonalItem(item, this.direction);
      }
    }
  }, {
    key: "layoutRoot",
    value: function layoutRoot(item, direction) {
      var _this$remind$options$ = this.remind.options.fish,
          _this$remind$options$2 = _this$remind$options$.minFishWidth,
          minFishWidth = _this$remind$options$2 === void 0 ? 200 : _this$remind$options$2,
          _this$remind$options$3 = _this$remind$options$.minFishHeight,
          minFishHeight = _this$remind$options$3 === void 0 ? 50 : _this$remind$options$3,
          _this$remind$options$4 = _this$remind$options$.fishTailWidth,
          fishTailWidth = _this$remind$options$4 === void 0 ? 50 : _this$remind$options$4,
          _this$remind$options$5 = _this$remind$options$.headGap,
          headGap = _this$remind$options$5 === void 0 ? 50 : _this$remind$options$5;
      var contentRect = item.contentRect;

      if (!item.children || item.children.length < 1 || item.data.shrink) {
        // 已经是最后一级的情况,容器bbox和item bbox相同
        item.rect = {
          width: contentRect.width + minFishWidth + fishTailWidth,
          height: Math.max(contentRect.height, minFishHeight)
        };
        item.originPos = {
          x: 0,
          y: 0
        };
        item.relativePos = {
          x: direction === 'right' ? item.rect.width - contentRect.width : contentRect.width,
          y: (item.rect.height - contentRect.height) / 2
        };
        return false;
      }

      var bbox = this.getRootChildrenBBox(item.children, direction);
      item.rect = {
        width: Math.max(minFishWidth, bbox.width + headGap) + contentRect.width + fishTailWidth,
        height: Math.max(contentRect.height / 2, minFishHeight / 2, bbox.topHeight) + Math.max(bbox.bottomHeight, minFishHeight / 2, contentRect.height / 2)
      };
      item.relativePos = {
        x: direction === "right" ? headGap : -(headGap + contentRect.width),
        y: -contentRect.height / 2
      };
      item.originPos = {
        x: direction === 'right' ? item.rect.width - headGap - contentRect.width : headGap + contentRect.width,
        y: bbox.topHeight
      };
      item.childrenBBox = bbox;
      return;
    }
  }, {
    key: "isTop",
    value: function isTop(item) {
      var parent = item;

      while (!parent.parent.isRoot()) {
        parent = parent.parent;
      }

      if (parent.data.side) {
        return parent.data.side === 'top';
      }

      var children = parent.parent.children;
      var top = 0,
          bottom = 0;
      children.forEach(function (child) {
        if (child.data.side) {
          child.data.side === 'top' ? top++ : bottom++;
        } else {
          if (top > bottom) {
            bottom++;
            child.data.side = 'bottom';
          } else {
            top++;
            child.data.side = 'top';
          }
        }
      });
      return parent.data.side === 'top';
    }
    /**
     * 计算出当前item的rect
     * @param {*} item 
     * @param {*} direction 
     */

  }, {
    key: "layoutVerticalItem",
    value: function layoutVerticalItem(item, direction) {
      var _this$remind$options$6 = this.remind.options.fish,
          angle = _this$remind$options$6.angle,
          _this$remind$options$7 = _this$remind$options$6.one,
          _this$remind$options$8 = _this$remind$options$7.headGap,
          headGap = _this$remind$options$8 === void 0 ? 50 : _this$remind$options$8,
          _this$remind$options$9 = _this$remind$options$7.tailGap,
          tailGap = _this$remind$options$9 === void 0 ? 10 : _this$remind$options$9;
      var isTop = this.isTop(item);
      var bbox = this.getVerticalChildrenBBox(item.children, direction, isTop, item);
      var contentRect = item.contentRect;
      var k = Math.tan(angle);
      item.childrenBBox = bbox;
      item.relativePos = {
        x: direction === 'right' ? -(headGap / k + contentRect.width / 2) : headGap / k - contentRect.width / 2,
        y: isTop ? -(contentRect.height + headGap) : headGap
      };
      var maxRight = Math.max((bbox.height + tailGap + headGap) / k, contentRect.width / 2);
      var maxLeft = Math.max(bbox.maxDisWidth - headGap / k, contentRect.width / 2);
      item.rect = {
        // 右，左部分相加
        width: maxLeft + maxRight,
        height: contentRect.height + bbox.height + headGap + tailGap
      };
      item.originPos = {
        x: direction === 'right' ? maxLeft + headGap / k : maxRight - headGap / k,
        y: isTop ? contentRect.height + headGap : bbox.height + tailGap
      };
    }
  }, {
    key: "layoutHorizonalItem",
    value: function layoutHorizonalItem(item, direction) {
      var _this$remind$options$10 = this.remind.options.fish.other,
          headGap = _this$remind$options$10.headGap,
          tailGap = _this$remind$options$10.tailGap;
      var bbox = this.getHorizonalChildrenBBox(item.children, direction);
      var isTop = this.isTop(item);
      var contentRect = item.contentRect;
      var shape = item.getShape();
      var isUnderLine = shape.indexOf("underline") > -1;
      item.childrenBBox = bbox;
      item.relativePos = {
        x: direction === 'right' ? -(headGap + contentRect.width) : headGap,
        y: isTop ? -contentRect.height * (isUnderLine ? 1 : 0.5) : isUnderLine ? 0 : -0.5 * contentRect.height
      };
      item.rect = {
        width: bbox.width + tailGap + headGap + contentRect.width,
        height: Math.max(contentRect.height * (isUnderLine ? 0 : 0.5) + bbox.height, contentRect.height)
      };
      item.originPos = {
        x: direction === 'right' ? contentRect.width + headGap : bbox.width + tailGap,
        y: isTop ? item.rect.height - contentRect.height * (isUnderLine ? 0 : 0.5) : isUnderLine ? 0 : contentRect.height / 2
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
    key: "getRootChildrenBBox",
    value: function getRootChildrenBBox(items) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'right';
      var _this$remind$options$11 = this.remind.options.fish,
          _this$remind$options$12 = _this$remind$options$11.root.spaceX,
          spaceX = _this$remind$options$12 === void 0 ? 5 : _this$remind$options$12,
          _this$remind$options$13 = _this$remind$options$11.bottomLineDis,
          bottomLineDis = _this$remind$options$13 === void 0 ? 10 : _this$remind$options$13;
      var top = {
        width: 0,
        height: 0,
        children: []
      };
      var bottom = {
        width: 0,
        height: 0,
        children: []
      };
      var bbox = {
        width: 0,
        height: 0
      };
      items.forEach(function (item, i) {
        if (item.data.side) {
          if (item.data.side === "top") {
            top.children.push(item);
          } else {
            bottom.children.push(item);
          }
        } else {
          top.length > bottom.length ? bottom.children.push(item) : top.children.push(item);
        }
      });
      var helfLength = Math.max(top.children.length, bottom.children.length);

      for (var i = 0; i < helfLength; i++) {
        var topItem = top.children[i];
        var bottomItem = bottom.children[i];
        var width = 0;

        if (!bottomItem) {
          width = topItem.rect.width;
        } else if (!topItem) {
          width = bottomItem.rect.width;
        } else {
          width = Math.max(topItem.rect.width, bottomItem.rect.width + Math.abs(bottomLineDis));
        }

        if (topItem) {
          topItem.position = {
            x: direction === 'right' ? -(bbox.width + topItem.rect.width) : bbox.width,
            y: -topItem.rect.height
          };
          top.height = Math.max(top.height, topItem.rect.height);
          topItem.data.side = 'top';
        }

        if (bottomItem) {
          bottomItem.position = {
            x: direction === 'right' ? -(bbox.width + bottomItem.rect.width + bottomLineDis) : bbox.width + bottomLineDis,
            y: 0
          };
          bottomItem.data.side = 'bottom';
          bottom.height = Math.max(bottom.height, bottomItem.rect.height);
        }

        bbox.width += width + spaceX;
      }

      bbox.bottomHeight = bottom.height;
      bbox.topHeight = top.height;
      bbox.height = top.height + bottom.height;
      return bbox;
    } // 原点位置调整

  }, {
    key: "getVerticalChildrenBBox",
    value: function getVerticalChildrenBBox(items) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'right';
      var isTop = arguments.length > 2 ? arguments[2] : undefined;
      var parent = arguments.length > 3 ? arguments[3] : undefined;
      var _this$remind$options$14 = this.remind.options.fish,
          _this$remind$options$15 = _this$remind$options$14.one,
          _this$remind$options$16 = _this$remind$options$15.spaceY,
          spaceY = _this$remind$options$16 === void 0 ? 8 : _this$remind$options$16,
          minLength = _this$remind$options$15.minLength,
          _this$remind$options$17 = _this$remind$options$14.other,
          otherMinLength = _this$remind$options$17.minLength,
          otherSpaceY = _this$remind$options$17.spaceY,
          angle = _this$remind$options$14.angle;
      var bbox = {
        width: 0,
        height: 0,
        maxDisWidth: 0
      };
      var isOne = parent.depth === 1;
      var k = Math.tan(angle);
      var space = isOne ? spaceY : otherSpaceY;

      for (var i = 0; i < items.length; i++) {
        var child = items[i];
        var rect = child.rect; // 计算子元素在父容器的相对坐标

        var x = bbox.height / k;
        bbox.maxDisWidth = Math.max(rect.width - x, bbox.maxDisWidth);
        child.position = {
          x: direction === 'left' ? -x : x - rect.width,
          y: isTop ? bbox.height : -bbox.height - rect.height
        };
        bbox.height += rect.height + space;
      }

      bbox.width = bbox.maxDisWidth + bbox.height / k;
      bbox.height -= space;
      bbox.height = Math.max(bbox.height, (isOne ? minLength : otherMinLength) * Math.cos(angle));
      return bbox;
    }
  }, {
    key: "getHorizonalChildrenBBox",
    value: function getHorizonalChildrenBBox(items) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'right';
      var _this$remind$options$18 = this.remind.options.fish,
          _this$remind$options$19 = _this$remind$options$18.other,
          _this$remind$options$20 = _this$remind$options$19.spaceX,
          spaceX = _this$remind$options$20 === void 0 ? 8 : _this$remind$options$20,
          _this$remind$options$21 = _this$remind$options$19.minLength,
          minLength = _this$remind$options$21 === void 0 ? 100 : _this$remind$options$21,
          angle = _this$remind$options$18.angle;
      var bbox = {
        width: 0,
        height: 0
      };

      for (var i = 0; i < items.length; i++) {
        var child = items[i];
        var rect = child.rect;
        bbox.height = Math.max(rect.height, bbox.height); // 计算子元素在父容器的相对坐标

        var isTop = this.isTop(child);
        child.position = {
          x: direction === 'right' ? bbox.width : -(bbox.width + child.contentRect.width),
          y: isTop ? -rect.height : 0
        };
        bbox.width += spaceX + rect.width;
      }

      bbox.width -= spaceX;
      return bbox;
    }
  }, {
    key: "updateLine",
    value: function updateLine(item) {
      if (item.isRoot()) {
        this.line.root.call(this, item);
      } else {
        this.line.item.call(this, item);
      }
    }
  }, {
    key: "center",
    value: function center() {
      var _this$page = this.page,
          remindRect = _this$page.remindRect,
          x = _this$page.x,
          y = _this$page.y,
          root = _this$page.root;
      var pageX = x + root.rect.width / 2;
      var pageY = y + root.rect.height / 2;
      this.remind.controller.translate(pageX - remindRect.width / 2, pageY - remindRect.height / 2, true);
    }
  }]);

  return FishLayout;
}();

/* harmony default export */ const Fish = (FishLayout);
;// CONCATENATED MODULE: ./src/Layout/index.js





;// CONCATENATED MODULE: ./src/View/Theme.js
var theme = {
  themes: {
    "default": {
      main: "ellipse",
      second: "box",
      className: "default",
      node: "underline",
      lineShape: "taper",
      lineShape2: "bezier",
      colors: ['#fec936', '#f88b15', '#fe7e4d', '#ec6d7a', '#ef3224', '#9bc039', '#67c97e', '#00a7cd', '#40b5c6', '#2da4ff', '#956fe7', '#882e99', '#FF84BA']
    },
    stright: {
      main: "ellipse",
      second: "underline",
      className: "stright",
      node: "underline",
      lineShape: "polyline",
      lineShape2: "bezier",
      colors: ['#fec936', '#f88b15', '#fe7e4d', '#ec6d7a', '#ef3224', '#9bc039', '#67c97e', '#00a7cd', '#40b5c6', '#2da4ff', '#956fe7', '#882e99', '#FF84BA']
    },
    box: {
      main: "ellipse",
      second: "box",
      className: "box",
      node: "blank",
      lineShape: "taper",
      lineShape2: "bezier",
      colors: ["#5bd4ff", "#38b2ff", "#2589e5", "#1579b5"]
    }
  },
  registe: function registe(name, options) {
    theme.themes[name] = Object.assign({}, theme.themes["default"], {
      className: name
    }, options);
  }
};
/* harmony default export */ const Theme = (theme);
;// CONCATENATED MODULE: ./src/Model/DragTool.js




function DragTool_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function DragTool_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { DragTool_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { DragTool_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var DragTool = /*#__PURE__*/function () {
  function DragTool(page) {
    var _this = this;

    _classCallCheck(this, DragTool);

    this.startDrag = function (startEvent, event, item) {
      if (item.isRoot()) return;
      _this.startEvent = startEvent;
      _this.item = item;
      item.updateVisible(item.children, false);
      item.update();
      item.parent.removeChild(item);
      item.dom.style.opacity = 0.5;
      _this.pageStartPos = {
        x: _this.page.x,
        y: _this.page.y
      };
      _this.ghost.visible = true;
      _this.ghost.data.text = item.data.text;

      _this.ghost.updateContent();

      _this.ghost.render();

      _this.page.dom.addEventListener("mousemove", _this.onDragMove);

      window.addEventListener("mouseup", _this.onDrop);
    };

    this.onDragMove = function (e) {
      e.preventDefault();
      if (_this.timeout) return;
      var item = _this.item;
      var x = e.layerX - _this.page.x;
      var y = e.layerY - _this.page.y;
      _this.item.dom.style.transform = "matrix(1, 0, 0, 1, ".concat(x - item.contentRect.width / 2, ",").concat(y - item.contentRect.height / 2, ")");

      var closetItem = _this.findDropItem(x, y);

      if (!closetItem || closetItem.data.type === 'ghost' || closetItem.isRoot()) {
        return;
      } // 计算父容器和序号


      var layout = closetItem.getLayout();
      var direction = closetItem.data.side || layout.direction;
      var index = closetItem.index;
      var parent = closetItem.parent;

      if (direction === 'right' || direction === 'left') {
        var shape = closetItem.getShape();
        var isUnderline = shape.indexOf("underline") > -1;

        if (x > closetItem.x + closetItem.contentRect.width && direction === 'right' || x < closetItem.x && direction === 'left') {
          parent = closetItem;
          index = 0;
        } else {
          if (y > closetItem.y + closetItem.contentRect.height * (isUnderline ? 1 : 0.5)) {
            index++;
          }
        }
      } else {
        if (y > closetItem.y + closetItem.contentRect.height && direction === 'bottom' || y < closetItem.y && direction === 'top') {
          parent = closetItem;
          index = 0;
        } else if (x > closetItem.x + closetItem.contentRect.width / 2) {
          index++;
        }
      }

      if (_this.ghost.parent === parent && _this.ghost.index < index) {
        index--;
      }

      parent.insertChild(_this.ghost, index, true);
      _this.parent = parent;
      _this.index = index;
      _this.timeout = 1;
      setTimeout(function () {
        _this.timeout = undefined; //拖动改成30帧
      }, 30);
    };

    this.onDrop = function (e) {
      _this.item.dom.style.opacity = 1;

      _this.ghost.parent.removeChild(_this.ghost);

      _this.ghost.visible = false;

      _this.ghost.render();

      _this.item.updateVisible(_this.item.children, true);

      _this.parent.insertChild(_this.item, _this.index);

      _this.item = undefined;
      _this.parent = undefined;
      _this.index = undefined;

      _this.page.dom.removeEventListener("mousemove", _this.onDragMove);

      window.removeEventListener("mouseup", _this.onDrop);
    };

    this.page = page;
    this.initGhost(); //初始化一个用来拖拽的GhostItem
  }

  _createClass(DragTool, [{
    key: "initGhost",
    value: function initGhost() {
      this.ghost = new View_Item(this.page, {
        data: {
          text: 'ghost',
          type: "ghost"
        },
        visible: false
      });
      this.ghost.render();
    }
  }, {
    key: "findDropItem",
    value:
    /**
     * 通过坐标找到需要插入的父节点和位置
     * 判断坐标是否在item.childrenBBox中来确定是否要下钻到下一级
     * @param {*}} x 
     * @param {*} y 
     * @returns 
     */
    function findDropItem(x, y) {
      var _this2 = this;

      var page = this.page;
      var closetItem,
          minDistance = Infinity,
          direction,
          res;

      var dfs = function dfs(item) {
        // 元素中心点
        var center = {
          x: item.x + item.contentRect.width / 2,
          y: item.y + item.contentRect.height / 2
        }; // 是否在元素内部

        if (_this2.isInBBox(x, y, DragTool_objectSpread(DragTool_objectSpread({}, item.contentRect), {}, {
          x: item.x,
          y: item.y
        }))) {
          res = true;
          closetItem = item; //在元素内部则直接就是它了

          return true;
        }

        var distance = Math.pow(x - center.x, 2) + Math.pow(y - center.y, 2);

        if (distance <= minDistance) {
          minDistance = distance;
          closetItem = item;
        }

        for (var i = 0; i < item.children.length; i++) {
          var child = item.children[i];

          if (!res) {
            dfs(child);
          }
        }
      };

      dfs(page.root);
      return closetItem;
    }
  }, {
    key: "isInBBox",
    value: function isInBBox(x, y, bbox) {
      if (x > bbox.x && x < bbox.x + bbox.width && y > bbox.y && y < bbox.y + bbox.height) {
        return true;
      }

      return false;
    } // 重新挂载父节点

  }, {
    key: "moveDragItem",
    value: function moveDragItem() {}
  }]);

  return DragTool;
}();

/* harmony default export */ const Model_DragTool = (DragTool);
;// CONCATENATED MODULE: ./src/Model/Page.js




var _excluded = ["root"];

function Page_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Page_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Page_ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Page_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Page = /*#__PURE__*/function () {
  function Page(remind) {
    _classCallCheck(this, Page);

    this.lines = [];
    this.x = 0;
    this.y = 0;
    this.paths = [];
    this.remind = remind;
    this.page = remind.page;
    this.options = remind.options;
    this.root = null;
    this.visible = false;
    this.position = [0, 0];
    this.controller = remind.controller;
    this.initDOM();
    this.initLayout();
    this.initCanvas();

    if (this.options.data) {
      this.setData(this.options.data);
    } else {
      this.setData({
        root: {
          text: 'Root',
          layout: 'map',
          children: []
        }
      });
    } // 延时进行操作


    this.asyncShow();
    this.dragTool = new Model_DragTool(this);
  }

  _createClass(Page, [{
    key: "asyncShow",
    value: function asyncShow() {
      var _this = this;

      requestAnimationFrame(function () {
        _this.show();
      });
    }
  }, {
    key: "initLayout",
    value: function initLayout() {
      this.layout = {
        map: new Map(this),
        'map-right': new Map(this, 'right'),
        'map-left': new Map(this, 'left'),
        site: new Site(this),
        'site-bottom': new Site(this, 'bottom'),
        'site-top': new Site(this, 'top'),
        'tree-right': new Tree(this, 'right'),
        'tree-left': new Tree(this, 'left'),
        'fish-right': new Fish(this, 'right'),
        'fish-left': new Fish(this, 'left')
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
      this.data = data;
      this.setTheme(data.theme);
      var root = new View_Item(this, {
        depth: 0
      });
      root.setData(data.root);
      this.root = root;
      this.root.parent = this;
    }
  }, {
    key: "updateContainerStyle",
    value: function updateContainerStyle() {
      if (this.data.style) Object.assign(this.remind.remindDOM.style, this.data.style);
    }
  }, {
    key: "setTheme",
    value: function setTheme() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
      this.theme = Theme.themes[value];
      this.remind.remindDOM.className = "remind theme-".concat(value);
      this.data.theme = value;
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
      this.current.data.active = true;
      this.current.dom.classList.add('active');
      this.remind.fire("item:select");
    }
  }, {
    key: "deselect",
    value: function deselect() {
      if (!this.current) return;
      this.current.dom.classList.remove('active');
      delete this.current.data.active;
      this.current = undefined;
      this.remind.fire("item:deselect");
    }
  }, {
    key: "getColor",
    value: function getColor() {
      var colors = this.theme.colors;
      return '#999';
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var _this$data = this.data,
          root = _this$data.root,
          others = _objectWithoutProperties(_this$data, _excluded);

      var data = Page_objectSpread({
        root: this.root.getData()
      }, others);

      return data;
    }
  }, {
    key: "show",
    value: function show() {
      this.updateSubtree(false); // 统一更新

      this.update();
      this.select(this.root);
      this.center();
      return this;
    }
  }, {
    key: "center",
    value: function center() {
      if (this.current !== this.root) {
        return this.current.center();
      }

      if (this.root.getLayout().name === "fish") {
        this.root.getLayout().center();
      } else {
        this.root.center();
      }
    } // 更新节点树信息

  }, {
    key: "updateSubtree",
    value: function updateSubtree(func) {
      this.root.updateSubtree(false, func);
    } // 渲染

  }, {
    key: "update",
    value: function update() {
      this.lines = [];
      this.remember();
      this.updateRootWidth();
      this.render();
      this.refuse();
    }
  }, {
    key: "remember",
    value: function remember() {
      var item = this.current;

      if (item) {
        this.oldPosition = {
          item: item,
          x: this.x + item.x,
          y: this.y + item.y
        };
      } else {
        this.oldPosition = undefined;
      }
    }
  }, {
    key: "refuse",
    value: function refuse() {
      if (this.current) {
        this.select(this.current);
      }

      if (!this.oldPosition) return;
      var _this$oldPosition = this.oldPosition,
          x = _this$oldPosition.x,
          y = _this$oldPosition.y,
          item = _this$oldPosition.item;
      var scrollLeft = this.controller.x + (this.x + item.x - x);
      var scrollTop = this.controller.y + (this.y + item.y - y); // 拯救scroll不能取小数的偏移

      var disX = scrollLeft - Math.floor(scrollLeft);
      var disY = scrollTop - Math.floor(scrollTop);
      this.x -= disX;
      this.y -= disY;
      this.controller.translate(Math.floor(scrollLeft), Math.floor(scrollTop));
      return this.oldPosition = undefined;
    } // 更新根节点宽高

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
      this.x = this.scrollLeft + (remindRect.width - rect.width) / 2;
      this.y = this.scrollTop + (remindRect.height - rect.height) / 2;
      /**
       * 最外层容器的rect
       * @var 
       */

      this.remindRect = remindRect; // 让root居中

      this.dom.style.transform = "matrix(1, 0, 0, 1, ".concat(this.x, ",").concat(this.y, ")");
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
    key: "getByEvent",
    value: function getByEvent(e) {
      var item = e.target;

      while (item && item.className.indexOf("remind-item") === -1) {
        item = item.parent;
      }

      if (!item) return false;
      var res;

      var dfs = function dfs(items) {
        if (res) return;

        for (var i = 0; i < items.length; i++) {
          if (items[i].dom === item) {
            res = items[i];
            break;
          }

          dfs(items[i].children);
        }
      };

      dfs([this.root]);
      return res;
    }
  }, {
    key: "getItemByUUID",
    value: function getItemByUUID(uuid) {
      var res;

      function dfs(now) {
        if (now.data.uuid === uuid) {
          res = now;
          return;
        } else {
          now.children.forEach(function (child) {
            !res && dfs(child);
          });
        }
      }

      dfs(this.root);
      return res;
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
    this._oldLayout = item.data.layout;
  };

  Action.SetLayout.prototype = Object.create(Action.prototype);

  Action.SetLayout.prototype.perform = function () {
    this._item.setLayout(this._layout);

    remind.page.remember(this._item);

    this._item.updateSubtree();
  };

  Action.SetLayout.prototype.undo = function () {
    this._item.setLayout(this._oldLayout);

    remind.page.remember(this._item);

    this._item.updateSubtree();
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
    remind.page.select(this.item);
  };

  Action.SetText.prototype.undo = function () {
    this.item.setText(this.oldText);
    remind.page.select(this.item);
  };

  Action.SetIcon = function (item, icon, type) {
    this._item = item;

    if (icon) {
      this._icon = Object.assign({}, item._icon, (0,defineProperty/* default */.Z)({}, type, icon));
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
    _classCallCheck(this, Action);

    this.remind = remind;
    this.actions = Actions(remind);
  }

  _createClass(Action, [{
    key: "execute",
    value: function execute(name) {
      var ActionConstructor = this.actions[name];
      if (!ActionConstructor) return console.warn("没有该actin:", name);

      for (var _len = arguments.length, others = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        others[_key - 1] = arguments[_key];
      }

      var action = _construct(ActionConstructor, others);

      this.remind.history.action(action);
      this.remind.fire("change", action);
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
;// CONCATENATED MODULE: ./src/View/Menu.js



/**
 * @class
 */
var Menu = /*#__PURE__*/function () {
  function Menu(_remind) {
    var _this = this;

    _classCallCheck(this, Menu);

    this.init = function (remind) {
      this.remind = remind;
      this.options = remind.options;
      this.initMenu(this.options.menuDOM);
      this.dom.addEventListener("click", this.onClick);
      this.remind.dom.addEventListener("click", this.onClick);
      this.remind.dom.addEventListener("contextmenu", this.onShow);
      this.close();
    };

    this.initMenu = function (dom) {
      if (dom) {
        dom.className += "menu";
        this.remind.dom.appendChild(dom);
        this.dom = dom;
        return;
      }

      var _menu = document.createElement("div");

      _menu.className = "menu";
      _menu.innerHTML = "\n\t\t\t<button data-command=\"InsertChild\">\u63D2\u5165\u8282\u70B9</button>\n\t\t\t<button data-command=\"InsertSibling\">\u63D2\u5165\u540C\u7EA7</button>\n\t\t\t<button data-command=\"Delete\">\u5220\u9664</button>\n\t\t\t<button data-command=\"DeleteIcon\" style=\"display:none\">\u5220\u9664\u56FE\u6807</button>\n\t\t\t<span></span>\n\t\t\t<button data-command=\"Edit\">\u7F16\u8F91</button>\n\t\t\t<span></span>\n\t\t\t<button data-command=\"Undo\">\u64A4\u9500</button>\n\t\t\t<button data-command=\"Redo\">\u91CD\u505A</button>\n\t\t\t<button data-command=\"Center\">\u5C45\u4E2D</button>\n\t\t";
      this.remind.dom.appendChild(_menu);
      this.dom = _menu;
      return _menu;
    };

    this.onShow = function (e) {
      e.preventDefault(); // const item = this.remind.page.getByEvent(e);
      // if(item){
      // const {x,y} = item.dom.getBoundingClientRect();

      _this.open(e.layerX, e.layerY, e.target); // }

    };

    this.onClick = function (e) {
      if (e.currentTarget !== _this.dom) {
        _this.close();

        return;
      }

      e.stopPropagation();
      e.preventDefault();
      var command = e.target.getAttribute("data-command");

      if (!command) {
        return;
      }

      command = _this.remind.command.execute(command, _this.remind.page.current);

      _this.close();
    };

    this.open = function (x, y, target) {
      this.dom.style.display = 'block';
      this.dom.style.transform = "translate(".concat(x, "px,").concat(y, "px)");
      var iconCommand = this.dom.querySelector("[data-command=DeleteIcon]");
      if (!iconCommand) return;

      if (target.getAttribute("data-key")) {
        iconCommand.style.display = 'block';
      } else {
        iconCommand.style.display = 'none';
      }
    };

    this.init(_remind);
  }

  _createClass(Menu, [{
    key: "close",
    value: function close() {
      this.dom.style.display = "none";
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.dom.removeEventListener("click", this.onClick);
      this.remind.dom.removeEventListener("click", this.onClick);
      this.remind.dom.removeChild(this.dom);
    }
  }]);

  return Menu;
}();

/* harmony default export */ const View_Menu = (Menu);
;// CONCATENATED MODULE: ./src/Control/History.js



var History = /*#__PURE__*/function () {
  function History(remind) {
    _classCallCheck(this, History);

    this.history = [];
    this.historyIndex = 0;
    this.remind = remind;
  }

  _createClass(History, [{
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
;// CONCATENATED MODULE: ./src/Control/Controller.js



var Controller = /*#__PURE__*/function () {
  function Controller(remind) {
    var _this = this;

    _classCallCheck(this, Controller);

    this.startMove = function (event) {
      _this.status = 'page:move';
      _this.startEvent = event;
      _this.startPos = {
        x: _this.x,
        y: _this.y
      };
      window.document.addEventListener("mouseup", _this.onEndMove);
    };

    this.pageMove = function (e) {
      var pageX = e.pageX,
          pageY = e.pageY;
      var disX = pageX - _this.startEvent.pageX;
      var disY = pageY - _this.startEvent.pageY;
      _this.x = -disX + _this.startPos.x;
      _this.y = -disY + _this.startPos.y;

      _this.update();
    };

    this.onEndMove = function () {
      _this.status = 'normal';
      window.document.removeEventListener("mouseup", _this.onEndMove);
    };

    this.remind = remind;
    this.scale = 1;
    this.x = 0;
    this.y = 0;
    this.stat;
    this.addEvents();
  }

  _createClass(Controller, [{
    key: "addEvents",
    value: function addEvents() {
      var _this2 = this;

      var remindDOM = this.remind.remindDOM;
      remindDOM.addEventListener("mousewheel", function (e) {
        if (e.ctrlKey) {
          // 双指
          e.preventDefault();
          var scale = _this2.scale;
          scale = scale * (1 - e.deltaY / 50);
          if (scale < 0.05 || scale > 10) return;
          _this2.scale = scale;

          _this2.update();

          _this2.remind.fire("zoom", _this2.scale);

          return;
        }
      });
      remindDOM.addEventListener("mousedown", function (e) {
        if (!e.path.find(function (item) {
          return item.tagName === "DIV" && (item.className.indexOf("remind-item") > -1 || item.className.indexOf("mm-note")) > -1;
        })) {
          /* context menu here, after we have the item */
          return _this2.startMove(e);
        }
      });
      remindDOM.addEventListener("mousemove", function (e) {
        if (_this2.status === 'page:move') {
          return _this2.pageMove(e);
        }
      });
      remindDOM.addEventListener("scroll", function () {
        setTimeout(function () {
          _this2.x = remindDOM.scrollLeft;
          _this2.y = remindDOM.scrollTop;
        }, 1);
      });
    }
  }, {
    key: "translate",
    value: function translate(x, y, animate) {
      var _this3 = this;

      if (!animate || !this.x || !this.y) {
        this.x = x;
        this.y = y;
        this.update();
        return;
      }

      var disX = (x - this.x) / 14;
      var disY = (y - this.y) / 14;

      var update = function update() {
        return requestAnimationFrame(function () {
          _this3.x += disX;
          _this3.y += disY;

          if (disX > 0 && _this3.x > x || disX < 0 && _this3.x < x) {
            _this3.x = x;
          }

          if (disY > 0 && _this3.y > y || disY < 0 && _this3.y < y) {
            _this3.y = y;
          }

          _this3.update();

          if (_this3.x !== x || _this3.y !== y) {
            update();
          }
        });
      };

      update();
    }
  }, {
    key: "update",
    value: function update() {
      var scale = this.scale,
          x = this.x,
          y = this.y;
      this.remind.remindDOM.scrollLeft = x;
      this.remind.remindDOM.scrollTop = y;
      var page = this.remind.page;
      page.dom.style.transform = "matrix(".concat(scale, ", 0, 0, ").concat(scale, ", ").concat(page.x, ",").concat(page.y, ")");
    }
  }]);

  return Controller;
}();

/* harmony default export */ const Control_Controller = (Controller);
;// CONCATENATED MODULE: ./src/View/Note.js



var Note = /*#__PURE__*/function () {
  function Note(app) {
    var _this = this;

    _classCallCheck(this, Note);

    this.onOutClick = function (e) {
      if (e.path.indexOf(_this.note) < 0) {
        _this.hide();
      }
    };

    this.remind = app;
    this.initDom();
  }

  _createClass(Note, [{
    key: "initDom",
    value: function initDom() {
      var note = document.createElement("div");
      note.className = "mm-note hide";
      note.innerHTML = "<div class=\"note-util\">\u5907\u6CE8</div><div  class=\"note-content\"><p /></div>";
      this.remind.page.dom.appendChild(note);
      this.note = note;
      this.content = this.note.querySelector(".note-content p");
      this.remind.dom.addEventListener("click", this.onOutClick);
    }
  }, {
    key: "show",
    value: function show(item) {
      var _this2 = this;

      this.status = "show";
      this.note.style.top = item.y + item.contentRect.height + "px";
      this.note.style.left = item.x + "px";
      this.note.className = "mm-note";
      this.content.setAttribute("contenteditable", true);
      this.content.innerHTML = decodeURIComponent(item.data.note || '');
      this.item = item;
      setTimeout(function () {
        var selection = getSelection();
        var range = selection.getRangeAt(0);
        selection.removeAllRanges();
        range.selectNodeContents(_this2.content);
        selection.addRange(range);

        _this2.content.focus();
      }, 100);
    }
  }, {
    key: "hide",
    value: function hide() {
      if (this.status === 'hide') return;
      this.status = "hide";
      this.note.className = "mm-note hide";
      var content = this.content;
      var note = encodeURIComponent(content.innerHTML);
      if (!this.item) return;
      this.item.endNote(note);
      content.innerHTML = "";
      this.remind.fire("item-change", this.item);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.remind.page.dom.removeChild(this.note);
      this.remind = undefined;
      this.item = undefined;
    }
  }]);

  return Note;
}();

/* harmony default export */ const View_Note = (Note);
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

    _classCallCheck(this, Remind);

    this._subscribers = {};

    if (container) {
      return this.init(container, options);
    }
  }
  /**
   * @param  {} container
   * @param  {} options={}
   */


  _createClass(Remind, [{
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
        showArrow: true,
        // 是否显示线的箭头
        renderEngine: 'svg',
        readonly: false,
        site: {
          spaceX: 8,
          spaceY: 60
        },
        map: {
          spaceX: 60,
          spaceY: 8
        },
        tree: {
          spaceX: 20,
          spaceY: 8,
          dx: 10
        },
        fish: {
          minFishWidth: 300,
          minFishHeight: 50,
          fishTailWidth: 50,
          headGap: 50,
          angle: Math.PI / 3,
          root: {
            spaceX: 0,
            minLength: 80
          },
          one: {
            minLength: 80,
            spaceY: 8,
            tailGap: 10,
            headGap: 10
          },
          other: {
            spaceX: 8,
            spaceY: 4,
            tailGap: 5,
            headGap: 10,
            minLength: 0
          }
        }
      }, options);
      this.container = container;
      this.initDOM();
      this.command = new Control_Command(this);
      this.action = new Control_Action(this);
      this.history = new Control_History(this);
      this.menu = new View_Menu(this);
      this.keyboard = new Control_Keyboard(this); // this.clipManager = new ClipManager(this);

      this.controller = new Control_Controller(this);
      this.page = new Model_Page(this);
      this.note = new View_Note(this);
      this.addEvents();
      return this;
    }
  }, {
    key: "deselect",
    value: function deselect() {
      this.current.deselect();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.keyboard.destroy();
      this.page.destroy();
      this.off();
      this.container.removeChild(this.remindDOM);
    }
  }, {
    key: "initDOM",
    value: function initDOM() {
      var remindDOM = document.createElement("div");
      remindDOM.className = " remind";
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