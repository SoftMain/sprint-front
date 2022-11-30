<template>
    <div class="header_btn_categories">
        <ul class="btn_category_list">
            <li class="btn_category_item" v-for="(category, index) in categories" :key="index">
                {{ category.name }}
                <span :class="'icon-' + category.icon"></span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
data() {
    return {
        isTop: true,
        categories: [
            {name: "CRM-системы", icon: "icon-crm 20px"},
            {name: "Антивирусы", icon: "icon-antivirus 20px"},
            {name: "Браузеры", icon: "icon-browser 20px"},
            {name: "Виртуальная АТС", icon: "icon-virtual-atc 20px"},
            {name: "Видеоконференции", icon: "icon-video-conference 20px"},
            {name: "Графические редакторы", icon: "icon-designers 20px"},
            {name: "Маркетинг", icon: "icon-marketing 20px"},
            {name: "Мессенджеры", icon: "icon-messageres 20px"},
            {name: "Облачные сервисы", icon: "icon-cloud 20px"},
            {name: "Операционные системы", icon: "icon-os 20px"},
            {name: "Редакторы документов", icon: "icon-document-edit 20px"},
            {name: "САПР", icon: "icon-sapr 20px"},
            {name: "Таск-трекеры", icon: "icon-task-tracker 20px"},
            {name: "Электронный документооборот", icon: "icon-document-sync 20px"},
        ]
    }
}}
</script>

<style lang="scss" scoped>

</style>
