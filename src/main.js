import { createApp } from "vue";
import App from "./App.vue";
import "./assets/scss/index.scss";
import router from "./router";

createApp(App).use(router).mount("#app");

/* Vue.use(VueRouter);

createApp(App).mount("#app");
 */