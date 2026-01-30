// src/pages/constellation/simple.tsx
import React from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './simple.scss'

const ConstellationSimple: React.FC = () => {
  React.useEffect(() => {
    console.log('✅ simple页面加载成功!')
  }, [])

  return (
    <View style={{
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <Text style={{
        fontSize: '40px',
        color: 'white',
        fontWeight: 'bold',
        marginBottom: '20px'
      }}>
        🎉 成功！
      </Text>
      <Text style={{
        fontSize: '20px',
        color: 'white',
        marginBottom: '10px',
        textAlign: 'center'
      }}>
        你成功跳转到了测试页面
      </Text>
      <Text style={{
        fontSize: '16px',
        color: 'rgba(255,255,255,0.8)',
        marginBottom: '30px',
        textAlign: 'center'
      }}>
        如果看到这个页面，说明跳转功能正常
      </Text>
      <Text 
        style={{
          fontSize: '18px',
          color: 'white',
          background: 'rgba(0,0,0,0.3)',
          padding: '10px 20px',
          borderRadius: '10px',
          marginTop: '20px'
        }}
        onClick={() => {
          console.log('返回按钮点击')
          Taro.navigateBack()
        }}
      >
        点击返回
      </Text>
    </View>
  )
}

export default ConstellationSimple