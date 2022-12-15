import TaskView from "../views/TaskView.vue";
import SadView from "../views/SadView.vue";
import FeelingsView from "../views/FeelingsView.vue";
import WeCanHelpView from "../views/WeCanHelpView.vue";
import HappyView from "../views/HappyView.vue";
import DaysView from "../views/DaysView.vue";
import ExploreView from "../views/ExploreView.vue";
import GetHelpView from "../views/GetHelpView.vue";
import BlueSkyViewWelcome from "../views/BlueSkyViewWelcome.vue"
import BlueSkyViewTwo from "../views/BlueSkyViewTwo.vue"
import BlueSkyViewThree from "../views/BlueSkyViewThree.vue"
import BlueSkyViewFour from "../views/BlueSkyViewFour.vue"
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/tasks",
      name: "tasks",
      component: TaskView,
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
    {
      path: "/moods/wecanhelp",
      name: "wecanhelp",
      component: WeCanHelpView,
    },
    {
      path: "/gethelp",
      name: "gethelp",
      component: GetHelpView
    },
    {
      path: "/",
      name: "welcome",
      component: BlueSkyViewWelcome
    },
    {
      path: "/welcome/2",
      name: "welcomeTwo",
      component: BlueSkyViewTwo
    },
    {
      path: "/welcome/3",
      name: "welcomeThree",
      component: BlueSkyViewThree
    },
    {
      path: "/welcome/4",
      name: "welcomeFour",
      component: BlueSkyViewFour
    },
  ],
});

export default router;