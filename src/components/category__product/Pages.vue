<template>
    <ul class="blockcategory-navmenu-navigation">
            <li v-for="page in pages"><span :class="page.icon"></span>
              <button @click="$emit('cur', page.id),filter()" :class="{active: isActive}"><h6>{{page.text}}</h6></button>
            </li>
          </ul>
</template>

<script>
    export default {
                props:{
                  pages:{
                    type:Array,
                    required:true
                  }
                },
                emits:['cur'],
                data(){
                  return{
                    isActive: false
                  }
                },
                methods:{
                  filter(){
                    this.isActive = !this.isActive;
                  }
                }
            }

</script>

<style lang="scss" scoped>

</style>