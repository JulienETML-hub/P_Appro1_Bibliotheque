<script setup>
import axios from 'axios'
import {onMounted, ref} from 'vue';
import { useRouter } from 'vue-router'
import { useBooksStore} from '@/stores/books.store.js';
import { useUsersStore } from '@/stores/users.store';
const router = useRouter()
const usersStore = useUsersStore();
async function redirectLogin() {
  await router.push("/login")
}
onMounted(() =>{
});

const pseudo = ref("");
const email = ref("");
const password = ref("");

async function handleSubmit() {
  try {
    await usersStore.register(pseudo.value,email.value, password.value);
    console.log("Inscription réussie, idUser =", usersStore.$state);
    await usersStore.login(usersStore.email, usersStore.password);
    await router.push("/")
  } catch (e) {
    console.log("Erreur inscription =", e, usersStore.data.error);
  }
  
}

</script>

<template>
  <div class="min-h-screen bg-slate-50 grid grid-cols-12 items-center grid-rows-1">
    <div class="col-start-2 col-span-5 flex items-center justify-end">
    <img src="../assets/hibou.png"  alt="Logo" class="size-45/100" />
    </div>
    <div class="rounded-lg bg-green-50 p-6 outline -outline-1 outline-green-0 dark:bg-green-800 col-span-5 size-50/100">
      <div class="mb-8 text-center">
        <h1 class="text-2xl font-bold text-slate-900">Connexion</h1>
        <p class="mt-2 text-sm text-slate-600">
          Connecte-toi pour accéder à ton compte
        </p>
      </div>
      <div class="">
        <form @submit.prevent="handleSubmit">
          <div class=" grid grid-cols-12 grid-rows-1">
            <label class="col-start-3 col-span-3 row-span-1 flex justify-start items-center text-sm font-medium text-slate-700" for="pseudo">
              Pseudo
            </label>
            <input
              id="pseudo"
              type="text" v-model="pseudo"
              placeholder="ex: MonPseudo"
              class="col-start-3 col-span-8 row-start-2 row-span-2 flex justify-center items-center rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
              required
            />
          </div>
          <div class="grid grid-cols-12 grid-rows-1">
            <label class="col-start-3 col-span-3 row-span-1 flex justify-start items-center text-sm font-medium text-slate-700" for="email">
              Email
            </label>
            <input
              id="email"
              type="email" v-model="email"
              placeholder="ex: nom@email.com"
              class="col-start-3 col-span-8 row-start-2 row-span-1 flex justify-center items-center rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
              required
            />
          </div>

          <div class="grid grid-cols-12 grid-rows-1">
              <label class="col-start-3 col-span-6 row-span-1 flex justify-start items-end text-sm font-medium text-slate-700" for="password">
                Mot de passe
              </label>
              <a href="#" class=" col-start-3 col-span-6 row-start-4 row-span-1 flex justify-start items-center text-sm font-medium text-green-600 hover:text-green-700">
                Mot de passe oublié ?
              </a>
            <input
              id="password"
              type="password" v-model="password"
              placeholder="••••••••"
              class="col-start-3 col-span-8 row-start-2 row-start 2 row-span-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
              required
            />
          </div>
          <div class="flex justify-center items-end mt-5">
          <button
            type="submit"
            class="rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-200"
          >
            S'inscrire
          </button>
          </div>
          <div class="relative p-5">
            <div class="h-px w-full bg-slate-200"></div>
          </div>
        </form>
      </div>

      <p class="mt-auto text-center text-sm text-slate-600">
        Déjà un compte ?
        <a @click="redirectLogin()" class="font-semibold text-green-600 hover:text-green-700">Se connecter</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
div {
  border: 0px solid black;
}
</style>
