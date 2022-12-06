<script setup lang="ts">
import { marked } from 'marked'
import 'github-markdown-css'

const props = defineProps<{
  source: string
}>()
</script>

<template>
  <div
    id="components-base-note"
    class="markdown-body"
    v-html="marked.parse(props.source)"
  />
</template>
