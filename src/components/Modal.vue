<template>
    <div v-if="show" class="modal-shadow" @click.self="closeModal">
        <div class="modal">
            <slot name="title">
                <h5 class="modal-title">Ваша заявка была отправлена!</h5>
            </slot>
            <slot name="body">
                <div class="modal-content text-lg">
                    Мы свяжемся с вами для уточнения деталей.
                </div>
            </slot>
            <slot name="footer">
                <div class="modal-footer">
                    <button class="modal-footer__button btn-primary btn btn-modal" @click="closeModal">
                        <p>Закрыть</p>
                        <span class="icon-close px20"></span>
                    </button>
                </div>
            </slot>
        </div>
    </div>
</template>
 
<script>
export default {
    name: "ModalWindow",
    props: ['show'],
    data() {
        return {

        }
    },
    methods: {
        closeModal() {
            this.$emit('close-modal')
        }
    }
}
</script>
 
<style scoped lang="scss">
.modal-shadow {

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 100%;
    z-index: 2;
    width: 100%;
    background: rgba(0, 0, 0, 0.39);
    box-shadow: 0px 5px 18px rgba(0, 0, 0, 0.2);
}

.modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
    border-radius: 12px;
    padding: 16px 30px;
    align-items: center;
    width: 440px;
    max-height: 156px;
    position: fixed;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 5px 18px rgba(0, 0, 0, 0.2);
}

.modal-title {
    padding-bottom: 8px;
}

.modal-content {
    padding-bottom: 24px;
}

.btn-modal {
    width: 126px;
    height: 40px;
}
</style>