<template>
  <ul class="blockcategory-navmenu-navigation">
    <li v-for="page in pages" :key="page.id">
      <span :class="page.icon + ' px20'"></span>
      <button
        @click="testClick(page.id)"
        :class="{ active: page.id == activeCategory }"
      >
        <h6>{{ page.text }}</h6>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    pages: {
      type: Array,
      required: true,
    },
  },
  emits: ["cur"],
  data() {
    return {
      activeCategory: 1
    };
  },
  methods: {
    filter() {
      this.isActive = !this.isActive;
    },
    testClick(id) {
      this.$emit('cur', id)
      this.activeCategory = id;
    }
  },
};
</script>

<style lang="scss" scoped></style>
