import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LifeCycle from "../views/LifeCycle.vue";
import GetPosts from "../views/GetPosts.vue";
import WatchersView from "../views/watchersView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/life-cycle",
    name: "lifeCycle",
    component: LifeCycle,
  },
  {
    path: "/get-posts",
    name: "getPosts",
    component: GetPosts,
  },
  {
    path: "/watchers-view",
    name: "watchersView",
    component: WatchersView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
