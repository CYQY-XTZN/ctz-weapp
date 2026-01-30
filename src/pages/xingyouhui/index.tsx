// src/pages/xingyouhui/index.tsx
import { View, Text, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import './index.scss'

const BG_IMAGE = "https://636c-cloud1-7gg10sorbbbec8d9-1392459764.tcb.qcloud.la/images/xingyouhui-main.png?sign=ab2cd2af34cb66d96905c56178f8f533&t=1769576959"
const LOCAL_IMAGE1 = require('../../assets/images/xyh-1.png')
const LOCAL_IMAGE2 = require('../../assets/images/xyh-2.png')
const LOCAL_IMAGE3 = require('../../assets/images/xyh-3.png')
const LOCAL_IMAGE4 = require('../../assets/images/xyh-3.png')

const StarFriends = () => {
  // 收藏状态管理
  const [favorites, setFavorites] = useState<number[]>([])
  // 评分点赞状态管理
  const [ratedItems, setRatedItems] = useState<number[]>([])

  const components = [
    {
      id: 1,
      title: '角木蛟部落',
      description: '收到了！第一批黄精茶，汤色晶莹！',
      distance: '1.5 kms',
      rating: '4.8 ★',
      image: LOCAL_IMAGE1
    },
    {
      id: 2,
      title: '黄精茶生活',
      description: '收到了！第一批黄精茶，汤色晶莹！',
      distance: '1.5 kms',
      rating: '4.8 ★',
      image: LOCAL_IMAGE2
    },
    {
      id: 3,
      title: '金线莲种植心得',
      description: '晨间采摘，露水还未干透。',
      distance: '1.5 kms',
      rating: '4.8 ★',
      image: LOCAL_IMAGE3
    },
    {
      id: 4,
      title: '金线莲种植心得',
      description: '晨间采摘，露水还未干透。',
      distance: '1.5 kms',
      rating: '4.8 ★',
      image: LOCAL_IMAGE4
    }
  ]

  // 从本地存储加载收藏状态
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = await Taro.getStorage({ key: 'starFriendsFavorites' })
        if (storedFavorites.data) {
          setFavorites(JSON.parse(storedFavorites.data))
        }
      } catch (error) {
        // 如果没有存储数据，使用空数组
        setFavorites([])
      }
    }
    loadFavorites()
  }, [])

  // 从本地存储加载评分点赞状态
  useEffect(() => {
    const loadRatedItems = async () => {
      try {
        const storedRatedItems = await Taro.getStorage({ key: 'starFriendsRatedItems' })
        if (storedRatedItems.data) {
          setRatedItems(JSON.parse(storedRatedItems.data))
        }
      } catch (error) {
        setRatedItems([])
      }
    }
    loadRatedItems()
  }, [])

  // 保存收藏状态到本地存储
  const saveFavorites = async (newFavorites: number[]) => {
    try {
      await Taro.setStorage({
        key: 'starFriendsFavorites',
        data: JSON.stringify(newFavorites)
      })
    } catch (error) {
      console.error('保存收藏失败:', error)
    }
  }

  // 保存评分点赞状态到本地存储
  const saveRatedItems = async (newRatedItems: number[]) => {
    try {
      await Taro.setStorage({
        key: 'starFriendsRatedItems',
        data: JSON.stringify(newRatedItems)
      })
    } catch (error) {
      console.error('保存点赞失败:', error)
    }
  }

  // 切换收藏状态
  const toggleFavorite = (id: number) => {
    let newFavorites: number[]
    if (favorites.includes(id)) {
      // 如果已收藏，则取消收藏
      newFavorites = favorites.filter(favId => favId !== id)
    } else {
      // 如果未收藏，则添加收藏
      newFavorites = [...favorites, id]
    }
    setFavorites(newFavorites)
    saveFavorites(newFavorites)
  }

  // 切换评分点赞状态
  const toggleRating = (id: number) => {
    let newRatedItems: number[]
    if (ratedItems.includes(id)) {
      // 如果已点赞，则取消点赞
      newRatedItems = ratedItems.filter(itemId => itemId !== id)
    } else {
      // 如果未点赞，则添加点赞
      newRatedItems = [...ratedItems, id]
    }
    setRatedItems(newRatedItems)
    saveRatedItems(newRatedItems)
  }

  // 判断是否已收藏
  const isFavorited = (id: number) => {
    return favorites.includes(id)
  }

  // 判断是否已点赞
  const isRated = (id: number) => {
    return ratedItems.includes(id)
  }

  return (
    <View className="star-friends-container">
      {/* 背景图片 */}
      <Image
        src={BG_IMAGE}
        mode="aspectFill"
        className="background-image"
      />
      
      {/* 探索更多标题 */}
      <View className="explore-header">
        <Text className="explore-title">探索更多</Text>
      </View>

      {/* 4个组件网格 */}
      <View className="components-grid">
        {components.map((item) => (
          <View key={item.id} className="component-card">
            {/* Heart favorite icon - top right */}
            <View 
              className={`favorite-heart ${isFavorited(item.id) ? 'favorited' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(item.id);
              }}
            >
              <Text className="heart-icon">♡</Text>
            </View>

            <View className="image-container">
              <Image 
                src={item.image} 
                mode="aspectFill" 
                className="component-image"
              />
            </View>
            <Text className="component-title">{item.title}</Text>
            <Text className="component-description">{item.description}</Text>
            <View className="component-info">
              <Text className="distance">{item.distance}</Text>
              <Text 
                className={`rating ${isRated(item.id) ? 'rated' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  toggleRating(item.id)
                }}
              >
                {item.rating}
              </Text>
            </View>
          </View>
        ))}
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

export default StarFriends