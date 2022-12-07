<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div data-layout="default">
    <GithubCorner :repo="appConfig.repo" />
    <slot />
  </div>
</template>
