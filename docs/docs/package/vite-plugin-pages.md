---
title: vite-plugin-pages
version: 0.28.0
description: 在 vite 中使用基于文件系统的路由
tags: 
  - npm
---

### install

#### vue

```bash
npm install -D vite-plugin-pages
npm install vue-router
```

### config

#### vue

- `~/vite.config.js`

```js
import Pages from 'vite-plugin-pages'

export default {
  plugins: [
    // ...
    Pages({
      dirs: 'src/pages', // default; 路由组件存放路径
      extensions: ['vue', 'ts', 'js'], // default in vue; 可被识别为路由的文件扩展名
      exclude: [], // default; 需要排除的glob匹配
      importMode: 'async', // default: 根路由 sync 其余 async;
      routeBlockLang: 'json5', // default; 
      routeStyle: 'next', // default; 'next' | 'nuxt' | 'remix'; 路由风格: 文件命名方式 & 嵌套 & 参数 ...
      routeNameSeparator: '-', // 路由名称分隔符
      resolver: 'vue', // default: 自动检测; 'vue' | 'react' | 'solid' | PageResolver ; 
      moduleId: '~pages', // default in vue; 路由表的引入名称
      extendRoute: null, // no default; (route: any, parent: any | undefined) => any | void ; 自定义路由
      onRoutesGenerated: null, // no default; (routes: any[]) => Awaitable<any[] | void> ; 路由生成后的回调
      onClientGenerated: null, // no default; 
    }),
  ],
}
```

- `~/src/main.js`

```js
import { createApp } from 'vue'
import { createRouter } from 'vue-router'
import routes from '~pages'
import App from './App.vue'

const router = createRouter({
  // ...
  routes,
})

const app = createApp(App)

app.use(router)
```

### usage

#### vue

1. 添加路由出口

```vue
<!-- ~/src/App.vue -->
<template>
  <RouterView />
</template>
```

2. 在 `src/pages/` 下建立组件, 路径即为路由路径, 组件即为页面

