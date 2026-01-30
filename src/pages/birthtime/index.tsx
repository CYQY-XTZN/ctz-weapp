// src/pages/birthtime/index.tsx
import React, { useState } from 'react'
import { View, Text, Button, Picker, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { appStore } from '../../store'
import { showToast } from '../../utils'
import './index.scss'

const BirthtimePage: React.FC = () => {
  // 默认时间：12:00 PM (中午)
  const [selectedHour, setSelectedHour] = useState<string>('12')
  const [selectedMinute, setSelectedMinute] = useState<string>('00')
  const [selectedPeriod, setSelectedPeriod] = useState<string>('PM')

  // 直接使用云存储的HTTPS URL
  const backgroundImage = 'https://636c-cloud1-7gg10sorbbbec8d9-1392459764.tcb.qcloud.la/images/birthtime-bg.png?sign=e15369a1800ff21b3cc53af8fe3bd298&t=1769576235'

  const handleSkip = () => {
    Taro.navigateTo({
      url: '/pages/gender/index'
    })
  }

  const handleNext = () => {
    // 格式化为 24 小时制
    let hour24 = parseInt(selectedHour)
    if (selectedPeriod === 'PM' && hour24 !== 12) {
      hour24 += 12
    } else if (selectedPeriod === 'AM' && hour24 === 12) {
      hour24 = 0
    }
    
    const formattedTime = `${hour24.toString().padStart(2, '0')}:${selectedMinute}`
    appStore.setUserData({ 
      birthtime: formattedTime
    })
    
    Taro.navigateTo({
      url: '/pages/gender/index'
    })
  }

  // 返回上一页
  const handleBack = () => {
    Taro.navigateBack()
  }

  // 生成小时选项 (1-12)
  const hourRange = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'))
  
  // 生成分钟选项 (00-59)
  const minuteRange = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'))
  
  // 生成时段选项 (AM/PM)
  const periodRange = ['AM', 'PM']

  const onHourChange = (e: any) => {
    const hour = hourRange[e.detail.value]
    setSelectedHour(hour)
  }

  const onMinuteChange = (e: any) => {
    const minute = minuteRange[e.detail.value]
    setSelectedMinute(minute)
  }

  const onPeriodChange = (e: any) => {
    const period = periodRange[e.detail.value]
    setSelectedPeriod(period)
  }

  return (
    <View className="birthdate-container">
      {/* 背景图 - 使用云存储HTTPS URL */}
      <Image
        className="background-image"
        src={backgroundImage}
        mode="aspectFill"
        onLoad={() => console.log('出生时间背景图加载成功')}
        onError={(e) => {
          console.error('背景图加载失败:', e.detail)
          // 如果URL过期，可以在这里添加重新获取的逻辑
          Taro.showToast({
            title: '背景加载失败',
            icon: 'none',
            duration: 2000
          })
        }}
      />

      {/* 顶部导航栏 */}
      <View className="header-nav">
        <View className="back-button" onClick={handleBack}>
          <Text className="back-arrow">←</Text>
        </View>
        <Text className="title"></Text>
        <View className="nav-placeholder"></View>
      </View>

      {/* "出生时间"标题 */}
      <View className="time-title">
        <Text className="title-text"></Text>
      </View>

      {/* 内容容器 */}
      <View className="content-wrapper">
        {/* 圆形时间选择器 */}
        <View className="main-content">
          <View className="wheel-picker-section">
            <View className="wheel-picker-container">
              {/* 小时选择器 */}
              <View className="wheel-column hour-column">
                <Picker 
                  mode="selector" 
                  range={hourRange}
                  value={hourRange.indexOf(selectedHour)}
                  onChange={onHourChange}
                >
                  <View className="wheel-item active">
                    <Text className="wheel-value">{selectedHour}</Text>
                  </View>
                </Picker>
              </View>
              
              {/* 分隔符 */}
              <Text className="wheel-separator">:</Text>
              
              {/* 分钟选择器 */}
              <View className="wheel-column minute-column">
                <Picker 
                  mode="selector" 
                  range={minuteRange}
                  value={minuteRange.indexOf(selectedMinute)}
                  onChange={onMinuteChange}
                >
                  <View className="wheel-item active">
                    <Text className="wheel-value">{selectedMinute}</Text>
                  </View>
                </Picker>
              </View>
              
              {/* 分隔符 */}
              <Text className="wheel-separator">:</Text>
              
              {/* 时段选择器 (AM/PM) */}
              <View className="wheel-column period-column">
                <Picker 
                  mode="selector" 
                  range={periodRange}
                  value={periodRange.indexOf(selectedPeriod)}
                  onChange={onPeriodChange}
                >
                  <View className="wheel-item active">
                    <Text className="wheel-value">{selectedPeriod}</Text>
                  </View>
                </Picker>
              </View>
            </View>
            
            {/* 单位标签 - 严格对齐的布局 */}
            <View className="unit-labels-container">
              <View className="unit-label-item">
                <Text className="unit-label">时</Text>
              </View>
              
              <View className="separator-placeholder"></View>
              
              <View className="unit-label-item">
                <Text className="unit-label">分</Text>
              </View>
              
              <View className="separator-placeholder"></View>
              
              <View className="unit-label-item period-label">
                <Text className="unit-label">AM/PM</Text>
              </View>
            </View>
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

export default BirthtimePage