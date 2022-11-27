<template>
  <div class="container catalog-container">
    <section>

      <div class="sidebar">
        <div class="sidebar__categories">
          <div class="sidebar__h6">
            <h6 class="font-regular">Категория</h6>
          </div>
          <div class="sidebar__catalog-categories">
            <div class="sidebar__catalog-categories-sub">
              <span class="icon-chevron-l px16"></span>
              <p class="font-regular text-base">Антивирусы и безопасность</p>
            </div>
            <a class="btn btn-primary btn-sm font-regular text-base">Антивирусы для дома</a>
          </div>
        </div>

        <div class="sidebar__filters">
          <div class="sidebar__platform-filter">
            <div class="sidebar__collapse">
              <div class="sidebar__collapse-icon">
                <span class="icon-caret-down px20"></span>
              </div>
              <div class="sidebar__collapse-h6">
                <h6 class="font-regular">Платформа</h6>
              </div>
            </div>
            <div class="sidebar__variants">
              <div class="sidebar__checkbox">
                <div class="sidebar__checkbox-icon">
                  <span class="icon-checkbox-fill px15"></span>
                </div>
                <div class="sidebar__checkbox-text">
                  <p>Windows</p>
                </div>
              </div>
              <div class="sidebar__checkbox">
                <div class="sidebar__checkbox-icon">
                  <span class="icon-checkbox px15"></span>
                </div>
                <div class="sidebar__checkbox-text">
                  <p>Linux</p>
                </div>
              </div>
              <div class="sidebar__checkbox">
                <div class="sidebar__checkbox-icon">
                  <span class="icon-checkbox px15"></span>
                </div>
                <div class="sidebar__checkbox-text">
                  <p>Android</p>
                </div>
              </div>
              <div class="sidebar__checkbox">
                <div class="sidebar__checkbox-icon">
                  <span class="icon-checkbox px15"></span>
                </div>
                <div class="sidebar__checkbox-text">
                  <p>iOS</p>
                </div>
              </div>
            </div>
          </div>
          <div class="sidebar__certificate-filter">
            <div class="sidebar__collapse">
              <div class="sidebar__collapse-icon">
                <span class="icon-caret-down px20"></span>
              </div>
              <div class="sidebar__collapse-h6">
                <h6 class="font-regular">Сертификация</h6>
              </div>
            </div>
            <div class="sidebar__variants">
              <div class="sidebar__checkbox">
                <div class="sidebar__checkbox-icon">
                  <span class="icon-checkbox-fill px15"></span>
                </div>
                <div class="sidebar__checkbox-text">
                  <p>Windows</p>
                </div>
              </div>
              <div class="sidebar__checkbox">
                <div class="sidebar__checkbox-icon">
                  <span class="icon-checkbox px15"></span>
                </div>
                <div class="sidebar__checkbox-text">
                  <p>Linux</p>
                </div>
              </div>
              <div class="sidebar__checkbox">
                <div class="sidebar__checkbox-icon">
                  <span class="icon-checkbox px15"></span>
                </div>
                <div class="sidebar__checkbox-text">
                  <p>Android</p>
                </div>
              </div>
              <div class="sidebar__checkbox">
                <div class="sidebar__checkbox-icon">
                  <span class="icon-checkbox px15"></span>
                </div>
                <div class="sidebar__checkbox-text">
                  <p>iOS</p>
                </div>
              </div>
            </div>
          </div>
          <div class="sidebar__language-filter">
            <div class="sidebar__collapse">
              <div class="sidebar__collapse-icon">
                <span class="icon-caret-up px20"></span>
              </div>
              <div class="sidebar__collapse-h6">
                <h6 class="font-regular">Язык интерфейса</h6>
              </div>
            </div>
            <div class="sidebar__variants">
              <div class="sidebar__checkbox">
                <div class="sidebar__checkbox-icon"></div>
                <div class="sidebar__checkbox-text"></div>
              </div>
            </div>
          </div>
          <div class="sidebar__analogs-filter">
            <div class="sidebar__collapse">
              <div class="sidebar__collapse-icon">
                <span class="icon-caret-up px20"></span>
              </div>
              <div class="sidebar__collapse-h6">
                <h6 class="font-regular">Аналоги</h6>
              </div>
            </div>
            <div class="sidebar__variants">
              <div class="sidebar__checkbox">
                <div class="sidebar__checkbox-icon"></div>
                <div class="sidebar__checkbox-text"></div>
              </div>
            </div>
          </div>
          <div class="sidebar__actions">
            <a class="btn btn-primary">Применить</a>
            <a class="btn btn-outline-primary">Сбросить</a>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="main">
        <div class="sort-button">
          <a class="btn btn-primary btn-sm">Высокий рейтинг<span class="icon-caret-down px20"></span></a>
        </div>

        <div class="products">
          <div class="products__product">
            <div class="products__header">
              <div class="products__header-container">
                <div class="products__image">
                  <img
                    src="https://content.kaspersky-labs.com/se/ru/content/ru-ru/images/kaspersky-logo-square/kaspersky-logo-square.svg"
                    alt="">
                </div>
                <div class="products__content">
                  <div class="products__title">
                    <h4 class="font-regular">Kaspersky Internet Security</h4>
                  </div>
                  <div class="products__developer font-light text-sm">
                    <p>Kaspersky</p>
                    <span class="icon-verify px16"></span>
                  </div>
                  <div class="products__rating">
                    <span class="icon-star-filled px20"></span>
                    <span class="icon-star-filled px20"></span>
                    <span class="icon-star-filled px20"></span>
                    <span class="icon-star-filled px20"></span>
                    <span class="icon-star px20"></span>
                    <p class="text-sm">(12)</p>
                  </div>
                </div>
              </div>
              <div class="products__lable">
                <div class="products__lable-text  font-medium"><p>Рекомендуем!</p></div>
                <div class="products__triangle"></div>
              </div>
            </div>
            <div class="products__description">
              <p class="text-sm">
                Антивирусное программное обеспечение, разрабатываемое «Лабораторией Касперского». Предоставляет
                пользователю защиту от вирусов, троянских программ, шпионских программ, руткитов, adware, а также от
                неизвестных угроз с помощью проактивной защиты, включающей компонент HIPS. Первоначально, в начале
                1990-х,
                именовался -V, затем - AntiViral Toolkit Pro.</p>
            </div>
            <div class="products__under">
              <div class="products__button">
                <a class="btn btn-primary btn-sm">Подробнее</a>
              </div>
            </div>
          </div>

          <div class="products__product">
            <div class="products__header">
              <div class="products__header-container">
                <div class="products__image">
                  <img
                    src="https://content.kaspersky-labs.com/se/ru/content/ru-ru/images/kaspersky-logo-square/kaspersky-logo-square.svg"
                    alt="">
                </div>
                <div class="products__content">
                  <div class="products__title">
                    <h4 class="font-regular">Kaspersky Internet Security</h4>
                  </div>
                  <div class="products__developer font-light text-sm">
                    <p>Kaspersky</p>
                    <span class="icon-verify px16"></span>
                  </div>
                  <div class="products__rating">
                    <span class="icon-star-filled px20"></span>
                    <span class="icon-star-filled px20"></span>
                    <span class="icon-star-filled px20"></span>
                    <span class="icon-star-filled px20"></span>
                    <span class="icon-star px20"></span>
                    <p class="text-sm">(12)</p>
                  </div>
                </div>
              </div>
              <div class="products__lable">
                <div class="products__lable-text  font-medium"><p>Рекомендуем!</p></div>
                <div class="products__triangle"></div>
              </div>
            </div>
            <div class="products__description">
              <p class="text-sm">
                Антивирусное программное обеспечение, разрабатываемое «Лабораторией Касперского». Предоставляет
                пользователю защиту от вирусов, троянских программ, шпионских программ, руткитов, adware, а также от
                неизвестных угроз с помощью проактивной защиты, включающей компонент HIPS. Первоначально, в начале
                1990-х,
                именовался -V, затем - AntiViral Toolkit Pro.</p>
            </div>
            <div class="products__under">
              <div class="products__button">
                <a class="btn btn-primary btn-sm">Подробнее</a>
              </div>
            </div>
          </div>

          <div class="products__product">
            <div class="products__header">
              <div class="products__header-container">
                <div class="products__image">
                  <img
                    src="https://content.kaspersky-labs.com/se/ru/content/ru-ru/images/kaspersky-logo-square/kaspersky-logo-square.svg"
                    alt="">
                </div>
                <div class="products__content">
                  <div class="products__title">
                    <h4 class="font-regular">Kaspersky Internet Security</h4>
                  </div>
                  <div class="products__developer font-light text-sm">
                    <p>Kaspersky</p>
                    <span class="icon-verify px16"></span>
                  </div>
                  <div class="products__rating">
                    <span class="icon-star-filled px20"></span>
                    <span class="icon-star-filled px20"></span>
                    <span class="icon-star-filled px20"></span>
                    <span class="icon-star-filled px20"></span>
                    <span class="icon-star px20"></span>
                    <p class="text-sm">(12)</p>
                  </div>
                </div>
              </div>
              <div class="products__lable">
                <div class="products__lable-text  font-medium"><p>Рекомендуем!</p></div>
                <div class="products__triangle"></div>
              </div>
            </div>
            <div class="products__description">
              <p class="text-sm">
                Антивирусное программное обеспечение, разрабатываемое «Лабораторией Касперского». Предоставляет
                пользователю защиту от вирусов, троянских программ, шпионских программ, руткитов, adware, а также от
                неизвестных угроз с помощью проактивной защиты, включающей компонент HIPS. Первоначально, в начале
                1990-х,
                именовался -V, затем - AntiViral Toolkit Pro.</p>
            </div>
            <div class="products__under">
              <div class="products__button">
                <a class="btn btn-primary btn-sm">Подробнее</a>
              </div>
            </div>
          </div>

          <div class="products__product">
            <div class="products__header">
              <div class="products__header-container">
                <div class="products__image">
                  <img
                    src="https://content.kaspersky-labs.com/se/ru/content/ru-ru/images/kaspersky-logo-square/kaspersky-logo-square.svg"
                    alt="">
                </div>
                <div class="products__content">
                  <div class="products__title">
                    <h4 class="font-regular">Kaspersky Internet Security</h4>
                  </div>
                  <div class="products__developer font-light text-sm">
                    <p>Kaspersky</p>
                    <span class="icon-verify px16"></span>
                  </div>
                  <div class="products__rating">
                    <span class="icon-star-filled px20"></span>
                    <span class="icon-star-filled px20"></span>
                    <span class="icon-star-filled px20"></span>
                    <span class="icon-star-filled px20"></span>
                    <span class="icon-star px20"></span>
                    <p class="text-sm">(12)</p>
                  </div>
                </div>
              </div>
              <div class="products__lable">
                <div class="products__lable-text  font-medium"><p>Рекомендуем!</p></div>
                <div class="products__triangle"></div>
              </div>
            </div>
            <div class="products__description">
              <p class="text-sm">
                Антивирусное программное обеспечение, разрабатываемое «Лабораторией Касперского». Предоставляет
                пользователю защиту от вирусов, троянских программ, шпионских программ, руткитов, adware, а также от
                неизвестных угроз с помощью проактивной защиты, включающей компонент HIPS. Первоначально, в начале
                1990-х,
                именовался -V, затем - AntiViral Toolkit Pro.</p>
            </div>
            <div class="products__under">
              <div class="products__button">
                <a class="btn btn-primary btn-sm">Подробнее</a>
              </div>
            </div>
          </div>

          <div class="products__product">
            <div class="products__header">
              <div class="products__header-container">
                <div class="products__image">
                  <img
                    src="https://content.kaspersky-labs.com/se/ru/content/ru-ru/images/kaspersky-logo-square/kaspersky-logo-square.svg"
                    alt="">
                </div>
                <div class="products__content">
                  <div class="products__title">
                    <h4 class="font-regular">Kaspersky Internet Security</h4>
                  </div>
                  <div class="products__developer font-light text-sm">
                    <p>Kaspersky</p>
                    <span class="icon-verify px16"></span>
                  </div>
                  <div class="products__rating">
                    <span class="icon-star-filled px20"></span>
                    <span class="icon-star-filled px20"></span>
                    <span class="icon-star-filled px20"></span>
                    <span class="icon-star-filled px20"></span>
                    <span class="icon-star px20"></span>
                    <p class="text-sm">(12)</p>
                  </div>
                </div>
              </div>
              <div class="products__lable">
                <div class="products__lable-text  font-medium"><p>Рекомендуем!</p></div>
                <div class="products__triangle"></div>
              </div>
            </div>
            <div class="products__description">
              <p class="text-sm">
                Антивирусное программное обеспечение, разрабатываемое «Лабораторией Касперского». Предоставляет
                пользователю защиту от вирусов, троянских программ, шпионских программ, руткитов, adware, а также от
                неизвестных угроз с помощью проактивной защиты, включающей компонент HIPS. Первоначально, в начале
                1990-х,
                именовался -V, затем - AntiViral Toolkit Pro.</p>
            </div>
            <div class="products__under">
              <div class="products__button">
                <a class="btn btn-primary btn-sm">Подробнее</a>
              </div>
            </div>
          </div>
        </div>

        <div class="pagination">
          <div class="pagination__page  font-regular text-base">
            <span class="icon-chevron-double-left px14"></span>
          </div>
          <div class="pagination__page font-regular text-base">
            <span class="icon-chevron-l px14"></span>
          </div>
          <div class="pagination__page_active font-regular text-base">
            <p>1</p>
          </div>
          <div class="pagination__page font-regular text-base">
            <p>2</p>
          </div>
          <div class="pagination__page font-regular text-base">
            <p>3</p>
          </div>
          <div class="pagination__page font-regular text-base">
            <p>4</p>
          </div>
          <div class="pagination__page font-regular text-base">

            <p>5</p>
          </div>
          <div class="pagination__page font-regular text-base">
            <span class="icon-chevron-r px14"></span>
          </div>
          <div class="pagination__page font-regular text-base">
            <span class="icon-chevron-double-right px14"></span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped></style>
