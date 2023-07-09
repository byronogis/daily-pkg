---
title: marked
version: 4.1.1
description: 将 md 解析为 html
tags: 
  - npm
---


> [Docs](https://marked.js.org)  

### usage

#### npm

```bash
npm install marked
npm install @types/marked # For TypeScript projects
```

```js
import { marked } from 'marked'

const mdSource = '## example\n- one\n- two\n- three'
marked.parse(mdSource) // html 字符串
```

#### cdn

```html
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

<script>
  const mdSource = '## example\n- one\n- two\n- three'
  marked.parse(mdSource) // html 字符串
</script>
```