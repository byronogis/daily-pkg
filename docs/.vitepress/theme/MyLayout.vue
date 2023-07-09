<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

const { Layout } = DefaultTheme

const {frontmatter} = useData()
const getPkgUrl = (name) => `https://www.npmjs.com/package/${name}`
</script>

<template>
  <Layout>
    <template #doc-before>
      <div class="vp-doc">
        <h1 class="inline">{{ frontmatter.title }}</h1>
        <span v-if="frontmatter.version" class="m-2 text-16px">v{{ frontmatter.version }}</span>
        <span v-if="frontmatter.tags?.includes('npm')"><a :href="getPkgUrl(frontmatter.title)" target="_blank">在 npm 上查看</a></span>
        <blockquote v-if="frontmatter.description">{{ frontmatter.description }}</blockquote>
      </div>

    </template>
  </Layout>
</template>
