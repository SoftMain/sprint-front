<template>
    <span v-if="item.link == '/'" class="icon-home px20 breadcrumb__icon-home"></span>
    <router-link v-if="item.link" :to="item.link" class="breadcrumb__page-link">{{ item.name }}</router-link>
    <span v-else class="breadcrumb__page-current">{{ item.name }}</span>
    <span v-if="item.link" class="icon-chevron-r px20 breadcrumb__icon"></span>
</template>

<script>
  export default {
    props: ["item"]
  }
</script>

<style lang="scss" scoped>
</style>