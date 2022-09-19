const dpData = [
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

/**
 * Add data to a table
 * @param {{ data, name, version, description, use_related, peculiarity, tags, }[]} dataSet 
 * @param {string} selector
 */
function updTbody(dataSet, selector = 'tbody') {
  const tbody = document.querySelector(`${selector}`)

  const dataFragment = document.createDocumentFragment()
  
  dataSet.forEach(data => {
    const tr = document.createElement('tr')
    
    Object.keys(data).forEach(key => {
      const td = document.createElement('td')
      const content = data[key] || '/'
      if (key === 'name') {
        td.innerHTML = `<a href="https://www.npmjs.com/package/${content}">${content}</a>`
      } else [
        td.textContent = content
      ]
      tr.appendChild(td)
    })
  
    dataFragment.appendChild(tr)
  })
  
  tbody.appendChild(dataFragment)

}

updTbody(dpData, '.dp-tbody')
