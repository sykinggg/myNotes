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
      }
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