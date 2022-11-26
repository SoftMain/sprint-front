<template>
  <ul class="blockcategory-navmenu-navigation">
    <li
      v-for="chapter in chapters"
      :key="chapter.id"
      @click="chapterChange(chapter.id)"
      :class="{ active: chapter.id == activeCategory }"
    >
      <span :class="chapter.icon + ' px20'"></span>
      <h6 class="font-regular">{{ chapter.text }}</h6>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    chapters: {
      type: Array,
      required: true,
    },
  },
  emits: ["cur"],
  data() {
    return {
      activeCategory: 1,
    };
  },
  methods: {
    filter() {
      this.isActive = !this.isActive;
    },
    chapterChange(id) {
      this.$emit("cur", id);
      this.activeCategory = id;
    },
  },
};
</script>

<style lang="scss" scoped></style>
