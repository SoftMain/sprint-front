<template>
  <div class="products">
    <CatalogProduct v-for="(product, index) in products" :product="product"/>
  </div>
</template>

<script>
import CatalogProduct from "./CatalogProduct.vue";

export default {
  components: { CatalogProduct },
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    const resp = await this.$axios.get("http://localhost:5000/products");
    this.products = resp.data;
    console.log(this.products);
  },
  components: { CatalogProduct },
};
</script>

<style lang="scss" scoped></style>
