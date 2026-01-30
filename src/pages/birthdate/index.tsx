// src/pages/birthdate/index.tsx
import React, { useState, useEffect } from 'react'
import { View, Text, Button, Picker, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { appStore } from '../../store'
import './index.scss'

const BirthdatePage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('1990')
  const [selectedMonth, setSelectedMonth] = useState<string>('01')
  const [selectedDay, setSelectedDay] = useState<string>('01')
  const [backgroundImage, setBackgroundImage] = useState<string>('')

  useEffect(() => {
    // 直接使用你已经有的 HTTPS URL
    const directUrl = 'https://636c-cloud1-7gg10sorbbbec8d9-1392459764.tcb.qcloud.la/images/birthdate-bg.png?sign=b1c9141a34966a77a78a2235fc9b29ab&t=1769576110'
    
    console.log('使用直接URL:', directUrl)
    setBackgroundImage(directUrl)
    
    // 重要：确保这个域名在小程序后台配置了
    // 登录小程序后台 → 开发 → 开发管理 → 服务器域名 → downloadFile合法域名
    // 添加：https://636c-cloud1-7gg10sorbbbec8d9-1392459764.tcb.qcloud.la
  }, [])

  const handleSkip = () => {
    Taro.navigateTo({
      url: '/pages/birthtime/index'
    })
  }

  const handleNext = () => {
    const formattedDate = `${selectedYear}-${selectedMonth}-${selectedDay}`
    appStore.setUserData({ 
      birthdate: formattedDate
    })
    Taro.navigateTo({
      url: '/pages/birthtime/index'
    })
  }

  const handleBack = () => {
    Taro.navigateBack()
  }

  const yearRange = Array.from({ length: 126 }, (_, i) => (1900 + i).toString())
  const monthRange = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'))
  const dayRange = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'))

  const onYearChange = (e: any) => {
    const year = yearRange[e.detail.value]
    setSelectedYear(year)
  }

  const onMonthChange = (e: any) => {
    const month = monthRange[e.detail.value]
    setSelectedMonth(month)
  }

  const onDayChange = (e: any) => {
    const day = dayRange[e.detail.value]
    setSelectedDay(day)
  }

  return (
    <View className="birthdate-container">
      {/* 背景图 - 直接使用HTTPS URL */}
      {backgroundImage ? (
        <Image
          className="background-image"
          src={backgroundImage}
          mode="aspectFill"
          onLoad={() => console.log('背景图片加载成功')}
        />
      ) : null}

      {/* 顶部导航栏 */}
      <View className="header-nav">
        <View className="back-button" onClick={handleBack}>
          <Text className="back-arrow">←</Text>
        </View>
        <Text className="title"></Text>
        <View className="nav-placeholder"></View>
      </View>

      {/* "出生日期"标题 */}
      <View className="time-title">
        <Text className="title-text"></Text>
      </View>

      {/* 内容容器 */}
      <View className="content-wrapper">
        {/* 滚轮状日期选择器 */}
        <View className="main-content">
          <View className="wheel-picker-section">
            <View className="wheel-picker-container">
              {/* 日选择器 */}
              <View className="wheel-column">
                <Picker 
                  mode="selector" 
                  range={dayRange}
                  value={dayRange.indexOf(selectedDay)}
                  onChange={onDayChange}
                >
                  <View className="wheel-item active">
                    <Text className="wheel-value">{selectedDay}</Text>
                  </View>
                </Picker>
              </View>
              
              <Text className="wheel-separator"></Text>
              
              {/* 月选择器 */}
              <View className="wheel-column">
                <Picker 
                  mode="selector" 
                  range={monthRange}
                  value={monthRange.indexOf(selectedMonth)}
                  onChange={onMonthChange}
                >
                  <View className="wheel-item active">
                    <Text className="wheel-value">{selectedMonth}</Text>
                  </View>
                </Picker>
              </View>
              
              <Text className="wheel-separator"></Text>
              
              {/* 年选择器 */}
              <View className="wheel-column">
                <Picker 
                  mode="selector" 
                  range={yearRange}
                  value={yearRange.indexOf(selectedYear)}
                  onChange={onYearChange}
                >
                  <View className="wheel-item active">
                    <Text className="wheel-value">{selectedYear}</Text>
                  </View>
                </Picker>
              </View>
            </View>
            
            {/* 单位标签 */}
            <View className="unit-labels">
              <Text className="unit-label">日</Text>
              <Text className="unit-label">月</Text>
              <Text className="unit-label">年</Text>
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

export default BirthdatePage