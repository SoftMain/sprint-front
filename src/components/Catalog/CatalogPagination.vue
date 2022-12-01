<template>
  <div class="pagination">
    <a class="btn" @click="switchPage('start')"><span class="icon-chevron-double-left px14"></span></a>
    <a class="btn" @click="switchPage('down')"><span class="icon-chevron-l px14"></span></a>

    <a
      v-for="(_, index) in totalPages"
      @click="switchPage('num', index)"
      class="btn"
      :class="{ 'btn-primary': page == index + 1 }"
      >{{ index + 1 }}</a
    >

    <a class="btn" @click="switchPage('up')"><span class="icon-chevron-r px14"></span></a>
    <a class="btn" @click="switchPage('end')"><span class="icon-chevron-double-right px14"></span></a>
  </div>
</template>

<script>
export default {
  props: ["totalPages", "page"],
  data() {
    return {};
  },
  methods: {
    switchPage(state, index) {
      let pageNumber = this.page;
      switch (state) {
        case 'start':
          pageNumber = 1;
          break;
        case 'end':
          pageNumber = this.totalPages;
          break;
        case 'up':
          if (this.page >= this.totalPages) {
            pageNumber = this.totalPages;
          } else {
            pageNumber = this.page + 1;
          } 
          break;
        case 'down':
        if (this.page <= 1) {
            pageNumber = 1;
          } else {
            pageNumber = this.page - 1;
          } 
          break;
        case 'num':
          pageNumber = index + 1;
          break;
      }
      this.$emit("change-page", pageNumber);
    },
  },
};
</script>

<style lang="scss" scoped></style>
