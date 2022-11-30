<template>
  <Header />
  <Breadcrumbs />
  <router-view></router-view>
  <Footer />
</template>

<script setup>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import Breadcrumbs from './components/Breadcrumb/Breadсrumb.vue';
</script>

<style lang="scss">
@import './assets/scss/style.scss';
</style>
