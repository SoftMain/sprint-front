<template>
    <div class="nav__search proto__elem">
        <input class="search-area text-base font-regular" type="search" placeholder="Поиск по сайту"
            required-placeholder="" v-model="message" @keypress="SearchTool" @keyup.delete="SearchDelete" />
        <span class="icon-search px20 search-img"></span>
    </div>
    <div class="pupu">
        <div class="pepe" v-for="item in output">
            {{ item.name }}
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
                for (let item of this.items) {
                    if (this.message.includes(item.name) || item.name.includes(this.message)) {
                        this.output.push(item)
                    }
                }
            }
            this.output = this.output.filter((item, index) => {
                return this.output.indexOf(item) === index
            });
            this.output = this.output.filter((item) => {
                return item.name.includes(this.message);
            });
        },
        SearchDelete() {
            this.output = this.output.filter((item) => {
                item.name.includes(this.message);
            });
            if (this.message.length > 2) {
                for (let item of this.items) {
                    if (this.message.includes(item.name) || item.name.includes(this.message)) {
                        this.output.push(item)
                    }
                }
                this.output = this.output.filter((item, index) => {
                    return this.output.indexOf(item) === index
                });
            }
            if (this.message == '') {
                this.output.splice(0);
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>