<template>
  <div class="container catalog-container">
    <section>
      <CatalogSidebar />
    </section>

    <section>
      <div class="catalog">
        <div class="sort-button">
          <a class="btn btn-primary btn-sm"
            >Высокий рейтинг<span class="icon-caret-down px20"></span
          ></a>
        </div>

        <CatalogProducts />

        <div class="pagination">
          <a class="btn">
            <span class="icon-chevron-double-left px14"></span>
          </a>
          <a class="btn">
            <span class="icon-chevron-l px14"></span>
          </a>
          <a class="btn btn-primary">1</a>
          <a class="btn">2</a>
          <a class="btn">3</a>
          <a class="btn">4</a>
          <a class="btn">5</a>
          <a class="btn">
            <span class="icon-chevron-r px14"></span>
          </a>
          <a class="btn">
            <span class="icon-chevron-double-right px14"></span>
          </a>
        </div>
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
    };
  },
};
</script>

<style lang="sass" scoped></style>
