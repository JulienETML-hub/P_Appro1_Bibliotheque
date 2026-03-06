<script setup>

import axios from 'axios'
import { onMounted, ref } from 'vue';
import { useBooksStore } from '@/stores/books.store.js';
import Header from './partial/Header.vue';
import searchBar from './partial/searchBar.vue';

const booksStore = useBooksStore();

onMounted(() => {
  booksStore.fetchBooks(true, true);
  booksStore.getFiveMostPopularBooks();

});



</script>

<template>
  <Header></Header>
  <searchBar></searchBar>
  <h1 class="text-3xl">Les Populaires</h1>
  <ul class="grid grid-cols-5 ">
    <li class="px-4" v-for="b in booksStore.MostPopularBooks" :key="b.idBook"> <img :src="b.urlCover"
        :alt="b.title" />{{ b.title }} [{{ b.popularity }}] </li>
  </ul>
  <h1 class="text-3xl">Les Nouveautées</h1>
  <ul class="grid grid-cols-5 ">
    <li class="px-4 bg-red-300" v-for="bs in booksStore.fiveMostRecentBooks" :key="bs.idBook"> <img :src="bs.urlCover"
        :alt="bs.title" />
      {{ bs.title }} — {{ bs.addedOnDate }} - || {{ bs.popularity }} dateFin :{{ bs.isAvailable2 }}
    </li>
  </ul>
</template>

<style scoped></style>
