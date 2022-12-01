<template>
    <div class="header_btn_categories">
        <div class="btn_category_list">
            <div class="btn_category_item" v-for="(category, index) in categories" :key="index">
                <span :class="'icon-' + category.icon + ' px20 categ-icon'"></span>
                {{ category.name }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
data() {
    return {
        isTop: true,
        categories: [
            {name: "CRM-системы", icon: "crm"},
            {name: "Антивирусы", icon: "antivirus"},
            {name: "Браузеры", icon: "browser"},
            {name: "Виртуальная АТС", icon: "virtual-atc"},
            {name: "Видеоконференции", icon: "video-conference"},
            {name: "Графические редакторы", icon: "designers"},
            {name: "Маркетинг", icon: "marketing"},
            {name: "Мессенджеры", icon: "messageres"},
            {name: "Облачные сервисы", icon: "cloud"},
            {name: "Операционные системы", icon: "os"},
            {name: "Редакторы документов", icon: "document-edit"},
            {name: "САПР", icon: "sapr 20px"},
            {name: "Таск-трекеры", icon: "task-tracker"},
            {name: "Электронный документооборот", icon: "document-sync"},
        ]
    }
}}
</script>

<style lang="scss" scoped>

</style>
