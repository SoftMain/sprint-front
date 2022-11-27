<template>
  <Carousel v-for="item of 9" class="shuffle__wrapper" :slidesIn="slides"></Carousel>
</template>

<script>
import Carousel from "../Carousel/Carousel.vue";

export default {
  components: { Carousel },
  data() {
    return {
      slides: [
        "econom",
        "otr",
        "ozon",
        "rosteh",
        "rostelekom",
        "sber",
        "vk",
        "wildberries",
        "yandex",
      ],
    };
  },
};
</script>