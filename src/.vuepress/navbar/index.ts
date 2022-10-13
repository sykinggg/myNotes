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
])