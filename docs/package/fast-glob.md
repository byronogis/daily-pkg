---
title: fast-glob
version: 3.2.12
description: 遍历获取文件路径
---

## 使用

```bash
npm i fast-glob
```

```js
import fg from 'fast-glob'
```

### 异步调用

> `fg(patterns: string | string[], options?: {})`, 返回 promise  

```ts
fg('src/**/*.js').then((res: Array) => {
  // ...
})
```

### 同步调用

> `fg.sync(patterns: string | string[], options?: {})`  

```ts
const res = fg.sync('src/**/*.js')
```

### options

```ts
interface FileSystemAdapter {
  lstat?: typeof fs.lstat;
  stat?: typeof fs.stat;
  lstatSync?: typeof fs.lstatSync;
  statSync?: typeof fs.statSync;
  readdir?: typeof fs.readdir;
  readdirSync?: typeof fs.readdirSync;
}

interface Options {
  // Common options
  concurrency?: number // Default: os.cpus().length
  cwd: string // Default: process.cwd()
  deep: number // Default: Infinity 使用 ** 这样的匹配符号可匹配的目录层级
  followSymbolicLinks?: boolean // Default: true
  fs?: FileSystemAdapter // 
  ignore?: string[] // Default: []  
  suppressErrors?: boolean // Default: false
  throwErrorOnBrokenSymbolicLink?: boolean // Default: false
  // Output control
  absolute: boolean // Default: false 结果输出绝对路径
  markDirectories: boolean // Default: false 匹配目录是,目录结果是否以'/'结尾
  objectMode: boolean // Default: false 匹配结果输出为对象{ name, path, dirnet }集合而非字符串集合
  onlyDirectories: boolean // Default: false 仅匹配目录
  onlyFiles: boolean // Default: true 仅匹配文件
  stats?: boolean // Default: false 对象模式的输出结果中添加额外字段 `instance of fs.Stats`
  unique?: boolean // Default: true 在多个匹配模式下确保结果唯一
  // Matching control
  braceExpansion?: boolean // Default: true 将大括号作为匹配符号
  caseSensitiveMatch?: boolean // Default: true 匹配时区分大小写
  dot?: boolean // Default: false 是否匹配 '.' 开头的文件或目录
  extglob?: boolean // Default: true 
  globstar?: boolean // Default: true 在匹配目录的情况下, '**' 是否匹配输出中间路径
  baseNameMatch?: boolean // Default: false 深层级的文件在'*'的情况下是否要被匹配
}
```
