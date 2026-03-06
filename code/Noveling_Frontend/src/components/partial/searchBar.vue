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
</script>

<template>
<div class="flex items-center justify-center">
  <h1 class="flex items-center text-2xl ">Noveling</h1>
  <input type="search" v-model="searchData" placeholder="Rechercher" class="mx-8"></input>
</div>
</template>
