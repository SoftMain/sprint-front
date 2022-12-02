<template>
  <div class="products__product">
    <div class="products__header">
      <div class="products__header-container">
        <div class="products__image">
          <img :src="'/img/products/' + product.id + '.png'" />
        </div>
        <div class="products__content">
          <div class="products__title">
            <h4 class="font-regular">{{ product.name }}</h4>
          </div>
          <div class="products__developer font-light text-sm">
            <p>{{ product.company.name }}</p>
            <span v-if="product.company.verify" class="icon-verify px16"></span>
          </div>
          <Star :value="1" :total="5" :reviewsCount="product.product_reviews.length"/>
        </div>
      </div>
      <div v-if="false" class="products__lable">
        <div class="products__lable-text font-medium">
          <p>Рекомендуем!</p>
        </div>
        <div class="products__triangle"></div>
      </div>
    </div>
    <div class="products__description">
      <p class="text-sm">
        {{ product.description }}
      </p>
    </div>
    <div class="products__under">
      <div class="products__button">
        <router-link :to="'/product/'+ product.id" class="btn btn-primary btn-sm">Подробнее</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Star from '../Star.vue';
export default {
  props: ["product"],
  components: { Star },
  data() {
    return {
      
    }
  }
};
</script>

<style lang="sass" scoped></style>
