<template>
    <form class="form" @submit.prevent="handleSubmit">
      <CustomSelect :items="['apple', 'kiwi', 'banana']"  class="form__select" />
      <CustomInput
        
       
      />
      <SubmitButton class="form__submit" type="submit">
        Підбір житла
      </SubmitButton>
    </form>
  </template>
   <!-- :rules="rules" v-model="city"
    v-model="price"
        placeholder="Цена, от"
        error-message="Не должно быть пустым"-->
  <script>
  import CustomSelect from '../shared/CustomSelect';
  import CustomInput from '../shared/CustomInput';
  import SubmitButton from '../shared/SubmitButton';


  export default {
    name: "ApartmentsFilterForm",
    components: {
      CustomSelect,
      CustomInput,
      SubmitButton,
    },
    data() {
      return {
        price: '',
        city: '',
      };
    },
     
    methods: {
      handleSubmit() {
        this.$emit('submit', 'form submitted');
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .form {
    display: flex;
    &__select {
      margin-right: 30px;
    }
    &__submit {
      margin-left: auto;
    }
  }
  </style>