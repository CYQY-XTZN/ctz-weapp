// pages/index/index.js
Page({
  data: {
    title: '欢迎使用小程序',
    count: 0,
    userInfo: null,
    canIUseGetUserProfile: false,
    loading: false
  },

  onLoad(options) {
    console.log('页面加载，参数:', options);
    
    // 检查是否支持 getUserProfile
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      });
    }
  },

  onShow() {
    console.log('页面显示');
  },

  onReady() {
    console.log('页面初次渲染完成');
  },

  onHide() {
    console.log('页面隐藏');
  },

  onUnload() {
    console.log('页面卸载');
  },

  // 增加计数
  increment() {
    this.setData({
      count: this.data.count + 1
    });
  },

  // 减少计数
  decrement() {
    if (this.data.count > 0) {
      this.setData({
        count: this.data.count - 1
      });
    }
  },

  // 重置计数
  resetCounter() {
    this.setData({
      count: 0
    });
  },

  // 获取用户信息
  getUserProfile() {
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: (res) => {
        console.log('获取用户信息成功:', res.userInfo);
        this.setData({
          userInfo: res.userInfo
        });
        
        // 保存到全局数据
        const app = getApp();
        app.globalData.userInfo = res.userInfo;
      },
      fail: (err) => {
        console.error('获取用户信息失败:', err);
        wx.showToast({
          title: '获取用户信息失败',
          icon: 'none'
        });
      }
    });
  },

  // 清空用户信息
  clearUserInfo() {
    this.setData({
      userInfo: null
    });
    const app = getApp();
    app.globalData.userInfo = null;
  },

  // 显示加载
  showLoading() {
    this.setData({ loading: true });
    setTimeout(() => {
      this.setData({ loading: false });
    }, 2000);
  },

  // 显示弹窗
  showModal() {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: (res) => {
        if (res.confirm) {
          console.log('用户点击确定');
        } else if (res.cancel) {
          console.log('用户点击取消');
        }
      }
    });
  },

  // 显示 toast
  showToast() {
    wx.showToast({
      title: '操作成功',
      icon: 'success',
      duration: 2000
    });
  },

  // 跳转到关于页面（如果存在）
  navigateToAbout() {
    wx.navigateTo({
      url: '/pages/about/about'
    });
  },

  // 页面分享
  onShareAppMessage() {
    return {
      title: '欢迎使用我的小程序',
      path: '/pages/index/index',
      imageUrl: '/images/share.jpg'
    };
  },

  // 分享到朋友圈
  onShareTimeline() {
    return {
      title: '分享到朋友圈',
      query: 'from=index'
    };
  },

  // 添加到我的小程序
  onAddToFavorites() {
    return {
      title: '添加到我的小程序',
      imageUrl: '/images/favorite.jpg',
      query: 'from=index'
    };
  }
});