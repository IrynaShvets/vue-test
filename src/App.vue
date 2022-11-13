<template>
  <div :id="$style.app">
   
    <ApartmentsFilterForm />
    <ApartmentsList :items="apartments">
      <template v-slot:title> New title </template>
      <template v-slot:apartment="{apartment}">
        <ApartmentItem
        :key="apartment.id"
        :descr="apartment.descr"
        :rating="apartment.rating"
        :imgSrc="apartment.imgUrl"
        :price="apartment.price"
        class="apartments-list__item"
      />
      </template>
    </ApartmentsList>
  </div>
</template>

<script>
import ApartmentsList from "./components/apartment/ApartmentsList";
import apartments from "./components/apartment/apartments";
import ApartmentItem from "./components/apartment/ApartmentItem";
import ApartmentsFilterForm from "./components/apartment/ApartmentsFilterForm";


export default {
  name: "App",
  components: {
    ApartmentsList,
    ApartmentItem,
    ApartmentsFilterForm
  },
  data() {
    return {
      text: '',
      apartments,
    };
  },
};
</script>

<style module>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
