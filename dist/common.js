"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appStore: function() { return /* binding */ appStore; }
/* harmony export */ });
/* harmony import */ var _Users_gegekang_Desktop_weapp_demo_2026_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);

// src/store/index.ts

class AppStore {
  constructor() {
    (0,_Users_gegekang_Desktop_weapp_demo_2026_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "STORAGE_KEY", 'app-store-v1');
  }
  getUserData() {
    try {
      return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync(this.STORAGE_KEY) || {};
    } catch (error) {
      console.error('读取用户数据失败:', error);
      return {};
    }
  }
  setUserData(data) {
    try {
      const currentData = this.getUserData();
      const newData = {
        ...currentData,
        ...data
      };
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync(this.STORAGE_KEY, newData);
      return true;
    } catch (error) {
      console.error('保存用户数据失败:', error);
      return false;
    }
  }
  clearUserData() {
    try {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync(this.STORAGE_KEY);
      return true;
    } catch (error) {
      console.error('清除用户数据失败:', error);
      return false;
    }
  }
  getUsername() {
    return this.getUserData().username || '';
  }
  getBirthdate() {
    return this.getUserData().birthdate || '';
  }
  getBirthtime() {
    return this.getUserData().birthtime || '';
  }
  getGender() {
    return this.getUserData().gender;
  }
  getRelationship() {
    return this.getUserData().relationship;
  }
}
const appStore = new AppStore();

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeekday: function() { return /* binding */ getWeekday; },
/* harmony export */   showToast: function() { return /* binding */ showToast; }
/* harmony export */ });
/* unused harmony exports formatDate, getToday, showLoading, hideLoading, validatePhone, validateEmail, calculateAge */
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
// src/utils/index.ts


// 格式化日期
const formatDate = date => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;
};

// 获取今天日期
const getToday = () => {
  return formatDate(new Date());
};

// 获取星期几
const getWeekday = date => {
  const d = date ? typeof date === 'string' ? new Date(date) : date : new Date();
  const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  return weekdays[d.getDay()];
};

// 显示Toast
const showToast = (title, icon = 'none') => {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
    title,
    icon,
    duration: 2000
  });
};

// 显示加载
const showLoading = (title = '加载中...') => {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showLoading({
    title
  });
};

// 隐藏加载
const hideLoading = () => {
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().hideLoading();
};

// 验证手机号
const validatePhone = phone => {
  const reg = /^1[3-9]\d{9}$/;
  return reg.test(phone);
};

// 验证邮箱
const validateEmail = email => {
  const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return reg.test(email);
};

// 计算年龄
const calculateAge = birthdate => {
  const birthDate = new Date(birthdate);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || monthDiff === 0 && today.getDate() < birthDate.getDate()) {
    age--;
  }
  return age;
};

/***/ }),

/***/ "./src/assets/images/constellation.png":
/*!*********************************************!*\
  !*** ./src/assets/images/constellation.png ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/constellation.png";

/***/ }),

/***/ "./src/assets/images/general-bg.png":
/*!******************************************!*\
  !*** ./src/assets/images/general-bg.png ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/general-bg.png";

/***/ }),

/***/ "./src/assets/images/start-button.png":
/*!********************************************!*\
  !*** ./src/assets/images/start-button.png ***!
  \********************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYYAAAAwCAYAAAAVZN05AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARrSURBVHgB7d0xbBtVHMfx///SqV0iUWUslykdIjVlydCBtBIjStjCRACJCQkmEFKlOBILnSgjUisz0TEtI1LrpUOXEqQMZcoVtqgVZoAt/vP+d3n22bEdZ2vefT/S5eK7Z4/v5/97955VZrS1YfNzImvWk3dFLTeRPFyeP76dCwDgTVDEs4p0Q3/9u0q2dyTSae9qd5YP0NMahEDIs558YWpbMggCAMA5o2LtnmY7ISCK6e0m8AohBMJ2CIQvBQCQDDVt3X+kOxPvj7voVYKaPRGGiAAgVYWp3hxXPWSjF0IorBAKAJC8sgDwPn/0xlDFQKUAAI1zonIYqhgIBQBonFg59B8u6gfDJxu2LYQCADSRP326HV+UQ0nHQ0gHAgBorDCktOhDSmXFkNkgKQAAzaS9Xrk8QX1cKVQLfwsAoOm6XjVkc3K0JgAAVLtbrIVRJF0RAACkHE5ay8SyawIAgMs0z0yNjfEAABWTt0PFoLkAAFCZzwQAgJoLoW7IBcBUn3+jcmVR5NdfLBwCpCy/IEBCLi+I3Pnx1N+fGvLdbZM/9gevl5ZFri6f/Fw/btxSuXjJhu49fSzy6lCAZBAMSE7spC9eqo7//q2OyDv4ertRHgrrm+PDxauGK4vD917sG8GApBAMSIp30F99Vn2jX9+sOngf/nn4YNDm/m7Vscd2kzx/ZvLbs8n3/bNjyAApIRiACV4fahhimhweHkIEA1JEMAATvPe+H2ebrwBSQDAgKT58FC0ta/+8vmlT2/qTRvV5COcVwSxzB6PvA847ggFJGTdpfLV8ykintn362PodfBwe4tFUNBXBgKQ8fDCoDK6vVmsPnocJ5L8OBtdjINTb1r/1v7VQ3f/wUw2HTPViX+TO7emT2MB5QzAgKfWnj5aO1yL4N//6OoU4hFRvG/njrXENQ5xcHjecFB+FBVJEMCBJ3qHHDv71GdYYXF+tzn8eVFWEf869H4aDxXnofP0tE9NIE3slIUnxaSIf6jnL4rM4zORVBtBUVAxIjnfu/qip+/ne7B18XLDmQeLbXNy4VV1/Z/XkeoXLC1QLSBfBgKQsLdfnECxMOs/+3leHvrWFDk1KO9YyoGn043U7YIdVpGTa5LKLlYBXBdN4u9NWNsfqAkhIQTAAAOqKMPlsXQEAoFJkKloIAABO5Z/MtPdSAAAQzwXbyzKxjgAAEPQk28uOZK4T/meeAQDgOll7V7ui9pMAABpN1dqeCeWWGCbZ9wIAaLQwjLTj5zIYQkIUoWq4KwCARjKznTILpLaJXqgaWuFUCACgaYr2o7lWfNEPBh9XMtWbQjgAQJMUx31/39C2215GhAYfCOEAAE1Q9vlxCCkau23k1oblavYk/JsLACBFZaUwGgpu6n7CWxtHLTXdFgBAMsJE813Jsla5XGGMUzeaL6sH6bXE9CMBAJxX5Zo1X54wrkqom/kXSEJAzIfTWia9lfC2ayYyL9YfasoFAPAmKMq/Kl314SKxlyEMOuFKZ1KFMOp/fVB1keRTcwwAAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/assets/images/water-plant-button.png":
/*!**************************************************!*\
  !*** ./src/assets/images/water-plant-button.png ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/water-plant-button.png";

/***/ }),

/***/ "./src/assets/images/weed-plant-button.png":
/*!*************************************************!*\
  !*** ./src/assets/images/weed-plant-button.png ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/weed-plant-button.png";

/***/ })

}]);
//# sourceMappingURL=common.js.map