<template>
    <span v-if="item.link == '/'" class="icon-home px20"></span>
    <router-link v-if="item.link" :to="item.link">{{ item.name }}</router-link>
    <span v-else>{{ item.name }}</span>
    <span v-if="item.link" class="icon-chevron-r px20"></span>
</template>

<script>
  export default {
    props: ["item"]
  }
</script>

<style lang="scss" scoped>
</style>