<script setup lang="ts">
import type { TableData, TableHead } from '~/types'

const props = defineProps<{
  tableHead: TableHead
  tableData: TableData[]
}>()

const emits = defineEmits(['showNote'])

const showNote = (name: string) => {
  emits('showNote', name)
}
</script>

<template>
  <table relative>
    <thead sticky top-0 left-0 right-0 m-auto h-8 bg-white>
      <tr>
        <th v-for="field in props.tableHead" :key="field" px-2>
          {{ field }}
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td v-for="num in props.tableHead.length" :key="num">
          ...
        </td>
      </tr>
      <tr v-for="pkg in props.tableData" :key="pkg.date">
        <td v-for="key in props.tableHead" :key="key" px-2>
          <template v-if="key === 'name'">
            <a :href="`https://www.npmjs.com/package/${pkg[key]}`" target="_blank">{{ pkg[key] }}</a>
          </template>
          <template v-else-if="key === 'hasNote'">
            <template v-if="pkg[key]">
              <a href="javascript:;" @click="showNote(pkg.name)">显示</a>
            </template>
            <template v-else>
              无
            </template>
          </template>
          <template v-else>
            {{ pkg[key] }}
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style type="postcss" scoped>
table,
table tr th,
table tr td {
  border: 1px solid #000;
}
table {
  width: 100%;
  line-height: 25px;
  text-align: center;
  border-collapse: collapse;
}
</style>
