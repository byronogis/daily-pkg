import type { TableData } from '~/types'

const pkgData: TableData[] = [
  {
    date: '2022-10-20',
    name: 'marked',
    version: '4.1.1',
    description: '将 md 解析为 html',
    hasNote: true,
  },
  {
    date: '2022-10-18',
    name: 'normalize.css',
    version: '8.0.1',
    description: 'css 样式初始化',
    use_related: '',
    peculiarity: '',
    tags: '',
    hasNote: true,
  },
  {
    date: '2022-09-19',
    name: 'vuex-persistedstate',
    version: '4.1.0',
    description: 'vuex数据持久化',
    use_related: '',
    peculiarity: '不再维护',
    tags: '',
  },
  {
    date: '2022-09-04',
    name: 'randomcolor',
    version: '0.6.2',
    description: '随即生成柔和的颜色',
    use_related: '可控制色调',
    peculiarity: '',
    tags: '',
  },
  {
    date: '2022-09-03',
    name: 'ip',
    version: '1.1.8',
    description: 'node 下的 ip 地址工具',
    use_related: '本地 ip 相关',
    peculiarity: '',
    tags: '',
  },
  {
    date: '2022-09-02',
    name: 'chalk',
    version: '5.0.1',
    description: '终端打印输出样式',
    use_related: 'v5为纯粹的ESM，欠佳可考虑v4',
    peculiarity: '',
    tags: '',
  },
  {
    date: '2022-09-01',
    name: 'nprogress',
    version: '0.2.0',
    description: '关联ajax的进度条展示',
    use_related: '可调整运动曲线/挂载位置等',
    peculiarity: '',
    tags: '',
  },
]

export {
  pkgData,
}
