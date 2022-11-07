<template>
  <div :id="$style.app">
    <ApartmentItem 
    :descr="apartment.descr"
    :price="apartment.price"
    :rating="apartment.rating"
    imgSrc="https://i.gyazo.com/dcd504b0c40bce3b6ebee8221837b066.jpg"

    />
  </div>
</template>

<script>
import ApartmentItem from './components/apartment/ApartmentItem';

export default {
  name: "App",
  components: {
    ApartmentItem
  },
  data() {
    return {
      apartment: {
        id: '5f689a2c09b16000e9a2f47b',
        title: 'Delectus et iste.',
        imgUrl: '../public/img/apartments/apartment-1.jpg',
        descr:
          'Debitis similique unde et eligendi sapiente in iure blanditiis distinctio. Cum nihil temporibus qui quam aut. Nesciunt qui eveniet eum quam voluptate numquam.',
        rating: 3,
        price: 1667,
        location: {
          city: 'Dnipro',
        },
        owner: {
          name: 'Bobbi',
          phone: '582-740-2926',
          email: 'Pete_Carter53@hotmail.com',
        },
      }
    }
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
