<template>
  <header>
    <nav>
      <ul class="nav-items">
        <li>
          <div class="logo">
            <img src="~/assets/img/Logo.svg" alt="" />
          </div>
        </li>
        <li class="nav-item">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/about">Sobre</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  display: grid;
  justify-content: center;
}
nav {
  box-shadow: -1px 8px 26px 5px rgba(0, 0, 0, 0.12);
  background: $dark;
  width: 308px;
  height: 50px;
  padding: 0 10px;
  border-radius: 35px;
  align-items: center;

  .nav-items {
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-items: center;
    justify-content: space-around;
    height: 100%;
  }
  .nav-item a {
    color: $lightgray;
    position: relative;
    font-weight: 500;
  }
}
</style>
