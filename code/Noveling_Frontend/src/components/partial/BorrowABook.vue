<script setup>
import { useRouter } from 'vue-router';
import { useUsersStore } from '@/stores/users.store';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { useStatusBookStore } from '@/stores/statusBooks.store';
import { computed } from 'vue';
import { useBooksStore } from '@/stores/books.store';
const route = useRoute()
const booksStore = useBooksStore();
const usersStore = useUsersStore();
const statusBookStore = useStatusBookStore();
const bookId = computed(() => route.params.id)
function borrow() {
  if (!usersStore.idUser) {
    console.log("Utilisateur non connecté")
    return
  }

  statusBookStore.borrowBook(
    usersStore.idUser,
    bookId.value,
    14
  )
  booksStore.selectedBook.isAvailable2 = false;
}

onMounted(() => {
bookId.value = route.params.id
usersStore.FetchMe();
});

</script>


<template>
    <button v-on:click="borrow()" class="bg-green-500">Emprunter le livre</button>
</template>
