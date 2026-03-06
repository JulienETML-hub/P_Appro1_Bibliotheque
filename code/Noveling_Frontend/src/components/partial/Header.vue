<script setup>
import { useRouter } from 'vue-router';
import { useUsersStore } from '@/stores/users.store';
const router = useRouter()

const usersStore = useUsersStore();

async function redirectHome() {
  await router.push("/")
}
async function redirectProfile() {
  await router.push("/profile")
}
async function redirectCatalogue() {
  await router.push("/catalogue")
}
</script>


<template>
  <header class="flex justify-between px-2" > 
  <a v-on:click="redirectHome()" class="justify-start">
  <img class="size-20 " src="../../assets/maison.png" alt="Icône de maison" >  
  </a>
  <a v-on:click="redirectCatalogue"><h1 class="flex items-center text-4xl ">Noveling</h1></a>
  <a v-on:click="redirectProfile()" class="justify-end">
  <img class="size-20 " src="../../assets/profile.png" alt="Icône de maison" >  
  </a>
  </header>
  <!-- <button v-on:click="usersStore.logoutLocal()" class="bg-red-500">Se déconnecter</button> -->
</template>
