<template>
    <div v-for="post in posts" class="category-container">
            <div class="category-container-logo"><img :src="post.img" alt="">
            </div>
            <div class="category-container-main">
              <div class="category-container-main-title">
                <div class="category-container-main-title-name">
                  <h6>{{post.title}}</h6>
                </div>
                <a :href="post.link" class="category-container-main-title-button">
                  <span class="icon-chevron-r px16"></span>
                </a>
              </div>
              <div class="category-container-main-description base">
                {{post.text}}
              </div>
            </div>
          </div>
</template>

<script>
    export default {
        data(){
          return{
            posts:[{
              img: "../assets/img/productlogo/lunacy.svg",
              link:"/error",
              text:"пипяо",
              title:"Хуй"
            },
            {
              img: "../assets/img/productlogo/lunacy.svg",
              link:"/error",
              text:"пипяо",
              title:"Хуй"
            },
            {
              img: "../assets/img/productlogo/lunacy.svg",
              link:"/error",
              text:"пипяо",
              title:"Хуй"
            },
            {
              img: "./assets/img/productlogo/lunacy.svg",
              link:"/error",
              text:"пипяо",
              title:"Хуй"
            }
            ]
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>