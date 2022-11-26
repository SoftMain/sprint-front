<template>
    <div
    v-for="item of itemsArr"
    class="shuffle__wrapper">
        <div 
        :key="item.id"  
        :class="`item${item.id}`,{horizontal: item.id == 1||item.id ==5||item.id ==6}"
        class="shuffle__image">
            <div v-for="img of imageArr"
            :class="img"
            class="partnersblocks-partners-banner-logo">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                counter:0,
                rand:0,
                imageArr:[
                    "econom",
                    "otr",
                    "ozon",
                    "rosteh",
                    "rostelekom",
                    "sber",
                    "vk",
                    "wildberries",
                    "yandex"
                ],
                itemsArr:[
                    {id:0},
                    {id:1},
                    {id:2},
                    {id:3},
                    {id:4},
                    {id:5},
                    {id:6},
                    {id:7},
                    {id:8}
                ]
            }
        },
        methods:{
            Slide(){
                this.rand=Math.floor(Math.random() * 8);
                if(document.querySelector(`.item${this.rand}`).classList.contains('horizontal')){
                    document.querySelector(`.item${this.rand}`).style.marginTop = `-${80*this.counter}px`;
                }else{
                    document.querySelector(`.item${this.rand}`).style.marginLeft = `-${100*this.counter}%`;
                }
                if(this.counter>=8){
                    this.counter=0;
                }else{
                    this.counter++;
                }
            }
        },
        mounted(){
            let vm=this;
            setInterval(function(){
                vm.Slide()
            },1000)
        }

    }
</script>

<style lang="scss" scoped>

</style>