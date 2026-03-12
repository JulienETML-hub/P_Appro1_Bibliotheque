<script setup>

import { onMounted, ref } from 'vue';
import { useBooksStore } from '@/stores/books.store.js';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const booksStore = useBooksStore();


booksStore.selectedPopularity = null;

onMounted(() => {

});



</script>
<template>
<!-- Bloc Tri -->
<div class="flex items-center mb-6 mt-2">

  <!-- Label -->
  <div class="text-sm font-semibold text-slate-800 mr-2">
    Trier du : 
  </div>

  <!-- Select -->
  <div class="relative">
    
    <select
      class="appearance-none rounded-xl border border-slate-200 bg-white px-4 py-2 pr-10 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
         v-model ="booksStore.selectedPopularity">
      <option :value="true">
         Plus populaire
      </option>
      <option :value="false">
         Moins populaire
      </option>
      <option :value="null">
        Ne pas trier
      </option>
      <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" />
    </select>


  </div>

</div>

</template>
<style scoped></style>