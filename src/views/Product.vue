<template>
  <div class="container">
    <div class="product__header">
      <div class="product__upper">
        <img class="product__upper-img" src="/img/products/h5.png" alt="Kaspersky" />
      </div>
      <div class="product__under">
        <div class="product__logo">
          <img src="/img/products/5.png" alt="Prxduct Lxgx" />
        </div>
        <div class="product__info">
          <h4>Kaspersky Anti-Virus</h4>
          <div class="info__text">Лаборатория Касперского</div>
            <StarRating />
          <div class="product__raiting">  
            <span class="icon-star-filled 14px"></span>
            <span class="icon-star-filled 14px"></span>
            <span class="icon-star-filled 14px"></span>
            <span class="icon-star 14px"></span>
            <span class="icon-star 14px"></span>
            <p class="product__raiting-text">(12)</p>
          </div>
        </div>
        <div class="product__btn">
          <a class="button" href="">Перейти</a>
        </div>
      </div>
    </div>
    <div class="product__content-main">
      <nav class="product__navbar">
        <ul class="navbar__list">
          <li class="navbar__item">
            <span class="icon-file-text px20"></span>
            <a class="navbar-link" href="">Описание</a>
          </li>
          <li class="navbar__item">
            <span class="icon-star px20"></span>
            <a class="navbar-link" href="">Особенности</a>
          </li>
          <li class="navbar__item">
            <span class="icon-info px20"></span>
            <a class="navbar-link" href="">Тех. информация</a>
          </li>
          <li class="navbar__item">
            <span class="icon-video px20"></span>
            <a class="navbar-link" href="">Медиа</a>
          </li>
          <li class="navbar__item">
            <span class="icon-analog px20"></span>
            <a class="navbar-link" href="">Аналоги</a>
          </li>
          <li class="navbar__item">
            <span class="icon-message px20"></span>
            <a class="navbar-link" href="">Отзывы</a>
          </li>
        </ul>
      </nav>

      <div class="product">
        <div class="product__main-description">
          <h4>Описание</h4>
          <p>
            Наш надежный антивирус для Windows защитит вас от
            программ-вымогателей, шифровальщиков и атак хакеров. Он прост в
            использовании и работает незаметно.
          </p>
        </div>
        <div class="product__main-features">
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

        <div class="product__main-tech-info">
          <h4>Техническая информация</h4>
          <div class="main__tech-info-col">
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
              <div>Да</div>
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
        <div class="product__main-media">
          <h4>Медиа</h4>
          <div class="product__main-media-wrap">
            <div class="product__main-vid-rev">
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
            <div class="product__main-screen">
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
        <div class="product__main-analog">
          <h4>Зарубежные аналоги</h4>
          <p>ESET32, 360 Total Security, Malwarebytes</p>
        </div>

        <div class="product__comments-wrap">
          <h4>Отзывы</h4>
          <div class="product__comment"></div>
          <div class="product__comment"></div>
          <div class="product__comment"></div>
        </div>
        <form class="product__comments-form">
          <h4>Оставьте свой отзыв</h4>
          <div class="product__comm-inputs">
            <div class="comment__left">
              <input type="text" name="" placeholder="Иди спать" class="comment__input-left" />
              <input type="text" name="" placeholder="Настя" class="comment__input-left" />
              <input type="text" name="" placeholder="Я устал" class="comment__input-left" />
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
import StarRating from '../components/StarRating.vue';
export default {
  name: 'StarRating',
  components: {
    StarRating
  },
};
</script>

<style lang="sass" scoped></style>
