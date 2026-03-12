import { defineStore } from "pinia";
import { api } from "@/api/client"; // axios instance: baseURL + withCredentials:true
import { useRouter } from 'vue-router';

export const useUsersStore = defineStore("users", {
  state: () => ({
    idUser: null,
    pseudo: null,
    email: null,
    isAdmin: null,
    //token: null,
    loading: false,
    error: "",
  }),

  getters: {
    isLoggedIn: (state) => !!state.idUser,
  },

  actions: {
    async login(email, password) {
      this.loading = true;
      this.error = "";

      try {
        const response = await api.post("/api/users/login", {
          email: email.trim(),
          password: password
        });

        this.idUser = response.data.data.idUser;
        this.pseudo = response.data.data.pseudo;
        this.email = response.data.data.mail;
        //this.token = response.data.data.token;
        return response.data;
      } catch (e) {
        this.error = e.response.message || e.message;
      } finally {
        this.loading = false;
      }
    },
    async FetchMe() {
      const response = await api.get("/api/users/me");
      this.idUser = response.data.data.idUser;
      this.pseudo = response.data.data.pseudo;
      this.email = response.data.data.mail;
      this.isAdmin = response.data.data.isAdmin;
    },
    async register(pseudo, email, password) {
      this.loading = true;
      this.error = "";

      try {
        const response = await api.post("/api/users/register", {
          pseudo: pseudo.trim(),
          email: email.trim(),
          password: password
        });

        this.idUser = response.data.data.idUser;
        this.pseudo = response.data.data.pseudo;
        this.email = response.data.data.mail;
        return response.data;
      } catch (e) {
        this.error = e.response.message || e.message;
      } finally {
        this.loading = false;
      }
    },

    async logoutLocal() {
      const router = useRouter()
      await api.post("/api/users/logout");
      this.idUser = null;
      this.pseudo = null;
      this.email = null;
      
      
      this.error = "";
    },
  },
});