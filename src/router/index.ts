import { createRouter, createWebHistory } from "vue-router";
import NotFound from "../components/NotFound.vue";
import Signup from "../components/Signup.vue";

const routerHistory = createWebHistory();
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/signup",
      component: Signup,
      name: "Signup",
    },
    {
      path: "/NotFound",
      component: NotFound,
      name: "NotFound",
    },
  ],
});
export default router;
