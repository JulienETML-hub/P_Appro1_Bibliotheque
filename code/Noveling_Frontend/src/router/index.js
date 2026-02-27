import { createRouter, createWebHistory } from "vue-router";
import Homepage from "@/components/Homepage.vue";
import Login from "@/components/Login.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Home", component: Homepage },
    { path: "/login", name: "Login", component: Login }
  ],
});

export default router;