<template>
  <div class="container catalog-container">
    <section>
      <CatalogSidebar @filter-change="filterChange" :selected="selected"/>
    </section>

    <section>
      <div class="catalog">
        <div class="sort-button">
          <a class="btn btn-primary btn-sm"
            >Высокий рейтинг<span class="icon-caret-down px20"></span
          ></a>
        </div>
        <CatalogProducts :filterSelect="selected" />
      </div>
    </section>
  </div>
</template>

<script>
import CatalogProducts from "../components/Catalog/CatalogProducts.vue";
import CatalogSidebar from "../components/Catalog/CatalogSidebar.vue";
export default {
  components: { CatalogProducts, CatalogSidebar },
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

<style></style>
