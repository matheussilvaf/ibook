<template>
  <h1>
    {{ text }} <span>{{ span }}</span>
  </h1>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    span: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 500;
  @include screen('small') {
    grid-template-columns: 1fr;
    font-size: 1.8rem;
  }
  @include screen('medium') {
    grid-template-columns: 1fr;
    font-size: 1.8rem;
  }
  span {
    font-weight: 700;
    color: $dark;
  }
}
</style>
