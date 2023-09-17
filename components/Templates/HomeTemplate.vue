<template>
  <Container class="home-template">
    <MainTitle text="Bem-vindo ao" span="IBook" />
    <Releases />
  </Container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.home-template {
  margin-top: 6.75rem !important;
  padding-bottom: 6.75rem;
  display: grid;
  grid-gap: 4rem;
}
</style>
