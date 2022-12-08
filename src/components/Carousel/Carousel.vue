<template>
  <div class="shuffle__image">
    <CarouselSlide
      v-for="(slide, index) in slides"
      :key="slide"
      :index="index"
      :visibleSlide="visibleSlide"
      :direction="direction"
    >
      <div :class="slide"></div>
    </CarouselSlide>
  </div>
</template>

<script>
import CarouselSlide from "../Carousel/CarouselSlide.vue";

export default {
  props: ["slidesIn"],
  components: { CarouselSlide },
  data() {
    return {
      directions: ["left", "right", "top", "down"],
      slides: [],
      visibleSlide: 0,
      direction: 'left',
      focus:true
    }
  },
  methods: {
    slide() {
      this.focus=document.hasFocus();
      if(this.focus==true){
          this.direction = this.directions[Math.floor(Math.random()*this.directions.length)];
        if (this.visibleSlide == 8) {
          this.visibleSlide = 0;
          return;
        }
        this.visibleSlide++;
      }
    },
  },
  mounted() {
    this.slides = this.slidesIn.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
    let interval = (Math.floor(Math.random() * 10) + 3) * 1000;
    setInterval(() => this.slide(), interval);
  },
};
</script>

<style lang="scss" scoped></style>
