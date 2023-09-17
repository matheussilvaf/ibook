<template>
  <div class="book-info">
    <h2 class="book-title">{{ book.title }}</h2>
    <div v-html="book.description" class="book-description"></div>
    <div class="book-categories">
      <div class="categories-list">
        <Chip
          v-for="category in book.categories"
          :text="category.name"
          :key="category.id"
        />
      </div>
    </div>
    <div class="book-release-details">
      <ul>
        <li>
          <p>Lançamento</p>
          <p>{{ book.releaseDate }}</p>
        </li>
        <li>
          <p>Autor</p>
          <p>{{ book.author }}</p>
        </li>
      </ul>
    </div>
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
.book-info {
  .book-title {
    margin-bottom: 2rem;
  }

  .book-description {
    line-height: 1.625rem;
  }

  .book-categories {
    margin-top: 2rem;
  }

  .book-release-details {
    margin-top: 1rem;
    ul {
      display: grid;
      grid-gap: 0.65rem;
      li {
        display: grid;
        grid-template-columns: 160px 1fr;
        font-weight: 700;
        font-size: 13px;
      }
    }
  }
}
</style>
