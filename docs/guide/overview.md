---
title: 总览
---


<script setup>
import { withBase } from 'vitepress'

const docs = import.meta.glob('../package/**/*.md', { eager: true })
const pkgs = Object.values(docs).map(({ __pageData: { frontmatter, relativePath, } }) => {
  return {
    ...frontmatter,
    relativePath: withBase(relativePath.replace(
      /\.md$/,
      '.html'
    )),
  }
})
</script>


<table>
  <thead>
    <tr><th v-for="head in ['名字', '版本', '描述', '标签', '查看记录']" :key="head">{{ head }}</th></tr>
  </thead>

  <tbody>
    <tr v-for="pkg in pkgs" :key="pkg.relativePath">
      <td>{{ pkg.title }}</td>
      <td>{{ pkg.version }}</td>
      <td>{{ pkg.description }}</td>
      <td>{{ pkg.tags?.filter(tag => (!['npm'].includes(tag))).join(',') ?? '' }}</td>
      <td><a :href="pkg.relativePath">跳转</a></td>
    </tr>
  </tbody>
</table>

