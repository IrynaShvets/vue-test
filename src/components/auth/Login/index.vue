<template>
    <AuthContainer>
        <h1>Login</h1>
        <CustomForm ref="form" @submit.prevent="handleSubmit">
            <CustomInput v-model="formData.email" name="email" :rules="emailRules" />
            <CustomInput v-model="formData.password" name="password" :rules="passwordRules" />
            <SubmitButton type="submit">Click me</SubmitButton>
        </CustomForm>
    </AuthContainer>
</template>

<script>
import CustomForm from "../../shared/form";
import CustomInput from "../../shared/CustomInput";
import SubmitButton from "../../shared/SubmitButton";
import { emailValidation, passwordValidation, isRequired } from "../../../utils/validationRules";
import AuthContainer from "../../auth/AuthContainer";

export default {
    name: 'LoginApp',
    components: {
        CustomForm,
        CustomInput,
        SubmitButton,
        AuthContainer
    },
    data() {
        return {
            formData: {
                email: '',
                password: ''
            }
        }
    },
    computed: {
        rules() {
            return {
                emailValidation,
                passwordValidation,
                isRequired
            }
        },
        emailRules() {
            return [this.rules.emailValidation, this.rules.isRequired]
        },
        passwordRules() {
            return [this.rules.passwordValidation, this.rules.isRequired]
        },
    },
    methods: {
        handleSubmit() {
            const isFormValid = this.$refs.form.validate();
            if (isFormValid) {
                console.log(this.formData)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.login {
    &__form {
        display: block;
        flex-direction: column;
    }

    &__title {
        text-align: center;
    }

    &__input {
        margin-bottom: 20px;
        width: 100%;
    }

    &__btn {
        margin-top: 15px;
        width: 100%;
    }
}
</style>