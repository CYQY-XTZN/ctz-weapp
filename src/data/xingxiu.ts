// src/data/xingxiu.ts
export interface StarSign {
  id: string;
  name: string;
  startDate: string; // MM-DD
  endDate: string;   // MM-DD
  description: string;
  element: '金' | '木' | '水' | '火' | '土';
  direction: '东' | '南' | '西' | '北';
  animal: string;
}

export const XINGXIU_LIST: StarSign[] = [
  // 北方玄武（12月 ~ 2月）
  { id: 'xu',    name: '虚宿', startDate: '12-07', endDate: '12-21', element: '木', direction: '北', animal: '鼠', description: '玄武之眼，主洞察与孤独。' },
  { id: 'wei',   name: '危宿', startDate: '12-22', endDate: '01-05', element: '火', direction: '北', animal: '燕', description: '高危之宿，主风险与突破。' },
  { id: 'shi',   name: '室宿', startDate: '01-06', endDate: '01-19', element: '水', direction: '北', animal: '猪', description: '营室之星，主建造与规划。' },
  { id: 'bi',    name: '壁宿', startDate: '01-20', endDate: '02-02', element: '水', direction: '北', animal: '瑜', description: '图书之府，主智慧与传承。' },

  // 西方白虎（2月 ~ 4月）
  { id: 'kui',   name: '奎宿', startDate: '02-03', endDate: '02-16', element: '木', direction: '西', animal: '狼', description: '西方白虎之首，主文运与武略。' },
  { id: 'lou',   name: '娄宿', startDate: '02-17', endDate: '03-01', element: '金', direction: '西', animal: '狗', description: '聚众之宿，主社交与集结。' },
  { id: 'wei_xi',name: '胃宿', startDate: '03-02', endDate: '03-14', element: '土', direction: '西', animal: '雉', description: '天仓之星，主储备与滋养。' },
  { id: 'mao',   name: '昴宿', startDate: '03-15', endDate: '03-27', element: '火', direction: '西', animal: '鸡', description: '七姊妹星，主美丽与直觉。' },
  { id: 'bi_xi', name: '毕宿', startDate: '03-28', endDate: '04-09', element: '金', direction: '西', animal: '乌', description: '雨师之宿，主收获与终结。' },
  { id: 'zui',   name: '觜宿', startDate: '04-10', endDate: '04-22', element: '火', direction: '西', animal: '猴', description: '虎须之星，主机敏与暗藏。' },
  { id: 'shen',  name: '参宿', startDate: '04-23', endDate: '05-05', element: '水', direction: '西', animal: '猿', description: '白虎之体，主决断与征战。' },

  // 南方朱雀（5月 ~ 7月）
  { id: 'jing',  name: '井宿', startDate: '05-06', endDate: '05-18', element: '木', direction: '南', animal: '犴', description: '南方朱雀之首，主水源与交通。' },
  { id: 'gui',   name: '鬼宿', startDate: '05-19', endDate: '05-31', element: '金', direction: '南', animal: '羊', description: '积尸之气，主神秘与转化。' },
  { id: 'liu',   name: '柳宿', startDate: '06-01', endDate: '06-12', element: '火', direction: '南', animal: '獐', description: '朱雀之喙，主言语与影响。' },
  { id: 'xing',  name: '星宿', startDate: '06-13', endDate: '06-24', element: '火', direction: '南', animal: '马', description: '朱雀之心，主光明与荣耀。' },
  { id: 'zhang', name: '张宿', startDate: '06-25', endDate: '07-06', element: '火', direction: '南', animal: '鹿', description: '朱雀之嗉，主宴会与欢聚。' },
  { id: 'yi',    name: '翼宿', startDate: '07-07', endDate: '07-19', element: '土', direction: '南', animal: '蛇', description: '朱雀之翼，主飞翔与传播。' },
  { id: 'zhen',  name: '轸宿', startDate: '07-20', endDate: '08-01', element: '水', direction: '南', animal: '蚓', description: '朱雀之尾，主终结与新生。' },

  // 东方青龙（8月 ~ 11月）
  { id: 'jiao',  name: '角宿', startDate: '08-02', endDate: '08-13', element: '木', direction: '东', animal: '龙', description: '东方青龙之首，主开创与智慧。' },
  { id: 'kang',  name: '亢宿', startDate: '08-14', endDate: '08-25', element: '金', direction: '东', animal: '龙', description: '青龙之颈，主沟通与表达。' },
  { id: 'di',    name: '氐宿', startDate: '08-26', endDate: '09-06', element: '土', direction: '东', animal: '龙', description: '龙之胸，主稳重与积累。' },
  { id: 'fang',  name: '房宿', startDate: '09-07', endDate: '09-18', element: '火', direction: '东', animal: '兔', description: '青龙之腹，主守护与家庭。' },
  { id: 'xin',   name: '心宿', startDate: '09-19', endDate: '09-30', element: '火', direction: '东', animal: '狐', description: '龙之心，主热情与直觉。' },
  { id: 'wei_dong', name: '尾宿', startDate: '10-01', endDate: '10-13', element: '水', direction: '东', animal: '虎', description: '青龙之尾，主变化与行动。' },
  { id: 'ji',    name: '箕宿', startDate: '10-14', endDate: '10-26', element: '水', direction: '东', animal: '豹', description: '风伯之宿，主传播与影响。' },

  // 回到北方玄武（10月底 ~ 12月初）
  { id: 'niu',   name: '牛宿', startDate: '10-27', endDate: '11-08', element: '金', direction: '北', animal: '牛', description: '北方玄武之足，主勤劳与财富。' },
  { id: 'nv',    name: '女宿', startDate: '11-09', endDate: '11-20', element: '土', direction: '北', animal: '蝠', description: '玄武之翼，主柔韧与包容。' },
  { id: 'wu',    name: '斗宿', startDate: '11-21', endDate: '12-06', element: '木', direction: '北', animal: '牛', description: '北方玄武之首，主量度与命运。' }
];