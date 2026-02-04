"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/profile/index"],{

/***/ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/profile/index!./src/pages/profile/index.tsx":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/profile/index!./src/pages/profile/index.tsx ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
// src/pages/profile/index.tsx





const profileBg = __webpack_require__(/*! @/assets/images/general-bg.png */ "./src/assets/images/general-bg.png");
// 默认头像
const defaultAvatar = __webpack_require__(/*! @/assets/images/avatar.png */ "./src/assets/images/avatar.png");
// 导入功能图标
const mapIcon = __webpack_require__(/*! @/assets/images/map.png */ "./src/assets/images/map.png");
const petIcon = __webpack_require__(/*! @/assets/images/pet.png */ "./src/assets/images/pet.png");
const friendsIcon = __webpack_require__(/*! @/assets/images/friends.png */ "./src/assets/images/friends.png");
const walletIcon = __webpack_require__(/*! @/assets/images/wallet.png */ "./src/assets/images/wallet.png");
const logoutIcon = __webpack_require__(/*! @/assets/images/logout.png */ "./src/assets/images/logout.png");
const ProfilePage = () => {
  const [userName, setUserName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('晴天小太初');
  const [userBio, setUserBio] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('探寻我的本源生活中~');
  const [userStats, setUserStats] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    likes: 7,
    favorites: 10,
    likesReceived: 5
  });
  // 用户头像状态
  const [userAvatar, setUserAvatar] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultAvatar);
  // 控制编辑用户名弹窗
  const [showEditNameModal, setShowEditNameModal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  // 新用户名输入
  const [newUserName, setNewUserName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');

  // 从本地存储读取用户信息
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // 读取头像
    const savedAvatar = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('userAvatar');
    if (savedAvatar) {
      setUserAvatar(savedAvatar);
    }

    // 读取用户名
    const savedUserName = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('userName');
    if (savedUserName) {
      setUserName(savedUserName);
      setNewUserName(savedUserName); // 初始化编辑输入框
    }

    // 监听页面显示，确保信息更新
    const handleShow = () => {
      const currentAvatar = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('userAvatar');
      if (currentAvatar && currentAvatar !== userAvatar) {
        setUserAvatar(currentAvatar);
      }
      const currentUserName = _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('userName');
      if (currentUserName && currentUserName !== userName) {
        setUserName(currentUserName);
      }
    };

    // 添加页面显示监听
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().eventCenter.on('pageShow', handleShow);
    return () => {
      // 清理监听
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().eventCenter.off('pageShow', handleShow);
    };
  }, []);

  // 打开编辑用户名弹窗
  const handleEditUserName = () => {
    setNewUserName(userName); // 设置当前用户名为默认值
    setShowEditNameModal(true);
  };

  // 保存新用户名
  const handleSaveUserName = () => {
    if (!newUserName.trim()) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: '用户名不能为空',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    if (newUserName.length > 20) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
        title: '用户名不能超过20个字符',
        icon: 'none',
        duration: 2000
      });
      return;
    }

    // 更新本地状态
    setUserName(newUserName);

    // 保存到本地缓存
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setStorageSync('userName', newUserName);

    // 关闭弹窗
    setShowEditNameModal(false);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
      title: '用户名修改成功',
      icon: 'success',
      duration: 1500
    });

    // 可选：上传到服务器
    // updateUserNameToServer(newUserName)
  };

  // 取消编辑用户名
  const handleCancelEditUserName = () => {
    setShowEditNameModal(false);
  };

  // 上传用户名到服务器（可选功能）
  const updateUserNameToServer = name => {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showLoading({
      title: '保存中...'
    });

    // TODO: 替换为你的实际更新接口
    // 示例代码：
    /*
    Taro.request({
      url: 'https://your-api.com/user/update',
      method: 'POST',
      data: {
        userId: '123',
        userName: name
      },
      success: (res) => {
        Taro.hideLoading()
        console.log('用户名更新成功', res)
      },
      fail: (err) => {
        Taro.hideLoading()
        console.log('用户名更新失败', err)
      }
    })
    */

    // 模拟上传成功
    setTimeout(() => {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
    }, 1000);
  };

  // 从相册选择头像
  const handleChangeAvatar = () => {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().chooseImage({
      count: 1,
      // 最多选择1张图片
      sizeType: ['compressed'],
      // 压缩图，节省空间
      sourceType: ['album'],
      // 仅从相册选择
      success: res => {
        const tempFilePath = res.tempFilePaths[0];
        console.log('选择图片成功', tempFilePath);

        // 预览图片
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().previewImage({
          urls: [tempFilePath],
          current: tempFilePath,
          success: () => {
            // 用户确认后更新头像
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
              title: '确认头像',
              content: '使用这张图片作为头像吗？',
              confirmText: '使用',
              cancelText: '重新选择',
              success: modalRes => {
                if (modalRes.confirm) {
                  // 更新本地头像显示
                  setUserAvatar(tempFilePath);

                  // 保存到本地缓存
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setStorageSync('userAvatar', tempFilePath);
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                    title: '头像更新成功',
                    icon: 'success',
                    duration: 1500
                  });

                  // 可选：上传到服务器
                  // uploadAvatar(tempFilePath)
                } else if (modalRes.cancel) {
                  // 重新选择
                  handleChangeAvatar();
                }
              }
            });
          },
          fail: err => {
            console.log('预览失败', err);
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '预览失败',
              icon: 'none',
              duration: 1500
            });
          }
        });
      },
      fail: err => {
        console.log('选择图片失败', err);

        // 根据错误类型给出提示
        if (err.errMsg.includes('cancel')) {
          // 用户取消选择，不提示
          return;
        }
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
          title: '提示',
          content: '选择图片失败，请检查是否已授权相册访问权限',
          showCancel: false,
          confirmText: '我知道了'
        });
      }
    });
  };

  // 上传头像到服务器（可选功能）
  const uploadAvatar = tempFilePath => {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showLoading({
      title: '上传中...'
    });

    // TODO: 替换为你的实际上传接口
    // 模拟上传成功
    setTimeout(() => {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
    }, 1000);
  };

  // 跳转到地图页面
  const handleNavigateToMap = () => {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: '/pages/mountainPage/index'
    });
  };

  // 跳转到宠物页面
  const handleNavigateToPet = () => {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: '/pages/adopt/index'
    });
  };

  // 跳转到好友页面
  const handleNavigateToFriends = () => {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
      title: '好友页面开发中',
      icon: 'none'
    });
  };

  // 跳转到钱包页面
  const handleNavigateToWallet = () => {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
      title: '钱包页面开发中',
      icon: 'none'
    });
  };

  // 退出登录
  const handleLogout = () => {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      confirmColor: '#ff4d4f',
      success: res => {
        if (res.confirm) {
          // 退出时清空缓存
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().removeStorageSync('userAvatar');
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().removeStorageSync('userName');
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showLoading({
            title: '退出中...'
          });
          setTimeout(() => {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '已退出登录',
              icon: 'success',
              duration: 1500
            });
            setTimeout(() => {
              _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().reLaunch({
                url: '/pages/login/index'
              });
            }, 1500);
          }, 1000);
        }
      }
    });
  };

  // 底部导航栏跳转
  const handleNavigateToHome = () => {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().switchTab({
      url: '/pages/index/index'
    });
  };

  // 地图导航
  const handleMap = () => {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: '/pages/mountainPage/index'
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: "profile-page",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
      className: "background-image",
      src: profileBg,
      mode: "aspectFill"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "user-card",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "user-avatar-section",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          className: "avatar-container",
          onClick: handleChangeAvatar,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
            className: "user-avatar",
            src: userAvatar
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
            className: "avatar-overlay",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
              className: "change-icon",
              children: "\uD83D\uDCF7"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
              className: "change-text",
              children: "\u66F4\u6362\u5934\u50CF"
            })]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "user-info-section",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          className: "username-container",
          onClick: handleEditUserName,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
            className: "username",
            children: userName
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
            className: "edit-icon",
            children: "\u270F\uFE0F"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
          className: "bio",
          children: userBio
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "user-stats-section",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          className: "stats-box",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
            className: "stat-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
              className: "stat-number",
              children: userStats.likes
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
              className: "stat-label",
              children: "\u70B9\u8D5E"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
            className: "stat-divider"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
            className: "stat-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
              className: "stat-number",
              children: userStats.favorites
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
              className: "stat-label",
              children: "\u6536\u85CF"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
            className: "stat-divider"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
            className: "stat-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
              className: "stat-number",
              children: userStats.likesReceived
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
              className: "stat-label",
              children: "\u559C\u6B22"
            })]
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "vertical-menu",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "menu-item",
        onClick: handleNavigateToMap,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
          className: "menu-icon",
          src: mapIcon,
          mode: "aspectFit"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
          className: "menu-text",
          children: "\u6211\u7684\u5730\u56FE"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "menu-item",
        onClick: handleNavigateToPet,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
          className: "menu-icon",
          src: petIcon,
          mode: "aspectFit"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
          className: "menu-text",
          children: "\u6211\u7684\u5BA0\u7269"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "menu-item",
        onClick: handleNavigateToFriends,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
          className: "menu-icon",
          src: friendsIcon,
          mode: "aspectFit"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
          className: "menu-text",
          children: "\u6211\u7684\u597D\u53CB"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "menu-item",
        onClick: handleNavigateToWallet,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
          className: "menu-icon",
          src: walletIcon,
          mode: "aspectFit"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
          className: "menu-text",
          children: "\u6211\u7684\u94B1\u5305"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "menu-item logout-item",
        onClick: handleLogout,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
          className: "menu-icon",
          src: logoutIcon,
          mode: "aspectFit"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
          className: "menu-text",
          children: "\u9000\u51FA\u767B\u5F55"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "bottom-nav",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "nav-item",
        onClick: handleNavigateToHome,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
          className: "nav-icon",
          children: "\uD83C\uDFE0"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
          className: "nav-text",
          children: "\u9996\u9875"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "nav-item",
        onClick: handleMap,
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
        className: "nav-item active",
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
    }), showEditNameModal && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "edit-modal-overlay",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "edit-modal",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          className: "edit-modal-header",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
            className: "edit-modal-title",
            children: "\u7F16\u8F91\u7528\u6237\u540D"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          className: "edit-modal-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Input, {
            className: "user-name-input",
            value: newUserName,
            placeholder: "\u8BF7\u8F93\u5165\u7528\u6237\u540D",
            maxlength: 20,
            onInput: e => setNewUserName(e.detail.value),
            focus: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
            className: "input-tips",
            children: "\u6700\u591A20\u4E2A\u5B57\u7B26"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          className: "edit-modal-footer",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
            className: "edit-button cancel",
            onClick: handleCancelEditUserName,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
              className: "edit-button-text",
              children: "\u53D6\u6D88"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
            className: "edit-button confirm",
            onClick: handleSaveUserName,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
              className: "edit-button-text",
              children: "\u4FDD\u5B58"
            })
          })]
        })]
      })
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (ProfilePage);

/***/ }),

/***/ "./src/pages/profile/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/profile/index.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/dsl/common.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !!../../../node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/profile/index!./index.tsx */ "./node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/profile/index!./src/pages/profile/index.tsx");


var config = {};



var taroOption = (0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_1__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"], 'pages/profile/index', {root:{cn:[]}}, config || {})
if (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"] && _node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors) {
  taroOption.behaviors = (taroOption.behaviors || []).concat(_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"].behaviors)
}
var inst = Page(taroOption)



/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_profile_index_index_tsx__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/assets/images/avatar.png":
/*!**************************************!*\
  !*** ./src/assets/images/avatar.png ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/avatar.png";

/***/ }),

/***/ "./src/assets/images/friends.png":
/*!***************************************!*\
  !*** ./src/assets/images/friends.png ***!
  \***************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAMAAAANf8AYAAAASFBMVEUAAAC3t8+3uc63us6vss+3us+3uc64us63us63us66us+3us64us22uc+2uM24uM22uM23uM+3uc+4us+2ucy4u824us+3uc67JcxjAAAAF3RSTlMAIN+/EECA75/PMGCvUJBwcGDfj1Bwb30v4wMAAAGZSURBVEjH7VTbcoQgDCUQruqqdbf8/59WCQPNGKc+tH3a85QzcHIjQb3xB7Cb0WYc4L5i0pmgnboGvoIx20Rkyx0RrxTOV79pZ66YP4ggthtGqYEMN8ymWJuoid+8KlVqWagTxZYa4arjh85+Uk+SENJBzn0gx9qWJFGpcLB29qiMgxzbRg3zbI9DOTXT6cdOh8ZAKoiSCbwhS2OJxWEpj9xFDztL9dB7eGS3WnmgSxInYG6BMKFCf7gG4pEcnGHK1AwAL39cpucKFpLz5E4A+NyxsLGgkBJs7lipiC5JSkYqt1oi+OgzC+oS61GUH1u/Qjx4IH4NwBP/ZWC6pohXi637DwNh37xK0e5lBrhc7EgNsJ6oNsboak5c0R+Dhm7KEtbTkjbY4kECK3ig4MHTzIfyjvNICZJdbvAwdaLsPKOCNgppcs4NCct+sc1VT55tEGcy1i2Uv5UobRj1BdnqPPqpvGFYusA0Cz8UBvmDf2b8Y7qt+YQCrBoLJ5w1FdqSRoasyeamZmQa5e9oQLP/ZS1UglNv/C++AJJlOux5MwcjAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/assets/images/logout.png":
/*!**************************************!*\
  !*** ./src/assets/images/logout.png ***!
  \**************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAMAAAANf8AYAAAAP1BMVEUAAAC3us63uc23uc63t8+3us+vr8+4us63t823u8+3us+3uc63t8+3us63uM23u8+6us+4us63us23uM+3uc4gayxcAAAAFHRSTlMAv4DfIGAQ74B/oI9Az3BAMLCfUHp4nZcAAAD/SURBVEjH7dTRGoIgDAVgCAQMlSze/1nTME1P2+yzS8/l9GeDi6kzh+O6e6/fiZXbIaLPq5haItZkSOv4LgPBaNbE8s9ljn4VOm6y1wXsZ6kZr+cZU42mkAWNtUSb6/C53xYNP9w4/QUOgqJswlCsfjQq6jB1rGWDQ9aSQQJIMiEjQiMjNDJCIyM0VptNckGMaTORG208ZRJtOoIY7g2aap1QiAXDLQsgYCSCRiayaYHI5uaB0MY97IRgO1Im+ewn5A7vkOVzFA/C1eu/7dYHbZqMjXrcrThHvqflyVKpKMU3wniruAQAcBtMZ7bCNEqKva5UG5zaE2fnOHXmz3kCVFwjUmFeI5cAAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/assets/images/map.png":
/*!***********************************!*\
  !*** ./src/assets/images/map.png ***!
  \***********************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAMAAAANf8AYAAAAOVBMVEUAAAC3t8+3us63uc23uc+3us6vsc+4us63us64uc23uc63u8+3u8+3t8+2uM24us64u822ts+3uc5X94CiAAAAEnRSTlMAIL+A32AQ76CvkEB/QHDPcFB8Q/jDAAAAy0lEQVRIx+2VSxaCMAxFk9A/CMr+F6vBkX1tteph1DsM3CYngxca/Iy7higlYporxuL3OqZksdnbLNgFFGDNnXSUZSqSjge9yyY7ZmaqMen3iV6wWmOqE7QRjhapwQUfjdCas+WiI+pkwxrX6WyPgu10tDB3OixmpU5HOcPhzS90wg6M7no4w/nCkfyXDzLEhXgjcCC+EjVgdCaMvEJoQuRBI7gakhVFpTBXjOdpspCtbwmUs7aF8tWwpqmIK04dqpaXC9VwXIYGf+AOnnQlE5wbvhsAAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/assets/images/pet.png":
/*!***********************************!*\
  !*** ./src/assets/images/pet.png ***!
  \***********************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASJSURBVHgB7ZldctpIEIC7RbIGJ1XrIyQnMIoPsOYhdiAPa05gOMHCCUxOYO8JzJ4Av8QE74PJ+8ZiTxDlBqQqcUjKmk63gmNJMxKSwFCV4nuxGUY90+qfmW4A1qxZs+ZXACEj/X+dXQRVJoJtJNj6MWq5hOp/8KxhtWq7q5AlpFaGFz5Cohb9XDROInV5I6+SNtK/cBoAdAgEuzCnrND0WRP6fecJWHTJ/z6BDKCFJy+e221NVoFOZyoRxcJO9bn9ata0RGUuLpyyArqcaY0YCGD09Ror9bo9nleWWKm6t9NMnBL3hbxFLJATs7jLwoe82w++EAu2gXDXNFcUQoX1OFmIMCagM5El37NFt2MtN0OheGUGV+9Bdy0XFDbZh4fR+b2es1UsqhYW8K80b3+qZNsky3dHUA12ryPtOaJ27cXOiUkmmhVxWAh1IsP/TK6xJS4DCaSMsVSyzgfOgYV0Gnw5vOHxl2t8anrWMouhRmTATbO44GcehRVxH9P3aNFZdf9ZI42s2r59Rh6GkghbdGujxFYzoClzPvjvAKJv1cJmmsVvEYXUDZmyj0s3VhsywLK6bI5hcIzj6k/TXN0yHMihBxFGnBaHkJFajf06solpvLmQFQ/DL4YThMRodNqD6MA0m9ytr+gt5MXDJsdPh13rd+XB21r12RByMCnCqPgtPPboke89o+DYA5iNCzmZWqEBc1Kv2OM3F1fjYCLwUM+YFvxCaMrw/SsU6Ig5T+wFk+bs0pQhwI/hASzDinn92tH2MPkUjhfBZJnQJLbMH7BirIcQUkYOzlSHpsd1RPCzHFJSd8BK4XIh+InAmGE1ZV6+tEfR05s8dQArwr8eRS+exBdTA8ZsRh79HZqEeGg6pJYBFuBIHw17z89RMGJ1g5/E1UqPTULvF7EK35IboUEpA2JuEUZl/MmRqwgpai07doxW4TI6bn7soVkA1C6ErNDxstxN+gRZrCLEKrO3Z49YWCh2OCWWl+FufpULdBxaW5JSglWExOvM1w2rA5G7mbjb+Zt3LbgnfMtbeq9AXuysG3eiMnLBk2t7dBwRj+8rfkqP1SlE6ymO3+r+TmfWszMvmn6NrvRCCxX1pOMCC4Tj5JQURs801y8lUpC+CTi46vKfw8jDYz6DKhJfMCeiCJBWrkMB0U4rP3UJMPkNW1J1Bsfk/FFEl/NYSGIkThH2iGaWF5VaGYmfLw+xAtGEwAp5RE6epCCKbGxyJ8ekCBC3ZXe6kIFMxdk0IWgKCdOkkDptS/otbpIj6V7/lhVJEfDaHiAH025nj9NnWRdIZ6SsdmLjfOAcItKJseBi18pqkbu1c9K7dLZKN8qUfQSXA7ce9Xdxq9ImHHE7VnNJv03rYd3U4UxLbmVu6fffdUxtVJ9A994/lxTpZ8gP/MZhrjZUgLmVEdjtGux2x3FNdo6nIRmD3N/BcPIZ61majHEsRBkhz+84SU3wPCxMmVsS3e4OY0zNy8L7ZpyJOuz/TyGmeSgXRm7C24tWRFi4ZYKErMSxITXSfSixNPzriv/j0Zo1a9asScd38VU/jGoUq/MAAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/assets/images/wallet.png":
/*!**************************************!*\
  !*** ./src/assets/images/wallet.png ***!
  \**************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIvSURBVHgB7ZnNcdswEIXfwp5JJid1EKUDMy4g9CFKmEvMDuQK4g4iV5CkgtgdJJcwVg5RAx7KFZgl6OKxDxbWC/pnJJAUbfkHGA2+i0bAasRH7i6IByAQCAQCgaeD2gKyf3kMrWOJfA0HEKsJkz7GVI2SJCoWxjZNZFnexRr/BCOGLygaJO+jvabpWjFGCK1xzowOfIN4P+lt7tRNqdofKP7vpRADU//P36Pduql1eyAb5n0wd2fHiDBh8C84QP67w5q2Z8cU0Vf5+G7HVsQQ6888n33F2SlFafp2AkdI2scmW26+M9AZDvONXi8az8ZV0oyJrPTigzSNnAkxSBcbyW0uZsem0Bt2nMIKsQ6HlO3f4vwck2UzwYmYUkRZA/ONxvDylcwf5v3kQ3SAe+IkzYi06U7d5ggeYAm8rBmzFGAJnIg5e6H2qWHdMkIUaAdL4KRm0q2ywFM8MivVmoMYXwlifCWI8ZX2dYboXXZ4NIBjiLgju9+FtIspDQ2K4Zg2IYZQM77SmmbydMeSr2M4hkDbbY5Rqxh5u/0tPtUAjpENWyy3dqGY1a4ZYp7bGPlgBl55BdYWm1Rhx1XSjDWOReKt6UZEX8RBLMTAdmICyhV2WfO3io98gcIeqsRcmw0n8JkGv7mSZubYgJl/wFNKf2Cqak8CahvAp4+buz4KuvYHtprOaRq7mREELcYCYQTHlE9D85543m9sf3kuDnekzn18Dh7icAYCgUAg8JhcAuspuyt6F7IpAAAAAElFTkSuQmCC";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/profile/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map