<script setup>

import axios from 'axios'
import { onMounted, ref } from 'vue';
import { useBooksStore } from '@/stores/books.store.js';
import Header from './partial/Header.vue';
import searchBar from './partial/searchBar.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const booksStore = useBooksStore();
async function redirectBookDetail(idBook) {
  await router.push({ name: "BookDetail", params: { id: idBook } });
}
onMounted(() => {
  booksStore.fetchBooks(true, true);
  booksStore.getFiveMostPopularBooks();

});



</script>

<template>

  <!--<searchBar />-->

  <div class="max-w-7xl mx-auto px-6 py-8 space-y-12">

    <!-- ================= POPULAIRES ================= -->
    <section>
      <h1 class="text-3xl font-bold mb-6 text-slate-800">
         Les Populaires
      </h1>

      <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <li
          v-for="b in booksStore.MostPopularBooks"
          :key="b.idBook"
          class="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col items-center text-center"
          @click="redirectBookDetail(b.idBook)"
        >
          <img
            :src="b.urlCover"
            :alt="b.title"
            class="h-48 object-cover rounded-lg mb-4"
          />

          <h2 class="font-semibold text-slate-800 text-sm mb-2 line-clamp-2">
            {{ b.title }}
          </h2>

          <span class="text-xs bg-slate-100 px-3 py-1 rounded-full">
            Popularité : {{ b.popularity }}
          </span>
        </li>
      </ul>
    </section>

    <!-- ================= NOUVEAUTÉS ================= -->
    <section>
      <h1 class="text-3xl font-bold mb-6 text-slate-800">
         Les Nouveautés
      </h1>

      <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <li
          v-for="bs in booksStore.fiveMostRecentBooks"
          :key="bs.idBook"
          class="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col items-center text-center"
          @click="redirectBookDetail(bs.idBook)"
        >
          <img
            :src="bs.urlCover"
            :alt="bs.title"
            class="h-48 object-cover rounded-lg mb-4"
          />

          <h2 class="font-semibold text-slate-800 text-sm mb-2 line-clamp-2">
            {{ bs.title }}
          </h2>

          <div class="text-xs text-slate-500 space-y-1">
            <p>Ajouté le : {{ bs.addedOnDate }}</p>
          </div>
        </li>
      </ul>
    </section>

  </div>
</template>


<style scoped></style>
