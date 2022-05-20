<template>

  <ul role="list" class="space-y-3 max-w-sm">
    <li v-for="item in items" :key="item.id"
        class="bg-white shadow-lg shadow-blue-500/50 overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md flex flex-col justify-center items-center">
      <div class="text-lg border-b-2 border-b-pink-200 lg:w-full mb-3">
        <a :href="item.url" class="hover:text-red-400">{{ item.title }}</a>
      </div>
      <div class="rounded-lg overflow-hidden">
        <a :href="item.url">
          <img :src="item.img" alt="Double stitched black canvas hook loop."
               class="object-center object-cover hover:opacity-75 sm:h-40 sm:w-40">
        </a>
      </div>
      <div v-if="item.texte.length > 0">
        <p class="text-gray-600 mt-2">{{ item.texte }}</p>
      </div>
    </li>
  </ul>

</template>

<script setup>
const items = [
  {
    id: 1,
    "title": "Le journal de l'école",
    "texte": "Il sera bientôt disponible sur le site",
    "img": "https://ecolescommunales.marche.be/nouveau/newspaper.jpg",
    "url": "#"
  },
  {
    id: 2,
    "title": "La photo de la semaine",
    "texte": "Depuis le début de la semaine, nous pouvons assister aux présentations des chefs-d’oeuvre (P6)",
    "img": "https://ecolescommunales.marche.be/nouveau/camera1.jpg",
    "url": "#"
  },
  {
    id: 3,
    "title": "Mémento 2021-2022",
    "texte": "",
    "img": "https://ecolescommunales.marche.be/nouveau/postit.jpg",
    "url": "#"
  },
  {
    id: 3,
    "title": "Menu de la semaine",
    "texte": "",
    "img": "https://ecolescommunales.marche.be/nouveau/breakfast.jpg",
    "url": "#"
  }
];
</script>