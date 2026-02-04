// src/pages/register/index.tsx
import React, { useState } from 'react'
import { View, Text, Input, Button, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { appStore } from '../../store'
import { showToast } from '../../utils'
import './index.scss'

// 使用require导入本地图片
const backgroundImage = "https://636c-cloud1-7gg10sorbbbec8d9-1392459764.tcb.qcloud.la/images/register-bg.png?"
const progressBarImage = require('../../assets/images/progress-bar-register.png')

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState('')

  const handleSkip = () => {
    Taro.navigateTo({
      url: '/pages/birthdate/index'
    })
  }

  const handleNext = () => {
    if (!username.trim()) {
      showToast('请输入用户名')
      return
    }

    appStore.setUserData({ username })
    Taro.navigateTo({
      url: '/pages/birthdate/index'
    })
  }

  // 模拟点击返回
  const handleBack = () => {
    Taro.navigateBack()
  }

  return (
    <View className="register-container">
      {/* 背景图：使用 require 导入的图片 */}
      <Image
        className="background-image"
        src={backgroundImage}
        mode="aspectFill"
      />

      {/* 内容容器 */}
      <View className="content-wrapper">
        {/* 顶部导航栏 */}
        <View className="header-nav">
          <View className="back-button" onClick={handleBack}>
            <Text className="back-arrow">←</Text>
          </View>
          <Text className="title"></Text>
          <View className="nav-placeholder"></View>
        </View>

        {/* 进度条图片 */}
        <View className="progress-bar-container">
          <Text className="progress-percent"></Text>
        </View>

        {/* 副标题 */}
        <View className="subtitle">
        </View>

        {/* 表单 */}
        <View className="form-container">
          <View className="input-group">
            <Text className="input-label">输入您的用户名</Text>
            <Input
              className="input"
              placeholder="请输入用户名"
              placeholderClass="placeholder"
              value={username}
              onInput={(e) => setUsername(e.detail.value)}
              maxlength={20}
              focus
            />
            <View className="input-bottom">
              <Text className="char-count">{username.length}/20</Text>
            </View>
          </View>
        </View>

        {/* 按钮组 */}
        <View className="button-group">
          <Button className="skip-btn" onClick={handleSkip}>
            跳过
          </Button>
          <Button
            className="next-btn"
            onClick={handleNext}
            disabled={!username.trim()}
          >
            下一步
          </Button>
        </View>
      </View>
    </View>
  )
}

export default RegisterPage