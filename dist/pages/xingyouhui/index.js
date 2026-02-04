"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/xingyouhui/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/xingyouhui/index!./src/pages/xingyouhui/index.tsx":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/xingyouhui/index!./src/pages/xingyouhui/index.tsx ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
// src/pages/xingyouhui/index.tsx





const BG_IMAGE = "https://636c-cloud1-7gg10sorbbbec8d9-1392459764.tcb.qcloud.la/images/xingyouhui-main.png?sign=ab2cd2af34cb66d96905c56178f8f533&t=1769576959";
const LOCAL_IMAGE1 = __webpack_require__(/*! ../../assets/images/xyh-1.png */ "./src/assets/images/xyh-1.png");
const LOCAL_IMAGE2 = __webpack_require__(/*! ../../assets/images/xyh-2.png */ "./src/assets/images/xyh-2.png");
const LOCAL_IMAGE3 = __webpack_require__(/*! ../../assets/images/xyh-3.png */ "./src/assets/images/xyh-3.png");
const LOCAL_IMAGE4 = __webpack_require__(/*! ../../assets/images/xyh-3.png */ "./src/assets/images/xyh-3.png");
const StarFriends = () => {
  // 收藏状态管理
  const [favorites, setFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  // 评分点赞状态管理
  const [ratedItems, setRatedItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const components = [{
    id: 1,
    title: '角木蛟部落',
    description: '收到了！第一批黄精茶，汤色晶莹！',
    distance: '1.5 kms',
    rating: '4.8 ★',
    image: LOCAL_IMAGE1
  }, {
    id: 2,
    title: '黄精茶生活',
    description: '收到了！第一批黄精茶，汤色晶莹！',
    distance: '1.5 kms',
    rating: '4.8 ★',
    image: LOCAL_IMAGE2
  }, {
    id: 3,
    title: '金线莲种植心得',
    description: '晨间采摘，露水还未干透。',
    distance: '1.5 kms',
    rating: '4.8 ★',
    image: LOCAL_IMAGE3
  }, {
    id: 4,
    title: '金线莲种植心得',
    description: '晨间采摘，露水还未干透。',
    distance: '1.5 kms',
    rating: '4.8 ★',
    image: LOCAL_IMAGE4
  }];

  // 从本地存储加载收藏状态
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = await _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorage({
          key: 'starFriendsFavorites'
        });
        if (storedFavorites.data) {
          setFavorites(JSON.parse(storedFavorites.data));
        }
      } catch (error) {
        // 如果没有存储数据，使用空数组
        setFavorites([]);
      }
    };
    loadFavorites();
  }, []);

  // 从本地存储加载评分点赞状态
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const loadRatedItems = async () => {
      try {
        const storedRatedItems = await _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorage({
          key: 'starFriendsRatedItems'
        });
        if (storedRatedItems.data) {
          setRatedItems(JSON.parse(storedRatedItems.data));
        }
      } catch (error) {
        setRatedItems([]);
      }
    };
    loadRatedItems();
  }, []);

  // 保存收藏状态到本地存储
  const saveFavorites = async newFavorites => {
    try {
      await _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorage({
        key: 'starFriendsFavorites',
        data: JSON.stringify(newFavorites)
      });
    } catch (error) {
      console.error('保存收藏失败:', error);
    }
  };

  // 保存评分点赞状态到本地存储
  const saveRatedItems = async newRatedItems => {
    try {
      await _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorage({
        key: 'starFriendsRatedItems',
        data: JSON.stringify(newRatedItems)
      });
    } catch (error) {
      console.error('保存点赞失败:', error);
    }
  };

  // 切换收藏状态
  const toggleFavorite = id => {
    let newFavorites;
    if (favorites.includes(id)) {
      // 如果已收藏，则取消收藏
      newFavorites = favorites.filter(favId => favId !== id);
    } else {
      // 如果未收藏，则添加收藏
      newFavorites = [...favorites, id];
    }
    setFavorites(newFavorites);
    saveFavorites(newFavorites);
  };

  // 切换评分点赞状态
  const toggleRating = id => {
    let newRatedItems;
    if (ratedItems.includes(id)) {
      // 如果已点赞，则取消点赞
      newRatedItems = ratedItems.filter(itemId => itemId !== id);
    } else {
      // 如果未点赞，则添加点赞
      newRatedItems = [...ratedItems, id];
    }
    setRatedItems(newRatedItems);
    saveRatedItems(newRatedItems);
  };

  // 判断是否已收藏
  const isFavorited = id => {
    return favorites.includes(id);
  };

  // 判断是否已点赞
  const isRated = id => {
    return ratedItems.includes(id);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: "star-friends-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
      src: BG_IMAGE,
      mode: "aspectFill",
      className: "background-image"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "explore-header",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
        className: "explore-title",
        children: "\u63A2\u7D22\u66F4\u591A"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "components-grid",
      children: components.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "component-card",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          className: `favorite-heart ${isFavorited(item.id) ? 'favorited' : ''}`,
          onClick: e => {
            e.stopPropagation();
            toggleFavorite(item.id);
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
            className: "heart-icon",
            children: "\u2661"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          className: "image-container",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
            src: item.image,
            mode: "aspectFill",
            className: "component-image"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
          className: "component-title",
          children: item.title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
          className: "component-description",
          children: item.description
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          className: "component-info",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
            className: "distance",
            children: item.distance
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
            className: `rating ${isRated(item.id) ? 'rated' : ''}`,
            onClick: e => {
              e.stopPropagation();
              toggleRating(item.id);
            },
            children: item.rating
          })]
        })]
      }, item.id))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "bottom-nav",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "nav-item active",
        onClick: () => _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
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
        onClick: () => _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
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
        onClick: () => _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
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
        onClick: () => _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
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
/* harmony default export */ __webpack_exports__["default"] = (StarFriends);

/***/ }),

/***/ "./src/pages/xingyouhui/index.tsx":
/*!****************************************!*\
  !*** ./src/pages/xingyouhui/index.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_xingyouhui_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/xingyouhui/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/xingyouhui/index!./src/pages/xingyouhui/index.tsx");


var config = {};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_xingyouhui_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/xingyouhui/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_xingyouhui_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_xingyouhui_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_xingyouhui_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_xingyouhui_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/assets/images/xyh-1.png":
/*!*************************************!*\
  !*** ./src/assets/images/xyh-1.png ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/xyh-1.png";

/***/ }),

/***/ "./src/assets/images/xyh-2.png":
/*!*************************************!*\
  !*** ./src/assets/images/xyh-2.png ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/xyh-2.png";

/***/ }),

/***/ "./src/assets/images/xyh-3.png":
/*!*************************************!*\
  !*** ./src/assets/images/xyh-3.png ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/xyh-3.png";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors"], function() { return __webpack_exec__("./src/pages/xingyouhui/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map