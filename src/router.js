import HomePage from "./pages/HomePage";
import ApartmentPage from "./pages/ApartmentPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "homepage",
    component: HomePage,
  },
  {
    path: "/apartments/:id",
    name: "apartment",
    component: ApartmentPage,
  },
  {
    path: "/login",
    name: "login-page",
    component: LoginPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "error-page",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
