<template>
  <div class="sidebar">
    <div class="sidebar__categories">
      <div class="sidebar__categories-header">
        <h6 class="font-regular">Категория</h6>
      </div>
      <div class="sidebar__categories-catalog">
        <div class="sidebar__categories-catalog-main">
          <span class="icon-chevron-l px20"></span>
          <p class="font-regular text-base">Антивирусы и безопасность</p>
        </div>
        <div class="sidebar__categories-catalog-sub">
          <a class="btn btn-primary btn-sm font-regular text-base"
            >Антивирусы для дома</a
          >
        </div>
      </div>
    </div>
    <div class="sidebar__filters">
      <CatalogFilters @filter-change="filterChange" :selected="selected" />
      <div class="sidebar__filters-actions">
        <a class="btn btn-primary" @click="filterChange">Применить</a>
        <a class="btn btn-outline-primary" @click="filterClear">Сбросить</a>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogFilters from "./CatalogFilters.vue";

export default {
  components: { CatalogFilters },
  props: {
    selected: Object,
  },
  data() {
    return {};
  },
  methods: {
    filterChange() {
      this.$emit("filter-change");
    },
    filterClear() {
      this.selected.analogs = [];
      this.selected.languages = [];
      this.selected.platforms = [];
      this.selected.certificates = [];
    },
  },
};
</script>

<style lang="scss" scoped></style>
