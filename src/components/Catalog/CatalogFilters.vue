<template>
  <!-- <CatalogFilter v-for="(filterName, index) in filterNames" :filter="filterName" /> -->
  <CatalogFilter />
</template>

<script>
import CatalogFilter from "./CatFilters.vue";

export default {
  data() {
    return {
      filterNames: [],
      filterSearches: [],
    };
  },
  async mounted() {
    this.filterNames = [
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
