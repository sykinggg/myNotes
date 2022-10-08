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
  }
])