import { defineStore } from 'pinia'
import { api } from '@/api/client'

export const useStatusBookStore = defineStore('statusBook', {

  state: () => ({
    statusBooks: [],
    isLoading: false,
    error: null
  }),

  // ===============================
  // GETTERS
  // ===============================
  getters: {

    //  Emprunts encore actifs (non expirés)
    activeBorrowings: (state) => {
      const now = new Date()

      return state.statusBooks.filter(sb =>
        new Date(sb.dateFinEmprunt) > now
      )
    },

    //  Vérifie si un livre est actuellement emprunté
    isBookBorrowed: (state) => (idBook) => {
      const now = new Date()

      return state.statusBooks.some(sb =>
        sb.idBook === idBook &&
        new Date(sb.dateFinEmprunt) > now
      )
    },

    //  Historique complet d’un livre pour l’utilisateur
    borrowHistoryByBook: (state) => (idBook) => {
      return state.statusBooks.filter(sb =>
        sb.idBook === idBook
      )
    }

  },

  actions: {

    // Récupérer les emprunts du user connecté
    async fetchMyBorrowings(idUser) {
      try {
        this.isLoading = true
        const { data } = await api.get(`/api/StatusBooks/ByUserId/${idUser}`)
        this.statusBooks = data.data
      } catch (err) {
        this.error = err
      } finally {
        this.isLoading = false
      }
    },

    // Emprunter un livre
    // On définit automatiquement une date de fin
    async borrowBook(idUser, idBook , durationInDays = 14) {

      try {

        const now = new Date()
        const endDate = new Date()
        endDate.setDate(now.getDate() + durationInDays)

        const { data } = await api.post('/api/statusBooks/create', {
          idUser: idUser,
          idBook: idBook,
          dateDebutEmprunt: now,
          dateFinEmprunt: endDate
        })

        this.statusBooks.push(data)

      } catch (err) {
        this.error = err
      }
    },
    async addComment(id, commentaire) {
      try {
        const { data } = await api.put(`/api/statusBooks/modify/${id}`, {
          commentaireUtilisateur: commentaire
        })

        // Mettre à jour le commentaire dans le store
        const book = this.statusBooks.find(sb => sb.idBook === idBook)
        if (book) {
          book.commentaireUtilisateur = commentaire
        }

      } catch (err) {
        this.error = err
      }
    },

    // Reset (logout)
    clearStatusBooks() {
      this.statusBooks = []
    }

  }

})
