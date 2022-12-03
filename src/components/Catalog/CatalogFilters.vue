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
    this.filters = [
      {
        name: "Платформа",
        label: "platforms",
      },
      {
        name: "Сертификация",
        label: "certificates",
      },
      {
        name: "Язык интерфейса",
        label: "languages",
      },
      {
        name: "Аналоги",
        label: "analogs",
      },
    ];
  },
  components: { CatalogFilter },
};
</script>

<style lang="scss" scoped></style>
