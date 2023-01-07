<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { computed } from 'vue'

const { Layout } = DefaultTheme

const frontmatter = useData().frontmatter
console.log(useData())
const pkgUrl = computed(() => `https://www.npmjs.com/package/${frontmatter.value.title}`)
</script>

<template>
  <Layout>
    <template #doc-before>
      <div class="vp-doc">
        <h1>
          {{ frontmatter.title }}
        </h1>
        <blockquote>{{ frontmatter.description }}</blockquote>
        <blockquote v-if="frontmatter.tags?.includes('npm')"><a :href="pkgUrl" target="_blank">在 npm 上查看</a></blockquote>
      </div>

    </template>
  </Layout>
</template>
