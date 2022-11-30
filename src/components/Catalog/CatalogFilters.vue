<template>
  <CatalogFilter v-for="(filter, index) in filters" :filter="filter" />
</template>

<script>
import CatalogFilter from "./CatalogFilter.vue";

export default {
  data() {
    return {
      filters: [],
    };
  },
  async mounted() {
    this.filters = ["Платформа", "Сертификация", "Язык интерфейса", "Аналоги"];
    console.log(this.filters);
  },
  components: { CatalogFilter },
};
</script>

<style lang="scss" scoped>

</style>