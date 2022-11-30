<template>
    <div class="comment-wrapper">
        <div class="slider-area">
                <Transition v-for="comment in comments" :name="name" mode="in-out">
                <div v-show="comment.id==counter" class="comment wh">
                <div class="comment-reviewer">
                  <div class="comment-reviewer-avatar"><img :src="`/img/comment/${comment.id}.png`" alt=""></div>
                  <div class="comment-reviewer-data">
                    <div class="comment-reviewer-data-nick">
                      <h4>{{comment.name}}</h4>
                    </div>
                    <div class="comment-reviewer-data-post text-small">{{comment.company}}</div>
                  </div>

                </div>
                <div :style="{width:property+'px'}" class="comment-reviewerinfo">{{comment.text}}</div>
              </div>
            </Transition>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["counter","name"],
        data(){
            return{
                property:null,
                comments:[
                    {
                        id:0,
                        name:"Иван Фурсов",
                        company:"Сбербанк",
                        text:"Благодарю сайт «SoftMain» за понимание, профессионализм и высокое качество работы."
                    },
                    {
                        id:1,
                        name:"кто-то...",
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
                        id:3,
                        name:"Иван Фурсов",
                        company:"Сбербанк",
                        text:"Благодарю сайт «SoftMain» за понимание, профессионализм и высокое качество работы."
                    },
                    {
                        id:4,
                        name:"Иван Фурсов",
                        company:"Сбербанк",
                        text:"Благодарю сайт «SoftMain» за понимание, профессионализм и высокое качество работы."
                    },
                    {
                        id:5,
                        name:"Иван Фурсов",
                        company:"Сбербанк",
                        text:"Благодарю сайт «SoftMain» за понимание, профессионализм и высокое качество работы."
                    }
                ]
            }
        },
        methods:{
            getprop(){
                let el= document.querySelector(".comment-wrapper");
                this.property = window.getComputedStyle(el).getPropertyValue("width");
                this.property=parseFloat(this.property)-110;
            }
        },
        mounted(){
            // this.getprop();
            window.addEventListener('resize', this.getprop());
        }
        
    }
</script>

<style lang="scss" scoped>
    .forward-enter-active {
        animation: forwardInAnimation .4s ease-in-out;
    }

    .forward-leave-active {
        animation: forwardOutAnimation .4s ease-in-out;
    }

    @keyframes forwardInAnimation {
        from {
            transform: translateX(calc(100% + 50px));
        }
        to {
            transform: translateX(calc(-100% - 50px));
        }
    }

    @keyframes forwardOutAnimation {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(calc(-100% - 50px));
        }
    }
    

    .backward-enter-active {
        animation: backwardInAnimation .4s ease-in-out;
    }

    .backward-leave-active {
        animation: backwardOutAnimation .4s ease-in-out;
    }

    @keyframes backwardInAnimation {
        from {
            transform: translateX(calc(-100% - 50px));
        }
        to {
            transform: translateX(0);
        }
    }

    @keyframes backwardOutAnimation {
        from {
            transform: translateX(calc(-100% - 50px));
        }
        to {
            transform: translateX(calc(+100% + 50px));
        }
    }
</style>