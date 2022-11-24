<template>
  <div class="container">
    <div class="path">
      
        <span class="icon-home px16"></span>

        <div class="path-text">Главная</div>
        <span class="icon-chevron-r px20"></span>
      
      
        <div class="path-text">Каталог</div>
        <span class="icon-chevron-r px20"></span>
      
      
        <div class="path-text">Антивирусы</div>
        <span class="icon-chevron-r px20"></span>
      
      
        <div class="path-text path__text-active">Kaspersky Anti-Virus</div>
      
    </div>
    <div class="product__header">
      <div class="product__upper">
        <img src="img/products/h5.png" alt="Kaspersky"/>
      </div>
      <div class="product__under">
        <div class="product__logo">
          <img src="img/products/5.png" alt="Prxduct Lxgx" />
        </div>
        <div class="product__info">
          <h4>Kaspersky Anti-Virus</h4>
          <p>Лаборатория Касперского</p>
          <div class="product__raiting">
            <span class="icon-star-filled 14px"></span>
            <span class="icon-star-filled 14px"></span>
            <span class="icon-star-filled 14px"></span>
            <span class="icon-star-filled 14px"></span>
            <span class="icon-star-filled 14px"></span>
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
          <h4>Особенности</h4>
          <div class="product__columns-features">
            <div class="product__feature-column">
              <div class="product__feature">
                <span class="icon-checkmark-circle 24px"></span>Крутой интерфейс
              </div>
              <div class="product__feature">
                <span class="icon-checkmark-circle 24px"></span>Обновления
              </div>
              <div class="product__feature">
                <span class="icon-checkmark-circle 24px"></span>Обновления
              </div>
            </div>

            <div class="product__feature-column">
              <div class="product__feature">
                <span class="icon-checkmark-circle 24px"></span>Обновления
              </div>
              <div class="product__feature">
                <span class="icon-checkmark-circle 24px"></span>Обновления
              </div>
              <div class="product__feature">
                <span class="icon-checkmark-circle 24px"></span>Обновления
              </div>
            </div>
          </div>
        </div>

        <div class="product__main-tech-info">
          <h4>Техническая информация</h4>
          <div class="main__tech-info-col">
            <div class="line__tech-info">
              <div>Поддерживаемые платформы</div>
              <div>Linux, Windows, Android</div>
            </div>
            <div class="line__tech-info">
              <div>Поддерживаемые платформы</div>
              <div>Linux, Windows, Android</div>
            </div>
            <div class="line__tech-info">
              <div>Поддерживаемые платформы</div>
              <div>Linux, Windows, Android</div>
            </div>
            <div class="line__tech-info">
              <div>Поддерживаемые платформы</div>
              <div>Linux, Windows, Android</div>
            </div>
            <div class="line__tech-info">
              <div>Поддерживаемые платформы</div>
              <div>Linux, Windows, Android</div>
            </div>
          </div>
        </div>
        <div class="product__main-media">
          <h4>Медиа</h4>
          <div class="product__main-media-wrap">
            <div class="product__main-vid-rev">
              <div><p>Видеообзоры</p></div>
              <div class="videos">
                <div class="product__main-video">1</div>
                <div class="product__main-video">2</div>
                <div class="product__main-video">3</div>
                <div class="product__main-video">4</div>
              </div>
            </div>
            <div class="product__main-screen">
              <div><p>Скриншоты</p></div>
              <div class="screenshots">
                <div class="product__main-photo">1</div>
                <div class="product__main-photo">2</div>
                <div class="product__main-photo">3</div>
                <div class="product__main-photo">4</div>
              </div>
            </div>
          </div>
        </div>
        <div class="product__main-analog">
          <h4>Зарубежные аналоги</h4>
          <p>ESET32, 360 Total Security, Malwarebytes</p>
        </div>

        <section class="review">
          <div class="product__review-container">
            <div class="product__review-wrap">
              <h4>Отзывы</h4>
              <div class="product__review"></div>
              <div class="product__review"></div>
              <div class="product__review"></div>
            </div>
            <h4>Оставьте свой отзыв</h4>
            <form class="product__review-form">
              <div class="product__rev-input-wrap">
                <div class="review__left">
                  <input
                    type="text"
                    name=""
                    placeholder=""
                    class="review__input-left"
                  />
                  <input
                    type="text"
                    name=""
                    placeholder=""
                    class="review__input-left"
                  />
                  <input
                    type="text"
                    name=""
                    placeholder=""
                    class="review__input-left"
                  />
                </div>
                <div class="review__right">
                  <input type="text" name="" class="review__input-right" />
                  <div class="product__review-captcha">captcha</div>
                  <div class="product__review-btn">
                    <a class="product__review-button" href="">Перейти</a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped></style>
