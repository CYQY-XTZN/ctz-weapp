"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/mountains/chongqing-mountain/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/mountains/chongqing-mountain/index!./src/pages/mountains/chongqing-mountain/index.tsx":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/mountains/chongqing-mountain/index!./src/pages/mountains/chongqing-mountain/index.tsx ***!
  \**************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
// src/pages/mountains/chongqing-mountain/index.tsx





const ChongqingMountainPage = () => {
  const [mountainImageLoaded, setMountainImageLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [waterButtonClicked, setWaterButtonClicked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [weedButtonClicked, setWeedButtonClicked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleMountainImageLoad = () => {
    console.log('重庆山脉图片加载完成');
    setMountainImageLoaded(true);
  };
  const image = "https://636c-cloud1-7gg10sorbbbec8d9-1392459764.tcb.qcloud.la/images/chongqing-mountain-map.png?sign=5864a0d38e8a0b09b1f7eb621a6651a0&t=1769576662";
  const handleBack = () => {
    const pages = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getCurrentPages();
    if (pages.length >= 2) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateBack({
        delta: 1
      });
    } else {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().redirectTo({
        url: '/pages/mountainPage/index'
      });
    }
  };
  const handleWaterButtonClick = () => {
    console.log('浇水按钮被点击');
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().vibrateShort({
      type: 'light'
    });
    setWaterButtonClicked(true);
    setTimeout(() => setWaterButtonClicked(false), 300);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
      title: '💧 开始浇水...',
      icon: 'none',
      duration: 2000
    });
  };
  const handleWeedButtonClick = () => {
    console.log('除草按钮被点击');
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().vibrateShort({
      type: 'light'
    });
    setWeedButtonClicked(true);
    setTimeout(() => setWeedButtonClicked(false), 300);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
      title: '🌿 开始除草...',
      icon: 'none',
      duration: 2000
    });
  };
  const handleWaterButtonLongPress = () => {
    console.log('浇水长按开始');
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().vibrateLong();
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
      title: '浇水确认',
      content: '确定要浇水吗？这将消耗1个水滴',
      confirmText: '确认浇水',
      cancelText: '取消',
      success: res => {
        if (res.confirm) {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
            title: '💧 浇水成功！',
            icon: 'success',
            duration: 2000
          });
        }
      }
    });
  };
  const handleWeedButtonLongPress = () => {
    console.log('除草长按开始');
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().vibrateLong();
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
      title: '除草确认',
      content: '确定要开始除草吗？',
      confirmText: '开始除草',
      cancelText: '取消',
      success: res => {
        if (res.confirm) {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
            title: '🌿 除草模式已启动！',
            icon: 'success',
            duration: 2000
          });
        }
      }
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: "chongqing-mountain-page",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
      className: "general-bg",
      src: __webpack_require__(/*! @/assets/images/general-bg.png */ "./src/assets/images/general-bg.png"),
      mode: "aspectFill"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "page-title",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
        className: "title-text",
        children: "\u6211\u7684\u836F\u7530"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
      className: "mountain-image",
      src: image,
      mode: "widthFix",
      onLoad: handleMountainImageLoad
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "back-button",
      onClick: handleBack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
        className: "back-arrow",
        children: "\u2190"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "action-buttons-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "image-button water-button",
        onClick: handleWaterButtonClick,
        onLongPress: handleWaterButtonLongPress,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
          className: "button-image",
          src: __webpack_require__(/*! @/assets/images/water-plant-button.png */ "./src/assets/images/water-plant-button.png"),
          mode: "aspectFit" // 使用aspectFit确保完整显示
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          className: "button-glow"
        }), waterButtonClicked && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          className: "ripple-effect"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "image-button weed-button",
        onClick: handleWeedButtonClick,
        onLongPress: handleWeedButtonLongPress,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
          className: "button-image",
          src: __webpack_require__(/*! @/assets/images/weed-plant-button.png */ "./src/assets/images/weed-plant-button.png"),
          mode: "aspectFit" // 使用aspectFit确保完整显示
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          className: "button-glow"
        }), weedButtonClicked && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          className: "ripple-effect"
        })]
      })]
    }), !mountainImageLoaded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "loading-overlay",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
        className: "loading-text",
        children: "\u52A0\u8F7D\u91CD\u5E86\u5C71\u8109\u5730\u56FE..."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "loading-spinner"
      })]
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (ChongqingMountainPage);

/***/ }),

/***/ "./src/pages/mountains/chongqing-mountain/index.tsx":
/*!**********************************************************!*\
  !*** ./src/pages/mountains/chongqing-mountain/index.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mountains_chongqing_mountain_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/mountains/chongqing-mountain/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/mountains/chongqing-mountain/index!./src/pages/mountains/chongqing-mountain/index.tsx");


var config = {};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mountains_chongqing_mountain_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/mountains/chongqing-mountain/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mountains_chongqing_mountain_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mountains_chongqing_mountain_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mountains_chongqing_mountain_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mountains_chongqing_mountain_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/mountains/chongqing-mountain/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map