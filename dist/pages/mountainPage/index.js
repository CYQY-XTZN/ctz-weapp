"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/mountainPage/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/mountainPage/index!./src/pages/mountainPage/index.tsx":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/mountainPage/index!./src/pages/mountainPage/index.tsx ***!
  \******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
// src/pages/mountainPage/index.tsx





const image = "https://636c-cloud1-7gg10sorbbbec8d9-1392459764.tcb.qcloud.la/images/mountain-page.png?sign=0282f1c88d80741f39a09ae6f092904f&t=1769576819";
const MountainPage = () => {
  // 状态管理
  const [debugMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [activeAreaId, setActiveAreaId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [mountainImageLoaded, setMountainImageLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // 修改后的6个区域配置 - 每个区域跳转到独立页面
  const mountainAreas = [
  // 区域1-左：从上往下的三分之一，左边留白5px
  {
    id: 'area1-left',
    name: '金秀山脉',
    page: '/pages/mountains/jinxiu-mountain/index',
    style: {
      top: '33.3%',
      left: '2%',
      width: '46%',
      height: '12%'
    }
  },
  // 区域1-右：从上往下的三分之一，右边留白15px
  {
    id: 'area1-right',
    name: '金秀山脉',
    page: '/pages/mountains/chongqing-mountain/index',
    // 重庆山脉页面
    style: {
      top: '33.3%',
      left: '52%',
      width: '46%',
      height: '12%'
    }
  },
  // 区域2：从上往下二分之一，正中间区域
  {
    id: 'area2',
    name: '中央主峰',
    page: '/pages/mountains/central-peak/index',
    style: {
      top: '50%',
      left: '37.5%',
      width: '12.5%',
      height: '15%'
    }
  },
  // 区域3-左：从下往上三分之一，向上移动很多
  {
    id: 'area3-left',
    name: '西南山麓',
    page: '/pages/mountains/southwest-foothills/index',
    style: {
      top: '60%',
      left: '5%',
      width: '22.5%',
      height: '10%'
    }
  },
  // 区域3-右：从下往上三分之一，向上移动很多
  {
    id: 'area3-right',
    name: '东南山麓',
    page: '/pages/mountains/southeast-foothills/index',
    style: {
      top: '60%',
      left: '72.5%',
      width: '22.5%',
      height: '10%'
    }
  },
  // 区域4：比3靠下，横向中间
  {
    id: 'area4',
    name: '中央山谷',
    page: '/pages/mountains/central-valley/index',
    style: {
      top: '70%',
      left: '38.75%',
      width: '22.5%',
      height: '12%'
    }
  }];

  // 处理山脉图片加载
  const handleMountainImageLoad = () => {
    console.log('山脉图片加载完成');
    setMountainImageLoaded(true);
  };

  // 处理区域点击 - 使用 redirectTo 避免页面栈溢出
  const handleAreaClick = area => {
    console.log('点击区域:', area.name, '跳转到:', area.page);
    setActiveAreaId(area.id);

    // 点击时的轻微震动反馈
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().vibrateShort({
      type: 'light'
    });
    setTimeout(() => {
      // 跳转到对应的山脉页面 - 使用 redirectTo 替换当前页面
      try {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().redirectTo({
          url: area.page,
          fail: err => {
            console.error('重定向失败:', err);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '页面开发中',
              icon: 'none',
              duration: 1500
            });
          }
        });
      } catch (error) {
        console.error('导航失败:', error);
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
          title: '页面跳转失败',
          icon: 'none'
        });
      }
    }, 150);
    setTimeout(() => {
      setActiveAreaId(null);
    }, 300);
  };

  // 小鸟点击事件
  const handleBirdClick = () => {
    console.log('小鸟被点击了！');
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().vibrateShort();
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
      title: '啾啾～点击地图区域探索山脉吧！',
      icon: 'none',
      duration: 2000
    });
  };

  // 返回上一页
  const handleBack = () => {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateBack();
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: "mountain-page",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
      className: "general-bg",
      src: __webpack_require__(/*! @/assets/images/mountain-page-bg.png */ "./src/assets/images/mountain-page-bg.png"),
      mode: "aspectFill"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
      className: "mountain-image",
      src: image,
      mode: "widthFix",
      onLoad: handleMountainImageLoad,
      style: {
        marginTop: '120px'
      } // 往下移动了很多
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "bird-container",
      onClick: handleBirdClick,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
        className: "bird-image",
        src: __webpack_require__(/*! @/assets/images/bird.png */ "./src/assets/images/bird.png"),
        mode: "aspectFit"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "back-button",
      onClick: handleBack,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
        className: "back-arrow",
        children: "\u2190"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "user-info-block",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
        className: "user-icon",
        src: __webpack_require__(/*! @/assets/images/profile.png */ "./src/assets/images/profile.png"),
        mode: "aspectFit"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
        className: "user-text",
        children: "\u6674\u5929\u5C0F\u592A\u521D"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "number-info-block",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
        className: "number-text",
        children: "\u6570\u5B57"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
        className: "number-icon",
        src: __webpack_require__(/*! @/assets/images/constellation.png */ "./src/assets/images/constellation.png"),
        mode: "aspectFit"
      })]
    }), mountainAreas.map(area => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: `click-area ${area.id} ${debugMode ? 'debug-area' : ''} ${activeAreaId === area.id ? 'active' : ''}`,
      style: area.style,
      onClick: () => handleAreaClick(area),
      children: debugMode && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "area-debug-info",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
          className: "area-name",
          children: area.name
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
          className: "area-path",
          children: area.page.replace('/pages/mountains/', '')
        })]
      })
    }, area.id)), !mountainImageLoaded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "loading-overlay",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
        className: "loading-text",
        children: "\u52A0\u8F7D\u5C71\u8109\u5730\u56FE..."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "loading-spinner"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "bottom-nav",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "nav-item active",
        onClick: () => _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
          url: '/pages/xingyouhui/index'
        }),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
          className: "nav-icon",
          children: "\uD83D\uDD05"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
          className: "nav-text",
          children: "\u661F\u53CB\u4F1A"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "nav-item",
        onClick: () => _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
          url: '/pages/mountainPage/index'
        }),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
          className: "nav-icon",
          children: "\uD83D\uDDFA\uFE0F"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
          className: "nav-text",
          children: "\u5730\u56FE"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "nav-item",
        onClick: () => _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
          url: '/pages/IPs/qinggeng/index'
        }),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
          className: "nav-icon",
          children: "\uD83C\uDF9E\uFE0F"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
          className: "nav-text",
          children: "IP"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "nav-item",
        onClick: () => _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
          url: '/pages/profile/index'
        }),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
          className: "nav-icon",
          children: "\uD83D\uDC64"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
          className: "nav-text",
          children: "\u6211\u7684"
        })]
      })]
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (MountainPage);

/***/ }),

/***/ "./src/pages/mountainPage/index.tsx":
/*!******************************************!*\
  !*** ./src/pages/mountainPage/index.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mountainPage_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/mountainPage/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/mountainPage/index!./src/pages/mountainPage/index.tsx");


var config = {};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mountainPage_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/mountainPage/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mountainPage_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mountainPage_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mountainPage_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_mountainPage_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/assets/images/bird.png":
/*!************************************!*\
  !*** ./src/assets/images/bird.png ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/bird.png";

/***/ }),

/***/ "./src/assets/images/mountain-page-bg.png":
/*!************************************************!*\
  !*** ./src/assets/images/mountain-page-bg.png ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/mountain-page-bg.png";

/***/ }),

/***/ "./src/assets/images/profile.png":
/*!***************************************!*\
  !*** ./src/assets/images/profile.png ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/profile.png";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/mountainPage/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map