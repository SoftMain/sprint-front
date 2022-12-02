<template>
    <nav class="product__navbar">
        <ul class="navbar__list">
            <li v-for="(item, index) in items" @click="this.actvie = index" :class="{'navbar__link-active': active == index}" class="navbar__item">
                <span :class="'icon-' + item.icon + 'px20'"></span>
                <a class="navbar-link" href="">{{ item.name }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'ProductSideBar',
    data() {
        return {
            active: 0,  
            items: [
                {
                    name: 'Описание',
                    icon: 'file-text'
                },
                {
                    name: 'Особенности',
                    icon: 'star-bold'
                },
                {
                    name: 'Тех. информация',
                    icon: 'info'
                },
                {
                    name: 'Медиа',
                    icon: 'video'
                },
                {
                    name: 'Аналоги',
                    icon: 'analog'
                },
                {
                    name: 'Отзывы',
                    icon: 'message'
                }
            ]
        }
    }
};
</script>

<style lang="scss" scoped>
.navbar-link {
  color: black;
}
.navbar-link:hover {
  background-color: #2C68E7;
}
.navbar-link-active {
    background-color:  #2C68E7;
    color: white    ;
}

</style>