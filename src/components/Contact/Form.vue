<template>
    <section>
        <div class="form-callback">
            <form @submit.prevent="submit" novalidate="true">
                <div class="error-input">
                    <p v-if="errors.length">
                        <b>Пожалуйста исправьте указанные ошибки:</b>
                    <ul>
                        <li v-for="error in errors">{{ error }}</li>
                    </ul>
                    </p>
                </div>

                <div class="form">
                    <div class="form-nameapp">
                        <input class="nameapp-area" type="text" v-model="product" name="nameapp"
                            placeholder="Наименование ПО" />
                        <span class="icon-edit 20px input-left-icon"></span>
                    </div>
                    <div class="form-email">
                        <input class="mail-area" type="email" v-model="email" name="mail" placeholder="Ваш E-mail" />
                        <span class="icon-mail 20px input-left-icon"></span>
                    </div>
                    <div class="form-infoproduct">
                        <textarea placeholder="Краткая информация о продукте" name="" v-model="infoproduct"
                            class="form-infoproduct-textarea" cols="30" rows="10"></textarea>
                    </div>
                    <div class="btn-send">
                        <button class="btn-primary btn btn-form">Отправить</button>
                        <Modal :show="isModalVisible" @close-modal="closeModal" />

                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script >
import Modal from '../Modal.vue'
export default {
    data() {
        return {
            isModalVisible: false,
            errors: [],
            product: '',
            email: '',
            infoproduct: ''
        }
    },
    components: { Modal },
    methods: {
        async submit() {
            try {
                if (!this.checkForm()) return;
                this.showModal();
                this.email = "";
                this.product = "";
                this.infoproduct = "";
            }
            catch (err) {
                console.error('Ошибка:', err);
            }
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        showModal() {
            this.isModalVisible = true;
            document.body.classList.add("modal-open");
        },
        closeModal() {
            this.isModalVisible = false;
            document.body.classList.remove("modal-open");
        },
        checkForm() {
            this.errors = [];

            if (!this.product) {
                this.errors.push("Укажите название ПО.");
            }
            if (!this.email) {
                this.errors.push("Укажите электронную почту.");
            } else if (!this.validEmail(this.email)) {
                this.errors.push("Укажите корректный адрес электронной почты.");
            }
            if (!this.infoproduct) {
                this.errors.push("Укажите краткую информация о продукте.");
            }
            if (this.errors.length > 0) {
                return false;
            }
            return true;

        }
    }
}
</script>

<style lang="scss" scoped>

</style>