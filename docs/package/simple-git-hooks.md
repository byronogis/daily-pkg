---
title: simple-git-hooks
version: 2.8.1
description: 管理 Git 钩子的工具
tags: 
  - npm
  - git
---

## 认识

### 亮点

- 自身零依赖(生产环境)
- 配置轻量
- 体积小

### 缺点

- 每次更改配置后需要执行命令以生效
- 每个钩子仅可配置单挑命令(相对应的支持多行的: husky)

## 开始

1. 安装

```bash
npm i -D simple-git-hooks
```

2. 配置

> 优先级从低向高  

- 通过 package.json
```json
{
  "simple-git-hooks": {
    "pre-commit": "npx lint-staged",
    "pre-push": "cd ../../ && npm run format",

    // All unused hooks will be removed automatically by default
    // but you can use the `preserveUnused` option like following to prevent this behavior

    // if you'd prefer preserve all unused hooks
    "preserveUnused": true,

    // if you'd prefer preserve specific unused hooks
    "preserveUnused": ["commit-msg"]
  }
}
```

- 通过配置文件:  
`.simple-git-hooks.cjs`, `.simple-git-hooks.js`, `simple-git-hooks.cjs`, `simple-git-hooks.js`, `.simple-git-hooks.json` or `simple-git-hooks.json`

- 命令行运行时手动传入配置文件

3. 生效

```bash
# [Optional] These 2 steps can be skipped for non-husky users
# 如果已经配置过 husky 则需要运行下面的命令  
git config core.hooksPath .git/hooks/
rm -rf .git/hooks

# Update ./git/hooks
npx simple-git-hooks
```
