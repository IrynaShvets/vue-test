<template>
  <AuthContainer class="registration">
    <MainTitle class="registration__title">Registration</MainTitle>
    <CustomForm ref="form" class="registration__form"  @submit.prevent="handleSubmit">
      <CustomInput
        v-model="formData.name"
        autocomplete="username"
        placeholder="Name"
        name="name"
        :rules="nameRules"
        class="registration__input"
      />
      <CustomInput
        v-model="formData.email"
        autocomplete="email"
        placeholder="Email"
        name="email"
        :rules="emailRules"
        class="registration__input"
      />
      <CustomInput
        v-model="formData.password"
        type="password"
        autocomplete="current-password"
        placeholder="Password"
        name="password"
        :rules="passwordRules"
        class="registration__input"
      />
      <CustomInput
        v-model="formData.confirmPassword"
        type="password"
        autocomplete="current-password"
        placeholder="Confirm password"
        name="password"
        :rules="confirmPassword"
        class="registration__input"
      />
      <SubmitButton class="registration__btn" type="submit">Exit</SubmitButton>
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
import { registerUser } from "../../../services/auth.service";

export default {
  name: "RegistrationApp",
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
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
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
    nameRules() {
      return [this.rules.isRequired];
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
    confirmPassword() {
      return [
        (val) => ({
          hasPassed: val === this.formData.password,
          message: "Passwords do not match",
        }),
      ];
    },
  },
  methods: {
    async handleSubmit() {
        const {form} = this.$refs;
      const isFormValid = form.validate();
      const {name, email, password} = this.formData;
      if (isFormValid) {
        try {
            const { data } = await registerUser({name, email, password});
        console.log(data);
        form.reset()
        } catch (error) {
            console.error(error)
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.registration {
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
