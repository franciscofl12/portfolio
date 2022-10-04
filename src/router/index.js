import { createRouter, createWebHistory } from "vue-router";
import NotFound from "../views/NotFound.vue";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: Home,
  },
  {
    path: "/home",
    name: "home",
    redirect: "/",
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to) return { top: 0, behavior: "smooth" };
  },
});

export default router;
