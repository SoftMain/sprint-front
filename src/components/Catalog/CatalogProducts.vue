<template>
  <div class="products">
    <CatalogProduct v-for="(product, index) in products" :product="product" />
  </div>
  <CatalogPagination
    :totalPages="totalPages"
    :page="page"
    @change-page="changePage"
  />
</template>

<script>
import CatalogProduct from "./CatalogProduct.vue";
import CatalogPagination from "./CatalogPagination.vue";

export default {
  components: { CatalogProduct, CatalogPagination },
  props: {
    filterSelect: Object,
  },
  data() {
    return {
      products: [],
      page: 1,
      limit: 10,
      totalPages: 0,
    };
  },
  methods: {
    async getProducts() {
      const resp = await this.$axios.get("/products/filtered", {
        params: {
          _selected: {
            analogs: this.filterSelect.analogs,
            languages: this.filterSelect.languages,
            platforms: this.filterSelect.platforms,
            certificates: this.filterSelect.certificates,
          },
          _page: Number(this.page),
          _limit: Number(this.limit),
        },
      });
      this.products = resp.data.rows;
      this.totalPages = Math.ceil(resp.data.count / this.limit);
    },
    changePage(page) {
      this.page = page;
      this.getProducts();
    },
  },
  async mounted() {
    this.getProducts();
  },
  watch: {
    filterSelect: {
      handler(newValue, oldValue) {
        this.getProducts();
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
