<template>
  <header
    :class="isTop && this.$route.name == 'main' ? 'header_transparent' : ''"
  >
    <div class="container">
      <nav class="nav">
        <div class="nav__wrapper">
          <router-link
            to="/"
            class="nav__wrapper-logo"
            :class="
              isTop && this.$route.name == 'main' ? 'header_logo_color' : ''
            "
          >
            <span class="icon-logo32 px32"></span>
            <h3 class="font-medium">SoftMain</h3>
          </router-link>

          <div @click.self="outside" class="">
            <button
              @click="isOpen = !isOpen"
              v-click-outside="disableMenu"
              class="btn btn-primary btnb2"
              :class="
                isTop && this.$route.name == 'main' ? 'btnb2_transparent' : 'btnb4'
              "
            >
              Категории
              <span class="icon-caret-down px20"></span>
            </button>
            <BtnCategory v-if="isOpen"/>
          </div>
        </div>
        <Search/>
        <div class="nav__links">
          <router-link
            to="/integrators"
            class="btn text-base font-regular btnc2" :class="
                this.$route.name == 'integrators' ? 'zohan_1' : ''
              "
            >Интеграторы</router-link
          >
          <router-link to="/contact" class="btn text-base font-regular btnc2" :class="
                this.$route.name == 'contact' ? 'zohan_1' : ''
              "
            >Компаниям</router-link
          >
          <router-link to="/about" class="btn text-base font-regular btnc2" :class="
                this.$route.name == 'about' ? 'zohan_1' : ''
              "
            >О нас</router-link
          >
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import BtnCategory from "./HeaderCategoryDropdown.vue";
import Search from "./Search/Search.vue";

export default {
  components: {
    BtnCategory,
    Search,
  },
  data() {
    return {
      isOpen: false,
      isTop: true,
    };
  },
  methods: {
    handleScroll(event) {
      // this.isUserScrolling = window.scrollY > 0;
      if (window.scrollY >= 100) {
        this.isTop = false;
        return;
      }
      this.isTop = true;
    },
    disableMenu() {
      if (this.isOpen) this.isOpen = false;
    }
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
