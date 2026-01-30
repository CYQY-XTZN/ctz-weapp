// src/pages/constellation-detail/index.tsx
import React, { useState, useEffect } from 'react'
import { View, WebView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

const ConstellationDetailPage: React.FC = () => {
  const [constellationName, setConstellationName] = useState<string>('')
  const [webViewUrl, setWebViewUrl] = useState<string>('')

  useEffect(() => {
    // Get constellation name from URL
    const pages = Taro.getCurrentPages()
    if (pages.length > 0) {
      const currentPage = pages[pages.length - 1]
      const options = currentPage.options
      
      if (options && options.constellation) {
        const name = options.constellation
        setConstellationName(name)
        
        // CORRECTED URL - Fixed the encoding
        // Method 1: Direct URL (simpler)
        const iframeUrl = 'https://wannianrili.bmcx.com/'
        setWebViewUrl(iframeUrl)
        
        // Method 2: Or try without the wrapper
        // const directUrl = 'https://wannianrili.bmcx.com/'
        // setWebViewUrl(directUrl)
      }
    }
  }, [])

  return (
    <View className="constellation-detail-container">
      <View className="header">
        <View className="back-btn" onClick={() => Taro.navigateBack()}>
          返回
        </View>
        <View className="title">
          {constellationName ? `${constellationName} 详细运势` : '星座运势'}
        </View>
      </View>
      
      {webViewUrl ? (
        <WebView
          src={webViewUrl}
          className="webview-container"
          onLoad={(e) => {
            console.log('WebView加载成功')
          }}
          onError={(e) => {
            console.error('WebView错误:', e)
            Taro.showToast({
              title: '加载失败',
              icon: 'error'
            })
          }}
        />
      ) : (
        <View className="loading">加载中...</View>
      )}
    </View>
  )
}

export default ConstellationDetailPage