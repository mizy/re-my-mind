(self["webpackChunk_tntx_remind"] = self["webpackChunk_tntx_remind"] || []).push([["main"],{

/***/ "./MindMap/FormatPanel/CanvasEdit.js":
/*!*******************************************!*\
  !*** ./MindMap/FormatPanel/CanvasEdit.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CanvasEdit)
/* harmony export */ });
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/checkbox/style */ "./node_modules/antd/lib/checkbox/style/index.js");
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! antd/lib/checkbox */ "./node_modules/antd/lib/checkbox/index.js");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/modal/style */ "./node_modules/antd/lib/modal/style/index.js");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_upload_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/upload/style */ "./node_modules/antd/lib/upload/style/index.js");
/* harmony import */ var antd_lib_upload_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/lib/upload */ "./node_modules/antd/lib/upload/index.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/icon/style */ "./node_modules/antd/lib/icon/style/index.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/dropdown/style */ "./node_modules/antd/lib/dropdown/style/index.js");
/* harmony import */ var antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/dropdown */ "./node_modules/antd/lib/dropdown/index.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/DeleteOutlined.js");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-color */ "./node_modules/react-color/es/index.js");


















function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var CanvasEdit = /*#__PURE__*/function (_PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__.default)(CanvasEdit, _PureComponent);

  var _super = _createSuper(CanvasEdit);

  function CanvasEdit() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, CanvasEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      fileList: []
    };

    _this.changeBackGroundColor = function (e) {
      var rgb = e.rgb;
      var color = "rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")");

      _this.setState({
        color: color
      });

      _this.app.page.data.style.backgroundColor = color;

      _this.app.page.updateContainerStyle();
    };

    _this.clearBack = function () {
      var color = undefined;

      _this.setState({
        color: color
      });

      _this.app.page.data.style.backgroundColor = null;

      _this.app.page.updateContainerStyle();
    };

    _this.handlePreview = /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11___default().mark(function _callee(file) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setState({
                  previewVisible: true
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.handleCancel = function () {
      _this.setState({
        previewVisible: false
      });
    };

    _this.changeBackUrl = function (info) {
      if (!info.fileList || !info.fileList.length) {
        _this.setState({
          fileList: undefined
        });

        _this.changeStyle("backgroundImage", null);

        return false;
      }

      var interval = setInterval(function () {
        if (info.fileList[0].thumbUrl) {
          clearInterval(interval);

          _this.setState({
            loading: true,
            fileList: info.fileList
          });

          _this.changeStyle("backgroundImage", "url(".concat(info.fileList[0].thumbUrl, ")"));
        }
      }, 30);
    };

    _this.onSizeChange = function (e) {
      _this.setState({
        size: e.target.checked
      });

      _this.changeStyle("backgroundSize", e.target.checked ? "100% 100%" : "auto");
    };

    _this.onRepeatChange = function (e) {
      _this.setState({
        repeat: e.target.checked
      });

      _this.changeStyle("backgroundRepeat", e.target.checked ? "repeat" : "no-repeat");
    };

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__.default)(CanvasEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var imageUrl = this.props.mind.state.backgroundImage;
      this.app = this.props.app;
      var fileList = imageUrl ? [{
        uid: "-1",
        name: "背景",
        url: imageUrl,
        status: "done"
      }] : [];
      this.setState({
        color: this.props.mind.state.backgroundColor,
        fileList: fileList,
        imageUrl: imageUrl,
        repeat: this.props.mind.state.backgroundRepeat === "repeat",
        size: this.props.mind.state.backgroundSize === "100% 100%"
      });

      if (!this.app.page.data.style) {
        this.app.page.data.style = {};
      }
    }
  }, {
    key: "changeStyle",
    value: function changeStyle(key, value) {
      this.app.page.data.style[key] = value;
      this.app.page.updateContainerStyle();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _ref2 = this.state || {},
          color = _ref2.color,
          previewVisible = _ref2.previewVisible,
          previewImage = _ref2.previewImage,
          fileList = _ref2.fileList,
          repeat = _ref2.repeat,
          size = _ref2.size;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(react__WEBPACK_IMPORTED_MODULE_12__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "right-panel-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "panel-title"
      }, "\u80CC\u666F\u8272"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "right-panel-card-children"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_14__.default, {
        trigger: "click",
        overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(react_color__WEBPACK_IMPORTED_MODULE_13__.SketchPicker, {
          color: color,
          onChangeComplete: this.changeBackGroundColor
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "color-pick-demo",
        style: {
          backgroundColor: color
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_15__.default, {
        onClick: this.clearBack,
        style: {
          cursor: "pointer"
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "right-panel-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "panel-title"
      }, "\u80CC\u666F\u56FE\u7247"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "right-panel-card-children"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_upload__WEBPACK_IMPORTED_MODULE_16__.default, {
        name: "avatar",
        listType: "picture-card",
        className: "avatar-uploader",
        fileList: fileList,
        onChange: this.changeBackUrl,
        onPreview: this.handlePreview,
        beforeUpload: function beforeUpload() {
          _this2.setState({
            fileList: undefined
          });

          return false;
        }
      }, (fileList || []).length > 0 ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_17__.default, {
        type: this.state.loading ? "loading" : "plus"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "ant-upload-text"
      }, "\u4E0A\u4F20"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_modal__WEBPACK_IMPORTED_MODULE_18__.default, {
        visible: previewVisible,
        footer: null,
        onCancel: this.handleCancel
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("img", {
        alt: "example",
        style: {
          width: "100%"
        },
        src: fileList && fileList[0] ? fileList[0].url : false
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_19__.default, {
        checked: size,
        onChange: this.onSizeChange
      }, "\u62C9\u4F38"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_19__.default, {
        style: {
          marginLeft: 0
        },
        checked: repeat,
        onChange: this.onRepeatChange
      }, "\u91CD\u590D\u5E73\u94FA")))));
    }
  }]);

  return CanvasEdit;
}(react__WEBPACK_IMPORTED_MODULE_12__.PureComponent);



/***/ }),

/***/ "./MindMap/FormatPanel/ItemStyle.js":
/*!******************************************!*\
  !*** ./MindMap/FormatPanel/ItemStyle.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StyleEdit)
/* harmony export */ });
/* harmony import */ var antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/dropdown/style */ "./node_modules/antd/lib/dropdown/style/index.js");
/* harmony import */ var antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/dropdown */ "./node_modules/antd/lib/dropdown/index.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/select/style */ "./node_modules/antd/lib/select/style/index.js");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-color */ "./node_modules/react-color/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/DeleteOutlined.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_9__.default.Option;
/**
 * 背景样式
 */

var StyleEdit = /*#__PURE__*/function (_PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(StyleEdit, _PureComponent);

  var _super = _createSuper(StyleEdit);

  function StyleEdit() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, StyleEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      color: "#f8f8f8"
    };

    _this.changeBackGroundColor = function (e) {
      var nowItem = _this.props.nowItem;
      var rgb = e.rgb;
      var color = "rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")");

      _this.setState({
        color: color
      });

      if (!nowItem.data.style) {
        nowItem.data.style = {};
      }

      nowItem.data.style.backgroundColor = color;
      nowItem.updateData();
    };

    _this.changeShape = function (value) {
      var nowItem = _this.props.nowItem;
      nowItem.data.shape = value;
      nowItem.update();

      _this.setState({
        shape: value
      });
    };

    _this.clearColor = function () {
      var nowItem = _this.props.nowItem;
      if (nowItem.data.style) delete nowItem.data.style.backgroundColor;
      nowItem.updateData();

      _this.setState({
        color: undefined
      });
    };

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(StyleEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.syncNowItem(this.props.nowItem);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      if (props.nowItem !== this.props.nowItem) {
        this.syncNowItem(props.nowItem);
      }

      return props;
    } // 同步数据

  }, {
    key: "syncNowItem",
    value: function syncNowItem(item) {
      var content = item.dom;
      this.setState({
        color: content.style.backgroundColor || undefined
      });
      this.setState({
        shape: item.getShape()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          color = _this$state.color,
          shape = _this$state.shape;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: "right-panel-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: "panel-title"
      }, "\u5F62\u72B6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: "right-panel-card-children"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_9__.default, {
        style: {
          width: 100,
          marginRight: 20
        },
        placeholder: "\u6837\u5F0F",
        value: shape,
        size: "small",
        onChange: this.changeShape
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(Option, {
        value: "box"
      }, "\u76D2\u5B50"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(Option, {
        value: "underline"
      }, "\u4E0B\u5212\u7EBF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(Option, {
        value: "ellipse"
      }, "\u4E3B\u8282\u70B9")), shape !== "underline" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: "right-panel-card-children"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_10__.default, {
        trigger: "click",
        overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react_color__WEBPACK_IMPORTED_MODULE_8__.SketchPicker, {
          color: color,
          onChangeComplete: this.changeBackGroundColor
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: "color-pick-demo",
        style: {
          backgroundColor: color
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__.default, {
        onClick: this.deleteIcon,
        style: {
          cursor: "pointer"
        }
      })))));
    }
  }]);

  return StyleEdit;
}(react__WEBPACK_IMPORTED_MODULE_7__.PureComponent);



/***/ }),

/***/ "./MindMap/FormatPanel/TextEdit.js":
/*!*****************************************!*\
  !*** ./MindMap/FormatPanel/TextEdit.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StyleEdit)
/* harmony export */ });
/* harmony import */ var antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/dropdown/style */ "./node_modules/antd/lib/dropdown/style/index.js");
/* harmony import */ var antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/dropdown */ "./node_modules/antd/lib/dropdown/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-color */ "./node_modules/react-color/es/index.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var MM = window.MM;
/**
 * 文字编辑
 */

var StyleEdit = /*#__PURE__*/function (_PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(StyleEdit, _PureComponent);

  var _super = _createSuper(StyleEdit);

  function StyleEdit() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, StyleEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {};

    _this.execute = function (command, data) {
      var nowItem = _this.props.nowItem;

      if (!nowItem.data.textStyle) {
        nowItem.data.textStyle = {};
      }

      if (nowItem.data.textStyle[command] === data) {
        delete nowItem.data.textStyle[command];
      } else {
        nowItem.data.textStyle[command] = data;
      }

      nowItem.updateContent();
      nowItem.update();
    };

    _this.changeFontColor = function (e) {
      var rgb = e.rgb;
      var color = "rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")");

      _this.setState({
        color: color
      });

      _this.execute("color", color);
    };

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(StyleEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.syncNowItem(this.props.nowItem);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      if (props.nowItem !== this.props.nowItem) {
        this.syncNowItem(props.nowItem);
      }

      return props;
    } // 同步数据

  }, {
    key: "syncNowItem",
    value: function syncNowItem(item) {
      var style = item.style || {};
      this.setState({
        color: style.color
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: "right-panel-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: "panel-title"
      }, "\u6587\u672C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: "right-panel-card-children"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_9__.default.Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_9__.default, {
        onClick: function onClick() {
          _this2.execute("fontWeight", "bold");
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("span", {
        style: {
          fontWeight: "bold"
        }
      }, "B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_9__.default, {
        onClick: function onClick() {
          _this2.execute("fontStyle", "italic");
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("span", {
        style: {
          fontStyle: "italic"
        }
      }, "I")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_9__.default, {
        onClick: function onClick() {
          _this2.execute("textDecoration", "underline");
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("span", {
        style: {
          textDecoration: "underline"
        }
      }, "U")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_9__.default, {
        onClick: function onClick() {
          _this2.execute("textDecoration", "line-through");
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("span", {
        style: {
          textDecoration: "line-through"
        }
      }, "S")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_10__.default, {
        trigger: "click",
        overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react_color__WEBPACK_IMPORTED_MODULE_8__.SketchPicker, {
          color: this.state.color,
          onChangeComplete: this.changeFontColor
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_9__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("span", {
        style: {
          textDecoration: "underline",
          textDecorationColor: this.state.color
        }
      }, "A"))))));
    }
  }]);

  return StyleEdit;
}(react__WEBPACK_IMPORTED_MODULE_7__.PureComponent);



/***/ }),

/***/ "./MindMap/FormatPanel/ThemeEdit.js":
/*!******************************************!*\
  !*** ./MindMap/FormatPanel/ThemeEdit.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ThemeEdit)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


var MM = window.MM;
var themes = [["default", __webpack_require__(/*! ../images/default.png */ "./MindMap/images/default.png").default], ["stright", __webpack_require__(/*! ../images/stright.png */ "./MindMap/images/stright.png").default], ["box", __webpack_require__(/*! ../images/box.png */ "./MindMap/images/box.png").default]];

var ThemeEdit = /*#__PURE__*/function (_PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(ThemeEdit, _PureComponent);

  var _super = _createSuper(ThemeEdit);

  function ThemeEdit() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, ThemeEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {};
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(ThemeEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        theme: this.props.app.page.data.theme || "default"
      });
    }
  }, {
    key: "setTheme",
    value: function () {
      var _setTheme = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee(theme) {
        var page;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                page = this.props.app.page;
                page.setTheme(theme);
                page.updateSubtree('updateShape'); //所有节点更新形状

                requestAnimationFrame(function () {
                  page.updateSubtree('updateContentRect'); //所有节点更新宽高

                  page.updateSubtree(); // 所有节点更新布局位置

                  page.update();
                });
                this.setState({
                  theme: theme
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setTheme(_x) {
        return _setTheme.apply(this, arguments);
      }

      return setTheme;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var theme = this.state.theme;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: "theme-save"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("ul", null, themes.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("li", {
          key: item[0],
          onClick: function onClick() {
            _this2.setTheme(item[0]);
          },
          className: theme === item[0] ? "active" : ""
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("img", {
          src: item[1]
        }));
      })));
    }
  }]);

  return ThemeEdit;
}(react__WEBPACK_IMPORTED_MODULE_7__.PureComponent);



/***/ }),

/***/ "./MindMap/Import/ImportFile.js":
/*!**************************************!*\
  !*** ./MindMap/Import/ImportFile.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal/style */ "./node_modules/antd/lib/modal/style/index.js");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/spin/style */ "./node_modules/antd/lib/spin/style/index.js");
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/message/style */ "./node_modules/antd/lib/message/style/index.js");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/antd/lib/message/index.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var antd_lib_upload_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/upload/style */ "./node_modules/antd/lib/upload/style/index.js");
/* harmony import */ var antd_lib_upload_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/upload */ "./node_modules/antd/lib/upload/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _importFile_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./importFile.less */ "./MindMap/Import/importFile.less");














function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }




var Dragger = antd_lib_upload__WEBPACK_IMPORTED_MODULE_12__.default.Dragger;

var ImportFromFile = /*#__PURE__*/function (_PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__.default)(ImportFromFile, _PureComponent);

  var _super = _createSuper(ImportFromFile);

  function ImportFromFile() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, ImportFromFile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      selectName: "mind",
      loading: false
    };

    _this.show = function () {
      _this.setState({
        visible: true
      });
    };

    _this.close = function () {
      _this.setState({
        visible: false
      });
    };

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(ImportFromFile, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var mind = this.props.mind;
      var _this$state = this.state,
          loading = _this$state.loading,
          visible = _this$state.visible;
      var _this$props$mind$stat = this.props.mind.state.record,
          record = _this$props$mind$stat === void 0 ? {} : _this$props$mind$stat;
      var _record$catalog = record.catalog,
          catalog = _record$catalog === void 0 ? {} : _record$catalog;
      var props = {
        name: "file",
        multiple: true,
        onChange: function onChange(info) {
          antd_lib_message__WEBPACK_IMPORTED_MODULE_13__.default.error("\u5BFC\u5165\u5931\u8D25:".concat(info.file.error.message));

          _this2.setState({
            loading: false
          });
        }
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(antd_lib_modal__WEBPACK_IMPORTED_MODULE_14__.default, {
        title: "\u4ECE\u6587\u4EF6\u5BFC\u5165",
        visible: visible,
        maskClosable: true,
        onCancel: this.close,
        afterClose: function afterClose() {
          _this2.setState({
            loading: false
          });
        },
        destroyOnClose: true,
        footer: null,
        width: 600,
        className: "import-from-file-modal"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        className: "main-box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(Dragger, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_15__.default, {
        spinning: loading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("p", {
        className: "ant-upload-drag-icon"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("p", {
        className: "ant-upload-text"
      }, "\u70B9\u51FB\u6216\u62D6\u62FD\u6587\u4EF6\u5230\u6B64\u5904\u8FDB\u884C\u4E0A\u4F20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("p", {
        className: "ant-upload-hint"
      }, "\u652F\u6301xmind\u683C\u5F0F\u6587\u4EF6\u4E0A\u4F20")))));
    }
  }]);

  return ImportFromFile;
}(react__WEBPACK_IMPORTED_MODULE_9__.PureComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImportFromFile);

/***/ }),

/***/ "./MindMap/MainText.js":
/*!*****************************!*\
  !*** ./MindMap/MainText.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainText)
/* harmony export */ });
/* harmony import */ var antd_lib_back_top_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/back-top/style */ "./node_modules/antd/lib/back-top/style/index.js");
/* harmony import */ var antd_lib_back_top_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_back_top_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_back_top__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/back-top */ "./node_modules/antd/lib/back-top/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var antd_lib_tree_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/tree/style */ "./node_modules/antd/lib/tree/style/index.js");
/* harmony import */ var antd_lib_tree_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tree_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_tree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/tree */ "./node_modules/antd/lib/tree/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");













function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var TreeNode = antd_lib_tree__WEBPACK_IMPORTED_MODULE_10__.default.TreeNode;

var MainText = /*#__PURE__*/function (_PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__.default)(MainText, _PureComponent);

  var _super = _createSuper(MainText);

  function MainText() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, MainText);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {};

    _this.changeSearch = function (e) {
      var value = e.target.value;
      var nowData = _this.props.nowData;
      var _this$state$searchDat = _this.state.searchData,
          searchData = _this$state$searchDat === void 0 ? nowData : _this$state$searchDat;

      if (!value) {
        return _this.setState({
          searchData: undefined
        });
      }

      var res = JSON.parse(JSON.stringify(nowData));
      res.root = _this.checkSearch(value, res.root);
      console.log(res);

      _this.setState({
        searchValue: value,
        searchData: _objectSpread({}, res)
      });
    };

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(MainText, [{
    key: "renderMainTextChildren",
    value: function renderMainTextChildren(childrens) {
      var _this2 = this;

      return childrens.map(function (item) {
        var icon = [];

        for (var key in item.icon) {
          icon.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("i", {
            className: "mind-icon ".concat(item.icon[key])
          }));
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(TreeNode, {
          key: item.uuid,
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
            className: "mainText-item-title"
          }, icon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("span", null, item.text), item.note ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("pre", {
            className: "main-text-note"
          }, item.note) : null)
        }, _this2.renderMainTextChildren(item.children || []));
      });
    } // h = n + a

  }, {
    key: "makeChildren",
    value: function makeChildren() {
      var _this3 = this;

      var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return children.map(function (item) {
        var icon = [];

        for (var key in item.icon) {
          icon.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("i", {
            className: "mind-icon ".concat(item.icon[key])
          }));
        }

        return {
          title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
            onDoubleClick: function onDoubleClick() {
              return _this3.onDoubleClick(item);
            },
            className: "mainText-item-title"
          }, icon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("span", null, item.text), item.note ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("pre", {
            className: "main-text-note"
          }, item.note) : null),
          key: item.uuid,
          children: _this3.makeChildren(item.children)
        };
      });
    }
  }, {
    key: "onDoubleClick",
    value: function onDoubleClick(data) {
      this.props.showMindText('mind');
      var item = this.props.app.page.getItemByUUID(data.uuid);
      item.select();
      item.center();
    }
  }, {
    key: "renderMainText",
    value: function renderMainText() {
      var _this4 = this;

      var nowData = this.props.nowData;
      var _this$state$searchDat2 = this.state.searchData,
          searchData = _this$state$searchDat2 === void 0 ? nowData : _this$state$searchDat2;

      if (!searchData) {
        return null;
      }

      var icon = [];

      for (var key in searchData.root.icon) {
        icon.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("i", {
          className: "mind-icon ".concat(searchData.root.icon[key])
        }));
      }

      var item = searchData.root;
      var treeData = [{
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
          className: "mainText-item-title"
        }, icon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("h2", null, searchData.root.text), item.note ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("pre", {
          className: "main-text-note"
        }, item.note) : null),
        key: searchData.root.uuid,
        children: this.makeChildren(searchData.root.children)
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(react__WEBPACK_IMPORTED_MODULE_9__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        onDoubleClick: function onDoubleClick(e) {
          e.preventDefault();
          e.stopPropagation();

          _this4.onDoubleClick(item);
        },
        className: "mainText-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_11__.default.Search, {
        placeholder: "\u8BF7\u8F93\u5165\u641C\u7D22",
        value: this.state.searchValue,
        style: {
          width: "100%"
        },
        onChange: this.changeSearch
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(antd_lib_tree__WEBPACK_IMPORTED_MODULE_10__.default, {
        treeData: treeData,
        className: "main-text-tree",
        defaultExpandAll: true
      })));
    }
  }, {
    key: "checkSearch",
    value: // 递归深度搜索
    function checkSearch(value, parent) {
      var _this5 = this;

      var visible = false;

      if (parent.text.indexOf(value) > -1) {
        visible = true;
      }

      var children = [];
      parent.children && parent.children.forEach(function (item) {
        var child = _this5.checkSearch(value, item);

        if (child.visible) {
          children.push(child);
        }
      });
      if (children.length) visible = true;
      parent.visible = visible;
      parent.children = children;
      return parent;
    }
  }, {
    key: "render",
    value: function render() {
      var mindType = this.props.mindType;
      return mindType === "text" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        style: {
          flexGrow: 1
        }
      }, this.renderMainText(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(antd_lib_back_top__WEBPACK_IMPORTED_MODULE_12__.default, {
        style: {
          right: "40px",
          bottom: "40px"
        }
      }));
    }
  }]);

  return MainText;
}(react__WEBPACK_IMPORTED_MODULE_9__.PureComponent);



/***/ }),

/***/ "./MindMap/Modals/CommandKey/index.js":
/*!********************************************!*\
  !*** ./MindMap/Modals/CommandKey/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CommandKey)
/* harmony export */ });
/* harmony import */ var antd_lib_popover_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/popover/style */ "./node_modules/antd/lib/popover/style/index.js");
/* harmony import */ var antd_lib_popover_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/popover */ "./node_modules/antd/lib/popover/index.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var CommandKey = /*#__PURE__*/function (_PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(CommandKey, _PureComponent);

  var _super = _createSuper(CommandKey);

  function CommandKey() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, CommandKey);

    return _super.apply(this, arguments);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(CommandKey, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(antd_lib_popover__WEBPACK_IMPORTED_MODULE_7__.default, {
        content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", {
          className: "key-list"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "\u4FDD\u5B58"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "\u2318/ctrl+S")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "\u64A4\u9500"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "\u2318/ctrl+Z")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "\u56DE\u9000"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "\u2318/ctrl+shift+Z")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "\u63D2\u5165\u5B50\u8282\u70B9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "Tab")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "\u63D2\u5165\u540C\u7EA7\u8282\u70B9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "Enter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "\u590D\u5236"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "\u2318/ctrl+C")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "\u526A\u5207"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "\u2318/ctrl+X")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "\u7C98\u8D34"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "\u2318/ctrl+V")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "\u6298\u53E0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "\u7F16\u8F91"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "Space")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "\u7ED3\u675F\u7F16\u8F91"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "Enter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "\u9000\u51FA\u7F16\u8F91"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "Esc")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "\u6362\u884C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "shift+Space")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "\u52A0\u7C97"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "ctrl+B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "\u659C\u4F53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "ctrl+I")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "\u79FB\u52A8\u8282\u70B9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "\u65B9\u5411\u952E")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "\u8111\u56FE\u5C45\u4E2D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "C")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "\u653E\u5927\u7F29\u5C0F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("span", null, "ctrl+\u9F20\u6807\u6EDA\u8F6E")))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement("i", {
        className: "iconfont icon-keyboard shortcut"
      }));
    }
  }]);

  return CommandKey;
}(react__WEBPACK_IMPORTED_MODULE_6__.PureComponent);



/***/ }),

/***/ "./MindMap/Modals/History/index.js":
/*!*****************************************!*\
  !*** ./MindMap/Modals/History/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ History)
/* harmony export */ });
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal/style */ "./node_modules/antd/lib/modal/style/index.js");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_list_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/list/style */ "./node_modules/antd/lib/list/style/index.js");
/* harmony import */ var antd_lib_list_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/lib/list */ "./node_modules/antd/lib/list/index.js");
/* harmony import */ var antd_lib_popconfirm_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/popconfirm/style */ "./node_modules/antd/lib/popconfirm/style/index.js");
/* harmony import */ var antd_lib_popconfirm_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popconfirm_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! antd/lib/popconfirm */ "./node_modules/antd/lib/popconfirm/index.js");
/* harmony import */ var antd_lib_tooltip_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/tooltip/style */ "./node_modules/antd/lib/tooltip/style/index.js");
/* harmony import */ var antd_lib_tooltip_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd/lib/tooltip */ "./node_modules/antd/lib/tooltip/index.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/icon/style */ "./node_modules/antd/lib/icon/style/index.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/message/style */ "./node_modules/antd/lib/message/style/index.js");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/antd/lib/message/index.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");




















function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_11__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_10__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var History = /*#__PURE__*/function (_PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__.default)(History, _PureComponent);

  var _super = _createSuper(History);

  function History() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__.default)(this, History);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {};

    _this.hide = function () {
      _this.setState({
        visible: false
      });
    };

    _this.show = function () {
      _this.getHistory();

      _this.setState({
        visible: true
      });
    };

    _this.reverse = /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_12___default().mark(function _callee(item) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_12___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return service.applyHistory({
                  historyId: item.id
                });

              case 2:
                res = _context.sent;

                if (res) {
                  antd_lib_message__WEBPACK_IMPORTED_MODULE_14__.default.success("还原成功");

                  window.location.reload();
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.onOk = function () {};

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__.default)(History, [{
    key: "getHistory",
    value: function () {
      var _getHistory = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_12___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_12___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.setState({
                  loading: true
                });
                this.setState({
                  data: [],
                  loading: false
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getHistory() {
        return _getHistory.apply(this, arguments);
      }

      return getHistory;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          visible = _this$state.visible,
          _this$state$data = _this$state.data,
          data = _this$state$data === void 0 ? [] : _this$state$data,
          loading = _this$state.loading;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(antd_lib_modal__WEBPACK_IMPORTED_MODULE_15__.default, {
        title: "\u5386\u53F2\u8BB0\u5F55",
        confirmLoading: loading,
        visible: visible,
        width: 450,
        onClose: this.hide,
        onCancel: this.hide,
        onOk: this.hide
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_16__.default, {
        style: {
          marginTop: -20
        },
        itemLayout: "horizontal",
        pagination: {
          pageSize: 5
        },
        dataSource: data,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_16__.default.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_16__.default.Item.Meta, {
            title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
              className: "mind-history-list"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("span", null, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_17__.default, {
              title: "\u9884\u89C8"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("a", {
              target: "_blank",
              href: "?historyId=".concat(item.id)
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_18__.default, {
              style: {
                fontSize: 16
              },
              type: "eye"
            }))), "\xA0\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_19__.default, {
              title: "\u786E\u8BA4\u8FD8\u539F\u8BE5\u7248\u672C\uFF1F",
              okText: "\u662F",
              cancelText: "\u5426",
              onConfirm: function onConfirm() {
                _this2.reverse(item);
              }
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_17__.default, {
              title: "\u8FD8\u539F"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_18__.default, {
              style: {
                cursor: "pointer"
              },
              type: "sync"
            }))))),
            description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("div", {
              className: "mind-history-list"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("span", null, item.user.nickname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13__.createElement("span", null, (item.content.length / 1024).toFixed(1), "KB \xA0", item.gmtModify, " "))
          }));
        }
      }));
    }
  }]);

  return History;
}(react__WEBPACK_IMPORTED_MODULE_13__.PureComponent);



/***/ }),

/***/ "./MindMap/Rightbar.js":
/*!*****************************!*\
  !*** ./MindMap/Rightbar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Rightbar)
/* harmony export */ });
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/icon/style */ "./node_modules/antd/lib/icon/style/index.js");
/* harmony import */ var antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/antd/lib/icon/index.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/message/style */ "./node_modules/antd/lib/message/style/index.js");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/antd/lib/message/index.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/tabs/style */ "./node_modules/antd/lib/tabs/style/index.js");
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/tabs */ "./node_modules/antd/lib/tabs/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _FormatPanel_TextEdit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormatPanel/TextEdit */ "./MindMap/FormatPanel/TextEdit.js");
/* harmony import */ var _FormatPanel_CanvasEdit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FormatPanel/CanvasEdit */ "./MindMap/FormatPanel/CanvasEdit.js");
/* harmony import */ var _FormatPanel_ItemStyle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FormatPanel/ItemStyle */ "./MindMap/FormatPanel/ItemStyle.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./icon */ "./MindMap/icon.js");
/* harmony import */ var _FormatPanel_ThemeEdit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FormatPanel/ThemeEdit */ "./MindMap/FormatPanel/ThemeEdit.js");













function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var TabPane = antd_lib_tabs__WEBPACK_IMPORTED_MODULE_15__.default.TabPane;

var Rightbar = /*#__PURE__*/function (_PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__.default)(Rightbar, _PureComponent);

  var _super = _createSuper(Rightbar);

  function Rightbar() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, Rightbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {};
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(Rightbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.app.on("item:select", function () {
        _this2.setState({
          nowItem: _this2.props.app.page.current
        });
      });
      this.generateCSS();
    }
  }, {
    key: "generateCSS",
    value: function generateCSS() {
      if (document.querySelector("#mind-icons")) {
        return;
      }

      var str = "";

      var _loop = function _loop(key) {
        var list = _icon__WEBPACK_IMPORTED_MODULE_13__.default[key].icons;
        list.forEach(function (item) {
          str += ".mind-".concat(key, "-").concat(item[0], " {background:url(").concat(item[1]["default"], ")}");
        });
      };

      for (var key in _icon__WEBPACK_IMPORTED_MODULE_13__.default) {
        _loop(key);
      }

      var style = document.createElement("style");
      style.innerHTML = str;
      style.id = "mind-icons";
      document.head.appendChild(style);
    }
  }, {
    key: "onIconClick",
    value: function onIconClick(key, item) {
      var current = this.props.mind.app.page.current;

      if (!current) {
        return antd_lib_message__WEBPACK_IMPORTED_MODULE_16__.default.info("请先选择节点");
      }

      current.data.icon = _objectSpread(_objectSpread({}, current.data.icon), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, key, "mind-".concat(key, "-") + item[0]));
      current.updateContent();
      current.update();
    }
  }, {
    key: "deleteIconClick",
    value: function deleteIconClick(key) {
      var app = this.props.mind.app;

      if (!app.page.current) {
        return antd_lib_message__WEBPACK_IMPORTED_MODULE_16__.default.info("请先选择节点");
      }

      app.page.current.setIcon(false, key);
    }
  }, {
    key: "renderIconList",
    value: function renderIconList() {
      var _this3 = this;

      var types = [];

      var _loop2 = function _loop2(key) {
        var iconItem = _icon__WEBPACK_IMPORTED_MODULE_13__.default[key];
        var list = iconItem.icons.map(function (item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("i", {
            onClick: function onClick() {
              _this3.onIconClick(key, item);
            },
            className: "mind-".concat(key, "-").concat(item[0])
          });
        });
        var type = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
          className: "icon-item"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("span", null, iconItem.name, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(antd_lib_icon__WEBPACK_IMPORTED_MODULE_17__.default, {
          onClick: function onClick() {
            return _this3.deleteIconClick(key);
          },
          type: "delete"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
          className: "icon-list"
        }, list));
        types.push(type);
      };

      for (var key in _icon__WEBPACK_IMPORTED_MODULE_13__.default) {
        _loop2(key);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        className: "icon-content",
        style: {
          width: 300
        }
      }, types);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          mind = _this$props.mind;

      switch (type) {
        case "icon":
          return this.renderIconList();
      }

      var nowItem = this.state.nowItem; // format

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_15__.default, {
        defaultActiveKey: "1"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(TabPane, {
        tab: "\u6837\u5F0F",
        key: "1"
      }, nowItem ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(react__WEBPACK_IMPORTED_MODULE_9__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(_FormatPanel_TextEdit__WEBPACK_IMPORTED_MODULE_10__.default, {
        app: this.props.app,
        nowItem: nowItem
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(_FormatPanel_ItemStyle__WEBPACK_IMPORTED_MODULE_12__.default, {
        app: this.props.app,
        nowItem: nowItem
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement("div", {
        style: {
          paddingTop: 100,
          textAlign: "center",
          color: "#bebebe"
        }
      }, "\u8BF7\u5148\u9009\u62E9\u8282\u70B9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(TabPane, {
        tab: "\u753B\u5E03",
        key: "2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(_FormatPanel_CanvasEdit__WEBPACK_IMPORTED_MODULE_11__.default, {
        app: this.props.app,
        mind: mind
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(TabPane, {
        tab: "\u4E3B\u9898",
        key: "3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9__.createElement(_FormatPanel_ThemeEdit__WEBPACK_IMPORTED_MODULE_14__.default, {
        app: this.props.app,
        mind: mind,
        nowItem: nowItem
      })));
    }
  }]);

  return Rightbar;
}(react__WEBPACK_IMPORTED_MODULE_9__.PureComponent);



/***/ }),

/***/ "./MindMap/TopBar.js":
/*!***************************!*\
  !*** ./MindMap/TopBar.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/dropdown/style */ "./node_modules/antd/lib/dropdown/style/index.js");
/* harmony import */ var antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! antd/lib/dropdown */ "./node_modules/antd/lib/dropdown/index.js");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/menu/style */ "./node_modules/antd/lib/menu/style/index.js");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_tooltip_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/tooltip/style */ "./node_modules/antd/lib/tooltip/style/index.js");
/* harmony import */ var antd_lib_tooltip_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! antd/lib/tooltip */ "./node_modules/antd/lib/tooltip/index.js");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/message/style */ "./node_modules/antd/lib/message/style/index.js");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/antd/lib/message/index.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/ZoomInOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/ZoomOutOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/StarOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/HighlightOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/MoreOutlined.js");
/* harmony import */ var _Modals_CommandKey__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Modals/CommandKey */ "./MindMap/Modals/CommandKey/index.js");
/* harmony import */ var _Import_ImportFile__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Import/ImportFile */ "./MindMap/Import/ImportFile.js");
/* harmony import */ var _Modals_History_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Modals/History/index.js */ "./MindMap/Modals/History/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/FullscreenOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/FolderOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/FolderOpenOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/FileImageOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/ImportOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/ExportOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/CloudDownloadOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/UploadOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/SaveOutlined.js");


















function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }











var TopBar = /*#__PURE__*/function (_PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__.default)(TopBar, _PureComponent);

  var _super = _createSuper(TopBar);

  function TopBar() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, TopBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      scale: 1,
      selectedKeys: ["3"],
      show3dView: false
    };

    _this.save = /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11___default().mark(function _callee(flag) {
        var data, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = _this.props.app.page.toJSON();
                _context.next = 3;
                return fetch('/remind-api/save', {
                  method: "POST",
                  body: JSON.stringify(data)
                }).then(function (res) {
                  return res.json();
                }).then(function (res) {
                  if (!res.success) {
                    antd_lib_message__WEBPACK_IMPORTED_MODULE_19__.default.error("保存失败!", res.message);

                    return false;
                  }

                  return true;
                })["catch"](function (err) {
                  antd_lib_message__WEBPACK_IMPORTED_MODULE_19__.default.error(err.message);
                });

              case 3:
                res = _context.sent;
                if (flag && res) antd_lib_message__WEBPACK_IMPORTED_MODULE_19__.default.success("保存成功");

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.undo = function () {
      var history = _this.props.app.history;
      history.history[history.historyIndex - 1].undo();
      history.historyIndex--;

      _this.setState({
        historyIndex: history.historyIndex
      });
    };

    _this.redo = function () {
      var history = _this.props.app.history;
      history.history[history.historyIndex].perform();
      history.historyIndex++;

      _this.setState({
        historyIndex: history.historyIndex
      });
    };

    _this.add = function () {
      var app = _this.props.app;

      if (!app.page.current) {
        app.page.root.select();
      }

      app.command.execute("InsertChild");
      app.fire("command-child");
    };

    _this.addItem = function () {
      var app = _this.props.app;

      if (!app.page.current) {
        app.page.root.select();
      }

      app.command.execute("InsertSibling");
      app.fire("command-sibling");
    };

    _this.zoom = function (val) {
      var app = _this.props.app;
      var scale = app.controller.scale;
      scale = scale * val;
      if (scale < 0.05) return;
      app.controller.scale = scale;
      app.controller.update();

      _this.setState({
        scale: scale
      });
    };

    _this.changeNodeType = function (value, key) {
      var app = _this.props.app;
      var item = app.page.current || app.page.root;
      app.action.execute('SetLayout', item, value);

      _this.setState({
        selectedKeys: [value]
      });
    };

    _this.format = function () {
      var app = _this.props.app;
      (app.page.current || app.page.root).center();
    };

    _this.goback = function () {
      window.history.go(-1);
    };

    _this.changeName = function (e) {
      _this.setState({
        name: e.target.value
      });
    };

    _this["export"] = function () {
      html2canvas__WEBPACK_IMPORTED_MODULE_14___default()(document.querySelector(".remind-page"), {
        useCORS: true
      }).then(function (canvas) {
        var c = document.createElement("canvas");
        var ctx = c.getContext("2d");
        c.width = canvas.width / window.devicePixelRatio + 40;
        c.height = canvas.height / window.devicePixelRatio + 40;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.drawImage(canvas, 20, 20, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio); // canvas.width +=  40 ;
        // canvas.height += 40;

        c.toBlob(function (blob) {
          (0,file_saver__WEBPACK_IMPORTED_MODULE_15__.saveAs)(blob, (_this.state.name || '脑图') + ".png");
        });
      });
    };

    _this.addNote = function () {
      _this.props.app.page.current.startNote();
    };

    _this.resize = function () {
      _this.resizeTimeout && clearTimeout(_this.resizeTimeout);
      _this.resizeTimeout = setTimeout(function () {
        if (document.fullscreenElement) {
          _this.setState({
            fullscreen: true
          });
        } else {
          _this.setState({
            fullscreen: false
          });
        }
      }, 50);
    };

    _this.fullScreen = function () {
      if (_this.state.fullscreen) {
        return _this.exitFullscreen();
      }

      _this.setState({
        fullscreen: true
      });

      var element = document.documentElement;

      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      }
    };

    _this.exitFullscreen = function () {
      _this.setState({
        fullscreen: false
      });

      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    };

    _this.fold = function () {
      var foldStatus = _this.state.foldStatus;

      _this.props.mind.setState({
        loading: true
      });

      setTimeout(function () {
        var children = MM.App.map.getRoot().getChildren();
        children.forEach(function (item) {
          item._collapsed = !foldStatus;
          item.update(true);
        });
        MM.App.map.getRoot().update();

        _this.format();

        _this.props.mind.setState({
          loading: false
        });

        _this.setState({
          foldStatus: !foldStatus
        });
      }, 100);
    };

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__.default)(TopBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          nowData = _this$props.nowData,
          app = _this$props.app;
      this.oldData = JSON.stringify(nowData);

      var _ref2 = nowData || {},
          _ref2$root = _ref2.root,
          root = _ref2$root === void 0 ? {} : _ref2$root;

      var _root$children = root.children,
          children = _root$children === void 0 ? [] : _root$children;
      var noFold = children.find(function (item) {
        return item.collapsed !== 1;
      });

      if (!noFold) {
        this.setState({
          foldStatus: true
        });
      }

      this.setState({
        selectedKeys: [app.page.root.getLayout().name]
      });
      app.on("item-select", function (item) {
        _this2.setState({
          selectedKeys: [item.getLayout().name]
        });
      });
      app.on("redo", function (index) {
        _this2.setState({
          historyIndex: index
        });
      });
      app.on("undo", function (index) {
        console.log(index);

        _this2.setState({
          historyIndex: index
        });
      });
      app.on("save", function () {
        _this2.save();
      });
      app.on("zoom", function (scale) {
        _this2.setState({
          scale: scale
        });
      });
      app.on("change", function () {
        _this2.setState({
          historyIndex: app.history.historyIndex
        });
      });
      window.addEventListener("resize", this.resize);
      this.startTimeout();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: "startTimeout",
    value: function startTimeout() {
      var _this3 = this;

      if (this.props.readonly) return;
      this.timeout && clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        _this3.save(false);

        _this3.startTimeout();
      }, 30000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state = this.state,
          scale = _this$state.scale,
          fullscreen = _this$state.fullscreen,
          foldStatus = _this$state.foldStatus;
      var _this$props2 = this.props,
          type = _this$props2.type,
          app = _this$props2.app,
          mind = _this$props2.mind,
          _this$props2$mindType = _this$props2.mindType,
          mindType = _this$props2$mindType === void 0 ? "mind" : _this$props2$mindType,
          readonly = _this$props2.readonly,
          _this$props2$record = _this$props2.record,
          record = _this$props2$record === void 0 ? {} : _this$props2$record;
      var _record$book = record.book,
          book = _record$book === void 0 ? {} : _record$book;
      var _book$projectVersion = book.projectVersion,
          projectVersion = _book$projectVersion === void 0 ? {} : _book$projectVersion;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "minder-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "main-mind-tab"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_20__.default, {
        title: "\u5207\u6362\u81F3\u601D\u7EF4\u5BFC\u56FE"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: mindType === "mind" ? "active" : "",
        onClick: function onClick() {
          _this4.props.mind.showMindText("mind");
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("i", {
        className: "iconfont icon-editor-org"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", null, "\u601D\u7EF4\u5BFC\u56FE"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_20__.default, {
        title: "\u5207\u6362\u81F3\u5927\u7EB2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: mindType === "text" ? "active" : "",
        onClick: function onClick() {
          _this4.props.mind.showMindText("text");
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("i", {
        className: "iconfont icon-read"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", null, "\u5927\u7EB2")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "button-area"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(react__WEBPACK_IMPORTED_MODULE_12__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "handle-button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_20__.default, {
        title: "\u4FDD\u5B58\u4E3A\u7248\u672C"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("i", {
        className: "iconfont icon-editor-save",
        onClick: function onClick() {
          _this4.save(true);
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "handle-button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("i", {
        className: "iconfont icon-editor-undo ".concat(app.history.historyIndex > 0 ? "" : "disabled"),
        onClick: app.history.historyIndex > 0 ? this.undo : undefined
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "handle-button "
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("i", {
        className: "iconfont icon-editor-redo ".concat(app.history.historyIndex < app.history.history.length ? "" : "disabled"),
        onClick: app.history.historyIndex < app.history.history.length ? this.redo : undefined
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "handle-button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_20__.default, {
        title: "\u63D2\u5165\u5B50\u4E3B\u9898"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("i", {
        className: "iconfont icon-editor-insert-child",
        onClick: this.add
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "handle-button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_20__.default, {
        title: "\u63D2\u5165\u540C\u7EA7\u4E3B\u9898"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("i", {
        className: "iconfont icon-editor-insert-brother",
        onClick: this.addItem
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "handle-button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_20__.default, {
        title: "\u5907\u6CE8"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("i", {
        className: "iconfont icon-biji",
        onClick: this.addNote
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "handle-button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_21__.default, {
        overlayClassName: "tnt-dropdown",
        overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_22__.default, {
          style: {
            width: 120
          },
          onClick: function onClick(_ref3) {
            var item = _ref3.item,
                key = _ref3.key;

            _this4.changeNodeType(key);
          },
          selectedKeys: this.state.selectedKeys
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_22__.default.Item, {
          key: "map"
        }, "\u8111\u56FE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_22__.default.Item, {
          key: "map-right"
        }, "\u8111\u56FE-\u53F3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_22__.default.Item, {
          key: "map-left"
        }, "\u8111\u56FE-\u5DE6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_22__.default.Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_22__.default.Item, {
          key: "site-top"
        }, "\u67B6\u6784\u56FE-\u4E0A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_22__.default.Item, {
          key: "site-bottom"
        }, "\u67B6\u6784\u56FE-\u4E0B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_22__.default.Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_22__.default.Item, {
          key: "tree-right"
        }, "\u6811\u56FE-\u53F3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_22__.default.Item, {
          key: "tree-left"
        }, "\u6811\u56FE-\u5DE6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_22__.default.Item, {
          key: "fish-right"
        }, "\u9C7C\u9AA8\u56FE-\u53F3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_22__.default.Item, {
          key: "fish-left"
        }, "\u9C7C\u9AA8\u56FE-\u5DE6"))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("i", {
        className: "iconfont icon-editor-org"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "handle-button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_20__.default, {
        title: "\u5F52\u4F4D"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("i", {
        className: "iconfont icon-guiwei",
        onClick: this.format
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "handle-button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_20__.default, {
        title: "\u653E\u5927"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("i", {
        onClick: function onClick() {
          _this4.zoom(1.1);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_23__.default, {
        style: {
          fontSize: 14
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "handle-button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_20__.default, {
        title: "\u7F29\u5C0F"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("i", {
        className: "iconfont ",
        onClick: function onClick() {
          _this4.zoom(0.9);
        }
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_24__.default, {
        style: {
          fontSize: 14
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "handle-button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_20__.default, {
        title: "\u6062\u590D\u6210100%"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("i", {
        className: "iconfont ",
        style: {
          fontSize: 14,
          userSelect: "none"
        },
        onClick: function onClick() {
          _this4.zoom(1 / scale);
        }
      }, (scale * 100).toFixed(0), "%"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "handle-button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_20__.default, {
        title: "\u5168\u5C4F"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_25__.default, {
        type: !fullscreen ? "fullscreen" : "fullscreen-exit",
        onClick: this.fullScreen,
        style: {
          fontSize: 14
        }
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "handle-button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_20__.default, {
        title: "\u6298\u53E02\u7EA7\u8282\u70B9"
      }, foldStatus ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_26__.default, {
        onClick: this.fold,
        style: {
          fontSize: 14
        }
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_27__.default, {
        onClick: this.fold,
        style: {
          fontSize: 14
        }
      })))), !readonly && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_Modals_CommandKey__WEBPACK_IMPORTED_MODULE_16__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_28__.default.Group, {
        className: "button-area-footer"
      }, !readonly && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_20__.default, {
        title: "\u56FE\u6807"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_28__.default, {
        type: type === "icon" ? "primary" : "default",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_29__.default, null),
        onClick: function onClick() {
          _this4.props.mind.showRightPanel("icon");
        }
      })), !readonly && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_20__.default, {
        title: "\u683C\u5F0F"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_28__.default, {
        type: type === "format" ? "primary" : "default",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_30__.default, null),
        onClick: function onClick() {
          _this4.props.mind.showRightPanel("format");
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_21__.default, {
        overlay: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_22__.default, {
          onClick: function onClick(_ref4) {
            var domEvent = _ref4.domEvent;
            return domEvent.stopPropagation();
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_22__.default.Item, {
          onClick: function onClick() {
            _this4["export"]();
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_31__.default, null), "\u5BFC\u51FA\u4E3A\u56FE\u7247"), !readonly && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_22__.default.Item, {
          onClick: function onClick() {
            _this4.importFile.show();
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_32__.default, null), "\u4ECExmind\u6587\u4EF6\u5BFC\u5165"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_22__.default.Item, {
          onClick: function onClick() {
            antd_lib_message__WEBPACK_IMPORTED_MODULE_19__.default.success("服务端完成");
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_33__.default, null), "\u5BFC\u51FA\u4E3Axmind"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_22__.default.Item, {
          onClick: function onClick() {
            antd_lib_message__WEBPACK_IMPORTED_MODULE_19__.default.success("服务端完成");
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_34__.default, null), "\u4E0B\u8F7D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_22__.default.Item, {
          onClick: function onClick() {
            antd_lib_message__WEBPACK_IMPORTED_MODULE_19__.default.success("服务端完成");
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_35__.default, null), "\u4E0A\u4F20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_22__.default.Item, {
          onClick: function onClick() {
            _this4.history.show();
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_36__.default, null), "\u53E6\u5B58\u4E3A")),
        "class": "project-action-more",
        overlayClassName: "tnt-dropdown",
        placement: "bottomRight"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_28__.default, {
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_37__.default, null)
      }))), readonly && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement("div", {
        className: "read-only-bar"
      }, "\u9884\u89C8\u4E2D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_Modals_History_index_js__WEBPACK_IMPORTED_MODULE_18__.default, {
        mind: mind,
        id: this.props.id,
        ref: function ref(_ref5) {
          _this4.history = _ref5;
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(_Import_ImportFile__WEBPACK_IMPORTED_MODULE_17__.default, {
        mind: mind,
        id: this.props.id,
        ref: function ref(_ref6) {
          _this4.importFile = _ref6;
        }
      }));
    }
  }]);

  return TopBar;
}(react__WEBPACK_IMPORTED_MODULE_12__.PureComponent);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopBar);

/***/ }),

/***/ "./MindMap/icon.js":
/*!*************************!*\
  !*** ./MindMap/icon.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var iconList = {
  priority: {
    name: "优先级",
    icons: [["1", __webpack_require__(/*! ./Icons/level/1.svg */ "./MindMap/Icons/level/1.svg")], ["2", __webpack_require__(/*! ./Icons/level/2.svg */ "./MindMap/Icons/level/2.svg")], ["3", __webpack_require__(/*! ./Icons/level/3.svg */ "./MindMap/Icons/level/3.svg")], ["4", __webpack_require__(/*! ./Icons/level/4.svg */ "./MindMap/Icons/level/4.svg")], ["5", __webpack_require__(/*! ./Icons/level/5.svg */ "./MindMap/Icons/level/5.svg")], ["6", __webpack_require__(/*! ./Icons/level/6.svg */ "./MindMap/Icons/level/6.svg")], ["7", __webpack_require__(/*! ./Icons/level/7.svg */ "./MindMap/Icons/level/7.svg")]]
  },
  smiley: {
    name: "表情",
    icons: [["laugh", __webpack_require__(/*! ./Icons/emoji/1.svg */ "./MindMap/Icons/emoji/1.svg")], ["smile", __webpack_require__(/*! ./Icons/emoji/2.svg */ "./MindMap/Icons/emoji/2.svg")], ["cry", __webpack_require__(/*! ./Icons/emoji/3.svg */ "./MindMap/Icons/emoji/3.svg")], ["surprise", __webpack_require__(/*! ./Icons/emoji/4.svg */ "./MindMap/Icons/emoji/4.svg")], ["boring", __webpack_require__(/*! ./Icons/emoji/5.svg */ "./MindMap/Icons/emoji/5.svg")], ["angry", __webpack_require__(/*! ./Icons/emoji/6.svg */ "./MindMap/Icons/emoji/6.svg")], ["embarrass", __webpack_require__(/*! ./Icons/emoji/7.svg */ "./MindMap/Icons/emoji/7.svg")]]
  },
  task: {
    name: "任务",
    icons: [["start", __webpack_require__(/*! ./Icons/task/1.svg */ "./MindMap/Icons/task/1.svg")], ["oct", __webpack_require__(/*! ./Icons/task/2.svg */ "./MindMap/Icons/task/2.svg")], ["3oct", __webpack_require__(/*! ./Icons/task/3.svg */ "./MindMap/Icons/task/3.svg")], ["half", __webpack_require__(/*! ./Icons/task/4.svg */ "./MindMap/Icons/task/4.svg")], ["5oct", __webpack_require__(/*! ./Icons/task/5.svg */ "./MindMap/Icons/task/5.svg")], ["7oct", __webpack_require__(/*! ./Icons/task/6.svg */ "./MindMap/Icons/task/6.svg")], ["done", __webpack_require__(/*! ./Icons/task/7.svg */ "./MindMap/Icons/task/7.svg")]]
  },
  flag: {
    name: "旗子",
    icons: [["red", __webpack_require__(/*! ./Icons/flag/1.svg */ "./MindMap/Icons/flag/1.svg")], ["orange", __webpack_require__(/*! ./Icons/flag/2.svg */ "./MindMap/Icons/flag/2.svg")], ["dark-blue", __webpack_require__(/*! ./Icons/flag/3.svg */ "./MindMap/Icons/flag/3.svg")], ["purple", __webpack_require__(/*! ./Icons/flag/4.svg */ "./MindMap/Icons/flag/4.svg")], ["green", __webpack_require__(/*! ./Icons/flag/5.svg */ "./MindMap/Icons/flag/5.svg")], ["blue", __webpack_require__(/*! ./Icons/flag/6.svg */ "./MindMap/Icons/flag/6.svg")], ["gray", __webpack_require__(/*! ./Icons/flag/7.svg */ "./MindMap/Icons/flag/7.svg")]]
  },
  star: {
    name: "星星",
    icons: [["red", __webpack_require__(/*! ./Icons/star/1.svg */ "./MindMap/Icons/star/1.svg")], ["orange", __webpack_require__(/*! ./Icons/star/2.svg */ "./MindMap/Icons/star/2.svg")], ["dark-blue", __webpack_require__(/*! ./Icons/star/3.svg */ "./MindMap/Icons/star/3.svg")], ["purple", __webpack_require__(/*! ./Icons/star/4.svg */ "./MindMap/Icons/star/4.svg")], ["green", __webpack_require__(/*! ./Icons/star/5.svg */ "./MindMap/Icons/star/5.svg")], ["blue", __webpack_require__(/*! ./Icons/star/6.svg */ "./MindMap/Icons/star/6.svg")], ["gray", __webpack_require__(/*! ./Icons/star/7.svg */ "./MindMap/Icons/star/7.svg")]]
  },
  people: {
    name: "用户",
    icons: [["red", __webpack_require__(/*! ./Icons/user/1.svg */ "./MindMap/Icons/user/1.svg")], ["orange", __webpack_require__(/*! ./Icons/user/2.svg */ "./MindMap/Icons/user/2.svg")], ["dark-blue", __webpack_require__(/*! ./Icons/user/3.svg */ "./MindMap/Icons/user/3.svg")], ["purple", __webpack_require__(/*! ./Icons/user/4.svg */ "./MindMap/Icons/user/4.svg")], ["green", __webpack_require__(/*! ./Icons/user/5.svg */ "./MindMap/Icons/user/5.svg")], ["blue", __webpack_require__(/*! ./Icons/user/6.svg */ "./MindMap/Icons/user/6.svg")], ["gray", __webpack_require__(/*! ./Icons/user/7.svg */ "./MindMap/Icons/user/7.svg")]]
  },
  arrow: {
    name: "箭头",
    icons: [["left", __webpack_require__(/*! ./Icons/arrow/1.svg */ "./MindMap/Icons/arrow/1.svg")], ["right", __webpack_require__(/*! ./Icons/arrow/2.svg */ "./MindMap/Icons/arrow/2.svg")], ["up", __webpack_require__(/*! ./Icons/arrow/3.svg */ "./MindMap/Icons/arrow/3.svg")], ["down", __webpack_require__(/*! ./Icons/arrow/4.svg */ "./MindMap/Icons/arrow/4.svg")], ["left-right", __webpack_require__(/*! ./Icons/arrow/5.svg */ "./MindMap/Icons/arrow/5.svg")], ["up-down", __webpack_require__(/*! ./Icons/arrow/6.svg */ "./MindMap/Icons/arrow/6.svg")], ["refresh", __webpack_require__(/*! ./Icons/arrow/7.svg */ "./MindMap/Icons/arrow/7.svg")]]
  },
  symbol: {
    name: "符号",
    icons: [["c_symbol_heart", __webpack_require__(/*! ./Icons/symbol/1-1.svg */ "./MindMap/Icons/symbol/1-1.svg")], ["c_symbol_dislike", __webpack_require__(/*! ./Icons/symbol/1-2.svg */ "./MindMap/Icons/symbol/1-2.svg")], ["c_symbol_like", __webpack_require__(/*! ./Icons/symbol/1-3.svg */ "./MindMap/Icons/symbol/1-3.svg")], ["c_symbol_music", __webpack_require__(/*! ./Icons/symbol/1-4.svg */ "./MindMap/Icons/symbol/1-4.svg")], ["c_symbol_lock", __webpack_require__(/*! ./Icons/symbol/1-5.svg */ "./MindMap/Icons/symbol/1-5.svg")], ["c_symbol_hourglass", __webpack_require__(/*! ./Icons/symbol/1-6.svg */ "./MindMap/Icons/symbol/1-6.svg")], ["c_symbol_broken_heart", __webpack_require__(/*! ./Icons/symbol/1-7.svg */ "./MindMap/Icons/symbol/1-7.svg")], ["c_symbol_quote", __webpack_require__(/*! ./Icons/symbol/2-1.svg */ "./MindMap/Icons/symbol/2-1.svg")], ["c_symbol_apostrophe", __webpack_require__(/*! ./Icons/symbol/2-2.svg */ "./MindMap/Icons/symbol/2-2.svg")], ["symbol-question", __webpack_require__(/*! ./Icons/symbol/2-3.svg */ "./MindMap/Icons/symbol/2-3.svg")], ["symbol-attention", __webpack_require__(/*! ./Icons/symbol/2-4.svg */ "./MindMap/Icons/symbol/2-4.svg")], ["symbol-wrong", __webpack_require__(/*! ./Icons/symbol/2-5.svg */ "./MindMap/Icons/symbol/2-5.svg")], ["symbol-pause", __webpack_require__(/*! ./Icons/symbol/2-6.svg */ "./MindMap/Icons/symbol/2-6.svg")], ["symbol-no-entry", __webpack_require__(/*! ./Icons/symbol/2-7.svg */ "./MindMap/Icons/symbol/2-7.svg")], ["symbol-plus", __webpack_require__(/*! ./Icons/symbol/3-1.svg */ "./MindMap/Icons/symbol/3-1.svg")], ["symbol-minus", __webpack_require__(/*! ./Icons/symbol/3-2.svg */ "./MindMap/Icons/symbol/3-2.svg")], ["symbol-info", __webpack_require__(/*! ./Icons/symbol/3-3.svg */ "./MindMap/Icons/symbol/3-3.svg")], ["symbol-divide", __webpack_require__(/*! ./Icons/symbol/3-4.svg */ "./MindMap/Icons/symbol/3-4.svg")], ["symbol-equality", __webpack_require__(/*! ./Icons/symbol/3-5.svg */ "./MindMap/Icons/symbol/3-5.svg")], ["symbol-right", __webpack_require__(/*! ./Icons/symbol/3-6.svg */ "./MindMap/Icons/symbol/3-6.svg")], ["symbol-code", __webpack_require__(/*! ./Icons/symbol/3-7.svg */ "./MindMap/Icons/symbol/3-7.svg")], ["c_symbol_contact", __webpack_require__(/*! ./Icons/symbol/4-1.svg */ "./MindMap/Icons/symbol/4-1.svg")], ["c_symbol_telephone", __webpack_require__(/*! ./Icons/symbol/4-2.svg */ "./MindMap/Icons/symbol/4-2.svg")], ["c_symbol_pen", __webpack_require__(/*! ./Icons/symbol/4-3.svg */ "./MindMap/Icons/symbol/4-3.svg")], ["c_symbol_money", __webpack_require__(/*! ./Icons/symbol/4-4.svg */ "./MindMap/Icons/symbol/4-4.svg")], ["c_symbol_bar_chart", __webpack_require__(/*! ./Icons/symbol/4-5.svg */ "./MindMap/Icons/symbol/4-5.svg")], ["c_symbol_pie_chart", __webpack_require__(/*! ./Icons/symbol/4-6.svg */ "./MindMap/Icons/symbol/4-6.svg")], ["c_symbol_line_graph", __webpack_require__(/*! ./Icons/symbol/4-7.svg */ "./MindMap/Icons/symbol/4-7.svg")], ["c_symbol_shopping_cart", __webpack_require__(/*! ./Icons/symbol/5-1.svg */ "./MindMap/Icons/symbol/5-1.svg")], ["c_symbol_medals", __webpack_require__(/*! ./Icons/symbol/5-2.svg */ "./MindMap/Icons/symbol/5-2.svg")], ["c_symbol_trophy", __webpack_require__(/*! ./Icons/symbol/5-3.svg */ "./MindMap/Icons/symbol/5-3.svg")], ["symbol-image", __webpack_require__(/*! ./Icons/symbol/5-4.svg */ "./MindMap/Icons/symbol/5-4.svg")], ["c_symbol_exercise", __webpack_require__(/*! ./Icons/symbol/5-5.svg */ "./MindMap/Icons/symbol/5-5.svg")], ["c_symbol_flight", __webpack_require__(/*! ./Icons/symbol/5-6.svg */ "./MindMap/Icons/symbol/5-6.svg")], ["symbol-pin", __webpack_require__(/*! ./Icons/symbol/5-7.svg */ "./MindMap/Icons/symbol/5-7.svg")]]
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (iconList);

/***/ }),

/***/ "./MindMap/index.js":
/*!**************************!*\
  !*** ./MindMap/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/spin/style */ "./node_modules/antd/lib/spin/style/index.js");
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/lib/spin */ "./node_modules/antd/lib/spin/index.js");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/message/style */ "./node_modules/antd/lib/message/style/index.js");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/antd/lib/message/index.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.less */ "./MindMap/index.less");
/* harmony import */ var _src_app_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/app.js */ "./src/app.js");
/* harmony import */ var _MainText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MainText */ "./MindMap/MainText.js");
/* harmony import */ var _TopBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TopBar */ "./MindMap/TopBar.js");
/* harmony import */ var _Rightbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Rightbar */ "./MindMap/Rightbar.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }









window.updateTimes = 0;
window.layoutItemTimes = 0;

var Minder = /*#__PURE__*/function (_PureComponent) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(Minder, _PureComponent);

  var _super = _createSuper(Minder);

  function Minder() {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, Minder);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.scale = 1;
    _this.colors = ["#2da4ff", "#9bc039", "#882e99", "#FF84BA", "#f88b15", "#00a7cd", "#fe7e4d", "#ec6d7a", "#fec936", "#67c97e", "#ef3224", "#40b5c6", "#956fe7"];
    _this.state = {
      loading: true,
      shrink: true,
      selectedKeys: ["3"],
      show3dView: false,
      rootName: "未命名脑图"
    };
    _this.readonly = false;

    _this.showRightPanel = function (value) {
      var type = _this.state.type;

      _this.setState({
        shrink: type === value,
        type: type === value ? "" : value
      });
    };

    _this.showMindText = function (value) {
      _this.setState({
        mindType: value
      });
    };

    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(Minder, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_14___default().get("/remind-api/get").then(function (res) {
        if (res.success) {
          _this2.init(res.data);
        } else {
          throw new Error(res.message);
        }
      })["catch"](function (err) {
        _this2.init({
          root: {
            text: "demo",
            layout: "fish-right",
            children: [{
              text: "女儿",
              children: [{
                text: "女婿"
              }]
            }, {
              text: "儿子",
              children: [{
                text: "儿媳"
              }]
            }, {
              text: "父亲",
              children: [{
                text: "爷爷",
                children: [{
                  text: "姑奶奶"
                }]
              }, {
                text: "奶奶"
              }, {
                text: "叔叔"
              }, {
                text: "姑姑"
              }]
            }, {
              text: "母亲",
              children: [{
                text: "舅舅"
              }, {
                text: "阿姨"
              }]
            }]
          },
          theme: "default"
        });

        antd_lib_message__WEBPACK_IMPORTED_MODULE_15__.default.error(err.message);
      });
    }
  }, {
    key: "setData",
    value: function setData(res) {
      this.setState({
        rootName: res.title,
        loading: false,
        nowData: data
      });
    }
  }, {
    key: "init",
    value: function init(data) {
      var _this3 = this;

      // 更改主题颜色
      _src_app_js__WEBPACK_IMPORTED_MODULE_10__.default.theme.themes.default.colors = this.colors;
      _src_app_js__WEBPACK_IMPORTED_MODULE_10__.default.theme.themes.default.lineShape = 'taper'; // 初始化脑图

      this.app = new _src_app_js__WEBPACK_IMPORTED_MODULE_10__.default(this.appRef, {
        data: data
      });
      window.remind = this.remind;
      this.app.readonly = this.readonly;
      this.setState({
        rootName: data.root.text,
        loading: false,
        nowData: data
      });
      this.app.on('item:beforeToggle', function (msg) {
        _this3.setState({
          loading: true
        });
      });
      this.app.on('item:afterToggle', function (msg) {
        _this3.setState({
          loading: false
        });
      });
      this.app.on("item:change", function (msg) {
        clearTimeout(_this3.changeTimeout);
        _this3.changeTimeout = setTimeout(function () {
          _this3.setState({
            message: "历史记录" + _this3.app.historyIndex,
            flag: !_this3.state.flag,
            nowData: _this3.app.page.toJSON()
          });
        }, 500);
      });
    } // 自动旋转

  }, {
    key: "autoRotate",
    value: function autoRotate() {
      var _this4 = this;

      var distance = 1000;
      var angle = 0;
      this.rotateInterval = setInterval(function () {
        _this4.graph.cameraPosition({
          x: distance * Math.sin(angle),
          z: distance * Math.cos(angle)
        });

        angle += Math.PI / 180;
      }, 30);
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$state = this.state,
          id = _this$state.id,
          rootName = _this$state.rootName,
          message = _this$state.message,
          shrink = _this$state.shrink,
          type = _this$state.type,
          nowData = _this$state.nowData,
          _this$state$mindType = _this$state.mindType,
          mindType = _this$state$mindType === void 0 ? "mind" : _this$state$mindType,
          _this$state$loading = _this$state.loading,
          loading = _this$state$loading === void 0 ? false : _this$state$loading,
          backgroundColor = _this$state.backgroundColor,
          backgroundImage = _this$state.backgroundImage,
          backgroundRepeat = _this$state.backgroundRepeat,
          backgroundSize = _this$state.backgroundSize,
          record = _this$state.record;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(antd_lib_spin__WEBPACK_IMPORTED_MODULE_16__.default, {
        spinning: loading,
        tip: "\u6B63\u5728\u52A0\u8F7D\u4E2D..."
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: "mind-wrap"
      }, this.app && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_TopBar__WEBPACK_IMPORTED_MODULE_12__.default, {
        id: id,
        readonly: this.readonly,
        record: record,
        nowData: nowData,
        ref: function ref(_ref) {
          _this5.topbar = _ref;
        },
        type: type,
        mindType: mindType,
        rootName: rootName,
        app: this.app,
        mind: this,
        message: message
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: "minder-content",
        style: {
          height: "calc(100vh - 60px)"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        style: {
          flex: 1,
          backgroundRepeat: backgroundRepeat,
          backgroundSize: backgroundSize,
          backgroundColor: backgroundColor,
          backgroundImage: backgroundImage ? "url(".concat(backgroundImage, ")") : 'none',
          display: mindType === "mind" ? "block" : "none",
          overflow: "hidden"
        },
        ref: function ref(_ref2) {
          _this5.appRef = _ref2;
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_MainText__WEBPACK_IMPORTED_MODULE_11__.default, {
        app: this.app,
        mindType: mindType,
        showMindText: this.showMindText,
        nowData: nowData
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", {
        className: "rightbar",
        style: {
          width: !shrink ? 300 : 0,
          height: "calc(100vh - 60px)",
          display: mindType === "mind" ? "block" : "none"
        }
      }, this.app && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_Rightbar__WEBPACK_IMPORTED_MODULE_13__.default, {
        app: this.app,
        nowData: nowData,
        mind: this,
        type: type
      })))));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.app && this.app.destroy();
    }
  }]);

  return Minder;
}(react__WEBPACK_IMPORTED_MODULE_7__.PureComponent);

react_dom__WEBPACK_IMPORTED_MODULE_8__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(Minder, null), document.querySelector("#root"));

/***/ }),

/***/ "./src/Control/Action.js":
/*!*******************************!*\
  !*** ./src/Control/Action.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/esm/construct.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Actions_Actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Actions/Actions */ "./src/Control/Actions/Actions.js");




/**
 * @class
 */

var Action = /*#__PURE__*/function () {
  function Action(remind) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Action);

    this.remind = remind;
    this.actions = (0,_Actions_Actions__WEBPACK_IMPORTED_MODULE_3__.default)(remind);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Action, [{
    key: "execute",
    value: function execute(name) {
      var ActionConstructor = this.actions[name];
      if (!ActionConstructor) return console.warn("没有该actin:", name);

      for (var _len = arguments.length, others = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        others[_key - 1] = arguments[_key];
      }

      var action = (0,_babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0__.default)(ActionConstructor, others);

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Action);

/***/ }),

/***/ "./src/Control/Actions/Actions.js":
/*!****************************************!*\
  !*** ./src/Control/Actions/Actions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _View_Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../View/Item */ "./src/View/Item.js");



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

    this._item = new _View_Item__WEBPACK_IMPORTED_MODULE_1__.default(remind.page);
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
    var childItem = new _View_Item__WEBPACK_IMPORTED_MODULE_1__.default(remind.page, {
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
      this._icon = Object.assign({}, item._icon, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, type, icon));
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllActions);

/***/ }),

/***/ "./src/Control/Command.js":
/*!********************************!*\
  !*** ./src/Control/Command.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Commands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Commands */ "./src/Control/Commands/index.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/**
 * @class
 */

var Command = /*#__PURE__*/function () {
  function Command(remind) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Command);

    this.remind = remind;
    var commandMap = new Map();
    var Commands = (0,_Commands__WEBPACK_IMPORTED_MODULE_3__.default)(remind);
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

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Command, [{
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Command);

/***/ }),

/***/ "./src/Control/Commands/index.js":
/*!***************************************!*\
  !*** ./src/Control/Commands/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  }];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllCommands);

/***/ }),

/***/ "./src/Control/Controller.js":
/*!***********************************!*\
  !*** ./src/Control/Controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var Controller = /*#__PURE__*/function () {
  function Controller(remind) {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Controller);

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

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Controller, [{
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);

/***/ }),

/***/ "./src/Control/History.js":
/*!********************************!*\
  !*** ./src/Control/History.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var History = /*#__PURE__*/function () {
  function History(remind) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, History);

    this.history = [];
    this.historyIndex = 0;
    this.remind = remind;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(History, [{
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (History);

/***/ }),

/***/ "./src/Control/Keyboard.js":
/*!*********************************!*\
  !*** ./src/Control/Keyboard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");


/**
 * @class
 */
var Keyboard = function Keyboard(remind) {
  var _this = this;

  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Keyboard);

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
    ['shiftKey', 'altKey', 'ctrlKey'].forEach(function (key) {
      _this[key] = e[key];
    });
  };

  this.onKeyDown = function (e) {
    if (["TEXTAREA", "INPUT"].indexOf(document.activeElement.tagName) > -1 && document.activeElement.className !== "remind-clip") {
      return;
    } // 同步鼠标状态


    ['shiftKey', 'altKey', 'ctrlKey'].forEach(function (key) {
      _this[key] = e[key];
    }); //只读模式

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Keyboard);

/***/ }),

/***/ "./src/Layout/Fish.js":
/*!****************************!*\
  !*** ./src/Layout/Fish.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Lines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Lines */ "./src/Layout/Lines/index.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var FishLayout = /*#__PURE__*/function () {
  function FishLayout(page) {
    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'right';

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, FishLayout);

    this.LINE_THICKNESS = 8;
    this.name = 'fish';
    this.page = page;
    this.line = _objectSpread(_objectSpread({}, _Lines__WEBPACK_IMPORTED_MODULE_3__.default), _Lines__WEBPACK_IMPORTED_MODULE_3__.default.fish);
    this.remind = page.remind;
    this.direction = direction;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(FishLayout, [{
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FishLayout);

/***/ }),

/***/ "./src/Layout/Lines/common.js":
/*!************************************!*\
  !*** ./src/Layout/Lines/common.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderUnderline": () => (/* binding */ renderUnderline),
/* harmony export */   "renderArrow": () => (/* binding */ renderArrow)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    path: [_objectSpread(_objectSpread({}, top), {}, {
      type: "moveTo"
    }), _objectSpread({}, end), _objectSpread({}, bottom)]
  };
}



/***/ }),

/***/ "./src/Layout/Lines/fish/item.js":
/*!***************************************!*\
  !*** ./src/Layout/Lines/fish/item.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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

/***/ "./src/Layout/Lines/fish/root.js":
/*!***************************************!*\
  !*** ./src/Layout/Lines/fish/root.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

/***/ "./src/Layout/Lines/index.js":
/*!***********************************!*\
  !*** ./src/Layout/Lines/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _map_bezier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map/bezier */ "./src/Layout/Lines/map/bezier.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./src/Layout/Lines/common.js");
/* harmony import */ var _map_polyline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map/polyline */ "./src/Layout/Lines/map/polyline.js");
/* harmony import */ var _map_taper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/taper */ "./src/Layout/Lines/map/taper.js");




var Line = {
  map: {
    bezier: _map_bezier__WEBPACK_IMPORTED_MODULE_0__.default,
    polyline: _map_polyline__WEBPACK_IMPORTED_MODULE_2__.default,
    taper: _map_taper__WEBPACK_IMPORTED_MODULE_3__.default
  },
  site: {
    bezier: __webpack_require__(/*! ./site/bezier */ "./src/Layout/Lines/site/bezier.js").default,
    polyline: __webpack_require__(/*! ./site/polyline */ "./src/Layout/Lines/site/polyline.js").default,
    taper: __webpack_require__(/*! ./site/taper */ "./src/Layout/Lines/site/taper.js").default
  },
  tree: {
    bezier: __webpack_require__(/*! ./tree/bezier */ "./src/Layout/Lines/tree/bezier.js").default
  },
  fish: {
    root: __webpack_require__(/*! ./fish/root */ "./src/Layout/Lines/fish/root.js").default,
    item: __webpack_require__(/*! ./fish/item */ "./src/Layout/Lines/fish/item.js").default
  },
  common: _common__WEBPACK_IMPORTED_MODULE_1__
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Line);

/***/ }),

/***/ "./src/Layout/Lines/map/bezier.js":
/*!****************************************!*\
  !*** ./src/Layout/Lines/map/bezier.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    data.path.push(_objectSpread(_objectSpread({}, bezierPos), {}, {
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

/***/ "./src/Layout/Lines/map/polyline.js":
/*!******************************************!*\
  !*** ./src/Layout/Lines/map/polyline.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
    lineData.path.push(_objectSpread(_objectSpread({}, startPos), {}, {
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
        lineData.path.push(_objectSpread(_objectSpread({}, middle), {}, {
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
      path: [_objectSpread(_objectSpread({}, startPos), {}, {
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
        lineData.path.push(_objectSpread(_objectSpread({}, _middle), {}, {
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (polyline);

/***/ }),

/***/ "./src/Layout/Lines/map/taper.js":
/*!***************************************!*\
  !*** ./src/Layout/Lines/map/taper.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taper);

/***/ }),

/***/ "./src/Layout/Lines/site/bezier.js":
/*!*****************************************!*\
  !*** ./src/Layout/Lines/site/bezier.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

/***/ "./src/Layout/Lines/site/polyline.js":
/*!*******************************************!*\
  !*** ./src/Layout/Lines/site/polyline.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

/***/ "./src/Layout/Lines/site/taper.js":
/*!****************************************!*\
  !*** ./src/Layout/Lines/site/taper.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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

/***/ "./src/Layout/Lines/tree/bezier.js":
/*!*****************************************!*\
  !*** ./src/Layout/Lines/tree/bezier.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

/***/ "./src/Layout/Map.js":
/*!***************************!*\
  !*** ./src/Layout/Map.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Lines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Lines */ "./src/Layout/Lines/index.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var MapLayout = /*#__PURE__*/function () {
  function MapLayout(page) {
    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, MapLayout);

    this.LINE_THICKNESS = 8;
    this.name = 'map';
    this.page = page;
    this.line = _objectSpread(_objectSpread({}, _Lines__WEBPACK_IMPORTED_MODULE_3__.default), _Lines__WEBPACK_IMPORTED_MODULE_3__.default.map);
    this.remind = page.remind;
    this.direction = direction;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(MapLayout, [{
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapLayout);

/***/ }),

/***/ "./src/Layout/Site.js":
/*!****************************!*\
  !*** ./src/Layout/Site.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Lines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Lines */ "./src/Layout/Lines/index.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var SiteLayout = /*#__PURE__*/function () {
  function SiteLayout(page) {
    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, SiteLayout);

    this.LINE_THICKNESS = 8;
    this.name = 'site';
    this.page = page;
    this.line = _objectSpread(_objectSpread({}, _Lines__WEBPACK_IMPORTED_MODULE_3__.default), _Lines__WEBPACK_IMPORTED_MODULE_3__.default.site);
    this.remind = page.remind;
    this.direction = direction;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(SiteLayout, [{
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SiteLayout);

/***/ }),

/***/ "./src/Layout/Tree.js":
/*!****************************!*\
  !*** ./src/Layout/Tree.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Lines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Lines */ "./src/Layout/Lines/index.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var TreeLayout = /*#__PURE__*/function () {
  function TreeLayout(page) {
    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'right';

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, TreeLayout);

    this.name = 'tree';
    this.page = page;
    this.line = _objectSpread(_objectSpread({}, _Lines__WEBPACK_IMPORTED_MODULE_3__.default), _Lines__WEBPACK_IMPORTED_MODULE_3__.default.tree);
    this.remind = page.remind;
    this.direction = direction;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(TreeLayout, [{
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TreeLayout);

/***/ }),

/***/ "./src/Layout/index.js":
/*!*****************************!*\
  !*** ./src/Layout/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapLayout": () => (/* reexport safe */ _Map__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "SiteLayout": () => (/* reexport safe */ _Site__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "TreeLayout": () => (/* reexport safe */ _Tree__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "FishLayout": () => (/* reexport safe */ _Fish__WEBPACK_IMPORTED_MODULE_3__.default)
/* harmony export */ });
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Map */ "./src/Layout/Map.js");
/* harmony import */ var _Tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tree */ "./src/Layout/Tree.js");
/* harmony import */ var _Site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Site */ "./src/Layout/Site.js");
/* harmony import */ var _Fish__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Fish */ "./src/Layout/Fish.js");






/***/ }),

/***/ "./src/Model/DragTool.js":
/*!*******************************!*\
  !*** ./src/Model/DragTool.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _View_Item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../View/Item */ "./src/View/Item.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var DragTool = /*#__PURE__*/function () {
  function DragTool(page) {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, DragTool);

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

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(DragTool, [{
    key: "initGhost",
    value: function initGhost() {
      this.ghost = new _View_Item__WEBPACK_IMPORTED_MODULE_3__.default(this.page, {
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

        if (_this2.isInBBox(x, y, _objectSpread(_objectSpread({}, item.contentRect), {}, {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DragTool);

/***/ }),

/***/ "./src/Model/Page.js":
/*!***************************!*\
  !*** ./src/Model/Page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _View_Item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../View/Item */ "./src/View/Item.js");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Layout */ "./src/Layout/index.js");
/* harmony import */ var _View_Theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../View/Theme */ "./src/View/Theme.js");
/* harmony import */ var _DragTool__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DragTool */ "./src/Model/DragTool.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Page = /*#__PURE__*/function () {
  function Page(remind) {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, Page);

    this.lines = [];
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


    requestAnimationFrame(function () {
      _this.show();
    });
    this.dragTool = new _DragTool__WEBPACK_IMPORTED_MODULE_7__.default(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(Page, [{
    key: "initLayout",
    value: function initLayout() {
      this.layout = {
        map: new _Layout__WEBPACK_IMPORTED_MODULE_5__.MapLayout(this),
        'map-right': new _Layout__WEBPACK_IMPORTED_MODULE_5__.MapLayout(this, 'right'),
        'map-left': new _Layout__WEBPACK_IMPORTED_MODULE_5__.MapLayout(this, 'left'),
        site: new _Layout__WEBPACK_IMPORTED_MODULE_5__.SiteLayout(this),
        'site-bottom': new _Layout__WEBPACK_IMPORTED_MODULE_5__.SiteLayout(this, 'bottom'),
        'site-top': new _Layout__WEBPACK_IMPORTED_MODULE_5__.SiteLayout(this, 'top'),
        'tree-right': new _Layout__WEBPACK_IMPORTED_MODULE_5__.TreeLayout(this, 'right'),
        'tree-left': new _Layout__WEBPACK_IMPORTED_MODULE_5__.TreeLayout(this, 'left'),
        'fish-right': new _Layout__WEBPACK_IMPORTED_MODULE_5__.FishLayout(this, 'right'),
        'fish-left': new _Layout__WEBPACK_IMPORTED_MODULE_5__.FishLayout(this, 'left')
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
      var root = new _View_Item__WEBPACK_IMPORTED_MODULE_4__.default(this, {
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
      this.theme = _View_Theme__WEBPACK_IMPORTED_MODULE_6__.default.themes[value];
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
          others = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_this$data, ["root"]);

      var data = _objectSpread({
        root: this.root.getData()
      }, others);

      return data;
    }
  }, {
    key: "show",
    value: function show() {
      this.updateSubtree(false); // 统一更新

      this.update();

      if (this.root.getLayout().name === "fish") {
        this.root.getLayout().center();
      } else {
        this.root.center();
      }

      this.select(this.root);
      return this;
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

/***/ }),

/***/ "./src/View/Item.js":
/*!**************************!*\
  !*** ./src/View/Item.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Nodes_Nodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nodes/Nodes */ "./src/View/Nodes/Nodes.js");
/* harmony import */ var _Model_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Model/Page */ "./src/Model/Page.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_5__);







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

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Item);

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

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Item, [{
    key: "setData",
    value: function setData(data) {
      this.clear();
      this.data = data;

      if (!this.data.uuid) {
        this.data.uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)();
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
        _Nodes_Nodes__WEBPACK_IMPORTED_MODULE_3__.default.nodes[type](this, this.dom);
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
      var childrenCopy = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(this.children);

      childrenCopy.forEach(function (item) {
        item.destroy(false);
      });
      this.children = [];
    }
  }, {
    key: "isRoot",
    value: function isRoot() {
      return this.parent instanceof _Model_Page__WEBPACK_IMPORTED_MODULE_4__.default;
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);

/***/ }),

/***/ "./src/View/Menu.js":
/*!**************************!*\
  !*** ./src/View/Menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



/**
 * @class
 */
var Menu = /*#__PURE__*/function () {
  function Menu(_remind) {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Menu);

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

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Menu, [{
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);

/***/ }),

/***/ "./src/View/Nodes/Nodes.js":
/*!*********************************!*\
  !*** ./src/View/Nodes/Nodes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var _this = undefined;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
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

/***/ }),

/***/ "./src/View/Note.js":
/*!**************************!*\
  !*** ./src/View/Note.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var Note = /*#__PURE__*/function () {
  function Note(app) {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Note);

    this.onOutClick = function (e) {
      if (e.path.indexOf(_this.note) < 0) {
        _this.hide();
      }
    };

    this.remind = app;
    this.initDom();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Note, [{
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Note);

/***/ }),

/***/ "./src/View/Theme.js":
/*!***************************!*\
  !*** ./src/View/Theme.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Control_Command__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Control/Command */ "./src/Control/Command.js");
/* harmony import */ var _Control_Keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Control/Keyboard */ "./src/Control/Keyboard.js");
/* harmony import */ var _Model_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Model/Page */ "./src/Model/Page.js");
/* harmony import */ var _Control_Action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Control/Action */ "./src/Control/Action.js");
/* harmony import */ var _View_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./View/Menu */ "./src/View/Menu.js");
/* harmony import */ var _Control_History__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Control/History */ "./src/Control/History.js");
/* harmony import */ var _Layout_Lines__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Layout/Lines */ "./src/Layout/Lines/index.js");
/* harmony import */ var _View_Theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./View/Theme */ "./src/View/Theme.js");
/* harmony import */ var _Control_Controller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Control/Controller */ "./src/Control/Controller.js");
/* harmony import */ var _View_Note__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./View/Note */ "./src/View/Note.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./index.less */ "./src/index.less");












 // import MouseManager from './Control/Mou'

/**
 * @class
 */

var Remind = /*#__PURE__*/function () {
  function Remind(container) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Remind);

    this._subscribers = {};

    if (container) {
      return this.init(container, options);
    }
  }
  /**
   * @param  {} container
   * @param  {} options={}
   */


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Remind, [{
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
      this.command = new _Control_Command__WEBPACK_IMPORTED_MODULE_2__.default(this);
      this.action = new _Control_Action__WEBPACK_IMPORTED_MODULE_5__.default(this);
      this.history = new _Control_History__WEBPACK_IMPORTED_MODULE_7__.default(this);
      this.menu = new _View_Menu__WEBPACK_IMPORTED_MODULE_6__.default(this);
      this.keyboard = new _Control_Keyboard__WEBPACK_IMPORTED_MODULE_3__.default(this); // this.clipManager = new ClipManager(this);

      this.controller = new _Control_Controller__WEBPACK_IMPORTED_MODULE_10__.default(this);
      this.page = new _Model_Page__WEBPACK_IMPORTED_MODULE_4__.default(this);
      this.note = new _View_Note__WEBPACK_IMPORTED_MODULE_11__.default(this);
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
Remind.theme = _View_Theme__WEBPACK_IMPORTED_MODULE_9__.default;
Remind.line = _Layout_Lines__WEBPACK_IMPORTED_MODULE_8__.default; // 暴露出去可用复写

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Remind);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./MindMap/Import/importFile.less":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./MindMap/Import/importFile.less ***!
  \*************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".import-from-file-modal .ant-modal-body {\n  padding: 0;\n  height: 400px;\n  display: flex;\n}\n.import-from-file-modal .ant-modal-body .aside-box {\n  position: relative;\n  width: 200px;\n  box-shadow: 6px 0 5px 0 rgba(0, 0, 0, 0.06);\n  z-index: 1;\n}\n.import-from-file-modal .ant-modal-body .aside-box .type-list {\n  padding: 0;\n  list-style: none;\n  height: 100%;\n  border-right: 1px solid #e6e6e6;\n}\n.import-from-file-modal .ant-modal-body .aside-box .type-list .type-list-item {\n  height: 40px;\n  line-height: 40px;\n  border-bottom: 1px solid #e6e6e6;\n  border-left: 4px solid #fff;\n  padding-left: 16px;\n  cursor: pointer;\n}\n.import-from-file-modal .ant-modal-body .aside-box .type-list .type-list-item.active {\n  background: #E8ECF8;\n  border-left: 4px solid #2E3341;\n  color: #2E3341;\n}\n.import-from-file-modal .ant-modal-body .main-box {\n  flex: 1;\n  background: #fff;\n}\n.import-from-file-modal .ant-modal-body .main-box .ant-upload.ant-upload-drag {\n  background: none;\n  border: 2px dashed #FAFBFC;\n}\n.import-from-file-modal .ant-modal-body .main-box .ant-upload.ant-upload-drag:hover {\n  border: 2px dashed #e6e6e6;\n}\n.import-from-file-modal .ant-modal-body .main-box .ant-upload.ant-upload-drag .ant-upload {\n  padding: 0 0 40px;\n}\n", "",{"version":3,"sources":["webpack://./MindMap/Import/importFile.less"],"names":[],"mappings":"AAAA;EAKY,UAAA;EACA,aAAA;EACA,aAAA;AAHZ;AAJA;EAYgB,kBAAA;EACA,YAAA;EACA,2CAAA;EACA,UAAA;AALhB;AAVA;EAoBoB,UAAA;EACA,gBAAA;EACA,YAAA;EACA,+BAAA;AAPpB;AAhBA;EA2BoB,YAAA;EACA,iBAAA;EACA,gCAAA;EACA,2BAAA;EACA,kBAAA;EACA,eAAA;AARpB;AAUoB;EACI,mBAAA;EACA,8BAAA;EACA,cAAA;AARxB;AA7BA;EA6CgB,OAAA;EACA,gBAAA;AAbhB;AAjCA;EAmDgB,gBAAA;EACA,0BAAA;AAfhB;AAiBgB;EACI,0BAAA;AAfpB;AAxCA;EA2DoB,iBAAA;AAhBpB","sourcesContent":[".import-from-file-modal {\n    & {}\n\n    .ant-modal-body {\n        & {\n            padding: 0;\n            height: 400px;\n            display: flex;\n        }\n\n        .aside-box {\n            & {\n                position: relative;\n                width: 200px;\n                box-shadow: 6px 0 5px 0 rgba(0, 0, 0, 0.06);\n                z-index: 1;\n            }\n\n            .type-list {\n                & {\n                    padding: 0;\n                    list-style: none;\n                    height: 100%;\n                    border-right: 1px solid #e6e6e6;\n                }\n\n                .type-list-item {\n                    height: 40px;\n                    line-height: 40px;\n                    border-bottom: 1px solid #e6e6e6;\n                    border-left: 4px solid #fff;\n                    padding-left: 16px;\n                    cursor: pointer;\n\n                    &.active {\n                        background: #E8ECF8;\n                        border-left: 4px solid #2E3341;\n                        color: #2E3341;\n                    }\n                }\n            }\n        }\n\n        .main-box {\n            & {\n                flex: 1;\n                background: #fff;\n            }\n\n\n            .ant-upload.ant-upload-drag {\n                background: none;\n                border: 2px dashed #FAFBFC;\n\n                &:hover {\n                    border: 2px dashed #e6e6e6;\n                }\n\n                .ant-upload {\n                    padding: 0 0 40px;\n                }\n            }\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./MindMap/index.less":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./MindMap/index.less ***!
  \*************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ant-dropdown-menu-item {\n  list-style: none;\n}\n.minder-header {\n  height: 60px;\n  background: #fff;\n  font-size: 14px;\n  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1), 0 10px 12px 0 rgba(170, 182, 206, 0.2), inset 0 -1px 0 0 hsla(0, 0%, 100%, 0.3);\n  z-index: 1;\n  position: relative;\n  padding: 0 20px;\n  display: flex;\n  align-items: center;\n  justify-items: center;\n}\n.minder-header .read-only-bar {\n  width: 100%;\n  height: 30px;\n  text-align: center;\n  position: absolute;\n  background: #ffffde;\n  left: 0;\n  font-size: 12px;\n  line-height: 30px;\n  top: 60px;\n}\n.minder-header div {\n  transition: left, top, width, height 500ms ease-out;\n}\n.minder-header .title-input {\n  margin-top: 2px;\n  border: none;\n  margin-left: 20px;\n  width: 150px;\n  border-radius: 0;\n  border-bottom: 1px solid transparent;\n}\n.minder-header .title-input:focus,\n.minder-header .title-input:active {\n  box-shadow: none;\n  border-color: transparent;\n}\n.minder-header .title-input:hover {\n  border-bottom: 1px solid #efefef;\n}\n.minder-header > .shortcut {\n  font-size: 18px;\n  position: absolute;\n  right: 150px;\n  cursor: pointer;\n}\n.minder-header > .shortcut:hover {\n  color: #999;\n}\n.minder-header .button-area {\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  margin-left: 100px;\n}\n.minder-header .button-area-footer {\n  right: 20px;\n  position: absolute;\n}\n.minder-header .button-area-footer .ant-btn {\n  width: 38xpx;\n}\n.minder-header .handle-button {\n  display: flex;\n  align-items: center;\n  justify-items: center;\n  margin-left: 3px;\n  cursor: pointer;\n}\n.minder-header .handle-button .anticon {\n  padding-top: 2px;\n}\n.minder-header .handle-button > i {\n  height: 32px;\n  padding: 0 10px;\n  line-height: 33px;\n  border-radius: 2px;\n  font-size: 16px;\n}\n.minder-header .handle-button > i:hover {\n  background: #f0f0f0;\n}\n.minder-header .handle-button > i.disabled {\n  background: none !important;\n  cursor: not-allowed;\n  color: #b4b4b4;\n}\n.main-mind-tab {\n  display: flex;\n  margin-left: 20px;\n}\n.main-mind-tab > div {\n  cursor: pointer;\n  transition: all 0.5s ease-in;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 7px 20px;\n  border-bottom: 2px solid transparent;\n}\n.main-mind-tab > div i {\n  font-size: 18px;\n  margin-bottom: -5px;\n}\n.main-mind-tab > div.active {\n  border-bottom: 2px solid #0ba5f1;\n}\n.minder-content {\n  display: flex;\n  background-repeat: no-repeat;\n}\n.minder-content .remind .item-note {\n  font-family: 'iconfont';\n}\n.minder-content .remind .item-note::before {\n  content: \"\\e605\";\n}\n.minder-content .remind::-webkit-scrollbar {\n  visibility: hidden;\n}\n.minder-content .text {\n  text-align: left;\n}\n.minder-content .mainText-content {\n  background: #fff;\n  width: 1000px;\n  margin: 20px auto;\n  padding: 20px;\n  overflow: auto;\n}\n.minder-content .mainText-content .ant-tree li .ant-tree-node-content-wrapper {\n  height: auto;\n}\n.minder-content .mainText-content .mainText-item-title {\n  display: flex;\n}\n.minder-content .mainText-content .mainText-item-title h3,\n.minder-content .mainText-content .mainText-item-title h2 {\n  margin-left: 5px;\n  margin-bottom: 0px;\n}\n.minder-content .mainText-content .main-text-tree {\n  overflow: scroll;\n  height: calc(100vh - 180px);\n  margin: 10px 0;\n}\n.minder-content .mainText-content .mind-icon {\n  font-size: 18px;\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  background-size: 20px;\n  border: 2px solid #122121;\n  margin-top: -2px;\n  border-radius: 24px;\n}\n.minder-content .rightbar {\n  overflow: auto;\n  border-top: 1px solid #e0e0e0;\n  margin-top: 0;\n  background: #fff;\n  border-left: 1px solid #e0e0e0;\n  transition: width 200ms;\n}\n.minder-content .rightbar > .ant-tabs {\n  width: 300px;\n}\n.minder-content .rightbar > .ant-tabs .ant-tabs-tab {\n  margin-left: 20px;\n}\n.minder-content .rightbar .theme-save {\n  padding: 20px;\n}\n.minder-content .rightbar .theme-save > ul {\n  width: 100%;\n  padding: 0;\n}\n.minder-content .rightbar .theme-save > ul > li {\n  height: 150px;\n  width: 100%;\n  list-style: none;\n  border: 1px solid #efefef;\n  margin-bottom: 20px;\n  display: flex;\n  background-color: #bbb;\n  cursor: pointer;\n}\n.minder-content .rightbar .theme-save > ul > li img {\n  width: 100%;\n  vertical-align: middle;\n}\n.minder-content .rightbar .theme-save > ul li.active {\n  font-family: \"iconfont\" !important;\n  position: relative;\n  color: #11bd11;\n  border: 2px solid #11bd11;\n}\n.minder-content .rightbar .theme-save > ul li.active::before {\n  content: \" \";\n  border: 20px solid;\n  border-color: transparent #11bd11 #11bd11 transparent;\n  position: absolute;\n  bottom: 0;\n  right: 0px;\n}\n.minder-content .rightbar .theme-save > ul li.active::after {\n  content: \"\\e702\";\n  position: absolute;\n  color: #fff;\n  font-size: 16px;\n  bottom: 0;\n  right: 3px;\n}\n.minder-content .rightbar .icon-content .icon-item {\n  padding: 10px 20px;\n  border-bottom: 1px solid #efefef;\n}\n.minder-content .rightbar .icon-content .icon-item > span {\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.minder-content .rightbar .icon-content .icon-item .icon-list > i {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  font-size: 24px;\n  margin-right: 10px;\n  display: inline-block;\n  background-size: 24px;\n}\n.minder-content .rightbar .right-panel-card {\n  padding: 20px;\n  border-bottom: 1px solid #e0e0e0;\n}\n.minder-content .rightbar .right-panel-card > .panel-title {\n  margin-bottom: 10px;\n  font-size: 18px;\n}\n.minder-content .rightbar .right-panel-card .right-panel-card-children {\n  display: flex;\n}\n.minder-content .color-pick-demo {\n  cursor: pointer;\n  transition: background 500ms ease;\n  margin-right: 5px;\n  width: 40px;\n  height: 24px;\n  border-radius: 5px;\n  border: 1px solid #efefef;\n}\n.minder-content .red {\n  color: red;\n}\n.minder-content .yellow {\n  color: #c2c200;\n}\n.minder-content .blue {\n  color: #2d2df3;\n}\n.minder-content .purple {\n  color: #860f86;\n}\n.minder-content .green {\n  color: #9fe048;\n}\n.minder-content .skyblue {\n  color: skyblue;\n}\n.minder-content .grey {\n  color: #798c8f;\n}\n.mind-wrap {\n  height: 100vh;\n  width: 100vw;\n  background: #f8f8f8;\n}\n.key-list {\n  padding: 20px;\n}\n.key-list > div {\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n}\n.key-list > div > span {\n  display: inline-block;\n}\n.key-list > div > span:first-child {\n  font-size: 12px;\n  margin-right: 20px;\n  width: 80px;\n}\n.key-list > div > span:last-child {\n  width: 120px;\n  text-align: center;\n  padding: 0 5px;\n  border: 1px solid #efefef;\n}\n.mind-history-list {\n  display: flex;\n  justify-content: space-between;\n}\n", "",{"version":3,"sources":["webpack://./MindMap/index.less"],"names":[],"mappings":"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","sourcesContent":[".ant-dropdown-menu-item {\n    list-style: none;\n}\n\n.minder-header {\n    & {\n        height: 60px;\n        background: #fff;\n        font-size: 14px;\n        box-shadow: 0 0 6px 0 rgba(0, 0, 0, .1), 0 10px 12px 0 rgba(170, 182, 206, .2), inset 0 -1px 0 0 hsla(0, 0%, 100%, .3);\n        z-index: 1;\n        position: relative;\n        padding: 0 20px;\n        display: flex;\n        align-items: center;\n        justify-items: center;\n    }\n\t.read-only-bar{\n\t\twidth: 100%;\n\t\theight: 30px;\n\t\ttext-align: center;\n\t\tposition: absolute;\n\t\tbackground: #ffffde;\n\t\tleft: 0;\n\t\tfont-size: 12px;\n\t\tline-height: 30px;\n\t\ttop: 60px;\n\t}\n    div {\n        transition: left, top, width, height 500ms ease-out;\n    }\n\n    .title-input {\n        & {\n            margin-top: 2px;\n            border: none;\n            margin-left: 20px;\n            width: 150px;\n            border-radius: 0;\n            border-bottom: 1px solid transparent;\n        }\n\n        &:focus,\n        &:active {\n            box-shadow: none;\n            border-color: transparent;\n        }\n\n        &:hover {\n            border-bottom: 1px solid #efefef;\n        }\n    }\n\n    >.shortcut {\n        font-size: 18px;\n        position: absolute;\n        right: 150px;\n        cursor: pointer;\n\n        &:hover {\n            color: #999;\n        }\n    }\n\n    .button-area {\n        display: flex;\n        align-items: center;\n        justify-items: center;\n        margin-left: 100px;\n        // width: ~\"calc(100vw - 600px)\"\n    }\n\n    .button-area-footer {\n        right: 20px;\n        position: absolute;\n\n        .ant-btn {\n            width: 38xpx;\n        }\n    }\n\n    .handle-button {\n        & {\n            display: flex;\n            align-items: center;\n            justify-items: center;\n            margin-left: 3px;\n            cursor: pointer;\n        }\n\n        .anticon {\n            padding-top: 2px;\n        }\n\n        >i {\n            height: 32px;\n            padding: 0 10px;\n            line-height: 33px;\n            border-radius: 2px;\n            font-size: 16px;\n\n            &:hover {\n                background: #f0f0f0;\n            }\n\n            &.disabled {\n                background: none !important;\n                cursor: not-allowed;\n                color: #b4b4b4;\n            }\n        }\n    }\n}\n.main-mind-tab{\n\tdisplay: flex;\n\tmargin-left:20px;\n\t>div{\n\t\tcursor: pointer;\n\t\ttransition: all 0.5s ease-in;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tpadding:7px 20px;\n\t\tborder-bottom:2px solid transparent;\n\t\ti{\n\t\t\tfont-size: 18px;\n\t\t\tmargin-bottom: -5px;\n\t\t}\n\t}\n\t>div.active{\n\t\tborder-bottom:2px solid rgb(11, 165, 241)\n\t}\n}\n.minder-content {\n    display: flex;\n\tbackground-repeat: no-repeat;\n\t// 复写样式\n\t.remind{\n        .item-note{\n            font-family: 'iconfont';\n            &::before{\n                content:\"\\e605\"\n            }\n        }\n        &::-webkit-scrollbar{\n            visibility: hidden;\n        }\n\t}\n\n    .text {\n        text-align: left;\n    }\n\t\n\t.mainText-content {\n\t\tbackground: #fff;\n\t\twidth:1000px;\n\t\tmargin:20px auto;\n\t\tpadding: 20px;\n        overflow: auto;\n\t\t.ant-tree li .ant-tree-node-content-wrapper{\n\t\t\theight:auto;\n\t\t}\n\t\t.mainText-item-title{\n\t\t\tdisplay: flex;\n\t\t\th3,h2{\n\t\t\t\tmargin-left:5px;\n\t\t\t\tmargin-bottom: 0px;\n\t\t\t}\n\t\t}\n        .main-text-tree{\n            overflow: scroll;\n            height: calc(100vh - 180px);\n            margin:10px 0\n        }\n\t\t.mind-icon{\n\t\t\tfont-size: 18px;\n            display: inline-block;\n            width: 24px;\n            height: 24px;\n            background-size: 20px;\n\t\t\tborder: 2px solid #122121;\n\t\t\tmargin-top:-2px;\n            border-radius: 24px;\n\t\t}\n\t}\n\n    .rightbar {\n        overflow: auto;\n        border-top: 1px solid #e0e0e0;\n        margin-top: 0;\n        background: #fff;\n        border-left: 1px solid #e0e0e0;\n        transition: width 200ms;\n\n        >.ant-tabs {\n            width: 300px;\n            .ant-tabs-tab{\n                margin-left: 20px;\n            }\n        }\n\t\t.theme-save{\n\t\t\tpadding:20px;\n\t\t\t>ul{\n\t\t\t\twidth:100%;\n\t\t\t\tpadding:0;\n\t\t\t\t>li{\n\t\t\t\t\theight:150px;\n\t\t\t\t\twidth:100%;\n\t\t\t\t\tlist-style: none;\n\t\t\t\t\tborder:1px solid #efefef;\n\t\t\t\t\tmargin-bottom:20px;\n\t\t\t\t\tdisplay:flex;\n\t\t\t\t\tbackground-color: #bbb;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\timg{\n\t\t\t\t\t\twidth:100%;\n\t\t\t\t\t\tvertical-align: middle;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tli.active{\n\t\t\t\t\tfont-family: \"iconfont\" !important;\n\t\t\t\t\tposition: relative;\n\t\t\t\t\tcolor:#11bd11;\n\t\t\t\t\tborder:2px solid #11bd11;\n\t\t\t\t\t&::before{\n\t\t\t\t\t\tcontent: \" \";\n\t\t\t\t\t\tborder: 20px solid;\n\t\t\t\t\t\tborder-color: transparent #11bd11 #11bd11 transparent;\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\tbottom: 0;\n\t\t\t\t\t\tright: 0px;\n\t\t\t\t\t}\n\t\t\t\t\t&::after{\n\t\t\t\t\t\tcontent:\"\\e702\";\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\tcolor:#fff;\n\t\t\t\t\t\tfont-size: 16px;\n\t\t\t\t\t\tbottom:0;\n\t\t\t\t\t\tright:3px;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n        .icon-content {\n            .icon-item {\n                padding: 10px 20px;\n                border-bottom: 1px solid #efefef;\n\n                >span {\n                    margin-bottom: 10px;\n                    display: flex;\n                    align-items: center;\n                    justify-content: space-between;\n                }\n\n                .icon-list {\n                    >i {\n                        cursor: pointer;\n                        width: 24px;\n                        height: 24px;\n                        font-size: 24px;\n                        margin-right: 10px;\n\n                        display: inline-block;\n\n                        background-size: 24px;\n                    }\n                }\n            }\n        }\n\n        .right-panel-card {\n            padding: 20px;\n\n            >.panel-title {\n                margin-bottom: 10px;\n                font-size: 18px;\n            }\n\n            border-bottom: 1px solid #e0e0e0;\n\n            .right-panel-card-children {\n                display: flex;\n            }\n        }\n    }\n\n    .color-pick-demo {\n        cursor: pointer;\n        transition: background 500ms ease;\n        margin-right: 5px;\n        width: 40px;\n        height: 24px;\n\t\tborder-radius: 5px;\n\t\tborder:1px solid #efefef;\n    }\n\n    .red {\n        color: red;\n    }\n\n    .yellow {\n        color: rgb(194, 194, 0);\n    }\n\n    .blue {\n        color: rgb(45, 45, 243);\n    }\n\n    .purple {\n        color: rgb(134, 15, 134);\n    }\n\n    .green {\n        color: #9fe048;\n    }\n\n    .skyblue {\n        color: skyblue;\n    }\n\n    .grey {\n        color: rgb(121, 140, 143);\n    }\n\n    \n}\n\n.mind-wrap {\n    height: 100vh;\n    width: 100vw;\n    background: rgb(248, 248, 248);\n}\n\n.key-list {\n    padding: 20px;\n    \n    >div {\n        margin-bottom: 5px;\n        display: flex;\n        align-items: center;\n\n        >span {\n            display: inline-block;\n        }\n\n        >span:first-child {\n            font-size: 12px;\n            margin-right: 20px;\n            width: 80px;\n        }\n\n        >span:last-child {\n            width: 120px;\n            text-align: center;\n            padding: 0 5px;\n            border: 1px solid #efefef;\n        }\n    }\n}\n.mind-history-list{\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/index.less":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/index.less ***!
  \*********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".remind.theme-stright {\n  background-color: #f4f9fa;\n}\n.remind.theme-stright .remind-page .shape-ellipse {\n  border-radius: 10px;\n  background-color: #ff383e !important;\n  border: 3px solid #ff8d8f;\n  padding: 20px;\n}\n.remind.theme-stright .remind-page .shape-ellipse .item-text {\n  font-size: 28px;\n}\n.remind.theme-box {\n  background-color: #1f2934;\n}\n.remind.theme-box .remind-scroll .remind-page .shape-ellipse {\n  background-color: #1f2934;\n  border: 3px solid #20a5a1;\n  font-size: 48px;\n  padding: 20px;\n  color: #20a5a1;\n}\n.remind.theme-box .remind-scroll .remind-page .shape-ellipse .item-text {\n  color: #20a5a1;\n  font-size: 28px;\n}\n.remind.theme-box .remind-scroll .remind-page .shape-box {\n  background-color: #20a5a1;\n  color: #000;\n  padding: 10px 20px;\n  border-radius: 10px;\n}\n.remind.theme-box .remind-scroll .remind-page .shape-box > .children .shape-box > .content {\n  background-color: transparent;\n  border: none;\n  color: #20a5a1;\n  padding: 5px;\n  font-size: 22px;\n}\n.remind.theme-box .remind-scroll .remind-page .shape-blank {\n  background-color: transparent;\n  border: none;\n  color: #20a5a1;\n  padding: 5px;\n  font-size: 22px;\n}\n.remind {\n  overflow: scroll;\n  width: 100%;\n  height: 100%;\n  transition: background 400ms ease-out;\n}\n.remind * {\n  box-sizing: border-box;\n}\n.remind ul,\n.remind li {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.remind ul li,\n.remind li li {\n  list-style: none;\n}\n.remind .remind-scroll {\n  position: relative;\n}\n.remind .remind-scroll .remind-page {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.remind .remind-scroll .remind-page .remind-canvas {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.remind .remind-scroll .remind-page .remind-selection {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  display: none;\n  transition: all 100ms ease-out;\n  pointer-events: none;\n}\n.remind .remind-scroll .remind-page .remind-selection:after {\n  transition: all 100ms ease-out;\n  content: ' ';\n  display: block;\n  width: calc(100% + 6px);\n  height: calc(100% + 6px);\n  position: absolute;\n  left: -5px;\n  top: -5px;\n  border: 2px solid blue;\n}\n.remind .remind-scroll .remind-page .remind-item {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 4px 10px;\n  color: #123;\n  border-radius: 3px;\n  cursor: pointer;\n  user-select: none;\n  align-items: center;\n}\n.remind .remind-scroll .remind-page .remind-item::after {\n  content: ' ';\n  z-index: -1;\n  transition: all;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: -4px;\n  left: -4px;\n  padding: 2px;\n  display: none;\n  box-sizing: content-box;\n}\n.remind .remind-scroll .remind-page .remind-item .item-text {\n  display: inline-block;\n  border: none;\n  outline: none;\n  white-space: nowrap;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-icon {\n  display: inline-flex;\n  flex-direction: row-reverse;\n  align-items: center;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-icon > li {\n  font-size: 18px;\n  display: inline-block;\n  margin-left: -5px;\n  width: 24px;\n  height: 24px;\n  background-size: 20px;\n  border: 2px solid #fff;\n  border-radius: 24px;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-icon > li:last-child {\n  margin-left: 0px;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-icon > li:first-child {\n  margin-right: 5px;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-toggle {\n  position: absolute;\n  right: -15px;\n  top: calc(50% - 6px);\n  display: none;\n  cursor: pointer;\n  padding-left: 4px;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-toggle > div {\n  width: 12px;\n  height: 12px;\n  border: 1px solid #4a90e2;\n  border-radius: 6px;\n  text-align: center;\n  display: inline-block;\n  background: #fff;\n  color: black;\n  font-size: 12px;\n  line-height: 8px;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-toggle > .toggle-off {\n  display: block;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-toggle > .toggle-on {\n  display: none;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-toggle:hover {\n  display: block;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-toggle.toggled {\n  display: block;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-toggle.toggled > .toggle-off {\n  display: none;\n}\n.remind .remind-scroll .remind-page .remind-item .remind-toggle.toggled > .toggle-on {\n  display: block;\n}\n.remind .remind-scroll .remind-page .remind-item:hover .remind-toggle {\n  display: block;\n}\n.remind .remind-scroll .remind-page .remind-item:hover::after {\n  border: 2px solid #779ecc;\n  display: block;\n}\n.remind .remind-scroll .remind-page .remind-item.active .remind-toggle {\n  display: block;\n}\n.remind .remind-scroll .remind-page .remind-item.active::after {\n  border: 2px solid #0775f3;\n  display: block;\n}\n.remind .remind-scroll .remind-page .remind-item .item-note::before {\n  content: \"\\1f4dd\";\n}\n.remind .remind-scroll .remind-page .shape-box {\n  background-color: #4a90e2;\n  color: #fff;\n}\n.remind .remind-scroll .remind-page .shape-underline {\n  padding: 4px 5px;\n}\n.remind .remind-scroll .remind-page .shape-ellipse {\n  padding: 10px 10px;\n  color: #fff;\n  background-color: #39ac03;\n}\n.remind .remind-scroll .remind-page .item-ghost {\n  opacity: 0.15;\n}\n.remind .remind-scroll .remind-page .mm-note {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 80px;\n  left: 0px;\n  z-index: 2;\n  background: #fff;\n  transition: opacity, height 300ms ease-in;\n  overflow: hidden;\n  width: 300px;\n  border: 1px solid #efefef;\n  border-radius: 3px;\n  box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.2);\n}\n.remind .remind-scroll .remind-page .mm-note .note-util {\n  height: 30px;\n  width: 100%;\n  border-bottom: 1px solid #efefef;\n  padding-left: 10px;\n  padding-top: 4px;\n}\n.remind .remind-scroll .remind-page .mm-note .note-content {\n  height: 300px;\n  width: 100%;\n  overflow: scroll;\n  outline: none;\n}\n.remind .remind-scroll .remind-page .mm-note .note-content p {\n  white-space: pre-line;\n  padding: 10px;\n  outline: none;\n  height: 300px;\n  width: 100%;\n}\n.remind .remind-scroll .remind-page .mm-note.hide {\n  height: 0;\n  opacity: 0;\n}\n.remind .remind-scroll .menu {\n  outline: none;\n  margin: 0;\n  padding: 5px 0;\n  list-style: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 2;\n  background: #fff;\n  -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n  width: 200px;\n}\n.remind .remind-scroll .menu > button {\n  height: 32px;\n  line-height: 32px;\n  padding: 0 20px;\n  color: #666;\n  font-size: 13px;\n  font-weight: 400;\n  cursor: pointer;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  white-space: nowrap;\n  display: block;\n  background-color: transparent;\n  border: none;\n  margin: 0;\n  width: 100%;\n  text-align: left;\n}\n.remind .remind-scroll .menu > button:hover {\n  background: #efefef;\n}\n.remind .remind-scroll .menu span {\n  display: block;\n  border-top: 1px solid #eee;\n  margin-top: 4px;\n  padding-top: 4px;\n}\n", "",{"version":3,"sources":["webpack://./src/style/theme/stright.less","webpack://./src/index.less","webpack://./src/style/theme/box.less","webpack://./src/style/item.less","webpack://./src/style/menu.less"],"names":[],"mappings":"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","sourcesContent":[".remind.theme-stright{\n\tbackground-color: rgb(244, 249, 250);\n\t.remind-page{\n\t\t.shape-ellipse {\n\t\t\tborder-radius: 10px;\n\t\t\tbackground-color:#ff383e!important;\n\t\t\tborder:3px solid rgba(255,141,143,1);\n\t\t\tpadding:20px;\n\t\t\t.item-text{\n\t\t\t\tfont-size:28px;\n\t\t\t}\n\t\t}\n\t}\n}","@import \"./style/theme/index.less\" ;\n.remind{\n\toverflow: scroll;\n    width:100%;\n    height: 100%;\n    transition: background 400ms ease-out;\n\t*{\n\t\tbox-sizing: border-box;\n\t}\n\tul,li {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tlist-style: none;\n\t\tli{\n\t\t\tlist-style: none;\n\t\t}\n\t}\n\t.remind-scroll{\n\t\tposition: relative;\n        .remind-page{\n            position: absolute;\n            left:0;\n            top:0;\n            // transition: transform 200ms;\n            .remind-canvas{\n                position: absolute;\n                left: 0;\n                top: 0;\n                // transform: translate(-5px,-5px);\n            }\n            .remind-selection{\n                position: absolute;\n                left:0;\n                top:0;\n                z-index: 1;\n                display: none;\n                transition: all 100ms ease-out;\n                pointer-events: none;\n                &:after{\n                    transition: all 100ms ease-out;\n                    content:' ';\n                    display: block;\n                    width:calc(100% + 6px);\n                    height: calc(100% + 6px);\n                    position: absolute;\n                    left:-5px;\n                    top:-5px;\n                    border:2px solid blue;\n                }\n            }\n            @import \"./style/item.less\";\n        }\n        @import \"./style/menu.less\" ;\n       \n\t}\n} \n@import \"./style/theme/index.less\";",".remind.theme-box{\n\tbackground-color: rgb(31, 41, 52);\n\t.remind-scroll .remind-page{\n\t\t.shape-ellipse {\n\t\t\tbackground-color:rgb(31, 41, 52);\n\t\t\tborder:3px solid rgb(32,165,161);\n\t\t\tfont-size: 48px;\n\t\t\tpadding:20px;\n\t\t\tcolor:rgb(32,165,161);\n\t\t\t.item-text{\n\t\t\t\tcolor:rgb(32,165,161);\n\t\t\t\tfont-size:28px;\n\t\t\t}\n\t\t}\n\t\t.shape-box {\n\t\t\tbackground-color:rgb(32,165,161);\n\t\t\tcolor: #000;\n\t\t\tpadding: 10px 20px;\n\t\t\tborder-radius: 10px;\n\t\t\t>.children .shape-box{\n\t\t\t\t>.content{\n\t\t\t\t\tbackground-color:transparent;\n\t\t\t\t\tborder: none;\n\t\t\t\t\tcolor:rgb(32,165,161);\n\t\t\t\t\tpadding:5px;\n\t\t\t\t\tfont-size: 22px;\n\t\t\t\t}\n\t\t\t\t\n\t\t\t}\n\t\t}\t\n\t\t.shape-blank { \n\t\t\tbackground-color:transparent;\n\t\t\tborder: none;\n\t\t\tcolor:rgb(32,165,161);\n\t\t\tpadding:5px;\n\t\t\tfont-size: 22px;\n\t\t}\t\n\t}\n\t\t\n}",".remind-item {\n\tposition: absolute;\n    top:0;\n    left:0;\n    padding: 4px 10px;\n    color: #123;\n    border-radius: 3px;\n    cursor: pointer;\n    user-select: none;\n    align-items: center;\n    // z-index: 1;\n    &::after{\n        content: ' ';\n        z-index: -1;\n        transition: all;\n        width:100%;\n        height: 100%;\n        position: absolute;\n        top:-4px;\n        left:-4px;\n        padding:2px;\n        display: none;\n        box-sizing: content-box;\n    }\n    .item-text{\n        display: inline-block;\n        border:none;\n        outline: none;\n        white-space: nowrap;\n    }\n    .remind-icon {\n        display: inline-flex;\n        flex-direction: row-reverse;\n        align-items: center;\n\n        >li {\n            font-size: 18px;\n            display: inline-block;\n            margin-left: -5px;\n            width: 24px;\n            height: 24px;\n            background-size: 20px;\n            border: 2px solid #fff;\n            border-radius: 24px;\n\n        }\n\n        >li:last-child {\n            margin-left: 0px;\n        }\n\n        >li:first-child {\n            margin-right: 5px;\n        }\n    }\n    .remind-toggle{\n        position: absolute;\n        right:-15px;\n        top:calc(50% - 6px);\n        display: none;\n        cursor: pointer;\n        padding-left:4px;\n        >div{\n            width:12px;\n            height: 12px;\n            border:1px solid #4a90e2;\n            border-radius: 6px;\n            text-align: center;\n            display: inline-block;\n            background: #fff;\n            color: black;\n            font-size: 12px;\n            line-height: 8px;\n        }\n        >.toggle-off{\n            display: block;\n        }\n        >.toggle-on{\n            display: none;\n        }\n        &:hover{\n            display: block;\n        }\n        &.toggled{\n            display: block;\n            >.toggle-off{\n                display: none;\n            }\n            >.toggle-on{\n                display: block;\n            }\n        }\n    }\n    &:hover{\n        .remind-toggle{\n            display: block;\n        }\n        &::after{\n            border:2px solid #779ecc;\n            display: block;\n        }\n    }\n    &.active{\n        .remind-toggle{\n            display: block;\n        }\n        &::after{\n            border:2px solid #0775f3;\n            display: block;\n        }\n    }\n    .item-note{\n        &::before{\n            content:\"\\1f4dd\"\n        }\n    }\n}\n@import 'theme/index.less';\n\n.shape-box{\n    background-color: #4a90e2;\n\tcolor:#fff;\n}\n.shape-underline {\n\tpadding: 4px 5px;\n}\n.shape-ellipse{\n    padding: 10px 10px;\n\tcolor:#fff;\n\tbackground-color: #39ac03;\n}\n.item-ghost{\n    // background-color: #0775f3;\n    opacity: 0.15;\n}\n \n.mm-note{\n\tdisplay: flex;\n\tflex-direction: column;\n\tposition: absolute;\n\ttop:80px;\n\tleft:0px;\n\tz-index: 2;\n\tbackground: #fff;\n\ttransition: opacity,height 300ms ease-in;\n\toverflow: hidden;\n\twidth:300px;\n\tborder:1px solid #efefef;\n\tborder-radius: 3px;\n\tbox-shadow: 2px 2px 20px 1px rgba(0,0,0,.2);\n\t.note-util{\n\t\theight: 30px;\n\t\twidth:100%;\n\t\tborder-bottom:1px solid #efefef;\n\t\tpadding-left: 10px;\n    \tpadding-top: 4px;\n\t}\n\t.note-content{\n\t\theight:300px;\n\t\twidth:100%;\n\t\toverflow:scroll;\n        outline: none;\n\t\tp{\n\t\t\twhite-space: pre-line;\n\n\t\t\tpadding:10px;\n\t\t\toutline: none;\n\t\t\theight:300px;\n\t\t\twidth:100%;\n\t\t}\n\t}\n}\n.mm-note.hide{\n\theight:0;\n\topacity: 0;\n}",".menu{\n\toutline: none;\n\tmargin: 0;\n\tpadding: 5px 0;\n\tlist-style: none;\n\tposition: absolute;\n\tleft:0;\n\ttop:0;\n    z-index: 2;\n\tbackground: #fff;\n\t-webkit-box-shadow: 0 2px 8px 0 rgba(0,0,0,.1);\n\tbox-shadow: 0 2px 8px 0 rgba(0,0,0,.1);\n\tborder-radius: 2px;\n\twidth: 200px;\n\t>button{\n\t\theight: 32px;\n\t\tline-height: 32px;\n\t\tpadding: 0 20px;\n\t\tcolor: #666;\n\t\tfont-size: 13px;\n\t\tfont-weight: 400;\n\t\tcursor: pointer;\n\t\t-webkit-transition: all .3s;\n\t\ttransition: all .3s;\n\t\twhite-space: nowrap;\n\t\tdisplay: block;\n\t\tbackground-color: transparent;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\twidth: 100%;\n\t\ttext-align: left;\n\t\t&:hover{\n\t\t\tbackground:#efefef\n\t\t}\n\t}\n} \n \n.menu span {\n\tdisplay: block;\n\tborder-top: 1px solid #eee;\n\tmargin-top: 4px;\n\tpadding-top: 4px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./MindMap/Import/importFile.less":
/*!****************************************!*\
  !*** ./MindMap/Import/importFile.less ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_importFile_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./importFile.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./MindMap/Import/importFile.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_importFile_less__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_importFile_less__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./MindMap/index.less":
/*!****************************!*\
  !*** ./MindMap/index.less ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./MindMap/index.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_index_less__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_index_less__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/index.less":
/*!************************!*\
  !*** ./src/index.less ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/index.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_index_less__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_index_less__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./MindMap/Icons/arrow/1.svg":
/*!***********************************!*\
  !*** ./MindMap/Icons/arrow/1.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJ4bWluZC3lm77moIciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOTcuMDAwMDAwLCAtODAxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i566t5aS0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny4wMDAwMDAsIDc2OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDMyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9IuakreWchuW9ouWkh+S7vS0yIiBmaWxsPSIjRkM5ODRGIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSLot6/lvoQiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUuNTMzMTQ3LCAyNS4wMDc3MjUpIHNjYWxlKC0xLCAtMSkgcm90YXRlKDkwLjAwMDAwMCkgdHJhbnNsYXRlKC0yNS41MzMxNDcsIC0yNS4wMDc3MjUpICIgcG9pbnRzPSIyNS41NDA4NzIzIDYuNTE0MTE0ODkgMTIuNTI2MzI2OCAyMC41MTI3NzE2IDIwLjUxOTU3NzEgMjAuNTEyNzcxNiAyMC41MTk1NzcxIDQzLjUwMTMzNTMgMzAuNTQ0MDY0OCA0My41MDEzMzUzIDMwLjU0NDA2NDggMjAuNTEyNzcxNiAzOC41Mzk5Njc2IDIwLjUxMjc3MTYiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/arrow/2.svg":
/*!***********************************!*\
  !*** ./MindMap/Icons/arrow/2.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgM+Wkh+S7vTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJ4bWluZC3lm77moIciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTU3LjAwMDAwMCwgLTgwMS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IueureWktCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTcuMDAwMDAwLCA3NjkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTPlpIfku70iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2i5aSH5Lu9LTIiIGZpbGw9IiNGQzk4NEYiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9Iui3r+W+hCIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNS41MzMxNDcsIDI1LjAwNzcyNSkgc2NhbGUoMSwgLTEpIHJvdGF0ZSg5MC4wMDAwMDApIHRyYW5zbGF0ZSgtMjUuNTMzMTQ3LCAtMjUuMDA3NzI1KSAiIHBvaW50cz0iMjUuNTQwODcyMyA2LjUxNDExNDg5IDEyLjUyNjMyNjggMjAuNTEyNzcxNiAyMC41MTk1NzcxIDIwLjUxMjc3MTYgMjAuNTE5NTc3MSA0My41MDEzMzUzIDMwLjU0NDA2NDggNDMuNTAxMzM1MyAzMC41NDQwNjQ4IDIwLjUxMjc3MTYgMzguNTM5OTY3NiAyMC41MTI3NzE2Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/arrow/3.svg":
/*!***********************************!*\
  !*** ./MindMap/Icons/arrow/3.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgM+Wkh+S7vSAyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9InhtaW5kLeWbvuaghyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imljb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTcuMDAwMDAwLCAtODAxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i566t5aS0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny4wMDAwMDAsIDc2OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtM+Wkh+S7vS0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjAuMDAwMDAwLCAzMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIblvaLlpIfku70tMiIgZmlsbD0iI0ZDOTg0RiIgY3g9IjI1IiBjeT0iMjUiIHI9IjI1Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0i6Lev5b6EIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1LjUzMzE0NywgMjUuMDA3NzI1KSBzY2FsZSgxLCAtMSkgcm90YXRlKC0xODAuMDAwMDAwKSB0cmFuc2xhdGUoLTI1LjUzMzE0NywgLTI1LjAwNzcyNSkgIiBwb2ludHM9IjI1LjU0MDg3MjMgNi41MTQxMTQ4OSAxMi41MjYzMjY4IDIwLjUxMjc3MTYgMjAuNTE5NTc3MSAyMC41MTI3NzE2IDIwLjUxOTU3NzEgNDMuNTAxMzM1MyAzMC41NDQwNjQ4IDQzLjUwMTMzNTMgMzAuNTQ0MDY0OCAyMC41MTI3NzE2IDM4LjUzOTk2NzYgMjAuNTEyNzcxNiI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ "./MindMap/Icons/arrow/4.svg":
/*!***********************************!*\
  !*** ./MindMap/Icons/arrow/4.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgM+Wkh+S7vSAzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9InhtaW5kLeWbvuaghyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imljb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNzcuMDAwMDAwLCAtODAxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i566t5aS0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny4wMDAwMDAsIDc2OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtM+Wkh+S7vS0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAuMDAwMDAwLCAzMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIblvaLlpIfku70tMiIgZmlsbD0iI0ZDOTg0RiIgY3g9IjI1IiBjeT0iMjUiIHI9IjI1Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0i6Lev5b6EIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1LjUzMzE0NywgMjUuMDA3NzI1KSByb3RhdGUoLTE4MC4wMDAwMDApIHRyYW5zbGF0ZSgtMjUuNTMzMTQ3LCAtMjUuMDA3NzI1KSAiIHBvaW50cz0iMjUuNTQwODcyMyA2LjUxNDExNDg5IDEyLjUyNjMyNjggMjAuNTEyNzcxNiAyMC41MTk1NzcxIDIwLjUxMjc3MTYgMjAuNTE5NTc3MSA0My41MDEzMzUzIDMwLjU0NDA2NDggNDMuNTAxMzM1MyAzMC41NDQwNjQ4IDIwLjUxMjc3MTYgMzguNTM5OTY3NiAyMC41MTI3NzE2Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/arrow/5.svg":
/*!***********************************!*\
  !*** ./MindMap/Icons/arrow/5.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgM+Wkh+S7vSA0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9InhtaW5kLeWbvuaghyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imljb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMzcuMDAwMDAwLCAtODAxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i566t5aS0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny4wMDAwMDAsIDc2OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtM+Wkh+S7vS00IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNDAuMDAwMDAwLCAzMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIblvaLlpIfku70tMiIgZmlsbD0iI0ZDOTg0RiIgY3g9IjI1IiBjeT0iMjUiIHI9IjI1Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0i6Lev5b6EIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1LjUzMzE0NywgMzAuMDA3NzI1KSByb3RhdGUoLTE4MC4wMDAwMDApIHRyYW5zbGF0ZSgtMjUuNTMzMTQ3LCAtMzAuMDA3NzI1KSAiIHBvaW50cz0iMjUuNTQwODcyMyAxNi41MTQxMTQ5IDEyLjUyNjMyNjggMzAuNTEyNzcxNiAyMC41MTk1NzcxIDMwLjUxMjc3MTYgMjAuNTE5NTc3MSA0My41MDEzMzUzIDMwLjU0NDA2NDggNDMuNTAxMzM1MyAzMC41NDQwNjQ4IDMwLjUxMjc3MTYgMzguNTM5OTY3NiAzMC41MTI3NzE2Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9Iui3r+W+hOWkh+S7vS0zIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1LjUzMzE0NywgMjAuMDA3NzI1KSBzY2FsZSgxLCAtMSkgcm90YXRlKC0xODAuMDAwMDAwKSB0cmFuc2xhdGUoLTI1LjUzMzE0NywgLTIwLjAwNzcyNSkgIiBwb2ludHM9IjI1LjU0MDg3MjMgNi41MTQxMTQ4OSAxMi41MjYzMjY4IDIwLjUxMjc3MTYgMjAuNTE5NTc3MSAyMC41MTI3NzE2IDIwLjUxOTU3NzEgMzMuNTAxMzM1MyAzMC41NDQwNjQ4IDMzLjUwMTMzNTMgMzAuNTQ0MDY0OCAyMC41MTI3NzE2IDM4LjUzOTk2NzYgMjAuNTEyNzcxNiI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ "./MindMap/Icons/arrow/6.svg":
/*!***********************************!*\
  !*** ./MindMap/Icons/arrow/6.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgM+Wkh+S7vSA1PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9InhtaW5kLeWbvuaghyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imljb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zOTcuMDAwMDAwLCAtODAxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i566t5aS0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny4wMDAwMDAsIDc2OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtM+Wkh+S7vS01IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMDAuMDAwMDAwLCAzMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIblvaLlpIfku70tMiIgZmlsbD0iI0ZDOTg0RiIgY3g9IjI1IiBjeT0iMjUiIHI9IjI1Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2LjAyNjMyNywgMjUuMDE0MTE1KSByb3RhdGUoOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTI2LjAyNjMyNywgLTI1LjAxNDExNSkgdHJhbnNsYXRlKDEyLjUyNjMyNywgNi41MTQxMTUpIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0i6Lev5b6EIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMy4wMDY4MjAsIDIzLjQ5MzYxMCkgcm90YXRlKC0xODAuMDAwMDAwKSB0cmFuc2xhdGUoLTEzLjAwNjgyMCwgLTIzLjQ5MzYxMCkgIiBwb2ludHM9IjEzLjAxNDU0NTUgMTAgLTQuNTkyMzM1NWUtMTYgMjMuOTk4NjU2NyA3Ljk5MzI1MDMzIDIzLjk5ODY1NjcgNy45OTMyNTAzMyAzNi45ODcyMjA1IDE4LjAxNzczNzkgMzYuOTg3MjIwNSAxOC4wMTc3Mzc5IDIzLjk5ODY1NjcgMjYuMDEzNjQwOCAyMy45OTg2NTY3Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSLot6/lvoTlpIfku70tMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTMuMDA2ODIwLCAxMy40OTM2MTApIHNjYWxlKDEsIC0xKSByb3RhdGUoLTE4MC4wMDAwMDApIHRyYW5zbGF0ZSgtMTMuMDA2ODIwLCAtMTMuNDkzNjEwKSAiIHBvaW50cz0iMTMuMDE0NTQ1NSAtMy45MjU0ODAzOGUtMTIgLTguODkzODk5NjdlLTE1IDEzLjk5ODY1NjcgNy45OTMyNTAzMyAxMy45OTg2NTY3IDcuOTkzMjUwMzMgMjYuOTg3MjIwNSAxOC4wMTc3Mzc5IDI2Ljk4NzIyMDUgMTguMDE3NzM3OSAxMy45OTg2NTY3IDI2LjAxMzY0MDggMTMuOTk4NjU2NyI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/arrow/7.svg":
/*!***********************************!*\
  !*** ./MindMap/Icons/arrow/7.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgM+Wkh+S7vSA2PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9InhtaW5kLeWbvuaghyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imljb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NTcuMDAwMDAwLCAtODAxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i566t5aS0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny4wMDAwMDAsIDc2OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtM+Wkh+S7vS02IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNjAuMDAwMDAwLCAzMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIblvaLlpIfku70tMiIgZmlsbD0iI0ZDOTg0RiIgY3g9IjI1IiBjeT0iMjUiIHI9IjI1Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDAuODQ2ODc4OCwxMS43NjU2MzEyIEw0MC44NDY4Nzg4LDIxLjAyMjU0IEM0MC44NDY4Nzg4LDIxLjgxNzg5MTUgNDAuMzQwNzExOCwyMi4zMjQwNTg2IDM5LjU0NTM2MDIsMjIuMzI0MDU4NiBMMzAuMjg4NDUxNCwyMi4zMjQwNTg2IEMyOS43ODIyODQ0LDIyLjMyNDA1ODYgMjkuMzQ4MjgzMiwyMi4wMzQ4NzMzIDI5LjA1OTE3NDYsMjEuNTI4NzA3IEMyOC44NDIxNTYsMjEuMDIyNTQgMjguOTE0Mzk2NywyMC41MTYzNzI5IDI5LjM0ODMyMywyMC4wODI0MTE2IEwzMi4yNDA5NTM3LDE3LjI2MjAyMjggQzMwLjIxNjI4NTUsMTUuMzgxMzkzMyAyNy44Mjk0NDIsMTQuNDQxMjYxMiAyNS4wMDkwNjA0LDE0LjQ0MTI2MTIgQzIzLjYzNDk2NywxNC40NDEyNjEyIDIyLjI2MDg3MzYsMTQuNzMwODE2NyAyMC44ODY3Njk0LDE1LjIzNjk4MTkgQzE5LjUxMjY3NiwxNS44MTUzNTEgMTguNDI4MTM5OSwxNi42MTEwNzUzIDE3LjU2MDIxMzYsMTcuNTUxMjAzNyBDMTYuNjIwMDg1MiwxOC40MTkxMyAxNS44MjQzNjA5LDE5LjUwMzY2NjEgMTUuMjQ1OTkxOCwyMC44Nzc3NTk1IEMxNC4xNjEwODMsMjMuNTUzNzQwNiAxNC4xNjEwODMsMjYuNDQ2MzM1MSAxNS4yNDU5OTE4LDI5LjEyMjMwNTMgQzE1LjgyNDM2MDksMzAuNDk2NDM0OSAxNi42MjAwODUyLDMxLjU4MDkzNDggMTcuNTYwMjEzNiwzMi40NDg4NjExIEMxOC40MjgxMzk5LDMzLjM4OTAyOTMgMTkuNTEyNjc2LDM0LjE4NDc1IDIwLjg4Njc2OTQsMzQuNzYzMDgyOSBDMjIuMjYwODYyOCwzNS4yNjkyNSAyMy42MzQ5NTYyLDM1LjU1ODgwNzIgMjUuMDA5MDYwNCwzNS41NTg4MDcyIEMyNi42NzIzMzgzLDM1LjU1ODgwNzIgMjguMTkxMTcyMywzNS4xOTcwNDc5IDI5LjYzNzQ5NjcsMzQuNDczOTM4MiBDMzEuMTU2MzY2OSwzMy44MjI5OTQzIDMyLjM4NTcxOTYsMzIuODEwNjYwMyAzMy4zMjU3OTM3LDMxLjQzNjUzMDcgQzMzLjYxNTAxNjMsMzEuMjkxNzUyOCAzMy43NTk3OTQ5LDMxLjIxOTU4NjIgMzMuODMxOTYwOCwzMS4yMTk1ODYyIEMzNC4wNDg5Nzk1LDMxLjIxOTU4NjIgMzQuMTkzNzU3NCwzMS4yOTE3NTI4IDM0LjMzODEyNzgsMzEuNDM2NTMwNyBMMzcuMTU4OTYxNywzNC4yNTY5MTk1IEMzNy4zMDMyOTUyLDM0LjQwMTY5NzQgMzcuMzc1NTcyOSwzNC41NDYxNDIgMzcuMzc1NTcyOSwzNC42OTA5MjA3IEMzNy4zNzU1NzI5LDM0Ljc2MzA4NzMgMzcuMzAzMzMyMiwzNC45MDc4NjUyIDM3LjIzMTE2NTYsMzUuMTI0OTIxOCBDMzUuNjQwMDUzNSwzNy4wMDUxNDYxIDMzLjgzMTk5ODgsMzguNDUxNDc3NyAzMS43MzQ4MTM4LDM5LjM5MTU4OCBDMjkuNzgyMzUxMyw0MC4zMzE3NTYyIDI3LjU0MDI5OSw0MC44Mzc5MjMyIDI1LjAwOTEwMiw0MC44Mzc5MjMyIEMyMi43NjcwODIzLDQwLjgzNzkyMzIgMjAuNjY5ODUwMiw0MC40MDQyOTQ3IDE4Ljg2MTc5NTUsMzkuNjA4NjQ2NSBDMTYuNzY0NTE2NCwzOC42Njg0MDU5IDE1LjAyOTA1MDksMzcuNTExMjk1IDEzLjc5OTcyNzEsMzYuMjA5NDAzNyBDMTIuNDk3ODM5NCwzNC45ODAxMjY5IDExLjM0MDcyNDksMzMuMjQ0NjA3MSAxMC40MDA1OTY1LDMxLjE0NzMzNTMgQzguNzM3MzE4NTksMjcuNDU5MDM4MiA4LjczNzMxODU5LDIyLjU0MTA1NTUgMTAuNDAwNTk2NSwxOC44NTI3MjIzIEMxMS4zNDA3MjQ5LDE2Ljc1NTQ3OTQgMTIuNDk3ODM5NCwxNS4wMjAwMTM5IDEzLjc5OTcyNzEsMTMuNzkwNjkwMSBDMTUuMDI5MDQzNywxMi40ODg4MDI0IDE2Ljc2NDUyMzcsMTEuMzMxNjg3OSAxOC44NjE3NTkzLDEwLjM5MTU1OTUgQzIwLjY2OTgxNDEsOS41OTU4Mzg4MyAyMi43NjcwNTMzLDkuMTYyMjQyOTMgMjUuMDA5MDY1OCw5LjE2MjI0MjkzIEMyNy4wMzQwNjY5LDkuMTYyMjQyOTMgMjguOTg2NTgzNiw5LjUyMzYzMjA3IDMwLjg2Njc4OTcsMTAuMjQ2Nzc5MSBDMzIuODE5NjI0OSwxMS4wNDI0OTk3IDM0LjU1NTE1OTIsMTIuMTI3MDM5NSAzNS45MjkyMiwxMy41MDExMzI4IEwzOC42MDUyMDEsMTAuODI1NTIwOSBDMzguOTY2NTkwMiwxMC40NjM3NjE2IDM5LjQ3MzE2MzYsMTAuMzE5MzUzOCA0MC4wNTE1MzYzLDEwLjUzNTk2NTQgQzQwLjU1NzY2NzEsMTAuODI1NTIwOSA0MC44NDY4Nzg4LDExLjI1OTQ4NCA0MC44NDY4Nzg4LDExLjc2NTY1MTEgTDQwLjg0Njg3ODgsMTEuNzY1NjMxMiBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/emoji/1.svg":
/*!***********************************!*\
  !*** ./MindMap/Icons/emoji/1.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7ooajmg4U8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk3LjAwMDAwMCwgLTI0MS4wMDAwMDApIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8ZyBpZD0i6KGo5oOFIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny4wMDAwMDAsIDIwOS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAzMi4wMDAwMDApIiBpZD0i6Lev5b6EIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMCwyNSBDMCwzOC44MDcxMTg3IDExLjE5Mjg4MTMsNTAgMjUsNTAgQzM4LjgwNzExODcsNTAgNTAsMzguODA3MTE4NyA1MCwyNSBDNTAsMTEuMTkyODgxMyAzOC44MDcxMTg3LDAgMjUsMCBDMTEuMTkyODgxMywwIDAsMTEuMTkyODgxMyAwLDI1IFoiIGZpbGw9IiNDOUJDOUMiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMCwyNSBDMCwzOC44MDcxMTg3IDExLjE5Mjg4MTMsNTAgMjUsNTAgQzM4LjgwNzExODcsNTAgNTAsMzguODA3MTE4NyA1MCwyNSBDNTAsMTEuMTkyODgxMyAzOC44MDcxMTg3LDAgMjUsMCBDMTEuMTkyODgxMywwIDAsMTEuMTkyODgxMyAwLDI1IFoiIGZpbGw9IiNGRkJGMkMiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuOTgyODEyNSwxNy4xMjIyNjU2IEMxMi45ODI4MTI1LDE4Ljc1MDQ3NTcgMTMuNTIzNjM2OSwyMC4yNTUwMDM4IDE0LjQwMTU2MjUsMjEuMDY5MTA4OSBDMTUuMjc5NDg4LDIxLjg4MzIxMzkgMTYuMzYxMTM3LDIxLjg4MzIxMzkgMTcuMjM5MDYyNSwyMS4wNjkxMDg5IEMxOC4xMTY5ODgxLDIwLjI1NTAwMzggMTguNjU3ODEyNSwxOC43NTA0NzU3IDE4LjY1NzgxMjUsMTcuMTIyMjY1NiBDMTguNjU3ODEyNSwxNS40OTQwNTU2IDE4LjExNjk4ODEsMTMuOTg5NTI3NCAxNy4yMzkwNjI1LDEzLjE3NTQyMjQgQzE2LjM2MTEzNywxMi4zNjEzMTc0IDE1LjI3OTQ4OCwxMi4zNjEzMTc0IDE0LjQwMTU2MjUsMTMuMTc1NDIyNCBDMTMuNTIzNjM2OSwxMy45ODk1Mjc0IDEyLjk4MjgxMjUsMTUuNDk0MDU1NiAxMi45ODI4MTI1LDE3LjEyMjI2NTYgTDEyLjk4MjgxMjUsMTcuMTIyMjY1NiBaIiBmaWxsPSIjNEM0MDIyIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTMxLjc2Mjg5MDYsMTcuMTIyMjY1NiBDMzEuNzYyODkwNiwxOS42MTIyOTMyIDMzLjAxOTgxNjIsMjEuNjMwODU5NCAzNC41NzAzMTI1LDIxLjYzMDg1OTQgQzM2LjEyMDgwODgsMjEuNjMwODU5NCAzNy4zNzc3MzQ0LDE5LjYxMjI5MzIgMzcuMzc3NzM0NCwxNy4xMjIyNjU2IEMzNy4zNzc3MzQ0LDE0LjYzMjIzODEgMzYuMTIwODA4OCwxMi42MTM2NzE5IDM0LjU3MDMxMjUsMTIuNjEzNjcxOSBDMzMuMDE5ODE2MiwxMi42MTM2NzE5IDMxLjc2Mjg5MDYsMTQuNjMyMjM4MSAzMS43NjI4OTA2LDE3LjEyMjI2NTYgWiIgZmlsbD0iIzRDNDAyMiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zOS4xMjg5MDYyLDMxLjI1IEMzOS4xMjg5MDYyLDM4LjM4Nzg5MDYgMzIuOTE3OTY4OCw0NC4xNzE4NzUgMjUuMjYxNzE4OCw0NC4xNzE4NzUgQzE3LjYwMTU2MjUsNDQuMTcxODc1IDExLjM5NDUzMTIsMzguMzg3ODkwNiAxMS4zOTQ1MzEyLDMxLjI1IEwzOS4xMjg5MDYyLDMxLjI1IFoiIGZpbGw9IiM0QzQwMjIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzQuNTg0Mzc1LDQwLjg3NzczNDQgQzMxLjg0NzY1NjIsNDIuOTcwNzAzMSAyOC42Njc1NzgxLDQ0LjE3MTg3NSAyNS4yNzUzOTA2LDQ0LjE3MTg3NSBDMjEuOTA1NDY4Nyw0NC4xNzE4NzUgMTguNzQ1NzAzMSw0Mi45ODM5ODQ0IDE2LjAxOTE0MDYsNDAuOTE4NzUgQzE4LjU5MzM1OTQsNDAuMDgwNDY4OCAyMS44Mzc4OTA2LDM5LjU4MzU5MzcgMjUuMzY0MDYyNSwzOS41ODM1OTM3IEMyOC44MzM1OTM3LDM5LjU4MzU5MzcgMzIuMDMxMjUsNDAuMDY2NDA2MiAzNC41ODQzNzUsNDAuODc3NzM0NCBaIiBmaWxsPSIjRTc0NjQyIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/emoji/2.svg":
/*!***********************************!*\
  !*** ./MindMap/Icons/emoji/2.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7ooajmg4U8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1Ny4wMDAwMDAsIC0yNDEuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9IuihqOaDhSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTcuMDAwMDAwLCAyMDkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MC4wMDAwMDAsIDMyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9IuakreWchuW9oiIgZmlsbD0iI0ZGQkYyQyIgY3g9IjI1IiBjeT0iMjUiIHI9IjI1Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTEuMjUsMTguMTc1MTUyMSBMMTEuMjUsMTguMTc1MTUyNiBDMTEuMjUsMTkuOTI4NzQxNiAxMi42NzE1NjM3LDIxLjM1MDMwNTIgMTQuNDI1MTUyNiwyMS4zNTAzMDUyIEMxNi4xNzg3NDE2LDIxLjM1MDMwNTIgMTcuNjAwMzA1MiwxOS45Mjg3NDE2IDE3LjYwMDMwNTIsMTguMTc1MTUyNiBMMTcuNjAwMzA1MiwxOC4xNzUxNTI2IEMxNy42MDAzMDUyLDE2LjQyMTU2MzcgMTYuMTc4NzQxNiwxNSAxNC40MjUxNTI2LDE1IEMxMi42NzE1NjM3LDE1IDExLjI1LDE2LjQyMTU2MzcgMTEuMjUsMTguMTc1MTUyNiBMMTEuMjUsMTguMTc1MTUyMSBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjNEM0MDIyIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTMyLjUsMTguMTc1MTUyMSBMMzIuNSwxOC4xNzUxNTI2IEMzMi41LDE5LjkyODc0MTYgMzMuOTIxNTYzNywyMS4zNTAzMDUyIDM1LjY3NTE1MjYsMjEuMzUwMzA1MiBDMzcuNDI4NzQxNiwyMS4zNTAzMDUyIDM4Ljg1MDMwNTIsMTkuOTI4NzQxNiAzOC44NTAzMDUyLDE4LjE3NTE1MjYgTDM4Ljg1MDMwNTIsMTguMTc1MTUyNiBDMzguODUwMzA1MiwxNi40MjE1NjM3IDM3LjQyODc0MTYsMTUgMzUuNjc1MTUyNiwxNSBDMzMuOTIxNTYzNywxNSAzMi41LDE2LjQyMTU2MzcgMzIuNSwxOC4xNzUxNTI2IEwzMi41LDE4LjE3NTE1MjEgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iIzRDNDAyMiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMS4xOTcwMDUxLDMwLjkzMzY3NzMgQzEzLjgwMDU0NjksMzYuNDU4MjI0IDE4Ljk3NjUwOTUsNDAgMjQuNzIxMzYxMiw0MCBDMzAuNTE2NzEwNiw0MCAzNS43MzA4NTk1LDM2LjM5NTI2MzcgMzguMzEwNDgzOCwzMC43OTQ4NTIgQzM4Ljc0NjUxMiwyOS44NDgxMzU1IDM4LjQwNDU4NzcsMjguNjkwNTI4OCAzNy41NDcwNjIsMjguMjA5MjI1MSBDMzYuNjg5NTM1MywyNy43Mjc5MjM4IDM1LjY0MDY3OTgsMjguMTA1MjAwNSAzNS4yMDQ2NDk1LDI5LjA1MTc2NzEgQzMzLjIxMzgwMDMsMzMuMzc0MzM2OSAyOS4xOTI4ODE1LDM2LjE1NDA0MzkgMjQuNzIxMzQ1MywzNi4xNTQwNDM5IEMyMC4yODg5NTU0LDM2LjE1NDA0MzkgMTYuMjk3MzU5MiwzMy40MjI4NzAxIDE0LjI4NzkwMjMsMjkuMTU4NzQwNCBDMTMuODQzODYyNCwyOC4yMTY1MjA2IDEyLjc5MjAxNTIsMjcuODUwMTg4NCAxMS45Mzg1NjIzLDI4LjM0MDE4MTEgQzExLjA4NDgzODgsMjguODMwMzI2IDEwLjc1Mjk1OTksMjkuOTkxNTMzNiAxMS4xOTY5OTk4LDMwLjkzMzYwMTEgTDExLjE5NzAwNTEsMzAuOTMzNjc3MyBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjNEM0MDIyIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/emoji/3.svg":
/*!***********************************!*\
  !*** ./MindMap/Icons/emoji/3.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7ooajmg4Ut5ZOtPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGNpcmNsZSBpZD0icGF0aC0xIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgPC9kZWZzPgogICAgPGcgaWQ9InhtaW5kLeWbvuaghyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imljb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTcuMDAwMDAwLCAtMjQxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i6KGo5oOFIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny4wMDAwMDAsIDIwOS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLooajmg4Ut5ZOtIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjAuMDAwMDAwLCAzMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgICAgIDx1c2UgaWQ9IuiSmeeJiCIgZmlsbD0iI0ZGQkYyQyIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgZmlsbD0iIzRDNDAyMiIgbWFzaz0idXJsKCNtYXNrLTIpIiB4PSI5LjA1MTcyNDE0IiB5PSIxMy43OTMxMDM0IiB3aWR0aD0iMTQuNjU1MTcyNCIgaGVpZ2h0PSIzLjQ0ODI3NTg2IiByeD0iMS43MjQxMzc5MyI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaLlpIfku70iIGZpbGw9IiM0QzQwMjIiIG1hc2s9InVybCgjbWFzay0yKSIgeD0iMzEuMDM0NDgyOCIgeT0iMTMuNzkzMTAzNCIgd2lkdGg9IjE0LjY1NTE3MjQiIGhlaWdodD0iMy40NDgyNzU4NiIgcng9IjEuNzI0MTM3OTMiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2iIiBmaWxsPSIjNzVFN0U3IiBtYXNrPSJ1cmwoI21hc2stMikiIHg9IjEyLjkzMTAzNDUiIHk9IjE3LjI0MTM3OTMiIHdpZHRoPSI3LjMyNzU4NjIxIiBoZWlnaHQ9IjMyLjc1ODYyMDciPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2i5aSH5Lu9LTIiIGZpbGw9IiM3NUU3RTciIG1hc2s9InVybCgjbWFzay0yKSIgeD0iMzQuNDgyNzU4NiIgeT0iMTcuMjQxMzc5MyIgd2lkdGg9IjcuMzI3NTg2MjEiIGhlaWdodD0iMzIuNzU4NjIwNyI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9IuakreWchuW9oiIgZmlsbD0iIzRDNDAyMiIgbWFzaz0idXJsKCNtYXNrLTIpIiBjeD0iMjcuMzcwNjg5NyIgY3k9IjM1Ljk5MTM3OTMiIHI9IjMuNjYzNzkzMSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/emoji/4.svg":
/*!***********************************!*\
  !*** ./MindMap/Icons/emoji/4.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nm67nnqrlj6PlkYY8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8Y2lyY2xlIGlkPSJwYXRoLTEiIGN4PSI3LjYwODY5NTY1IiBjeT0iNy42MDg2OTU2NSIgcj0iNy42MDg2OTU2NSI+PC9jaXJjbGU+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3Ny4wMDAwMDAsIC0yNDEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLooajmg4UiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgMjA5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IuebrueequWPo+WRhiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTgwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjRkZCRjJDIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi41MjE3MzksIDEwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIblvaIiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9IjAuNTkwODkwMDY3IiBjeD0iNy42MDg2OTU2NSIgY3k9IjcuNjA4Njk1NjUiIHI9IjcuNjA4Njk1NjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIblvaIiIGZpbGw9IiM0QzQwMjIiIGN4PSI3LjYwODY5NTY1IiBjeT0iNy42MDg2OTU2NSIgcj0iMy42OTU2NTIxNyI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9IuakreWchuW9ouWkh+S7vS00IiBmaWxsPSIjRkZGRkZGIiBvcGFjaXR5PSIwLjU5MDg5MDA2NyIgY3g9IjI5LjM0NzgyNjEiIGN5PSI3LjYwODY5NTY1IiByPSI3LjYwODY5NTY1Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2i5aSH5Lu9LTMiIGZpbGw9IiM0QzQwMjIiIGN4PSIyOS4zNDc4MjYxIiBjeT0iNy42MDg2OTU2NSIgcj0iMy42OTU2NTIxNyI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSLmpK3lnIblvaLlpIfku70tNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYuOTU2NTIyLCAyOC42OTU2NTIpIj4KICAgICAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGlkPSLokpnniYgiIGZpbGw9IiM0QzQwMjIiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGZpbGw9IiNFODQ2NDMiIG1hc2s9InVybCgjbWFzay0yKSIgY3g9IjcuNjA4Njk1NjUiIGN5PSIxNSIgcj0iNy42MDg2OTU2NSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ "./MindMap/Icons/emoji/5.svg":
/*!***********************************!*\
  !*** ./MindMap/Icons/emoji/5.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7lvpfmhI88L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMzNy4wMDAwMDAsIC0yNDEuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9IuihqOaDhSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTcuMDAwMDAwLCAyMDkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i5b6X5oSPIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNDAuMDAwMDAwLCAzMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuNDcxNzI5OSw0Ni41NTU5MjI0IEMyMC4xODQ0MjksNTEuMDA4ODUxMyAyOS42ODY4NjYxLDUxLjAwODg1MTMgMzcuMzk5NTY1Miw0Ni41NTU5MjI0IEM0NS4xMTIyNjQzLDQyLjEwMjk5MzQgNDkuODYzNDgyNiwzMy44NzM2NDEzIDQ5Ljg2MzQ4MjYsMjQuOTY3NzgzNSBDNDkuODYzNDgyNiwxMS4yMDA1MjA0IDM4LjcwMjkxMDcsMC4wMzk5NDg0NTM2IDI0LjkzNTY0NzYsMC4wMzk5NDg0NTM2IEMxMS4xNjgzODQ0LDAuMDM5OTQ4NDUzNiAwLjAwNzgxMjUsMTEuMjAwNTIwNCAwLjAwNzgxMjUsMjQuOTY3NzgzNSBDMC4wMDc4MTI1LDMzLjg3MzY0MTMgNC43NTkwMzA3OSw0Mi4xMDI5OTM0IDEyLjQ3MTcyOTksNDYuNTU1OTIyNCBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjRkZCRjJDIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0LjE0ODU3MTMsMTAuNzE5NTY1IEMyNS45NDE4ODU4LDExLjIyNzA4NTQgMjcuNzQ5OTA3NiwxMS4xNjI4NDgxIDI4Ljg5MTUyNTUsMTAuNTUxMDUyMiBDMzAuMDMzMTQzNCw5LjkzOTI1NjI1IDMwLjMzNDkwNDMsOC44NzI4NTU3NSAyOS42ODMxMyw3Ljc1MzU4MDk5IEMyOS4wMzEzNTU4LDYuNjM0MzA2MjQgMjcuNTI1MDc0NCw1LjYzMjIxNTY0IDI1LjczMTcyNjYsNS4xMjQ4MTI5NCBDMjMuOTM4NDEyLDQuNjE3MjkyNDkgMjIuMTMwMzkwMyw0LjY4MTUyOTg0IDIwLjk4ODc3MjQsNS4yOTMzMjU3NiBDMTkuODQ3MTU0NSw1LjkwNTEyMTY3IDE5LjU0NTM5MzUsNi45NzE1MjIxNyAyMC4xOTcxNjc4LDguMDkwNzk2OTMgQzIwLjg0ODk0MjEsOS4yMTAwNzE2OCAyMi4zNTUyMjM1LDEwLjIxMjE2MjMgMjQuMTQ4NTcxMywxMC43MTk1NjUgTDI0LjE0ODU3MTMsMTAuNzE5NTY1IFoiIGlkPSLot6/lvoQiIGZpbGw9IiNGRkU5NjYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTAuNzA4ODQzNCwyOC4wNjA1NjcgQzguOTQ2MjUyOSwyOC4wOTM1MjEyIDcuNTI1MzAyNzgsMjkuNTE0NDcxMyA3LjQ5MjM0ODU4LDMxLjI3NzA2MTkgTDEzLjk2NjU3NTQsMzEuMjc3MDYxOSBDMTMuOTQ0MDAzMSwyOS40OTM5OTA5IDEyLjQ5MjA1NzMsMjguMDYwNDI0MSAxMC43MDg4NDM0LDI4LjA2MDU2NyBMMTAuNzA4ODQzNCwyOC4wNjA1NjcgWiBNMzkuMTYyNDUxNywyOC4wNjA1NjcgQzM4LjI5ODQ0NzQsMjguMDYwNTY3IDM3LjQ2OTgzMDYsMjguNDAzNzkxNCAzNi44NTg4ODczLDI5LjAxNDczNDYgQzM2LjI0Nzk0NDEsMjkuNjI1Njc3OSAzNS45MDQ3MTk3LDMwLjQ1NDI5NDcgMzUuOTA0NzE5NywzMS4zMTgyOTkgTDQyLjQyMDE4MzYsMzEuMzE4Mjk5IEM0Mi40MjAxODM2LDI5LjUxOTEwMzMgNDAuOTYxNjQ3NCwyOC4wNjA1NjcgMzkuMTYyNDUxNywyOC4wNjA1NjcgTDM5LjE2MjQ1MTcsMjguMDYwNTY3IFoiIGlkPSLlvaLnirYiIGZpbGw9IiNFRjhFNUUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNS4wMTgxMjE3OCwxNC41MzQ3OTM4IEMxMC42NzQwODQ4LDEzLjI1NzU2MjIgMTYuNTU2Nzg5NywxMy4zODQ5ODU0IDIyLjE1MjE0MjQsMTQuOTA1OTI3OCBDMjMuMDI5MTE1NCwxNS4xMzg0NTEyIDIzLjkyNjk3NCwxNS4yODM0ODk5IDI0LjgzMjU1NDgsMTUuMzM4OTE3NSBDMjYuNDczMzQ3MywxNS4zMjQ1MDYgMjguMTA0MTM1OCwxNS4wODE2MjI2IDI5LjY3NzkxNTYsMTQuNjE3MjY4IEMzNC42Nzg5MjgxLDEzLjQ0MzIyMjUgMzkuODkzMDkyOSwxMy41MjgyMzYgNDQuODUzMTczMywxNC44NjQ2OTA3IEw0NC42MDU3NTA2LDE3LjUyNDQ4NDUgQzQzLjkwNDcxOTcsMTcuNTI0NDg0NSA0My42Nzc5MTU2LDE3Ljg3NSA0My40NzE3MywxOC41MTQxNzUzIEM0Mi40MjAxODM2LDIxLjg3NSA0My4zMjc0MDAxLDI3LjY0ODE5NTkgMzUuNTMzNTg1NywyNi45Njc3ODM1IEMzMC40MjAxODM2LDI2LjUxNDE3NTMgMjguOTU2MjY2MSwyNS4xMTIxMTM0IDI2LjUyMzI3NjQsMTguOTQ3MTY0OSBDMjYuMjk2NDcyMywxOC40MTEwODI1IDI2LjE3Mjc2MSwxNy41NDUxMDMxIDI0Ljk3Njg4NDcsMTcuNTg2MzQwMiBDMjQuMzE3MDkwOSwxNy41ODYzNDAyIDIzLjcxOTE1MjcsMTcuNzMwNjcwMSAyMy41MTI5NjcxLDE4Ljg4NTMwOTMgQzIzLjEyMTIxNDYsMjAuOTQ3MTY0OSAyMC4xNTIxNDI0LDI2Ljk0NzE2NDkgMTQuMTUyMTQyNCwyNi45MjY1NDY0IEM4Ljg1MzE3MzMyLDI2LjkyNjU0NjQgNi44MzI1NTQ3NywyNC4xNjM2NTk4IDYuNTg1MTMyMDksMTguMTAxODA0MSBDNi41ODUxMzIwOSwxNy4zNTk1MzYxIDUuOTA0NzE5NzIsMTcuMjE1MjA2MiA1LjQ5MjM0ODU4LDE3LjE5NDU4NzYgTDUuMDE4MTIxNzgsMTQuNTM0NzkzOCBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjNEM0MDIyIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0LjIxMzk5ODEsMTMuNjI3NTc3MyBMMTAuNTAyNjU3OSwyNi4yNjY3NTI2IEMxMS42NDA2NDMxLDI2LjY5OTE2ODYgMTIuODUyODc5OCwyNi45MDIzNzU5IDE0LjA2OTY2ODIsMjYuODY0NjkwNyBMMTcuOTI1MzM4MywxNC4wODExODU2IEMxNi42ODgyMjQ5LDEzLjg5NTYxODYgMTUuNDUxMTExNSwxMy43NTEyODg3IDE0LjIxMzk5ODEsMTMuNjI3NTc3MyBMMTQuMjEzOTk4MSwxMy42Mjc1NzczIFogTTM3LjI2NTU0NDUsMTMuNzkyNTI1OCBDMzUuOTcxMTI2NCwxMy43NDcwNTQ0IDM0LjY3NTEzMTcsMTMuODAyMjAzMSAzMy4zODkyNTU4LDEzLjk1NzQ3NDIgTDMwLjE3Mjc2MSwyNS4yMzU4MjQ3IEMzMS4xNTAyNDEsMjYuMDE0ODY4NSAzMi4zMTcyMzE2LDI2LjUyMDA5IDMzLjU1NDIwNDMsMjYuNjk5NzQyMyBMMzcuMjY1NTQ0NSwxMy43OTI1MjU4IFoiIGlkPSLlvaLnirYiIGZpbGw9IiM3Mzc4OTEiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjMuODAxNjI2OSw0MS4zNTk1MzYxIEMyMi4xMzQzMjMzLDQxLjM1Njg4OCAyMC41MTg0NzQ2LDQwLjc4MTg3ODcgMTkuMjI0MzA3MywzOS43MzA2NzAxIEMxOC44Mjk1NDkyLDM5LjM4MzY1OTcgMTguNzY2NzkxMiwzOC43OTE5NDA4IDE5LjA3OTk3NzQsMzguMzY5ODQ1NCBDMTkuMjQ1NjcyMiwzOC4xNjMxNjEyIDE5LjQ4NzMwODYsMzguMDMxNTI5MiAxOS43NTA4MTgxLDM4LjAwNDQwMzIgQzIwLjAxNDMyNzYsMzcuOTc3Mjc3MiAyMC4yNzc3MTMsMzguMDU2OTIxNyAyMC40ODIwMzkzLDM4LjIyNTUxNTUgQzIxLjk0OTM3NTMsMzkuNDI4OTk3NyAyMy45NTI5NTg4LDM5Ljc0NDUyMjcgMjUuNzE5MTUyNywzOS4wNTAyNTc3IEMyNy40ODQ5ODI1LDM4LjMxMzg3NTggMjguNzQxODYyNywzNi43MTM1MDA0IDI5LjAzODc0MDMsMzQuODIzNDUzNiBDMjkuMDc5Mjk2OSwzNC41NjM0ODMxIDI5LjIyMTcwNDYsMzQuMzMwMzYzIDI5LjQzNDQ5NTIsMzQuMTc1NjA2MiBDMjkuNjQ3Mjg1NywzNC4wMjA4NDk0IDI5LjkxMjk0MTksMzMuOTU3MTk1OSAzMC4xNzI3NjEsMzMuOTk4NzExMyBDMzAuNDMxNTQsMzQuMDM4OTEwMiAzMC42NjMwMzI1LDM0LjE4MjEzMzIgMzAuODE0NTEzLDM0LjM5NTc1OTUgQzMwLjk2NTk5MzQsMzQuNjA5Mzg1OCAzMS4wMjQ1NjQxLDM0Ljg3NTIyNjIgMzAuOTc2ODg0NywzNS4xMzI3MzIgQzMwLjQ3MTA4NTksMzguNzAwMjE1MSAyNy40MDQ2OTg2LDQxLjM0MzY1MjUgMjMuODAxNjI2OSw0MS4zMTgyOTkgTDIzLjgwMTYyNjksNDEuMzU5NTM2MSBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjNzAyMDQ5Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/emoji/6.svg":
/*!***********************************!*\
  !*** ./MindMap/Icons/emoji/6.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7ooajmg4XlpIfku708L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM5Ny4wMDAwMDAsIC0yNDEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLooajmg4UiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgMjA5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IuihqOaDheWkh+S7vSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjRkZCRjJDIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGN4PSIyNSIgY3k9IjI1IiByPSIyNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTExLjI1LDE4LjE3NTE1MjEgTDExLjI1LDE4LjE3NTE1MjYgQzExLjI1LDE5LjkyODc0MTYgMTIuNjcxNTYzNywyMS4zNTAzMDUyIDE0LjQyNTE1MjYsMjEuMzUwMzA1MiBDMTYuMTc4NzQxNiwyMS4zNTAzMDUyIDE3LjYwMDMwNTIsMTkuOTI4NzQxNiAxNy42MDAzMDUyLDE4LjE3NTE1MjYgTDE3LjYwMDMwNTIsMTguMTc1MTUyNiBDMTcuNjAwMzA1MiwxNi40MjE1NjM3IDE2LjE3ODc0MTYsMTUgMTQuNDI1MTUyNiwxNSBDMTIuNjcxNTYzNywxNSAxMS4yNSwxNi40MjE1NjM3IDExLjI1LDE4LjE3NTE1MjYgTDExLjI1LDE4LjE3NTE1MjEgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iIzRDNDAyMiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTMyLjUsMTguMTc1MTUyMSBMMzIuNSwxOC4xNzUxNTI2IEMzMi41LDE5LjkyODc0MTYgMzMuOTIxNTYzNywyMS4zNTAzMDUyIDM1LjY3NTE1MjYsMjEuMzUwMzA1MiBDMzcuNDI4NzQxNiwyMS4zNTAzMDUyIDM4Ljg1MDMwNTIsMTkuOTI4NzQxNiAzOC44NTAzMDUyLDE4LjE3NTE1MjYgTDM4Ljg1MDMwNTIsMTguMTc1MTUyNiBDMzguODUwMzA1MiwxNi40MjE1NjM3IDM3LjQyODc0MTYsMTUgMzUuNjc1MTUyNiwxNSBDMzMuOTIxNTYzNywxNSAzMi41LDE2LjQyMTU2MzcgMzIuNSwxOC4xNzUxNTI2IEwzMi41LDE4LjE3NTE1MjEgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iIzRDNDAyMiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgZmlsbD0iIzRDNDAyMiIgeD0iMTIiIHk9IjM1IiB3aWR0aD0iMjYiIGhlaWdodD0iNCIgcng9IjIiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/emoji/7.svg":
/*!***********************************!*\
  !*** ./MindMap/Icons/emoji/7.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7ooajmg4U8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1Ny4wMDAwMDAsIC0yNDEuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9IuihqOaDhSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTcuMDAwMDAwLCAyMDkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNjAuMDAwMDAwLCAzMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjUsNTAgQzExLjE5NTQ1MTIsNDkuOTkxNDczNCAwLDM4LjgwNDU0ODggMCwyNSBDMCwxMS4xOTU0NTEyIDExLjE5NTQ1MTIsMCAyNSwwIEMyOC4zMjUzNzEyLDAgMzEuNDk3MjY4NCwwLjY0ODAyMTQzIDM0LjM5NjMyNTksMS44MjQ2OTMyOCBDNDMuNTQ1MzQ3MSw1LjUzMzc2MjcgNTAsMTQuNTEyMjgyMSA1MCwyNC45OTk5ODAyIEM1MCwzOC44MDQ1NDg4IDM4LjgwNDU0ODgsNTAgMjUsNTAgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iI0ZGQkYyQyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMC42NzY4MDg4LDIzLjQ2MTUzODUgQzguODEyNjc1MTEsMjMuNDYxNTM4NSA3LjMwNzY5MjMxLDI1LjAwNzgxMjkgNy4zMDc2OTIzMSwyNi45MjMwNzY5IEwxNC4wNDU5Mzg1LDI2LjkyMzA3NjkgQzE0LjA0NTkzODUsMjUuMDE2NTkyMiAxMi41MzI0MDQyLDIzLjQ2MTUzODUgMTAuNjc2ODIyLDIzLjQ2MTUzODUgTDEwLjY3NjgwODgsMjMuNDYxNTM4NSBaIE00MC4wODM4NzcsMjMuNDYxNTM4NSBDMzguMjE5NzQzMywyMy40NjE1Mzg1IDM2LjcxNDc2MDUsMjUuMDA3ODEyOSAzNi43MTQ3NjA1LDI2LjkyMzA3NjkgTDQzLjQ2MTUzODUsMjYuOTIzMDc2OSBDNDMuNDUyOTg3NCwyNS4wMTY1OTIyIDQxLjkzOTQ1MjYsMjMuNDYxNTM4NSA0MC4wODM4NzA0LDIzLjQ2MTUzODUgTDQwLjA4Mzg3NywyMy40NjE1Mzg1IFoiIGlkPSLlvaLnirYiIGZpbGw9IiNFODhCNUMiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTQuMzYxNjgwOCwxNy40NTU2MTg2IEMxNC4zNjE2ODA4LDE2LjE1Mzg0NDMgMTUuNDMxNDY4OSwxNS4wOTcyMDk3IDE2Ljc0OTQ0ODUsMTUuMDk3MjA5NyBDMTguMDY3NDI4LDE1LjA5NzIwOTcgMTkuMTM3MjE2MiwxNi4xNTM4NDQzIDE5LjEzNzIxNjIsMTcuNDU1NjE4NiBDMTkuMTM3MjE2MiwxOC4wMTM1MjIgMTkuNTkwODA3MSwxOC40NjE1Mzg1IDIwLjE1NTY1ODIsMTguNDYxNTM4NSBDMjAuNzIwNTA2NywxOC40NjE1Mzg1IDIxLjE3NDEwMDMsMTguMDEzNTI0NiAyMS4xNzQxMDAzLDE3LjQ1NTYxODYgQzIxLjE3NDEwMDMsMTUuMDQ2NDg4NCAxOS4xODg1Njg4LDEzLjA3NjkyMzEgMTYuNzQwODk2MywxMy4wNzY5MjMxIEMxNC4zMDE3NzU5LDEzLjA3NjkyMzEgMTIuMzA3NjkyMywxNS4wMzgwNDE0IDEyLjMwNzY5MjMsMTcuNDU1NjE4NiBDMTIuMzA3NjkyMywxOC4wMTM1MjIgMTIuNzYxMjgzMiwxOC40NjE1Mzg1IDEzLjMyNjEzNDQsMTguNDYxNTM4NSBDMTMuOTA4MDk5OCwxOC40NjE1Mzg1IDE0LjM2MTY4NzQsMTguMDEzNTI0NiAxNC4zNjE2ODc0LDE3LjQ1NTYxODYgTTMzLjY2MDcxNCwxMy4wNzY5MjMxIEMzMS4yMjE1OTM3LDEzLjA3NjkyMzEgMjkuMjI3NTEwMSwxNS4wMzgwNDE0IDI5LjIyNzUxMDEsMTcuNDU1NjE4NiBDMjkuMjI3NTEwMSwxOC4wMTM1MjIgMjkuNjgxMTAxLDE4LjQ2MTUzODUgMzAuMjQ1OTUyMSwxOC40NjE1Mzg1IEMzMC44MTA4MDA2LDE4LjQ2MTUzODUgMzEuMjY0Mzk0MiwxOC4wMTM1MjQ2IDMxLjI2NDM5NDIsMTcuNDU1NjE4NiBDMzEuMjY0Mzk0MiwxNi4xNTM4NDQzIDMyLjMzNDE4MjMsMTUuMDk3MjA5NyAzMy42NTIxNjE5LDE1LjA5NzIwOTcgQzM0Ljk3MDE0MTQsMTUuMDk3MjA5NyAzNi4wMzk5Mjk2LDE2LjE1Mzg0NDMgMzYuMDM5OTI5NiwxNy40NTU2MTg2IEMzNi4wMzk5Mjk2LDE4LjAxMzUyMiAzNi40OTM1MjA1LDE4LjQ2MTUzODUgMzcuMDU4MzcxNiwxOC40NjE1Mzg1IEMzNy42MjMyMjAxLDE4LjQ2MTUzODUgMzguMDc2ODEzNywxOC4wMTM1MjQ2IDM4LjA3NjgxMzcsMTcuNDU1NjE4NiBDMzguMDkzOTMwMywxNS4wNDY0ODg0IDM2LjA5OTg0MSwxMy4wNzY5MjMxIDMzLjY2MDcyMDcsMTMuMDc2OTIzMSIgaWQ9IuW9oueKtiIgc3Ryb2tlPSIjNEM0MDIyIiBmaWxsPSIjNEM0MDIyIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI1LjM4ODg5NSw0My40NjE1Mzg1IEMxOC4xNjIzMTU3LDQzLjQ2MTUzODUgMTIuMzA3NjkyMywzNy42MDg4ODMyIDEyLjMwNzY5MjMsMzAuMzg0NjE1NCBMMzguNDYxNTM4NSwzMC4zODQ2MTU0IEMzOC40NzAwNTExLDM3LjYwODgzMDUgMzIuNjE1NDc0Myw0My40NjE1Mzg1IDI1LjM4ODg5NSw0My40NjE1Mzg1IFoiIGlkPSLot6/lvoQiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuNDYxNTM4NSwzNi4xNTM4NDYyIEMxMy44MDYxNDk0LDM2LjgyOTczOTEgMTQuMjE5NjY3NiwzNy40NzM0NDUgMTQuNjkzNDg4NCwzOC4wNzY5MjMxIEwzNi4wNzU3NTU3LDM4LjA3NjkyMzEgQzM2LjU0OTU3NzEsMzcuNDczNDQ2OCAzNi45NjMwOTYsMzYuODI5NzM5MSAzNy4zMDc2OTIzLDM2LjE1Mzg0NjIgTDEzLjQ2MTUzODUsMzYuMTUzODQ2MiBMMTMuNDYxNTM4NSwzNi4xNTM4NDYyIFoiIGlkPSLot6/lvoQiIGZpbGw9IiNFNkU2RTYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjUuMzg0NjEzMiw0NC42MTUzODQ2IEMxNy43NDU2NDk4LDQ0LjYxNTM4NDYgMTEuNTM4NDYxNSwzOC40MzI1NDAyIDExLjUzODQ2MTUsMzAuODQyNTc0OCBDMTEuNTM4NDYxNSwyOS45NTU2NTQzIDEyLjI2NzIwNjcsMjkuMjMwNzY5MiAxMy4xNTg4NTAxLDI5LjIzMDc2OTIgTDM3LjYxMDM2MjksMjkuMjMwNzY5MiBDMzguNTAyMDA2NCwyOS4yMzA3NjkyIDM5LjIzMDc2MDQsMjkuOTU1NjU0MyAzOS4yMzA3NjA0LDMwLjg0MjU3NDggQzM5LjIzOTMyNSwzOC40MzI1NjY1IDMzLjAyMzU1NjcsNDQuNjE1Mzg0NiAyNS4zODQ1OTk5LDQ0LjYxNTM4NDYgTDI1LjM4NDYxMzIsNDQuNjE1Mzg0NiBaIE0xMy4xNTg4MjM2LDMwLjU2MTEyNjggQzEzLjAwNDUwMTMsMzAuNTYxMTI2OCAxMi44ODQ0NzI3LDMwLjY4MDUxOTYgMTIuODg0NDcyNywzMC44MzQwMjQ1IEMxMi44ODQ0NzI3LDM3LjY5MDYxNTggMTguNDkxNTI0OSw0My4yNjc5Mjg0IDI1LjM4NDU4ODYsNDMuMjY3OTI4NCBDMzIuMjc3NjkyMSw0My4yNjc5Mjg0IDM3Ljg4NDcwNDUsMzcuNjkwNTc2MyAzNy44ODQ3MDQ1LDMwLjgzNDAyNDUgQzM3Ljg4NDcwNDUsMzAuNjgwNTE5NiAzNy43NjQ2NzYsMzAuNTYxMTI2OCAzNy42MTAzNTM3LDMwLjU2MTEyNjggTDEzLjE1ODg0MDgsMzAuNTYxMTI2OCBMMTMuMTU4ODIzNiwzMC41NjExMjY4IFoiIGlkPSLlvaLnirYiIHN0cm9rZT0iIzRDNDAyMiIgZmlsbD0iIzRDNDAyMiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ "./MindMap/Icons/flag/1.svg":
/*!**********************************!*\
  !*** ./MindMap/Icons/flag/1.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMTE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk3LjAwMDAwMCwgLTQ3MS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IuaXl+W4nCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTcuMDAwMDAwLCA0MzkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTExIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjRTg0NjQzIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSLot6/lvoQiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSIyOC43ODY2Njc4IDE1LjkzMzMzMjIgMjguMiAxMyAxNSAxMyAxNSAzNy45MzMzMjE5IDE3LjkzMzMzMjIgMzcuOTMzMzIxOSAxNy45MzMzMzIyIDI3LjY2NjY0MzcgMjYuMTQ2NjU0MSAyNy42NjY2NDM3IDI2LjczMzMyMTkgMzAuNTk5OTc1OSAzNyAzMC41OTk5NzU5IDM3IDE1LjkzMzI5NzggMjguNzg2Njc4MSAxNS45MzMyOTc4Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/flag/2.svg":
/*!**********************************!*\
  !*** ./MindMap/Icons/flag/2.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMTI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1Ny4wMDAwMDAsIC00NzEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLml5fluJwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgNDM5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0xMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjAuMDAwMDAwLCAzMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIblvaIiIGZpbGw9IiNGRkIzMEEiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9Iui3r+W+hOWkh+S7vSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBwb2ludHM9IjI4Ljc4NjY2NzggMTUuOTMzMzMyMiAyOC4yIDEzIDE1IDEzIDE1IDM3LjkzMzMyMTkgMTcuOTMzMzMyMiAzNy45MzMzMjE5IDE3LjkzMzMzMjIgMjcuNjY2NjQzNyAyNi4xNDY2NTQxIDI3LjY2NjY0MzcgMjYuNzMzMzIxOSAzMC41OTk5NzU5IDM3IDMwLjU5OTk3NTkgMzcgMTUuOTMzMjk3OCAyOC43ODY2NzgxIDE1LjkzMzI5NzgiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/flag/3.svg":
/*!**********************************!*\
  !*** ./MindMap/Icons/flag/3.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMTM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxNy4wMDAwMDAsIC00NzEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLml5fluJwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgNDM5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0xMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjNTg2QUZGIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSLot6/lvoTlpIfku70tMiIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBwb2ludHM9IjI4Ljc4NjY2NzggMTUuOTMzMzMyMiAyOC4yIDEzIDE1IDEzIDE1IDM3LjkzMzMyMTkgMTcuOTMzMzMyMiAzNy45MzMzMjE5IDE3LjkzMzMzMjIgMjcuNjY2NjQzNyAyNi4xNDY2NTQxIDI3LjY2NjY0MzcgMjYuNzMzMzIxOSAzMC41OTk5NzU5IDM3IDMwLjU5OTk3NTkgMzcgMTUuOTMzMjk3OCAyOC43ODY2NzgxIDE1LjkzMzI5NzgiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/flag/4.svg":
/*!**********************************!*\
  !*** ./MindMap/Icons/flag/4.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMTQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3Ny4wMDAwMDAsIC00NzEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLml5fluJwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgNDM5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0xNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTgwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjQkYzOUIxIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJmbGFnIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHBvaW50cz0iMjguNzg2NjY3OCAxNS45MzMzMzIyIDI4LjIgMTMgMTUgMTMgMTUgMzcuOTMzMzIxOSAxNy45MzMzMzIyIDM3LjkzMzMyMTkgMTcuOTMzMzMyMiAyNy42NjY2NDM3IDI2LjE0NjY1NDEgMjcuNjY2NjQzNyAyNi43MzMzMjE5IDMwLjU5OTk3NTkgMzcgMzAuNTk5OTc1OSAzNyAxNS45MzMyOTc4IDI4Ljc4NjY3ODEgMTUuOTMzMjk3OCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ "./MindMap/Icons/flag/5.svg":
/*!**********************************!*\
  !*** ./MindMap/Icons/flag/5.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMTU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMzNy4wMDAwMDAsIC00NzEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLml5fluJwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgNDM5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0xNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjMjlDQjVEIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJmbGFn5aSH5Lu9IiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHBvaW50cz0iMjguNzg2NjY3OCAxNS45MzMzMzIyIDI4LjIgMTMgMTUgMTMgMTUgMzcuOTMzMzIxOSAxNy45MzMzMzIyIDM3LjkzMzMyMTkgMTcuOTMzMzMyMiAyNy42NjY2NDM3IDI2LjE0NjY1NDEgMjcuNjY2NjQzNyAyNi43MzMzMjE5IDMwLjU5OTk3NTkgMzcgMzAuNTk5OTc1OSAzNyAxNS45MzMyOTc4IDI4Ljc4NjY3ODEgMTUuOTMzMjk3OCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ "./MindMap/Icons/flag/6.svg":
/*!**********************************!*\
  !*** ./MindMap/Icons/flag/6.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMTY8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM5Ny4wMDAwMDAsIC00NzEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLml5fluJwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgNDM5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0xNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjMDhCQkU1IiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJmbGFn5aSH5Lu9LTIiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSIyOC43ODY2Njc4IDE1LjkzMzMzMjIgMjguMiAxMyAxNSAxMyAxNSAzNy45MzMzMjE5IDE3LjkzMzMzMjIgMzcuOTMzMzIxOSAxNy45MzMzMzIyIDI3LjY2NjY0MzcgMjYuMTQ2NjU0MSAyNy42NjY2NDM3IDI2LjczMzMyMTkgMzAuNTk5OTc1OSAzNyAzMC41OTk5NzU5IDM3IDE1LjkzMzI5NzggMjguNzg2Njc4MSAxNS45MzMyOTc4Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/flag/7.svg":
/*!**********************************!*\
  !*** ./MindMap/Icons/flag/7.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMTc8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1Ny4wMDAwMDAsIC00NzEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLml5fluJwiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgNDM5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0xNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzYwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjN0ZBQ0IzIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJmbGFn5aSH5Lu9LTMiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSIyOC43ODY2Njc4IDE1LjkzMzMzMjIgMjguMiAxMyAxNSAxMyAxNSAzNy45MzMzMjE5IDE3LjkzMzMzMjIgMzcuOTMzMzIxOSAxNy45MzMzMzIyIDI3LjY2NjY0MzcgMjYuMTQ2NjU0MSAyNy42NjY2NDM3IDI2LjczMzMyMTkgMzAuNTk5OTc1OSAzNyAzMC41OTk5NzU5IDM3IDE1LjkzMzI5NzggMjguNzg2Njc4MSAxNS45MzMyOTc4Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/level/1.svg":
/*!***********************************!*\
  !*** ./MindMap/Icons/level/1.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4Q8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk3LjAwMDAwMCwgLTEzMS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IuS8mOWFiOe6pyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTcuMDAwMDAwLCA5OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAzMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIblvaIiIGZpbGw9IiNFODQ2NDMiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IjEiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSIyMy45NTYgMzggMjMuOTU2IDE3LjczMiAxNy44MzYgMTguOTIgMTcuODM2IDE0LjUyOCAyNS4zMjQgMTMuMDE2IDI5LjI0OCAxMy4wMTYgMjkuMjQ4IDM4Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/level/2.svg":
/*!***********************************!*\
  !*** ./MindMap/Icons/level/2.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4TlpIfku708L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1Ny4wMDAwMDAsIC0xMzEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLkvJjlhYjnuqciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgOTkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uE5aSH5Lu9IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MC4wMDAwMDAsIDMyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9IuakreWchuW9oiIgZmlsbD0iI0ZGQjMwQSIgY3g9IjI1IiBjeT0iMjUiIHI9IjI1Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTYuODM2LDM4IEwxNi44MzYsMzMuMzIgQzI1LjYyLDI2LjI2NCAyOC4zMiwyMy4zODQgMjguMzIsMjAuNTQgQzI4LjMyLDE3LjgwNCAyNi43LDE2Ljk3NiAyMy45NjQsMTYuOTc2IEMyMi4zNDQsMTYuOTc2IDIwLjUwOCwxNy4yMjggMTguMzQ4LDE3LjkxMiBMMTguMzQ4LDEzLjU1NiBDMjAuMjU2LDEyLjk0NCAyMi41NiwxMi42NTYgMjQuOTcyLDEyLjY1NiBDMzAuNDgsMTIuNjU2IDMzLjcyLDE0Ljk2IDMzLjcyLDE5Ljc0OCBDMzMuNzIsMjMuNzggMzIuMjgsMjYuMzcyIDI0Ljk3MiwzMi4xMzIgTDIzLjM4OCwzMy4zOTIgTDIzLjM4OCwzMy42OCBMMzQuMjk2LDMzLjY4IEwzNC4yOTYsMzggTDE2LjgzNiwzOCBaIiBpZD0iMiIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/level/3.svg":
/*!***********************************!*\
  !*** ./MindMap/Icons/level/3.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4TlpIfku70gMjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJ4bWluZC3lm77moIciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjE3LjAwMDAwMCwgLTEzMS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IuS8mOWFiOe6pyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTcuMDAwMDAwLCA5OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4TlpIfku70tMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjNTg2QUZGIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMy4xLDM4LjM2IEMyMC45MDQsMzguMzYgMTguOTk2LDM4LjIxNiAxNy40NDgsMzcuODkyIEwxNy40NDgsMzMuNDI4IEMxOS4zMiwzMy44MjQgMjAuOTA0LDM0LjA0IDIyLjgxMiwzNC4wNCBDMjUuOCwzNC4wNCAyOC4yMTIsMzMuMzkyIDI4LjIxMiwzMC41NDggQzI4LjIxMiwyNy44NDggMjUuOTQ0LDI3LjEyOCAyMi4wOTIsMjcuMTI4IEwyMC4xODQsMjcuMTI4IEwyMC4xODQsMjMuMTMyIEwyMi4wNTYsMjMuMTMyIEMyNS41NDgsMjMuMTMyIDI3Ljc4LDIyLjM3NiAyNy43OCwxOS44MiBDMjcuNzgsMTcuNTUyIDI2LjAxNiwxNi45MDQgMjMuMjQ0LDE2LjkwNCBDMjEuNjk2LDE2LjkwNCAxOS43ODgsMTcuMTkyIDE4LjM4NCwxNy42MjQgTDE4LjM4NCwxMy40MTIgQzE5LjUzNiwxMy4wMTYgMjEuODQsMTIuNjU2IDIzLjg5MiwxMi42NTYgQzI5LjUwOCwxMi42NTYgMzMsMTQuMzg0IDMzLDE5LjQ5NiBDMzMsMjIuMTI0IDMxLjc3NiwyMy45NiAyOS4wMDQsMjQuODYgTDI5LjAwNCwyNS4wNzYgQzMyLjA2NCwyNS42ODggMzMuNjQ4LDI3LjkyIDMzLjY0OCwzMC45OCBDMzMuNjQ4LDM2LjA1NiAzMC4xMiwzOC4zNiAyMy4xLDM4LjM2IFoiIGlkPSIzIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/level/4.svg":
/*!***********************************!*\
  !*** ./MindMap/Icons/level/4.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4TlpIfku70gNTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJ4bWluZC3lm77moIciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjc3LjAwMDAwMCwgLTEzMS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IuS8mOWFiOe6pyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTcuMDAwMDAwLCA5OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4TlpIfku70tNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTgwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjN0ZBQ0IzIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMy44LDI4LjI0NCBMMzMuOCwzMi42NzIgTDMxLjA2NCwzMi42NzIgTDMxLjA2NCwzOCBMMjYuMDYsMzggTDI2LjA2LDMyLjY3MiBMMTQuOTM2LDMyLjY3MiBMMTQuOTM2LDI3LjU2IEwyNC45OCwxMy4wMTYgTDMxLjA2NCwxMy4wMTYgTDMxLjA2NCwyOC4yNDQgTDMzLjgsMjguMjQ0IFogTTE5LjM2NCwyOC4yNDQgTDI2LjA2LDI4LjI0NCBMMjYuMDYsMTguNDE2IEwyNS44NDQsMTguNDE2IEwxOS4zNjQsMjguMDI4IEwxOS4zNjQsMjguMjQ0IFoiIGlkPSI0IiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/level/5.svg":
/*!***********************************!*\
  !*** ./MindMap/Icons/level/5.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4TlpIfku70gNDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJ4bWluZC3lm77moIciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzM3LjAwMDAwMCwgLTEzMS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IuS8mOWFiOe6pyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTcuMDAwMDAwLCA5OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4TlpIfku70tNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjN0ZBQ0IzIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMy4zODgsMzguMzYgQzIxLjIyOCwzOC4zNiAxOS42OCwzOC4yMTYgMTcuOTUyLDM3Ljg5MiBMMTcuOTUyLDMzLjQyOCBDMTkuNzUyLDMzLjgyNCAyMC45MDQsMzQuMDQgMjIuOTU2LDM0LjA0IEMyNi4yMzIsMzQuMDQgMjguNjQ0LDMzLjE3NiAyOC42NDQsMzAuMTE2IEMyOC42NDQsMjcuMjM2IDI2Ljk1MiwyNi4yNjQgMjMuMDY0LDI2LjI2NCBDMjEuNTE2LDI2LjI2NCAxOS40NjQsMjYuNTE2IDE3Ljg0NCwyNi44MDQgTDE5LjYwOCwxMy4wMTYgTDMyLjQ5NiwxMy4wMTYgTDMyLjQ5NiwxNy40NDQgTDIzLjc4NCwxNy40NDQgTDIyLjk5MiwyMi41OTIgQzIzLjg1NiwyMi40MTIgMjQuNjEyLDIyLjM0IDI1LjY1NiwyMi4zNCBDMzEuMjcyLDIyLjM0IDM0LjA4LDI0LjgyNCAzNC4wOCwzMC4wNDQgQzM0LjA4LDM1LjgwNCAzMC4wODQsMzguMzYgMjMuMzg4LDM4LjM2IFoiIGlkPSI1IiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/level/6.svg":
/*!***********************************!*\
  !*** ./MindMap/Icons/level/6.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4TlpIfku70gMzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJ4bWluZC3lm77moIciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzk3LjAwMDAwMCwgLTEzMS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IuS8mOWFiOe6pyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTcuMDAwMDAwLCA5OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4TlpIfku70tMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjN0ZBQ0IzIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNC42OTIsMzguMzYgQzE5LjY1MiwzOC4zNiAxNS42NTYsMzYuMDkyIDE1LjY1NiwyOC40MjQgQzE1LjY1NiwxOC42NjggMjAuMDQ4LDEyLjY1NiAzMC4yLDEyLjY1NiBMMzAuMTY0LDE3LjEyIEMyNC41MTIsMTcuMjI4IDIxLjU2LDE5LjQ2IDIxLjAyLDIzLjM0OCBMMjEuMTI4LDIzLjM0OCBDMjIuMzE2LDIyLjM3NiAyNC4xMTYsMjEuODcyIDI1Ljk1MiwyMS44NzIgQzMwLjg4NCwyMS44NzIgMzMuNTg0LDI0LjYwOCAzMy41ODQsMjkuODI4IEMzMy41ODQsMzQuOTc2IDMwLjg0OCwzOC4zNiAyNC42OTIsMzguMzYgWiBNMjQuNTEyLDM0LjI1NiBDMjcuMjEyLDM0LjI1NiAyOC43MjQsMzIuNzggMjguNzI0LDI5LjkgQzI4LjcyNCwyNy4xMjggMjcuMjg0LDI1LjcyNCAyNC44MzYsMjUuNzI0IEMyMS43MDQsMjUuNzI0IDIwLjYyNCwyNy4zNDQgMjAuNjI0LDI5LjY0OCBDMjAuNjI0LDMyLjU2NCAyMS44ODQsMzQuMjU2IDI0LjUxMiwzNC4yNTYgWiIgaWQ9IjYiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ "./MindMap/Icons/level/7.svg":
/*!***********************************!*\
  !*** ./MindMap/Icons/level/7.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4TlpIfku70gNjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJ4bWluZC3lm77moIciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDU3LjAwMDAwMCwgLTEzMS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IuS8mOWFiOe6pyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTcuMDAwMDAwLCA5OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4TlpIfku70tNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzYwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjN0ZBQ0IzIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSI3IiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHBvaW50cz0iMTkuMzIgMzggMjguODI0IDE3LjQ0NCAxNi45OCAxNy40NDQgMTYuOTggMTMuMDE2IDMzLjc5MiAxMy4wMTYgMzMuNzkyIDE4LjEyOCAyNC43OTIgMzgiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/star/1.svg":
/*!**********************************!*\
  !*** ./MindMap/Icons/star/1.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMTg8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk3LjAwMDAwMCwgLTU4MS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IuaYn+aYnyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTcuMDAwMDAwLCA1NDkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjRTg0NjQzIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNC4zODk3NzcsMTAuOTQyNTU5OCBDMjUuMDAxNTI1LDkuNjg1ODEzNDIgMjYuMDAxMjYxNCw5LjY4NTgxMzQyIDI2LjYxMzAwOTQsMTAuOTQyNTU5OCBMMjkuNTU1NzczNCwxNi45OTI5NTUyIEMzMC4xNjc1MjE0LDE4LjI0OTcwMTUgMzEuNzg2MTksMTkuNDQyOTk5MiAzMy4xNTMzNzMxLDE5LjY0NDYwOTcgTDM5LjczMzc1NjgsMjAuNjE0ODAxNyBDNDEuMTAwOTUxNiwyMC44MTY0MTM0IDQxLjQwOTkwNDksMjEuNzgyNTExNCA0MC40MjA0MzIxLDIyLjc2MDg5MTkgTDM1LjY1ODg0MzUsMjcuNDY5NjAwMSBDMzQuNjY5MzczNiwyOC40NDc5ODA2IDM0LjA1MTQ2NjksMzAuMzc5MTU2NSAzNC4yODQ0NjQ1LDMxLjc1OTc0MTQgTDM1LjQwODM5ODEsMzguNDA5ODQ3MyBDMzUuNjQyNDIyNCwzOS43OTE0NTE3IDM0LjgzMjU3NDIsNDAuMzg4MTAwNiAzMy42MTAxMDY2LDM5LjczNTE2MzMgTDI3LjcyMzU3OTUsMzYuNTk1MzQwOSBDMjYuNTAxMTA5MSwzNS45NDM0MjkxIDI0LjQ5OTU4ODIsMzUuOTQzNDI5MSAyMy4yNzcxMjY2LDM2LjU5NTM0MDkgTDE3LjM5MDU5OTUsMzkuNzM1MTYzMyBDMTYuMTY4MTI5LDQwLjM4ODA5NzcgMTUuMzU4MjgyLDM5Ljc5MTQ1MDggMTUuNTkyMzA4LDM4LjQwOTg0NzMgTDE2LjcxNjI0MTYsMzEuNzU5NzQxNCBDMTYuOTUwMjY1OSwzMC4zNzkxNjI0IDE2LjMzMTMzMjUsMjguNDQ3OTc0NyAxNS4zNDE4NjI2LDI3LjQ2OTYwMDEgTDEwLjU3OTI3NSwyMi43NjA4OTE5IEM5LjU4OTgwNTA4LDIxLjc4MjUxMTQgOS44OTk3ODM5MSwyMC44MTc0MzQ3IDExLjI2NTk1MDMsMjAuNjE0ODAxNyBMMTcuODQ3MzYyNCwxOS42NDQ2MDk3IEMxOS4yMTQ1NTcyLDE5LjQ0Mjk5ODEgMjAuODMzMjMxNywxOC4yNDk3MDE1IDIxLjQ0NDk2MiwxNi45OTI5NTUyIEwyNC4zODk3NTM1LDEwLjk0MjU1OTggTDI0LjM4OTc3NywxMC45NDI1NTk4IFoiIGlkPSLkupTmmJ8iIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ "./MindMap/Icons/star/2.svg":
/*!**********************************!*\
  !*** ./MindMap/Icons/star/2.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMTk8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1Ny4wMDAwMDAsIC01ODEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLmmJ/mmJ8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgNTQ5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0xOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjAuMDAwMDAwLCAzMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIblvaIiIGZpbGw9IiNGRkIzMEEiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0LjM4OTc3NywxMC45NDI1NTk4IEMyNS4wMDE1MjUsOS42ODU4MTM0MiAyNi4wMDEyNjE0LDkuNjg1ODEzNDIgMjYuNjEzMDA5NCwxMC45NDI1NTk4IEwyOS41NTU3NzM0LDE2Ljk5Mjk1NTIgQzMwLjE2NzUyMTQsMTguMjQ5NzAxNSAzMS43ODYxOSwxOS40NDI5OTkyIDMzLjE1MzM3MzEsMTkuNjQ0NjA5NyBMMzkuNzMzNzU2OCwyMC42MTQ4MDE3IEM0MS4xMDA5NTE2LDIwLjgxNjQxMzQgNDEuNDA5OTA0OSwyMS43ODI1MTE0IDQwLjQyMDQzMjEsMjIuNzYwODkxOSBMMzUuNjU4ODQzNSwyNy40Njk2MDAxIEMzNC42NjkzNzM2LDI4LjQ0Nzk4MDYgMzQuMDUxNDY2OSwzMC4zNzkxNTY1IDM0LjI4NDQ2NDUsMzEuNzU5NzQxNCBMMzUuNDA4Mzk4MSwzOC40MDk4NDczIEMzNS42NDI0MjI0LDM5Ljc5MTQ1MTcgMzQuODMyNTc0Miw0MC4zODgxMDA2IDMzLjYxMDEwNjYsMzkuNzM1MTYzMyBMMjcuNzIzNTc5NSwzNi41OTUzNDA5IEMyNi41MDExMDkxLDM1Ljk0MzQyOTEgMjQuNDk5NTg4MiwzNS45NDM0MjkxIDIzLjI3NzEyNjYsMzYuNTk1MzQwOSBMMTcuMzkwNTk5NSwzOS43MzUxNjMzIEMxNi4xNjgxMjksNDAuMzg4MDk3NyAxNS4zNTgyODIsMzkuNzkxNDUwOCAxNS41OTIzMDgsMzguNDA5ODQ3MyBMMTYuNzE2MjQxNiwzMS43NTk3NDE0IEMxNi45NTAyNjU5LDMwLjM3OTE2MjQgMTYuMzMxMzMyNSwyOC40NDc5NzQ3IDE1LjM0MTg2MjYsMjcuNDY5NjAwMSBMMTAuNTc5Mjc1LDIyLjc2MDg5MTkgQzkuNTg5ODA1MDgsMjEuNzgyNTExNCA5Ljg5OTc4MzkxLDIwLjgxNzQzNDcgMTEuMjY1OTUwMywyMC42MTQ4MDE3IEwxNy44NDczNjI0LDE5LjY0NDYwOTcgQzE5LjIxNDU1NzIsMTkuNDQyOTk4MSAyMC44MzMyMzE3LDE4LjI0OTcwMTUgMjEuNDQ0OTYyLDE2Ljk5Mjk1NTIgTDI0LjM4OTc1MzUsMTAuOTQyNTU5OCBMMjQuMzg5Nzc3LDEwLjk0MjU1OTggWiIgaWQ9IuS6lOaYn+Wkh+S7vSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/star/3.svg":
/*!**********************************!*\
  !*** ./MindMap/Icons/star/3.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMjA8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxNy4wMDAwMDAsIC01ODEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLmmJ/mmJ8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgNTQ5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0yMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjNTg2QUZGIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNC4zODk3NzcsMTAuOTQyNTU5OCBDMjUuMDAxNTI1LDkuNjg1ODEzNDIgMjYuMDAxMjYxNCw5LjY4NTgxMzQyIDI2LjYxMzAwOTQsMTAuOTQyNTU5OCBMMjkuNTU1NzczNCwxNi45OTI5NTUyIEMzMC4xNjc1MjE0LDE4LjI0OTcwMTUgMzEuNzg2MTksMTkuNDQyOTk5MiAzMy4xNTMzNzMxLDE5LjY0NDYwOTcgTDM5LjczMzc1NjgsMjAuNjE0ODAxNyBDNDEuMTAwOTUxNiwyMC44MTY0MTM0IDQxLjQwOTkwNDksMjEuNzgyNTExNCA0MC40MjA0MzIxLDIyLjc2MDg5MTkgTDM1LjY1ODg0MzUsMjcuNDY5NjAwMSBDMzQuNjY5MzczNiwyOC40NDc5ODA2IDM0LjA1MTQ2NjksMzAuMzc5MTU2NSAzNC4yODQ0NjQ1LDMxLjc1OTc0MTQgTDM1LjQwODM5ODEsMzguNDA5ODQ3MyBDMzUuNjQyNDIyNCwzOS43OTE0NTE3IDM0LjgzMjU3NDIsNDAuMzg4MTAwNiAzMy42MTAxMDY2LDM5LjczNTE2MzMgTDI3LjcyMzU3OTUsMzYuNTk1MzQwOSBDMjYuNTAxMTA5MSwzNS45NDM0MjkxIDI0LjQ5OTU4ODIsMzUuOTQzNDI5MSAyMy4yNzcxMjY2LDM2LjU5NTM0MDkgTDE3LjM5MDU5OTUsMzkuNzM1MTYzMyBDMTYuMTY4MTI5LDQwLjM4ODA5NzcgMTUuMzU4MjgyLDM5Ljc5MTQ1MDggMTUuNTkyMzA4LDM4LjQwOTg0NzMgTDE2LjcxNjI0MTYsMzEuNzU5NzQxNCBDMTYuOTUwMjY1OSwzMC4zNzkxNjI0IDE2LjMzMTMzMjUsMjguNDQ3OTc0NyAxNS4zNDE4NjI2LDI3LjQ2OTYwMDEgTDEwLjU3OTI3NSwyMi43NjA4OTE5IEM5LjU4OTgwNTA4LDIxLjc4MjUxMTQgOS44OTk3ODM5MSwyMC44MTc0MzQ3IDExLjI2NTk1MDMsMjAuNjE0ODAxNyBMMTcuODQ3MzYyNCwxOS42NDQ2MDk3IEMxOS4yMTQ1NTcyLDE5LjQ0Mjk5ODEgMjAuODMzMjMxNywxOC4yNDk3MDE1IDIxLjQ0NDk2MiwxNi45OTI5NTUyIEwyNC4zODk3NTM1LDEwLjk0MjU1OTggTDI0LjM4OTc3NywxMC45NDI1NTk4IFoiIGlkPSLkupTmmJ/lpIfku70tMiIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/star/4.svg":
/*!**********************************!*\
  !*** ./MindMap/Icons/star/4.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMjE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3Ny4wMDAwMDAsIC01ODEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLmmJ/mmJ8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgNTQ5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0yMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTgwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjQkYzOUIxIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNC4zODk3NzcsMTAuOTQyNTU5OCBDMjUuMDAxNTI1LDkuNjg1ODEzNDIgMjYuMDAxMjYxNCw5LjY4NTgxMzQyIDI2LjYxMzAwOTQsMTAuOTQyNTU5OCBMMjkuNTU1NzczNCwxNi45OTI5NTUyIEMzMC4xNjc1MjE0LDE4LjI0OTcwMTUgMzEuNzg2MTksMTkuNDQyOTk5MiAzMy4xNTMzNzMxLDE5LjY0NDYwOTcgTDM5LjczMzc1NjgsMjAuNjE0ODAxNyBDNDEuMTAwOTUxNiwyMC44MTY0MTM0IDQxLjQwOTkwNDksMjEuNzgyNTExNCA0MC40MjA0MzIxLDIyLjc2MDg5MTkgTDM1LjY1ODg0MzUsMjcuNDY5NjAwMSBDMzQuNjY5MzczNiwyOC40NDc5ODA2IDM0LjA1MTQ2NjksMzAuMzc5MTU2NSAzNC4yODQ0NjQ1LDMxLjc1OTc0MTQgTDM1LjQwODM5ODEsMzguNDA5ODQ3MyBDMzUuNjQyNDIyNCwzOS43OTE0NTE3IDM0LjgzMjU3NDIsNDAuMzg4MTAwNiAzMy42MTAxMDY2LDM5LjczNTE2MzMgTDI3LjcyMzU3OTUsMzYuNTk1MzQwOSBDMjYuNTAxMTA5MSwzNS45NDM0MjkxIDI0LjQ5OTU4ODIsMzUuOTQzNDI5MSAyMy4yNzcxMjY2LDM2LjU5NTM0MDkgTDE3LjM5MDU5OTUsMzkuNzM1MTYzMyBDMTYuMTY4MTI5LDQwLjM4ODA5NzcgMTUuMzU4MjgyLDM5Ljc5MTQ1MDggMTUuNTkyMzA4LDM4LjQwOTg0NzMgTDE2LjcxNjI0MTYsMzEuNzU5NzQxNCBDMTYuOTUwMjY1OSwzMC4zNzkxNjI0IDE2LjMzMTMzMjUsMjguNDQ3OTc0NyAxNS4zNDE4NjI2LDI3LjQ2OTYwMDEgTDEwLjU3OTI3NSwyMi43NjA4OTE5IEM5LjU4OTgwNTA4LDIxLjc4MjUxMTQgOS44OTk3ODM5MSwyMC44MTc0MzQ3IDExLjI2NTk1MDMsMjAuNjE0ODAxNyBMMTcuODQ3MzYyNCwxOS42NDQ2MDk3IEMxOS4yMTQ1NTcyLDE5LjQ0Mjk5ODEgMjAuODMzMjMxNywxOC4yNDk3MDE1IDIxLjQ0NDk2MiwxNi45OTI5NTUyIEwyNC4zODk3NTM1LDEwLjk0MjU1OTggTDI0LjM4OTc3NywxMC45NDI1NTk4IFoiIGlkPSLkupTmmJ/lpIfku70tMyIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/star/5.svg":
/*!**********************************!*\
  !*** ./MindMap/Icons/star/5.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMjI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMzNy4wMDAwMDAsIC01ODEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLmmJ/mmJ8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgNTQ5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0yMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjMjlDQjVEIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNC4zODk3NzcsMTAuOTQyNTU5OCBDMjUuMDAxNTI1LDkuNjg1ODEzNDIgMjYuMDAxMjYxNCw5LjY4NTgxMzQyIDI2LjYxMzAwOTQsMTAuOTQyNTU5OCBMMjkuNTU1NzczNCwxNi45OTI5NTUyIEMzMC4xNjc1MjE0LDE4LjI0OTcwMTUgMzEuNzg2MTksMTkuNDQyOTk5MiAzMy4xNTMzNzMxLDE5LjY0NDYwOTcgTDM5LjczMzc1NjgsMjAuNjE0ODAxNyBDNDEuMTAwOTUxNiwyMC44MTY0MTM0IDQxLjQwOTkwNDksMjEuNzgyNTExNCA0MC40MjA0MzIxLDIyLjc2MDg5MTkgTDM1LjY1ODg0MzUsMjcuNDY5NjAwMSBDMzQuNjY5MzczNiwyOC40NDc5ODA2IDM0LjA1MTQ2NjksMzAuMzc5MTU2NSAzNC4yODQ0NjQ1LDMxLjc1OTc0MTQgTDM1LjQwODM5ODEsMzguNDA5ODQ3MyBDMzUuNjQyNDIyNCwzOS43OTE0NTE3IDM0LjgzMjU3NDIsNDAuMzg4MTAwNiAzMy42MTAxMDY2LDM5LjczNTE2MzMgTDI3LjcyMzU3OTUsMzYuNTk1MzQwOSBDMjYuNTAxMTA5MSwzNS45NDM0MjkxIDI0LjQ5OTU4ODIsMzUuOTQzNDI5MSAyMy4yNzcxMjY2LDM2LjU5NTM0MDkgTDE3LjM5MDU5OTUsMzkuNzM1MTYzMyBDMTYuMTY4MTI5LDQwLjM4ODA5NzcgMTUuMzU4MjgyLDM5Ljc5MTQ1MDggMTUuNTkyMzA4LDM4LjQwOTg0NzMgTDE2LjcxNjI0MTYsMzEuNzU5NzQxNCBDMTYuOTUwMjY1OSwzMC4zNzkxNjI0IDE2LjMzMTMzMjUsMjguNDQ3OTc0NyAxNS4zNDE4NjI2LDI3LjQ2OTYwMDEgTDEwLjU3OTI3NSwyMi43NjA4OTE5IEM5LjU4OTgwNTA4LDIxLjc4MjUxMTQgOS44OTk3ODM5MSwyMC44MTc0MzQ3IDExLjI2NTk1MDMsMjAuNjE0ODAxNyBMMTcuODQ3MzYyNCwxOS42NDQ2MDk3IEMxOS4yMTQ1NTcyLDE5LjQ0Mjk5ODEgMjAuODMzMjMxNywxOC4yNDk3MDE1IDIxLjQ0NDk2MiwxNi45OTI5NTUyIEwyNC4zODk3NTM1LDEwLjk0MjU1OTggTDI0LjM4OTc3NywxMC45NDI1NTk4IFoiIGlkPSLkupTmmJ/lpIfku70tNCIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/star/6.svg":
/*!**********************************!*\
  !*** ./MindMap/Icons/star/6.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMjM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM5Ny4wMDAwMDAsIC01ODEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLmmJ/mmJ8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgNTQ5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0yMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjMDhCQkU1IiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNC4zODk3NzcsMTAuOTQyNTU5OCBDMjUuMDAxNTI1LDkuNjg1ODEzNDIgMjYuMDAxMjYxNCw5LjY4NTgxMzQyIDI2LjYxMzAwOTQsMTAuOTQyNTU5OCBMMjkuNTU1NzczNCwxNi45OTI5NTUyIEMzMC4xNjc1MjE0LDE4LjI0OTcwMTUgMzEuNzg2MTksMTkuNDQyOTk5MiAzMy4xNTMzNzMxLDE5LjY0NDYwOTcgTDM5LjczMzc1NjgsMjAuNjE0ODAxNyBDNDEuMTAwOTUxNiwyMC44MTY0MTM0IDQxLjQwOTkwNDksMjEuNzgyNTExNCA0MC40MjA0MzIxLDIyLjc2MDg5MTkgTDM1LjY1ODg0MzUsMjcuNDY5NjAwMSBDMzQuNjY5MzczNiwyOC40NDc5ODA2IDM0LjA1MTQ2NjksMzAuMzc5MTU2NSAzNC4yODQ0NjQ1LDMxLjc1OTc0MTQgTDM1LjQwODM5ODEsMzguNDA5ODQ3MyBDMzUuNjQyNDIyNCwzOS43OTE0NTE3IDM0LjgzMjU3NDIsNDAuMzg4MTAwNiAzMy42MTAxMDY2LDM5LjczNTE2MzMgTDI3LjcyMzU3OTUsMzYuNTk1MzQwOSBDMjYuNTAxMTA5MSwzNS45NDM0MjkxIDI0LjQ5OTU4ODIsMzUuOTQzNDI5MSAyMy4yNzcxMjY2LDM2LjU5NTM0MDkgTDE3LjM5MDU5OTUsMzkuNzM1MTYzMyBDMTYuMTY4MTI5LDQwLjM4ODA5NzcgMTUuMzU4MjgyLDM5Ljc5MTQ1MDggMTUuNTkyMzA4LDM4LjQwOTg0NzMgTDE2LjcxNjI0MTYsMzEuNzU5NzQxNCBDMTYuOTUwMjY1OSwzMC4zNzkxNjI0IDE2LjMzMTMzMjUsMjguNDQ3OTc0NyAxNS4zNDE4NjI2LDI3LjQ2OTYwMDEgTDEwLjU3OTI3NSwyMi43NjA4OTE5IEM5LjU4OTgwNTA4LDIxLjc4MjUxMTQgOS44OTk3ODM5MSwyMC44MTc0MzQ3IDExLjI2NTk1MDMsMjAuNjE0ODAxNyBMMTcuODQ3MzYyNCwxOS42NDQ2MDk3IEMxOS4yMTQ1NTcyLDE5LjQ0Mjk5ODEgMjAuODMzMjMxNywxOC4yNDk3MDE1IDIxLjQ0NDk2MiwxNi45OTI5NTUyIEwyNC4zODk3NTM1LDEwLjk0MjU1OTggTDI0LjM4OTc3NywxMC45NDI1NTk4IFoiIGlkPSLkupTmmJ/lpIfku70tNSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/star/7.svg":
/*!**********************************!*\
  !*** ./MindMap/Icons/star/7.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMjQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1Ny4wMDAwMDAsIC01ODEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLmmJ/mmJ8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgNTQ5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0yNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzYwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjN0ZBQ0IzIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNC4zODk3NzcsMTAuOTQyNTU5OCBDMjUuMDAxNTI1LDkuNjg1ODEzNDIgMjYuMDAxMjYxNCw5LjY4NTgxMzQyIDI2LjYxMzAwOTQsMTAuOTQyNTU5OCBMMjkuNTU1NzczNCwxNi45OTI5NTUyIEMzMC4xNjc1MjE0LDE4LjI0OTcwMTUgMzEuNzg2MTksMTkuNDQyOTk5MiAzMy4xNTMzNzMxLDE5LjY0NDYwOTcgTDM5LjczMzc1NjgsMjAuNjE0ODAxNyBDNDEuMTAwOTUxNiwyMC44MTY0MTM0IDQxLjQwOTkwNDksMjEuNzgyNTExNCA0MC40MjA0MzIxLDIyLjc2MDg5MTkgTDM1LjY1ODg0MzUsMjcuNDY5NjAwMSBDMzQuNjY5MzczNiwyOC40NDc5ODA2IDM0LjA1MTQ2NjksMzAuMzc5MTU2NSAzNC4yODQ0NjQ1LDMxLjc1OTc0MTQgTDM1LjQwODM5ODEsMzguNDA5ODQ3MyBDMzUuNjQyNDIyNCwzOS43OTE0NTE3IDM0LjgzMjU3NDIsNDAuMzg4MTAwNiAzMy42MTAxMDY2LDM5LjczNTE2MzMgTDI3LjcyMzU3OTUsMzYuNTk1MzQwOSBDMjYuNTAxMTA5MSwzNS45NDM0MjkxIDI0LjQ5OTU4ODIsMzUuOTQzNDI5MSAyMy4yNzcxMjY2LDM2LjU5NTM0MDkgTDE3LjM5MDU5OTUsMzkuNzM1MTYzMyBDMTYuMTY4MTI5LDQwLjM4ODA5NzcgMTUuMzU4MjgyLDM5Ljc5MTQ1MDggMTUuNTkyMzA4LDM4LjQwOTg0NzMgTDE2LjcxNjI0MTYsMzEuNzU5NzQxNCBDMTYuOTUwMjY1OSwzMC4zNzkxNjI0IDE2LjMzMTMzMjUsMjguNDQ3OTc0NyAxNS4zNDE4NjI2LDI3LjQ2OTYwMDEgTDEwLjU3OTI3NSwyMi43NjA4OTE5IEM5LjU4OTgwNTA4LDIxLjc4MjUxMTQgOS44OTk3ODM5MSwyMC44MTc0MzQ3IDExLjI2NTk1MDMsMjAuNjE0ODAxNyBMMTcuODQ3MzYyNCwxOS42NDQ2MDk3IEMxOS4yMTQ1NTcyLDE5LjQ0Mjk5ODEgMjAuODMzMjMxNywxOC4yNDk3MDE1IDIxLjQ0NDk2MiwxNi45OTI5NTUyIEwyNC4zODk3NTM1LDEwLjk0MjU1OTggTDI0LjM4OTc3NywxMC45NDI1NTk4IFoiIGlkPSLkupTmmJ/lpIfku70tNiIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/symbol/1-1.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/1-1.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMzI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk3LjAwMDAwMCwgLTkxMS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IuespuWPtyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTcuMDAwMDAwLCA4NzkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0ibGluZTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAzMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTMyIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyGIiBmaWxsPSIjRTc0NjQyIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzEuNDE3MjU5OSwxMyBDMzAuMDk1MTA5NCwxMyAyOC43NTYxNzczLDEzLjMwMjY1MjQgMjcuNTQ1MjExNiwxMy44NzUyMDM4IEMyNi42MDY3NzEsMTQuMzE4OTE5IDI1LjczOTM0NjIsMTQuOTI2ODEyIDI0Ljk5OTk3MjYsMTUuNjU1MTcxMSBDMjQuMjYwNjQzMywxNC45MjY4MTIgMjMuMzkzMjE4NiwxNC4zMTg4NzQ3IDIyLjQ1NDczMzYsMTMuODc1MTYzNSBDMjEuMjQzODEyMywxMy4zMDI2NTU2IDE5LjkwNDkxNjQsMTMgMTguNTgyNzI5NywxMyBDMTYuMjQ2NDU5OCwxMyAxNC4wNzg5NTgsMTMuODgzMTYzNCAxMi40Nzk0NTgzLDE1LjQ4NjgyMjIgQzEwLjg4MDUzODksMTcuMDg5ODY0NSAxMCwxOS4yNjE5MTI0IDEwLDIxLjYwMjc4ODcgQzEwLDI3LjI4ODMzMTQgMTQuODI4NjQ0OSwzMS43MDUyOTMgMjIuMTM3NjI2NiwzOC4zOTEyMDgxIEwyMi40MzI4MzA4LDM4LjY2MTIxNCBMMjQuOTk5OTI1NCw0MC45NjkwMjY3IEwyNS41MDI4MTk5LDQwLjUxNjk0MDcgTDI3LjU2MjM2MTIsMzguNjY1NTg2NyBMMjcuODYxNjQ4LDM4LjM5MTgyOCBDMzUuMTcxMTEzMywzMS43MDU2NzEgNDAsMjcuMjg4NDY3NyA0MCwyMS42MDI3NjM3IEM0MCwxOS4yNjE4NzUzIDM5LjExOTQ2MTEsMTcuMDg5ODgzOCAzNy41MjA1NDE3LDE1LjQ4Njc5NzIgQzM1LjkyMTA0NiwxMy44ODMxNzg3IDMzLjc1MzUzNjIsMTMgMzEuNDE3MjcwMywxMyBMMzEuNDE3MjcwMywxMyBMMzEuNDE3MjU5OSwxMyBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/symbol/1-2.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/1-2.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMzM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1Ny4wMDAwMDAsIC05MTEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLnrKblj7ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgODc5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImxpbmUxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0zMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjAuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIYiIGZpbGw9IiNFNzQ2NDIiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMSwzOS40NTQ1NDU1IEwxNi4wOTA5MDkxLDM5LjQ1NDU0NTUgTDE2LjA5MDkwOTEsMjQuMTgxODE4MiBMMTEsMjQuMTgxODE4MiBMMTEsMzkuNDU0NTQ1NSBaIE0zOSwyNS40NTQ1NDU1IEMzOSwyNC4wNTU4MDU2IDM3Ljg1MzI4NTMsMjIuOTA5MDkwOSAzNi40NTQ1NDU1LDIyLjkwOTA5MDkgTDI4LjQyNDM5MjQsMjIuOTA5MDkwOSBMMjkuNjM0MTEzNCwxNy4wOTM2MDk0IEwyOS42NzE5MTcyLDE2LjY4NzIxODcgQzI5LjY3MTkxNzIsMTYuMTY0MjY2NCAyOS40NTQ1NDU1LDE1LjY4MjI2ODIgMjkuMTExMTYxMSwxNS4zMzg4ODM5IEwyNy43NjI4MjYzLDE0IEwxOS4zODYxMzg2LDIyLjM4NjEzODYgQzE4LjkxNjc0MTcsMjIuODQyOTM0MyAxOC42MzYzNjM2LDIzLjQ3OTI5NzkgMTguNjM2MzYzNiwyNC4xODE4MTgyIEwxOC42MzYzNjM2LDM2LjkwOTA5MDkgQzE4LjYzNjM2MzYsMzguMzA3ODMwOCAxOS43ODMwNzgzLDM5LjQ1NDU0NTUgMjEuMTgxODE4MiwzOS40NTQ1NDU1IEwzMi42MzYzNjM2LDM5LjQ1NDU0NTUgQzMzLjY5MTcxOTIsMzkuNDU0NTQ1NSAzNC41OTU4NTk2LDM4LjgxODE4MTggMzQuOTc3MDQ3NywzNy45MDE0NDAxIEwzOC44MjA0MzIsMjguOTI5MzQyOSBDMzguOTMzODQzNCwyOC42MzYzNjM2IDM5LDI4LjMzMDc4MzEgMzksMjggTDM5LDI1LjQ1NDU0NTUgTDM5LDI1LjQ1NDU0NTUgWiIgaWQ9IuW9oueKtuWkh+S7vSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNS4wMDAwMDAsIDI2LjcyNzI3Mykgc2NhbGUoMSwgLTEpIHRyYW5zbGF0ZSgtMjUuMDAwMDAwLCAtMjYuNzI3MjczKSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/symbol/1-3.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/1-3.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMzQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxNy4wMDAwMDAsIC05MTEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLnrKblj7ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgODc5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImxpbmUxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0zNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIwLjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyGIiBmaWxsPSIjRTc0NjQyIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTEsMzYuNDU0NTQ1NSBMMTYuMDkwOTA5MSwzNi40NTQ1NDU1IEwxNi4wOTA5MDkxLDIxLjE4MTgxODIgTDExLDIxLjE4MTgxODIgTDExLDM2LjQ1NDU0NTUgWiBNMzksMjIuNDU0NTQ1NSBDMzksMjEuMDU1ODA1NiAzNy44NTMyODUzLDE5LjkwOTA5MDkgMzYuNDU0NTQ1NSwxOS45MDkwOTA5IEwyOC40MjQzOTI0LDE5LjkwOTA5MDkgTDI5LjYzNDExMzQsMTQuMDkzNjA5NCBMMjkuNjcxOTE3MiwxMy42ODcyMTg3IEMyOS42NzE5MTcyLDEzLjE2NDI2NjQgMjkuNDU0NTQ1NSwxMi42ODIyNjgyIDI5LjExMTE2MTEsMTIuMzM4ODgzOSBMMjcuNzYyODI2MywxMSBMMTkuMzg2MTM4NiwxOS4zODYxMzg2IEMxOC45MTY3NDE3LDE5Ljg0MjkzNDMgMTguNjM2MzYzNiwyMC40NzkyOTc5IDE4LjYzNjM2MzYsMjEuMTgxODE4MiBMMTguNjM2MzYzNiwzMy45MDkwOTA5IEMxOC42MzYzNjM2LDM1LjMwNzgzMDggMTkuNzgzMDc4MywzNi40NTQ1NDU1IDIxLjE4MTgxODIsMzYuNDU0NTQ1NSBMMzIuNjM2MzYzNiwzNi40NTQ1NDU1IEMzMy42OTE3MTkyLDM2LjQ1NDU0NTUgMzQuNTk1ODU5NiwzNS44MTgxODE4IDM0Ljk3NzA0NzcsMzQuOTAxNDQwMSBMMzguODIwNDMyLDI1LjkyOTM0MjkgQzM4LjkzMzg0MzQsMjUuNjM2MzYzNiAzOSwyNS4zMzA3ODMxIDM5LDI1IEwzOSwyMi40NTQ1NDU1IEwzOSwyMi40NTQ1NDU1IFoiIGlkPSLlvaLnirYiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/symbol/1-4.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/1-4.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMzU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3Ny4wMDAwMDAsIC05MTEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLnrKblj7ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgODc5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImxpbmUxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0zNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTgwLjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyGIiBmaWxsPSIjRTc0NjQyIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0i6Lev5b6EIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHBvaW50cz0iMTIuMDAwMDI4MiAyMC45MzYzNDAxIDE1Ljc1MDY4MjcgMjAuOTM2MzQwMSAxNS43NTA2ODI3IDM1LjUxODQ0NjkgMTUuODU1ODk3MyAzNS41MTg0NDY5IDE1Ljg1NTg5NzMgMzUuNzEwOTczOCAyOC43Mzc5MTI5IDM1LjcxMDk3MzggMjguNzM3OTEyOSAzOS4xMTExMjU3IDM3Ljk1NjYyMzQgMzkuMTExMTI1NyAzNy45NTY2MjM0IDMwLjY2MzQ5MDMgMjguNzM3OTEyOSAzMC42NjM0OTAzIDI4LjczNzkxMjkgMzQuMjAzNjg5NyAxNi45Nzc0NDQ0IDM0LjIwMzY4OTcgMTYuOTc3NDQ0NCAyNi4wNzE3MjE1IDI4LjkzMDQ0MzggMjYuMDcxNzIxNSAyOC45MzA0NDM4IDI4LjYxMjg4NzIgMzguMDc5MzkxNCAyOC42MTI4ODcyIDM4LjA3OTM5MTQgMjAuMTMwMDc4OCAyOC45MzA0NDM4IDIwLjEzMDA3ODggMjguOTMwNDQzOCAyNC43NTY5ODk4IDE2Ljk3NzQ0NDQgMjQuNzU2OTg5OCAxNi45Nzc0NDQ0IDIwLjkzNjMyNjkgMjMuODQ3Nzg3MiAyMC45MzYzMjY5IDIzLjg0Nzc4NzIgMTAgMTIgMTAgMTIgMjAuOTM2MzI2OSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/symbol/1-5.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/1-5.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMzY8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMzNy4wMDAwMDAsIC05MTEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLnrKblj7ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgODc5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImxpbmUxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0zNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQwLjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyGIiBmaWxsPSIjRTc0NjQyIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzYuMDEzMDU5MSwyMS4yMzI5ODc1IEMzNi4wMTMwNTkxLDE1LjMyODE3MiAzMS4yNDg4Mzk3LDEwLjU2Mzg4ODEgMjUuMzQzOTU5NywxMC41NjM4ODgxIEMxOS40MzkxNDQzLDEwLjU2Mzg4ODEgMTQuNjc0ODkyNiwxNS4zMjgxMzk4IDE0LjY3NDg5MjYsMjEuMjMyOTg3NSBDMTQuNjc0ODkyNiwyNC4xODU0NDY4IDE1Ljg4MjgzMjYsMjYuODY5NDE5OCAxNy44Mjg3MTM0LDI4LjgxNTQ4NzUgTDMyLjkyNjYxNzcsMjguODE1NDg3NSBDMzQuODA1NDIyLDI2LjgwMjM5ODIgMzYuMDEzMzYyLDI0LjExODI5OTQgMzYuMDEzMzYyLDIxLjIzMjk4NzUgTDM2LjAxMzA2NTMsMjEuMjMyOTg3NSBMMzYuMDEzMDU5MSwyMS4yMzI5ODc1IFogTTMyLjM5MTE0MzcsMjAuNTk4MTAwOSBDMzEuODQ4ODI0OCwyMC41OTgxMDA5IDMxLjQ1MzMyMzksMjAuMTUwNjYwMyAzMS40NTMzMjM5LDE5LjcwNTA2NjQgQzMxLjQ1MzMyMzksMTguNDA4NTQ4MyAzMC45NTU3OTAzLDE3LjMyMTkwMjggMjkuOTU4OTczMiwxNi40NDY3MzE1IEMyOC45NjI5NDg5LDE1LjU2Nzc3NjggMjcuODk0MjQwNywxNS4xMzYxOTgyIDI2Ljc2NTQ0OTMsMTUuMTM2MTk4MiBDMjYuMjIzMTY1OCwxNS4xMzYxOTgyIDI1LjgyNzQ2NTEsMTQuNzYwNjgwOSAyNS44Mjc1OTcyLDE0LjI0NTE3NDYgQzI1LjgyNzU5NzIsMTMuNzI5ODY0OCAyNi4yMjMxMzA0LDEzLjM1NDE4MzIgMjYuNzY1NDQ5MywxMy4zNTQxODMyIEMyOC40Nzk1OTUsMTMuMzU0MTgzMiAzMC4wMDI5MzM1LDEzLjkyNTY1NDMgMzEuMzM2NDM4LDE1LjA4MDM2NTYgQzMyLjY2OTkyMzEsMTYuMjM1MDQ0NiAzMy4zMjkwODI4LDE3Ljc2OTI5ODMgMzMuMzI5MDgyOCwxOS43MDUwMTE2IEMzMy4zMjkwODI4LDIwLjE1MDYzNzggMzIuOTMzNjE0MSwyMC41OTgxMDA5IDMyLjM5MTEzMDgsMjAuNTk4MTAwOSBMMzIuMzkxMTQzNywyMC41OTgxMDA5IFogTTMxLjExNDcwOTMsMzAuMjkxNTM5OSBMMTkuNTczMTA3LDMwLjI5MTUzOTkgQzE4Ljc2NzgyNTUsMzAuMjkxNTM5OSAxOC4xNjM5Njk5LDMwLjk2MjcwMDcgMTguMTYzOTY5OSwzMS43MDA4MDkxIEMxOC4xNjM5Njk5LDMyLjUwNjA5MDYgMTguODM1MTMwOCwzMy4xMDk4Nzg1IDE5LjU3MzEwNywzMy4xMDk4Nzg1IEwzMS4xMTQ3MDkzLDMzLjEwOTg3ODUgQzMxLjg1Mjc4MjMsMzMuMTA5ODc4NSAzMi40NTY4NjY2LDMyLjUwNTkyNjMgMzIuNTIzOTQzMSwzMS43MDA4MDkxIEMzMi41MjM5NDMxLDMwLjg5NTM2MzMgMzEuODUyNzgyMywzMC4yOTE1Mzk5IDMxLjExNDcwOTMsMzAuMjkxNTM5OSBaIE0yNi43NTMwOTY4LDM1LjEyMzExMjkgTDIzLjkzNDcyNiwzNS4xMjMxMTI5IEMyMi43OTQxMjY3LDM1LjEyMzExMjkgMjEuODU0NzI0NSwzNi4wNjI2Nzk0IDIxLjg1NDcyNDUsMzcuMjAzMjQ2NSBDMjEuODU0NzI0NSwzOC4zNDM5Nzc5IDIyLjc5NDEyNjcsMzkuMjgzMzgwMSAyMy45MzQ3MjYsMzkuMjgzMzgwMSBMMjYuNzUzMDk2OCwzOS4yODMzODAxIEMyNy44OTM2NjM5LDM5LjI4MzM4MDEgMjguNzY2MDIxOCwzOC4zNDM5Nzc5IDI4LjgzMzA2NiwzNy4yMDMyNDY1IEMyOC44MzMwNjYsMzYuMDYyNTE1MSAyNy44OTM2OTYxLDM1LjEyMzExMjkgMjYuNzUzMDk2OCwzNS4xMjMxMTI5IFoiIGlkPSLlvaLnirYiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/symbol/1-6.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/1-6.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMzc8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM5Ny4wMDAwMDAsIC05MTEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLnrKblj7ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgODc5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImxpbmUxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0zNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAwLjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyGIiBmaWxsPSIjRTc0NjQyIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzMuMDY1NDkzNywxOS44NjI1MDYzIEwzMy4wNjU0OTM4LDE5Ljg2MjUwNjIgQzM0LjMwNzcwMDgsMTguNjMwMzUwNCAzNS4wMDY0MzgxLDE2Ljk1MzE1ODcgMzUuMDA2NDk0MywxNS4yMDM0OTYgTDM1LjAwNjQ5NDMsMTIuNjQ0NDk4IEwzNi45OTM5OTI1LDEyLjY0NDQ5OCBMMzYuOTkzOTkyNSwxMCBMMTMsMTAgTDEzLDEyLjY0NDQ5OCBMMTQuOTg3NDk4NCwxMi42NDQ0OTggTDE0Ljk4NzQ5ODQsMTUuMjA0OTk3MiBDMTQuOTg3NDk4NCwxNi45NTU0OTY2IDE1LjY4MzQ5NywxOC42MjY0OTczIDE2LjkyNjk5NzgsMTkuODY0MDA3NCBMMjEuNDAxNTA4MSwyNC4zMTc0OTQzIEMyMS43NzY1MDkxLDI0LjY5MjQ5NTMgMjEuNzc2NTA5MSwyNS4zMDQ0OTUxIDIxLjQwMTUwODEsMjUuNjc5NDkyNyBMMTYuOTI2OTk3OCwzMC4xMzg5OTEyIEwxNi45MjY5OTc2LDMwLjEzODk5MTQgQzE1LjY4NjMyNjksMzEuMzcyMDU3OCAxNC45ODgzMTczLDMzLjA0ODc4NTQgMTQuOTg3NDk4MiwzNC43OTgwMDE3IEwxNC45ODc0OTgyLDM3LjM1Njk5OTcgTDEzLDM3LjM1Njk5OTcgTDEzLDQwIEwzNyw0MCBMMzcsMzcuMzU1NTAyIEwzNS4wMDY1MDQ3LDM3LjM1NTUwMiBMMzUuMDA2NTA0NywzNC43OTUwMDI4IEMzNS4wMDY1MDQ3LDMzLjA0NDUwMzQgMzQuMzA5MDA0OSwzMS4zNzM1MDI3IDMzLjA2NTUwNDIsMzAuMTM1OTkyNiBMMjguNTkyNTA1NiwyNS42NzY0OTQgTDI4LjU5MjUwNTYsMjUuNjc2NDk0IEMyOC4yMTcxODExLDI1LjMwMDA2NTYgMjguMjE3MTgxMSwyNC42OTA5MjQgMjguNTkyNTA1NiwyNC4zMTQ0OTU2IEwzMy4wNjU1MDQyLDE5Ljg1OTQ5NyBMMzMuMDY1NDkzNywxOS44NjI1MDYzIFogTTI2Ljk0NzAwNzQsMjcuMzE2MDE1NyBMMjkuMzIzMDA2NiwyOS42NzcwMTM3IEwyMC42NzY5OTc2LDI5LjY3NzAxMzcgTDIzLjA1Mjk5NjksMjcuMzE2MDE1NyBMMjMuMDUyOTk3LDI3LjMxNjAxNTYgQzI0LjMzNTc0MjcsMjYuMDMzMTY0NCAyNC4zMzU3NDI3LDIzLjk1MzM2NyAyMy4wNTI5OTY4LDIyLjY3MDUwNTMgTDE4LjU3ODQ4NjUsMTguMjExMDA2NyBMMTguNTc4NDg2NSwxOC4yMTEwMDY4IEMxNy43NzI1NTQ0LDE3LjQxMzIyMzkgMTcuMzIwMjg2OSwxNi4zMjU1MTggMTcuMzIyOTc0OSwxNS4xOTE1MDc4IEwxNy4zMjI5NzQ5LDEyLjMyMjAwOTkgTDMyLjY4Mjk5NzYsMTIuMzIyMDA5OSBMMzIuNjgyOTk3NiwxNS4yMDUwMDc4IEwzMi42ODI5OTc2LDE1LjIwNTA0IEMzMi42ODQ1MDk5LDE2LjMzODgxNDcgMzIuMjMyNDE3NCwxNy40MjYwODQ2IDMxLjQyNzQ2OTYsMTguMjI0NTI4NSBMMjYuOTU0NDcxLDIyLjY4NTUzODggQzI1LjY2NDQ3MjYsMjMuOTYyMDM3MiAyNS42NjQ0NzI2LDI2LjA0MTAzNjYgMjYuOTQ2OTcxLDI3LjMxNzU0OTEgTDI2Ljk0NzAwNzQsMjcuMzE2MDE1NyBaIiBpZD0i5rKZ5ryPIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/symbol/1-7.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/1-7.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMzg8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1Ny4wMDAwMDAsIC05MTEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLnrKblj7ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgODc5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImxpbmUxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0zOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzYwLjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyGIiBmaWxsPSIjRTc0NjQyIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzQuNTQ1MjY4NiwxOC43NDI2NDA5IEMzNC42Mjc3Njg3LDIxLjE5OTA4MTIgMzQuNTg2NTE4NiwyMi45MDQ3NzA3IDM0LjQxNzM5MzQsMjMuOTQwMTQ2OSBDMzMuOTMwNjQyOSwyNi44OTE1ODc4IDMyLjI2MDAxNTksMjcuNzk3MDI2NCAyOC42MjE3NjE3LDI4LjQ2MzIxNDcgQzI3Ljk2MTc2MDksMjguNTg2OTY0OCAyNy44NzEwMTA4LDI4LjYwMTQwMjMgMjcuNjA3MDEwNSwyOC42NTcwODk5IEMyNS41NzU0NDU2LDI5LjA3NTc3NzkgMjAuOTE4MzE1MiwyOS42MTgyMTYgMjAuMTg4MTg5NCwzMS4wNzIyODAyIEwyMC4xODgxODk0LDMyLjE3Nzc4MTUgTDIwLjE4ODE4OTcsMzIuMTc3NzgxNyBDMjIuMTYxMTUwNSwzMy4zMTY4Njk1IDIyLjgzNzEzNTYsMzUuODM5NjkwMiAyMS42OTgwNDQ2LDM3LjgxMjYzNDkgQzIwLjU1ODk1NjcsMzkuNzg1NTk1NyAxOC4wMzYxMzYsNDAuNDYxNTgwOSAxNi4wNjMxOTEzLDM5LjMyMjQ4OTggQzE0LjA5MDIzMDUsMzguMTgzNDAxOSAxMy40MTQyNDU0LDM1LjY2MDU4MTIgMTQuNTUzMzM2NCwzMy42ODc2MzY2IEMxNC45MTUzNzk3LDMzLjA2MDU1NTMgMTUuNDM2MTEzMywzMi41Mzk4MjUgMTYuMDYzMTk0NiwzMi4xNzc3ODE3IEwxNi4wNjMxOTQ2LDE4LjY5OTMyODUgTDE2LjA2MzE5NDMsMTguNjk5MzI4NCBDMTQuMDkwMjMzNiwxNy41NjAyNDA1IDEzLjQxNDI0ODQsMTUuMDM3NDE5OCAxNC41NTMzMzk1LDEzLjA2NDQ3NTEgQzE1LjY5MjQyNzMsMTEuMDkxNTE0MyAxOC4yMTUyNDgsMTAuNDE1NTI5MiAyMC4xODgxOTI3LDExLjU1NDYyMDIgQzIyLjE2MTE1MzUsMTIuNjkzNzA4MSAyMi44MzcxMzg3LDE1LjIxNjUyODggMjEuNjk4MDQ3NiwxNy4xODk0NzM1IEMyMS4zMzYwMDQzLDE3LjgxNjU1NDggMjAuODE1MjcwOCwxOC4zMzcyODUxIDIwLjE4ODE4OTUsMTguNjk5MzI4NCBMMjAuMTg4MTg5NSwyNi41MzA2NSBDMjIuMzY2MTkyLDI1LjU3MzY0ODkgMjQuOTUwNTA3NSwyNC45OTIwMjMyIDI2Ljc3Mzc1OTYsMjQuNjE2NjQ3OCBDMjcuMDgxMDcyNSwyNC41NTQ3NzI3IDI3LjE4MDA3MjYsMjQuNTM0MTQ3NyAyNy44NzcxOTg0LDI0LjQwNjI3MjUgQzI5LjkxNzAxMzMsMjQuMDMyOTU5NiAzMC4yNTExMzg3LDIzLjg0OTM5NjkgMzAuMzQ4MDc2MywyMy4yNjc3NzEyIEMzMC40Njc3MDE0LDIyLjUzMzUyMDMgMzAuNDk2NTc2NSwyMC45NjYwMTg1IDMwLjQxNDA3NjQsMTguNjQ3NzY1OCBMMzAuNDE0MDc2LDE4LjY0Nzc2NTYgQzI4LjQ2NzM2NywxNy40NjY1NzA1IDI3Ljg0Njc5NTUsMTQuOTMwOTEwNyAyOS4wMjc5OTA2LDEyLjk4NDE5ODQgQzI5Ljc3NzM5MTIsMTEuNzQ5MTIzNyAzMS4xMTg1NTkyLDEwLjk5NjM3NDcgMzIuNTYzMjE2NCwxMSBMMzIuNTYzMjE2NiwxMSBDMzQuODQxMzkyMywxMSAzNi42ODgyNTM2LDEyLjg0NjgwMDMgMzYuNjg4MjUzNiwxNS4xMjQ5ODU3IEMzNi42ODgyNTM2LDE2LjYzMTc2MjkgMzUuODY2NzE3LDE4LjAxODY2MzcgMzQuNTQ1Mjc0OSwxOC43NDI2NDcxIEwzNC41NDUyNjg2LDE4Ljc0MjY0MDkgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ "./MindMap/Icons/symbol/2-1.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/2-1.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMzk8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk3LjAwMDAwMCwgLTk3MS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IuespuWPtyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTcuMDAwMDAwLCA4NzkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0ibGluZTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA5Mi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTM5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyGIiBmaWxsPSIjRkM5ODRGIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuMDA2MDY2MywzNi41MDM1NTczIEwxMi4wMDYwNjYzLDI1LjMwMTYwMzkgQzExLjk1ODQ3NTgsMjMuNjg5NzMyOSAxMi4xOTA5MDQzLDIyLjE3NjI2MDIgMTIuNzAzMTM5MiwyMC43NjEwMzY0IEMxMy4yMTUzMzE0LDE5LjM0NTkgMTMuOTMzNTIxOSwxOC4xMDA2ODY0IDE0Ljg2Mjk4MTYsMTcuMDI1MDQ4NSBDMTUuNzg5NDY3MiwxNS45NTI1NjI1IDE2Ljg5NzgxNDIsMTUuMDYxNjg2NyAxOC4xOTM5NzA4LDE0LjM1MjUwMzEgQzE5LjQ4Njk4NjgsMTMuNjQ2NDY1NyAyMC44OTAxMzk1LDEzLjE5MzU5MTIgMjIuNDAzNjM3NSwxMyBMMjIuNDAzNjM3NSwxNy44MzIzODc4IEMyMC41NDc2OTUxLDE4LjQ2NzA0MTkgMTkuMjc4NDYzMiwxOS40MDUyNTE2IDE4LjU5NjE0NzgsMjAuNjUwNzIyIEMxNy45MTA4NDQyLDIxLjg5NjEwNDkgMTcuNTcxMzc5NSwyMy40MjE1MDc3IDE3LjU3MTM3OTUsMjUuMjI2ODk5NCBMMjIuNDAzNDU2OSwyNS4yMjY4OTk0IEwyMi40MDM0NTY5LDM2LjUwMzU1NzMgTDEyLjAwNjE2NzksMzYuNTAzNTU3MyBMMTIuMDA2MDQwNCwzNi41MDM1NTczIEwxMi4wMDYwNjYzLDM2LjUwMzU1NzMgWiBNMjcuNjAyMzk0OSwzNi41MDM1NTczIEwyNy42MDIzOTQ5LDI1LjMwMTYwMzkgQzI3LjU1MTcwMjUsMjMuNjg5NzMyOSAyNy43ODQwNDYxLDIyLjE3NjI2MDIgMjguMjk2NDkzNywyMC43NjEwMzY0IEMyOC44MDg4OTc2LDE5LjM0NTkgMjkuNTI5ODkyOSwxOC4xMDA2ODY0IDMwLjQ1NjI5MzgsMTcuMDI1MDQ4NSBDMzEuMzgyODIxNywxNS45NTI1NjI1IDMyLjQ5NDE4NTIsMTUuMDYxNjAyMSAzMy43ODcyODMsMTQuMzUyNTAzMSBDMzUuMDgwMzQxNCwxMy42NDYzMzU5IDM2LjQ4NjQyODYsMTMuMTkzNTkxMiAzOCwxMyBMMzgsMTcuODMyMjQ2NyBDMzYuMTQzODU0NCwxOC40NjY4NTg0IDM0Ljg3NDY4MTcsMTkuNDA1MjQwMyAzNC4xOTI1MDc0LDIwLjY1MDcwNzkgQzMzLjUwNzIwMzgsMjEuODk2MDkwOCAzMy4xNjc3ODE1LDIzLjQyMTMyNDMgMzMuMTY3NzgxNSwyNS4yMjY2ODc4IEwzOCwyNS4yMjY2ODc4IEwzOCwzNi41MDM1NTczIEwyNy42MDIzNzIzLDM2LjUwMzU1NzMgTDI3LjYwMjM3MjMsMzYuNTAzNTU3MyBMMjcuNjAyMzk0OSwzNi41MDM1NTczIFoiIGlkPSLlvaLnirYiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/symbol/2-2.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/2-2.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgNDA8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1Ny4wMDAwMDAsIC05NzEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLnrKblj7ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgODc5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImxpbmUyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgOTIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC00MCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjAuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIYiIGZpbGw9IiNGQzk4NEYiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMCwyNC42MTk5ODUzIEwyMCwyNC42MTk5ODQ3IEMyMCwyNy4yMDgzNjI5IDIyLjA5ODI5MjcsMjkuMzA2NjQ0NCAyNC42ODY2NTk4LDI5LjMwNjY0NDQgQzI3LjI3NTAzOCwyOS4zMDY2NDQ0IDI5LjM3MzMxOTUsMjcuMjA4MzUxOCAyOS4zNzMzMTk1LDI0LjYxOTk4NDcgQzI5LjM3MzMxOTUsMjQuNjE5OTg0NyAyOS4zNzMzMTk1LDI0LjYxOTk4NDYgMjkuMzczMzE5NSwyNC42MTk5ODQ2IEwyOS4zNzMzMTk1LDI0LjYxOTk4NDYgQzI5LjM3MzMxOTUsMjIuMDMxNjA2NCAyNy4yNzUwMjMxLDE5LjkzMzMyNDggMjQuNjg2NjU5OCwxOS45MzMzMjQ4IEMyMi4wOTgyODE1LDE5LjkzMzMyNDggMjAsMjIuMDMxNjIxMiAyMCwyNC42MTk5ODQ2IEwyMCwyNC42MTk5ODUzIFogTTIwLDM4LjU1MzM0NzIgTDIwLDM4LjU1MzM0NjYgQzIwLDQxLjE0MTcyNDggMjIuMDk4MjkyNyw0My4yNDAwMDY0IDI0LjY4NjY1OTgsNDMuMjQwMDA2NCBDMjcuMjc1MDM4LDQzLjI0MDAwNjQgMjkuMzczMzE5NSw0MS4xNDE3MTM3IDI5LjM3MzMxOTUsMzguNTUzMzQ2NiBDMjkuMzczMzE5NSwzOC41NTMzNDY2IDI5LjM3MzMxOTUsMzguNTUzMzQ2NSAyOS4zNzMzMTk1LDM4LjU1MzM0NjUgTDI5LjM3MzMxOTUsMzguNTUzMzQ2NSBDMjkuMzczMzE5NSwzNS45NjQ5NjgzIDI3LjI3NTAyMzEsMzMuODY2Njg2NyAyNC42ODY2NTk4LDMzLjg2NjY4NjcgQzIyLjA5ODI4MTUsMzMuODY2Njg2NyAyMCwzNS45NjQ5ODMxIDIwLDM4LjU1MzM0NjUgTDIwLDM4LjU1MzM0NzIgWiBNMjAsMTAuNjg2NjYwNSBMMjAsMTAuNjg2NjU5OSBDMjAsMTMuMjc1MDM4MSAyMi4wOTgyOTI3LDE1LjM3MzMxOTYgMjQuNjg2NjU5OCwxNS4zNzMzMTk2IEMyNy4yNzUwMzgsMTUuMzczMzE5NiAyOS4zNzMzMTk1LDEzLjI3NTAyNyAyOS4zNzMzMTk1LDEwLjY4NjY1OTkgQzI5LjM3MzMxOTUsMTAuNjg2NjU5OCAyOS4zNzMzMTk1LDEwLjY4NjY1OTggMjkuMzczMzE5NSwxMC42ODY2NTk4IEwyOS4zNzMzMTk1LDEwLjY4NjY1OTggQzI5LjM3MzMxOTUsOC4wOTgyODE1NCAyNy4yNzUwMjMxLDYgMjQuNjg2NjU5OCw2IEMyMi4wOTgyODE1LDYgMjAsOC4wOTgyOTYzOSAyMCwxMC42ODY2NTk4IEwyMCwxMC42ODY2NjA1IFoiIGlkPSLlvaLnirYiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQuNjg2NjYwLCAyNC42MjAwMDMpIHJvdGF0ZSg5MC4wMDAwMDApIHRyYW5zbGF0ZSgtMjQuNjg2NjYwLCAtMjQuNjIwMDAzKSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/symbol/2-3.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/2-3.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgNDE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxNy4wMDAwMDAsIC05NzEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLnrKblj7ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgODc5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImxpbmUyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgOTIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC00MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIwLjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyGIiBmaWxsPSIjRkM5ODRGIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzEuNzUwMDIsMTIuMjUwMDAyOCBDMzAuMjUwMDE4MSwxMC43NTAwMDA5IDI4LjAwMDAxNTIsMTAgMjUuNTAwMDEyLDEwIEMyNC4yNTAwMTA1LDEwIDIzLDEwLjI1MDAwMDMgMjIsMTAuNSBDMjAuNzUwMDA2LDExIDE5Ljc1MDAwNDgsMTEuNSAxOC43NTAwMDM1LDEyLjUgQzE4LDEzLjI1MDAwNDEgMTcuMjUwMDAxNiwxNC4yNTAwMDU0IDE2Ljc1MDAwMSwxNS4yNTAwMDY2IEMxNi4yNTAwMDAzLDE2LjI1MDAwNzkgMTYsMTcuNzUwMDA5OCAxNiwxOS43NTAwMTIzIEwxNiwyMC4yNTAwMTMgTDIxLDIwLjI1MDAxMyBMMjEsMTkuNzUwMDEyMyBDMjEsMTYuNSAyMi43NTAwMDg2LDE0Ljc1MDAwNiAyNS41MDAwMTIsMTQuNzUwMDA2IEMyNi43NTAwMTM2LDE0Ljc1MDAwNiAyNy41MDAwMTQ2LDE1IDI4LjAwMDAxNTIsMTUuNzUwMDA3MyBDMjguNTAwMDE1OCwxNi41IDI5LjAwMDAxNjUsMTcgMjkuMDAwMDE2NSwxOC4wMDAwMTAxIEMyOS4wMDAwMTY1LDIwLjUwMDAxMzMgMjcuNTAwMDE0NiwyMC43NTAwMTM2IDI2LjI1MDAxMywyMi41MDAwMTU4IEMyMy41LDI2LjI1MDAyMDYgMjMuMjUwMDA5MiwzMC4wMDAwMjUzIDIzLjI1MDAwOTIsMzEuNTAwMDI3MiBMMjMuMjUwMDA5MiwzMi41MDAwMjg1IEwyOC4yNTAwMTU1LDMyLjUwMDAyODUgQzI4LjI1MDAxNTUsMzIuNTAwMDI4NSAyOC4yNTAwMTU1LDI3Ljc1MDAyMjUgMzAuNzUwMDE4NywyNS4wMDAwMTkgQzMyLjAwMDAyMDMsMjMuNTAwMDE3MSAzMy4wMDAwMjE1LDIyLjUwMDAxNTggMzMuNTAwMDIyMiwyMS43NTAwMTQ5IEMzNC4wMDAwMjI4LDIwLjc1MDAxMzYgMzQuMjUwMDIzMSwxOS43NTAwMTIzIDM0LjI1MDAyMzEsMTguNTAwMDEwOCBDMzQuNTAwMDIzNCwxNiAzMy41MDAwMjIyLDEzLjc1MDAwNDcgMzEuNzUwMDIsMTIuMjUwMDAyOCBaIE0yMy41MDAwMDk1LDM1LjAwMDAzMTcgTDI4LjUwMDAwOTUsMzUuMDAwMDMxNyBMMjguNTAwMDA5NSw0MC4wMDAwMzE3IEwyMy41MDAwMDk1LDQwLjAwMDAzMTcgTDIzLjUwMDAwOTUsMzUuMDAwMDMxNyBaIiBpZD0i5b2i54q2IiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/symbol/2-4.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/2-4.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgNDI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3Ny4wMDAwMDAsIC05NzEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLnrKblj7ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgODc5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImxpbmUyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgOTIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC00MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTgwLjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyGIiBmaWxsPSIjRkM5ODRGIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjIsNDAgTDIyLDM0IEwyOCwzNCBMMjgsNDAgTDIyLDQwIEwyMiw0MCBaIE0yMiwxMCBMMjgsMTAgTDI4LDMxIEwyMiwzMSBMMjIsMTAgTDIyLDEwIFoiIGlkPSLlvaLnirYiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/symbol/2-5.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/2-5.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgNDM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMzNy4wMDAwMDAsIC05NzEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLnrKblj7ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgODc5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImxpbmUyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgOTIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC00MyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQwLjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyGIiBmaWxsPSIjRkM5ODRGIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0i6Lev5b6EIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHBvaW50cz0iNDAgMTMuNTU1NTA1OSAzNi40NDQ0OTQxIDEwIDI1IDIxLjQ0NDQ5NDEgMTMuNTU1NTA1OSAxMCAxMCAxMy41NTU1MDU5IDIxLjQ0NDIxNDggMjUgMTAgMzYuNDQ0NDk0MSAxMy41NTU1MDU5IDQwIDI1IDI4LjU1NTUwNTkgMzYuNDQ0NDk0MSA0MCA0MCAzNi40NDQ0OTQxIDI4LjU1NTc4NTIgMjUgMzAuMzg4MzU1MiAyMy4xNjczODUzIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ "./MindMap/Icons/symbol/2-6.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/2-6.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgNDQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM5Ny4wMDAwMDAsIC05NzEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLnrKblj7ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgODc5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImxpbmUyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgOTIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC00NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAwLjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyGIiBmaWxsPSIjRkM5ODRGIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTAsMTUgTDQwLDE1IEw0MCwyMC4zNDAxMTQ0IEwxMCwyMC4zNDAxMTQ0IEwxMCwxNSBaIE0xMCwyOC4zNjkzNTc5IEw0MCwyOC4zNjkzNTc5IEw0MCwzMy43MDk0NzIzIEwxMCwzMy43MDk0NzIzIEwxMCwyOC4zNjkzNTc5IFoiIGlkPSLlvaLnirYiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUuMDAwMDAwLCAyNC4zNTQ3MzYpIHJvdGF0ZSg5MC4wMDAwMDApIHRyYW5zbGF0ZSgtMjUuMDAwMDAwLCAtMjQuMzU0NzM2KSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/symbol/2-7.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/2-7.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgNDU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1Ny4wMDAwMDAsIC05NzEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLnrKblj7ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgODc5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImxpbmUyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgOTIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC00NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzYwLjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyGIiBmaWxsPSIjRkM5ODRGIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjUsOSBDMTYuMTk5MjE4OCw5IDksMTYuMTk5MjE4OCA5LDI1IEM5LDMzLjgwMDc4MTIgMTYuMTk5MjE4OCw0MSAyNSw0MSBDMzMuODAwNzgxMiw0MSA0MSwzMy44MDA3ODEzIDQxLDI1IEM0MSwxNi4xOTkyMTg4IDMzLjc5Njg3NSw5IDI1LDkgWiBNMzcsMjUgQzM3LDI3LjYwMTU2MjUgMzYuMTk5MjE4OCwzMCAzNC44MDA3ODEyLDMyIEwxOCwxNS4xOTkyMTg3IEMyMCwxMy44MDA3ODEyIDIyLjM5ODQzNzUsMTMgMjUsMTMgQzMxLjU5NzY1NjIsMTMgMzcsMTguMzk4NDM3NSAzNywyNSBaIE0xMywyNSBDMTMsMjIuMzk4NDM3NSAxMy44MDA3ODEyLDIwIDE1LjE5OTIxODgsMTggTDMyLDM0LjgwMDc4MTMgQzMwLDM2LjE5OTIxODggMjcuNTk3NjU2MiwzNyAyNSwzNyBDMTguMzk4NDM3NSwzNyAxMywzMS41OTc2NTYzIDEzLDI1IFoiIGlkPSLlvaLnirYiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/symbol/3-1.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/3-1.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgNDY8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk3LjAwMDAwMCwgLTEwMzEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLnrKblj7ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgODc5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImxpbmUzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMTUyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtNDYiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIYiIGZpbGw9IiM3RkFDQjMiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS4wMDAwMDAsIDguMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSLot6/lvoQxIiBwb2ludHM9IjAgMTkuMzA2MDA2MiAzMS45NjgxNjIyIDE5LjMwNjAwNjIgMzEuOTY4MTYyMiAxNCAwIDE0Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0i6Lev5b6EMeWkh+S7vSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUuOTg0MDgxLCAxNi42NTMwMDMpIHJvdGF0ZSg5MC4wMDAwMDApIHRyYW5zbGF0ZSgtMTUuOTg0MDgxLCAtMTYuNjUzMDAzKSAiIHBvaW50cz0iMCAxOS4zMDYwMDYyIDMxLjk2ODE2MjIgMTkuMzA2MDA2MiAzMS45NjgxNjIyIDE0IDAgMTQiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/symbol/3-2.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/3-2.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgNDc8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1Ny4wMDAwMDAsIC0xMDMxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i56ym5Y+3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny4wMDAwMDAsIDg3OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJsaW5lMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDE1Mi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTQ3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MC4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9IuakreWchiIgZmlsbD0iIzdGQUNCMyIgY3g9IjI1IiBjeT0iMjUiIHI9IjI1Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9Iui3r+W+hCIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBwb2ludHM9IjkgMjcuMzA2MDA2MiA0MC45NjgxNjIyIDI3LjMwNjAwNjIgNDAuOTY4MTYyMiAyMiA5IDIyIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ "./MindMap/Icons/symbol/3-3.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/3-3.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgNDg8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxNy4wMDAwMDAsIC0xMDMxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i56ym5Y+3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny4wMDAwMDAsIDg3OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJsaW5lMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDE1Mi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTQ4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjAuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIYiIGZpbGw9IiM3RkFDQjMiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMiw0MCBMMjIsMzQgTDI4LDM0IEwyOCw0MCBMMjIsNDAgTDIyLDQwIFogTTIyLDEwIEwyOCwxMCBMMjgsMzEgTDIyLDMxIEwyMiwxMCBMMjIsMTAgWiIgaWQ9IuW9oueKtuWkh+S7vS0yIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1LjAwMDAwMCwgMjUuMDAwMDAwKSBzY2FsZSgxLCAtMSkgdHJhbnNsYXRlKC0yNS4wMDAwMDAsIC0yNS4wMDAwMDApICI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/symbol/3-4.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/3-4.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgNDk8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3Ny4wMDAwMDAsIC0xMDMxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i56ym5Y+3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny4wMDAwMDAsIDg3OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJsaW5lMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDE1Mi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTQ5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIYiIGZpbGw9IiM3RkFDQjMiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05LDI3LjI2NDkzMTQgTDQwLjk2ODE2MjIsMjcuMjY0OTMxNCBMNDAuOTY4MTYyMiwyMS45NTg5MjUyIEw5LDIxLjk1ODkyNTIgTDksMjcuMjY0OTMxNCBaIE0yMi4zMjAwMTU1LDE2LjQzODkxODggTDI3LjY0ODAyMTcsMTYuNDM4OTE4OCBMMjcuNjQ4MDIxNywxMS4xMzI5MTI2IEwyMi4zMjAwMTU1LDExLjEzMjkxMjYgTDIyLjMyMDAxNTUsMTYuNDM4OTE4OCBaIE0yMi4zMjAwMTU1LDM4LjA5MDk0NCBMMjcuNjQ4MDIxNywzOC4wOTA5NDQgTDI3LjY0ODAyMTcsMzIuNzg0OTM3OCBMMjIuMzIwMDE1NSwzMi43ODQ5Mzc4IEwyMi4zMjAwMTU1LDM4LjA5MDk0NCBaIiBpZD0i5b2i54q2IiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/symbol/3-5.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/3-5.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgNTA8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMzNy4wMDAwMDAsIC0xMDMxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i56ym5Y+3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny4wMDAwMDAsIDg3OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJsaW5lMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDE1Mi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTUwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNDAuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIYiIGZpbGw9IiM3RkFDQjMiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSI9IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5LjAwMDAwMCwgMTcuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSLot6/lvoQxIiBwb2ludHM9IjAgNS4zMDYwMDYxNyAzMS45NjgxNjIyIDUuMzA2MDA2MTcgMzEuOTY4MTYyMiAwIDAgMCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9Iui3r+W+hDHlpIfku70tMiIgcG9pbnRzPSIwIDE1LjMwNjAwNjIgMzEuOTY4MTYyMiAxNS4zMDYwMDYyIDMxLjk2ODE2MjIgMTAgMCAxMCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ "./MindMap/Icons/symbol/3-6.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/3-6.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgNTE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM5Ny4wMDAwMDAsIC0xMDMxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i56ym5Y+3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny4wMDAwMDAsIDg3OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJsaW5lMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDE1Mi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTUxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMDAuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIYiIGZpbGw9IiM3RkFDQjMiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSLot6/lvoQiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgcG9pbnRzPSIzNS45OTk3MSAxNCAyMi4wMDAxMzM4IDI3Ljk5OTg3NzMgMTQuMDAwMjU2NSAyMC4wMDAwNjY5IDEwIDI0LjAwMDA1NTggMjIuMDAwMTMzOCAzNS45OTk2ODc3IDQwIDE4LjAwMDI1NjUiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/symbol/3-7.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/3-7.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgNTI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1Ny4wMDAwMDAsIC0xMDMxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i56ym5Y+3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny4wMDAwMDAsIDg3OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJsaW5lMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDE1Mi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTUyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNjAuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIYiIGZpbGw9IiM3RkFDQjMiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJjb2RlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMC4wMDAwMDAsIDE0LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMy43NTAwMDQzNiwxMS41OTA5MTc4IEwxMS4yNTAwMTMxLDQuMDkwOTE3ODIgTDcuNSw0LjA5MDkxNzgyIEwwLDExLjU5MDkxNzggTDcuNSwxOS4wOTA5MzUzIEwxMS4yNTAwMTMxLDE5LjA5MDkzNTMgTDMuNzUwMDA0MzYsMTEuNTkwOTE3OCBaIE0yMi41MDAwMjYyLDQuMDkwOTE3ODIgTDE4Ljc1MDAyMTgsNC4wOTA5MTc4MiBMMjYuMjUwMDIxOCwxMS41OTA5MTc4IEwxOC43NTAwMjE4LDE5LjA5MDkzNTMgTDIyLjUwMDAyNjIsMTkuMDkwOTM1MyBMMzAuMDAwMDM0OSwxMS41OTA5MTc4IEwyMi41MDAwMjYyLDQuMDkwOTE3ODIgWiBNMTUuOTM3NTE4NSwwLjM0MDkxMzQ1NSBMMTEuMjUwMDEzMSwyMi44NDA5Mzk2IEwxNC4wNjI1MTY0LDIyLjg0MDkzOTYgTDE4Ljc1MDAxMzEsMC4zNDA5MTM0NTUgTDE1LjkzNzUxODUsMC4zNDA5MTM0NTUgWiIgaWQ9IuW9oueKtiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ "./MindMap/Icons/symbol/4-1.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/4-1.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgNTM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk3LjAwMDAwMCwgLTEwOTEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLnrKblj7ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgODc5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImxpbmU0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMjEyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtNTMiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIYiIGZpbGw9IiMwMEFBRUYiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zOS4yNDAzMzQsMzIuMTc2NjYyMiBDMzkuMjQwMzM0LDMzLjYyNTU4MzcgMzguNjYwNjgyNiwzMy45MTUyMDkyIDM2LjQzOTI5OTcsMzMuOTE1MjA5MiBDMzUuODU5NjQ4MywyOC4zMTI3MzM1IDMzLjA1ODYxNCwyNS42MDgxMDc3IDMwLjE2MDc3NzgsMjQuMjU1OTgxMyBDMzIuMDkyNTM4NSwyMS42NDgxNjQxIDMyLjE4OTM1MDYsMTcuODgwNjQzOSAzMC4zNTM5OTQ1LDE1LjA3OTYwOTYgQzMyLjU3NTc4NDYsMTQuNDAzNTUzMiAzNC44OTM5NzYyLDE1Ljk0ODg4MzEgMzUuNDczNjE0LDE4LjM2Mzg5MDIgQzM1Ljk1NjQ1MzMsMjAuNDg4ODY4MSAzNC45OTA3NzQ3LDIyLjgwNzA1NjQgMzMuMDU5MDEzOSwyMy42NzY3MzM2IEMzNi43Mjg5MTEzLDI0LjY0MjAwODUgMzkuMjQwMzM0LDI4LjExOTQ5MjcgMzkuMjQwMzM0LDMyLjE3NjY1MiBMMzkuMjQwMzM0LDMyLjE3NjY2MjIgWiBNMjcuMzU5MzM2NCwyNC43Mzg4MzA3IEMzMC45MzMyMzI0LDI1LjUxMTY5OTIgMzUuMDg2ODAwMSwyOC4wMjMxMTE0IDM1LjA4NjgwMDEsMzUuMjY3NzM1OSBDMzUuMDg2ODAwMSwzNy4xOTk0OTY3IDMyLjY3MjIwMDEsMzcuMTk5NDk2NyAyNC44NDc5MzQ0LDM3LjE5OTQ5NjcgQzE2LjkyNzI4MDcsMzcuMTk5NDk2NyAxNC42MDkwNjg3LDM3LjE5OTQ5NjcgMTQuNjA5MDY4NywzNS4yNjc3MzU5IEMxNC42MDkwNjg3LDI4LjExOTUzNjggMTguNzYyNjM2NCwyNS41MTE2OTI1IDIyLjMzNjUzMjQsMjQuNzM4ODMwNyBDMTkuNTM1NDk4MSwyMy4xOTM1MDA4IDE4LjU2OTQxMjUsMTkuNjE5NTg0NCAxOS45MjE5MzI0LDE2LjcyMTc2ODYgQzIxLjI3NDQ0ODksMTMuODIzOTIyMiAyNC42NTUxMzc5LDEyLjc2MTQyNDcgMjcuMjYyOTQ4MywxNC4zMDY3NjE0IEMyOS44NzA3NjU1LDE1Ljg1MjA5MTQgMzAuOTMzNjU5OCwxOS40MjYzODA5IDI5LjQ4NDczODMsMjIuMjI3NDE1MiBDMjkuMDAxNDk1NCwyMy4zODY3MTQ1IDI4LjIyODYyNjksMjQuMTU5MTc2IDI3LjM1OTM1MzMsMjQuNzM4ODI3MyBMMjcuMzU5MzM2NCwyNC43Mzg4MzA3IFogTTE5LjM0MTg3MjIsMjQuMjU1OTkxNSBDMTYuNDQ0MDIwNywyNS42MDg1MDc5IDEzLjY0Mjk4MzEsMjguNDA5NTU5MiAxMy4wNjMzNDUyLDMzLjkxNTIxOTQgQzEwLjg0MTU1NTIsMzMuOTE1MjE5NCAxMC4yNjIzMTA5LDMzLjYyNTU5NjkgMTAuMjYyMzEwOSwzMi4xNzY2NzI0IEMxMC4wNjkwOTQyLDI4LjExOTUxMyAxMi42NzY5MTEsMjQuNTQ1NjE3IDE2LjM0NzYwODksMjMuNjc2MzQ2OSBDMTQuMjIyNjMxLDIyLjYxMzg1NjIgMTMuMjU2NTQ1NCwyMC4wMDU2MzU0IDE0LjIyMjYzMSwxNy42ODc0MjM0IEMxNS4wOTE5MDQ2LDE1LjY1ODg1MDUgMTcuMTIwNDc3NCwxNC41OTYzNTk5IDE5LjE0OTA2MDUsMTUuMTc2MDExMiBDMTcuMzEzMjk3NywxNy44ODA2NDA1IDE3LjQxMDEwOTgsMjEuNTUxMzQ4NiAxOS4zNDE4NzIyLDI0LjI1NTk3NDUgTDE5LjM0MTg3MjIsMjQuMjU1OTkxNSBaIiBpZD0i5b2i54q2IiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/symbol/4-2.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/4-2.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgNTQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1Ny4wMDAwMDAsIC0xMDkxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i56ym5Y+3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny4wMDAwMDAsIDg3OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJsaW5lNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDIxMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTU0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MC4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9IuakreWchiIgZmlsbD0iIzAwQUFFRiIgY3g9IjI1IiBjeT0iMjUiIHI9IjI1Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwLjIwMjA2NzIsMzIuNDU3NTY2NiBMMTAuMzE2Njc1MywzMi4yODgzODMyIEMxMC4yNTY2NDI0LDMyLjM0ODQxNjIgMTAuNjMzMjEwOSwzMS45MTE4MTQ1IDEwLjYzMzIxMDksMzEuOTExODE0NSBMMTAuNjMzMjEwNSwzMS45MTE4MTQ5IEMxMS4wMjcxMzQ1LDMxLjQ5MDgxMTMgMTEuNDU0MTkxOSwzMS4xMDIwNzk5IDExLjkxMDI3NDQsMzAuNzQ5MzYwOSBDMTIuNjc0MzI3OCwzMC4xMjE3NDM1IDEzLjYyMzk0MDIsMjkuNDA2ODA3NCAxNC4zNjYxNjQ2LDI4LjkyMTA4ODEgQzE1LjI2NjY1NjksMjguMzMxNjc0OSAxNS44OTQyNzQzLDI3Ljk1NTEwNjIgMTUuODU2MDcsMjcuOTc2OTM1MSBMMTYuNTE2NDMyNCwyNy42NDk0ODM3IEwxNi41MTY0MzI0LDI3LjY0OTQ4MzcgQzE2Ljg3Mzc5NjEsMjcuNTA4MTAyMSAxNy4yNjkwNTA5LDI3LjQ5NDYwNTggMTcuNjM1MjI1NiwyNy42MTEyODA4IEwxNy42MzUyMjU2LDI3LjYxMTI4MDggQzE3LjkyODc5NTcsMjcuNzEyNDYyNSAxOC4xNzkwNjc0LDI3LjkxMDc1NjggMTguMzQ0NzA1MiwyOC4xNzM0MDU3IEwxOC4zNDQ3MDUyLDI4LjE3MzQwNTcgQzE4LjY1Mzk1MTgsMjguNTE5MDA5NyAxOC45MDk2NTY5LDI4LjkwOTAwNTIgMTkuMTAzMzAyMSwyOS4zMzA0MDMxIEMxOS4zMzc5NzYsMjkuNzUwNjMyNiAxOS42MTA4NTMxLDMwLjM0NTUwNTIgMTkuOTQzNzYxMSwzMC45Mjk0NTkgQzIwLjM5MTI3ODksMzEuNzIwODAwOCAyMS41NTM3MzI5LDMyLjUwNjY4NiAyMi43MTYxODY5LDMxLjg1NzIzOTYgTDIyLjcxNjE4NzksMzEuODU3MjM5IEMyNC42MzYyODIsMzAuODIyMjE1NyAyNi40MTg1MjUzLDI5LjU0OTcxMjUgMjguMDIwOTE4MywyOC4wNjk3MTk4IEMzMC4yNzQ4OCwyNS45NTIxOTY5IDMxLjUwMjgyMDgsMjQuMzMxMzE1IDMyLjIwMTM4MTYsMjIuNzkyMjcyIEwzMi4yMDEzODE2LDIyLjc5MjI3MTkgQzMyLjUyMzcyNzQsMjEuOTY3NTUzMyAzMi4xODUyOTk4LDIxLjAzMTYyODUgMzEuNDEwMDM5OSwyMC42MDM3OTk5IEMzMC40OTMxNzUyLDIwLjE2MTczODYgMjkuOTYzNzkyMywyMC4wNTI1ODgxIDI5LjM4NTI5NTEsMTkuNzAzMzA3NyBDMjguODYxMzcxNiwxOS4zODEzMTI3IDI4Ljk2NTA2NTYsMTkuNDkwNDYzOCAyOC4zNDgzNjQsMTkuMDkyMDYyNiBDMjguMzI2NTMzOSwxOS4wNzU2OSAyOC4xMzAwNjI3LDE4LjkwNjUwNjUgMjguMTAyNzc1LDE4Ljg4NDY3NjQgTDI4LjAyMDkxMiwxOC44MDI4MTM0IEwyOC4wMjA5MTE5LDE4LjgwMjgxMzQgQzI3LjY0NTI1NjUsMTguNDc4MzMzNyAyNy41Mjc1OTA3LDE3Ljk0NTUwOTMgMjcuNzMxNjYyNywxNy40OTMwMDQ3IEwyNy44MTM1MjU3LDE3LjI0NzQxNTYgTDI3LjgxMzUyNTYsMTcuMjQ3NDE1OSBDMjguMTQ4NDQyOCwxNi41MTg1OTQ5IDI4LjUyMTkwMzUsMTUuODA4MTEyMiAyOC45MzIzMTg4LDE1LjExODk3NzEgTDI4LjkzMjMxNzYsMTUuMTE4OTc5MSBDMjkuMzI0MzI1MiwxNC40NjYxNTIxIDI5Ljc1MjQ5ODgsMTMuODM1NzMzOSAzMC4yMTQ4MzgsMTMuMjMwNjczMSBMMzAuMjE0ODM4MywxMy4yMzA2NzI2IEMzMC43NTM4OTYyLDEyLjQ1NTQ1NCAzMS40NjA5MjMsMTEuODExODU1NSAzMi4yODMyNDk3LDExLjM0NzgyMDIgQzMyLjI4MzI0OTcsMTEuMzQ3ODIwMiAzMi41NTYxMjYyLDExLjIwNTkyNDMgMzIuNjkyNTYzMywxMS4xNDU4OTE0IEwzMi42OTI1NjMzLDExLjE0NTg5MTQgQzMzLjE4NTcxMDUsMTAuOTM4ODIzOCAzMy43NDM5MDM5LDEwLjk1MjcyOSAzNC4yMjYxMjk1LDExLjE4NDA5NDIgTDM0LjIyNjEyOTQsMTEuMTg0MDk0MiBDMzUuMTMzNzM5NSwxMS41NDgyOTE2IDM1Ljk2NDkzODEsMTIuMDc5NTkzOCAzNi42NzY1NjAzLDEyLjc1MDQwNTMgQzM4LjQ0NDc5OTksMTQuMTkxMTkzNCAzOS42ODkxMjE4LDE2LjE4ODY0NDEgMzkuNDM4MDczMSwxNy45MzUwNzUxIEMzOS4wNTYwNDQ5LDIwLjY2Mzg0MDEgMzUuNTkwNTA5LDI2LjY3ODA0NDMgMzEuMDY2MjE2MSwzMC45Mjk0NTM4IEMyNi41NDE5MjMxLDM1LjE4MDg2MzMgMjAuMTM0Nzg2NSwzOC40MzM1NzUgMTcuMjMxMzg0MSwzOC43OTM3NTY4IEMxNS4yODMwNDQ5LDM5LjAzOTM0NTggMTMuNjM0ODcxNywzOC4wNTE1MzIzIDExLjk4NjY5ODYsMzYuNTU2MTY3NSBMMTEuOTg2Njk3NCwzNi41NTYxNjY1IEMxMS4yODY4MzQ4LDM1LjkyMTg3NDggMTAuNzAzMTk3MSwzNS4xNzAxNjY3IDEwLjI2MjExODYsMzQuMzM0OTUyNSBDMTAuMDQzODE3MywzMy44NzY1MTg3IDkuODMwOTczMTUsMzIuOTc2MDI2NSAxMC4yMDIwODU3LDMyLjQ1NzU2MjQgTDEwLjIwMjA2NzIsMzIuNDU3NTY2NiBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0LjczNTE0MSwgMjQuOTE1NTkxKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0yNC43MzUxNDEsIC0yNC45MTU1OTEpICI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/symbol/4-3.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/4-3.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgNTU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxNy4wMDAwMDAsIC0xMDkxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i56ym5Y+3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny4wMDAwMDAsIDg3OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJsaW5lNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDIxMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTU1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjAuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIYiIGZpbGw9IiMwMEFBRUYiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zOS44MjkyNzQ1LDE4LjU1MTQ4NzMgTDMxLjQ0ODUxMjQsMTAuMTcwNzI1MiBDMzEuMTc1MjMyMSw5Ljg5NzQ0NTE5IDMwLjgxNDI5NTEsOS45NTg4NTEwMSAzMC42NDY5NTE4LDEwLjMwNzU5OTYgTDI5LjUyMzM2MzUsMTIuNjQ4NTI4OCBMMzcuMzUxNDcwNiwyMC40NzY2MzU5IEwzOS42OTIzOTk4LDE5LjM1MzA0NzcgQzQwLjA0MTE0OSwxOS4xODU3MDQ2IDQwLjEwMjU1NTEsMTguODI1MjM2NCAzOS44MjkyNzQyLDE4LjU1MTQ4NyBMMzkuODI5Mjc0NSwxOC41NTE0ODczIFogTTI4LjAyOTAxODMsMTMuOTY2MTg1MyBMMjAuMzEyNDczNSwxNC42MDkzMDg4IEMxOS43OTk2NjIxLDE0LjY3MjU4OTkgMTkuMzcyNjM0OCwxNC43ODIyNzY5IDE5LjIyNTkxNjQsMTUuNDUxNjUwNiBDMTkuMjI1OTE2NCwxNS40NTI1ODgxIDE5LjIyNTQ0NzYsMTUuNDUzMDU2OSAxOS4yMjU0NDc2LDE1LjQ1MzUyNTYgQzE3LjEzMjk1NTQsMjUuNTA0NDEwOCAxMCwzNS4zMTIwNDQ2IDEwLDM1LjMxMjA0NDYgTDExLjY4MDkzMDcsMzYuOTkyOTc1NCBMMTkuNjQ5MTkzNywyOS4wMjQ3MTI0IEMxOS40NzM0MTMyLDI4LjY1NzY4MTkgMTkuMzc0OTc2MiwyOC4yNDY1ODkxIDE5LjM3NDk3NjIsMjcuODEyMDYxOCBDMTkuMzc0OTc2MiwyNi4yNTg2MzA4IDIwLjYzNDAzMjksMjQuOTk5NTcxMiAyMi4xODc0NjM5LDI0Ljk5OTU3MTIgQzIzLjc0MDg5NDksMjQuOTk5NTcxMiAyNC45OTk5NTE2LDI2LjI1ODYyNzkgMjQuOTk5OTUxNiwyNy44MTIwNjE4IEMyNC45OTk5NTE2LDI5LjM2NTQ5MjggMjMuNzQwODk0OSwzMC42MjQ1NTI0IDIyLjE4NzQ2MzksMzAuNjI0NTUyNCBDMjEuNzUzNDAyNCwzMC42MjQ1NTI0IDIxLjM0MjMwOTYsMzAuNTI2MTE1MiAyMC45NzQ4MTM0LDMwLjM1MDMzNDYgTDEzLjAwNjU1MDMsMzguMzE4NTk3NiBMMTQuNjg3NDgxMSwzOS45OTk1Mjg0IEMxNC42ODc0ODExLDM5Ljk5OTUyODQgMjQuNDk1NTU0MywzMi44NjY1NzU5IDM0LjU0NjAwMDEsMzAuNzc0MDgwNyBDMzQuNTQ2OTM3NiwzMC43NzQwODA3IDM0LjU0NzQwNjMsMzAuNzczNjEyIDM0LjU0Nzg3NTEsMzAuNzczNjEyIEMzNS4yMTcyNDg1LDMwLjYyNjg5MzggMzUuMzI2OTM1OCwzMC4xOTk4NjMzIDM1LjM5MDIxNjksMjkuNjg3MDU0OSBMMzYuMDMzMzQwNCwyMS45NzA1MSBMMjguMDI4NTE1LDEzLjk2NTY4NDYgTDI4LjAyOTAxODMsMTMuOTY2MTg1MyBaIiBpZD0i5b2i54q2IiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/symbol/4-4.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/4-4.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgNTY8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3Ny4wMDAwMDAsIC0xMDkxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i56ym5Y+3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny4wMDAwMDAsIDg3OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJsaW5lNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDIxMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTU2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIYiIGZpbGw9IiMwMEFBRUYiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMy41MzY3ODU3LDEwIEwyNi41MDY5ODY2LDEwIEwyNi41MDY5ODY2LDEyLjE3NzU3ODEgQzMxLjE5NzI5OTEsMTIuODI0MDg0OCAzNC4wMTE1MDY3LDE1LjE2MTcwNzYgMzQuOTQ5MjA3NiwxOS4xOTM5Mjg2IEwyOS43OTAwNzgxLDIwLjQwMzU3MTQgQzI5LjE2NDc5OTEsMTguMjI2MjI3NyAyOC4wNzA0MzUzLDE2Ljg5NTUxMzQgMjYuNTA2OTg2NiwxNi40MTE2Mjk1IEwyNi41MDY5ODY2LDIyLjU4MTE0OTYgQzMyLjY1NDg0MzgsMjQuMTEzNDkzMyAzNS42MjU3MTQzLDI2LjY1NDA4NDggMzUuNDE4NTI2OCwzMC4yMDE1ODQ4IEMzNS4zMTMwNTgsMzQuNTU2NzA3NiAzMi4zNDI0MjE5LDM2Ljk3NjIyNzcgMjYuNTA2OTg2NiwzNy40NjAwNDQ2IEwyNi41MDY5ODY2LDQwIEwyMy41MzY3ODU3LDQwIEwyMy41MzY3ODU3LDM3LjMzODc3MjMgQzE4LjExNTU1OCwzNy4wMTY3NDExIDE0LjkzODEzNjIsMzQuNDM1NDM1MyAxNCwyOS41OTY2Mjk1IEwxOS4xNTkxMjk1LDI4LjM4Njc4NTcgQzE5Ljg4NjIyNzcsMzEuMjkwMTU2MyAyMS4zNDgwNTgsMzIuOTgzNjQ5NiAyMy41MzY3ODU3LDMzLjQ2NzcwMDkgTDIzLjUzNjc4NTcsMjYuMzMwNTEzNCBDMTcuMzg0NjQyOSwyNC45NjAzNTcxIDE0LjQxNDQ0MiwyMi41ODExNDk2IDE0LjYyNTUxMzQsMTkuMTkzOTI4NiBDMTQuOTM4MTM2MiwxNC45MTk3OTkxIDE3LjkwODU3MTQsMTIuNTQwMzU3MSAyMy41MzY3ODU3LDEyLjA1NjUwNjcgTDIzLjUzNjc4NTcsMTAgWiBNMjMuNTM2Nzg1NywyMS44NTUxNTYzIEwyMy41MzY3ODU3LDE2LjE2OTcyMSBDMjEuMDM1NDM1MywxNi40MTE2Mjk1IDE5Ljc4NDQ0MiwxNy4yOTk4NDM4IDE5Ljc4NDQ0MiwxOC44MzA5MTUyIEMxOS43ODQ0NDIsMjAuMDQwNTU4IDIxLjAzNTQzNTMsMjEuMDQ5ODQzOCAyMy41MzY3ODU3LDIxLjg1NTE1NjMgWiBNMjYuNTA2OTg2NiwyNi45MzUyMDA5IEwyNi41MDY5ODY2LDMzLjQ2NzUgQzI4LjkwMjkzNTMsMzMuMjI1MzU3MSAzMC4xMDI3MDA5LDMyLjE3OTAwNjcgMzAuMTAyNzAwOSwzMC4zMjE5ODY2IEMzMC4yMDQ0ODY2LDI4Ljc5MTc4NTcgMjkuMDA4NTcxNCwyNy42NjA5OTMzIDI2LjUwNjk4NjYsMjYuOTM1MjAwOSBMMjYuNTA2OTg2NiwyNi45MzUyMDA5IFoiIGlkPSLlvaLnirYiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/symbol/4-5.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/4-5.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgNTc8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMzNy4wMDAwMDAsIC0xMDkxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i56ym5Y+3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny4wMDAwMDAsIDg3OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJsaW5lNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDIxMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTU3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNDAuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIYiIGZpbGw9IiMwMEFBRUYiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMSwzOS4wMTEwMTMzIEwxMSwzNS4zODQ2NDQ5IEwzOC44MDIyMzQ5LDM1LjM4NDY0NDkgTDM4LjgwMjIzNDksMzkuMDExMDEzMyBMMTEsMzkuMDExMDEzMyBMMTEsMzkuMDExMDEzMyBaIE0xMy40MTc1ODY2LDMyLjk2NzA1NSBMMTMuNDE3NTg2NiwxNi4wNDM5NTg0IEwxOC4yNTI3NjY2LDE2LjA0Mzk1ODQgTDE4LjI1Mjc2NjYsMzIuOTY3MDU1IEwxMy40MTc1ODY2LDMyLjk2NzA1NSBaIE0zMS42MTQ3NDEyLDMyLjk2NzA1NSBMMzEuNjE0NzQxMiwyMC44NzkxMzgzIEwzNi40NDk5MjExLDIwLjg3OTEzODMgTDM2LjQ0OTkyMTEsMzIuOTY3MDU1IEwzMS42MTQ3NDEyLDMyLjk2NzA1NSBaIE0yMi42MTQwNjY3LDMyLjk2NzA1NSBMMjIuNjE0MDY2NywxMCBMMjcuNDQ5MjQ2NiwxMCBMMjcuNDQ5MjQ2NiwzMi45NjcwNTUgTDIyLjYxNDA2NjcsMzIuOTY3MDU1IFoiIGlkPSLlvaLnirYiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/symbol/4-6.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/4-6.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgNTg8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM5Ny4wMDAwMDAsIC0xMDkxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i56ym5Y+3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny4wMDAwMDAsIDg3OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJsaW5lNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDIxMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTU4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMDAuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIYiIGZpbGw9IiMwMEFBRUYiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSLppbzlm74iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExLjAwMDAwMCwgMTAuMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4zMjY3ODExLDE0LjE2NDUzNzEgTDE2LjY5OTA1MDcsMTUuNjQyMTUzOSBMMjYuODUyNzM2NCwyMS4zNjY1ODE4IEwyNi44NTI3MzY1LDIxLjM2NjU4MTggQzI3Ljg1NjQwMTcsMTkuMTAwMzg2OCAyOC4zNjAzNjEzLDE2LjY0NDYzODQgMjguMzMwMzUzMiwxNC4xNjYzNDUgTDI4LjMyNjc4MTEsMTQuMTY0NTM3MSBaIE0xNS4wMzM1NzczLDAuNjg4ODY1NjA1IEwxNS40MDM4NzcyLDEzLjYxMTc2NjEgTDI4LjE0MjUxMDEsMTEuNzY1NjM5OSBMMjguMTQyNTEwMSwxMS43NjU2NDMzIEMyNi43NTQ1NjgyLDUuNTQ5NDcxMzkgMjEuMzk0MTkyMywxLjAyMDA3MzY0IDE1LjAzMzU3NzMsMC42ODg4NjU2MDUgTDE1LjAzMzU3NzMsMC42ODg4NjU2MDUgWiIgaWQ9IuW9oueKtiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEzLjM3MzUwMywxNS42NDM5NDE2IEwxMy4xOTQ2MTQ4LDExLjAyODYxNzYgTDEyLjgxODk1MTEsMC42OTA2NjM0NyBMMTIuODE4OTUxNCwwLjY5MDY2MzQ3IEM0LjkzOTYxNTU2LDEuNTcxOTM4ODYgLTAuNzMzNDUzMzQsOC42NzM4MzY4MiAwLjE0NzgyNTQ0MSwxNi41NTMxNzI3IEMwLjk1NTQ1Nzk2LDIzLjc3NDA2ODIgNy4wMzA4ODQ0NCwyOS4yNTMwMzEyIDE0LjI5NjU5MTksMjkuMzEyOTQyMyBMMTQuMjk2NTkxNywyOS4zMTI5NDIzIEMxOC44NDg1ODE5LDI5LjMzNTQ0MDQgMjMuMTI0MDM0MSwyNy4xMzA5MDk2IDI1Ljc0NTQ0NzUsMjMuNDA5NDY2NiBMMTMuMzczNTAzLDE1LjY0Mzk0MTYgWiIgaWQ9Iui3r+W+hCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ "./MindMap/Icons/symbol/4-7.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/4-7.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgNTk8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1Ny4wMDAwMDAsIC0xMDkxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i56ym5Y+3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny4wMDAwMDAsIDg3OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJsaW5lNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDIxMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTU5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNjAuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIYiIGZpbGw9IiMwMEFBRUYiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNS4xODQ2NDMzLDI4LjYzOTQ4MzkgTDI1LjE4NDY0MzMsMzUuMzMyMjE0MyBDMjUuMTg0NjQzMywzNS40NTAwNTg3IDI1LjIyOTYxMDYsMzUuNTY3OTMzMSAyNS4zMTk1NDUzLDM1LjY1Nzc3NzkgQzI1LjQwOTQ4LDM1Ljc0NzYyMjYgMjUuNTI3Mjk0NSwzNS43OTI2Nzk5IDI1LjY0NTEwOSwzNS43OTI2Nzk5IEwyOS4wMzAxMDExLDM1Ljc5MjY3OTkgQzI5LjE0NzkxNTUsMzUuNzkyNjc5OSAyOS4yNjU3ODk5LDM1Ljc0NzcxMjYgMjkuMzU1NjY0NywzNS42NTc3Nzc5IEMyOS40NDU1Mzk0LDM1LjU2Nzg0MzIgMjkuNDkwNTY2NywzNS40NTAwMjg3IDI5LjQ5MDU2NjcsMzUuMzMyMjE0MyBMMjkuNDkwNTY2NywyNi40MTMyMTA0IEwyNi4wNDg4MjU4LDI5LjM3NTk1OTEgTDI1LjE4NDY0MzMsMjguNjM5NTEzOSBMMjUuMTg0NjQzMywyOC42Mzk0ODM5IFogTTEwLjcxOTc1NjQsMzUuMzMyMjQ0MiBDMTAuNzE5NzU2NCwzNS40NTAwODg3IDEwLjc2NDc1MzcsMzUuNTY3OTYzMSAxMC44NTQ2ODg0LDM1LjY1NzgwNzggQzEwLjk0NDU5MzEsMzUuNzQ3NzQyNSAxMS4wNjI0Mzc1LDM1Ljc5MjcwOTkgMTEuMTgwMjUyLDM1Ljc5MjcwOTkgTDE0LjU2NDc5NDUsMzUuNzkyNzA5OSBDMTQuNjgyNjA4OSwzNS43OTI3MDk5IDE0LjgwMDQ4MzMsMzUuNzQ3NzQyNSAxNC44OTAzNTgxLDM1LjY1NzgwNzggQzE0Ljk4MDI5MjgsMzUuNTY3OTMzMSAxNS4wMjUyNjAxLDM1LjQ1MDA1ODcgMTUuMDI1MjYwMSwzNS4zMzIyNDQyIEwxNS4wMjUyNjAxLDI4LjUwNDc5MTcgTDEwLjcxOTc1NjQsMzIuMDU2MjIzIEwxMC43MTk3NTY0LDM1LjMzMjI0NDIgTDEwLjcxOTc1NjQsMzUuMzMyMjQ0MiBaIE0xNy45NTEzNDU1LDI2LjA4OTk4NTEgTDE3Ljk1MTM0NTUsMzUuMzMyMTg0MyBDMTcuOTUxMzQ1NSwzNS40NTAwMjg3IDE3Ljk5NjMxMjgsMzUuNTY3OTAzMSAxOC4wODYyNDc1LDM1LjY1Nzc0NzkgQzE4LjE3NjE1MjIsMzUuNzQ3NjgyNiAxOC4yOTM5OTY3LDM1Ljc5MjY0OTkgMTguNDExODExMSwzNS43OTI2NDk5IEwyMS43OTcyMjI5LDM1Ljc5MjY0OTkgQzIxLjkxNTAzNzQsMzUuNzkyNjQ5OSAyMi4wMzI5MTE4LDM1Ljc0NzY4MjYgMjIuMTIyNzg2NSwzNS42NTc3NDc5IEMyMi4yMTI3MjEyLDM1LjU2Nzg3MzEgMjIuMjU3Njg4NiwzNS40NDk5OTg3IDIyLjI1NzY4ODYsMzUuMzMyMTg0MyBMMjIuMjU3Njg4NiwyNi4xNDc3MjMyIEwyMC4xMDU4NTExLDI0LjMxNTQ4MzYgTDE3Ljk1MTM0NTUsMjYuMDg5OTg1MSBaIE0zMi40MTcwNDE4LDM1LjMzMjI0NDIgQzMyLjQxNzA0MTgsMzUuNDUwMDg4NyAzMi40NjIwMDkxLDM1LjU2Nzk2MzEgMzIuNTUxOTQzOCwzNS42NTc4MDc4IEMzMi42NDE4Nzg1LDM1Ljc0NzY1MjYgMzIuNzU5NjkzLDM1Ljc5MjcwOTkgMzIuODc3NTA3NCwzNS43OTI3MDk5IEwzNi4yNjM4Nzg2LDM1Ljc5MjcwOTkgQzM2LjM4MTcyMywzNS43OTI3MDk5IDM2LjQ5OTU2NzQsMzUuNzQ3NzQyNSAzNi41ODk0NDIyLDM1LjY1NzgwNzggQzM2LjY3OTMxNjksMzUuNTY3ODczMSAzNi43MjQzNDQyLDM1LjQ1MDA1ODcgMzYuNzI0MzQ0MiwzNS4zMzIyNDQyIEwzNi43MjQzNDQyLDIwLjE4NDkzMjggTDMyLjQxNzA0MTgsMjMuODkzNTk5OSBMMzIuNDE3MDQxOCwzNS4zMzIyNDQyIEwzMi40MTcwNDE4LDM1LjMzMjI0NDIgWiBNMzEuNjc0MzYxMSwxMi4zNDE2MDk4IEwzMS42NzQzNjExLDEyLjM0MTYwOTggQzMxLjU4OTU5MTYsMTIuMzQxNjA5OCAzMS41MjA4Nzk3LDEyLjQxMDQwMjkgMzEuNTIwODg4NCwxMi40OTUxNzIzIEMzMS41MjA4OTI2LDEyLjUzNjMxMTUgMzEuNTM3NDExNSwxMi41NzU3MjcxIDMxLjU2NjczOTIsMTIuNjA0NTc3IEwzNC44MDI4Mjk0LDE1Ljc4NjUyNjUgTDI2LjA0ODc2NTgsMjMuMzI0MTMzNCBMMjAuMTA1ODIxMSwxOC4yNjIxMjkgTDEwLjY5NTExNDMsMjYuMDI1MjAyMiBMMTAuNjk1MTE0MywyOS4zNzg1NjczIEwyMC4xMDU4MjExLDIxLjYxNTg1MzggTDI2LjA0ODc2NTgsMjYuNjc3MDc4OCBMMzYuNjIyOTg3OCwxNy41NzQxODg1IEwzOS4yOTY3NzY0LDIwLjIwMzc4OTEgTDM5LjI5Njc3NjQsMjAuMjAzNzg2MiBDMzkuMjk2ODA1NiwyMC4yODg1MzkxIDM5LjM2NTUzNSwyMC4zNTcyMjExIDM5LjQ1MDI4OCwyMC4zNTcxOTE3IEMzOS41MzUwNDA5LDIwLjM1NzE2MjQgMzkuNjAzNjkzNSwyMC4yODg0MzMgMzkuNjAzNjkzNSwyMC4yMDM2ODAxIEMzOS42MDM2OTM1LDIwLjE2MjU3OTkgMzkuNTg3MTc5LDIwLjEyMzIwMzIgMzkuNTU3ODg4OSwyMC4wOTQzNzA0IEwzOS41NTc4ODg5LDEyLjQ5NTEyODMgQzM5LjU1Nzg4ODksMTIuNDU1ODU2OCAzOS41NDI4OTk3LDEyLjQxNjU4NTMgMzkuNTEyOTIxNSwxMi4zODY1NzcxIEMzOS40ODI5NDMzLDEyLjM1NjU5ODkgMzkuNDQzNjQxOCwxMi4zNDE2MDk4IDM5LjQwNDQwMDMsMTIuMzQxNjA5OCBMMzEuNjc0MzMzMiwxMi4zNDE2MDk4IEwzMS42NzQzNjExLDEyLjM0MTYwOTggWiIgaWQ9IuW9oueKtiIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ "./MindMap/Icons/symbol/5-1.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/5-1.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgNjA8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk3LjAwMDAwMCwgLTExNTEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLnrKblj7ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgODc5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9ImxpbmU1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMjcyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtNjAiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIYiIGZpbGw9IiMwMTc4RjAiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zOS45MzA2MDEyLDI3LjEzMDIyNSBDMzkuOTMwNjAxMiwyNy40NjA3MDg4IDM5LjgxMjE3MDUsMjcuNzQ2OTU0MiAzOS41NzUzMDg4LDI3Ljk4ODk2NDMgQzM5LjMzODY4MTUsMjguMjMwNzQwOCAzOS4wNTgyODU4LDI4LjM1MTc0NSAzOC43MzQ1OTAxLDI4LjM1MTc0NSBMMzQuNTQ4MDkxMSwyOC4zNTE3NDUgQzM0LjU0ODA5MTEsMzAuNTI3NTAwNCAzNC4xMzA3NzQyLDMyLjM3MjMwNjMgMzMuMjk1OTA4OSwzMy44ODU5MzExIEwzNy4xODMyODY1LDM3Ljg3NTExNTQgQzM3LjQxOTkxMzgsMzguMTE3MTI2MSAzNy41MzgzNDQ1LDM4LjQwMzM3MzkgMzcuNTM4MzQ0NSwzOC43MzQwODkxIEMzNy41MzgzNDQ1LDM5LjA2NDU3MjkgMzcuNDE5OTEzOCwzOS4zNTA4MTgzIDM3LjE4MzI4NjUsMzkuNTkyNTk0IEMzNi45NTkwNjM4LDM5LjgzNDM3MDYgMzYuNjc4OTAyMSwzOS45NTUzNzQ3IDM2LjM0MjMzMzQsMzkuOTU1Mzc0NyBDMzYuMDA1NzY0NiwzOS45NTUzNzQ3IDM1LjcyNTYwNDIsMzkuODM0MzY5NCAzNS41MDEzODAzLDM5LjU5MjU5NCBMMzEuODAwNzcwNSwzNS44MzMwMDk2IEwzMS44MDA3NzA1LDM1LjgzMzAwOTUgQzMxLjcxMTc5MjYsMzUuOTIwNDY5OSAzMS42MTgzNTkyLDM2LjAwMzI3ODQgMzEuNTIwODQzMywzNi4wODExMDU3IEMzMS4zOTYzMjczLDM2LjE4MjY4NDUgMzEuMTM0NjU3MywzNi4zNjM4NDE3IDMwLjczNjA2NCwzNi42MjQ1NzUxIEwzMC43MzYwNjM3LDM2LjYyNDU3NTMgQzMwLjM0NTIyNTQsMzYuODgwNjAwNyAyOS45Mzk0MzM5LDM3LjExMzAzOTcgMjkuNTIwODYwMiwzNy4zMjA2NDkzIEMyOS4xMDkzOTM5LDM3LjUyNDI3NTQgMjguNTk4NjkzMSwzNy43MDg3MTAzIDI3Ljk4ODc0OSwzNy44NzM5NTA3IEMyNy4zNzg1NzM1LDM4LjAzOTE5MiAyNi43NzQyNDg2LDM4LjEyMjA0NjkgMjYuMTc1MzA4NCwzOC4xMjIwNDY2IEwyNi4xNzUzMDg0LDIxLjAyMTY3NTIgTDIzLjc4MzI4OSwyMS4wMjE2NzUyIEwyMy43ODMyODksMzguMTIyMDQ2NiBDMjMuMTQ3NjAxOCwzOC4xMjIwNDY2IDIyLjUxNTQyNDMsMzguMDM2MTQ5MyAyMS44ODYwNTY0LDM3Ljg2NDEyMDUgQzIxLjI1NjkyMjgsMzcuNjkyMzI1NyAyMC43MTUwOTExLDM3LjQ4MjM3ODggMjAuMjYwNTU4NCwzNy4yMzQwNDk0IEwyMC4yNjA1NTg2LDM3LjIzNDA0OTUgQzE5LjgzODM0OTEsMzcuMDA1MTEyIDE5LjQyNjkxOCwzNi43NTY4MzIyIDE5LjAyNzU3NzcsMzYuNDkwMDAxOCBDMTguNjU5ODgwOSwzNi4yNDI2MDc4IDE4LjM4ODYxMjEsMzYuMDM1OTQwNyAxOC4yMTQwMTEzLDM1Ljg2OTc2MjggTDE3LjkzNDMwOTYsMzUuNjAyMjM0NSBMMTQuNTE0NTY5MywzOS41NTIzMzY4IEMxNC4yNjUwNjg5LDM5LjgxOTE1NjkgMTMuOTY1OTQ5NSwzOS45NTI4MDIxIDEzLjYxNzQ0NTIsMzkuOTUyODAyMSBDMTMuMzE4NTYxMSwzOS45NTI4MDIxIDEzLjA1MDU3MDUsMzkuODUxMjIzMyAxMi44MTM3MDc5LDM5LjY0NzU5ODYgQzEyLjU3Njg0NjUsMzkuNDE4Njk0OCAxMi40NDkyODY2LDM5LjEzNTcyNiAxMi40MzEwMzE3LDM4Ljc5ODY4ODQgQzEyLjQxMjU0MTUsMzguNDYxNjUwOSAxMi41MDg5NzE0LDM4LjE2NTU3NjQgMTIuNzIwMzIxMSwzNy45MTA2OTMzIEwxNi40OTUzNDUsMzMuNTc4MzgzNSBDMTUuNzcyODI0NywzMi4xMjc5NTggMTUuNDExNjgxNywzMC4zODQ5NjE5IDE1LjQxMTY4MTcsMjguMzQ5MTc4MiBMMTEuMjI1MTgyNiwyOC4zNDkxNzgyIEMxMC45MDE0ODcsMjguMzQ5MTc4MiAxMC42MjEzMjY1LDI4LjIyODE3MjkgMTAuMzg0NDYzOSwyNy45ODYzOTc1IEMxMC4xNDc2MDI1LDI3Ljc0NDYyMSAxMC4wMjkxNzE1LDI3LjQ1ODM3MzUgMTAuMDI5MTcxNSwyNy4xMjc2NTgzIEMxMC4wMjkxNzE1LDI2Ljc5NzE3NDUgMTAuMTQ3NjAyMiwyNi41MTA5MjkgMTAuMzg0NDYzOSwyNi4yNjkxNTM0IEMxMC42MjEzMjUzLDI2LjAyNzE0MjcgMTAuOTAxNzIxMywyNS45MDYzNzI3IDExLjIyNTE4MjYsMjUuOTA2MzcyNyBMMTUuNDExNjgxNywyNS45MDYzNzI3IEwxNS40MTE2ODE3LDIwLjI5NDk1OTkgTDEyLjE3ODQ3NDgsMTYuOTkzNDAzMyBDMTEuOTQxNjEzNCwxNi43NTE2MjY4IDExLjgyMzQxNjcsMTYuNDY1Mzc5MyAxMS44MjM0MTY3LDE2LjEzNDY2NCBDMTEuODIzNDE2NywxNS44MDQxODAyIDExLjk0MTYxMzQsMTUuNTE3OTM0OCAxMi4xNzg0NzQ4LDE1LjI3NjE1OTEgQzEyLjQxNTMzNjIsMTUuMDM0MTQ4NSAxMi42OTU3MzIyLDE0LjkxMzM3ODQgMTMuMDE5NDI3OSwxNC45MTMzNzg0IEMxMy4zNDMxMjM2LDE0LjkxMzM3ODQgMTMuNjIzMjg0MSwxNS4wMzQxNDk3IDEzLjg2MDM4MSwxNS4yNzYxNTkxIEwxNy4wOTMzNTM1LDE4LjU3NzcxNTcgTDMyLjg2NzU3MTEsMTguNTc3NzE1NyBMMzYuMTAwNzc4LDE1LjI3NjE1OTEgQzM2LjMzNzYzOTQsMTUuMDM0MTQ4NSAzNi42MTgwMzU0LDE0LjkxMzM3ODQgMzYuOTQxNDk2NywxNC45MTMzNzg0IEMzNy4yNjU0MjY4LDE0LjkxMzM3ODQgMzcuNTQ1NTg3MywxNS4wMzQxNDk3IDM3Ljc4MjQ0OTksMTUuMjc2MTU5MSBDMzguMDE5MzExMywxNS41MTc5MzU3IDM4LjEzNzc0MjMsMTUuODA0MTgzMiAzOC4xMzc3NDIzLDE2LjEzNDY2NCBDMzguMTM3NzQyMywxNi40NjUzODIyIDM4LjAxOTMxMTYsMTYuNzUxNjI3NiAzNy43ODI0NDk5LDE2Ljk5MzYzNzcgTDM0LjU0OTI0MywyMC4yOTQ5NTk5IEwzNC41NDkyNDMsMjUuOTA2MzcyNyBMMzguNzM1NzQyLDI1LjkwNjM3MjcgQzM5LjA1OTQzNzcsMjUuOTA2MzcyNyAzOS4zMzk1OTgyLDI2LjAyNzE0MzkgMzkuNTc2Njk1MSwyNi4yNjkxNTM0IEMzOS44MTMzMjI0LDI2LjUxMDkyOTkgMzkuOTMxNzUzMiwyNi43OTcxNzc0IDM5LjkzMTc1MzIsMjcuMTI3NjU4MyBMMzkuOTMwNTgyOSwyNy4xMjk5OTg4IEwzOS45MzA2MDEyLDI3LjEzMDIyNSBaIE0zMC45NTk4MjkxLDE2LjEzNzIzMzcgTDE4Ljk5ODc4LDE2LjEzNzIzMzcgQzE4Ljk5ODc4LDE0LjQ0NTAzMjUgMTkuNTgxMzM3MywxMy4wMDQxOTI5IDIwLjc0NjIxNzYsMTEuODE0NTA0MSBDMjEuOTExMzMyMiwxMC42MjQ4MTIzIDIzLjMyMjIwNCwxMC4wMzAwODUgMjQuOTc5Mjk4NywxMC4wMzAwODUgQzI2LjYzNjM5MzQsMTAuMDMwMDg1IDI4LjA0NzI3MSwxMC42MjQ4MTIzIDI5LjIxMjM3OTgsMTEuODE0NTA0MSBDMzAuMzc3MjYsMTMuMDA0MTk1OSAzMC45NTk4MjkxLDE0LjQ0NTI1ODEgMzAuOTU5ODI5MSwxNi4xMzcyMzM3IEwzMC45NTk4MjkxLDE2LjEzNzIzMzcgWiIgaWQ9IuW9oueKtiIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ "./MindMap/Icons/symbol/5-2.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/5-2.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgNjE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1Ny4wMDAwMDAsIC0xMTUxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i56ym5Y+3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny4wMDAwMDAsIDg3OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJsaW5lNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDI3Mi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTYxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MC4wMDAwMDAsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9IuakreWchiIgZmlsbD0iIzAxNzhGMCIgY3g9IjI1IiBjeT0iMjUiIHI9IjI1Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTM5LjUyNzg5NTcsMjEuOTcwNDMxNCBDMzkuNDQwNDA3MywyMS43NjMxNjMgMzkuMjQxNjc1MiwyMS42MjQ0MzczIDM5LjAxNjY2MzUsMjEuNjEzMzIwMiBMMzYuNjEzNDUyNSwyMS40OTU3MDk0IEMzNi4zNTM3MTEsMjAuNjc2MDc0IDM2LjAwNTgzOTIsMTkuODg2NTkwNyAzNS41NzU1MjY1LDE5LjEzOTg5NTYgTDM3LjIyMTcwNDQsMTcuMjc0MTE3NyBDMzcuMzkwMzUyMiwxNy4wODMwNDUzIDM3LjQxNTcwOTIsMTYuODA0OTk0MSAzNy4yODQ0MzY1LDE2LjU4NjYwOTMgQzM1LjQ2ODY1MDMsMTMuNTY1NjM5NCAzMy4yMTQzODkzLDEyLjYyMzA5MTEgMzMuMTE5MjI2NywxMi41ODQ0NzU5IEMzMi45MTA0Nzk5LDEyLjQ5OTY1NjkgMzIuNjcxNjkwNywxMi41NDE4NDY0IDMyLjUwNDg4MjYsMTIuNjkyNzI4OSBMMzAuNjA4MjE3MywxNC40MDkxNDIyIEMyOS45NDI1NTk2LDE0LjA3MDk0NjIgMjkuMjM0NDgwNSwxMy43OTMzNzYxIDI4LjQ5NDQ3MjYsMTMuNTgwMjY3IEwyOC4zNjY2NDQ5LDEwLjk4MTg3MzUgQzI4LjM1NTY2ODgsMTAuNzU3MjQ5MSAyOC4yMTY1ODQ1LDEwLjU1ODg1NzQgMjguMDA5MDc5NiwxMC40NzE1MTg4IEMyNy45NDMxODI5LDEwLjQ0MzgwNTcgMjYuODI3MTAzMSw5Ljk4NzI3ODkzIDI1LjAwMDAyMDcsMTAuMDAwMjcyMSBDMjMuMTcyOTM4Myw5Ljk4NzI3OTQgMjIuMDU2ODU2MywxMC40NDM4MDY3IDIxLjk5MDk2MTcsMTAuNDcxNTE4OCBDMjEuNzgzNDU2OSwxMC41NTg4NTcgMjEuNjQ0MzcyNiwxMC43NTcyNDggMjEuNjMzMzk2NCwxMC45ODE4NzM1IEwyMS41MDU1Njg3LDEzLjU4MDI2NyBDMjAuNzY1NTYwOCwxMy43OTMzNzQyIDIwLjA1NzQ4MTgsMTQuMDcwOTQ0IDE5LjM5MTgyNCwxNC40MDkxNDIyIEwxNy40OTUxNTg3LDEyLjY5MjY4ODYgQzE3LjMyODM1MzYsMTIuNTQxODA2MSAxNy4wODk1NjMzLDEyLjQ5OTYxNjYgMTYuODgwODE0NywxMi41ODQ0MzU2IEMxNi43ODU2NzQ4LDEyLjYyMzAyNTkgMTQuNTMxNDA1NywxMy41NjU1OTE3IDEyLjcxNTYwNDgsMTYuNTg2NTY5IEMxMi41ODQzMzIxLDE2LjgwNDk1NDkgMTIuNjA5Njg5MSwxNy4wODMwMDUzIDEyLjc3ODMzNywxNy4yNzQwNzc0IEwxNC40MjQ1MTQ5LDE5LjEzOTg1NTMgQzEzLjk5NDIwMjEsMTkuODg2NTUwNCAxMy42NDYzMzE4LDIwLjY3NjAzMzcgMTMuMzg2NTg4OCwyMS40OTU2NjkxIEwxMC45ODMzNzc5LDIxLjYxMzI3OTkgQzEwLjc1ODM2NzIsMjEuNjI0Mzk3MSAxMC41NTk2MzQ0LDIxLjc2MzEyMjcgMTAuNDcyMTQ1NywyMS45NzAzOTExIEMxMC40MzI0MDc1LDIyLjA2NDc2NzYgOS41MDU3MjU1NCwyNC4zMjI2MDcxIDEwLjM2MTY2MzQsMjcuNzQwNTA3OCBDMTAuNDIzNjM0NCwyNy45ODc2NDYzIDEwLjYzODUxLDI4LjE2NjIwMjEgMTAuODkzMDg0MiwyOC4xODI0Mzk1IEMxMS4xMjM3NDMsMjguMTk2OTU1OSAxMS4zNTMxMjAyLDI4LjIwMjkxNDQgMTEuNTc1MDA3MywyOC4yMDg1MTMxIEMxMi4xNDI1NTkxLDI4LjIyMzA2OTQgMTIuNjc4NjY2NSwyOC4yMzY3ODYgMTMuMTc2NDQwOSwyOC4zODk1ODggQzEzLjM0MTM2MzMsMjguNDQwMTc1NCAxMy40MjgzNzA4LDI4LjcxMjc4NzggMTMuNTQyNDU4NSwyOS4xMjI4NDQ3IEMxMy41OTI4NTI1LDI5LjMwNDE5OTYgMTMuNjQ0OTI4OCwyOS40OTE2MzQ3IDEzLjcxNzk5NjMsMjkuNjcwMzQ5MSBDMTMuNzg4MjU5NiwyOS44NDIwMjYzIDEzLjg2NTA5MjUsMzAuMDA1MjY1NyAxMy45Mzk2MDIsMzAuMTYzMDI2NSBDMTMuOTkwNTk2NywzMC4yNzExMTk4IDE0LjAzODYyNzMsMzAuMzczMjk0NCAxNC4wODQwMTM5LDMwLjQ3NjM4ODYgQzE0LjIwMDkwNTQsMzAuNzQyMjgyNSAxNC4xODkwMDgxLDMwLjg1ODMzNDggMTQuMTg0OTYyMywzMC44ODA4NDgxIEMxNC4wNjUxMDYyLDMxLjAyNDM3MjUgMTMuOTM0NzU0NywzMS4xNjM3Mzc5IDEzLjc5Njg3MjcsMzEuMzExMzQxOCBDMTMuNzI2MDA4NiwzMS4zODcyODMgMTMuNjUyNzgxMSwzMS40NjU3MDM0IDEzLjU4MDYzNTEsMzEuNTQ1MDQzNyBMMTIuNjk3NDU3NSwzMi41MTc3NjI0IEMxMi41NDYxNTUxLDMyLjY4NDI4MTIgMTIuNTA0MDUzNSwzMi45MjI4MjI4IDEyLjU4ODg1OCwzMy4xMzEwNTE5IEMxMi42Mjc2NzUsMzMuMjI1ODY4MyAxMy41NzE1Mzk4LDM1LjQ3NjI3MDMgMTYuNTk4MDIwMiwzNy4yODkxMTE2IEMxNi44MTY3ODE2LDM3LjQyMDE1OSAxNy4wOTUzMTAxLDM3LjM5NDY4NTQgMTcuMjg2NjcwMywzNy4yMjY0NDczIEwxOC4yMDU3LDM2LjQxODIwOTYgQzE4LjI5NzU1NDksMzYuMzM3NjI5NSAxOC4zODc2ODc1LDM2LjI0ODczMTcgMTguNDc0ODU1NCwzNi4xNjI4MzMgQzE4LjgyOTI1NjEsMzUuODEzNTE5NiAxOS4wMjM2MjA1LDM1LjY1NjUxOTQgMTkuMTY4OTk1OSwzNS43MTA0MjY4IEMxOS4yOTgzODU5LDM1Ljc1ODIxNDggMTkuNDM5MzkyOSwzNS44MzQxNTYgMTkuNTg4NjUxLDM1LjkxNDczNjEgQzE5LjcxODg0MjIsMzUuOTg0ODc4OCAxOS44NTM0Mzk5LDM2LjA1NzM4MDkgMTkuOTk4MzMxMiwzNi4xMjE0MDQ4IEMyMC4yMzM4MzY5LDM2LjIyNTQ1ODkgMjAuNDcyNzg2NSwzNi4zMDQ2MzkxIDIwLjcwMzcyNzUsMzYuMzgxMzQwMiBDMjAuOTcxMDAwMiwzNi40Njk5MTgxIDIxLjIyMzU2OTUsMzYuNTUzNjU3NCAyMS40NDA0NTA4LDM2LjY2NTY2OTQgQzIxLjQ5OTg5ODMsMzYuNjk2MjYxOCAyMS41MTU4ODE4LDM2LjcwNDUzOTYgMjEuNTMyNzg2NCwzNi45NzE2NzMzIEMyMS41NjEyMjgyLDM3LjQyMDk2MTcgMjEuNTgxNzM4NSwzNy44ODEyODg4IDIxLjYwMTQ0NzQsMzguMzI2NjU3IEMyMS42MTE3ODI2LDM4LjU1NzIzOTYgMjEuNjIyMTE3OCwzOC43ODc5NDM5IDIxLjYzMzM3NDMsMzkuMDE4MzYzOSBDMjEuNjQ0NTEwNiwzOS4yNDI4MjgyIDIxLjc4MzQzNDcsMzkuNDQxMjE4OCAyMS45OTEwOTk2LDM5LjUyODU1NzMgQzIyLjA1NTg3NDgsMzkuNTU1ODcwNiAyMy4xNDA5MDg4LDQwIDI0LjkyMTk2NTksNDAgQzI0LjkzNDgyNDgsNDAgMjUuMDY1MTc2Myw0MCAyNS4wNzgwMzUyLDQwIEMyNi44NTkwOTI0LDQwIDI3Ljk0NDEyNjMsMzkuNTU1ODcwMSAyOC4wMDg5MDE1LDM5LjUyODU1NzMgQzI4LjIxNjU2NjQsMzkuNDQxMjE5MiAyOC4zNTU0OTA2LDM5LjI0MjgyODIgMjguMzY2NjI2OCwzOS4wMTgzNjM5IEMyOC4zNzc4ODM0LDM4Ljc4Nzk0MSAyOC4zODgyMTg2LDM4LjU1NzIzODIgMjguMzk4NTUzNywzOC4zMjY2NTcgQzI4LjQxODI2MjcsMzcuODgxMjg4OCAyOC40Mzg3NzI3LDM3LjQyMDk2MTcgMjguNDY3MjE0NywzNi45NzE2NzMzIEMyOC40ODQxMTk1LDM2LjcwNDUzOTYgMjguNTAwMTAzLDM2LjY5NjI2MTkgMjguNTU5NTUwNCwzNi42NjU2Njk0IEMyOC43NzY0MjkxLDM2LjU1MzY1NzEgMjkuMDI4OTk5OCwzNi40Njk5MTgxIDI5LjI5NjI3MzYsMzYuMzgxMzQwMiBDMjkuNTI3MjEyOCwzNi4zMDQ2MzkxIDI5Ljc2NjE2MzUsMzYuMjI1NDU4OSAzMC4wMDE2NywzNi4xMjE0MDQ4IEMzMC4xNDY1NjI3LDM2LjA1NzM4MDkgMzAuMjgxMTYwNCwzNS45ODQ4Nzg4IDMwLjQxMTM1MDEsMzUuOTE0NzM2MSBDMzAuNTYwNjA5NCwzNS44MzQxNTYgMzAuNzAxNjE2MywzNS43NTgyMTUyIDMwLjgzMTAwNTIsMzUuNzEwNDI2OCBDMzAuOTc2Mzc4OCwzNS42NTY1MjAxIDMxLjE3MDc0NDMsMzUuODEzNTIxNCAzMS41MjUxNDU3LDM2LjE2MjgzMyBDMzEuNjEyMzEzNywzNi4yNDg3MzE3IDMxLjcwMjQ0NjIsMzYuMzM3NjI5NSAzMS43OTQzMDExLDM2LjQxODIwOTYgTDMyLjcxMzMzMDgsMzcuMjI2NDQ3MyBDMzIuOTA0NjkxNywzNy4zOTQ2ODU0IDMzLjE4MzIyMDcsMzcuNDIwMTU5IDMzLjQwMTk4MSwzNy4yODkxMTE2IEMzNi40Mjg0NjUsMzUuNDc2MjgxMyAzNy4zNzIzMTQ4LDMzLjIyNTg2OCAzNy40MTExNDMyLDMzLjEzMTA1MTkgQzM3LjQ5NTk0NzcsMzIuOTIyODIzNSAzNy40NTM4NDYsMzIuNjg0Mjg0MSAzNy4zMDI1NDM2LDMyLjUxNzc2MjQgTDM2LjQxOTM2NiwzMS41NDUwNDM3IEMzNi4zNDcyMiwzMS40NjU3MDM0IDM2LjI3Mzk5MjUsMzEuMzg3MjgzIDM2LjIwMzEyODUsMzEuMzExMzQxOCBDMzYuMDY1MjQ2MSwzMS4xNjM3Mzg2IDM1LjkzNDg5NDYsMzEuMDI0MzczMyAzNS44MTUwMzg4LDMwLjg4MDg0ODEgQzM1LjgxMDk5MjksMzAuODU4MzMzNyAzNS43OTkwOTU0LDMwLjc0MjI4MjUgMzUuOTE1OTg3MiwzMC40NzYzODg2IEMzNS45NjEzNzM5LDMwLjM3MzI5NCAzNi4wMDk0MDQ0LDMwLjI3MTExOTQgMzYuMDYwMzk5MiwzMC4xNjMwMjY1IEMzNi4xMzQ5MDg2LDMwLjAwNTI2NTcgMzYuMjExNzQxNSwyOS44NDIwMjYzIDM2LjI4MjAwNDgsMjkuNjcwMzQ5MSBDMzYuMzU1MDcyMywyOS40OTE2MzM2IDM2LjQwNzE0ODcsMjkuMzA0MiAzNi40NTc1NDI3LDI5LjEyMjg0NDcgQzM2LjU3MTYzMDMsMjguNzEyNzg3MSAzNi42NTg2Mzc5LDI4LjQ0MDE3MjUgMzYuODIzNTYwMywyOC4zODk1ODggQzM3LjMyMTMzMSwyOC4yMzY3ODYxIDM3Ljg1NzQzODQsMjguMjIzMDY5MiAzOC40MjQ5OTM4LDI4LjIwODUxMzEgQzM4LjY0Njg3OTgsMjguMjAyOTE0NCAzOC44NzYyNTQ4LDI4LjE5Njk1NTkgMzkuMTA2OTE2OSwyOC4xODI0Mzk1IEMzOS4zNjE0OTA3LDI4LjE2NjIwMzYgMzkuNTc2MzY2NCwyNy45ODc2NDc3IDM5LjYzODMzNzcsMjcuNzQwNTA3OCBDNDAuNDk0MjczLDI0LjMyMjYzNjUgMzkuNTY3NTkzNywyMi4wNjQ4MDQyIDM5LjUyNzg1NTUsMjEuOTcwNDI3NyBMMzkuNTI3ODk1NywyMS45NzA0MzE0IFogTTMwLjE3MDc2MTcsMzAuMTYxOTEyNSBDMjguNzg5NjUxOSwzMS41NDA2NTE1IDI2Ljk1MzIzNjcsMzIuMjk5OTgyNiAyNS4wMDAwNSwzMi4yOTk5ODI2IEMyMy4wNDY4NTk3LDMyLjI5OTk4MjYgMjEuMjEwMzg5NSwzMS41NDA2NTE1IDE5LjgyOTMzODQsMzAuMTYxOTEyNSBDMTguNDQ4MjI4NiwyOC43ODMyMTM4IDE3LjY4NzU5MTcsMjYuOTQ5OTEwOCAxNy42ODc1OTE3LDI1LjAwMDA3NyBDMTcuNjg3NTkxNywyMy4wNTAyMzk1IDE4LjQ0ODIyODYsMjEuMjE3MTA1IDE5LjgyOTMzODQsMTkuODM4Mzg4IEMyMS4yMTA1NjU2LDE4LjQ1OTQ5MTUgMjMuMDQ2ODYzNCwxNy43MDAzMTc5IDI1LjAwMDA1LDE3LjcwMDMxNzkgQzI2Ljk1MzI0MDQsMTcuNzAwMzE3OSAyOC43ODk2NzM5LDE4LjQ1OTQ4NzkgMzAuMTcwNzYxNywxOS44MzgzODggQzMxLjU1MTgzMTEsMjEuMjE3MDg2NyAzMi4zMTI1MDg0LDIzLjA1MDIzMjIgMzIuMzEyNTA4NCwyNS4wMDAwNzcgQzMyLjMxMjUwODQsMjYuOTQ5OTE0NSAzMS41NTE5OTI2LDI4Ljc4MzIzMjIgMzAuMTcwNzYxNywzMC4xNjE5MTI1IFoiIGlkPSLlvaLnirYiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/symbol/5-3.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/5-3.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgNjI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxNy4wMDAwMDAsIC0xMTUxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i56ym5Y+3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny4wMDAwMDAsIDg3OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJsaW5lNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDI3Mi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTYyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjAuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIYiIGZpbGw9IiMwMTc4RjAiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOC44MjU2NzI5LDEyLjU3Njg2MiBDMTguODI1NjcyOSwxMi41NzY4NjIgMjEuNjgyNjkzMiwxNC41MzAzNjIyIDIyLjg1NTQ4MzIsMTUuNzA1NjA1MyBDMjIuODU1NDgzMiwxNS43MDU2MDUzIDI0LjI0ODQ4MDQsMTQuOTM5MjY5MSAyNy4xODEzNTYzLDE1LjYzNDY1NjEgQzI3LjE4MTM1NjMsMTUuNjM0NjU2MSAzMS44NDc1MjUxLDE0LjEwMTkwNjkgMzEuMTQ0OTcwMywxMC45MzY1NTgyIEMzMS4xNDQ5NzAzLDEwLjkzNjU1ODIgMzAuODAyMjk4MSwxMS42ODMxMTYxIDI5LjcwNTQ3ODUsMTEuOTQ3NjMzIEMyOS43MDU0Nzg1LDExLjk0NzYzMyAyOS40OTcyMzA0LDEwLjAxMTA3NDggMjguNTYxOTM0NSw5LjE3NjM1NzM5IEMyOC41NjE5MzQ1LDkuMTc2MzU3MzkgMjcuMzcyMjAyNSw4LjM4MzA3NDk2IDI1LjM5NDIwOTMsMTAuMTcwMTgzNiBDMjUuMzk0MjA5MywxMC4xNzAxODM2IDI0LjY4OTA0ODEsOSAyMi45MzEyNjIxLDkgQzIyLjkzMTI2MjEsOSAyMS41MjM1MDc3LDEwLjA5OTE5NiAyMS42NTU3MDg3LDExLjgxMjkwMjIgQzIxLjY1MzQwODksMTEuODEyOTAyMiAxOS45OTg1MDEyLDExLjE2NjY5MjkgMTguODI1NjcyOSwxMi41NzY4NjIgTDE4LjgyNTY3MjksMTIuNTc2ODYyIEwxOC44MjU2NzI5LDEyLjU3Njg2MiBaIE0yMy4zNzkzODA4LDI1LjE3MDE0MzkgQzIzLjM3OTM4MDgsMjUuMzQ4OTE2MSAyMy40NjI1MTkxLDI1LjUzNzQyNDIgMjMuNjI4OTQ4OSwyNS43MzgxOTc5IEMyMy43OTc5ODUyLDI1LjkzODkzMzQgMjQuMTA2MzUxOSwyNi4wOTA2NDQ0IDI0LjU1Njg0NzEsMjYuMTkxMTA3OSBMMjQuNTU2ODQ3MSwyNC4yODE0MTkyIEMyNC4yMzM3MjMzLDI0LjI5NjI1MyAyMy45NTQ3MTc1LDI0LjM4MTk1OTQgMjMuNzI0NTgyOCwyNC41MzM1OTM4IEMyMy40OTQ0NDgxLDI0LjY4NzkxMTMgMjMuMzc5MzgwOCwyNC45MDA4MzU3IDIzLjM3OTM4MDgsMjUuMTcwMTQzOSBMMjMuMzc5MzgwOCwyNS4xNzAxNDM5IEwyMy4zNzkzODA4LDI1LjE3MDE0MzkgWiBNMjUuNzc2MTcsMjguOTc0NzI1OSBMMjUuNzc2MTcsMzEuMjUxMzg4MiBDMjYuMTI4NTc4MiwzMS4xODI4NTM3IDI2LjQyMjQ5NDQsMzEuMDcyODA3NiAyNi42NTk5MTE4LDMwLjkxNjE1MiBDMjYuODk5ODk3NCwzMC43NjQyNDkzIDI3LjAxNzMwMjksMzAuNTE0NDg5NSAyNy4wMTczMDI5LDMwLjE2NjkxMSBDMjcuMDE3MzAyOSwyOS45MDAwMTc2IDI2LjkxOTQ0NTgsMjkuNjc0NzUwOCAyNi43MzA4MjI3LDI5LjQ5ODYyMzQgQzI2LjUzOTkzODIsMjkuMzIyMzQyNyAyNi4yMjE3MjA2LDI5LjE1MDg5MTYgMjUuNzc2MTcsMjguOTc0NzI1OSBMMjUuNzc2MTcsMjguOTc0NzI1OSBaIE0zNS43NDUwNTc4LDI5LjE5MDA2NTEgQzMzLjU3NTk4ODUsMjAuMTQ4OTYwNSAzMC44MjE3MzE1LDE2LjI2ODU5OTggMjUuMDU2MzY2NywxNi4yNjg1OTk4IEMxOC44MjU2NzI5LDE2LjI2ODU5OTggMTYuNjA3NjU1OCwyMS41NDk0MzIxIDE0LjM3MDAxMzcsMjguODM1MjAzOCBDMTIuMzgyMTMxMywzNS4zMDU3Mjk5IDE4Ljc1NzEzODQsMzguOTk5OTk4NyAyNS4wNTYzNjY3LDM4Ljk5OTk5ODcgQzMxLjM2MDM4NjIsMzkuMDAyMzczOSAzNy4zMTY4MjcyLDM1Ljc2ODI5OTEgMzUuNzQ1MDU3OCwyOS4xOTAwNjUxIEwzNS43NDUwNTc4LDI5LjE5MDA2NTEgTDM1Ljc0NTA1NzgsMjkuMTkwMDY1MSBaIE0yOS4wMjI1MTA1LDMxLjMwNTQzMzggQzI4Ljc4MDAzMzUsMzEuNzUwODY5NCAyOC4zOTA4MjgzLDMyLjEzNTIwNjYgMjcuODQ5NzIwNSwzMi40NjA4NjAyIEMyNy4zMDg3Mjc2LDMyLjc4OTA4MiAyNi42MjA2MjMzLDMyLjk5NDY4NTMgMjUuNzc2MTcsMzMuMDY4MTI2MSBMMjUuNzc2MTcsMzQuNDA5NzIyNCBMMjQuNTU2ODA4OCwzNC40MDk3MjI0IEwyNC41NTY4MDg4LDMzLjA2ODEyNjEgQzI0LjA0MjgwMDQsMzMuMDA5MjEyNSAyMy40NzcyMzc5LDMyLjg3NDU5NjcgMjIuODY1MTQyNCwzMi42NzQwMTQ2IEMyMi4yNTMxMjM3LDMyLjQ3MzE2NDIgMjEuNjkwMTY3NiwzMi4yMTg1NzQ5IDIxLjE4MDc5NzIsMzEuOTA3NjAxNyBMMjEuMTgwNzk3MiwyOS43MjYzODE3IEMyMS41MDg5ODA2LDI5Ljk3ODU1NjIgMjEuODU2NTk3NCwzMC4yMDYyMzc4IDIyLjIyMzc2MjcsMzAuNDE5MTIzOSBDMjIuNTg4NTg5OCwzMC42MzIwODY3IDIyLjk2ODEzNTgsMzAuODA4NDA1NyAyMy4zNTczNDA5LDMwLjk0NzkyNzcgQzIzLjc0NjYyMjcsMzEuMDkyMzE3NyAyNC4xNDc5Nzg2LDMxLjE4Nzk1MTYgMjQuNTU2ODQ3MSwzMS4yMzY4NjEgTDI0LjU1Njg0NzEsMjguNjczNTY1MiBDMjMuNTgwMDM5NiwyOC40Mzg1MjQzIDIyLjgzNTg5NjUsMjguMTM5ODU1MSAyMi4zMTkyNDMzLDI3Ljc5NzEwNjIgQzIxLjgwNTE5NjYsMjcuNDU0Mzk1NiAyMS40NjAwNzEyLDI3LjA5NDQ3NDggMjEuMjg4NjIwMSwyNi43MTI3MDU3IEMyMS4xMTczNjA2LDI2LjMzNTU3NDYgMjEuMDI5MTYyOCwyNS45MzkwMSAyMS4wMjkxNjI4LDI1LjUzMjU5NDYgQzIxLjAyOTE2MjgsMjUuMTYwNTk5NyAyMS4xMjQ2MDUsMjQuNzYxMzkwNCAyMS4zMTU0ODk2LDI0LjM0MDM3MTEgQzIxLjUwNjUyNzUsMjMuOTE5MTYwMiAyMS44NjM4ODAyLDIzLjUyOTkxNjggMjIuMzkwMjMwOSwyMy4xNzc0NzAzIEMyMi45MTY2MTk5LDIyLjgyNDc5MzkgMjMuNjM4ODc2NSwyMi41OTQ3MzU4IDI0LjU1Njg0NzEsMjIuNDg5NTU3NyBMMjQuNTU2ODQ3MSwyMS44MTEzODA5IEwyNS43NzYyMDg0LDIxLjgxMTM4MDkgTDI1Ljc3NjIwODQsMjIuNDg3MTgxMiBDMjYuMzQ5MDkyLDIyLjU1ODEzMDQgMjYuODgwMzEwNiwyMi42ODUzMTAyIDI3LjM2NzQ4NzksMjIuODY2NDk3MSBDMjcuODU3MTk0OSwyMy4wNDc2ODQxIDI4LjM4ODMzNjksMjMuMzA5NzQ3OSAyOC45NjEyMjA1LDIzLjY1MjQ5NjggTDI4Ljk2MTIyMDUsMjUuOTI5MTU5MSBDMjguNTk2NDcsMjUuNjM3OTY0NCAyOC4xMzEzMzI3LDI1LjM0MTc0ODQgMjcuNTY4MjIzMywyNS4wNDI4ODc2IEMyNy4wMDI2NjA3LDI0Ljc0NDI1NjggMjYuNDA3Nzc1NiwyNC41MjYzODc3IDI1Ljc3NjIwODQsMjQuMzg5MzU3MiBMMjUuNzc2MjA4NCwyNi40ODk5MzA0IEMyNi44ODAzMTA2LDI2Ljg0NzE2ODEgMjcuNzU5MTA3OCwyNy4yODc5NjU4IDI4LjQxMDQxNTEsMjcuODA3MDMzNyBDMjkuMDYzOTgzOCwyOC4zMjg0MDE1IDI5LjM4NDg0NjIsMjkuMDUwNjE5NyAyOS4zODQ4NDYyLDI5Ljk2Mzc5OTEgQzI5LjM4NDg0NjIsMzAuNDE2NzA5MSAyOS4yNjIyNjYxLDMwLjg2NzE2NTkgMjkuMDIyNTEwNSwzMS4zMDU0MzM4IEwyOS4wMjI1MTA1LDMxLjMwNTQzMzggTDI5LjAyMjUxMDUsMzEuMzA1NDMzOCBaIiBpZD0i5b2i54q2IiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/symbol/5-4.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/5-4.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgNjM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3Ny4wMDAwMDAsIC0xMTUxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i56ym5Y+3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny4wMDAwMDAsIDg3OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJsaW5lNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDI3Mi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTYzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODAuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIYiIGZpbGw9IiMwMTc4RjAiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOC41MTMyNjIzLDE3Ljk1ODQ1NzIgTDIzLjUzNTYyNTIsMTQuMDMzMTg5NSBDMjQuOTEyMDc0MiwxMi45NzY2MDgyIDI2LjczNDMxMiwxMi43MDQ1MDM3IDI4LjMyMjA4OTUsMTMuMzM3MDAzNCBMMzYuMzA3MjMwMywxNi40NzYzNDkxIEMzNi44Mzg0MTYzLDE2LjY4OTExMjUgMzcuMzkyNzU3OSwxNi43ODAyOTY4IDM3LjkyMzk0MzksMTYuNzgwMjk2OCBMMzkuMjQzOTQ1NCwxNi43ODAyOTY4IEMzOS42MjYwNTExLDE2Ljc4MDI5NjggMzkuOTQ3MzY3MywxNy4wODI3OTcxIDM5Ljk0NzM2NzMsMTcuNDc1MDM0NSBMMzkuOTQ3MzY3MywyNy41NjMyMTU0IEMzOS45NDczNjczLDI3Ljk1Njg5OSAzOS43MDU2NTY2LDI4LjE5NzE2MzUgMzkuMjIzNjgzNCwyOC40Mzg4NzMyIEMzNy41MTI4OTE5LDI4Ljk3MDA1OTIgMzYuNDgwOTE4MSwyOS4xMDE3Njc2IDM2LjEzMDY1MjMsMjguODM2ODk4OSBDMzUuNzgwMzg5OSwyOC41NzA1ODI2IDMyLjY3ODY3NDYsMjQuNjgyOTU4IDI2LjgyNDA1MTIsMTcuMTc1NDQ5MiBMMjYuODI0MDUxMiwxNy4xNzU0NDkyIEMyNi41OTE1MjU1LDE2Ljg4MDk0NyAyNi4xNzY4MzYsMTYuODA0MTk4OCAyNS44NTQzMTIxLDE2Ljk5NTk3NTIgTDIxLjU5OTA0NCwxOS40NDM0NzY5IEwyMS41OTkwNDQxLDE5LjQ0MzQ3NjkgQzIwLjc0NDY4OTgsMTkuOTI5MjU3MyAxOS43MTE2MzM5LDE5Ljk4NTAwOTMgMTguODA5OTYwOCwxOS41OTQwMDM2IEwxOC44MDk5NjA2LDE5LjU5NDAwMzYgQzE4LjMyNTU4MTMsMTkuMzYxMzQ3NSAxOC4xMDcwOTE3LDE4Ljc5MDk5NDcgMTguMzEyMDY2NSwxOC4yOTQyNjQxIEMxOC4zMDc3MjQzLDE4LjE3MTIzNzUgMTguMzk0NTY2NSwxOC4wNTExMDU5IDE4LjUxNDY5ODIsMTcuOTU4NDc0MSBMMTguNTEzMjYyMywxNy45NTg0NTcyIFogTTEzLjM2NjQwMjksMjguMzk1NDMxNyBMMTQuNDMwMjE5OSwyNy4wNTM3MTk3IEwxNC40MzAyMTk4LDI3LjA1MzcxOTggQzE1LjM0MTkxMDMsMjUuOTAyNTkyNCAxNy4wMTQxNTIsMjUuNzA4NDg2NSAxOC4xNjUyODI3LDI2LjYyMDE3NzEgQzE4LjE5Mjk0NTIsMjYuNjQyMDg1NiAxOC4yMjAxNjg3LDI2LjY2NDU0MjYgMTguMjQ2OTM3MSwyNi42ODc1MzUxIEMxOC42NjA4ODYxLDI3LjA1MzcyMDggMjMuNjg5MDYsMzEuNjYzNTkzNSAyNC4xMDE1NjA1LDMyLjA5MDU3OSBDMjQuOTU5ODQ5OCwzMy4wMzU3MTA1IDI1LjEzNzg3NjQsMzQuNDQyNTU0MyAyNC40ODgwMDgzLDM1LjU2ODYwOTMgTDI0LjMzODkyOTEsMzUuODQzNjA5OCBMMjQuMzM4OTI5MSwzNS44NzU0NTE5IEMyNS4wNDgxNDE2LDM2LjM2MzIxNjcgMzMuNzcyODc2MSwzMi4zMjk0MDY0IDM0LjM2NjMyMDUsMzEuOTY2MDkzOSBMMzQuMzY2MzIwNCwzMS45NjYwOTQgQzM1LjEyNTE5MjQsMzEuNDg2NTY5IDM1LjM1MTY0NywzMC40ODI2NDkzIDM0Ljg3MjEyMiwyOS43MjM3NzM5IEMzNC44Mjc0NDcxLDI5LjY1MzA3MzkgMzQuNzc3MzgyMiwyOS41ODU5MjY5IDM0LjcyMjM3MzEsMjkuNTIyOTMxNyBMMzMuNzc3MjQxNiwyOC4zMzE3NDQ5IEwyNi4xMTYzMDAzLDE4LjcxOTc3MTQgTDI2LjExNjMwMDMsMTguNzE5NzcxNCBDMjYuMDM0NjEwNiwxOC42MjYwMDc2IDI1Ljg5OTExNzEsMTguNjAwODI3NCAyNS43ODkxOTQ1LDE4LjY1ODk4MTggTDIyLjEyMTU3LDIwLjc2NDkwNTMgTDIyLjEyMTU3LDIwLjc2NDkwNTMgQzIwLjk1MTY0NjEsMjEuNDQyMjEwMSAxOS41Mzg0MjgyLDIxLjU1NDk2OTIgMTguMjc1OTE5LDIxLjA3MTc0OCBDMTcuNTY2NzA2NSwyMC44MjU2OTUyIDE3LjAzMjYyNjksMjAuMjQ2NzQ3IDE2Ljc2Nzc1ODIsMTkuNTQ0NzczNyBMMTYuNzY3NzU4MiwxOS41NDQ3NzM3IEMxNi41NTQ3NDk1LDE4LjgxNjgwODcgMTYuNjUwNTMxNywxOC4wMzMyNzgzIDE3LjAzMjYyNjksMTcuMzc4MDYwNiBDMTcuMTE5NDY5MSwxNy4xOTU2OTIgMTcuMDYxNTc0MywxNi45ODAwMzUgMTYuODgzNTQ3NywxNi44OTAyOTU4IEMxNi44MjU2NTI4LDE2Ljg1OTg4NzMgMTYuNzY0ODYzMiwxNi44NTk4ODczIDE2LjcwNTUyMTIsMTYuODU5ODg3MyBMMTEuNzA5MjEwOSwxNi44NTk4ODczIEwxMS43MDkyMTA4LDE2Ljg1OTg4NzMgQzExLjMxOTkzMDUsMTYuODU3NTAyMSAxMS4wMDI0MTAzLDE3LjE3MTEzMjMgMTEsMTcuNTYwNDEyMyBDMTEsMTcuNTYxMzgyMSAxMSwxNy41NjIzNTIgMTEsMTcuNTYzMzIxOSBMMTEsMjcuNzI2NzQzNCBDMTEuMTQ5MDc5MiwyOC4wODg1ODcxIDExLjQ3MTg0MTUsMjguMzk1NDI4NCAxMS44NTgyODkzLDI4LjM5NTQyODQgTDEzLjM2NjQ1MDEsMjguMzk1NDI4NCBMMTMuMzY2NDAyOSwyOC4zOTU0MzE3IFogTTE1LjY4Nzk4MzQsMjguMDA4OTgzOSBMMTQuNjY2MTM5LDI5LjMwMDAzOTIgQzE0LjIyOTAzNDMsMjkuODcwMzA0MSAxNC4yODY5MjY5LDMwLjcxMTIyNSAxNC44NDI3MTgsMzEuMTYyODA0NSBMMTQuODcxNjY1NCwzMS4xNjI4MDQ1IEwxNS4wMTY0MDI1LDMxLjI4MTQ4OSBDMTUuMjg5OTU1NSwzMS41MDE0ODkxIDE3LjM1ODI0ODUsMzIuODcyMTQ5OSAyMS4yMjEyNzgyLDM1LjM5MjAwODggQzIxLjgwNDU2OTUsMzUuODQwNjk0NiAyMi42MjIzMzEzLDM1Ljc1Mzg1MjQgMjMuMDU5NDM5NCwzNS4xNDg4NTA2IEwyMy4wNTk0MzkzLDM1LjE0ODg1MDcgQzIzLjA4OTgzMDgsMzUuMDkyOTAxMiAyMy4xMjk0NjkxLDM1LjA0MjQ5NzEgMjMuMTc2Njc2MywzNC45OTk3NzE0IEwyMy4zNTE4MDgyLDM0LjY2OTc3MTEgTDIzLjM1MTgwODIsMzQuNjY5NzcxIEMyMy42Nzk0ODE1LDM0LjExMzU3NzIgMjMuNTgzNzc2LDMzLjQwNTM1NTMgMjMuMTIwMjI4OSwzMi45NTYwODU5IEMyMi43Mzk1NzE3LDMyLjU5NDI0MjMgMTcuOTkwNzM3OSwyOC4wMDg5NjM2IDE3LjM3ODUwMDQsMjcuNjQ3MTQzNyBMMTcuMzc4NTAwNCwyNy42NDcxNDM3IEMxNi44MDU3MTE2LDI3LjMxNTU1OTggMTYuMDc0ODQ5NywyNy40NzE5OTM4IDE1LjY4Nzk3MSwyOC4wMDg5ODc0IEwxNS42ODc5ODM0LDI4LjAwODk4MzkgWiIgaWQ9IuW9oueKtiIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ "./MindMap/Icons/symbol/5-5.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/5-5.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgNjQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMzNy4wMDAwMDAsIC0xMTUxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i56ym5Y+3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny4wMDAwMDAsIDg3OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJsaW5lNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDI3Mi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTY0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNDAuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIYiIGZpbGw9IiMwMTc4RjAiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNC43NzIxMzE3LDEwIEwxMiwxNS40ODMyMDMxIEwxMiwyMy43OTkxOTY0IEMxMiwyNS42NjA0MzUzIDEyLjMxOTg1NDksMjcuNDkyODEyNSAxMi45NTA1NTgsMjkuMjQ1IEMxMy41NzYzMzkzLDMwLjk4NTkzNzUgMTQuNDQ0OTY2NSwzMi41ODIwOTgyIDE1LjUzMDMyMzcsMzMuOTg2NjA3MSBDMTYuNjU4MTY5NiwzNS40NTUyNjc5IDE3Ljk5NzAyMDEsMzYuNzE4NDE1MiAxOS41MDk2MDk0LDM3Ljc0MDg1OTQgQzIxLjAzMjk3OTksMzguNzcwOTA0IDIyLjcxOTkxMDcsMzkuNTExMDYwMyAyNC41MjM1OTM4LDM5Ljk0MDgwMzYgTDI0Ljc3MjEzMTcsNDAgTDI1LjAyMDY2OTYsMzkuOTQwODAzNiBDMjYuODIzNjQ5NiwzOS41MTEyNjEyIDI4LjUxMDU0NjksMzguNzcxMTA0OSAzMC4wMzQ4NTQ5LDM3Ljc0MDgyNTkgQzMxLjU0Njg3NSwzNi43MTgyODEzIDMyLjg4NTYyNSwzNS40NTUzMDEzIDM0LjAxMjA5ODIsMzMuOTg5MTg1MyBDMzUuMDk4MzkyOSwzMi41ODM0NzEgMzUuOTY2OTg2NiwzMC45ODczNzcyIDM2LjU5MzgwNTgsMjkuMjQ1MTY3NCBDMzcuMjI0NTc1OSwyNy40OTEyNzIzIDM3LjU0NDM5NzMsMjUuNjU4OTYyMSAzNy41NDQzOTczLDIzLjc5OTE5NjQgTDM3LjU0NDM5NzMsMTUuNDgzMjAzMSBMMjQuNzcyMTMxNywxMCBaIE0zMi4zMTMxNDczLDMyLjY4IEMzMS4zMjUyMjMyLDMzLjk2NTc0NzggMzAuMTU0NDUzMSwzNS4wNzA2NTg1IDI4LjgzMzU0OTEsMzUuOTYzOTYyMSBDMjcuNTk0NDc1NCwzNi44MDE0NTA5IDI2LjIyOTQ0MiwzNy40MTU5ODIxIDI0Ljc3MjE5ODcsMzcuNzkyNTg5MyBMMjQuNzcyMTk4NywyNSBMMTQuMTk3Mzk5NiwyNS4wMTA0NDY0IEwxNC4xOTczOTk0LDI1LjAxMDQ0NTIgQzE0LjE2MjM4NTIsMjQuNjA3NjM1IDE0LjE0NDg2NiwyNC4yMDM0OTIxIDE0LjE0NDg2NiwyMy43OTkxNjE3IEwxNC4xNDQ4NjYsMTYuODk2NTUwMSBMMjQuNzcyMTY1MSwxMi4zMzQxMzk0IEwyNC43NzIyMzIsMTIuMzM0MTM5NCBMMjQuNzcyMjMyLDI0Ljk5OTk5ODggTDM1LjM0ODkzOTYsMjQuOTg2NTcyNSBDMzUuMjQ2MjgzNCwyNi4xODk5NTQxIDM0Ljk4NzQ5OTksMjcuMzczODE1OCAzNC41NzU2MDI2LDI4LjUxOTE3MjkgQzM0LjAyNDY4NzQsMzAuMDUwMjc3OCAzMy4yNjQxNDA1LDMxLjQ0OTM5NjEgMzIuMzEzMTQ3MiwzMi42Nzk5OTg4IEwzMi4zMTMxNDczLDMyLjY4IFoiIGlkPSLlvaLnirYiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/symbol/5-6.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/5-6.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgNjU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM5Ny4wMDAwMDAsIC0xMTUxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i56ym5Y+3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny4wMDAwMDAsIDg3OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJsaW5lNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDI3Mi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTY1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMDAuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIYiIGZpbGw9IiMwMTc4RjAiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOS44MTYyNTk4LDIzLjQwNTg1MTUgTDIzLjU2OTA5MTQsMjMuNDA1ODUxNSBMMjMuNDkzNTgxNywzOS45Njk5OTI1IEwxMi40NDY1MTQsMzUuNjc4OTE5NyBMMTAsMTQuMTI2MDMxNSBMMTguMDI2NjgwMSwxMCBMMzIuMTQ2OTkyMiwxMCBMNDAsMTQuMDY2MDE2NSBMMzcuNTk4NzkxOCwzNS43Mzg5MzQ3IEwyNi40NzYyMTQ0LDQwIEwyNi40MDA3MDQ4LDIzLjU1NTg4OSBMMzAuNTkxNDkyNiwyMy42MzA5MDc3IEwzMC45MjM3MzUyLDIwLjMxNTA3ODggTDE5LjE4OTUyOTMsMjAuMjU1MDYzOCBMMTkuODE2MjU5OCwyMy40MDU4NTE1IFogTTEzLjAxMjgzNjYsMTYuMTk2NTQ5MSBMMTUuMDUxNTk4MywzNC4yMzg1NTk2IEwyMS4wMTY4NjM4LDM2LjU4NjY0NjcgTDIwLjk0MTM1NDEsMjYuODk0MjIzNiBMMTcuMDkwMzU5OSwyNi44MzQyMDg2IEwxNi4wNjM0MjgxLDE4LjExNzAyOTMgTDMzLjk1MTY3MzgsMTguMTE3MDI5MyBMMzIuOTMyMjkzLDI2LjkyNDIzMTEgTDI5LjIyNDc2NzIsMjYuOTI0MjMxMSBMMjkuMzAwMjc2OSwzNi42NDY2NjE3IEwzNS4xMTQ1MjMsMzQuMTc4NTQ0NiBMMzcuMDAyMjY1MywxNi4yNzkwNjk4IEwzMS4zMzE0ODc1LDEzLjQyODM1NzEgTDE4LjUzMjU5NSwxMy40MjgzNTcxIEwxMy4wMTI4MzY2LDE2LjE5NjU0OTEgWiIgaWQ9IuW9oueKtiIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ "./MindMap/Icons/symbol/5-7.svg":
/*!**************************************!*\
  !*** ./MindMap/Icons/symbol/5-7.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgNjY8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1Ny4wMDAwMDAsIC0xMTUxLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i56ym5Y+3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5Ny4wMDAwMDAsIDg3OS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJsaW5lNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDI3Mi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTY2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNjAuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIYiIGZpbGw9IiMwMTc4RjAiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNC43NDkzMTAyLDEwLjU2MjUwMjQgQzMxLjM5Mzk1MTcsMTAuNTYyNTAyNCAzNi43ODEyNzI1LDE1LjcxMzQ3MzIgMzYuNzgxMjcyNSwyMi4wNjU2OTA2IEMzNi43ODEyNzI1LDMxLjg0MDExNSAyNC43NDkzMTAyLDM5LjQzNzUzNiAyNC43NDkzMTAyLDM5LjQzNzUzNiBDMjQuNzQ5MzEwMiwzOS40Mzc1MzYgMTIuNzE4NzY1OSwzMi43NTU5OTUgMTIuNzE4NzY1OSwyMi4wNjU2OTA2IEMxMi43MTg3NjU5LDE1LjcxMzQ3MzIgMTguMTA0NjY4NywxMC41NjI1MDI0IDI0Ljc0OTMxMDIsMTAuNTYyNTAyNCBaIE0yNC41OTI0OTU2LDI2LjM3NTcwODMgQzI2Ljk2ODQ2NjEsMjYuMzc1NzA4MyAyOC44OTQ1ODU1LDI0LjQ1MTg0NDcgMjguODk0NTg1NSwyMi4wNzg2MTM1IEMyOC44OTQ1ODU1LDE5LjcwNTQxNDQgMjYuOTY4NDY2MSwxNy43ODE1MTg2IDI0LjU5MjQ5NTYsMTcuNzgxNTE4NiBDMjIuMjE2NTI1LDE3Ljc4MTUxODYgMjAuMjkwNDA1NiwxOS43MDU0MTQ0IDIwLjI5MDQwNTYsMjIuMDc4NjEzNSBDMjAuMjkwNDA1NiwyNC40NTE4NDQ3IDIyLjIxNjUyNSwyNi4zNzU3MDgzIDI0LjU5MjQ5NTYsMjYuMzc1NzA4MyBMMjQuNTkyNDk1NiwyNi4zNzU3MDgzIFoiIGlkPSLlvaLnirYiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/task/1.svg":
/*!**********************************!*\
  !*** ./MindMap/Icons/task/1.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7ov5vluqYyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9InhtaW5kLeWbvuaghyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imljb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05Ny4wMDAwMDAsIC0zNjEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLku7vliqEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgMzI5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Iui/m+W6pjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAzMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIblvaIiIGZpbGw9IiMyOUNCNUQiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI1LDQ2IEMzNi41OTc5Nzk3LDQ2IDQ2LDM2LjU5Nzk3OTcgNDYsMjUgQzQ2LDE5LjAwOTM5NzQgNDMuNDkxNTk1OCwxMy42MDQ2NjQgMzkuNDY3ODE3Niw5Ljc3ODgyOTg1IEwyNSwyNSBMMjUsNCBDMTMuNDAyMDIwMyw0IDQsMTMuNDAyMDIwMyA0LDI1IEM0LDM2LjU5Nzk3OTcgMTMuNDAyMDIwMyw0NiAyNSw0NiBaIiBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/task/2.svg":
/*!**********************************!*\
  !*** ./MindMap/Icons/task/2.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT4yNSU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1Ny4wMDAwMDAsIC0zNjEuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9IuS7u+WKoSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTcuMDAwMDAwLCAzMjkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iMjUlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MC4wMDAwMDAsIDMyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00OS45ODYyMTkzLDI1Ljg1NDAxMzIgQzQ5Ljk5MDgwMDEsMjUuNzIyNDIxIDQ5Ljk5NDEzMTUsMjUuNTkwNDEyOCA0OS45OTYyMTM3LDI1LjQ1Nzk4OCBMNDkuOTk2MjEzNywyNS4zOTE3NzU2IEM0OS45OTg3MTIyLDI1LjI1Njg1MjEgNDkuOTk5OTgwOCwyNS4xMjE1MTIxIDQ5Ljk5OTk4MDgsMjQuOTg1NzU2IEw0OS45OTk5ODA4LDI0Ljk4NTg0MjQgQzUwLjAwODIxMjUsMTguMzU3NzkyMSA0Ny4zNzQ5ODg5LDExLjk5OTcxMzUgNDIuNjgyOTI3Miw3LjMxODM3MDY4IEw0Mi42ODI5Mjc1LDcuMzE4MzcxMDQgQzQxLjczOTg2OTEsNi4zNzUwNTAyMyA0MC43MjMyODM2LDUuNTA4MjIzNSAzOS42NDI3NzgyLDQuNzI2MDkyNDUgQzM5LjM2NDE4NjMsNC41MjQ5NTY2MiAzOS4wODE4NDY2LDQuMzI5NjUwNiAzOC43OTU3NTg5LDQuMTQwMTc1MDMgTDM4Ljc5NTc2LDQuMTQwMTc1NzIgQzM4LjUxOTc5MDQsMy45NTY2ODQ4NyAzOC4yNDAxMDk4LDMuNzc4ODM4MzIgMzcuOTU2ODkyNCwzLjYwNjc0NzI1IEMzNy42MTUwMDMzLDMuMzk4NTMyMzEgMzcuMjY3OTA4NSwzLjE5OTI3MDQyIDM2LjkxNTYwODQsMy4wMDg5NjE1NiBDMzYuNjgwNzQxNywyLjg4NDAzMjQ3IDM2LjQ0MzM3NjUsMi43NTkxMDMzOSAzNi4yMDQxMzczLDIuNjQwNDIwNzUgQzM1LjcyNTI0MjIsMi40MDA1NTY5IDM1LjIzNzgxMDgsMi4xNzUyNjc5IDM0Ljc0MTg0MjMsMS45NjQ1NTQzOCBMMzQuNzQxODQxNCwxLjk2NDU1NDAxIEMzMS42NjQ5Mzc5LDAuNjYxOTI0NjQ2IDI4LjM1Njc3ODIsLTAuMDA2MjUyMzM3NjIgMjUuMDE1NDg3MiwwIEwyNC45OTczNzI1LDAgTDI0Ljk5NzM3MzYsMCBDMTEuMTkwODM1NCwwLjAwMDg5MDY3MDM0IC0wLjAwMDg3NDUwMzYyLDExLjE5NDAwMjcgMCwyNS4wMDA1NDEgQzAuMDAwODQ2NTgxOTY4LDM4LjgwNzA3OTIgMTEuMTkzOTU4Nyw0OS45OTg3ODkxIDI1LjAwMDQ5NjksNDkuOTk3OTE0NiBDMzguNDczMzQ5NSw0OS45OTcwODg1IDQ5LjUyMjAxNTYsMzkuMzE5NzI1NyA0OS45ODMyNTM4LDI1Ljg1NDc0MzYgTDQ5Ljk4NjIxOTMsMjUuODU0MDEzMiBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjMjlDQjVEIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTM5Ljg2NDg0MTgsMzkuODQ5MzgwNCBMMzkuODY0ODQyMywzOS44NDkzNzk5IEMzMS42NjAxODMzLDQ4LjA1MDMxNTkgMTguMzU3ODUyNCw0OC4wNTAxOTA5IDEwLjE1MzMxODUsMzkuODQ5MDk5NiBDMS45NDg3ODQ1NywzMS42NDgwMzg2IDEuOTQ4OTA5NjMsMTguMzUxNTQxMSAxMC4xNTM1OTg5LDEwLjE1MDYwNTEgQzE0LjA4OTA2NzgsNi4yMTY5MzcwOSAxOS40MjUyODgxLDQuMDA0ODY4NzUgMjQuOTkwNzkwMiw0IEwyNC45OTA3OTAyLDI1Ljg2OTM3MDkgTDQ2LDI1Ljg2OTM3MDkgTDQ2LDI1Ljg2OTM1NjIgQzQ1Ljc5NjYzMjEsMzEuMTM3MDYxNSA0My42MDQ0ODc0LDM2LjEzMjIyOTMgMzkuODY0ODIzMiwzOS44NDkzNTM2IEwzOS44NjQ4NDE4LDM5Ljg0OTM4MDQgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ "./MindMap/Icons/task/3.svg":
/*!**********************************!*\
  !*** ./MindMap/Icons/task/3.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgODwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJ4bWluZC3lm77moIciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjE3LjAwMDAwMCwgLTM2MS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IuS7u+WKoSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTcuMDAwMDAwLCAzMjkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMC4wMDAwMDAsIDMyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9IuakreWchuW9oiIgZmlsbD0iIzI5Q0I1RCIgY3g9IjI1IiBjeT0iMjUiIHI9IjI1Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjUsNDYgQzMwLjg4OTQ0OTcsNDYgMzYuMjEyNjQ4NCw0My41NzU1OTA4IDQwLjAyNjAyMzksMzkuNjcwMzQ0MyBMMjUsMjUgQzI1LDE3LjI2ODAxMzUgMjUsMTAuMjY4MDEzNSAyNSw0IEMxMy40MDIwMjAzLDQgNCwxMy40MDIwMjAzIDQsMjUgQzQsMzYuNTk3OTc5NyAxMy40MDIwMjAzLDQ2IDI1LDQ2IFoiIGlkPSLmpK3lnIblvaIiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/task/4.svg":
/*!**********************************!*\
  !*** ./MindMap/Icons/task/4.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgOTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJ4bWluZC3lm77moIciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjc3LjAwMDAwMCwgLTM2MS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IuS7u+WKoSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTcuMDAwMDAwLCAzMjkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4MC4wMDAwMDAsIDMyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9IuakreWchuW9oiIgZmlsbD0iIzI5Q0I1RCIgY3g9IjI1IiBjeT0iMjUiIHI9IjI1Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjYsNDYgTDI2LDI1IEMyNiwxNy4yNjgwMTM1IDI2LDEwLjI2ODAxMzUgMjYsNCBDMTQuNDAyMDIwMyw0IDUsMTMuNDAyMDIwMyA1LDI1IEM1LDM2LjU5Nzk3OTcgMTQuNDAyMDIwMyw0NiAyNiw0NiBaIiBpZD0i5qSt5ZyG5b2i5aSH5Lu9LTUiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/task/5.svg":
/*!**********************************!*\
  !*** ./MindMap/Icons/task/5.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMTA8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMzNy4wMDAwMDAsIC0zNjEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLku7vliqEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgMzI5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0xMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjMjlDQjVEIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNSwyNSBDMjUsMTcuMjY4MDEzNSAyNSwxMC4yNjgwMTM1IDI1LDQgQzEzLjQwMjAyMDMsNCA0LDEzLjQwMjAyMDMgNCwyNSBDNCwzMC4xNzQ4MjQgNS44NzE3NDkxOSwzNC45MTI0Nzc1IDguOTc1MTYyNjEsMzguNTcyODc1NiBMMjUsMjUgWiIgaWQ9IuakreWchuW9ouWkh+S7vS02IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/task/6.svg":
/*!**********************************!*\
  !*** ./MindMap/Icons/task/6.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgNzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJ4bWluZC3lm77moIciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzk3LjAwMDAwMCwgLTM2MS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IuS7u+WKoSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTcuMDAwMDAwLCAzMjkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwMC4wMDAwMDAsIDMyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9IuakreWchuW9ouWkh+S7vSIgZmlsbD0iIzI5Q0I1RCIgY3g9IjI1IiBjeT0iMjUiIHI9IjI1Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjUsMjUgQzI1LDE3LjI2ODAxMzUgMjUsMTAuMjY4MDEzNSAyNSw0IEMxOC42NzczNjc4LDQgMTMuMDA3MzQ4Miw2Ljc5NDE2NjgxIDkuMTU3NDA4MzEsMTEuMjE1MDMzNCBMMjUsMjUgWiIgaWQ9IuakreWchuW9ouWkh+S7vS04IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/task/7.svg":
/*!**********************************!*\
  !*** ./MindMap/Icons/task/7.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJ4bWluZC3lm77moIciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpY29uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDU3LjAwMDAwMCwgLTM2MS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IuS7u+WKoSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTcuMDAwMDAwLCAzMjkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2MC4wMDAwMDAsIDMyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9IuakreWchuW9oiIgZmlsbD0iIzI5Q0I1RCIgY3g9IjI1IiBjeT0iMjUiIHI9IjI1Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjEuOTI0OTEwMywzNy40OTA1NTY5IEMyMS4xODg5MTYsMzcuNDkwNTU2OSAyMC40NTI5MTg1LDM3LjIxMDE3NDIgMTkuOTI3MjIyLDM2LjY4NDQ3NjIgTDEwLjgxNDg2MDksMjcuNTcyMTE1IEM5LjcyODM3OTcxLDI2LjQ4NTYzMzggOS43MjgzNzk3MSwyNC42OTgyMDggMTAuODE0ODYwOSwyMy42MTE3NTU5IEMxMS45MDEzNDIsMjIuNTI1Mjc0NyAxMy42ODg3Njc4LDIyLjUyNTI3NDcgMTQuNzc1MjIsMjMuNjExNzU1OSBMMjEuOTI0OTE2OCwzMC43NjE0NTI3IEwzNy44NzE1MDg2LDE0LjgxNDg2MDkgQzM4Ljk1Nzk4OTcsMTMuNzI4Mzc5NyA0MC43NDU0MTU1LDEzLjcyODM3OTcgNDEuODMxODY3NywxNC44MTQ4NjA5IEM0Mi45MTgzNDg4LDE1LjkwMTM0MiA0Mi45MTgzNDg4LDE3LjY4ODc2NzggNDEuODMxODY3NywxOC43NzUyMiBMMjMuODg3NTgxMiwzNi43MTk1MDY1IEMyMy4zNjE4NTI1LDM3LjE3NTEyNjEgMjIuNjYwOTExMSwzNy40OTA1NTY5IDIxLjkyNDkxMzUsMzcuNDkwNTU2OSBMMjEuOTI0OTEwMywzNy40OTA1NTY5IFoiIGlkPSLot6/lvoQiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=");

/***/ }),

/***/ "./MindMap/Icons/user/1.svg":
/*!**********************************!*\
  !*** ./MindMap/Icons/user/1.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMjU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTk3LjAwMDAwMCwgLTY5MS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IuS6uuWDjyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTcuMDAwMDAwLCA2NTkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i57yW57uELTI1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjRTg0NjQzIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOS43NjcwODMyLDI5LjE3MjkzMjMgQzI4LjE3NjYyODMsMjguNzIxODA0NSAyNy40OTUwMDQ3LDI2LjY5MTcyOTMgMjguODU4MjUxOCwyNS4zMzgzNDU5IEMzMC42NzU5MTQ2LDIzLjUzMzgzNDYgMzIuMDM5MTYxOCwyMC42MDE1MDM4IDMyLjAzOTE2MTgsMTcuNDQzNjA5IEMzMi4wMzkxNjE4LDEyLjcwNjc2NjkgMjkuMDg1NDU5NywxMCAyNS40NTAxMzQsMTAgQzIxLjU4NzYwMDUsMTAuMjI1NTYzOSAxOC42MzM4OTg0LDEyLjkzMjMzMDggMTguNjMzODk4NCwxNy42NjkxNzI5IEMxOC42MzM4OTg0LDIwLjYwMTUwMzggMTkuNzY5OTM3NywyMy41MzM4MzQ2IDIxLjgxNDgwODQsMjUuMzM4MzQ1OSBMMjEuODE0ODA4NCwyNS4zMzgzNDU5IEMyMy4xNzgwNTU1LDI2LjkxNzI5MzIgMjIuMjY5MjI0MSwyOC45NDczNjg0IDIwLjY3ODc2OTEsMjkuMTcyOTMyMyBDMTQuNTQ0MTU3MSwzMC4zMDA3NTE5IDEwLDMzLjY4NDIxMDUgMTAsMzYuMTY1NDEzNSBDMTAsMzkuMzIzMzA4MyAxNi44MTYyMzU2LDQwIDI0Ljk5NTcxODMsNDAgQzMzLjE3NTIwMSw0MCAzOS45OTE0MzY2LDM5LjMyMzMwODMgMzkuOTkxNDM2NiwzNi4xNjU0MTM1IEM0MC4yMTg2NDQ1LDMzLjkwOTc3NDQgMzUuOTAxNjk1MywzMC41MjYzMTU4IDI5Ljc2NzA4MzIsMjkuMTcyOTMyMyBaIiBpZD0idXNlciIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./MindMap/Icons/user/2.svg":
/*!**********************************!*\
  !*** ./MindMap/Icons/user/2.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMjY8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1Ny4wMDAwMDAsIC02OTEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLkurrlg48iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgNjU5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0yNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjAuMDAwMDAwLCAzMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIblvaIiIGZpbGw9IiNGRkIzMEEiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSI+PC9jaXJjbGU+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI5Ljc2NzA4MzIsMjkuMTcyOTMyMyBDMjguMTc2NjI4MywyOC43MjE4MDQ1IDI3LjQ5NTAwNDcsMjYuNjkxNzI5MyAyOC44NTgyNTE4LDI1LjMzODM0NTkgQzMwLjY3NTkxNDYsMjMuNTMzODM0NiAzMi4wMzkxNjE4LDIwLjYwMTUwMzggMzIuMDM5MTYxOCwxNy40NDM2MDkgQzMyLjAzOTE2MTgsMTIuNzA2NzY2OSAyOS4wODU0NTk3LDEwIDI1LjQ1MDEzNCwxMCBDMjEuNTg3NjAwNSwxMC4yMjU1NjM5IDE4LjYzMzg5ODQsMTIuOTMyMzMwOCAxOC42MzM4OTg0LDE3LjY2OTE3MjkgQzE4LjYzMzg5ODQsMjAuNjAxNTAzOCAxOS43Njk5Mzc3LDIzLjUzMzgzNDYgMjEuODE0ODA4NCwyNS4zMzgzNDU5IEwyMS44MTQ4MDg0LDI1LjMzODM0NTkgQzIzLjE3ODA1NTUsMjYuOTE3MjkzMiAyMi4yNjkyMjQxLDI4Ljk0NzM2ODQgMjAuNjc4NzY5MSwyOS4xNzI5MzIzIEMxNC41NDQxNTcxLDMwLjMwMDc1MTkgMTAsMzMuNjg0MjEwNSAxMCwzNi4xNjU0MTM1IEMxMCwzOS4zMjMzMDgzIDE2LjgxNjIzNTYsNDAgMjQuOTk1NzE4Myw0MCBDMzMuMTc1MjAxLDQwIDM5Ljk5MTQzNjYsMzkuMzIzMzA4MyAzOS45OTE0MzY2LDM2LjE2NTQxMzUgQzQwLjIxODY0NDUsMzMuOTA5Nzc0NCAzNS45MDE2OTUzLDMwLjUyNjMxNTggMjkuNzY3MDgzMiwyOS4xNzI5MzIzIFoiIGlkPSJ1c2Vy5aSH5Lu9IiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/user/3.svg":
/*!**********************************!*\
  !*** ./MindMap/Icons/user/3.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMjc8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxNy4wMDAwMDAsIC02OTEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLkurrlg48iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgNjU5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0yNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjNTg2QUZGIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOS43NjcwODMyLDI5LjE3MjkzMjMgQzI4LjE3NjYyODMsMjguNzIxODA0NSAyNy40OTUwMDQ3LDI2LjY5MTcyOTMgMjguODU4MjUxOCwyNS4zMzgzNDU5IEMzMC42NzU5MTQ2LDIzLjUzMzgzNDYgMzIuMDM5MTYxOCwyMC42MDE1MDM4IDMyLjAzOTE2MTgsMTcuNDQzNjA5IEMzMi4wMzkxNjE4LDEyLjcwNjc2NjkgMjkuMDg1NDU5NywxMCAyNS40NTAxMzQsMTAgQzIxLjU4NzYwMDUsMTAuMjI1NTYzOSAxOC42MzM4OTg0LDEyLjkzMjMzMDggMTguNjMzODk4NCwxNy42NjkxNzI5IEMxOC42MzM4OTg0LDIwLjYwMTUwMzggMTkuNzY5OTM3NywyMy41MzM4MzQ2IDIxLjgxNDgwODQsMjUuMzM4MzQ1OSBMMjEuODE0ODA4NCwyNS4zMzgzNDU5IEMyMy4xNzgwNTU1LDI2LjkxNzI5MzIgMjIuMjY5MjI0MSwyOC45NDczNjg0IDIwLjY3ODc2OTEsMjkuMTcyOTMyMyBDMTQuNTQ0MTU3MSwzMC4zMDA3NTE5IDEwLDMzLjY4NDIxMDUgMTAsMzYuMTY1NDEzNSBDMTAsMzkuMzIzMzA4MyAxNi44MTYyMzU2LDQwIDI0Ljk5NTcxODMsNDAgQzMzLjE3NTIwMSw0MCAzOS45OTE0MzY2LDM5LjMyMzMwODMgMzkuOTkxNDM2NiwzNi4xNjU0MTM1IEM0MC4yMTg2NDQ1LDMzLjkwOTc3NDQgMzUuOTAxNjk1MywzMC41MjYzMTU4IDI5Ljc2NzA4MzIsMjkuMTcyOTMyMyBaIiBpZD0idXNlcuWkh+S7vS0yIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/user/4.svg":
/*!**********************************!*\
  !*** ./MindMap/Icons/user/4.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMjg8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3Ny4wMDAwMDAsIC02OTEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLkurrlg48iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgNjU5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0yOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTgwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjQkYzOUIxIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOS43NjcwODMyLDI5LjE3MjkzMjMgQzI4LjE3NjYyODMsMjguNzIxODA0NSAyNy40OTUwMDQ3LDI2LjY5MTcyOTMgMjguODU4MjUxOCwyNS4zMzgzNDU5IEMzMC42NzU5MTQ2LDIzLjUzMzgzNDYgMzIuMDM5MTYxOCwyMC42MDE1MDM4IDMyLjAzOTE2MTgsMTcuNDQzNjA5IEMzMi4wMzkxNjE4LDEyLjcwNjc2NjkgMjkuMDg1NDU5NywxMCAyNS40NTAxMzQsMTAgQzIxLjU4NzYwMDUsMTAuMjI1NTYzOSAxOC42MzM4OTg0LDEyLjkzMjMzMDggMTguNjMzODk4NCwxNy42NjkxNzI5IEMxOC42MzM4OTg0LDIwLjYwMTUwMzggMTkuNzY5OTM3NywyMy41MzM4MzQ2IDIxLjgxNDgwODQsMjUuMzM4MzQ1OSBMMjEuODE0ODA4NCwyNS4zMzgzNDU5IEMyMy4xNzgwNTU1LDI2LjkxNzI5MzIgMjIuMjY5MjI0MSwyOC45NDczNjg0IDIwLjY3ODc2OTEsMjkuMTcyOTMyMyBDMTQuNTQ0MTU3MSwzMC4zMDA3NTE5IDEwLDMzLjY4NDIxMDUgMTAsMzYuMTY1NDEzNSBDMTAsMzkuMzIzMzA4MyAxNi44MTYyMzU2LDQwIDI0Ljk5NTcxODMsNDAgQzMzLjE3NTIwMSw0MCAzOS45OTE0MzY2LDM5LjMyMzMwODMgMzkuOTkxNDM2NiwzNi4xNjU0MTM1IEM0MC4yMTg2NDQ1LDMzLjkwOTc3NDQgMzUuOTAxNjk1MywzMC41MjYzMTU4IDI5Ljc2NzA4MzIsMjkuMTcyOTMyMyBaIiBpZD0idXNlcuWkh+S7vS0zIiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/user/5.svg":
/*!**********************************!*\
  !*** ./MindMap/Icons/user/5.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMjk8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMzNy4wMDAwMDAsIC02OTEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLkurrlg48iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgNjU5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0yOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjMjlDQjVEIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOS43NjcwODMyLDI5LjE3MjkzMjMgQzI4LjE3NjYyODMsMjguNzIxODA0NSAyNy40OTUwMDQ3LDI2LjY5MTcyOTMgMjguODU4MjUxOCwyNS4zMzgzNDU5IEMzMC42NzU5MTQ2LDIzLjUzMzgzNDYgMzIuMDM5MTYxOCwyMC42MDE1MDM4IDMyLjAzOTE2MTgsMTcuNDQzNjA5IEMzMi4wMzkxNjE4LDEyLjcwNjc2NjkgMjkuMDg1NDU5NywxMCAyNS40NTAxMzQsMTAgQzIxLjU4NzYwMDUsMTAuMjI1NTYzOSAxOC42MzM4OTg0LDEyLjkzMjMzMDggMTguNjMzODk4NCwxNy42NjkxNzI5IEMxOC42MzM4OTg0LDIwLjYwMTUwMzggMTkuNzY5OTM3NywyMy41MzM4MzQ2IDIxLjgxNDgwODQsMjUuMzM4MzQ1OSBMMjEuODE0ODA4NCwyNS4zMzgzNDU5IEMyMy4xNzgwNTU1LDI2LjkxNzI5MzIgMjIuMjY5MjI0MSwyOC45NDczNjg0IDIwLjY3ODc2OTEsMjkuMTcyOTMyMyBDMTQuNTQ0MTU3MSwzMC4zMDA3NTE5IDEwLDMzLjY4NDIxMDUgMTAsMzYuMTY1NDEzNSBDMTAsMzkuMzIzMzA4MyAxNi44MTYyMzU2LDQwIDI0Ljk5NTcxODMsNDAgQzMzLjE3NTIwMSw0MCAzOS45OTE0MzY2LDM5LjMyMzMwODMgMzkuOTkxNDM2NiwzNi4xNjU0MTM1IEM0MC4yMTg2NDQ1LDMzLjkwOTc3NDQgMzUuOTAxNjk1MywzMC41MjYzMTU4IDI5Ljc2NzA4MzIsMjkuMTcyOTMyMyBaIiBpZD0idXNlcuWkh+S7vS00IiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/user/6.svg":
/*!**********************************!*\
  !*** ./MindMap/Icons/user/6.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMzA8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM5Ny4wMDAwMDAsIC02OTEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLkurrlg48iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgNjU5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0zMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjMDhCQkU1IiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOS43NjcwODMyLDI5LjE3MjkzMjMgQzI4LjE3NjYyODMsMjguNzIxODA0NSAyNy40OTUwMDQ3LDI2LjY5MTcyOTMgMjguODU4MjUxOCwyNS4zMzgzNDU5IEMzMC42NzU5MTQ2LDIzLjUzMzgzNDYgMzIuMDM5MTYxOCwyMC42MDE1MDM4IDMyLjAzOTE2MTgsMTcuNDQzNjA5IEMzMi4wMzkxNjE4LDEyLjcwNjc2NjkgMjkuMDg1NDU5NywxMCAyNS40NTAxMzQsMTAgQzIxLjU4NzYwMDUsMTAuMjI1NTYzOSAxOC42MzM4OTg0LDEyLjkzMjMzMDggMTguNjMzODk4NCwxNy42NjkxNzI5IEMxOC42MzM4OTg0LDIwLjYwMTUwMzggMTkuNzY5OTM3NywyMy41MzM4MzQ2IDIxLjgxNDgwODQsMjUuMzM4MzQ1OSBMMjEuODE0ODA4NCwyNS4zMzgzNDU5IEMyMy4xNzgwNTU1LDI2LjkxNzI5MzIgMjIuMjY5MjI0MSwyOC45NDczNjg0IDIwLjY3ODc2OTEsMjkuMTcyOTMyMyBDMTQuNTQ0MTU3MSwzMC4zMDA3NTE5IDEwLDMzLjY4NDIxMDUgMTAsMzYuMTY1NDEzNSBDMTAsMzkuMzIzMzA4MyAxNi44MTYyMzU2LDQwIDI0Ljk5NTcxODMsNDAgQzMzLjE3NTIwMSw0MCAzOS45OTE0MzY2LDM5LjMyMzMwODMgMzkuOTkxNDM2NiwzNi4xNjU0MTM1IEM0MC4yMTg2NDQ1LDMzLjkwOTc3NDQgMzUuOTAxNjk1MywzMC41MjYzMTU4IDI5Ljc2NzA4MzIsMjkuMTcyOTMyMyBaIiBpZD0idXNlcuWkh+S7vS01IiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/Icons/user/7.svg":
/*!**********************************!*\
  !*** ./MindMap/Icons/user/7.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTBweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU3LjEgKDgzMDg4KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nvJbnu4QgMzE8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0ieG1pbmQt5Zu+5qCHIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iaWNvbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQ1Ny4wMDAwMDAsIC02OTEuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLkurrlg48iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3LjAwMDAwMCwgNjU5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0zMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzYwLjAwMDAwMCwgMzIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0i5qSt5ZyG5b2iIiBmaWxsPSIjN0ZBQ0IzIiBjeD0iMjUiIGN5PSIyNSIgcj0iMjUiPjwvY2lyY2xlPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOS43NjcwODMyLDI5LjE3MjkzMjMgQzI4LjE3NjYyODMsMjguNzIxODA0NSAyNy40OTUwMDQ3LDI2LjY5MTcyOTMgMjguODU4MjUxOCwyNS4zMzgzNDU5IEMzMC42NzU5MTQ2LDIzLjUzMzgzNDYgMzIuMDM5MTYxOCwyMC42MDE1MDM4IDMyLjAzOTE2MTgsMTcuNDQzNjA5IEMzMi4wMzkxNjE4LDEyLjcwNjc2NjkgMjkuMDg1NDU5NywxMCAyNS40NTAxMzQsMTAgQzIxLjU4NzYwMDUsMTAuMjI1NTYzOSAxOC42MzM4OTg0LDEyLjkzMjMzMDggMTguNjMzODk4NCwxNy42NjkxNzI5IEMxOC42MzM4OTg0LDIwLjYwMTUwMzggMTkuNzY5OTM3NywyMy41MzM4MzQ2IDIxLjgxNDgwODQsMjUuMzM4MzQ1OSBMMjEuODE0ODA4NCwyNS4zMzgzNDU5IEMyMy4xNzgwNTU1LDI2LjkxNzI5MzIgMjIuMjY5MjI0MSwyOC45NDczNjg0IDIwLjY3ODc2OTEsMjkuMTcyOTMyMyBDMTQuNTQ0MTU3MSwzMC4zMDA3NTE5IDEwLDMzLjY4NDIxMDUgMTAsMzYuMTY1NDEzNSBDMTAsMzkuMzIzMzA4MyAxNi44MTYyMzU2LDQwIDI0Ljk5NTcxODMsNDAgQzMzLjE3NTIwMSw0MCAzOS45OTE0MzY2LDM5LjMyMzMwODMgMzkuOTkxNDM2NiwzNi4xNjU0MTM1IEM0MC4yMTg2NDQ1LDMzLjkwOTc3NDQgMzUuOTAxNjk1MywzMC41MjYzMTU4IDI5Ljc2NzA4MzIsMjkuMTcyOTMyMyBaIiBpZD0idXNlcuWkh+S7vS02IiBmaWxsPSIjRkZGRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./MindMap/images/box.png":
/*!********************************!*\
  !*** ./MindMap/images/box.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./MindMap/images/default.png":
/*!************************************!*\
  !*** ./MindMap/images/default.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./MindMap/images/stright.png":
/*!************************************!*\
  !*** ./MindMap/images/stright.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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EwEBBBBAAAEErABBAScCAggggAACCFgBggJOBAQQQAABBBCwAgQFnAgIIIAAAgggYAUICjgREEAAAQQQQMAKEBRwIiCAAAIIIICAFSAo4ERAAAEEEEAAAStAUMCJgAACCCCAAAJWgKCAEwEBBBBAAAEErABBAScCAggggAACCFgBggJOBAQQQAABBBCwAgQFnAgIIIAAAgggYAUICjgREEAAAQQQQMAKEBRwIiCAAAIIIICAFSAo4ERAAAEEEEAAAStAUMCJgAACCCCAAAJWgKCAEwEBBBBAAAEErABBAScCAggggAACCFgBggJOBAQQQAABBBCwAgQFnAgIIIAAAgggYAUICjgREEAAAQQQQMAKEBRwIiCAAAIIIICAFSAo4ERAAAEEEEAAAStAUMCJgAACCCCAAAJWgKCAEwEBBBBAAAEErABBAScCAggggAACCFgBggJOBAQQQAABBBCwAgQFnAgIIIAAAgggYAUICjgREEAAAQQQQMAKEBRwIiCAAAIIIICAFSAo4ERAAAEEEEAAAStAUMCJgAACCCCAAAJWgKCAEwEBBBBAAAEErABBAScCAggggAACCFgBggJOBAQQQAABBBCwAgQFnAgIIIAAAgggYAUICjgREEAAAQQQQMAKEBRwIiCAAAIIIICAFSAo4ERAAAEEEEAAAStAUMCJgAACCCCAAAJWgKCAEwEBBBBAAAEErABBAScCAggggAACCFgBggJOBAQQQAABBBCwAgQFnAgIIIAAAgggYAUICjgREEAAAQQQQMAKEBRwIiCAAAIIIICAFSAo4ERAAAEEEEAAAStAUMCJgAACCCCAAAJWgKCAEwEBBBBAAAEErABBAScCAggggAACCFgBggJOBAQQQAABBBCwAgQFnAgIIIAAAgggYAUICjgREEAAAQQQQMAKEBRwIiCAAAIIIICAFSAo4ERAAAEEEEAAAStAUMCJgAACCCCAAAJWgKCAEwEBBBBAAAEErABBAScCAggggAACCFiBTL87ZK5dJ1mrVknGtv+KVFb6nYPyJ7NARoZUtj9BKnr2lIOnnZrMJWHfEUCggQR8XVOQvfQf0vjV1yRjy1YCggY6AfnaYyhgglo9l/Wc1nObhIAfBf65bJmUlpQEi67TmhdvWpmfL3v37Il38ZRbzrc1BbaG4P0PUu6AUiAEVCDLnNuVbdtSY8DpkHQC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");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_ant-design_c","vendors-node_modules_antd_lib__util_c","vendors-node_modules_antd_lib_back-top_i","vendors-node_modules_antd_lib_b","vendors-node_modules_antd_lib_e","vendors-node_modules_antd_lib_ic","vendors-node_modules_antd_lib_la","vendors-node_modules_antd_lib_men","vendors-node_modules_antd_lib_m","vendors-node_modules_antd_lib_select_i","vendors-node_modules_antd_lib_s","vendors-node_modules_antd_lib_t","vendors-node_modules_async-validator_dist-web_index_js-2a955da7","vendors-node_modules_axios_i","vendors-node_modules_babel_runtime_h","vendors-node_modules_c","vendors-node_modules_f","vendors-node_modules_lodash-","vendors-node_modules_lodash_lodash_js-2ef0e502","vendors-node_modules_m","vendors-node_modules_prop-types_c","vendors-node_modules_rc-a","vendors-node_modules_rc-d","vendors-node_modules_rc-r","vendors-node_modules_rc-textarea_es_R","vendors-node_modules_rc-t","vendors-node_modules_rc","vendors-node_modules_react-dom_cjs_react-dom_development_js-61bb2bf2","vendors-node_modules_react_c","vendors-node_modules_r"], () => (__webpack_exec__("./MindMap/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);