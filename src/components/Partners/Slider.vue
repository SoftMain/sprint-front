<template>
  <div class="partnerreviews">
    <div class="partnerreviews-slider">
      <div
        @click="Slide(btn.id)"
        v-for="btn of switcher"
        :key="btn.id"
        :class="{ active: btn.id == activeCategory }"
        class="partnerreviews-slider-switcher"
      ></div>
    </div>
    <div class="comment-wrapper">
      <div class="slider-area">
        <Item :counter="counter" :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
import Item from "./Slider_item.vue";
export default {
  components: {
    Item,
  },
  data() {
    return {
      name: "forward",
      counter: 0,
      activeCategory: 0,
      timeout:false,
      switcher: [
        { id: 0 },
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
      ],
    };
  },
  methods: {
    Slide(id) {
      this.counter > id ? (this.name = "backward") : (this.name = "forward");
      this.activeCategory = id;
      this.counter = id;
      this.timeout=true;
    },
    Timer() {
      this.name = "forward";
      if (this.counter >= 5) {
        this.name = "backward";
        this.counter = 0;
      } else {
        this.counter++;
      }
      this.activeCategory = this.counter;
      this.timeout=false;
    },
  },
  mounted() {
    setInterval(() => {
      if(this.timeout==true){
        setTimeout(()=>{
          this.Timer();
          this.counter--;
          this.activeCategory--;
        },1500);
      }else{
        this.Timer();
      }
    }, 3000);
  },
};
</script>

<style lang="scss" scoped></style>
