<script setup>

import Homepage from './components/Homepage.vue';
import Login from './components/Login.vue'
import Header from './components/partial/Header.vue'
import { useUsersStore } from '@/stores/users.store';
import { RouterView, RouterLink } from 'vue-router'
import { onMounted } from 'vue';
/*
function goHome() {
  if(usersStore.isLoggedIn)
  {
  router.push({ name: "Home" })
  } else {
    console.log("Il faut être connecté");
}}
const usersStore = useUsersStore();
onMounted(()=>{
if(usersStore.isLoggedIn){
  goHome();
};
})*/
</script>

<template>
  <header>

  </header>
  <nav class="flex gap-4 p-4">
    <RouterLink to="/">Accueil</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
  </nav>
  <main>
    
    <RouterView />
  </main>
</template>

<style scoped>

</style>
