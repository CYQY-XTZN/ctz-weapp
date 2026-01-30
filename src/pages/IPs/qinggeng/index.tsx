import React, { useState } from 'react';
import { View, Image, Text } from '@tarojs/components';
import './index.scss';
import Taro from '@tarojs/taro'

// 导入按钮图片
import startButtonImage from '@/assets/images/start-button.png'; 

// 导入背景图片
const qinggengImage = "https://636c-cloud1-7gg10sorbbbec8d9-1392459764.tcb.qcloud.la/images/qinggeng.png?sign=b4c91f00dac5fcb6ae14a32d039711f2&t=1769576896"

const IndexPage: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // 处理开启按钮点击
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
       url: '/pages/constellation/index' 
    });
  };

  // 处理向后箭头点击 - 去到IPs页面
  const handleBackwardClick = () => {
    Taro.navigateTo({ 
      url: '/pages/IPs/feimian/index' 
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
      
      {/* 向后箭头 - 去到IPs页面 */}
      <View className="arrow-container arrow-backward" onClick={handleBackwardClick}>
        <View className="back-button">
          <Text className="back-arrow">→</Text>
        </View>
      </View>
      
      {/* 第二段白色文字 - 向下移动很多 */}
      <View className="text-section text-section-2">
        <Text className="text-line">太初有道，万物生光</Text>
        <Text className="text-line">我替你看着这片土地的每一次呼吸</Text>
        <Text className="text-content">
          我不只是传说中的御疫神鸟，更是你遗落在山野间的眼睛。
          我是青耕，你的灵田监护人。我将穿梭于千里之外的深山
          与你的屏幕之间，只为传递生命的讯息。
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