import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  lang: "zh-CN",

  base: '/myNotes/',
  // locales: {
  //   "/": {
  //     lang: "en-US",
  //     title: "Blog Demo",
  //     description: "A blog demo for vuepress-theme-hope",
  //   },
  //   "/zh/": {
  //     lang: "zh-CN",
  //     title: "博客演示",
  //     description: "vuepress-theme-hope 的博客演示",
  //   },
  // },
  theme,
  shouldPrefetch: false,
});
