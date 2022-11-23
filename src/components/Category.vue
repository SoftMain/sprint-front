<template>
  <section>
    <div class="container">
      <div class="mainproducts-infotext">
        <h3>Самые популярные категории</h3>
      </div>

      <div class="blockcategory">
        <div class="blockcategory-navmenu">
          <Pages :pages="pages" @cur="currentPage" />
        </div>
        <div class="category">
          <Product :posts="pages[current - 1].posts" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Product from "./category__product/Product.vue";
import Pages from "./category__product/Pages.vue";
export default {
  components: {
    Product,
    Pages,
  },
  data() {
    return {
      current: 1,
      pages: [
        {
          id: 1,
          icon: "icon-antivirus",
          text: "Антивирусы",
          posts: [
            {
              img: "../assets/img/productlogo/lunacy.svg",
              link: "/error",
              text: "пипяо",
              title: "пизда",
            },
            {
              img: "../assets/img/productlogo/lunacy.svg",
              link: "/error",
              text: "пипяо",
              title: "Хуй",
            },
            {
              img: "../assets/img/productlogo/lunacy.svg",
              link: "/error",
              text: "пипяо",
              title: "Хуй",
            },
            {
              img: "./assets/img/productlogo/lunacy.svg",
              link: "/error",
              text: "пипяо",
              title: "Хуй",
            },
          ],
        },
        {
          id: 2,
          icon: "icon-browser",
          text: "Браузеры",
          posts: [
            {
              img: "../assets/img/productlogo/lunacy.svg",
              link: "/error",
              text: "пипяо",
              title: "Хуй",
            },
            {
              img: "../assets/img/productlogo/lunacy.svg",
              link: "/error",
              text: "пипяо",
              title: "Хуй",
            },
            {
              img: "../assets/img/productlogo/lunacy.svg",
              link: "/error",
              text: "пипяо",
              title: "Хуй",
            },
            {
              img: "./assets/img/productlogo/lunacy.svg",
              link: "/error",
              text: "пипяо",
              title: "Хуй",
            },
          ],
        },
        {
          id: 3,
          icon: "icon-video-conference px20",
          text: "Видеоконференции",

          posts: [
            {
              img: "../assets/img/productlogo/lunacy.svg",
              link: "/error",
              text: "пипяо",
              title: "Хуй",
            },
            {
              img: "../assets/img/productlogo/lunacy.svg",
              link: "/error",
              text: "пипяо",
              title: "Хуй",
            },
            {
              img: "../assets/img/productlogo/lunacy.svg",
              link: "/error",
              text: "пипяо",
              title: "Хуй",
            },
            {
              img: "./assets/img/productlogo/lunacy.svg",
              link: "/error",
              text: "пипяо",
              title: "Хуй",
            },
          ],
        },
        {
          id: 4,
          icon: "icon-designers px20",
          text: "Графические редакторы",

          posts: [
            {
              img: "../assets/img/productlogo/lunacy.svg",
              link: "/error",
              text: "пипяо",
              title: "Хуй",
            },
            {
              img: "../assets/img/productlogo/lunacy.svg",
              link: "/error",
              text: "пипяо",
              title: "Хуй",
            },
            {
              img: "../assets/img/productlogo/lunacy.svg",
              link: "/error",
              text: "пипяо",
              title: "Хуй",
            },
            {
              img: "./assets/img/productlogo/lunacy.svg",
              link: "/error",
              text: "пипяо",
              title: "Хуй",
            },
          ],
        },
        {
          id: 5,
          icon: "icon-messageres px20",
          text: "Мессенджеры",
          posts: [
            {
              img: "../assets/img/productlogo/lunacy.svg",
              link: "/error",
              text: "пипяо",
              title: "Хуй",
            },
            {
              img: "../assets/img/productlogo/lunacy.svg",
              link: "/error",
              text: "пипяо",
              title: "Хуй",
            },
            {
              img: "../assets/img/productlogo/lunacy.svg",
              link: "/error",
              text: "пипяо",
              title: "Хуй",
            },
            {
              img: "./assets/img/productlogo/lunacy.svg",
              link: "/error",
              text: "пипяо",
              title: "Хуй",
            },
          ],
        },
        {
          id: 6,
          icon: "icon-os px20",
          text: "Операционные системы",
          posts: [
            {
              img: "../assets/img/productlogo/lunacy.svg",
              link: "/error",
              text: "пипяо",
              title: "Хуй",
            },
            {
              img: "../assets/img/productlogo/lunacy.svg",
              link: "/error",
              text: "пипяо",
              title: "Хуй",
            },
            {
              img: "../assets/img/productlogo/lunacy.svg",
              link: "/error",
              text: "пипяо",
              title: "Хуй",
            },
            {
              img: "./assets/img/productlogo/lunacy.svg",
              link: "/error",
              text: "пипяо",
              title: "Хуй",
            },
          ],
        },
        {
          id: 7,
          icon: "icon-task-tracker px20",
          text: "Таск-трекеры",

          posts: [
            {
              img: "../assets/img/productlogo/lunacy.svg",
              link: "/error",
              text: "пипяо",
              title: "Хуй",
            },
            {
              img: "../assets/img/productlogo/lunacy.svg",
              link: "/error",
              text: "пипяо",
              title: "Хуй",
            },
            {
              img: "../assets/img/productlogo/lunacy.svg",
              link: "/error",
              text: "пипяо",
              title: "Хуй",
            },
            {
              img: "./assets/img/productlogo/lunacy.svg",
              link: "/error",
              text: "пипяо",
              title: "Хуй",
            },
          ],
        },
      ],
    };
  },
  methods: {
    currentPage(current) {
      this.current = current;
    },
  },
};
</script>

<style lang="scss" scoped></style>
