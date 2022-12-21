<template>
  <nav :class="{fixed: isTop}" class="product__navbar">
    <ul class="navbar__list">
      <li
      v-for="(item, index) in items"
      >
        <a :href="'#' + item.id"
        @click="active = index"
        :class="{ 'navbar__link-active': active == index }"
        class="navbar__item">
          <span :class="'icon-' + item.icon + ' px20'"></span>
          <div class="navbar-link font-regular">{{ item.name }}</div>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "ProductSideBar",
  data() {
    return {
      active: 0,
      items: [
        {
          name: "Описание",
          icon: "file-text",
          id: "description",
        },
        {
          name: "Особенности",
          icon: "star-bold",
          id: "features",
        },
        {
          name: "Тех. информация",
          icon: "info",
          id: "tech-info",
        },
        {
          name: "Медиа",
          icon: "video",
          id: "media",
        },
        {
          name: "Аналоги",
          icon: "analog",
          id: "analogs",
        },
        {
          name: "Отзывы",
          icon: "message",
          id: "reviews",
        },
      ],
      scrollHeight:undefined,
      isTop: false
    };
  },
  methods:{
    getScrollHeight(){
      this.scrollHeight= document.querySelector('header').clientHeight+document.querySelector('.breadcrumb').clientHeight+document.querySelector('.product__header').clientHeight-24;
      console.log(this.scrollHeight);
    },
    handleScroll(event) {
      if (window.scrollY >= this.scrollHeight) {
        this.isTop = true; 
        console.log(`${document.querySelector(".product__navbar").clientWidth}px`);
        document.querySelector(".product").style.marginLeft = `${document.querySelector(".product__navbar").offsetWidth+20}px`;
        return;
      }
      this.isTop = false;
      document.querySelector(".product").style.marginLeft = "0px";
    }
  },
  mounted(){
    this.getScrollHeight();
    this.handleDebouncedScroll = setTimeout.bind(null, this.handleScroll, 100);
    window.addEventListener("scroll", this.handleDebouncedScroll, {
      passive: true,
    });
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleDebouncedScroll);
  },
};
</script>

<style lang="scss" scoped>
.navbar-link {
  color: black;
  font-size: 16px;
}
.navbar-link:hover {
  color: white;
}
.navbar__link-active {
  background-color: #2c68e7;
  color: white;
}
.navbar__item:hover {
  background-color: #2c68e7;
  color: white;
}
.navbar__item:hover  div{
  background-color: #2c68e7;
  color: white;
}

.navbar__item:hover span {
  color: white;
}
.navbar__item-active{
  background-color: #2c68e7;
  color: white;
}

.navbar__link-active > div{
  color: #fff;
}

.navbar__item {
  padding: 8px 4px;
  color: white;
}
.navbar__item span {
    color: #2755A1;

}

.navbar__link-active > span{
  color: #fff;
}

</style>