<template>
    <div class="breadcrumb">
        <ul>
            <li v-for="(breadcrumb, idx) in breadcrumbList" :key="idx" @click="routeTo(idx)"
                :class="{ 'linked': !!breadcrumb.link }">

                {{ breadcrumb.name }}

            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'Breadcrumb',
    data() {
        return {
            breadcrumbList: []
        }
    },
    mounted() { this.updateList() },
    watch: { '$route'() { this.updateList() } },
    methods: {
        routeTo(pRouteTo) {
            if (this.breadcrumbList[pRouteTo].link) this.$router.push(this.breadcrumbList[pRouteTo].link)
        },
        updateList() { this.breadcrumbList = this.$route.meta.breadcrumb }
    }
}
</script>
  
<style lang="scss" scoped>
ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

ul>li {
    display: flex;
    float: left;
    height: 10px;
    width: auto;
    color: firebrick;
    font-weight: bold;
    font-size: .8em;
    cursor: default;
    align-items: center;
}

ul>li:not(:last-child)::after {
    content: '\e924';
    float: right;
    font-size: 4em;
    margin: 1em;
    color: greenyellow;
    cursor: default;
}

.linked {
    cursor: pointer;
    font-size: 1em;
    font-weight: normal;
}
</style>
  
