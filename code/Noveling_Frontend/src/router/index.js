import { createRouter, createWebHistory } from "vue-router";
import Homepage from "@/components/Homepage.vue";
import Login from "@/components/Login.vue";
import Profile from "@/components/Profile.vue";
import Catalogue from "@/components/Catalogue.vue";
import BookDetail from "@/components/BookDetail.vue";
import { useUsersStore } from "@/stores/users.store";
import Register from "@/components/Register.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Home", component: Homepage, meta: { requiresAuth: true } },
    { path: "/login", name: "Login", component: Login},
    { path: "/register", name: "Register", component: Register },
    { path: "/profile", name: "Profile", component: Profile, meta: { requiresAuth: true } },
    { path: "/catalogue", name: "Catalogue", component: Catalogue, meta: { requiresAuth: true }  },
    { path: "/BookDetail/:id", name: "BookDetail", component: BookDetail, meta: { requiresAuth: true }  }

  ],
});

router.beforeEach(async (to, from, next) => {
  const userStore = useUsersStore();

  // Si la route nécessite une auth
  if (to.meta.requiresAuth) {
    try {
      // Vérifie si on est connecté
      if (!userStore.idUser) {
        await userStore.FetchMe(); // appelle ton API /me
      }
      next();
    } catch (error) {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;