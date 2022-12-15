import HomeView from "../views/HomeView.vue";
import SadView from "../views/SadView.vue";
import FeelingsView from "../views/FeelingsView.vue";
import HappyView from "../views/HappyView.vue";
import DaysView from "../views/DaysView.vue";
import ExploreView from "../views/ExploreView.vue";
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
      path: "/days",
      name: "days",
      component: DaysView,
    },
    {
      path: "/explore",
      name: "explore",
      component: ExploreView,
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
    {
      path: "/moods/feelings",
      name: "feelings",
      component: FeelingsView,
    },
  ],
});

export default router;