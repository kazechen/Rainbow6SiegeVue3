import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
import Novice from "./views/Novice.vue";
import Intro from "./views/Intro.vue";
import External from "./views/External.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/novice", name: "Novice", component: Novice },
  { path: "/intro", name: "Intro", component: Intro },
  { path: "/external", name: "External", component: External },
];

const router = createRouter({
  history: createWebHashHistory(), // 因為要直接放在Github上直接Demo，所以選擇此模式
  // history: createWebHistory(),
  routes,
});

export default router;
