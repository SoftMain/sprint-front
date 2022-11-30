<template>
    <div class="sidebar__variants-item">
        <div class="sidebar__variants-item-icon">
            <span class="icon-checkbox-fill px20"></span>
        </div>
        <div class="sidebar__variants-item-text">
            <p>{{item}}</p>
        </div>
    </div>
</template>
  
<script>

export default {
    props: ["item"],
};
</script>
  
<style lang="scss" scoped>

</style>