// src/pages/home/index.tsx
import React, { useState, useEffect } from 'react'
import { View, Text, Button, ScrollView, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { appStore } from '@/store'
import { calculateConstellation, getConstellationDetail } from '@/utils/lunarCalculator'
import { getWeekday } from '@/utils'
import './index.scss'

const HomePage: React.FC = () => {
  const [userData, setUserData] = useState(appStore.getUserData?.() || {})
  const [currentDate, setCurrentDate] = useState('')
  const [weekday, setWeekday] = useState('')
  const [userConstellation, setUserConstellation] = useState<string>('')
  
  useEffect(() => {
    // 更新用户数据
    const data = appStore.getUserData?.() || {}
    setUserData(data)
    
    // 计算用户星宿
    if (data.birthdate) {
      try {
        const constellationName = calculateConstellation(data.birthdate)
        setUserConstellation(constellationName)
      } catch (error) {
        console.error('计算星宿失败:', error)
      }
    }
    
    // 设置当前日期
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const day = now.getDate()
    
    setCurrentDate(`${year}年${month}月${day}日`)
    setWeekday(getWeekday(now))
    
    // 页面显示时刷新数据
    const eventHandler = () => {
      setUserData(appStore.getUserData?.() || {})
    }
    
    // 监听数据更新事件
    Taro.eventCenter.on('appDataUpdated', eventHandler)
    
    return () => {
      // 组件卸载时移除事件监听
      Taro.eventCenter.off('appDataUpdated', eventHandler)
    }
  }, [])

  const handleViewMore = () => {
    Taro.showToast({
      title: '查看更多运势',
      icon: 'none'
    })
  }

  const handleCheckConstellation = () => {
    if (!userConstellation) {
      Taro.showToast({
        title: '请先完成注册信息',
        icon: 'none'
      })
      return
    }
    
    Taro.navigateTo({
      url: '/pages/constellation/detail/index'
    })
  }

  // 获取今日运势百分比（可以根据日期和星宿计算）
  const getTodayLuckPercentage = () => {
    // 这里可以实现更复杂的运势算法
    // 暂时用随机数或固定值
    return Math.floor(Math.random() * 30 + 30) // 30%-60%
  }

  return (
    <ScrollView className="home-container" scrollY>
      {/* 背景图 */}
      <Image src="/src/images/bg.png" className="page-bg" mode="aspectFill" />
      
      {/* 顶部状态栏 */}
      <View className="status-bar">
        <Text className="time">09:41</Text>
        <View className="battery">100%</View>
      </View>
      
      {/* 用户信息 */}
      <View className="user-section">
        <Text className="greeting">你好，{userData.username || userConstellation || '尊贵的用户'}！</Text>
        {userConstellation && (
          <>
            <Text className="constellation">{userConstellation}</Text>
            <Text className="constellation-detail">寅时·木曜，{weekday}</Text>
          </>
        )}
      </View>
      
      {/* 今日运势卡片 */}
      <View className="luck-card">
        <View className="luck-header">
          <Text className="luck-title">今日星宿运势</Text>
          <Text className="luck-date">{currentDate}，{weekday}</Text>
        </View>
        
        <View className="luck-content">
          <Text className="luck-constellation">{userConstellation || '未知星宿'}</Text>
          <View className="luck-progress">
            <View className="luck-progress-bar">
              <View 
                className="luck-progress-fill" 
                style={{ width: `${getTodayLuckPercentage()}%` }}
              />
            </View>
            <Text className="luck-percentage">{getTodayLuckPercentage()}%</Text>
          </View>
          
          <Text className="luck-description">
            {userConstellation ? 
              `${userConstellation}星宿照耀，今日运势平稳，宜专注工作，避免重大决策。人际关系方面会有小惊喜，记得保持开放心态。` :
              '请先完成注册，查看您的专属星宿运势。'
            }
          </Text>
        </View>
        
        <View className="card-actions">
          <Button 
            className="view-more-btn" 
            onClick={handleViewMore}
          >
            查看更多
          </Button>
          
          {/* 星宿查看按钮 */}
          {userConstellation && (
            <Button 
              className="constellation-btn"
              onClick={handleCheckConstellation}
            >
              查看我的星宿
            </Button>
          )}
        </View>
      </View>
      
      {/* 功能菜单 */}
      <View className="menu-section">
        <Text className="section-title">功能中心</Text>
        <View className="menu-grid">
          <View className="menu-item" onClick={handleCheckConstellation}>
            <View className="menu-icon">⭐</View>
            <Text className="menu-label">我的星宿</Text>
          </View>
          
          <View className="menu-item">
            <View className="menu-icon">🔮</View>
            <Text className="menu-label">运势预测</Text>
          </View>
          
          <View className="menu-item">
            <View className="menu-icon">📖</View>
            <Text className="menu-label">命理解读</Text>
          </View>
          
          <View className="menu-item">
            <View className="menu-icon">⚖️</View>
            <Text className="menu-label">能量平衡</Text>
          </View>
        </View>
      </View>
      
      {/* 如果没有星宿数据，显示注册提示 */}
      {!userConstellation && (
        <View className="register-prompt">
          <Text className="prompt-title">尚未计算您的星宿</Text>
          <Text className="prompt-desc">完成注册流程，获取您的专属星宿解读</Text>
          <Button 
            className="prompt-btn"
            onClick={() => Taro.navigateTo({
              url: '/pages/gender/index'
            })}
          >
            开始注册
          </Button>
        </View>
      )}
      
      {/* 底部导航 */}
      <View className="bottom-nav">
        <View className="nav-item active">
          <Text className="nav-icon">🏠</Text>
          <Text className="nav-label">首页</Text>
        </View>
        
        <View className="nav-item">
          <Text className="nav-icon">📊</Text>
          <Text className="nav-label">运势</Text>
        </View>
        
        <View className="nav-item">
          <Text className="nav-icon">👤</Text>
          <Text className="nav-label">我的</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default HomePage