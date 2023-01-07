---
title: vuex-persistedstate
version: 4.1.0
description: vuex数据持久化
tags: 
  - npm
---


> 包已经不再维护

### usage

#### npm

```bash
npm install vuex-persistedstate
```

```js
import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
  // ...
  plugins: [createPersistedState()],
})
```

#### cdn

```html
<script src="https://unpkg.com/vuex-persistedstate/dist/vuex-persistedstate.umd.js"></script>
<script>
  // You can find the library on window.createPersistedState.
</script>
```
