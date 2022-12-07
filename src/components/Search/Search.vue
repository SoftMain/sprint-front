<template>
    <div class="nav__search-wrapper">
        <div class="nav__search proto__elem">
        <input class="search-area text-base font-regular" placeholder="Поиск по сайту" required-placeholder=""
            v-model="message" @input="ChangeIcon(),DropDown()" @keypress="SearchTool" @keyup.delete="SearchDelete" />
        <span @click="SearchDeleteAll" class="icon-search px20 search-img"></span>
    </div>
    <div class="search__dropdown">
        <div class="pepe" v-for="item in output">
            {{ item.name }}
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: '',
            items: [   //типа db
                {
                    id: 1,
                    name: "jopa"
                },
                {
                    id: 2,
                    name: "popa"
                },
                {
                    id: 3,
                    name: "jopapopa"
                },
                {
                    id: 4,
                    name: "jopajopa"
                }
            ],
            output: [] //массив который будет выводиться в dropdown
        }
    },
    methods: {
        SearchTool() {
            if (this.message.length > 2) {
                //добавляем в вывод название программы из импровизированной бд
                for (let item of this.items) {
                    if (this.message.includes(item.name) || item.name.includes(this.message)) {
                        this.output.push(item)
                    }
                }
            }
            //убираем лишние повторения появившеся при итерациях
            this.output = this.output.filter((item, index) => {
                return this.output.indexOf(item) === index
            });
            //этот фильтр снова проверяет включает ли название проги из бд строку введенную в поиске, чтобы при точном вводе мы получали конкретный вариант
            this.output = this.output.filter((item) => {
                return item.name.includes(this.message);
            });
        },
        SearchDelete() {
            //этот фильтр проверяет включает ли название проги из бд строку введенную в поиске и удаляет лишнее
            this.output = this.output.filter((item) => {
                item.name.includes(this.message);
            });

            if (this.message.length > 2) {
                //все повторяется
                for (let item of this.items) {
                    if (this.message.includes(item.name) || item.name.includes(this.message)) {
                        this.output.push(item)
                    }
                }

                this.output = this.output.filter((item, index) => {
                    return this.output.indexOf(item) === index
                });
            }
        },
        //иконки меняются
        ChangeIcon() {
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
        this.output.splice(0);
        this.message='';
        document.querySelector('.search-img').classList.remove('icon-close');
        document.querySelector('.search-img').classList.add('icon-search');
    },
    DropDown(){
        if(this.output.length>0){
            document.querySelector('.search__dropdown').classList.add('active'); 
        }
        else{
            document.querySelector('.search__dropdown').classList.remove('active');
        }
    }
    },
}
</script>

<style lang="scss" scoped>

</style>