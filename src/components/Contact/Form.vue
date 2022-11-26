<template>
    <section>
        <div class="form-callback">
            <form @submit.prevent="submit">
                <div class=" form container">
                    <div class="form-nameapp">
                        <input class="nameapp-area" type="text" v-model="form.product" name="nameapp"
                            placeholder="Наименование ПО" />
                        <span class="icon-edit 20px input-left-icon"></span>
                    </div>
                    <div class="form-email">
                        <input class="mail-area" type="email" v-model="form.email" name="mail"
                            placeholder="Ваш E-mail" />
                        <span class="icon-mail 20px input-left-icon"></span>
                    </div>
                    <div class="form-infoproduct">
                        <textarea placeholder="Краткая информация о продукте" name="" v-model="form.infoproduct"
                            class="form-infoproduct-textarea" cols="30" rows="10"></textarea>
                    </div>
                    <div class="btn-send">
                        <button class="btn-primary btn btn-form">Отправить</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            form: {
                product: '',
                email: '',
                infoproduct: ''
            }
        }
    },
    methods: {
        async submit() {
            try {
                console.log(this.form)
                this.form.email = "";
                this.form.product = "";
                this.form.infoproduct = "";
            }
            catch (err) {
                console.error('Ошибка:', err);
            }
        }
    }
}


</script>

<style lang="scss" scoped>

</style>
