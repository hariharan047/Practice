import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginPage from "../views/LoginPage.vue";

const routes = [
  {
    path: "/home-page",
    name: "homeView",
    component: HomeView,
  },
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
