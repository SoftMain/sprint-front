<template>
  <div>
    <div class="info__star-rating">
      <span class="icon-star-filled px20" v-for="idx in completeRange" :key="idx + 'st'"></span>
      <span class="icon-star px20"  v-for="idx in totalRange" :key="idx"></span>
      <p class="text-sm">({{ reviewsCount }})</p>
    </div>
  </div>
</template>

<script>
const range = (start, end, length = end - start) =>
  Array.from({ length }, (_, i) => start + i)

export default {
  props: {
    value: Number,
    total: Number,
    reviewsCount: Number,
  },
  data() {
    return {
      completeRange: range(0, this.value),
      totalRange: range(0, this.total - this.value)
    };
  },
  mounted() {
    if (this.value > this.total) {
      console.log('total lower than value')
    }
  }
};
</script>

<style lang="scss" scoped>

.info__star-rating {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    width: 137px;
    height: 20px;
}
.star-filled {
    display: inline-flex;
}
</style>
