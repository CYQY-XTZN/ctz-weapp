// src/utils/lunarCalculator.ts

/**
 * 中国传统28星宿计算工具
 * 根据出生日期计算对应的星宿和运势
 */

// 简化版农历转换（用于演示，实际项目建议使用专业的农历库）
const LUNAR_MONTH_DAYS = [
  1887, 0x1694, 0x16aa, 0x4ad5, 0xab6, 0xc4b7, 0x4ae, 0xa56, 0xb52a,
  0x1d2a, 0xd54, 0x75aa, 0x156a, 0x1096d, 0x95c, 0x14ae, 0xaa4d, 0x1a4c,
  0x1b2a, 0x8d55, 0xad4, 0x135a, 0x495d, 0x95c, 0xd49b, 0x149a, 0x1a4a,
  0xbaa5, 0x16a8, 0x1ad4, 0x52da, 0x12b6, 0xe937, 0x92e, 0x1496, 0xb64b,
  0xd4a, 0xda8, 0x95b5, 0x56c, 0x12ae, 0x492f, 0x92e, 0xcc96, 0x1a94,
  0x1d4a, 0xada9, 0xb5a, 0x56c, 0x726e, 0x125c, 0xf92d, 0x192a, 0x1a94,
  0xdb4a, 0x16aa, 0xad4, 0x955b, 0x4ba, 0x125a, 0x592b, 0x152a, 0xf695,
  0xd94, 0x16aa, 0xaab5, 0x9b4, 0x14b6, 0x6a57, 0xa56, 0x1152a, 0x1d2a,
  0xd54, 0xd5aa, 0x156a, 0x96c, 0x94ae, 0x14ae, 0xa4c, 0x7d26, 0x1b2a,
  0xeb55, 0xad4, 0x12da, 0xa95d, 0x95a, 0x149a, 0x9a4d, 0x1a4a, 0x11aa5,
  0x16a8, 0x16d4, 0xd2da, 0x12b6, 0x936, 0x9497, 0x1496, 0x1564b, 0xd4a,
  0xda8, 0xd5b4, 0x156c, 0x12ae, 0xa92f, 0x92e, 0xc96, 0x6d4a, 0x1d4a,
  0x10d65, 0xb58, 0x156c, 0xb26d, 0x125c, 0x192c, 0x9a95, 0x1a94, 0x1b4a,
  0x4b55, 0xad4, 0xf55b, 0x4ba, 0x125a, 0xb92b, 0x152a, 0x1694, 0x96aa,
  0x15aa, 0x12ab5, 0x974, 0x14b6, 0xca57, 0xa56, 0x1526, 0x8e95, 0xd54,
  0x15aa, 0x49b5, 0x96c, 0xd4ae, 0x149c, 0x1a4c, 0xbd26, 0x1aa6, 0xb54,
  0x6d6a, 0x12da, 0x1695d, 0x95a, 0x149a, 0xda4b, 0x1a4a, 0x1aa4, 0xbb54,
  0x16b4, 0xada, 0x495b, 0x936, 0xf497, 0x1496, 0x154a, 0xb6a5, 0xda4,
  0x15b4, 0x6ab6, 0x126e, 0x1092f, 0x92e, 0xc96, 0xcd4a, 0x1d4a, 0xd64,
  0x956c, 0x155c, 0x125c, 0x792e, 0x192c, 0xfa95, 0x1a94, 0x1b4a, 0xab55,
  0xad4, 0x14da, 0x8a5d, 0xa5a, 0x1152b, 0x152a, 0x1694, 0xd6aa, 0x15aa,
  0xab4, 0x94ba, 0x14b6, 0xa56, 0x7527, 0xd26, 0xee53, 0xd54, 0x15aa,
  0xa9b5, 0x96c, 0x14ae, 0x8a4e, 0x1a4c, 0x11d26, 0x1aa4, 0x1b54, 0xcd6a,
  0xada, 0x95c, 0x949d, 0x149a, 0x1a2a, 0x5b25, 0x1aa4, 0xfb52, 0x16b4,
  0xaba, 0xa95b, 0x936, 0x1496, 0x9a4b, 0x154a, 0x136a5, 0xda4, 0x15ac
]

const SOLAR_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

// 公历转农历（简化版，用于演示）
export const solarToLunar = (year: number, month: number, day: number) => {
  // 简化处理：直接返回公历日期（实际项目应使用农历库）
  const lunarYear = year
  const lunarMonth = month
  const lunarDay = day
  
  return {
    lunarYear,
    lunarMonth,
    lunarDay,
    isLeap: false,
    lunarDateStr: `${lunarYear}年${lunarMonth}月${lunarDay}日`
  }
}

// 28星宿列表（按顺序）
export const CONSTELLATION_LIST = [
  '角木蛟', '亢金龙', '氐土貉', '房日兔', '心月狐', '尾火虎', '箕水豹',
  '斗木獬', '牛金牛', '女土蝠', '虚日鼠', '危月燕', '室火猪', '壁水貐',
  '奎木狼', '娄金狗', '胃土雉', '昴日鸡', '毕月乌', '觜火猴', '参水猿',
  '井木犴', '鬼金羊', '柳土獐', '星日马', '张月鹿', '翼火蛇', '轸水蚓'
]

// 星宿详细信息接口
export interface ConstellationDetail {
  name: string
  element: string // 五行
  group: string // 星宫分组
  luckDirection: string[] // 吉方
  description: string
  luckyColor?: string // 幸运色
  luckyNumber?: number[] // 幸运数字
  advice?: string // 今日建议
}

// 28星宿完整详细信息
export const CONSTELLATION_DETAILS: Record<string, ConstellationDetail> = {
  '角木蛟': {
    name: '角木蛟',
    element: '木',
    group: '东方青龙',
    luckDirection: ['东方', '东南'],
    description: '角宿为二十八宿之首，主智慧与领导力。蛟龙得水，生机勃发，你是天生的治愈者。',
    luckyColor: '青色',
    luckyNumber: [3, 8],
    advice: '今日宜做长远规划，展现领导才能'
  },
  '亢金龙': {
    name: '亢金龙',
    element: '金',
    group: '东方青龙',
    luckDirection: ['西方', '西北'],
    description: '亢金龙星宿照耀，龙翔九天，气势如虹。你具有非凡的洞察力和坚定的意志。',
    luckyColor: '白色',
    luckyNumber: [4, 9],
    advice: '保持坚定信念，展现你的力量'
  },
  '氐土貉': {
    name: '氐土貉',
    element: '土',
    group: '东方青龙',
    luckDirection: ['中央', '东北'],
    description: '氐土貉星宿守护，大地之灵，沉稳内敛。你具有非凡的耐心和积累财富的能力。',
    luckyColor: '黄色',
    luckyNumber: [5, 0],
    advice: '稳步前进，积累经验与财富'
  },
  '房日兔': {
    name: '房日兔',
    element: '日',
    group: '东方青龙',
    luckDirection: ['东方', '南方'],
    description: '房日兔星宿当空，阳光明媚，温和善良。你具有温暖人心的力量，善于关怀他人。',
    luckyColor: '红色',
    luckyNumber: [1, 6],
    advice: '用温暖感染身边的人'
  },
  '心月狐': {
    name: '心月狐',
    element: '月',
    group: '东方青龙',
    luckDirection: ['北方', '西北'],
    description: '心月狐星宿闪耀，神秘优雅，智慧深邃。你具有敏锐的直觉和优雅的气质。',
    luckyColor: '银色',
    luckyNumber: [2, 7],
    advice: '相信你的直觉，展现优雅风范'
  },
  '尾火虎': {
    name: '尾火虎',
    element: '火',
    group: '东方青龙',
    luckDirection: ['南方', '东南'],
    description: '尾火虎星宿威猛，勇猛果敢，行动力强。你具有天生的领导力和决断力。',
    luckyColor: '红色',
    luckyNumber: [9, 7],
    advice: '勇敢行动，展现你的力量'
  },
  '箕水豹': {
    name: '箕水豹',
    element: '水',
    group: '东方青龙',
    luckDirection: ['北方', '西方'],
    description: '箕水豹星宿灵动，机智敏捷，适应力强。你具有出色的沟通能力和应变能力。',
    luckyColor: '黑色',
    luckyNumber: [1, 6],
    advice: '灵活应变，发挥你的沟通才能'
  },
  '斗木獬': {
    name: '斗木獬',
    element: '木',
    group: '北方玄武',
    luckDirection: ['东方', '东北'],
    description: '斗木獬星宿公正，明辨是非，守护正义。你具有公平的判断力和正直的品格。',
    luckyColor: '青色',
    luckyNumber: [3, 8],
    advice: '坚守正义，做出公正判断'
  },
  '牛金牛': {
    name: '牛金牛',
    element: '金',
    group: '北方玄武',
    luckDirection: ['西方', '西北'],
    description: '牛金牛星宿稳重，脚踏实地，财富稳固。你具有积累财富的耐心和智慧。',
    luckyColor: '白色',
    luckyNumber: [4, 9],
    advice: '稳健理财，积累财富'
  },
  '女土蝠': {
    name: '女土蝠',
    element: '土',
    group: '北方玄武',
    luckDirection: ['中央', '西南'],
    description: '女土蝠星宿神秘，洞察细微，智慧内敛。你具有敏锐的观察力和细腻的心思。',
    luckyColor: '黄色',
    luckyNumber: [5, 0],
    advice: '关注细节，发现隐藏的机会'
  },
  '虚日鼠': {
    name: '虚日鼠',
    element: '日',
    group: '北方玄武',
    luckDirection: ['南方', '东方'],
    description: '虚日鼠星宿机敏，聪慧灵活，适应变化。你具有快速学习和适应的能力。',
    luckyColor: '红色',
    luckyNumber: [1, 6],
    advice: '灵活应对变化，快速学习成长'
  },
  '危月燕': {
    name: '危月燕',
    element: '月',
    group: '北方玄武',
    luckDirection: ['北方', '西方'],
    description: '危月燕星宿优雅，高瞻远瞩，守护安全。你具有远见卓识和保护他人的本能。',
    luckyColor: '银色',
    luckyNumber: [2, 7],
    advice: '规划未来，保护重要的人和事'
  },
  '室火猪': {
    name: '室火猪',
    element: '火',
    group: '北方玄武',
    luckDirection: ['南方', '东南'],
    description: '室火猪星宿温暖，家庭和睦，享受生活。你具有创造温馨家庭环境的能力。',
    luckyColor: '红色',
    luckyNumber: [9, 7],
    advice: '营造温馨和谐的家庭氛围'
  },
  '壁水貐': {
    name: '壁水貐',
    element: '水',
    group: '北方玄武',
    luckDirection: ['北方', '西方'],
    description: '壁水貐星宿坚韧，防御稳固，持之以恒。你具有坚韧不拔的毅力和耐力。',
    luckyColor: '黑色',
    luckyNumber: [1, 6],
    advice: '坚持到底，守护你的成果'
  },
  '奎木狼': {
    name: '奎木狼',
    element: '木',
    group: '西方白虎',
    luckDirection: ['东方', '东南'],
    description: '奎木狼星宿威严，忠诚可靠，守护同伴。你具有忠诚的品质和保护团队的能力。',
    luckyColor: '青色',
    luckyNumber: [3, 8],
    advice: '忠于职守，保护你的团队'
  },
  '娄金狗': {
    name: '娄金狗',
    element: '金',
    group: '西方白虎',
    luckDirection: ['西方', '西北'],
    description: '娄金狗星宿忠诚，守护家园，尽职尽责。你具有强烈的责任感和忠诚心。',
    luckyColor: '白色',
    luckyNumber: [4, 9],
    advice: '尽职尽责，守护你的家园'
  },
  '胃土雉': {
    name: '胃土雉',
    element: '土',
    group: '西方白虎',
    luckDirection: ['中央', '东北'],
    description: '胃土雉星宿优雅，品味独特，善于发现美。你具有独特的审美眼光和艺术天赋。',
    luckyColor: '黄色',
    luckyNumber: [5, 0],
    advice: '培养艺术品味，发现生活中的美'
  },
  '昴日鸡': {
    name: '昴日鸡',
    element: '日',
    group: '西方白虎',
    luckDirection: ['南方', '东方'],
    description: '昴日鸡星宿光明，唤醒黎明，充满活力。你具有唤醒他人和带来希望的力量。',
    luckyColor: '红色',
    luckyNumber: [1, 6],
    advice: '传播正能量，唤醒希望'
  },
  '毕月乌': {
    name: '毕月乌',
    element: '月',
    group: '西方白虎',
    luckDirection: ['北方', '西北'],
    description: '毕月乌星宿神秘，洞察真相，智慧深邃。你具有深刻的洞察力和智慧。',
    luckyColor: '银色',
    luckyNumber: [2, 7],
    advice: '深入思考，洞察事物本质'
  },
  '觜火猴': {
    name: '觜火猴',
    element: '火',
    group: '西方白虎',
    luckDirection: ['南方', '东南'],
    description: '觜火猴星宿机智，聪明伶俐，善于解决问题。你具有出色的解决问题的能力和创造力。',
    luckyColor: '红色',
    luckyNumber: [9, 7],
    advice: '运用智慧，解决难题'
  },
  '参水猿': {
    name: '参水猿',
    element: '水',
    group: '西方白虎',
    luckDirection: ['北方', '西方'],
    description: '参水猿星宿探索，求知若渴，不断进取。你具有强烈的好奇心和探索精神。',
    luckyColor: '黑色',
    luckyNumber: [1, 6],
    advice: '保持好奇心，探索未知'
  },
  '井木犴': {
    name: '井木犴',
    element: '木',
    group: '南方朱雀',
    luckDirection: ['东方', '东南'],
    description: '井木犴星宿仁慈，乐善好施，滋养他人。你具有慷慨分享和滋养他人的天性。',
    luckyColor: '青色',
    luckyNumber: [3, 8],
    advice: '分享你的资源和知识'
  },
  '鬼金羊': {
    name: '鬼金羊',
    element: '金',
    group: '南方朱雀',
    luckDirection: ['西方', '西北'],
    description: '鬼金羊星宿神秘，守护秘密，忠诚可靠。你具有保守秘密和保护他人的能力。',
    luckyColor: '白色',
    luckyNumber: [4, 9],
    advice: '忠诚守护，保守重要秘密'
  },
  '柳土獐': {
    name: '柳土獐',
    element: '土',
    group: '南方朱雀',
    luckDirection: ['中央', '西南'],
    description: '柳土獐星宿优雅，柔韧适应，善于调和。你具有优雅的适应能力和协调能力。',
    luckyColor: '黄色',
    luckyNumber: [5, 0],
    advice: '灵活适应，协调各方关系'
  },
  '星日马': {
    name: '星日马',
    element: '日',
    group: '南方朱雀',
    luckDirection: ['南方', '东方'],
    description: '星日马星宿奔腾，追求自由，勇往直前。你具有追求自由和勇往直前的精神。',
    luckyColor: '红色',
    luckyNumber: [1, 6],
    advice: '追求自由，勇往直前'
  },
  '张月鹿': {
    name: '张月鹿',
    element: '月',
    group: '南方朱雀',
    luckDirection: ['北方', '西北'],
    description: '张月鹿星宿优雅，高贵典雅，艺术天赋。你具有高雅的气质和艺术才华。',
    luckyColor: '银色',
    luckyNumber: [2, 7],
    advice: '展现你的艺术才华和高雅气质'
  },
  '翼火蛇': {
    name: '翼火蛇',
    element: '火',
    group: '南方朱雀',
    luckDirection: ['南方', '东南'],
    description: '翼火蛇星宿智慧，善于变化，重生蜕变。你具有智慧和不断重生的能力。',
    luckyColor: '红色',
    luckyNumber: [9, 7],
    advice: '拥抱变化，不断重生成长'
  },
  '轸水蚓': {
    name: '轸水蚓',
    element: '水',
    group: '南方朱雀',
    luckDirection: ['北方', '西方'],
    description: '轸水蚓星宿谦逊，默默耕耘，善于积累。你具有谦逊的品格和积累的能力。',
    luckyColor: '黑色',
    luckyNumber: [1, 6],
    advice: '谦逊耕耘，默默积累力量'
  }
}

// 时辰转换函数
export function getChineseTimePeriod(hour: number, minute: number): string {
  // 中国12时辰对照表（每个时辰2小时）
  const timePeriods = [
    { start: 23, end: 1, name: '子时' },    // 23:00-01:00
    { start: 1, end: 3, name: '丑时' },     // 01:00-03:00
    { start: 3, end: 5, name: '寅时' },     // 03:00-05:00
    { start: 5, end: 7, name: '卯时' },     // 05:00-07:00
    { start: 7, end: 9, name: '辰时' },     // 07:00-09:00
    { start: 9, end: 11, name: '巳时' },    // 09:00-11:00
    { start: 11, end: 13, name: '午时' },   // 11:00-13:00
    { start: 13, end: 15, name: '未时' },   // 13:00-15:00
    { start: 15, end: 17, name: '申时' },   // 15:00-17:00
    { start: 17, end: 19, name: '酉时' },   // 17:00-19:00
    { start: 19, end: 21, name: '戌时' },   // 19:00-21:00
    { start: 21, end: 23, name: '亥时' },   // 21:00-23:00
  ]

  // 调整小时处理
  let adjustedHour = hour
  if (hour === 0) adjustedHour = 24 // 0点算作24点
  
  for (const period of timePeriods) {
    // 处理跨天的情况（子时）
    if (period.start === 23) {
      if (adjustedHour >= 23 || adjustedHour < 1) {
        return period.name
      }
    } else if (period.start <= adjustedHour && adjustedHour < period.end) {
      return period.name
    }
  }

  return '未知时辰'
}

// 改进的星宿计算算法
export const calculateConstellationAdvanced = (
  solarDate: string,  // 格式: "2023-12-30"
  birthTime?: string  // 格式: "14:30"
): string => {
  try {
    const [yearStr, monthStr, dayStr] = solarDate.split('-')
    const year = parseInt(yearStr)
    const month = parseInt(monthStr)
    const day = parseInt(dayStr)
    
    // 1. 计算该日期在一年中的第几天
    const startOfYear = new Date(year, 0, 1)
    const currentDate = new Date(year, month - 1, day)
    const diff = Math.floor((currentDate.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24))
    const dayOfYear = diff + 1
    
    // 2. 考虑时辰的影响（如果有的话）
    let timeOffset = 0
    if (birthTime) {
      const [hour, minute] = birthTime.split(':').map(Number)
      // 每个时辰增加0.1的偏移量
      const hourFraction = (hour * 60 + minute) / 1440 // 一天的总分钟数
      timeOffset = hourFraction * 0.05 // 减小影响因子
    }
    
    // 3. 计算星宿索引（28星宿循环）
    // 传统算法通常基于节气或特定起始点，这里简化处理
    // 以春分为起始点（大约3月21日），对应角木蛟
    const springEquinoxDay = 80 // 3月21日大约是第80天
    
    // 计算相对天数
    let constellationDay = dayOfYear - springEquinoxDay
    if (constellationDay < 0) {
      constellationDay += 365
    }
    
    // 计算索引（考虑时间偏移）
    // 将一年365天映射到28星宿
    const rawIndex = Math.floor((constellationDay / 365) * 28 + timeOffset)
    const constellationIndex = (rawIndex % 28 + 28) % 28 // 确保在0-27范围内
    
    // 4. 返回对应星宿
    return CONSTELLATION_LIST[constellationIndex]
  } catch (error) {
    console.error('计算星宿失败:', error)
    return '角木蛟' // 默认返回一个有效的星宿
  }
}

// 简化版本的星宿计算（保持向后兼容）
export const calculateConstellation = (birthDate: string): string => {
  return calculateConstellationAdvanced(birthDate)
}

// 获取星宿详细信息
export const getConstellationDetail = (name: string): ConstellationDetail => {
  return CONSTELLATION_DETAILS[name] || {
    name,
    element: '未知',
    group: '未知星宫',
    luckDirection: ['暂无数据'],
    description: '该星宿的详细解读正在完善中。',
    luckyColor: '灰色',
    luckyNumber: [0],
    advice: '保持平常心，静观其变'
  }
}

// 计算今日运势百分比（基于星宿和日期）
export const calculateLuckPercentage = (constellationName: string): number => {
  const detail = getConstellationDetail(constellationName)
  const today = new Date()
  
  // 简单算法：结合星宿五行和当前日期
  const elementWeight: Record<string, number> = {
    '木': 65, '金': 70, '土': 75, '日': 80, '月': 68, '火': 72, '水': 68
  }
  
  const baseScore = elementWeight[detail.element] || 50
  const dayBonus = (today.getDate() % 28) * 0.5
  const monthBonus = (today.getMonth() + 1) * 0.3
  
  let percentage = (baseScore + dayBonus + monthBonus) % 100
  
  // 确保在50-90%之间
  percentage = Math.max(50, Math.min(90, percentage))
  
  return Math.round(percentage)
}

// 获取星宿分组信息
export const getConstellationGroupInfo = (group: string) => {
  const groups: Record<string, { description: string; season: string; element: string }> = {
    '东方青龙': {
      description: '青龙代表春季，主生长与发展，象征权力与尊贵',
      season: '春季',
      element: '木'
    },
    '北方玄武': {
      description: '玄武代表冬季，主智慧与防御，象征长寿与稳定',
      season: '冬季',
      element: '水'
    },
    '西方白虎': {
      description: '白虎代表秋季，主肃杀与变革，象征勇气与力量',
      season: '秋季',
      element: '金'
    },
    '南方朱雀': {
      description: '朱雀代表夏季，主热情与光明，象征重生与希望',
      season: '夏季',
      element: '火'
    }
  }
  
  return groups[group] || {
    description: '未知星宫',
    season: '未知',
    element: '未知'
  }
}

// 获取所有星宿列表（用于展示）
export const getAllConstellations = (): ConstellationDetail[] => {
  return CONSTELLATION_LIST.map(name => getConstellationDetail(name))
}

// 根据日期获取今日推荐星宿（用于首页展示）
export const getTodayRecommendedConstellation = (): ConstellationDetail => {
  const today = new Date()
  const dayOfMonth = today.getDate()
  const constellationIndex = (dayOfMonth - 1) % 28
  const constellationName = CONSTELLATION_LIST[constellationIndex]
  return getConstellationDetail(constellationName)
}

// 检查日期是否有效
export const isValidDate = (dateStr: string): boolean => {
  try {
    const [year, month, day] = dateStr.split('-').map(Number)
    const date = new Date(year, month - 1, day)
    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day &&
      year >= 1900 &&
      year <= 2100
    )
  } catch {
    return false
  }
}

// 获取外部链接（百度百科）
export const getExternalLink = (constellationName: string): string => {
  const encodedName = encodeURIComponent(constellationName)
  return `https://baike.baidu.com/item/${encodedName}`
}