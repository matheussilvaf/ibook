<template>
  <div class="book-details">
    <BookCover :book="$singleBook" />
    <BookInfo :book="$singleBook" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '~/store'

export default Vue.extend({
  head() {
    return {
      title: 'Book title',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Book description'
        }
      ]
    }
  },
  computed: {
    $singleBook() {
      return books.$singleBook
    }
  }
})
</script>

<style lang="scss" scoped>
.book-details {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-gap: 1.4rem;
  @include screen('small') {
    grid-template-columns: 1fr;
  }
  @include screen('medium') {
    grid-template-columns: 1fr;
  }
}
</style>
