<template>
  <Main />
  <Category />
  <Banner />
  <SelfPromotion />
  <Partners />
</template>

<script>
import Main from '../components/Main.vue';
import Category from '../components/Category.vue';
import Banner from '../components/Banner.vue'
import SelfPromotion from '../components/SelfPromotion.vue';
import Partners from '../components/Partners.vue';
export default{
  components:{
    Main,
    Category,
    Banner,
    SelfPromotion,
    Partners
  },
  
}
</script>

<style scoped>
    
</style>