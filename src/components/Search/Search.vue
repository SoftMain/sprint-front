<template>
    <div class="nav__search proto__elem">
          <input
            class="search-area text-base font-regular"
            type="search"
            placeholder="Поиск по сайту"
            required-placeholder=""
            @keypress="SearchTool"
            @keyup.delete="SearchDelete"
            v-model="message"
          />
          <span class="icon-search px20 search-img"></span>
        </div>
        <div class="pupu">
            <div class="pepe" v-for="item of output">
                {{item.name}}
            </div>
        </div>
</template>

<script>
    export default {
        data(){
            return{
                message:'',
                items:[   //типа db
                    {
                        id:1,
                        name:"jopa"
                    },
                    {
                        id:2,
                        name:"popa"
                    },
                    {
                        id:3,
                        name:"jopapopa"
                    },
                    {
                        id:4,
                        name:"jopajopa"
                    }
                ],
                output:[] //массив который будет выводиться в dropdown
            }
        },
        methods:{
            SearchTool(){
                if(this.message.length>2){
                    for(let item of this.items){
                        if(item.name.includes(this.message)){ //проверка
                            this.output.push(item)
                        }
                    }
                }
                this.output=this.output.filter((item, index) => {
                        return this.output.indexOf(item) === index  //проверка на дубликаты в списке
                    });
                console.log(this.output);
            },
            SearchDelete(){                  /////////////ВОТ ЭТО НОРМАЛЬНО НЕ РОБИТ
                    this.output=this.output.filter((item, index) => {
                        if(!item.name.includes(this.message)||this.message==''){
                            this.output=this.output.splice(index-1,1);
                            console.log(item.name);
                        }
                        return this.output
                    });
                    console.log(this.output)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>