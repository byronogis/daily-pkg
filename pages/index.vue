<script setup lang="ts">
import type { TableHead } from '~/types'
import { pkgData } from '~/store'

const appConfig = useAppConfig()

const tableHead: TableHead = ['date', 'name', 'version', 'description', 'hasNote']
const tableData = pkgData

const {
  noteName,
  noteSource,
  handleNote: handleShowNote,
} = useNote()
</script>

<template>
  <div id="pages-index" box-border p-8 h-100vh>
    <header class="daily-css-header">
      <h2>{{ appConfig.title }}</h2>
      <p>{{ appConfig.subTitle }}</p>
    </header>

    <section class="daily-css-table" overflow-auto>
      <BaseTable
        :table-head="tableHead"
        :table-data="tableData"
        @showNote="handleShowNote"
      />
    </section>

    <section class="daily-css-note" overflow-auto px-8>
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
  grid-template-columns: repeat(2, 50%);
  grid-template-areas:  'head head'
                        'table usage';
  /* gap: 30px; */ /* 列2个50% 会造成溢出 */

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
