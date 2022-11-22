<template>
    <section>
    <div class="container">
      <div class="mainproducts-infotext">
        <h3>Самые популярные категории</h3>
      </div>


      <div class="blockcategory">

        <div class="blockcategory-navmenu">
          <ul class="blockcategory-navmenu-navigation">
            <li class="defender"><span class="icon-antivirus px20"></span>
              <h6><a href="#">Антивирусы</a></h6>
            </li>
            <li class="browsers"><span class="icon-browser px20"></span>
              <h6><a href="#">Браузеры</a></h6>
            </li>
            <li class="conferences"><span class="icon-video-conference px20"></span>
              <h6><a href="#">Видеоконференции</a></h6>
            </li>
            <li class="grapheditor"><span class="icon-designers px20"></span>
              <h6><a href="#">Графические
                  редакторы</a></h6>
            </li>
            <li class="messenger"><span class="icon-messageres px20"></span>
              <h6><a href="#">Мессенджеры</a></h6>
            </li>
            <li class="opersys"><span class="icon-os px20"></span>
              <h6><a href="#">Операционные системы</a></h6>
            </li>
            <li class="tasktracker"><span class="icon-task-tracker px20"></span>
              <h6><a href="#">Таск-трекеры</a></h6>
            </li>
          </ul>
        </div>
        <div class="category">
          <Product />
      </div>
    </div>
  </div>
  </section>
</template>

<script setup>
    import Product from './category__product/Product.vue'
</script>

<style lang="scss" scoped>

</style>