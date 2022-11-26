<template>
    <section>
        <div class="container">
          <div class="partnersblocks">

            <div class="partnersblocks-partners">
              <div class="partnersblocks-partners-banner">
                <Shuffler/>
              </div>
            </div>

            <Slider />
          </div>
        </div>
  </section>
</template>

<script>
  import Slider from "./Partners/Slider.vue";
  import Shuffler from "./Partners/ImageShuffler.vue"
    export default {
        components:{
          Slider,
          Shuffler
        }
    }
</script>

<style lang="scss" scoped>

</style>