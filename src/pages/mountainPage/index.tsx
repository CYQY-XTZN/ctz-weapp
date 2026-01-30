// src/pages/mountainPage/index.tsx
import React, { useState } from 'react'
import { View, Image, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

interface MountainArea {
  id: string
  name: string
  page: string
  style: {
    top: string
    left: string
    width: string
    height: string
  }
}
const image = "https://636c-cloud1-7gg10sorbbbec8d9-1392459764.tcb.qcloud.la/images/mountain-page.png?sign=0282f1c88d80741f39a09ae6f092904f&t=1769576819"

const MountainPage: React.FC = () => {
  // 状态管理
  const [debugMode] = useState<boolean>(false)
  const [activeAreaId, setActiveAreaId] = useState<string | null>(null)
  const [mountainImageLoaded, setMountainImageLoaded] = useState<boolean>(false)
  
  // 修改后的6个区域配置 - 每个区域跳转到独立页面
  const mountainAreas: MountainArea[] = [
    // 区域1-左：从上往下的三分之一，左边留白5px
    {
      id: 'area1-left',
      name: '金秀山脉',
      page: '/pages/mountains/jinxiu-mountain/index',
      style: {
        top: '33.3%',
        left: '2%',
        width: '46%',
        height: '12%'
      }
    },
    // 区域1-右：从上往下的三分之一，右边留白15px
    {
      id: 'area1-right',
      name: '金秀山脉',
      page: '/pages/mountains/chongqing-mountain/index', // 重庆山脉页面
      style: {
        top: '33.3%',
        left: '52%',
        width: '46%',
        height: '12%'
      }
    },
    // 区域2：从上往下二分之一，正中间区域
    {
      id: 'area2',
      name: '中央主峰',
      page: '/pages/mountains/central-peak/index',
      style: {
        top: '50%',
        left: '37.5%',
        width: '12.5%',
        height: '15%'
      }
    },
    // 区域3-左：从下往上三分之一，向上移动很多
    {
      id: 'area3-left',
      name: '西南山麓',
      page: '/pages/mountains/southwest-foothills/index',
      style: {
        top: '60%',
        left: '5%',
        width: '22.5%',
        height: '10%'
      }
    },
    // 区域3-右：从下往上三分之一，向上移动很多
    {
      id: 'area3-right',
      name: '东南山麓',
      page: '/pages/mountains/southeast-foothills/index',
      style: {
        top: '60%',
        left: '72.5%',
        width: '22.5%',
        height: '10%'
      }
    },
    // 区域4：比3靠下，横向中间
    {
      id: 'area4',
      name: '中央山谷',
      page: '/pages/mountains/central-valley/index',
      style: {
        top: '70%',
        left: '38.75%',
        width: '22.5%',
        height: '12%'
      }
    }
  ]

  // 处理山脉图片加载
  const handleMountainImageLoad = () => {
    console.log('山脉图片加载完成')
    setMountainImageLoaded(true)
  }

  // 处理区域点击 - 使用 redirectTo 避免页面栈溢出
  const handleAreaClick = (area: MountainArea) => {
    console.log('点击区域:', area.name, '跳转到:', area.page)
    
    setActiveAreaId(area.id)
    
    // 点击时的轻微震动反馈
    Taro.vibrateShort({
      type: 'light'
    })
    
    setTimeout(() => {
      // 跳转到对应的山脉页面 - 使用 redirectTo 替换当前页面
      try {
        Taro.redirectTo({ 
          url: area.page,
          fail: (err) => {
            console.error('重定向失败:', err)
            Taro.showToast({
              title: '页面开发中',
              icon: 'none',
              duration: 1500
            })
          }
        })
      } catch (error) {
        console.error('导航失败:', error)
        Taro.showToast({
          title: '页面跳转失败',
          icon: 'none'
        })
      }
    }, 150)
    
    setTimeout(() => {
      setActiveAreaId(null)
    }, 300)
  }

  // 小鸟点击事件
  const handleBirdClick = () => {
    console.log('小鸟被点击了！')
    
    Taro.vibrateShort()
    
    Taro.showToast({
      title: '啾啾～点击地图区域探索山脉吧！',
      icon: 'none',
      duration: 2000
    })
  }

  // 返回上一页
  const handleBack = () => {
    Taro.navigateBack()
  }

  return (
    <View className="mountain-page">
      
      {/* 第一层：通用背景（全屏） */}
      <Image
        className="general-bg"
        src={require('@/assets/images/mountain-page-bg.png')}
        mode="aspectFill"
      />
      
      {/* 第二层：山脉图片（在背景上方，往下移动了很多） */}
      <Image
        className="mountain-image"
        src={image}
        mode="widthFix"
        onLoad={handleMountainImageLoad}
        style={{ marginTop: '120px' }} // 往下移动了很多
      />
      
      {/* 第三层：小鸟图片（左下角，放大至400px） */}
      <View 
        className="bird-container"
        onClick={handleBirdClick}
      >
        <Image
          className="bird-image"
          src={require('@/assets/images/bird.png')}
          mode="aspectFit"
        />
      </View>
      
      {/* 返回按钮（往下移动了很多） */}
      <View className="back-button" onClick={handleBack}>
        <Text className="back-arrow">←</Text>
      </View>
      
      {/* 用户信息区块：晴天小太初 */}
      <View className="user-info-block">
        <Image
          className="user-icon"
          src={require('@/assets/images/profile.png')}
          mode="aspectFit"
        />
        <Text className="user-text">晴天小太初</Text>
      </View>
      
      {/* 数字信息区块 */}
      <View className="number-info-block">
        <Text className="number-text">数字</Text>
        <Image
          className="number-icon"
          src={require('@/assets/images/constellation.png')}
          mode="aspectFit"
        />
      </View>
      
      {/* 动态渲染点击区域 */}
      {mountainAreas.map((area) => (
        <View
          key={area.id}
          className={`click-area ${area.id} ${debugMode ? 'debug-area' : ''} ${
            activeAreaId === area.id ? 'active' : ''
          }`}
          style={area.style}
          onClick={() => handleAreaClick(area)}
        >
          {/* 调试模式下显示区域信息 */}
          {debugMode && (
            <View className="area-debug-info">
              <Text className="area-name">{area.name}</Text>
              <Text className="area-path">
                {area.page.replace('/pages/mountains/', '')}
              </Text>
            </View>
          )}
        </View>
      ))}
      
      {/* 加载提示 */}
      {!mountainImageLoaded && (
        <View className="loading-overlay">
          <Text className="loading-text">加载山脉地图...</Text>
          <View className="loading-spinner"></View>
        </View>
      )}
      
      {/* ============== 底部导航栏 - 星座页面同款 ============== */}
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
          onClick={() => Taro.navigateTo({ url: '/pages/mountainPage/index' })}
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

export default MountainPage