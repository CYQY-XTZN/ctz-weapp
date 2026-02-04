"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/constellation/simple"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/constellation/simple!./src/pages/constellation/simple.tsx":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/constellation/simple!./src/pages/constellation/simple.tsx ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
// src/pages/constellation/simple.tsx





const ConstellationSimple = () => {
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    console.log('✅ simple页面加载成功!');
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    style: {
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
      style: {
        fontSize: '40px',
        color: 'white',
        fontWeight: 'bold',
        marginBottom: '20px'
      },
      children: "\uD83C\uDF89 \u6210\u529F\uFF01"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
      style: {
        fontSize: '20px',
        color: 'white',
        marginBottom: '10px',
        textAlign: 'center'
      },
      children: "\u4F60\u6210\u529F\u8DF3\u8F6C\u5230\u4E86\u6D4B\u8BD5\u9875\u9762"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
      style: {
        fontSize: '16px',
        color: 'rgba(255,255,255,0.8)',
        marginBottom: '30px',
        textAlign: 'center'
      },
      children: "\u5982\u679C\u770B\u5230\u8FD9\u4E2A\u9875\u9762\uFF0C\u8BF4\u660E\u8DF3\u8F6C\u529F\u80FD\u6B63\u5E38"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
      style: {
        fontSize: '18px',
        color: 'white',
        background: 'rgba(0,0,0,0.3)',
        padding: '10px 20px',
        borderRadius: '10px',
        marginTop: '20px'
      },
      onClick: () => {
        console.log('返回按钮点击');
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateBack();
      },
      children: "\u70B9\u51FB\u8FD4\u56DE"
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (ConstellationSimple);

/***/ }),

/***/ "./src/pages/constellation/simple.tsx":
/*!********************************************!*\
  !*** ./src/pages/constellation/simple.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_constellation_simple_simple_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/constellation/simple!./simple.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/constellation/simple!./src/pages/constellation/simple.tsx");


var config = {};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_constellation_simple_simple_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/constellation/simple', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_constellation_simple_simple_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_constellation_simple_simple_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_constellation_simple_simple_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_constellation_simple_simple_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors"], function() { return __webpack_exec__("./src/pages/constellation/simple.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=simple.js.map