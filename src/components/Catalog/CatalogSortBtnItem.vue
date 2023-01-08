<template>
    <div class="sort-btn__dropdown-content-item">  
        <input type="radio"
        :id="item"
        @click="e => e.target.classList.toggle('active')">
        <!-- для тех кто будет допиливать id в radio и for в label должны совпадать и конечно быть уникальными -->
        <label :for="item" class="text-base">
            {{ item }}
        </label>
    </div>

</template>
  
<script>
export default {
    props: ["item"],
    data() {
        return {};
    },
};
</script>
  
<style lang="scss" scoped>
</style>
  