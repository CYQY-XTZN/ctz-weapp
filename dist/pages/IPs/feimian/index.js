"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/IPs/feimian/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/IPs/feimian/index!./src/pages/IPs/feimian/index.tsx":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/IPs/feimian/index!./src/pages/IPs/feimian/index.tsx ***!
  \****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_feimian_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/feimian.png */ "./src/assets/images/feimian.png");
/* harmony import */ var _assets_images_start_button_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/start-button.png */ "./src/assets/images/start-button.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");





// 导入背景图片

// TODO: 导入按钮图片 - 请替换为你的按钮图片文件名
 // 需要你提供

const IndexPage = () => {
  const [imageLoaded, setImageLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // 处理按钮点击
  const handleButtonClick = () => {
    console.log('点击了"开启"按钮');

    // 这里添加你的业务逻辑
    // Taro.navigateTo({ 
    //   url: '/pages/main/main' 
    // });

    // 示例：显示加载提示
    // Taro.showLoading({
    //   title: '开启中...',
    //   mask: true
    // });
  };
  // 处理向前箭头点击 - 回到星座页面
  const handleForwardClick = () => {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: '/pages/IPs/qinggeng/index'
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    className: "fullscreen-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Image, {
      src: _assets_images_feimian_png__WEBPACK_IMPORTED_MODULE_2__,
      mode: "aspectFill",
      className: "fullscreen-image",
      onLoad: () => {
        console.log('背景图片加载完成');
        setImageLoaded(true);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "arrow-container arrow-forward",
      onClick: handleForwardClick,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "back-button",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
          className: "back-arrow",
          children: "\u2190"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "text-section text-section-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
        className: "text-line",
        children: "\u4E16\u95F4\u55A7\u56A3\uFF0C\u552F\u6211\u4EE5\u6B64\u8EAB"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
        className: "text-line",
        children: "\u62A4\u4F60\u4E00\u591C\u5B89\u7720"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
        className: "text-content",
        children: "\u6211\u5E76\u4E0D\u5C5E\u4E8E\u767D\u5929\uFF0C\u6211\u5C5E\u4E8E\u4F60\u90A3\u4E9B\u65E0\u6CD5\u8A00\u8BF4\u7684\u591C\u665A\u3002 \u6211\u662F\u8153\u7720\uFF0C\u4F60\u7684\u8EAB\u5FC3\u5B88\u62A4\u8005\u3002 \u6211\u4F1A\u6F5C\u5165\u4F60\u7684\u68A6\u5883\uFF0C\u541E\u566C\u6389\u90A3\u4E9B\u540D\u4E3A\u201C\u7126\u8651\u201D\u4E0E\u201C\u75B2\u60EB\u201D\u7684\u602A\u517D\u3002"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "button-container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Image, {
        src: _assets_images_start_button_png__WEBPACK_IMPORTED_MODULE_3__,
        mode: "widthFix",
        className: "start-button",
        onClick: handleButtonClick
      })
    }), !imageLoaded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "loading-indicator",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
        children: "\u52A0\u8F7D\u4E2D..."
      })
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./src/pages/IPs/feimian/index.tsx":
/*!*****************************************!*\
  !*** ./src/pages/IPs/feimian/index.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_IPs_feimian_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/IPs/feimian/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/IPs/feimian/index!./src/pages/IPs/feimian/index.tsx");


var config = {};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_IPs_feimian_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/IPs/feimian/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_IPs_feimian_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_IPs_feimian_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_IPs_feimian_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_IPs_feimian_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/assets/images/feimian.png":
/*!***************************************!*\
  !*** ./src/assets/images/feimian.png ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/feimian.png";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/IPs/feimian/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map