<template>
  <div class="filter">
    <div @click="show = !show" class="sidebar__collapse btn">
      <div :class="{ 'sidebar__collapse-icon unrotated': show, 'sidebar__collapse-icon rotated': !show }">
        <span class="icon-caret-down px20"></span>
      </div>
      <div class="sidebar__collapse-header">
        <h6 class="font-regular">{{ filter.name }}</h6>
      </div>
    </div>
    <Transition name="slide-fade">
      <div v-if="show" class="sidebar__variants">
        <CatalogCollapseItem v-for="(item, index) in items" :item="item" />
      </div>
    </Transition>
  </div>
</template>

<script>
import CatalogCollapseItem from "./CatalogCollapseItem.vue";

export default {
  components: { CatalogCollapseItem },
  props: ["filter"],
  data() {
    return {
      show: false,
      items: [],
      filterActive: {
        name: '',
        values: []
      }
    };
  },
  async mounted() {
    const resp = await this.$axios.get(`${import.meta.env.VITE_SITE_URL}/${this.filter.label}`);
    this.items = resp.data;
    this.filterActive.name = this.filter.label;
  },
  components: { CatalogCollapseItem },
};
</script>

<style lang="scss" scoped></style>
