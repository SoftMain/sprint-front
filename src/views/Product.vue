<template>
  <div class="container">
    <div class="product__header">
      <div class="product__upper">
        <img class="product__upper-img" :src="'/img/products/h' + product.id + '.png'" alt="Kaspersky" />
      </div>
      <div class="product__under">
        <div class="product__logo">
          <img class="product__logo-img" :src="'/img/products/' + product.id + '.png'" alt="Prxduct Lxgx" />
        </div>
        <div class="product__info">
          <h4>{{ product.name }}</h4>
          <div class="info__text"> {{ product?.company?.name }}</div>
          <StarRating :rating="4"></StarRating>
        </div>
        <div class="product__btn">
          <a class="button" href="">Перейти</a>
        </div>
      </div>
    </div>
    <div class="product__content-main">
      <ProductSidebar></ProductSidebar>
      <div class="product">
        <div class="product__main-description" id="description">
          <h4>Описание</h4>
          <p> {{ product?.description }}</p>
        </div>
        <div class="product__main-features" id="features">
          <h4 class="">Особенности</h4>
          <div class="product__features-columns">
            <div class="feature-column">
              <div class="feature">
                <span class="icon-checkmark-circle 24px"></span>Крутой интерфейс
              </div>
              <div class="feature">
                <span class="icon-checkmark-circle 24px"></span>Обновления
              </div>
              <div class="feature">
                <span class="icon-checkmark-circle 24px"></span>Расширения
              </div>
            </div>

            <div class="feature-column">
              <div class="feature">
                <span class="icon-checkmark-circle 24px"></span>Безопасность
              </div>
              <div class="feature">
                <span class="icon-checkmark-circle 24px"></span>Документация
              </div>
              <div class="feature">
                <span class="icon-checkmark-circle 24px"></span>Поддержка
              </div>
            </div>
          </div>
        </div>

        <div class="product__main-tech-info" id="tech-info">
          <h4>Техническая информация</h4>
          <div class="main__tech-info-wrap">
            <div class="line__tech-info">
              <div class="tech__category">Поддерживаемые <br>
                платформы</div>
              <div>Linux, Windows, Android</div>
            </div>
            <div class="line__tech-info">
              <div class="tech__category">Поддерживаемые языки</div>
              <div>Русский, Английский</div>
            </div>
            <div class="line__tech-info">
              <div class="tech__category">Мобильное приложение</div>
              <div>{{ product.mobile ? 'Да' : 'Нет' }}</div>
            </div>
            <div class="line__tech-info">
              <div class="tech__category">Сертификация</div>
              <div>ФСТЭК</div>
            </div>
            <div class="line__tech-info">
              <div class="tech__category">Категории</div>
              <div>Антивирусы</div>
            </div>
          </div>
        </div>
        <div class="product__main-media" id="media">
          <h4>Медиа</h4>
          <div class="product__main-media-wrap">
            <div class="product__main-vid-rev" id="video_reviews">
              <div class="vid-rev-title">
                Видеообзоры
              </div>
              <div class="videos">
                <div class="video">1</div>
                <div class="video">2</div>
                <div class="video">3</div>
                <div class="video">4</div>
              </div>
            </div>
            <div class="product__main-screen" id="screenshots">
              <div class="screen-title">
                Скриншоты
              </div>
              <div class="screenshots">
                <div class="screen">1</div>
                <div class="screen">2</div>
                <div class="screen">3</div>
                <div class="screen">4</div>
              </div>
            </div>
          </div>
        </div>
        <div class="product__main-analog" id="analogs">
          <h4>Зарубежные аналоги</h4>
          <p>ESET32, 360 Total Security, Malwarebytes</p>
        </div>

        <div class="product__comments-wrap" id="reviews">
          <h4>Отзывы</h4>
          <div class="product__comment">
            <div class="comment-user">
              <div class="user--avatar">
                <img src="" alt="">
              </div>
              <div class="user--title">
                <div class="title-name">Персиваль Шуттенбах</div>
                <StarRatingReview></StarRatingReview>
              </div>
            </div>
            <div class="coment-text">Данным антивирусом пользуюсь давно, работает отлично, никогда не подводил.</div>
          </div>
          <div class="product__comment">
            <div class="comment-user">
              <div class="user--avatar">
                <img src="" alt="">
              </div>
              <div class="user--title">
                <div class="title-name">Персиваль Шуттенбах</div>
                <StarRatingReview></StarRatingReview>
              </div>
            </div>
            <div class="coment-text">Касперский одна из лучших антивирусных программ, во-первых постоянно обновляется база, во-вторых как никто надежно защищает систему. Перепробовал ни одну, но больше всего мне понравился именно этот антивирус. Когда стояли другие, комп жутко тормозил, когда запущен касперский, то этого нет.</div>
          </div>
          <div class="product__comment">
            <div class="comment-user">
              <div class="user--avatar">
                <img src="" alt="">
              </div>
              <div class="user--title">
                <div class="title-name">Персиваль Шуттенбах</div>
                <StarRatingReview></StarRatingReview>
              </div>
              
            </div>
            <div class="coment-text">Хороший антивирус, с огромным функционалом, но жрет очень много оперативной памяти</div>
          </div>
        </div>
        <form class="product__comments-form" id="input_rev" >
          <h4>Оставьте свой отзыв</h4>
          <div class="product__comm-inputs">
            <div class="comment__left">
              <input  type="text" name="" placeholder="Имя" class="comment__input-left" />
              <input  type="text" name="" placeholder="Почта" class="comment__input-left" />
              <StarRatingReviewInput></StarRatingReviewInput>
            </div>
            <div class="comment__right">
              <input type="text" name="" class="comment__input-right" />
              <div class="product__comment-captcha">captcha</div>
              <div class="product__comment-btn">
                <a class="comment__button" href="">Отправить</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ProductSidebar from '../components/Product/ProductSidebar.vue';
import StarRating from '../components/StarRating.vue';
import StarRatingReview from '../components/StarRatingReview.vue';
import StarRatingReviewInput from '../components/StarRatingReviewInput.vue';
export default {
  components: {
    ProductSidebar,
    StarRating,
    StarRatingReview,
    StarRatingReviewInput,
    ProductSidebar
  },
  data() {
    return {
      product: {
        id: 1,
        name: '',
        description: '',
      },
    }
  },
  methods: {
    async getProduct() {
      const resp = await this.$axios.get("/products/"+ this.$route.params.id);
      this.product = resp.data;
      if (!this.product) {
        this.$router.push({
          name: "error"
        });
      }
    }
  },
  mounted() {
    this.getProduct();
  }
};
</script>

<style lang="sass" scoped></style>
