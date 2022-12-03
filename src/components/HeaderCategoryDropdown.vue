<template>
  <div class="header_btn_categories">
    <div class="btn_category_list">
      <div
        class="btn_category_item"
        v-for="(category, index) in categories"
        :key="index">

        <span :class="'icon-' + category.icon + ' px20 categ-icon'"></span>
        {{ category.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTop: true,
      categories: [],
  };
},
  methods: {
    async getCategories () {
      const resp = await this.$axios.get(`${import.meta.env.VITE_SITE_URL}/categories`);
      console.log(resp);
      this.categories = resp.data
    }
  },
  async mounted() {
    this.getCategories();
  }
};

</script>


<style lang="scss" scoped></style>
