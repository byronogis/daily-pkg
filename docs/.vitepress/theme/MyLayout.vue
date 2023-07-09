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
        <h1>
          {{ frontmatter.title }}
        </h1>
        <blockquote v-if="frontmatter.version">v{{ frontmatter.version }}</blockquote>
        <blockquote v-if="frontmatter.description">{{ frontmatter.description }}</blockquote>
        <blockquote v-if="frontmatter.tags?.includes('npm')"><a :href="getPkgUrl(frontmatter.title)" target="_blank">在 npm 上查看</a></blockquote>
      </div>

    </template>
  </Layout>
</template>
