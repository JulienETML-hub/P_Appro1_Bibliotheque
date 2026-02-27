import { createApp } from 'vue'
import App from "@/App.vue";
import { createPinia, defineStore } from "pinia";
import { api } from "@/api/client"; // axios.create({ baseURL, withCredentials:true })

export const useBooksStore = defineStore("books", {
  state: () => ({
    books: [],
    selectedBook: null,
    loading: false,
    error: "",
  }),

  getters: {
    count: (state) => state.books.length,
  },

  actions: {
    async fetchBooks() {
      this.loading = true;
      this.error = "";
      try {
        const res = await api.get("/api/books");
        // adapte selon ton format backend: res.data.data ou res.data
        this.books = res.data.data ?? res.data;
      } catch (e) {
        this.error = e.response?.data?.message || e.message;
      } finally {
        this.loading = false;
      }
    },

    async fetchBookById(id) {
      this.loading = true;
      this.error = "";
      try {
        const res = await api.get(`/api/books/${id}`);
        this.selectedBook = res.data.data ?? res.data;
      } catch (e) {
        this.error = e.response?.data?.message || e.message;
      } finally {
        this.loading = false;
      }
    },

    clearSelectedBook() {
      this.selectedBook = null;
    },
  },


});