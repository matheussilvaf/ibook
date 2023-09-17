<template>
  <BookDetailsTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '~/store'

export default Vue.extend({
  async asyncData({ route }) {
    await books.fetchSingleBook(route.params.bookslug)
  }
})
</script>

<style lang="scss" scoped></style>
