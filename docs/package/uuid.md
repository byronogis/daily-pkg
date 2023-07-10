---
title: uuid
version: 9.0.0
description: 生成全局唯一标识符
tags: 
  - npm
  - 标识
---


### usage

#### npm

```bash
npm install uuid
```

```js
import { v4 as uuid } from 'uuid'

uuid()
```

#### npx

```bash
npx uuid --help

npx uuid v4
```

#### cdn

```html
<script type="module">
  import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
  console.log(uuidv4()); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
</script>
```
