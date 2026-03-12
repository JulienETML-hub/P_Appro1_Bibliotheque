<script setup>
defineProps({
  book: Object
})
</script>

<template>
  <li
    class="group relative cursor-pointer overflow-hidden rounded-lg border p-3"
    :class="book.isAvailable2 
      ? 'bg-green-100 border-green-200' 
      : 'bg-red-100 border-red-200'"
  >
    <img
      v-if="book.urlCover"
      class="mx-auto w-auto rounded"
      :src="book.urlCover"
      :alt="book.title"
    />

    <div class="absolute inset-0 hidden bg-white/80 p-3 backdrop-blur-xxs group-hover:flex">
      <div class="mt-auto w-full text-sm text-slate-900">
        <div class="font-semibold leading-snug line-clamp-2">
          {{ book.title }}
        </div>

        <div class="mt-1 text-slate-700 line-clamp-1">
          {{ book.authors?.[0]?.prename }} {{ book.authors?.[0]?.name }}
        </div>

        <div class="text-slate-600 line-clamp-1">
          {{ book.genres?.[0]?.name }}
        </div>

        <div class="mt-1 text-slate-700">
          Emprunté {{ book.popularity }} fois
        </div>
        <button v-if="admin">Supprimer</button>
      </div>
    </div>
  </li>
</template>
