<template>
  <div class="products__product">
    <div class="products__header">
      <div class="products__header-container">
        <div class="products__image">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
        <div class="products__content">
          <div class="products__title">
            <h4 class="font-regular">{{ product.name }}</h4>
          </div>
          <div class="products__developer font-light text-sm">
            <p>{{ product.company.name }}</p>
            <span class="icon-verify px16"></span>
          </div>
          <div class="products__rating">
            <span class="icon-star-filled px20"></span>
            <span class="icon-star-filled px20"></span>
            <span class="icon-star-filled px20"></span>
            <span class="icon-star-filled px20"></span>
            <span class="icon-star px20"></span>
            <p class="text-sm">({{ product.product_reviews.length }})</p>
          </div>
        </div>
      </div>
      <div class="products__lable">
        <div class="products__lable-text font-medium">
          <p>Рекомендуем!</p>
        </div>
        <div class="products__triangle"></div>
      </div>
    </div>
    <div class="products__description">
      <p class="text-sm">
        Антивирусное программное обеспечение, разрабатываемое «Лабораторией
        Касперского». Предоставляет пользователю защиту от вирусов, троянских
        программ, шпионских программ, руткитов, adware, а также от неизвестных
        угроз с помощью проактивной защиты, включающей компонент HIPS.
        Первоначально, в начале 1990-х, именовался -V, затем - AntiViral Toolkit
        Pro.
      </p>
    </div>
    <div class="products__under">
      <div class="products__button">
        <a class="btn btn-primary btn-sm">Подробнее</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>

<style lang="sass" scoped></style>
