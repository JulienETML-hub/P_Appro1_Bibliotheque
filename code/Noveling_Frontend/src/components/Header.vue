<script setup>
import { useUsersStore } from '@/stores/users.store';

const usersStore = useUsersStore();
</script>

<template>
  <button v-on:click="usersStore.logoutLocal()" class="bg-red-500">Se déconnecter</button>
</template>
