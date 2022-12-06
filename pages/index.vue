<script setup lang="ts">
import type { TableHead } from '~/types'
import { pkgData } from '~/store'

const appConfig = useAppConfig()

const tableHead: TableHead = ['date', 'name', 'version', 'description', 'hasNote']
const tableData = pkgData

const noteName = ref('')
const noteSource = ref('点击 hasNote 列进行选择展示')

const handleShowNote = (name: string) => {
  console.warn('handleShowNote: ', name)
  noteName.value = name
  const md = import(`~/store/notes/${name}.md?raw`)
  md.then((res) => {
    noteSource.value = res.default
  }).catch((e) => {
    console.error(e)
  })
}
</script>

<template>
  <div id="pages-index">
    <header class="daily-css-header">
      <h2>{{ appConfig.title }}</h2>
      <p>{{ appConfig.subTitle }}</p>
    </header>

    <section class="daily-css-table" overflow-y-scroll>
      <BaseTable
        :table-head="tableHead"
        :table-data="tableData"
        @showNote="handleShowNote"
      />
    </section>

    <section class="daily-css-note">
      <h2 v-if="noteName" text-center>
        {{ noteName }}
      </h2>
      <BaseNote
        :source="noteSource"
      />
    </section>
  </div>
</template>

<style lang="postcss">
#pages-index {
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: auto 1fr;
  grid-template-areas:  'head head'
                        'table usage';
  gap: 30px;

  .daily-css-header {
    grid-area: head;
  }
  .daily-css-table {
    grid-area: table;
  }
  .daily-css-note {
    grid-area: usage;
    h2 {
      margin-top: 0;
    }
  }
}
</style>
