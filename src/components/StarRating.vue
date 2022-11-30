<template>
    <div class="star-rating">
        <span  v-for="index in starLimit" :key="index" class="star"> </span>
    </div>
</template>

<script>
    export default {
        name:'StarRating',
        props:{
            rating: {
                type: Number,
                default: 0
            },
            starRating: {
                type: Number,
                default: 5 
            }
        }   
    }
</script>

<style lang="scss" scoped>

</style>