<template>
  <div class="container breadcrumb">
    <BreadcrumbItem v-for="(item, index) in items" :key="index" :item="item"/>
  </div>
</template>

<script>
import BreadcrumbItem from './BreadcrumbItem.vue';
export default {
  name: "Breadcrumb",
  components: { BreadcrumbItem },
  data() {
    return {
      items: [],
    };
  },
  watch: {
    '$route' () {
      this.items = this.$route.meta.breadcrumb;
    }
  }
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: flex;
  align-items: center;
}
</style>
