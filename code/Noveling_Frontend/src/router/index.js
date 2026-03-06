import { createRouter, createWebHistory } from "vue-router";
import Homepage from "@/components/Homepage.vue";
import Login from "@/components/Login.vue";
import Profile from "@/components/Profile.vue";
import Catalogue from "@/components/Catalogue.vue";
import BookDetail from "@/components/BookDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Home", component: Homepage },
    { path: "/login", name: "Login", component: Login },
    { path: "/profile", name: "Profile", component: Profile },
    { path: "/catalogue", name: "Catalogue", component: Catalogue },
    { path: "/BookDetail/:id", name: "BookDetail", component: BookDetail }

  ],
});

export default router;