<script setup>
import axios from 'axios'
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router'
import { useBooksStore } from '@/stores/books.store.js';
import { useUsersStore } from '@/stores/users.store';
import { useStatusBookStore } from '@/stores/statusBooks.store';
const router = useRouter()
const usersStore = useUsersStore();
const booksStore = useBooksStore();
const statusBookStore = useStatusBookStore();
async function logout() {
  usersStore.logoutLocal();
  router.replace("/login");
}
const autoResize = (event) => {
  const el = event.target
  el.style.height = "auto"
  el.style.height = el.scrollHeight + "px"
}
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('fr-CH', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};
async function addComment(bookId, commentaire) {
  await statusBookStore.addComment(bookId, commentaire);
}
onMounted(async () => {
  usersStore.FetchMe();
  await booksStore.fetchMyBooksBorrowed(usersStore.idUser);
  booksStore.BooksBorrowed.forEach(book => {
    book.dateDebutEmprunt = formatDate(book.dateDebutEmprunt);
    book.formattedDateFinEmprunt = formatDate(book.dateFinEmprunt);
  });
});
</script>

<template>
  <div class="w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow">

    <!-- Profil -->
    <div class="bg-white p-6 rounded-xl shadow text-center space-y-2">
      <h2 class="text-xl font-semibold">{{ usersStore.pseudo }}</h2>
      <p class="text-gray-600">{{ usersStore.email }}</p>

      <button @click="logout()" class="mt-3 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition">
        Déconnexion
      </button>
    </div>

    <!-- Emprunts -->
    <div class="bg-white p-6 rounded-xl shadow">
      <h3 class="text-lg font-semibold mb-4">Mes emprunts</h3>

      <ul class="space-y-4">
        <li v-if="!booksStore.BooksBorrowed.length">
          Aucun emprunt 
        </li>
        <li v-for="book in booksStore.BooksBorrowed" :key="book.idBook"
          class="border rounded-lg p-4 bg-gray-50 space-y-2">
          <div class="text-sm">
            <span class="font-medium">{{ book.idBook_Book.title }}</span><br>
            Emprunté le {{ book.dateDebutEmprunt }} <br>
            À rendre le {{ book.formattedDateFinEmprunt }}
          </div>

          <div class="flex gap-2">
            <textarea v-model="book.commentaireUtilisateur" placeholder="Ajouter un commentaire..." rows="1"
              @input="autoResize($event)"
              class="w-full resize-none overflow-hidden border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"></textarea>


          </div>
          <button @click="addComment(book.idStatusBook, book.commentaireUtilisateur)"
            class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition">
            Mettre à jour
          </button>
        </li>
      </ul>

    </div>
  </div>
</template>


<style scoped></style>
