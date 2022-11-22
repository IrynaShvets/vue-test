<template>
  <div :id="$style.app">
    <div class="content">
      <HeaderApp />
      <router-view />
    </div>
    <FooterApp />
  </div>
</template>

<script>
import FooterApp from "./components/FooterApp";
import HeaderApp from "./components/HeaderApp";

export default {
  name: "App",
  components: {
    FooterApp,
    HeaderApp
  },
};
</script>

<style module>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 120px;
}

.content {
  flex-grow: 1;
}
</style>
