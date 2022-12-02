<template>
  <div v-if="this.$route.name != 'main'" class="container">
    <div class="breadcrumb">
      <BreadcrumbItem
        v-for="(item, index) in items"
        :key="index"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import BreadcrumbItem from "./BreadcrumbItem.vue";
export default {
  name: "Breadcrumb",
  components: { BreadcrumbItem },
  data() {
    return {
      items: [],
    };
  },
  watch: {
    $route() {
      this.items = this.$route.meta.breadcrumb;
    },
  },
};
</script>

<style lang="scss" scoped></style>
