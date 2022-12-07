<script setup lang="ts">
const props = defineProps<{
  name: string
}>()

const dev = ref()

const icon = import(`~/assets/icons/${props.name}.svg?raw`)
icon.then((res) => {
  nextTick(() => {
    dev.value.innerHTML = res.default
  })
}).catch((e) => {
  console.error(e)
})
</script>

<template>
  <div id="components-base-icon" ref="dev" />
</template>
