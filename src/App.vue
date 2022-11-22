<template>
  <Header />
  <Main />
  <Category />
  <Banner />
  <Self_promotion />
  <Footer />
</template>

<script setup>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import Main from './components/Main.vue';
  import Category from './components/Category.vue';
  import Banner from './components/Banner.vue'
  import Self_promotion from './components/Self_promotion.vue';
</script>

<style lang="scss">
@import './assets/scss/style.scss';
</style>
