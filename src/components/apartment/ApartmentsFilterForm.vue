<template>
  <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect :items="cities" v-model="city" class="form__select" />
    <CustomInput v-model="price" placeholder="Ціна, від" />
    <SubmitButton class="form__submit" type="submit">
      Підбір житла
    </SubmitButton>
  </form>
</template>

<script>
import CustomSelect from "../shared/CustomSelect";
import CustomInput from "../shared/CustomInput";
import SubmitButton from "../shared/SubmitButton";

export default {
  name: "ApartmentsFilterForm",
  components: {
    CustomSelect,
    CustomInput,
    SubmitButton,
  },
  data() {
    return {
      city: '',
      price: '',
    };
  },
  computed: {
    cities() {
      return [
        { value: "", label: "Місто", selected: true },
        "Kyiv",
        "Odessa",
        "Poltava",
        "Kharkiv",
        "Dnipro",
        "Lviv",
        "Kherson",
        "Mariupol",
      ];
    },
  },
  methods: {
    handleSubmit() {
      this.$emit("submit", {
        city: this.city,
        price: this.price,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  margin-bottom: 30px;
  &__select {
    margin-right: 30px;
  }
  &__submit {
    margin-left: auto;
  }
}
</style>
