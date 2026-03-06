<script setup>

import { onMounted, ref, watchEffect } from 'vue';
import { useBooksStore } from '@/stores/books.store.js';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { computed } from 'vue';

const booksStore = useBooksStore();
const isAvailable = ref(null)
const bookIsAvailable = true
onMounted(() => {

});



</script>
<template>
  <!--TailWind Element  -->
  
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton 
      class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
      Statut
      <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" />
    </MenuButton>
    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems @keydown="handleKey" @focus="isFocused=true" @blur="isFocused=false"
        class="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black/5 p-2">
        <div class="space-y-2">
                /// A FAIRE  CAAAA 
            <input type="checkbox" v-model="isAvailable"/>

        </div>
      </MenuItems>
    </transition>
  </Menu>

</template>
<style scoped></style>