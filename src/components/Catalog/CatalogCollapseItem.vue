<template>
  <div class="sidebar__variants-item">
    <div class="sidebar__variants-item-icon">
      <span class="icon-checkbox-fill px20"></span>
      <input
        @input="(event) => $emit('update:checked', event.target.checked)"
        :checked="checked"
        type="checkbox"
        :id="item.name"
      />
      <label :for="item.name" class="sidebar__variants-item-text">{{
        item.name
      }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    checked: {
      type: Boolean,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
