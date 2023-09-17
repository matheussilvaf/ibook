<template>
  <div class="book-cover">
    <img :src="book.cover" :alt="`Capa do livro ${book.title}`" />
    <NuxtLink class="btn-read-book" to="/1/read">Ler livro</NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    book: {
      type: Object,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.book-cover {
  img {
    width: 100%;
  }
  .btn-read-book {
    background: #292929;
    color: #f7f7f7;
    text-transform: uppercase;
    font-weight: 700;
    width: 100%;
    height: 42px;
    font-size: 1.1rem;
    display: grid;
    justify-content: center;
    align-items: center;
    transition: all 300ms ease;
    &:hover {
      opacity: 0.89;
    }
  }
}
</style>
