// src/pages/welcome/index.tsx
import React from 'react'
import { View, Text, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import welcomeBg from '../../assets/images/welcome-bg.png'
import welcomeButton from '../../assets/images/welcome-button.png'
import './index.scss'

const WelcomePage: React.FC = () => {
  const handleStartJourney = () => {
    Taro.navigateTo({
      url: '/pages/register/index'
      // url: '/pages/constellation/index'
    })
  }

  return (
    <View 
      className="welcome-container"
      style={{
        backgroundImage: `url(${welcomeBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <View className="background-overlay"></View>
      
      {/* 按钮容器 - 使用固定高度+百分比宽度 */}
      <View 
        className="button-container"
        onClick={handleStartJourney}
      >
        <Image 
          src={welcomeButton}
          className="button-image"
          mode="aspectFill" // 使用 aspectFill 来填充整个容器
        />
      </View>
    </View>
  )
}

export default WelcomePage