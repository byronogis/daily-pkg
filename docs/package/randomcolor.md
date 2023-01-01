---
title: randomcolor
version: 0.6.2
description: 随即生成柔和的颜色
---


### usage

#### npm

```bash
npm install randomcolor
```

```js
const randomColor = require('randomColor')

const options = {
  count: 10,
  format: 'rgb', // rgb, rgba, rgbArray, hsl, hsla, hslArray and hex (default)
}

const color = randomColor(options)
```

#### cdn

```html
<script src="https://unpkg.com/randomcolor@0.6.2/randomColor.js"></script>

<script>
  console.log(window.randomColor())
</script>
```
