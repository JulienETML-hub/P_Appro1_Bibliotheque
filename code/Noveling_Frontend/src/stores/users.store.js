import { defineStore } from "pinia";
import { api } from "@/api/client"; // axios instance: baseURL + withCredentials:true

export const useUsersStore = defineStore("users", {
  state: () => ({
    idUser: null,
    pseudo: null,
    email: null,
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

    logoutLocal() {
      // (si tu as une route logout, on pourra faire une action logout() qui appelle l’API)
      this.idUser = null;
      this.pseudo = null;
      this.email = null;
        //this.token = null;

      this.error = "";
    },
  },
});