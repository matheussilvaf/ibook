<template>
  <div class="default-layout">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style>
.default-layout {
  margin-top: 4.313rem;
}
a.nuxt-link-exact-active:after {
  content: '';
  position: absolute;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: 100%;
  height: 4px;
  background: white;
  left: 0;
  bottom: -15px;
  animation: fade 300ms ease;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
