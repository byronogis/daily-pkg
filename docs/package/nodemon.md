---
title: nodemon
version: 2.0.20
description: 文件修改后自动重载 node 服务
tags: 
  - npm
  - 服务
---


### usage

#### install

```bash
npm i -D nodemon
```

#### config

create a config file

```json
// ~/nodemon.json
{
  "watch": "./src", // 监视的文件夹
  "ext": "js", // 监视的文件格式
  "exec": "node ./src/index.js" // 执行的命令
}
```

```json
{
  // ...
  "exec": "ts-node-esm --experimental-specifier-resolution=node ./src/index.ts"
}
```

#### scripts


```json
// ~/package.json
{
  "scripts": {
    "dev": "nodemon"
  }
}
```

