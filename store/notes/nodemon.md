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

#### scripts


```json
// ~/package.json
{
  "scripts": {
    "dev": "nodemon"
  }
}
```

