<template>
  <section>
    <div class="container">
      <div class="mainproducts-infotext">
        <h3>Самые популярные категории</h3>
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
import Product from "./Categoryes/Product.vue";
import Chapters from "./Categoryes/Chapters.vue";
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
              id:1,
              link: "/error",
              text: "Бесплатный софт для дизайнеров с искусственным интеллектом и встроенной графикой",
              title: "Lunacy",
            },
            {
              id:2,
              link: "/error",
              text: "Многофункциональный графический редактор для Windows и Mac",
              title: "AliveColors",
            },
            {
              id:3,
              link: "/error",
              text: "Переходите на следующий уровень – создавайте по-настоящему уникальные креативы для рекламы и ",
              title: "Supa",
            },
            {
              id:4,
              link: "/error",
              text: "Переходите на следующий уровень – создавайте по-настоящему уникальные креативы для рекламы и ",
              title: "Supa",
            }
          ],
        },
        {
          id: 2,
          icon: "icon-browser",
          text: "Браузеры",
          posts: [
            {
              id: 1,
              link: "/error",
              text: "Описание",
              title: "'Браузеры'"
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
              link: "/error",
              text: "Описание",
              title: "'Видеоконференции'"
            }
          ],
        },
        {
          id: 4,
          icon: "icon-designers px20",
          text: "Графические редакторы",

          posts: [
            {
              id: 1,
              link: "/error",
              text: "Описание",
              title: "'Графические редакторы'"
            }
          ],
        },
        {
          id: 5,
          icon: "icon-messageres px20",
          text: "Мессенджеры",
          posts: [
            {
              id: 1,
              link: "/error",
              text: "Описание",
              title: "'Мессенджеры'"
            }
          ],
        },
        {
          id: 6,
          icon: "icon-os px20",
          text: "Операционные системы",
          posts: [
            {
              id: 1,
              link: "/error",
              text: "Описание",
              title: "'Операционые системы'"
            }
          ],
        },
        {
          id: 7,
          icon: "icon-task-tracker px20",
          text: "Таск-трекеры",

          posts: [
            {
              id: 1,
              link: "/error",
              text: "Описание",
              title: "'Таск-трекеры'"
            }
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
