// src/pages/relationship/index.tsx

import React, { useState } from 'react'
import { View, Text, Button, Radio, RadioGroup, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { appStore } from '../../store'
import { showToast } from '../../utils'
import './index.scss'

// 导入背景图
const backgroundImage = require('../../assets/images/relationship-bg.png')

// 定义关系状态类型
type RelationshipType = 'in_relationship' | 'single' | 'married' | undefined

const RelationshipPage: React.FC = () => {
  const [selectedRelationship, setSelectedRelationship] = useState<RelationshipType>(undefined)

  const handleSkip = () => {
    Taro.navigateTo({
      url: '/pages/constellation/index' // 或者下一页的URL
    })
  }

  const handleNext = () => {
    if (!selectedRelationship) {
      showToast('请选择关系状态')
      return
    }
    
    appStore.setUserData({ 
      relationship: selectedRelationship
    })
    
    Taro.navigateTo({
      url: '/pages/constellation/index' // 或者下一页的URL
    })
  }

  // 返回上一页
  const handleBack = () => {
    Taro.navigateBack()
  }

  const onRelationshipChange = (e: any) => {
    const value = e.detail.value as RelationshipType
    setSelectedRelationship(value)
  }

  // 处理各个选项的点击
  const handleInRelationshipSelect = () => {
    setSelectedRelationship('in_relationship')
  }

  const handleSingleSelect = () => {
    setSelectedRelationship('single')
  }

  const handleMarriedSelect = () => {
    setSelectedRelationship('married')
  }

  // 获取选项显示文本
  const getOptionText = (type: RelationshipType) => {
    switch(type) {
      case 'in_relationship': return '在关系中'
      case 'single': return '单身'
      case 'married': return '已婚'
      default: return ''
    }
  }

  return (
    <View className="birthdate-container">
      {/* 背景图 */}
      <Image
        className="background-image"
        src={backgroundImage}
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

      {/* "关系状态"标题 */}
      <View className="time-title">
        <Text className="title-text"></Text>
      </View>

      {/* 内容容器 */}
      <View className="content-wrapper">
        {/* 关系状态选择器 */}
        <View className="main-content">
          <View className="relationship-options-section">
            <RadioGroup onChange={onRelationshipChange}>
              {/* 在关系中选项 */}
              <View 
                className={`relationship-option ${selectedRelationship === 'in_relationship' ? 'selected' : ''}`}
                onClick={handleInRelationshipSelect}
              >
                <Radio 
                  value="in_relationship" 
                  className="radio-input" 
                  checked={selectedRelationship === 'in_relationship'} 
                />
                <View className="custom-radio"></View>
                <Text className="option-label">在关系中</Text>
              </View>
              
              {/* 单身选项 */}
              <View 
                className={`relationship-option ${selectedRelationship === 'single' ? 'selected' : ''}`}
                onClick={handleSingleSelect}
              >
                <Radio 
                  value="single" 
                  className="radio-input" 
                  checked={selectedRelationship === 'single'} 
                />
                <View className="custom-radio"></View>
                <Text className="option-label">单身</Text>
              </View>
              
              {/* 已婚选项 */}
              <View 
                className={`relationship-option ${selectedRelationship === 'married' ? 'selected' : ''}`}
                onClick={handleMarriedSelect}
              >
                <Radio 
                  value="married" 
                  className="radio-input" 
                  checked={selectedRelationship === 'married'} 
                />
                <View className="custom-radio"></View>
                <Text className="option-label">已婚</Text>
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

export default RelationshipPage