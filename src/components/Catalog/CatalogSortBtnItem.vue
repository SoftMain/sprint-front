<template>
    <div class="sort-btn__dropdown-content-item">
        <input type="radio" name="" id="">
            <a class="btn btn-sort ">
            {{ item }}
        </a>
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
.btn-sort{
    filter: invert(1);
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    margin: 0;
    padding: 0;
}
</style>
  