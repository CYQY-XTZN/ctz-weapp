// src/store/index.ts
import Taro from '@tarojs/taro'

export interface UserData {
  username?: string;
  birthdate?: string;
  birthtime?: string;
  gender?: 'male' | 'female';
  relationship?: 'single' | 'in_relationship' | 'married';
  constellation?: string;
}

class AppStore {
  private readonly STORAGE_KEY = 'app-store-v1'

  getUserData(): UserData {
    try {
      return Taro.getStorageSync(this.STORAGE_KEY) || {}
    } catch (error) {
      console.error('读取用户数据失败:', error)
      return {}
    }
  }

  setUserData(data: Partial<UserData>) {
    try {
      const currentData = this.getUserData()
      const newData = { ...currentData, ...data }
      Taro.setStorageSync(this.STORAGE_KEY, newData)
      return true
    } catch (error) {
      console.error('保存用户数据失败:', error)
      return false
    }
  }

  clearUserData() {
    try {
      Taro.removeStorageSync(this.STORAGE_KEY)
      return true
    } catch (error) {
      console.error('清除用户数据失败:', error)
      return false
    }
  }

  getUsername(): string {
    return this.getUserData().username || ''
  }

  getBirthdate(): string {
    return this.getUserData().birthdate || ''
  }

  getBirthtime(): string {
    return this.getUserData().birthtime || ''
  }

  getGender(): UserData['gender'] {
    return this.getUserData().gender
  }

  getRelationship(): UserData['relationship'] {
    return this.getUserData().relationship
  }
}

export const appStore = new AppStore()