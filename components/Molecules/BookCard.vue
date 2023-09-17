<template>
  <NuxtLink :to="`/${book.id}`">
    <div class="card">
      <div class="card-img">
        <img :src="book.cover" :alt="`Capa do livro ${book.title}`" />
      </div>
      <div class="card-body">
        <h4>{{ book.title }}</h4>
        <p>{{ book.author }}</p>
      </div>
    </div>
  </NuxtLink>
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
a {
  color: inherit;
}
.card {
  display: grid;
  grid-gap: 1.5rem;
  .card-img {
    display: grid;
    box-shadow: 0px 4px 11px 4px rgba(0, 0, 0, 0.13);
    transition: all 300ms ease;
    img {
      width: 100%;
    }
    &:hover {
      transform: scale(1.1);
      box-shadow: 0px 4px 17px 4px rgba(0, 0, 0, 0.11);
    }
  }
  .card-body {
    h4 {
      font-size: 0.875rem;
      font-weight: 400;
    }
    p {
      font-size: 13px;
      color: $gray;
    }
  }
}
</style>
