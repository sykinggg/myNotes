import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: '随笔',
    icon: "creative",
    children: [
      {
        text: '孔乙己',
        link: '/base/kongyiji.md',
      },
    ]
  },
  {
    text: '历史',
    icon: "creative",
    children: [
      {
        text: '东晋',
        link: '/jinji/1.md',
      },
    ]
  },
  {
    text: '鬼故事',
    icon: 'creative',
    children: [
      {
        text: '短篇',
        link: '/scaryGhostStory/1.md',
      },
    ]
  },
  {
    text: '电视剧',
    icon: 'creative',
    children: [
      {
        text: '昆仑神宫',
        link: '/kunlunShrine/1.md',
      },
      {
        text: '唐朝诡事录',
        link: '/tangDynastyStrangeStories/1.md',
      },
      {
        text: '请回答1988',
        link: '/pleaseAnswer1988/1.md',
      },
      {
        text: '大明王朝 1566',
        link: '/mingDynasty1566/1.md',
      },
      {
        text: '潜伏',
        link: '/lurking/1.md',
      },
      {
        text: '大宅门',
        link: '/mansionGate/1.md',
      },
      {
        text: '琅琊榜',
        link: '/langyaBang/1.md',
      },
      {
        text: '父母爱情',
        link: '/parentalLove/1.md',
      },
      {
        text: '觉醒年代',
        link: '/theAgeOfAwakening/1.md',
      },
      {
        text: '机智的监狱生活',
        link: '/wittyCellLife/1.md',
      },
      {
        text: '沉默的真相',
        link: '/theSilentTruth/1.md',
      },
      {
        text: '茶馆',
        link: '/teahouse/1.md',
      },
      {
        text: '苍兰诀',
        link: '/freesiaTactic/1.md',
      },
    ]
  },
  {
    text: '电影',
    icon: 'creative',
    children: [
      {
        text: '悬疑类',
        link: '/suspense/inception.md',
      }
    ]
  }
])