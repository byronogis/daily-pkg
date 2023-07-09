/**
 * See https://vitepress.dev/reference/site-config
 */

import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'
import { sidebarArr } from './sidebar'

export default defineConfig({
  /**
   * Site Metadata
   */
  title: 'Daily-Pkg',
  titleTemplate: false,
  description: 'Learn about a package per day.',
  head: [],
  lang: 'zh-CN',
  base: '/', // It should always start and end with a slash.

  /**
   * Routing
   */
  cleanUrls: false,
  rewrites: {},

  /**
   * Build
   * **relative to project root**
   */
  srcDir: '.',
  srcExclude: undefined,
  outDir: './.vitepress/dist',
  cacheDir: './.vitepress/cache',
  ignoreDeadLinks: false,
  mpa: false, // experimental

  /**
   * Theming
   */
  appearance: true, // boolean | 'dark'
  lastUpdated: true,

  /**
   * Default Theme Config
   * See https://vitepress.dev/reference/default-theme-config
   */
  themeConfig: {
    i18nRouting: false,
    // logo: '',
    // siteTitle: false,
    // nav: [],
    sidebar: sidebarArr,
    aside: true,
    outline: [2, 6],
    outlineTitle: '目录',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/byronogis' },
    ],
    footer: {
      message: 'Learn about a package per day.',
      copyright: 'Copyright @ PRESENT Byron',
    },
    editLink: {
      pattern: 'https://github.com/byronogis/daily-pkg/edit/main/docs/:path',
      text: '在 GitHub 上编辑',
    },
    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
      },
    },
    // search: {
    //   provider: 'algolia', // 'algolia' | 'local'
    //   options: {},
    // },
    // carbonAds: {},
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '语言',
    externalLinkIcon: true,
  },

  /**
   * markdown
   * See https://vitepress.dev/reference/site-config#markdown
   */
  markdown: {
    lineNumbers: true,
  },

  /**
   * vite
   * See https://vitepress.dev/reference/site-config#vite
   */
  vite: {
    plugins: [
      UnoCSS(),
    ],
  },

  /**
   * vue
   * See https://vitepress.dev/reference/site-config#vue
   */
  vue: {
    // @vitejs/plugin-vue options
  },
})
