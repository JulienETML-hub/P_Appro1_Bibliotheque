<script setup>

import axios from 'axios'
import { onMounted, ref } from 'vue';
import { useBooksStore } from '@/stores/books.store.js';
import Header from './partial/Header.vue';
import searchBar from './partial/searchBar.vue';
import { useRoute } from 'vue-router';

const booksStore = useBooksStore();
const route = useRoute();
onMounted(() => {
  const bookId = route.params.id

  booksStore.fetchBookById(bookId);
});


</script>

<template>
  <!-- HTML CSS DE CETTE PAGE FAIS PAR CHATGPT -->

  <Header />

  <!-- Loading -->
  <div v-if="booksStore.loading" class="mx-auto mt-6 max-w-5xl px-4">
    <div class="rounded-xl border border-slate-200 bg-white p-4 text-slate-700 shadow-sm">
      Chargement...
    </div>
  </div>

  <!-- Error -->
  <div v-else-if="booksStore.error" class="mx-auto mt-6 max-w-5xl px-4">
    <div class="rounded-xl border border-red-200 bg-rose-50 p-4 text-red-700 shadow-sm">
      {{ booksStore.error }}
    </div>
  </div>

  <!-- Content -->
  <div v-else-if="booksStore.selectedBook" class="mx-auto mt-6 max-w-5xl px-4">
    <div class="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg md:grid-cols-3">

      <!-- Cover -->
      <div class="flex items-start justify-center md:justify-end">
        <img v-if="booksStore.selectedBook.urlCover" :src="booksStore.selectedBook.urlCover"
          :alt="booksStore.selectedBook.title"
          class="w-full max-w-[300px] rounded-l border border-slate-200 object-cover shadow-xl " />
      </div>

      <!-- Text -->
      <div class="md:col-span-2">
        <h1 class="text-3xl font-extrabold tracking-tight text-slate-900">
          {{ booksStore.selectedBook.title }}
        </h1>
        <p class="text-m text-slate-700">
          {{ booksStore.selectedBook.authors[0]?.prename }} {{ booksStore.selectedBook.authors[0]?.name }}
        </p>
        <div class="mt-4 flex flex-wrap gap-2">
          <div class="inline-flex items-baseline gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2"
            v-for="g in (booksStore.selectedBook.genres ?? [])" :key="g.idGenre">
            <span class="text-sm font-bold text-slate-900">
              {{ g.name }}
            </span>
          </div>

        </div>
        <!-- Meta (compact) -->
        <div class="mt-4 flex flex-wrap gap-2">
          <!-- Popularité -->
          <div
            class="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-slate-700 shadow-sm">

            <span class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Popularité
            </span>
            <span class="text-sm font-bold text-slate-900 tabular-nums leading-none">
              {{ booksStore.selectedBook.popularity }}
            </span>
          </div>

          <!-- Ajouté le -->
          <div
            class="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-slate-700 shadow-sm">

            <span class="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Ajouté
            </span>
            <span class="text-sm font-bold text-slate-900 tabular-nums leading-none">
              {{ booksStore.selectedBook.addedOnDate }}
            </span>
          </div>
        </div>

        <p class="mt-5 whitespace-pre-line text-sm leading-7 text-slate-700">
          {{ booksStore.selectedBook.description }}
        </p>

        <button v-if="booksStore.selectedBook.isAvailable2" class="mt-5 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-500">
          Emprunter
        </button>
        <button v-else="" class="mt-5 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-600">
          Indisponible
        </button>

      </div>
    </div>

  </div>

</template>

<style scoped></style>
