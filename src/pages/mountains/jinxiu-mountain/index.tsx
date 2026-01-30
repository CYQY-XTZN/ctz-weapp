// src/pages/mountains/jinxiu-mountain/index.tsx
import React, { useState } from 'react'
import { View, Image, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

const image = "https://636c-cloud1-7gg10sorbbbec8d9-1392459764.tcb.qcloud.la/images/jinxiu-mountain-map.png?sign=0eec0f5b2530e43ae4d57e59620806cf&t=1769576763"

const JinxiuMountainPage: React.FC = () => {
  // 状态管理
  const [mountainImageLoaded, setMountainImageLoaded] = useState<boolean>(false)
  const [waterButtonClicked, setWaterButtonClicked] = useState<boolean>(false)
  const [weedButtonClicked, setWeedButtonClicked] = useState<boolean>(false)
  
  // 处理山脉图片加载
  const handleMountainImageLoad = () => {
    console.log('金秀山脉图片加载完成')
    setMountainImageLoaded(true)
  }

  // 返回上一页（山脉主页面）- 优化版本
  const handleBack = () => {
    // 检查当前页面栈
    const pages = Taro.getCurrentPages()
    
    if (pages.length >= 2) {
      // 如果有上一页，返回
      Taro.navigateBack({
        delta: 1,
        fail: (err) => {
          console.error('返回失败，使用重定向:', err)
          // 如果返回失败，使用重定向
          Taro.redirectTo({
            url: '/pages/mountainPage/index'
          })
        }
      })
    } else {
      // 如果直接进入此页面，使用重定向
      Taro.redirectTo({
        url: '/pages/mountainPage/index'
      })
    }
  }

  // 处理左侧按钮点击（长按浇水）
  const handleLeftButtonClick = () => {
    console.log('浇水按钮被点击')
    
    Taro.vibrateShort({
      type: 'light'
    })
    
    setWaterButtonClicked(true)
    setTimeout(() => setWaterButtonClicked(false), 300)
    
    Taro.showToast({
      title: '💧 开始浇水...',
      icon: 'none',
      duration: 2000
    })
    
    // 这里可以添加浇水的逻辑
  }

  // 处理右侧按钮点击（连线除草）
  const handleRightButtonClick = () => {
    console.log('除草按钮被点击')
    
    Taro.vibrateShort({
      type: 'light'
    })
    
    setWeedButtonClicked(true)
    setTimeout(() => setWeedButtonClicked(false), 300)
    
    Taro.showToast({
      title: '🌿 开始除草...',
      icon: 'none',
      duration: 2000
    })
    
    // 这里可以添加除草的逻辑
  }

  // 处理长按浇水按钮
  const handleLeftButtonLongPress = () => {
    console.log('浇水长按开始')
    
    Taro.vibrateLong()
    
    Taro.showModal({
      title: '浇水确认',
      content: '确定要浇水吗？这将消耗1个水滴',
      confirmText: '确认浇水',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          Taro.showToast({
            title: '💧 浇水成功！',
            icon: 'success',
            duration: 2000
          })
        }
      }
    })
  }

  // 处理连线除草按钮
  const handleRightButtonLongPress = () => {
    console.log('除草长按开始')
    
    Taro.vibrateLong()
    
    Taro.showModal({
      title: '除草确认',
      content: '确定要开始除草吗？',
      confirmText: '开始除草',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          Taro.showToast({
            title: '🌿 除草模式已启动！',
            icon: 'success',
            duration: 2000
          })
        }
      }
    })
  }

  return (
    <View className="jinxiu-mountain-page">
      
      {/* 第一层：通用背景（全屏） */}
      <Image
        className="general-bg"
        src={require('@/assets/images/general-bg.png')}
        mode="aspectFill"
      />
      
      {/* 标题：我的药田 */}
      <View className="page-title">
        <Text className="title-text">我的药田</Text>
      </View>
      
      {/* 第二层：金秀山脉图片 */}
      <Image
        className="mountain-image"
        src={image}
        mode="widthFix"
        onLoad={handleMountainImageLoad}
      />
      
      {/* 返回按钮 */}
      <View className="back-button" onClick={handleBack}>
        <Text className="back-arrow">←</Text>
      </View>
      
      {/* 操作按钮容器（现在使用图片按钮） */}
      <View className="action-buttons-container">
        
        {/* 左侧按钮：浇水 */}
        <View 
          className="image-button water-button"
          onClick={handleLeftButtonClick}
          onLongPress={handleLeftButtonLongPress}
        >
          <Image
            className="button-image"
            src={require('@/assets/images/water-plant-button.png')}
            mode="aspectFit" // 使用aspectFit确保完整显示
          />
          <View className="button-glow"></View>
          {waterButtonClicked && <View className="ripple-effect"></View>}
        </View>
        
        {/* 右侧按钮：除草 */}
        <View 
          className="image-button weed-button"
          onClick={handleRightButtonClick}
          onLongPress={handleRightButtonLongPress}
        >
          <Image
            className="button-image"
            src={require('@/assets/images/weed-plant-button.png')}
            mode="aspectFit" // 使用aspectFit确保完整显示
          />
          <View className="button-glow"></View>
          {weedButtonClicked && <View className="ripple-effect"></View>}
        </View>
        
      </View>
      
      {/* 加载提示 */}
      {!mountainImageLoaded && (
        <View className="loading-overlay">
          <Text className="loading-text">加载金秀山脉地图...</Text>
          <View className="loading-spinner"></View>
        </View>
      )}
      
    </View>
  )
}

export default JinxiuMountainPage