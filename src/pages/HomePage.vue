<template>
  <main class="homepage">
    <ContainerApp>
      <ApartmentsFilterForm class="apartment-filter" @submit="filter" />
    </ContainerApp>
    <ContainerApp>
      <p v-if="!filteredApartments.length">Nothing found</p>
      <ApartmentsList v-else :items="filteredApartments">
        <template v-slot:apartment="{ apartment }">
          <ApartmentItem
            :key="apartment.id"
            :id="apartment.id"
            :descr="apartment.descr"
            :rating="apartment.rating"
            :imgSrc="apartment.imgUrl"
            :price="apartment.price"
            class="apartments-list__item"
          />
        </template>
      </ApartmentsList>
    </ContainerApp>
  </main>
</template>

<script>
import ApartmentsList from "../components/apartment/ApartmentsList";
import apartments from "../components/apartment/apartments";
import ApartmentItem from "../components/apartment/ApartmentItem";
import ApartmentsFilterForm from "../components/apartment/ApartmentsFilterForm";
import ContainerApp from "../components/shared/ContainerApp";

export default {
  name: "HomePage",
  components: {
    ApartmentsList,
    ApartmentItem,
    ApartmentsFilterForm,
    ContainerApp,
  },
  data() {
    return {
      text: "",
      apartments,
      filters: {
        city: "",
        price: "",
      },
    };
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },
  methods: {
    filter({ city, price }) {
      this.filters.city = city;
      this.filters.price = price;
    },
    filterByCityName(apartments) {
      if (!this.filters.city) return apartments;
      return apartments.filter((apartment) => {
        return apartment.location.city === this.filters.city;
      });
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;
      return apartments.filter((apartment) => {
        return apartment.price >= this.filters.price;
      });
    },
  },
};
</script>

<style module>
.homepage {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 120px;
}
</style>
