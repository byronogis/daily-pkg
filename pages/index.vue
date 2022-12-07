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

const isLargeScreen = useMediaQuery('(min-width: 750px)')

const gridTemplateAreas = computed(() => {
  return `\'head head\' \'table ${isLargeScreen.value ? 'usage' : 'table'}\'`
})

const styleDailyCCssNote = computed<any>(() => {
  const smallStyle = {
    position: 'fixed',
    inset: 0,
    top: '30%',
    backgroundColor: '#fff',
    boxShadow: '0 -2px 20px #333',
    display: noteName.value ? 'block' : 'none',

  }
  return isLargeScreen.value ? {} : smallStyle
})
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

    <section
      class="daily-css-note"
      relative
      overflow-auto px-8
      :style="styleDailyCCssNote"
    >
      <template v-if="noteName">
        <BaseIcon
          absolute top-0 right-0
          cursor-pointer
          name="close"
          @click="handleShowNote('')"
        />
        <h2 text-center>
          {{ noteName }}
        </h2>
        <BaseNote
          :source="noteSource"
        />
      </template>
      <template v-else>
        点击 hasNote 列进行选择展示
      </template>
    </section>
  </div>
</template>

<style lang="postcss">
#pages-index {
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: repeat(2, 50%);
  grid-template-areas:  v-bind(gridTemplateAreas);
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
