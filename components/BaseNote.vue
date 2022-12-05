<script setup lang="ts">
import { marked } from 'marked'

const props = defineProps<{
  source: string
}>()
</script>

<template>
  <div id="components-base-note" v-html="marked.parse(props.source)" />
</template>
