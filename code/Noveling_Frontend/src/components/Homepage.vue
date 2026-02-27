<script setup>

import axios from 'axios'
import {onMounted, ref} from 'vue';
import { useBooksStore} from '@/stores/books.store.js';

const booksStore = useBooksStore();

onMounted(() =>{
booksStore.fetchBooks();

});



</script>

<template>
  <p v-if="booksStore.loading">Chargement...</p>
  <p v-if="booksStore.error" style="color:red">{{ booksStore.error }}</p>

  <p>Total: {{ booksStore.count }}</p>

  <ul>
    <li v-for="b in booksStore.books" :key="b.idBook">{{ b.title }}</li>
  </ul>
</template>

<style scoped>

</style>
