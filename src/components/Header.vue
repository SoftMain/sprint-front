<template>
  <header>
    <div class="container">
      <nav class="nav">
        <div class="nav__wrapper">
          <router-link to="/" class="nav__wrapper-logo">
            <span class="icon-logo32 px32"></span>
            <h3>SoftMain</h3>
          </router-link>

          <div class="nav__wrapper-categories proto__elem">
            <a class="btn btn-primary">Категории
              <span class="icon-caret-down px20"></span>
            </a>
          </div>
        </div>
        <div class="nav__search proto__elem">
            <input class="search-area" type="search" placeholder="Поиск по сайту" required-placeholder="">
          <span class="icon-search px20 search-img"></span>
        </div>
        <div class="nav__links">
          <router-link to="/integrators" class="btn text-base font-regular">Интеграторы</router-link>
          <router-link to="/contact" class="btn text-base font-regular">Компаниям</router-link>
          <router-link to="/about" class="btn text-base font-regular">О нас</router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>

</script>

<style lang="scss" scoped>

</style>