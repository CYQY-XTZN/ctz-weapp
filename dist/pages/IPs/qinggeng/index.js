"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/IPs/qinggeng/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/IPs/qinggeng/index!./src/pages/IPs/qinggeng/index.tsx":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/IPs/qinggeng/index!./src/pages/IPs/qinggeng/index.tsx ***!
  \******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_start_button_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/start-button.png */ "./src/assets/images/start-button.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");





// 导入按钮图片


// 导入背景图片

const qinggengImage = "https://636c-cloud1-7gg10sorbbbec8d9-1392459764.tcb.qcloud.la/images/qinggeng.png?sign=b4c91f00dac5fcb6ae14a32d039711f2&t=1769576896";
const IndexPage = () => {
  const [imageLoaded, setImageLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // 处理开启按钮点击
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
      url: '/pages/constellation/index'
    });
  };

  // 处理向后箭头点击 - 去到IPs页面
  const handleBackwardClick = () => {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: '/pages/IPs/feimian/index'
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
    className: "fullscreen-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Image, {
      src: qinggengImage,
      mode: "aspectFill",
      className: "fullscreen-image",
      onLoad: () => {
        console.log('背景图片加载完成');
        setImageLoaded(true);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
      className: "arrow-container arrow-forward",
      onClick: handleForwardClick,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: "back-button",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
          className: "back-arrow",
          children: "\u2190"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
      className: "arrow-container arrow-backward",
      onClick: handleBackwardClick,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: "back-button",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
          className: "back-arrow",
          children: "\u2192"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
      className: "text-section text-section-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
        className: "text-line",
        children: "\u592A\u521D\u6709\u9053\uFF0C\u4E07\u7269\u751F\u5149"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
        className: "text-line",
        children: "\u6211\u66FF\u4F60\u770B\u7740\u8FD9\u7247\u571F\u5730\u7684\u6BCF\u4E00\u6B21\u547C\u5438"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
        className: "text-content",
        children: "\u6211\u4E0D\u53EA\u662F\u4F20\u8BF4\u4E2D\u7684\u5FA1\u75AB\u795E\u9E1F\uFF0C\u66F4\u662F\u4F60\u9057\u843D\u5728\u5C71\u91CE\u95F4\u7684\u773C\u775B\u3002 \u6211\u662F\u9752\u8015\uFF0C\u4F60\u7684\u7075\u7530\u76D1\u62A4\u4EBA\u3002\u6211\u5C06\u7A7F\u68AD\u4E8E\u5343\u91CC\u4E4B\u5916\u7684\u6DF1\u5C71 \u4E0E\u4F60\u7684\u5C4F\u5E55\u4E4B\u95F4\uFF0C\u53EA\u4E3A\u4F20\u9012\u751F\u547D\u7684\u8BAF\u606F\u3002"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
      className: "button-container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Image, {
        src: _assets_images_start_button_png__WEBPACK_IMPORTED_MODULE_2__,
        mode: "widthFix",
        className: "start-button",
        onClick: handleButtonClick
      })
    }), !imageLoaded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
      className: "loading-indicator",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
        children: "\u52A0\u8F7D\u4E2D..."
      })
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./src/pages/IPs/qinggeng/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/IPs/qinggeng/index.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_IPs_qinggeng_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/IPs/qinggeng/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/IPs/qinggeng/index!./src/pages/IPs/qinggeng/index.tsx");


var config = {};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_IPs_qinggeng_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/IPs/qinggeng/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_IPs_qinggeng_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_IPs_qinggeng_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_IPs_qinggeng_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_IPs_qinggeng_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/IPs/qinggeng/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map