<template>
    <div class="sort-btn">

        <a @click="show = !show" class="btn btn-primary btn-sm">Высокий рейтинг <div
                :class="{ 'unrotated': show, 'rotated': !show }">
                <span class="icon-caret-down px20"></span>
            </div>
        </a>
        <Transition name="slide-fade">

            <div v-if="show" class="sort-btn__dropdown-content">
                <div>
                    <CatalogSortBtnItem v-for="(item, index) in items" :item="item" />
                </div>
            </div>
        </Transition>
    </div>
</template>
  
<script>
import CatalogSortBtnItem from "./CatalogSortBtnItem.vue";

export default {
    components: { CatalogSortBtnItem },
    data() {
        return {
            items: [],
            show: false
        }
    },
    async mounted() {
        // const resp = await this.$axios.get(`${import.meta.env.VITE_SITE_URL}/${this.filter.label}`);
        // this.items = resp.data;
        // this.filterActive.name = this.filter.label;
        this.items = ['Высокий рейтинг', "Низкий флекс", "Абоба"];
    },
    components: { CatalogSortBtnItem },
};
</script>
  
<style lang="scss" scoped>
.rotated {
    animation: rotate-triangle-right 0.3s forwards;
}

.unrotated {
    animation: rotate-triangle-down 0.3s;
}

@keyframes rotate-triangle-right {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(90deg);
    }
}

@keyframes rotate-triangle-down {
    0% {
        transform: rotate(90deg);
    }

    100% {
        transform: rotate(0deg);
    }
}

.slide-fade-enter-active {
    transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);
}

.slide-fade-leave-active {
    transition: max-height 0.3s cubic-bezier(0, 1, 0, 1);

}

.slide-fade-enter-from,
.slide-fade-leave-to {
    max-height: 0;
    overflow: hidden;


}

.slide-fade-enter-to,
.slide-fade-leave-from {
    overflow: hidden;
    max-height: 1000px;
}
</style>
  