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
const router = useRouter();

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

    return matchGenres && matchAuthors
  })
  
})
onMounted(() => {
  booksStore.fetchBooks(true);
  booksStore.fetchGenres();
  booksStore.fetchAuthors();
});



</script>
<template>
  <Header />
  <searchBar />
  <div class="mx-auto max-w-6xl px-4 py-6">
    <h1 class="mb-4 text-2xl font-semibold text-slate-900">Nos livres</h1>
  <FilterByGenres></FilterByGenres>
  <FilterByAuthors></FilterByAuthors>
  <isBookAvailable></isBookAvailable>
    <!--TailWind Element  
    <Menu as="div" class="relative inline-block text-left">
      <MenuButton
        class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        Genres
        <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" />
      </MenuButton>

      <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
        <MenuItems
          class="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black/5 p-2">
          <div v-for="g in booksStore.genres" :key="g.idGenre" class="space-y-2">

            <label class="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input type="checkbox" :value="g.idGenre" v-model="booksStore.selectedGenres" />
              {{ g.name }}

            </label>


          </div>
        </MenuItems>
      </transition>
    </Menu>
-->
    <ul class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      <li v-for="b in filteredBooks" :key="b.idBook"
        class="group relative cursor-pointer overflow-hidden rounded-lg border p-3"
        :class="b.isAvailable2 ? 'bg-green-100 border-green-200' : 'bg-red-100 border-red-200'"
        @click="redirectBookDetail(b.idBook)">
        <img v-if="b.urlCover" class="mx-auto w-auto rounded" :src="b.urlCover" :alt="b.title" />
        <div class="absolute inset-0 hidden bg-white/80 p-3 backdrop-blur-xxs group-hover:flex">
          <div class="mt-auto w-full text-sm text-slate-900">
            <div class="font-semibold leading-snug line-clamp-2">
              {{ b?.title }}
            </div>

            <div class="mt-1 text-slate-700 line-clamp-1">
              {{ b.authors?.[0]?.prename }} {{ b.authors?.[0]?.name }}
            </div>

            <div class="text-slate-600 line-clamp-1">
              {{ b.genres?.[0]?.name }}
            </div>

            <div class="mt-1 text-slate-700">
              Emprunté {{ b?.popularity }} fois
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>


<style scoped></style>
