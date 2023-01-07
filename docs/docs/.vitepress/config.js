import { defineConfig } from 'vitepress'
import { sidebarArr } from './sidebar'

export default defineConfig({
  // See https://vitepress.vuejs.org/config/app-configs
  appearance: true, // boolean | 'dark'
  base: '/',
  description: 'Learn about a package per day.',
  head: [],
  ignoreDeadLinks: false,
  lang: 'zh-CN',
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
  },
  outDir: './.vitepress/dist',
  cacheDir: './.vitepress/cache',
  srcDir: '.',
  title: 'Daily-Pkg',
  titleTemplate: undefined,
  cleanUrls: 'disabled', // Experimental
  // See https://vitepress.vuejs.org/config/theme-configs
  themeConfig: {
    // logo: '',
    // siteTitle: false,
    // nav: [],
    sidebar: sidebarArr,
    outline: [2, 6],
    // outlineTitle: '大纲',
    socialLinks: [],
    footer: {
      message: 'Learn about a package per day.',
      copyright: 'Copyright @ PRESENT Liam',
    },
    editLink: {
      pattern: 'https://github.com/liamrad/daily-pkg/edit/main/docs/:path',
      text: '在 GitHub 上编辑',
    },
    lastUpdatedText: '最后更新',
    // carbonAds: {},
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
  },
})
