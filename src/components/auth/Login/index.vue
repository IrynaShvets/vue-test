<template>
  <AuthContainer class="login">
    <MainTitle class="login__title">Login</MainTitle>
    <CustomForm class="login__form" ref="form" @submit.prevent="handleSubmit">
      <CustomInput
        autocomplete="username"
        placeholder="Email"
        v-model="formData.email"
        name="email"
        :rules="emailRules"
        class="login__input"
      />
      <CustomInput
        type="password"
        autocomplete="current-password"
        placeholder="Password"
        v-model="formData.password"
        name="password"
        :rules="passwordRules"
        class="login__input"
      />
      <SubmitButton 
        class="login__btn" 
        type="submit"
        >Exit</SubmitButton>
    </CustomForm>
  </AuthContainer>
</template>

<script>
import CustomForm from "../../shared/form";
import CustomInput from "../../shared/CustomInput";
import SubmitButton from "../../shared/SubmitButton";
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "../../../utils/validationRules";
import AuthContainer from "../../auth/AuthContainer";
import MainTitle from "../../shared/MainTitle";
import { loginUser } from "../../../services/auth.service";

export default {
  name: "LoginApp",
  components: {
    CustomForm,
    CustomInput,
    SubmitButton,
    AuthContainer,
    MainTitle,
  },
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    rules() {
      return {
        emailValidation,
        passwordValidation,
        isRequired,
      };
    },
    emailRules() {
      return [this.rules.emailValidation, this.rules.isRequired];
    },
    passwordRules() {
      return [this.rules.isRequired];
    },
  },
  methods: {
    async handleSubmit() {
      const isFormValid = this.$refs.form.validate();
      if (isFormValid) {
        try {
            const { data } = await loginUser(this.formData);
        console.log(data);
        } catch (error) {
            console.error(error)
        }
      }
    },
  },
};
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

  login__input {
   margin-bottom: 20px;
    width: 100%;
  }

  &__btn {
    margin-top: 15px;
    width: 100%;
  }
}
</style>
