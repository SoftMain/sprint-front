<template>
    <section>
        <div class="container">
          <div class="partnersblocks">

            <div class="partnersblocks-partners">
              <div class="partnersblocks-partners-banner">
                <div class="partnersblocks-partners-banner-logo yandex">
                </div>
                <div class="partnersblocks-partners-banner-logo ozon">
                </div>
                <div class="partnersblocks-partners-banner-logo wildberries"></div>
                <div class="partnersblocks-partners-banner-logo vk">
                </div>
                <div class="partnersblocks-partners-banner-logo rosteh">
                </div>
                <div class="partnersblocks-partners-banner-logo rostelekom">
                </div>
                <div class="partnersblocks-partners-banner-logo econom">
                </div>
                <div class="partnersblocks-partners-banner-logo otr">
                </div>
                <div class="partnersblocks-partners-banner-logo sber">
                </div>
              </div>
            </div>

            <Slider />
          </div>
        </div>
  </section>
</template>

<script>
  import Slider from "./Partners/Slider.vue";
    export default {
        components:{
          Slider
        }
    }
</script>

<style lang="scss" scoped>

</style>