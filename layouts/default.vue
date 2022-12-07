<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div data-layout="default" p-8>
    <GithubCorner :repo="appConfig.repo" />
    <slot />
  </div>
</template>
