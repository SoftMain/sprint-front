<template>
  <div class="container catalog-container">
    <section>
      <div class="sidebar">
        <div class="sidebar__categories">
          <div class="sidebar__categories-header">
            <h6 class="font-regular">Категория</h6>
          </div>
          <div class="sidebar__categories-catalog">
            <div class="sidebar__categories-catalog-main">
              <span class="icon-chevron-l px20"></span>
              <p class="font-regular text-base">Антивирусы и безопасность</p>
            </div>
            <div class="sidebar__categories-catalog-sub">
              <a class="btn btn-primary btn-sm font-regular text-base"
                >Антивирусы для дома</a
              >
            </div>
          </div>
        </div>

        <div class="sidebar__filters">
          <div class="sidebar__filters-filter">
            <div @click="show = !show" class="sidebar__collapse btn">
              <div class="sidebar__collapse-icon">
                <span class="icon-caret-down px20"></span>
              </div>
              <div class="sidebar__collapse-header">
                <h6 class="font-regular">Платформа</h6>
              </div>
            </div>
            <Transition name="slide-fade">
              <div v-if="show" class="sidebar__variants">
                <div class="sidebar__variants-item">
                  <div class="sidebar__variants-item-icon">
                    <span class="icon-checkbox-fill px20"></span>
                  </div>
                  <div class="sidebar__variants-item-text">
                    <p>Windows</p>
                  </div>
                </div>
                <div class="sidebar__variants-item">
                  <div class="sidebar__variants-item-icon">
                    <span class="icon-checkbox px20"></span>
                  </div>
                  <div class="sidebar__variants-item-text">
                    <p>Linux</p>
                  </div>
                </div>
                <div class="sidebar__variants-item">
                  <div class="sidebar__variants-item-icon">
                    <span class="icon-checkbox px20"></span>
                  </div>
                  <div class="sidebar__variants-item-text">
                    <p>Android</p>
                  </div>
                </div>
                <div class="sidebar__variants-item">
                  <div class="sidebar__variants-item-icon">
                    <span class="icon-checkbox px20"></span>
                  </div>
                  <div class="sidebar__variants-item-text">
                    <p>iOS</p>
                  </div>
                </div>
              </div>
            </Transition>
          </div>

          <div class="sidebar__filters-filter">
            <div @click="show = !show" class="sidebar__collapse btn">
              <div class="sidebar__collapse-icon">
                <span class="icon-caret-down px20"></span>
              </div>
              <div class="sidebar__collapse-header">
                <h6 class="font-regular">Платформа</h6>
              </div>
            </div>
            <Transition name="slide-fade">
              <div v-if="show" class="sidebar__variants">
                <div class="sidebar__variants-item">
                  <div class="sidebar__variants-item-icon">
                    <span class="icon-checkbox-fill px20"></span>
                  </div>
                  <div class="sidebar__variants-item-text">
                    <p>Windows</p>
                  </div>
                </div>
                <div class="sidebar__variants-item">
                  <div class="sidebar__variants-item-icon">
                    <span class="icon-checkbox px20"></span>
                  </div>
                  <div class="sidebar__variants-item-text">
                    <p>Linux</p>
                  </div>
                </div>
                <div class="sidebar__variants-item">
                  <div class="sidebar__variants-item-icon">
                    <span class="icon-checkbox px20"></span>
                  </div>
                  <div class="sidebar__variants-item-text">
                    <p>Android</p>
                  </div>
                </div>
                <div class="sidebar__variants-item">
                  <div class="sidebar__variants-item-icon">
                    <span class="icon-checkbox px20"></span>
                  </div>
                  <div class="sidebar__variants-item-text">
                    <p>iOS</p>
                  </div>
                </div>
              </div>
            </Transition>
          </div>

          <div class="sidebar__filters-filter">
            <div @click="show = !show" class="sidebar__collapse btn">
              <div class="sidebar__collapse-icon">
                <span class="icon-caret-down px20"></span>
              </div>
              <div class="sidebar__collapse-header">
                <h6 class="font-regular">Платформа</h6>
              </div>
            </div>
            <Transition name="slide-fade">
              <div v-if="show" class="sidebar__variants">
                <div class="sidebar__variants-item">
                  <div class="sidebar__variants-item-icon">
                    <span class="icon-checkbox-fill px20"></span>
                  </div>
                  <div class="sidebar__variants-item-text">
                    <p>Windows</p>
                  </div>
                </div>
                <div class="sidebar__variants-item">
                  <div class="sidebar__variants-item-icon">
                    <span class="icon-checkbox px20"></span>
                  </div>
                  <div class="sidebar__variants-item-text">
                    <p>Linux</p>
                  </div>
                </div>
                <div class="sidebar__variants-item">
                  <div class="sidebar__variants-item-icon">
                    <span class="icon-checkbox px20"></span>
                  </div>
                  <div class="sidebar__variants-item-text">
                    <p>Android</p>
                  </div>
                </div>
                <div class="sidebar__variants-item">
                  <div class="sidebar__variants-item-icon">
                    <span class="icon-checkbox px20"></span>
                  </div>
                  <div class="sidebar__variants-item-text">
                    <p>iOS</p>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
          <div class="sidebar__filters-actions">
            <a class="btn btn-primary">Применить</a>
            <a class="btn btn-outline-primary">Сбросить</a>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="catalog">
        <div class="sort-button">
          <a class="btn btn-primary btn-sm"
            >Высокий рейтинг<span class="icon-caret-down px20"></span
          ></a>
        </div>

        <CatalogProducts />

        <div class="pagination">
          <a class="btn">
            <span class="icon-chevron-double-left px14"></span>
          </a>
          <a class="btn">
            <span class="icon-chevron-l px14"></span>
          </a>
          <a class="btn btn-primary">1</a>
          <a class="btn">2</a>
          <a class="btn">3</a>
          <a class="btn">4</a>
          <a class="btn">5</a>
          <a class="btn">
            <span class="icon-chevron-r px14"></span>
          </a>
          <a class="btn">
            <span class="icon-chevron-double-right px14"></span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CatalogProducts from "../components/Catalog/CatalogProducts.vue";
export default {
  components: { CatalogProducts },
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style lang="sass" scoped></style>
