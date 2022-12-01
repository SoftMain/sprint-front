<template>
    <div class="info__star-rating">
        <span  v-for="index in starLimit" :key="index" class="icon-star-filled px14"> </span>
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
            starLimit: {
                type: Number,
                default: 5 
            }
        }   
    }
</script>

<style lang="scss" scoped>
    .info__star-rating {
    display: flex;
    flex-direction: row;
    // justify-content: center;
    align-items: center;
    gap: 4px;

    width: 137px;
    height: 20px;
}

</style>