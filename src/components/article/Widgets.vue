<template>

  <ul role="list" class="space-y-3">
    <li v-for="item in items" :key="item.id"
        class="bg-white shadow-lg shadow-blue-500/50 overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md flex flex-col justify-center items-center">
      <div class="text-lg border-b-2 border-b-pink-200 w-full mb-3">
       <a :href="item.url" class="hover:text-red-200">{{ item.title }}</a>
      </div>
      <div class="aspect-w-5 aspect-h-2 rounded-lg overflow-hidden lg:h-40 lg:w-40">
        <a :href="item.url">
          <img :src="'/src/assets/' + item.img " alt="Double stitched black canvas hook loop."
             class="object-center object-cover hover:opacity-75">
        </a>
      </div>
    </li>
  </ul>

</template>

<script setup>
const items = [
  { id: 1, "title": "Le journal de l'école", "texte": "", "img": "newspaper.jpg", "url":"#" },
  { id: 2, "title": "La photo de la semaine", "texte": "", "img": "camera1.jpg", "url":"#" },
  { id: 3, "title": "Mémento 2021-2022", "texte": "", "img": "postit.jpg", "url":"#" },
  { id: 3, "title": "Menu de la semaine", "texte": "", "img": "breakfast.jpg", "url":"#" }
];
</script>