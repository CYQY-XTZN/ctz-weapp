// app.js
App({
  onLaunch(options) {
    console.log('App Launch', options);
    
    // 获取系统信息
    wx.getSystemInfo({
      success: (res) => {
        console.log('系统信息:', res);
        this.globalData.systemInfo = res;
      }
    });
    
    // 检查更新
    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager();
      updateManager.onCheckForUpdate((res) => {
        console.log('检查更新结果:', res.hasUpdate);
      });
      updateManager.onUpdateReady(() => {
        wx.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success: (res) => {
            if (res.confirm) {
              updateManager.applyUpdate();
            }
          }
        });
      });
    }
  },
  
  onShow(options) {
    console.log('App Show', options);
  },
  
  onHide() {
    console.log('App Hide');
  },
  
  onError(error) {
    console.error('App Error:', error);
  },
  
  globalData: {
    userInfo: null,
    systemInfo: null,
    token: null
  }
});