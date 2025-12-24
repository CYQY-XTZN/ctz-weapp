// src/app.ts
import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
import Taro from '@tarojs/taro'  // 👈 确保引入 Taro

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log('App launched.')

    // 初始化云开发（仅在微信小程序中）
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init({
        env: 'cloud1-7gg10sorbbbec8d9', // ← 替换成你刚创建的环境 ID
        traceUser: true
      })
    }
  })

  return children
}

export default App