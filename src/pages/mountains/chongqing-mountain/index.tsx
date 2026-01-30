// src/pages/mountains/chongqing-mountain/index.tsx
import React, { useState } from 'react'
import { View, Image, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

const ChongqingMountainPage: React.FC = () => {
  const [mountainImageLoaded, setMountainImageLoaded] = useState<boolean>(false)
  const [waterButtonClicked, setWaterButtonClicked] = useState<boolean>(false)
  const [weedButtonClicked, setWeedButtonClicked] = useState<boolean>(false)
  
  const handleMountainImageLoad = () => {
    console.log('重庆山脉图片加载完成')
    setMountainImageLoaded(true)
  }
  const image = "https://636c-cloud1-7gg10sorbbbec8d9-1392459764.tcb.qcloud.la/images/chongqing-mountain-map.png?sign=5864a0d38e8a0b09b1f7eb621a6651a0&t=1769576662"
  
  const handleBack = () => {
    const pages = Taro.getCurrentPages()
    if (pages.length >= 2) {
      Taro.navigateBack({ delta: 1 })
    } else {
      Taro.redirectTo({ url: '/pages/mountainPage/index' })
    }
  }

  const handleWaterButtonClick = () => {
    console.log('浇水按钮被点击')
    Taro.vibrateShort({ type: 'light' })
    setWaterButtonClicked(true)
    setTimeout(() => setWaterButtonClicked(false), 300)
    Taro.showToast({
      title: '💧 开始浇水...',
      icon: 'none',
      duration: 2000
    })
  }

  const handleWeedButtonClick = () => {
    console.log('除草按钮被点击')
    Taro.vibrateShort({ type: 'light' })
    setWeedButtonClicked(true)
    setTimeout(() => setWeedButtonClicked(false), 300)
    Taro.showToast({
      title: '🌿 开始除草...',
      icon: 'none',
      duration: 2000
    })
  }

  const handleWaterButtonLongPress = () => {
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

  const handleWeedButtonLongPress = () => {
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
    <View className="chongqing-mountain-page">
      
      {/* 第一层：通用背景 */}
      <Image
        className="general-bg"
        src={require('@/assets/images/general-bg.png')}
        mode="aspectFill"
      />
      
      {/* 标题：我的药田 */}
      <View className="page-title">
        <Text className="title-text">我的药田</Text>
      </View>
      
      {/* 第二层：重庆山脉图片 */}
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
      
      {/* 操作按钮容器 */}
      <View className="action-buttons-container">
        
        {/* 左侧按钮：浇水 */}
        <View 
          className="image-button water-button"
          onClick={handleWaterButtonClick}
          onLongPress={handleWaterButtonLongPress}
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
          onClick={handleWeedButtonClick}
          onLongPress={handleWeedButtonLongPress}
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
          <Text className="loading-text">加载重庆山脉地图...</Text>
          <View className="loading-spinner"></View>
        </View>
      )}
      
    </View>
  )
}

export default ChongqingMountainPage