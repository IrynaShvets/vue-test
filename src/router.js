import HomePage from "./pages/HomePage";
import ApartmentPage from "./pages/ApartmentPage";

import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: "/",
    name: "homepage",
    component: HomePage,
  },
  {
    path: "/apartment",
    name: "apartment",
    component: ApartmentPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

/* const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [{
    path: "/",
    component: { template: "<div>Home</div>"}, 
  }, {
    path: "/cv",
    component: { template: "<div>CV</div>"}
  }]
}) */

/* const routes = [
    {
        path: '/foo',
        components: Foo
    },
    {
        path: '/bar',
        components: Bar
    }
]

const router = new VueRouter({routes});

export default router;
 */
