<template>
  <HomeTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '~/store'

export default Vue.extend({
  async asyncData() {
    await books.fetchBooks()
  }
})
</script>

<style></style>
