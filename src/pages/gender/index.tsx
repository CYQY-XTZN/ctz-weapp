// src/pages/gender/index.tsx
import React, { useState, useEffect } from 'react'
import { View, Text, Button, Radio, RadioGroup, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { appStore } from '../../store'
import { showToast } from '../../utils'
import './index.scss'

// 导入背景图
const defaultBgImage = require('../../assets/images/gender-bg.png')
const maleBgImage = require('../../assets/images/gender-man-bg.png')
const femaleBgImage = require('../../assets/images/gender-bg.png')

// 定义明确的类型
type GenderType = 'male' | 'female' | undefined

const GenderPage: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState<GenderType>(undefined)
  const [currentBgImage, setCurrentBgImage] = useState(defaultBgImage)

  const handleSkip = () => {
    Taro.navigateTo({
      url: '/pages/relationship/index'
    })
  }

  const handleNext = () => {
    if (!selectedGender) {
      showToast('请选择性别')
      return
    }
    
    appStore.setUserData({ 
      gender: selectedGender
    })
    
    Taro.navigateTo({
      url: '/pages/relationship/index'
    })
  }

  // 返回上一页
  const handleBack = () => {
    Taro.navigateBack()
  }

  const onGenderChange = (e: any) => {
    const value = e.detail.value as GenderType
    setSelectedGender(value)
  }

  const handleMaleSelect = () => {
    setSelectedGender('male')
  }

  const handleFemaleSelect = () => {
    setSelectedGender('female')
  }

  // 监听性别变化，切换背景图
  useEffect(() => {
    if (selectedGender === 'male') {
      setCurrentBgImage(maleBgImage)
    } else if (selectedGender === 'female') {
      setCurrentBgImage(femaleBgImage)
    } else {
      setCurrentBgImage(defaultBgImage)
    }
  }, [selectedGender])

  return (
    <View className="birthdate-container">
      {/* 动态背景图 */}
      <Image
        className="background-image"
        src={currentBgImage}
        mode="aspectFill"
      />

      {/* 顶部导航栏 */}
      <View className="header-nav">
        <View className="back-button" onClick={handleBack}>
          <Text className="back-arrow">←</Text>
        </View>
        <Text className="title"></Text>
        <View className="nav-placeholder"></View>
      </View>

      {/* "选择性别"标题 */}
      <View className="time-title">
        <Text className="title-text"></Text>
      </View>

      {/* 内容容器 */}
      <View className="content-wrapper">
        {/* 性别选择器 */}
        <View className="main-content">
          <View className="gender-options-section">
            <RadioGroup onChange={onGenderChange}>
              <View 
                className={`gender-option ${selectedGender === 'male' ? 'selected' : ''}`}
                onClick={handleMaleSelect}
              >
                <Radio 
                  value="male" 
                  className="radio-input" 
                  checked={selectedGender === 'male'} 
                />
                <View className="custom-radio"></View>
                <Text className="option-label">男性</Text>
              </View>
              
              <View 
                className={`gender-option ${selectedGender === 'female' ? 'selected' : ''}`}
                onClick={handleFemaleSelect}
              >
                <Radio 
                  value="female" 
                  className="radio-input" 
                  checked={selectedGender === 'female'} 
                />
                <View className="custom-radio"></View>
                <Text className="option-label">女性</Text>
              </View>
            </RadioGroup>
          </View>
        </View>
        
        {/* 底部操作按钮 */}
        <View className="action-section">
          <Button className="btn-skip" onClick={handleSkip}>
            跳过
          </Button>
          <Button className="btn-next" onClick={handleNext}>
            下一步
          </Button>
        </View>
      </View>
    </View>
  )
}

export default GenderPage