<template>
    <div class="comment-wrapper">
        <div :style="{'margin-left':'-'+(100*currentSlide)+'%'}" class="slider-area">
            <div v-for="comment of comments" class="comment wh">
                <div class="comment-reviewer">
                  <div class="comment-reviewer-avatar"><img :src="`/img/comment/${comment.id}.png`" alt=""></div>
                  <div class="comment-reviewer-data">
                    <div class="comment-reviewer-data-nick">
                      <h4>{{comment.name}}</h4>
                    </div>
                    <div class="comment-reviewer-data-post text-small">{{comment.company}}</div>
                  </div>

                </div>
                <div class="comment-reviewerinfo">{{comment.text}}</div>
              </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                props: {
                    currentSlide:{
                    type: Number,
                    required: true
                    }
                },
                comments:[
                    {
                        id:1,
                        name:"Иван Фурсов",
                        company:"Сбербанк",
                        text:"Благодарю сайт «SoftMain» за понимание, профессионализм и высокое качество работы."
                    },
                    {
                        id:2,
                        name:"кто-то...",
                        company:"Сбербанк",
                        text:"Благодарю сайт «SoftMain» за понимание, профессионализм и высокое качество работы."
                    },
                    {
                        id:3,
                        name:"Иван Фурсов",
                        company:"Сбербанк",
                        text:"Благодарю сайт «SoftMain» за понимание, профессионализм и высокое качество работы."
                    },
                    {
                        id:2,
                        name:"Иван Фурсов",
                        company:"Сбербанк",
                        text:"Благодарю сайт «SoftMain» за понимание, профессионализм и высокое качество работы."
                    },
                    {
                        id:2,
                        name:"Иван Фурсов",
                        company:"Сбербанк",
                        text:"Благодарю сайт «SoftMain» за понимание, профессионализм и высокое качество работы."
                    },
                    {
                        id:2,
                        name:"Иван Фурсов",
                        company:"Сбербанк",
                        text:"Благодарю сайт «SoftMain» за понимание, профессионализм и высокое качество работы."
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>