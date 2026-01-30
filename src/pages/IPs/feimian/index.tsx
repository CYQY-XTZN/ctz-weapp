import React, { useState } from 'react';
import { View, Image, Text } from '@tarojs/components';
import './index.scss';
import Taro from '@tarojs/taro'

// 导入背景图片
import qinggengImage from '@/assets/images/feimian.png';
// TODO: 导入按钮图片 - 请替换为你的按钮图片文件名
import startButtonImage from '@/assets/images/start-button.png'; // 需要你提供

const IndexPage: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // 处理按钮点击
  const handleButtonClick = () => {
    console.log('点击了"开启"按钮');
    
    // 这里添加你的业务逻辑
    // Taro.navigateTo({ 
    //   url: '/pages/main/main' 
    // });
    
    // 示例：显示加载提示
    // Taro.showLoading({
    //   title: '开启中...',
    //   mask: true
    // });
  };
  // 处理向前箭头点击 - 回到星座页面
  const handleForwardClick = () => {
    Taro.navigateTo({ 
       url: '/pages/IPs/qinggeng/index' 
    });
  };
  return (
    <View className="fullscreen-container">
      {/* 全屏背景图片 */}
      <Image
        src={qinggengImage}
        mode="aspectFill"
        className="fullscreen-image"
        onLoad={() => {
          console.log('背景图片加载完成');
          setImageLoaded(true);
        }}
      />
      
      {/* 向前箭头 - 回到星座页面 */}
            <View className="arrow-container arrow-forward" onClick={handleForwardClick}>
        <View className="back-button">
          <Text className="back-arrow">←</Text>
        </View>
      </View>
      
      {/* 第二段白色文字 - 向下移动很多 */}
      <View className="text-section text-section-2">
        <Text className="text-line">世间喧嚣，唯我以此身</Text>
        <Text className="text-line">护你一夜安眠</Text>
        <Text className="text-content">
        我并不属于白天，我属于你那些无法言说的夜晚。
        我是腓眠，你的身心守护者。
        我会潜入你的梦境，吞噬掉那些名为“焦虑”与“疲惫”的怪兽。
        </Text>
      </View>
      
      {/* 开启按钮 - 变大并向下移动很多 */}
      <View className="button-container">
        <Image
          src={startButtonImage}
          mode="widthFix"
          className="start-button"
          onClick={handleButtonClick}
        />
      </View>
      
      {/* 加载状态提示 */}
      {!imageLoaded && (
        <View className="loading-indicator">
          <Text>加载中...</Text>
        </View>
      )}
    </View>
  );
};

export default IndexPage;