<template>
  <div class="container catalog-container">
    <section>
      <CatalogSidebar @filter-change="filterChange" :selected="selected" />
    </section>

    <section>
      <div class="catalog">
        <CatalogSortBtn></CatalogSortBtn>
        <CatalogProducts :filterSelect="selected" />
      </div>
    </section>
  </div>
</template>

<script>
import CatalogProducts from "../components/Catalog/CatalogProducts.vue";
import CatalogSidebar from "../components/Catalog/CatalogSidebar.vue";
import CatalogSortBtn from "../components/Catalog/CatalogSortBtn.vue";
export default {
  components: { CatalogProducts, CatalogSidebar, CatalogSortBtn },
  data() {
    return {
      selected: {
        analogs: [],
        languages: [],
        platforms: [],
        certificates: [],
      },
    };
  },
  methods: {
    filterChange() {
      console.log("change filter", this.selected);
    },
  },
};
</script>

<style>

</style>
