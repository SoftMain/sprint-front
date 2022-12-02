<template>
  <div class="container catalog-container">
    <section>
      <CatalogSidebar />
    </section>

    <section>
      <div class="catalog">
        <div class="sort-button">
          <a class="btn btn-primary btn-sm" v-click-outside="changeS" v-color="red">Высокий рейтинг<span class="icon-caret-down px20"></span></a>
        </div>

        <CatalogProducts />
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
      show: true,
      red: '#000'
    }
  },
  methods: {
    changeS() {

      this.show = !this.show; 
    }
  }
};
</script>

<style lang="sass" scoped></style>
