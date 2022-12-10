<template>
    <div class="nav__search-wrapper">
        <div class="nav__search proto__elem">
        <input class="search-area text-base font-regular" placeholder="Поиск по сайту" required-placeholder=""
            v-model="message" @input="ChangeIcon(),DropDown()" />
        <span @click="SearchDeleteAll" class="icon-search px20 search-img"></span>
        <div class="search__dropdown">
            <div class="search__dropdown-error font-regular text-base">
                {{error_text}}
            </div>
        <router-link :to="'/product/' + item.id" @click="SearchDeleteAll"  class="search__dropdown-item" v-for="item in output">
            <div class="search__dropdown-name font-regular text-base">
                {{ item.name }}
            </div>
            <div class="search__dropdown-category font-regular text-sm">
                Категория
            </div>
        </router-link>
    </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: '',
            error_text:'',
            output: [] //массив который будет выводиться в dropdown
        }
    },
    methods: {
        //иконки меняются
        ChangeIcon() {
            // this.getProduct();
            this.getProduct();

            if (this.message == '') {
                document.querySelector('.search-img').classList.remove('icon-close');
                document.querySelector('.search-img').classList.add('icon-search');
            }
            else {
                document.querySelector('.search-img').classList.remove('icon-search');
                document.querySelector('.search-img').classList.add('icon-close');
            }
        },
        //при нажатии на иконку все удаляется и сама иконка меняется
        SearchDeleteAll(){
        this.message='';
        document.querySelector('.search-img').classList.remove('icon-close');
        document.querySelector('.search-img').classList.add('icon-search');
        document.querySelector('.search__dropdown').classList.remove('active');
        document.querySelector('.search-area').classList.remove('active');

    },
    DropDown(){
        if(this.message.length > 2){
            document.querySelector('.search__dropdown').classList.add('active'); 
            document.querySelector('.search-area').classList.add('active'); 
        }
        else{
            document.querySelector('.search__dropdown').classList.remove('active');
            document.querySelector('.search-area').classList.remove('active');

        }
    },
    async getProduct(){
        const resp = await this.$axios.get(`/products/search?_string=${this.message}`, {
      });
      this.output=resp.data;
      if(this.output.length==0&&this.message.length>2){
                this.error_text='Ничего не найдено'; 
            }
            else{
                this.error_text='';
            }
    }
    },
    async mounted() {
    this.getProduct();
  },
}
</script>

<style lang="scss" scoped>

</style>