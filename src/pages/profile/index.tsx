// src/pages/profile/index.tsx
import React, { useState, useEffect } from 'react'
import { View, Image, Text, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

const profileBg = require('@/assets/images/general-bg.png')
// 默认头像
const defaultAvatar = require('@/assets/images/avatar.png')
// 导入功能图标
const mapIcon = require('@/assets/images/map.png')
const petIcon = require('@/assets/images/pet.png')
const friendsIcon = require('@/assets/images/friends.png')
const walletIcon = require('@/assets/images/wallet.png')
const logoutIcon = require('@/assets/images/logout.png')

const ProfilePage: React.FC = () => {
  const [userName, setUserName] = useState<string>('晴天小太初')
  const [userBio, setUserBio] = useState<string>('探寻我的本源生活中~')
  const [userStats, setUserStats] = useState({
    likes: 7,
    favorites: 10,
    likesReceived: 5
  })
  // 用户头像状态
  const [userAvatar, setUserAvatar] = useState<string>(defaultAvatar)
  // 控制编辑用户名弹窗
  const [showEditNameModal, setShowEditNameModal] = useState<boolean>(false)
  // 新用户名输入
  const [newUserName, setNewUserName] = useState<string>('')

  // 从本地存储读取用户信息
  useEffect(() => {
    // 读取头像
    const savedAvatar = Taro.getStorageSync('userAvatar')
    if (savedAvatar) {
      setUserAvatar(savedAvatar)
    }
    
    // 读取用户名
    const savedUserName = Taro.getStorageSync('userName')
    if (savedUserName) {
      setUserName(savedUserName)
      setNewUserName(savedUserName) // 初始化编辑输入框
    }
    
    // 监听页面显示，确保信息更新
    const handleShow = () => {
      const currentAvatar = Taro.getStorageSync('userAvatar')
      if (currentAvatar && currentAvatar !== userAvatar) {
        setUserAvatar(currentAvatar)
      }
      
      const currentUserName = Taro.getStorageSync('userName')
      if (currentUserName && currentUserName !== userName) {
        setUserName(currentUserName)
      }
    }
    
    // 添加页面显示监听
    Taro.eventCenter.on('pageShow', handleShow)
    
    return () => {
      // 清理监听
      Taro.eventCenter.off('pageShow', handleShow)
    }
  }, [])

  // 打开编辑用户名弹窗
  const handleEditUserName = () => {
    setNewUserName(userName) // 设置当前用户名为默认值
    setShowEditNameModal(true)
  }

  // 保存新用户名
  const handleSaveUserName = () => {
    if (!newUserName.trim()) {
      Taro.showToast({
        title: '用户名不能为空',
        icon: 'none',
        duration: 2000
      })
      return
    }

    if (newUserName.length > 20) {
      Taro.showToast({
        title: '用户名不能超过20个字符',
        icon: 'none',
        duration: 2000
      })
      return
    }

    // 更新本地状态
    setUserName(newUserName)
    
    // 保存到本地缓存
    Taro.setStorageSync('userName', newUserName)
    
    // 关闭弹窗
    setShowEditNameModal(false)
    
    Taro.showToast({
      title: '用户名修改成功',
      icon: 'success',
      duration: 1500
    })
    
    // 可选：上传到服务器
    // updateUserNameToServer(newUserName)
  }

  // 取消编辑用户名
  const handleCancelEditUserName = () => {
    setShowEditNameModal(false)
  }

  // 上传用户名到服务器（可选功能）
  const updateUserNameToServer = (name: string) => {
    Taro.showLoading({
      title: '保存中...'
    })
    
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
      Taro.hideLoading()
    }, 1000)
  }

  // 从相册选择头像
  const handleChangeAvatar = () => {
    Taro.chooseImage({
      count: 1, // 最多选择1张图片
      sizeType: ['compressed'], // 压缩图，节省空间
      sourceType: ['album'], // 仅从相册选择
      success: (res) => {
        const tempFilePath = res.tempFilePaths[0]
        console.log('选择图片成功', tempFilePath)
        
        // 预览图片
        Taro.previewImage({
          urls: [tempFilePath],
          current: tempFilePath,
          success: () => {
            // 用户确认后更新头像
            Taro.showModal({
              title: '确认头像',
              content: '使用这张图片作为头像吗？',
              confirmText: '使用',
              cancelText: '重新选择',
              success: (modalRes) => {
                if (modalRes.confirm) {
                  // 更新本地头像显示
                  setUserAvatar(tempFilePath)
                  
                  // 保存到本地缓存
                  Taro.setStorageSync('userAvatar', tempFilePath)
                  
                  Taro.showToast({
                    title: '头像更新成功',
                    icon: 'success',
                    duration: 1500
                  })
                  
                  // 可选：上传到服务器
                  // uploadAvatar(tempFilePath)
                } else if (modalRes.cancel) {
                  // 重新选择
                  handleChangeAvatar()
                }
              }
            })
          },
          fail: (err) => {
            console.log('预览失败', err)
            Taro.showToast({
              title: '预览失败',
              icon: 'none',
              duration: 1500
            })
          }
        })
      },
      fail: (err) => {
        console.log('选择图片失败', err)
        
        // 根据错误类型给出提示
        if (err.errMsg.includes('cancel')) {
          // 用户取消选择，不提示
          return
        }
        
        Taro.showModal({
          title: '提示',
          content: '选择图片失败，请检查是否已授权相册访问权限',
          showCancel: false,
          confirmText: '我知道了'
        })
      }
    })
  }

  // 上传头像到服务器（可选功能）
  const uploadAvatar = (tempFilePath: string) => {
    Taro.showLoading({
      title: '上传中...'
    })
    
    // TODO: 替换为你的实际上传接口
    // 模拟上传成功
    setTimeout(() => {
      Taro.hideLoading()
    }, 1000)
  }

  // 跳转到地图页面
  const handleNavigateToMap = () => {
    Taro.navigateTo({ 
      url: '/pages/mountainPage/index'
    })
  }

  // 跳转到宠物页面
  const handleNavigateToPet = () => {
    Taro.navigateTo({ 
      url: '/pages/adopt/index'
    })
  }

  // 跳转到好友页面
  const handleNavigateToFriends = () => {
    Taro.showToast({
      title: '好友页面开发中',
      icon: 'none'
    })
  }

  // 跳转到钱包页面
  const handleNavigateToWallet = () => {
    Taro.showToast({
      title: '钱包页面开发中',
      icon: 'none'
    })
  }

  // 退出登录
  const handleLogout = () => {
    Taro.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      confirmColor: '#ff4d4f',
      success: (res) => {
        if (res.confirm) {
          // 退出时清空缓存
          Taro.removeStorageSync('userAvatar')
          Taro.removeStorageSync('userName')
          
          Taro.showLoading({
            title: '退出中...',
          })
          
          setTimeout(() => {
            Taro.hideLoading()
            Taro.showToast({
              title: '已退出登录',
              icon: 'success',
              duration: 1500
            })
            
            setTimeout(() => {
              Taro.reLaunch({
                url: '/pages/login/index'
              })
            }, 1500)
          }, 1000)
        }
      }
    })
  }

  // 底部导航栏跳转
  const handleNavigateToHome = () => {
    Taro.switchTab({
      url: '/pages/index/index'
    })
  }

  // 地图导航
  const handleMap = () => {
    Taro.navigateTo({ 
      url: '/pages/mountainPage/index'
    })
  }

  return (
    <View className="profile-page">
      {/* 背景图 */}
      <Image
        className="background-image"
        src={profileBg}
        mode="aspectFill"
      />

      {/* 用户信息卡片 */}
      <View className="user-card">
        {/* 用户头像部分 - 点击更换头像 */}
        <View className="user-avatar-section">
          <View className="avatar-container" onClick={handleChangeAvatar}>
            <Image className="user-avatar" src={userAvatar} />
            <View className="avatar-overlay">
              <Text className="change-icon">📷</Text>
              <Text className="change-text">更换头像</Text>
            </View>
          </View>
        </View>
        
        {/* 用户名和描述 */}
        <View className="user-info-section">
          <View className="username-container" onClick={handleEditUserName}>
            <Text className="username">{userName}</Text>
            <Text className="edit-icon">✏️</Text>
          </View>
          <Text className="bio">{userBio}</Text>
        </View>
        
        {/* 用户数据统计 */}
        <View className="user-stats-section">
          <View className="stats-box">
            <View className="stat-item">
              <Text className="stat-number">{userStats.likes}</Text>
              <Text className="stat-label">点赞</Text>
            </View>
            <View className="stat-divider"></View>
            <View className="stat-item">
              <Text className="stat-number">{userStats.favorites}</Text>
              <Text className="stat-label">收藏</Text>
            </View>
            <View className="stat-divider"></View>
            <View className="stat-item">
              <Text className="stat-number">{userStats.likesReceived}</Text>
              <Text className="stat-label">喜欢</Text>
            </View>
          </View>
        </View>
      </View>
      
      {/* 功能菜单 */}
      <View className="vertical-menu">
        <View className="menu-item" onClick={handleNavigateToMap}>
          <Image className="menu-icon" src={mapIcon} mode="aspectFit" />
          <Text className="menu-text">我的地图</Text>
        </View>
        <View className="menu-item" onClick={handleNavigateToPet}>
          <Image className="menu-icon" src={petIcon} mode="aspectFit" />
          <Text className="menu-text">我的宠物</Text>
        </View>
        <View className="menu-item" onClick={handleNavigateToFriends}>
          <Image className="menu-icon" src={friendsIcon} mode="aspectFit" />
          <Text className="menu-text">我的好友</Text>
        </View>
        <View className="menu-item" onClick={handleNavigateToWallet}>
          <Image className="menu-icon" src={walletIcon} mode="aspectFit" />
          <Text className="menu-text">我的钱包</Text>
        </View>
        <View className="menu-item logout-item" onClick={handleLogout}>
          <Image className="menu-icon" src={logoutIcon} mode="aspectFit" />
          <Text className="menu-text">退出登录</Text>
        </View>
      </View>
      
      {/* 底部导航栏 */}
      <View className="bottom-nav">
        <View className="nav-item" onClick={handleNavigateToHome}>
          <Text className="nav-icon">🏠</Text>
          <Text className="nav-text">首页</Text>
        </View>
        
        <View className="nav-item" onClick={handleMap}>
          <Text className="nav-icon">🗺️</Text>
          <Text className="nav-text">地图</Text>
        </View>
        
        <View className="nav-item" onClick={() => Taro.navigateTo({ url: '/pages/IPs/qinggeng/index' })}>
          <Text className="nav-icon">🎞️</Text>
          <Text className="nav-text">IP</Text>
          </View>
        <View className="nav-item active" onClick={() => Taro.navigateTo({ url: '/pages/profile/index' })}>
          <Text className="nav-icon">👤</Text>
          <Text className="nav-text">我的</Text>
        </View>
      </View>

      {/* 编辑用户名弹窗 */}
      {showEditNameModal && (
        <View className="edit-modal-overlay">
          <View className="edit-modal">
            <View className="edit-modal-header">
              <Text className="edit-modal-title">编辑用户名</Text>
            </View>
            <View className="edit-modal-content">
              <Input
                className="user-name-input"
                value={newUserName}
                placeholder="请输入用户名"
                maxlength={20}
                onInput={(e) => setNewUserName(e.detail.value)}
                focus
              />
              <Text className="input-tips">最多20个字符</Text>
            </View>
            <View className="edit-modal-footer">
              <View className="edit-button cancel" onClick={handleCancelEditUserName}>
                <Text className="edit-button-text">取消</Text>
              </View>
              <View className="edit-button confirm" onClick={handleSaveUserName}>
                <Text className="edit-button-text">保存</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  )
}

export default ProfilePage