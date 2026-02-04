"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/constellation/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/constellation/index!./src/pages/constellation/index.tsx":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/constellation/index!./src/pages/constellation/index.tsx ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store */ "./src/store/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
// src/pages/constellation/index.tsx






// 导入图片

const generalBg = __webpack_require__(/*! ../../assets/images/general-bg.png */ "./src/assets/images/general-bg.png");
const constellationImage = __webpack_require__(/*! ../../assets/images/constellation.png */ "./src/assets/images/constellation.png");

// 星座数据
const constellationData = {
  aries: {
    chineseName: '角木蛟',
    englishName: 'ARIES',
    element: '木曜',
    time: '寅时',
    description: '蛟龙得水，生机勃发。你是天生的治愈者。',
    luck: 34,
    date: '九月 22 2023',
    day: '星期五'
  },
  taurus: {
    chineseName: '亢金龙',
    englishName: 'TAURUS',
    element: '金曜',
    time: '卯时',
    description: '金龙腾云，财运亨通。你是财富的守护者。',
    luck: 68,
    date: '九月 22 2023',
    day: '星期五'
  },
  gemini: {
    chineseName: '氐土貉',
    englishName: 'GEMINI',
    element: '土曜',
    time: '辰时',
    description: '土貉藏智，灵动多变。你是智慧的传播者。',
    luck: 45,
    date: '九月 22 2023',
    day: '星期五'
  },
  cancer: {
    chineseName: '房日兔',
    englishName: 'CANCER',
    element: '日曜',
    time: '巳时',
    description: '玉兔临月，情感细腻。你是家庭的守护者。',
    luck: 72,
    date: '九月 22 2023',
    day: '星期五'
  },
  leo: {
    chineseName: '心月狐',
    englishName: 'LEO',
    element: '月曜',
    time: '午时',
    description: '灵狐拜月，魅力四射。你是人群的焦点。',
    luck: 88,
    date: '九月 22 2023',
    day: '星期五'
  },
  virgo: {
    chineseName: '尾火虎',
    englishName: 'VIRGO',
    element: '火曜',
    time: '未时',
    description: '猛虎下山，雷厉风行。你是完美的追求者。',
    luck: 56,
    date: '九月 22 2023',
    day: '星期五'
  },
  libra: {
    chineseName: '箕水豹',
    englishName: 'LIBRA',
    element: '水曜',
    time: '申时',
    description: '水豹潜渊，和谐公正。你是平衡的维护者。',
    luck: 63,
    date: '九月 22 2023',
    day: '星期五'
  },
  scorpio: {
    chineseName: '斗木獬',
    englishName: 'SCORPIO',
    element: '木曜',
    time: '酉时',
    description: '獬豸明辨，洞察秋毫。你是真相的探索者。',
    luck: 41,
    date: '九月 22 2023',
    day: '星期五'
  },
  sagittarius: {
    chineseName: '牛金牛',
    englishName: 'SAGITTARIUS',
    element: '金曜',
    time: '戌时',
    description: '金牛拓土，乐观自由。你是远方的向往者。',
    luck: 79,
    date: '九月 22 2023',
    day: '星期五'
  },
  capricorn: {
    chineseName: '女土蝠',
    englishName: 'CAPRICORN',
    element: '土曜',
    time: '亥时',
    description: '土蝠归巢，坚韧务实。你是目标的实现者。',
    luck: 52,
    date: '九月 22 2023',
    day: '星期五'
  },
  aquarius: {
    chineseName: '虚日鼠',
    englishName: 'AQUARIUS',
    element: '日曜',
    time: '子时',
    description: '灵鼠过隙，创新独立。你是未来的创造者。',
    luck: 67,
    date: '九月 22 2023',
    day: '星期五'
  },
  pisces: {
    chineseName: '危月燕',
    englishName: 'PISCES',
    element: '月曜',
    time: '丑时',
    description: '雨燕归梁，浪漫柔情。你是梦想的编织者。',
    luck: 58,
    date: '九月 22 2023',
    day: '星期五'
  }
};

// 根据生日计算星座
function calculateConstellation(month, day) {
  const dates = [{
    sign: 'capricorn',
    start: [12, 22],
    end: [1, 19]
  }, {
    sign: 'aquarius',
    start: [1, 20],
    end: [2, 18]
  }, {
    sign: 'pisces',
    start: [2, 19],
    end: [3, 20]
  }, {
    sign: 'aries',
    start: [3, 21],
    end: [4, 19]
  }, {
    sign: 'taurus',
    start: [4, 20],
    end: [5, 20]
  }, {
    sign: 'gemini',
    start: [5, 21],
    end: [6, 21]
  }, {
    sign: 'cancer',
    start: [6, 22],
    end: [7, 22]
  }, {
    sign: 'leo',
    start: [7, 23],
    end: [8, 22]
  }, {
    sign: 'virgo',
    start: [8, 23],
    end: [9, 22]
  }, {
    sign: 'libra',
    start: [9, 23],
    end: [10, 23]
  }, {
    sign: 'scorpio',
    start: [10, 24],
    end: [11, 22]
  }, {
    sign: 'sagittarius',
    start: [11, 23],
    end: [12, 21]
  }];
  for (const date of dates) {
    const [startMonth, startDay] = date.start;
    const [endMonth, endDay] = date.end;
    if (month === startMonth && day >= startDay || month === endMonth && day <= endDay) {
      return date.sign;
    }
  }
  return 'aries'; // 默认白羊座
}
const ConstellationPage = () => {
  const [constellationInfo, setConstellationInfo] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [userName, setUserName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // 从 store 获取用户数据
    const userData = _store__WEBPACK_IMPORTED_MODULE_2__.appStore.getUserData();
    setUserName(userData.username || '用户');
    if (userData.birthdate) {
      // 解析生日
      const [year, month, day] = userData.birthdate.split('-').map(Number);
      const constellationKey = calculateConstellation(month, day);
      const info = constellationData[constellationKey];
      setConstellationInfo(info);

      // 保存星座信息到 store
      _store__WEBPACK_IMPORTED_MODULE_2__.appStore.setUserData({
        constellation: info.chineseName
      });
    } else {
      // 如果没有生日数据，跳回首页
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: '请先填写生日',
        icon: 'none',
        duration: 2000
      });
      setTimeout(() => {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().redirectTo({
          url: '/pages/index/index'
        });
      }, 2000);
    }
  }, []);
  const handleBack = () => {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateBack();
  };
  const handleHome = () => {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().switchTab({
      url: '/pages/index/index'
    });
  };
  const handleMy = () => {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
      title: '我的页面',
      icon: 'none'
    });
  };

  // 新增：处理地图导航
  const handleMap = () => {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: '/pages/mountainPage/index'
    });
  };
  if (!constellationInfo) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
      className: "constellation-container loading",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
        children: "\u6B63\u5728\u8BA1\u7B97\u60A8\u7684\u661F\u5EA7..."
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
    className: "constellation-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Image, {
      className: "background-image",
      src: generalBg,
      mode: "aspectFill"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
      className: "header-nav",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: "back-button",
        onClick: handleBack,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
          className: "back-arrow",
          children: "\u2190"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
        className: "title"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: "nav-placeholder"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
      className: "main-content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: "greeting-section",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
          className: "greeting-text",
          children: ["\u4F60\u597D\uFF0C", userName, "! "]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
          className: "time-info",
          children: [constellationInfo.time, "\xB7", constellationInfo.element, ", ", constellationInfo.day]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: "constellation-image-container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Image, {
          className: "constellation-image",
          src: constellationImage,
          mode: "aspectFit"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: "constellation-names",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
          className: "chinese-name",
          children: constellationInfo.chineseName
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
          className: "english-name",
          children: constellationInfo.englishName
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: "description-section",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
          className: "description-text",
          children: constellationInfo.description
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
          className: "view-more",
          onClick: () => {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
              url: `/pages/constellation-detail/index?constellation=${constellationInfo.chineseName}`
            });
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
            className: "view-more-text",
            children: "\u67E5\u770B\u66F4\u591A"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
            className: "arrow",
            children: ">"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: "luck-section",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
          className: "luck-title",
          children: "\u4ECA\u65E5\u661F\u5BBF\u8FD0\u52BF"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
          className: "luck-date",
          children: [constellationInfo.date, ", ", constellationInfo.day]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
          className: "luck-progress-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
            className: "luck-label-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
              className: "luck-label",
              children: "\u8FD0\u52BF\u6307\u6570"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
              className: "luck-percent",
              children: [constellationInfo.luck, "%"]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Progress, {
            percent: constellationInfo.luck,
            strokeWidth: 6,
            activeColor: "#FFD700",
            backgroundColor: "rgba(255, 215, 0, 0.2)",
            className: "luck-progress"
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
      className: "bottom-nav",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: "nav-item active",
        onClick: () => _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
          url: '/pages/xingyouhui/index'
        }),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
          className: "nav-icon",
          children: "\uD83D\uDD05"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
          className: "nav-text",
          children: "\u661F\u53CB\u4F1A"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: "nav-item",
        onClick: handleMap,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
          className: "nav-icon",
          children: "\uD83D\uDDFA\uFE0F"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
          className: "nav-text",
          children: "\u5730\u56FE"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: "nav-item",
        onClick: () => _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
          url: '/pages/IPs/qinggeng/index'
        }),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
          className: "nav-icon",
          children: "\uD83C\uDF9E\uFE0F"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
          className: "nav-text",
          children: "IP"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
        className: "nav-item",
        onClick: () => _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
          url: '/pages/profile/index'
        }),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
          className: "nav-icon",
          children: "\uD83D\uDC64"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
          className: "nav-text",
          children: "\u6211\u7684"
        })]
      })]
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (ConstellationPage);

/***/ }),

/***/ "./src/pages/constellation/index.tsx":
/*!*******************************************!*\
  !*** ./src/pages/constellation/index.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_constellation_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/constellation/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/constellation/index!./src/pages/constellation/index.tsx");


var config = {};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_constellation_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/constellation/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_constellation_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_constellation_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_constellation_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_constellation_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/constellation/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map