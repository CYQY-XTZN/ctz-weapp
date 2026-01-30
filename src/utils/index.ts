// src/utils/index.ts
import Taro from '@tarojs/taro'

// 格式化日期
export const formatDate = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date
  return `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`
}

// 获取今天日期
export const getToday = (): string => {
  return formatDate(new Date())
}

// 获取星期几
export const getWeekday = (date?: Date | string): string => {
  const d = date ? (typeof date === 'string' ? new Date(date) : date) : new Date()
  const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  return weekdays[d.getDay()]
}

// 显示Toast
export const showToast = (title: string, icon: 'success' | 'error' | 'loading' | 'none' = 'none') => {
  Taro.showToast({
    title,
    icon,
    duration: 2000
  })
}

// 显示加载
export const showLoading = (title: string = '加载中...') => {
  Taro.showLoading({ title })
}

// 隐藏加载
export const hideLoading = () => {
  Taro.hideLoading()
}

// 验证手机号
export const validatePhone = (phone: string): boolean => {
  const reg = /^1[3-9]\d{9}$/
  return reg.test(phone)
}

// 验证邮箱
export const validateEmail = (email: string): boolean => {
  const reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return reg.test(email)
}

// 计算年龄
export const calculateAge = (birthdate: string): number => {
  const birthDate = new Date(birthdate)
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }
  
  return age
}