import HomeView from "../views/HomeView.vue";
import SadView from "../views/SadView.vue";
import HappyView from "../views/HappyView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/moods/sad",
      name: "sad",
      component: SadView,
    },
    {
      path: "/moods/happy",
      name: "happy",
      component: HappyView,
    },
  ],
});

export default router;