<template>
  <ul role="list" class="space-y-3">
    <li v-for="item in items" :key="item.id" class="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
      {{ item.title }}
      <div class="aspect-w-5 aspect-h-2 rounded-lg overflow-hidden lg:h-40 lg:w-40">
        <img :src="'/src/assets/' + item.img " alt="Double stitched black canvas hook loop."
             class="object-center object-cover">
      </div>
    </li>
  </ul>
</template>

<script setup>
const items = [
  { id: 1, "title": "Le journal de l'école", "texte": "", "img": "newspaper.jpg" },
  { id: 2, "title": "La photo de la semaine", "texte": "", "img": "camera1.jpg" },
  { id: 3, "title": "Mémento 2021-2022", "texte": "", "img": "postit.jpg" },
  { id: 3, "title": "Menu de la semaine", "texte": "", "img": "breakfast.jpg" }
];
</script>