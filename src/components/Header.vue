<template>
  <header :class="isTop && this.$route.name == 'main' ? 'header_transparent' : ''">
    <div class="container">
      <nav class="nav">
        <div class="nav__wrapper">
          <router-link to="/" class="nav__wrapper-logo" :class="isTop && this.$route.name == 'main' ? 'header_logo_color' : ''">
            <span class="icon-logo32 px32"></span>
            <h3 class="font-medium">SoftMain</h3>
          </router-link>

          <div @click.self="outside" class="">
            <button  @click="isOpen = !isOpen" class="btn btn-primary btnb2" :class="isTop && this.$route.name == 'main' ? 'btnb2_transparent' : ''"
              >Категории
              <span class="icon-caret-down px20"></span>   
          </button>
          <BtnCategory v-if="isOpen"/>
          </div>
        </div>
        <div class="nav__search proto__elem">       
            <input
              class="search-area text-base font-regular"
              type="search"
              placeholder="Поиск по сайту"
              required-placeholder=""
            />
          <span class="icon-search px20 search-img"></span>
        </div>
        <div class="nav__links">
          <router-link to="/integrators" class="btn text-base font-regular btnc2"
            >Интеграторы</router-link
          >
          <router-link to="/contact" class="btn text-base font-regular btnc2"
            >Компаниям</router-link
          >
          <router-link to="/about" class="btn text-base font-regular btnc2"
            >О нас</router-link
          >
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import BtnCategory from "./BtnCategory.vue";

export default {
  components: {
  BtnCategory
},
  data() {
    return {
      isOpen: false,
      isTop: true,
    };
  },
  methods: {
    handleScroll(event) {
      this.isUserScrolling = window.scrollY > 0;
      if (window.scrollY >= 100) {
        this.isTop = false;
        return;
      }
      this.isTop = true;
    },
  },
  mounted() {
    this.handleDebouncedScroll = setTimeout.bind(null, this.handleScroll, 100);
    window.addEventListener("scroll", this.handleDebouncedScroll, {
      passive: true,
    });
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleDebouncedScroll);
  },
};
</script>

<style lang="scss" scoped></style>
