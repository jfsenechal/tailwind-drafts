<script setup>
import { ref } from "vue";
import TitleEcole from "./components/homepageecole/TitleEcole.vue";
import News from "./components/homepageecole/News.vue";
import MenuFly from "./components/homepage/MenuFly.vue";
import { BookmarkAltIcon, CalendarIcon, ShieldCheckIcon, SupportIcon } from "@heroicons/vue/outline";
import Footer from "./components/homepage/Footer.vue";
import Agenda from "./components/homepageecole/Agenda.vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

const implantations = [
  { name: "Aye", href: "#" },
  { name: "Hargimont", href: "#" },
  { name: "Humain", href: "#" },
  { name: "Hollogne", href: "#" },
  { name: "On", href: "#" },
  { name: "Waha", href: "#" }
];
const informations = [
  {
    name: "Présentation globale",
    description: "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon
  },
  {
    name: "Projet éducatif",
    description: "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon
  },
  {
    name: "Projet pédagogique",
    description: "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon
  },
  {
    name: "Règlement d'ordre intérieur",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon
  }
];

const openSearch = ref(false);
const callback = (isOpen) => openSearch.value = isOpen;
</script>

<template>
  <div class="bg-gradient-to-br from-rose-100 via-violet-100 to-emerald-300">
    <MenuFly :implantations="implantations" :informations="informations" />
    <hr>
    <TitleEcole @search-event="callback" :openSearch="openSearch" />
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-[1fr,32rem] gap-1 h-full border-2 border-gray-200 rounded-lg">
        <div class="px-4 py-2 sm:p-6">
          <News />
        </div>
        <div class="px-4 py-2 sm:p-6">
          <Agenda />
        </div>
      </div>
    </div>
    <!--
     <div class="pt-4 pb-20 px-4 sm:px-6 lg:pt-4 lg:pb-28 lg:px-8">
       <div class="max-w-7xl mx-auto">

       </div>
     </div>-->
    <Footer />
  </div>
</template>
