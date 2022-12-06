<template>
  <section>
    <div class="container">
      <div class="mainproducts-infotext">
        <h3>Популярные категории</h3>
      </div>

      <div class="blockcategory">
        <div class="blockcategory-navmenu">
          <Chapters :chapters="chapters" @cur="currentChapter" />
        </div>
        <div class="category">
          <Product :posts="chapters[current - 1].posts" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Product from "./Categories/Product.vue";
import Chapters from "./Categories/Chapters.vue";
export default {
  components: {
    Product,
    Chapters,
  },
  data() {
    return {
      current: 1,
      chapters: [
        {
          id: 1,
          icon: "icon-antivirus",
          text: "Антивирусы",
          posts: [
            {
              id: 1,
              link: "/product:id",
              text: "Бесплатный софт для дизайнеров с искусственным интеллектом и встроенной графикой",
              title: "Supa",
            },
            {
              id: 2,
              link: "/product:id",
              text: "Многофункциональный графический редактор для Windows и Mac",
              title: "AliveColors",
            },
            {
              id: 3,
              link: "/product:id",
              text: "Переходите на следующий уровень – создавайте по-настоящему уникальные креативы для рекламы и ",
              title: "Supa",
            },
            {
              id: 4,
              link: "/product:id",
              text: "Переходите на следующий уровень – создавайте по-настоящему уникальные креативы для рекламы и ",
              title: "Supa",
            },
          ],
        },
        {
          id: 2,
          icon: "icon-browser",
          text: "Браузеры",
          posts: [
            {
              id: 1,
              link: "/product:id",
              text: "Описание",
              title: "Kasper",
            },
          ],
        },
        {
          id: 3,
          icon: "icon-video-conference px20",
          text: "Видеоконференции",

          posts: [
            {
              id: 1,
              link: "/product:id",
              text: "Описание",
              title: "Kasper0",
            },
          ],
        },
        {
          id: 4,
          icon: "icon-designers px20",
          text: "Графические редакторы",

          posts: [
            {
              id: 1,
              link: "/product:id",
              text: "Описание",
              title: "Kasper1",
            },
          ],
        },
        {
          id: 5,
          icon: "icon-messageres px20",
          text: "Мессенджеры",
          posts: [
            {
              id: 1,
              link: "/product:id",
              text: "Описание",
              title: "Kasper2",
            },
          ],
        },
        {
          id: 6,
          icon: "icon-os px20",
          text: "Операционные системы",
          posts: [
            {
              id: 1,
              link: "/product:id",
              text: "Описание",
              title: "Kasper3",
            },
          ],
        },
        {
          id: 7,
          icon: "icon-task-tracker px20",
          text: "Таск-трекеры",

          posts: [
            {
              id: 1,
              link: "/product:id",
              text: "Описание",
              title: "Kasper4",
            },
          ],
        },
      ],
    };
  },
  methods: {
    currentChapter(current) {
      this.current = current;
    },
  },
};
</script>

<style lang="scss" scoped></style>
