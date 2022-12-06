<template>
  <nav class="product__navbar">
    <ul class="navbar__list">
      <li
        v-for="(item, index) in items"
        @click="active = index"
        :class="{ 'navbar__link-active': active == index }"
        class="navbar__item"
      >
        <span :class="'icon-' + item.icon + ' px20'"></span>
        <a class="navbar-link" :href="'#' + item.id">{{ item.name }}</a>
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
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar-link {
  color: black;
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
.navbar__item:hover a {
  background-color: #2c68e7;
  color: white;
}

.navbar__item:hover span {
  color: white;
}
.navbar__item-active {
  background-color: #2c68e7;
  color: white;
}
.navbar__item {
  padding: 8px 4px;
  color: white;
}
.navbar__item span {
    color: #2755A1;

}

</style>