<template>
    <div class="partnerreviews">
              <div class="partnerreviews-slider">
                <div 
                @click="Slide(btn.id)"
                v-for="btn of switcher" 
                :key="btn.id"
                :class="{ active: btn.id == activeCategory }"
                class="partnerreviews-slider-switcher"></div>
              </div>
              <Item :currentSlide="currentSlide"/>
            </div>
</template>

<script>
    import Item from "./Slider_item.vue";
    export default {
        components:{
            Item
        },
        data(){
            return {
                counter:0,
                activeCategory:0,
                switcher:[
                    {id:0},
                    {id:1},
                    {id:2},
                    {id:3},
                    {id:4},
                    {id:5}
                ]
            }
        },
        methods:{
        Slide(id){
                document.querySelector('.slider-area').style.marginLeft = `-${100*id}%`;
                this.activeCategory=id;
                this.counter=id;

                    
        },
        Timer(){
            document.querySelector('.slider-area').style.marginLeft = `-${100*this.counter}%`;
            this.activeCategory=this.counter;
            if(this.counter>=5){
                this.counter=0;
            }else{
                this.counter++;
            }
        }
        },
        mounted(){
            let vm=this;
            setInterval(function(){
                vm.Timer()
            },3000)
        }
    }
</script>

<style lang="scss" scoped>

</style>