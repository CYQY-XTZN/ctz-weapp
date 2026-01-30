// src/pages/constellation/index.tsx
import React, { useState, useEffect } from 'react'
import { View, Text, Image, Button, Progress } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'
import { appStore } from '@/store'

// 导入图片
const generalBg = require('../../assets/images/general-bg.png')
const constellationImage = require('../../assets/images/constellation.png')

// 星座数据
const constellationData = {
  aries: {
    chineseName: '角木蛟',
    englishName: 'ARIES',
    element: '木曜',
    time: '寅时',
    description: '蛟龙得水，生机勃发。你是天生的治愈者。',
    luck: 34,
    date: '九月 22 2023',
    day: '星期五'
  },
  taurus: {
    chineseName: '亢金龙',
    englishName: 'TAURUS',
    element: '金曜',
    time: '卯时',
    description: '金龙腾云，财运亨通。你是财富的守护者。',
    luck: 68,
    date: '九月 22 2023',
    day: '星期五'
  },
  gemini: {
    chineseName: '氐土貉',
    englishName: 'GEMINI',
    element: '土曜',
    time: '辰时',
    description: '土貉藏智，灵动多变。你是智慧的传播者。',
    luck: 45,
    date: '九月 22 2023',
    day: '星期五'
  },
  cancer: {
    chineseName: '房日兔',
    englishName: 'CANCER',
    element: '日曜',
    time: '巳时',
    description: '玉兔临月，情感细腻。你是家庭的守护者。',
    luck: 72,
    date: '九月 22 2023',
    day: '星期五'
  },
  leo: {
    chineseName: '心月狐',
    englishName: 'LEO',
    element: '月曜',
    time: '午时',
    description: '灵狐拜月，魅力四射。你是人群的焦点。',
    luck: 88,
    date: '九月 22 2023',
    day: '星期五'
  },
  virgo: {
    chineseName: '尾火虎',
    englishName: 'VIRGO',
    element: '火曜',
    time: '未时',
    description: '猛虎下山，雷厉风行。你是完美的追求者。',
    luck: 56,
    date: '九月 22 2023',
    day: '星期五'
  },
  libra: {
    chineseName: '箕水豹',
    englishName: 'LIBRA',
    element: '水曜',
    time: '申时',
    description: '水豹潜渊，和谐公正。你是平衡的维护者。',
    luck: 63,
    date: '九月 22 2023',
    day: '星期五'
  },
  scorpio: {
    chineseName: '斗木獬',
    englishName: 'SCORPIO',
    element: '木曜',
    time: '酉时',
    description: '獬豸明辨，洞察秋毫。你是真相的探索者。',
    luck: 41,
    date: '九月 22 2023',
    day: '星期五'
  },
  sagittarius: {
    chineseName: '牛金牛',
    englishName: 'SAGITTARIUS',
    element: '金曜',
    time: '戌时',
    description: '金牛拓土，乐观自由。你是远方的向往者。',
    luck: 79,
    date: '九月 22 2023',
    day: '星期五'
  },
  capricorn: {
    chineseName: '女土蝠',
    englishName: 'CAPRICORN',
    element: '土曜',
    time: '亥时',
    description: '土蝠归巢，坚韧务实。你是目标的实现者。',
    luck: 52,
    date: '九月 22 2023',
    day: '星期五'
  },
  aquarius: {
    chineseName: '虚日鼠',
    englishName: 'AQUARIUS',
    element: '日曜',
    time: '子时',
    description: '灵鼠过隙，创新独立。你是未来的创造者。',
    luck: 67,
    date: '九月 22 2023',
    day: '星期五'
  },
  pisces: {
    chineseName: '危月燕',
    englishName: 'PISCES',
    element: '月曜',
    time: '丑时',
    description: '雨燕归梁，浪漫柔情。你是梦想的编织者。',
    luck: 58,
    date: '九月 22 2023',
    day: '星期五'
  }
}

// 根据生日计算星座
function calculateConstellation(month: number, day: number): string {
  const dates = [
    { sign: 'capricorn', start: [12, 22], end: [1, 19] },
    { sign: 'aquarius', start: [1, 20], end: [2, 18] },
    { sign: 'pisces', start: [2, 19], end: [3, 20] },
    { sign: 'aries', start: [3, 21], end: [4, 19] },
    { sign: 'taurus', start: [4, 20], end: [5, 20] },
    { sign: 'gemini', start: [5, 21], end: [6, 21] },
    { sign: 'cancer', start: [6, 22], end: [7, 22] },
    { sign: 'leo', start: [7, 23], end: [8, 22] },
    { sign: 'virgo', start: [8, 23], end: [9, 22] },
    { sign: 'libra', start: [9, 23], end: [10, 23] },
    { sign: 'scorpio', start: [10, 24], end: [11, 22] },
    { sign: 'sagittarius', start: [11, 23], end: [12, 21] },
  ]

  for (const date of dates) {
    const [startMonth, startDay] = date.start
    const [endMonth, endDay] = date.end
    
    if ((month === startMonth && day >= startDay) || 
        (month === endMonth && day <= endDay)) {
      return date.sign
    }
  }
  
  return 'aries' // 默认白羊座
}

const ConstellationPage: React.FC = () => {
  const [constellationInfo, setConstellationInfo] = useState<any>(null)
  const [userName, setUserName] = useState<string>('')

  useEffect(() => {
    // 从 store 获取用户数据
    const userData = appStore.getUserData()
    setUserName(userData.username || '用户')
    
    if (userData.birthdate) {
      // 解析生日
      const [year, month, day] = userData.birthdate.split('-').map(Number)
      const constellationKey = calculateConstellation(month, day)
      
      const info = constellationData[constellationKey as keyof typeof constellationData]
      setConstellationInfo(info)
      
      // 保存星座信息到 store
      appStore.setUserData({
        constellation: info.chineseName
      })
    } else {
      // 如果没有生日数据，跳回首页
      Taro.showToast({
        title: '请先填写生日',
        icon: 'none',
        duration: 2000
      })
      
      setTimeout(() => {
        Taro.redirectTo({ url: '/pages/index/index' })
      }, 2000)
    }
  }, [])

  const handleBack = () => {
    Taro.navigateBack()
  }

  const handleHome = () => {
    Taro.switchTab({
      url: '/pages/index/index'
    })
  }

  const handleMy = () => {
    Taro.showToast({
      title: '我的页面',
      icon: 'none'
    })
  }

  // 新增：处理地图导航
  const handleMap = () => {
    Taro.navigateTo({ 
      url: '/pages/mountainPage/index'
    })
  }

  if (!constellationInfo) {
    return (
      <View className="constellation-container loading">
        <Text>正在计算您的星座...</Text>
      </View>
    )
  }

  return (
    <View className="constellation-container">
      {/* 背景图 */}
      <Image
        className="background-image"
        src={generalBg}
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

      {/* 主内容区域 */}
      <View className="main-content">
        {/* 顶部问候语 */}
        <View className="greeting-section">
          <Text className="greeting-text">你好，{userName}! </Text>
          <Text className="time-info">
            {constellationInfo.time}·{constellationInfo.element}, {constellationInfo.day}
          </Text>
        </View>

        {/* 星座图片 */}
        <View className="constellation-image-container">
          <Image
            className="constellation-image"
            src={constellationImage}
            mode="aspectFit"
          />
        </View>

        {/* 星座名称 */}
        <View className="constellation-names">
          <Text className="chinese-name">{constellationInfo.chineseName}</Text>
          <Text className="english-name">{constellationInfo.englishName}</Text>
        </View>

        {/* 描述区域 */}
        <View className="description-section">
          <Text className="description-text">{constellationInfo.description}</Text>
          <View 
            className="view-more"
            onClick={() => {
              Taro.navigateTo({ 
                url: `/pages/constellation-detail/index?constellation=${constellationInfo.chineseName}`
              })
            }}
          >
            <Text className="view-more-text">查看更多</Text>
            <Text className="arrow">&gt;</Text>
          </View>
        </View>

        {/* 今日运势 */}
        <View className="luck-section">
          <Text className="luck-title">今日星宿运势</Text>
          <Text className="luck-date">{constellationInfo.date}, {constellationInfo.day}</Text>
          
          <View className="luck-progress-container">
            <View className="luck-label-row">
              <Text className="luck-label">运势指数</Text>
              <Text className="luck-percent">{constellationInfo.luck}%</Text>
            </View>
            <Progress 
              percent={constellationInfo.luck} 
              strokeWidth={6}
              activeColor="#FFD700"
              backgroundColor="rgba(255, 215, 0, 0.2)"
              className="luck-progress"
            />
          </View>
        </View>
      </View>

      {/* 底部导航栏 */}
      <View className="bottom-nav">
        <View 
          className="nav-item active" 
          onClick={() => Taro.navigateTo({ url: '/pages/xingyouhui/index' })}
        >
          <Text className="nav-icon">🔅</Text>
          <Text className="nav-text">星友会</Text>
        </View>
        
        <View 
          className="nav-item" 
          onClick={handleMap}
        >
          <Text className="nav-icon">🗺️</Text>
          <Text className="nav-text">地图</Text>
        </View>
        
        <View className="nav-item" onClick={() => Taro.navigateTo({ url: '/pages/IPs/qinggeng/index' })}>
          <Text className="nav-icon">🎞️</Text>
          <Text className="nav-text">IP</Text>
        </View>
        
        <View 
            className="nav-item"
            onClick={() => Taro.navigateTo({ 
              url: '/pages/profile/index'
            })}
          > 
            <Text className="nav-icon">👤</Text>
            <Text className="nav-text">我的</Text>
          </View>
      </View>
    </View>
  )
}

export default ConstellationPage