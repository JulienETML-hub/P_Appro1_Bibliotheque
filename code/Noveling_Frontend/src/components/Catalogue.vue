<script setup>

import axios from 'axios'
import { onMounted, ref } from 'vue';
import { useBooksStore } from '@/stores/books.store.js';
import Header from './partial/Header.vue';
import searchBar from './partial/searchBar.vue';
import { useRouter } from 'vue-router';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { computed } from 'vue';
import FilterByGenres from './partial/FilterByGenres.vue';
import FilterByAuthors from './partial/FilterByAuthors.vue';
import isBookAvailable from './partial/isBookAvailable.vue';
import FilterByPopularity from './partial/FilterByPopularity.vue';
import BookCard from './partial/BookCard.vue';
const router = useRouter();
const currentPage = ref(1);
const itemsPerPage = computed(() => 12)
const start = computed(()=> {
  return (currentPage.value - 1) * itemsPerPage.value
}) 
const booksStore = useBooksStore();
async function redirectBookDetail(idBook) {
  await router.push({ name: "BookDetail", params: { id: idBook } });
}
const filteredBooks = computed(() => {

  return booksStore.books.filter(book => {

    const matchGenres =
      booksStore.selectedGenres.length === 0 ||
      book.genres.some(g =>
        booksStore.selectedGenres.includes(g.idGenre)
      )

    const matchAuthors =
      booksStore.selectedAuthors.length === 0 ||
      book.authors.some(a =>
        booksStore.selectedAuthors.includes(a.idAuthor)
      )

    const matchAvailability =
      booksStore.isAvailable3 === null ||
      book.isAvailable2 === booksStore.isAvailable3

    return matchGenres && matchAuthors && matchAvailability
  }).sort((a, b) => {
    if (booksStore.selectedPopularity === true) {
      return b.popularity - a.popularity; // Plus populaire en premier
    } else if (booksStore.selectedPopularity === false) {
      return a.popularity - b.popularity; // Moins populaire en premier
    } else {
      return 0; // Pas de tri
    }
  }).slice(start.value, start.value + itemsPerPage.value);

}) 

onMounted(() => {
  booksStore.fetchBooks(true);
  booksStore.fetchGenres();
  booksStore.fetchAuthors();
});



</script>
<template>

  <!--<searchBar />-->
  <div class="mx-auto max-w-6xl px-4 py-6">
    <h1 class="mb-4 text-2xl font-semibold text-slate-900">Nos livres</h1>
  <FilterByGenres></FilterByGenres>
  <FilterByAuthors></FilterByAuthors>
  <isBookAvailable></isBookAvailable>
  <FilterByPopularity></FilterByPopularity>
<ul class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
  <BookCard
    v-for="b in filteredBooks"
    :key="b.idBook"
    :book="b"
    @click="redirectBookDetail(b.idBook)"
  />
</ul>
<ul class="flex items-center justify-center gap-4 mt-6 text-sm">

  <li>
    <button
      @click="currentPage--"
      :disabled="currentPage === 1"
      class="px-3 py-1 rounded-md border bg-white hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
    >
      ←
    </button>
  </li>

  <li class="px-3 py-1 text-gray-700 font-medium">
    Page {{ currentPage }}
  </li>

  <li>
    <button
      @click="currentPage++"
      :disabled="(filteredBooks.length /itemsPerPage +1) < currentPage"
      class="px-3 py-1 rounded-md border bg-white hover:bg-gray-100 transition"
    >
      →
    </button>
  </li>

</ul>

  </div>
</template>


<style scoped></style>
