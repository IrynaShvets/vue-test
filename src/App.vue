<template>
  <div :id="$style.app">
   <ContainerApartments>
    <ApartmentsFilterForm 
    class="apartment-filter"
      @submit="filter"
    />
   </ContainerApartments>
   <p v-if="!filteredApartments.length">Нічого не знайдено</p>
    <ApartmentsList v-else :items="filteredApartments">
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
import ContainerApartments from "./components/shared/ContainerApartments";

export default {
  name: "App",
  components: {
    ApartmentsList,
    ApartmentItem,
    ApartmentsFilterForm,
    ContainerApartments
  },
  data() {
    return {
      text: '',
      apartments,
      filters: {
        city: '',
        price: ''
      }
    };
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments))
    }
  },
  methods: {
    filter({city, price}) {
      this.filters.city = city
      this.filters.price = price
    },
    filterByCityName(apartments) {
      if (!this.filters.city) return apartments;
      return apartments.filter(apartment => {
        return apartment.location.city === this.filters.city
      })
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;
      return apartments.filter(apartment => {
        return apartment.price >= this.filters.price
      })
    }
  }
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
