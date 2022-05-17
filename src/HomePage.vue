<script setup>
import { ref } from "vue";
import TitlePortal from "./components/homepage/TitlePortal.vue";
import News from "./components/homepage/News.vue";
import MenuFly from "./components/homepage/MenuFly.vue";
import { BookmarkAltIcon, CalendarIcon, ShieldCheckIcon, SupportIcon } from "@heroicons/vue/outline";
import Palette from "./components/homepage/Palette.vue";
import Footer from "./components/homepage/Footer.vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

const navigation = [
  { name: "Aye", href: "#" },
  { name: "Hargimont", href: "#" },
  { name: "Humain", href: "#" },
  { name: "Hollogne", href: "#" },
  { name: "On", href: "#" },
  { name: "Waha", href: "#" }
];
const navi2 = [
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
    <MenuFly :navigation="navigation" :navi="navi2" />
    <hr>
    <TitlePortal @search-event="callback" :openSearch="openSearch" />
    <Palette @search-event="callback" :openSearch="openSearch" />
    <News />
    <Footer />
  </div>
</template>
