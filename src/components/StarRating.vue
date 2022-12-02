<template>
    <div class="info__star-rating">
        <span  v-for="index in starLimit" :key="index" class="icon-star px14"> </span>
        <div class="star-filled" :style="ratingWidthStyle"> 
            <span  v-for="index in starLimit" :key="index" class="icon-star-filled px14"> </span>
        </div>
        <div class="product__raiting-text">(*)</div>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity';

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
        },  
        computed: {
            ratingWith() {
                return this.rating / this.starLimit * 100
            },
            ratingWidthStyle() {
                return `width: ${this.ratingWidthStyle}%;`
            }
 
        }          
    }
        
</script>

<style lang="scss" scoped>
    .info__star-rating {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 2px;

    
    height: 20px;
}
.star-filled {
    display: inline-flex;
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
}

</style>