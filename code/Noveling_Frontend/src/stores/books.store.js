import { createApp } from 'vue'
import App from "@/App.vue";
import { createPinia, defineStore } from "pinia";
import { api } from "@/api/client"; // axios.create({ baseURL, withCredentials:true })

export const useBooksStore = defineStore("books", {
  state: () => ({
    books: [],
    selectedBook: null,
    MostPopularBooks: [],
    genres: [],
    selectedGenres:[],
    authors : [],
    selectedAuthors:[],
    loading: false,
    error: "",
  }),

  getters: {
    count: (state) => state.books.length,
    fiveMostRecentBooks: (state) => {
      return [...state.books]
        .sort((a, b) => String(b.addedOnDate).localeCompare(String(a.addedOnDate)))
        .slice(0, 5)
    },

    isAvailable: (state) => (book) => {
      if (!Array.isArray(book.status)) return true;
      /*
      for (const status of book.status)
      {
        if(String(status.dateFinEmprunt) >= (String(Date.now())))
          {
            return false;
          }  
      };
      */
      for (const status of book.status) {
        if (new Date(status.dateFinEmprunt).getTime() >= Date.now()) {
          return false;
        }
      }
      return true;
    }
  },


  actions: {
    async fetchBooks(syncAll) {
      this.loading = true;
      this.error = "";
      try {
        const res = await api.get("/api/books");
        this.books = res.data.data ?? res.data;
        if (syncAll == true) {
        await this.syncPopularity();
        await this.syncStatus();
        await this.calcAvailability();
        await this.syncGenres();
        await this.syncAuthors();
      }
      } catch (e) {
        this.error = e.response?.data?.message || e.message;
      } finally {
        this.loading = false;
      }

      if (syncAll == true) {
        await this.syncPopularity();
        await this.syncStatus();
        await this.calcAvailability();
        await this.syncGenres();
        await this.syncAuthors();
      }
    },

    async fetchBookById(id) {
      this.loading = true;
      this.error = "";
      try {
        const res = await api.get(`/api/books/${id}`);
        this.selectedBook = res.data.data ?? res.data;
      await this.syncSelectedAuthors();
      await this.syncSelectedGenres();
      await this.syncSelectedPopularity();
      await this.syncSelectedStatus();
      await this.calcSelectedAvailability();
      } catch (e) {
        this.error = e.response?.data?.message || e.message;
      } finally {
        this.loading = false;
      }

    },
    async fetchGenres(){
      this.loading = true;
      this.error = "";
      try {
        const res = await api.get(`/api/genres`);
        this.genres = res.data.data ?? res.data;

      } catch (e) {
        this.error = e.response?.data?.message || e.message;
      } finally {
        this.loading = false;
      }
    },
        async fetchAuthors(){
      this.loading = true;
      this.error = "";
      try {
        const res = await api.get(`/api/authors`);
        this.authors = res.data.data ?? res.data;

      } catch (e) {
        this.error = e.response?.data?.message || e.message;
      } finally {
        this.loading = false;
      }
    },
    async getFiveMostPopularBooks() {
      this.loading = true;
      this.error = "";
      try {
        const res = await api.get(`/api/statusBooks/MostPopular`);
        this.MostPopularBooks = res.data.data ?? res.data;
      } catch (e) {
        this.error = e.response?.data?.message || e.message;
      } finally {
        this.loading = false;
      }
    },
    async syncPopularity() {
      for (const book of this.books) {
        const res = await api.get(`api/statusBooks/popularity/${book.idBook}`);
        book.popularity = res.data.data;
      }
    },
    async syncStatus() {
      for (const book of this.books) {
        const res = await api.get(`api/statusBooks/statusBookByBookId/${book.idBook}`);
        book.status = res.data.data;
      }
    },
    async syncAuthors() {
      for (const book of this.books) {
        const res = await api.get(`api/authors/byBook/${book.idBook}`);
        book.authors = res.data.data;
      }
    },
    async syncGenres() {
      for (const book of this.books) {
        const res = await api.get(`api/genres/byBook/${book.idBook}`);
        book.genres = res.data.data;
      }
    },
    async calcAvailability() {
      for (const book of this.books) {
        book.isAvailable2 = this.isAvailable(book)
      }
    },

    async syncSelectedPopularity() {
      if (!this.selectedBook?.idBook) return;

      const res = await api.get(`/api/statusBooks/popularity/${this.selectedBook.idBook}`);
      this.selectedBook.popularity = res.data.data ?? res.data;
    },

    async syncSelectedStatus() {
      if (!this.selectedBook?.idBook) return;

      const res = await api.get(`/api/statusBooks/statusBookByBookId/${this.selectedBook.idBook}`);
      this.selectedBook.status = res.data.data ?? res.data;
    },

    async syncSelectedAuthors() {
      if (!this.selectedBook?.idBook) return;

      const res = await api.get(`/api/authors/byBook/${this.selectedBook.idBook}`);
      this.selectedBook.authors = res.data.data ?? res.data;
    },

    async syncSelectedGenres() {
      if (!this.selectedBook?.idBook) return;

      const res = await api.get(`/api/genres/byBook/${this.selectedBook.idBook}`);
      this.selectedBook.genres = res.data.data ?? res.data;
    },

    calcSelectedAvailability() {
      if (!this.selectedBook) return;
      this.selectedBook.isAvailable2 = this.isAvailable(this.selectedBook);
    },
  },
  clearSelectedBook() {
    this.selectedBook = null;
  },
},


);