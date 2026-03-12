<script setup>

import { onMounted, ref, watchEffect } from 'vue';
import { useBooksStore } from '@/stores/books.store.js';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { computed } from 'vue';

const booksStore = useBooksStore();
const search = ref("");
const isFocused = ref(false)

function handleKey(event) {
  if (event.key.length === 1) {
    search.value += event.key.toLowerCase()
  }

  if (event.key === "Backspace") {
    search.value = search.value.slice(0, -1)
  }

}

watchEffect(() => {

    if(!isFocused.value){
    search.value = "";

    }
})

const authorsWitoutDoublon = computed(() => (booksStore.authors.filter(
  (author, index, self) =>
    index === self.findIndex(a => a.name === author.name)
)))

const filteredAuthors = computed(() => {
if(search.value != ""){
return authorsWitoutDoublon.value.filter(author =>
author.name.toLowerCase().startsWith(search.value)

)} else{
    return authorsWitoutDoublon.value
}
});
onMounted(() => {
isFocused.value = false;
});



</script>
<template>
  <!--TailWind Element  -->
  
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton 
      class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
      Auteurs
      <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" />
    </MenuButton>
    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems @keydown="handleKey" @focus="isFocused=true" @blur="isFocused=false"
        class="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black/5 p-2">
        <div v-for="g in filteredAuthors" :key="g.idAuthor" class="space-y-2">

          <label class="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <input type="checkbox" :value="g.idAuthor" v-model="booksStore.selectedAuthors" />
            {{ g.name }}
          </label>


        </div>
      </MenuItems>
    </transition>
  </Menu>

</template>
<style scoped></style>