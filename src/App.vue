<template>
  <Header />
  <Breadcrumbs />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Breadcrumbs from './components/Breadcrumb/Breadсrumb.vue';
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs
  },
  data() {
    return {
      bodyStyle:""
    };
  },
  watch: {
    $route() {
      document.body.className=this.$route.meta.bodyClass;
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/style.scss';
</style>
