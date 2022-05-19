<template>
  <div class="pt-4 pb-20 lg:pt-4 lg:pb-28">
    <div class="text-left pb-5 border-b border-orange flex flex-row gap-2 items-center text-gray-600">
      <CalendarIcon class="h-12 w-12 flex-grow-0" />
      <h2 class="text-2xl tracking-tight font-extrabold sm:text-3xl">
        Agenda
      </h2>
    </div>
    <ul class="">
      <li v-for="event in events" :key="event.id"
          class="bg-white shadow-lg shadow-blue-500/50 overflow-hidden sm:rounded-md group border-transparent border-2 hover:border-orange mb-4">
        <a :href="event.href">
          <div class="flex flex-row gap-2 items-start">
            <div class="flex flex-col hover:bg-pink-400 hover:text-white px-10 text-center text-base text-gray-700">
              <span class="text-2xl font-extrabold">{{ event.day }}</span>
              <span class="text-1xl">{{ event.month }}</span>
              <span class="text-1xl">{{ event.year }}</span>
            </div>
            <div class="flex flex-col items-start content-center">
              <span class="text-base font-extrabold text-emerald-900">{{ event.name }}</span>
              <span class="text-sm text-gray-600">
                {{ event.description }}
              </span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { CalendarIcon } from "@heroicons/vue/outline";

const events = [
  {
    id: 2,
    name: "Ceb",
    description: "14h30",
    href: "#",
    year: "2022",
    month: "06",
    day: "12"
  },
  {
    id: 3,
    name: "Présentation du chef d'oeuvre",
    description: "Par Nisou",
    href: "#",
    year: "2022",
    month: "06",
    day: "15"
  },
  {
    id: 4,
    name: "Conseil d'école participatif",
    description: "17h30",
    href: "#",
    year: "2022",
    month: "06",
    day: "22"
  },
  {
    id: 5,
    name: "Inauguration de l'école",
    description: "",
    href: "#",
    year: "2022",
    month: "07",
    day: "01"
  },
  {
    id: 6,
    name: "Vacances d'été",
    description: "Par Nisou",
    href: "#",
    year: "2022",
    month: "07",
    day: "8"
  },
  {
    id: 7,
    name: "Classes de dépaysement à Dalhem",
    description: "(P3-P4)",
    href: "#",
    year: "2022",
    month: "07",
    day: "14"
  },
  {
    id: 8,
    name: "Rentrée des classes",
    description: "Déjeuner pour les parents",
    href: "#",
    year: "2022",
    month: "09",
    day: "01"
  }
];
</script>