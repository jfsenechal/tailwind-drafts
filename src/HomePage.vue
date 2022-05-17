<script setup>
import { computed, ref } from "vue";
import MenuTop from "./components/homepage/MenuTop.vue";
import Menu2 from "./components/homepage/Menu2.vue";
import Menu3 from "./components/homepage/Menu3.vue";
import TitlePortal from "./components/homepage/TitlePortal.vue";
import News from "./components/homepage/News.vue";
import MenuSingle from "./components/homepage/MenuSingle.vue";
import MenuFly from "./components/homepage/MenuFly.vue";
import { BookmarkAltIcon, CalendarIcon, ShieldCheckIcon, SupportIcon } from "@heroicons/vue/outline";
import Palette from "./components/homepage/Palette.vue";
import Border from "./components/homepage/Border.vue";
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
const awesome = false;
const openSearch = ref(false);
const callback = (isOpen) => openSearch.value = isOpen;
</script>

<template>

  <!-- <div style="
         background-color: rgb(240, 253, 250);
         background-image: radial-gradient(at 57% 51%, rgb(254, 215, 170) 0, transparent 40%), radial-gradient(at 47% 27%, rgb(103, 232, 249) 0, transparent 45%), radial-gradient(at 30% 86%, rgb(120, 113, 108) 0, transparent 46%), radial-gradient(at 27% 47%, rgb(82, 82, 82) 0, transparent 3%), radial-gradient(at 10% 46%, rgb(103, 232, 249) 0, transparent 15%), radial-gradient(at 29% 60%, rgb(212, 212, 216) 0, transparent 96%);
       ">-->
   <div class="bg-gradient-to-br from-rose-100 via-violet-100 to-emerald-300">
    <Menu3 :navigation="navigation" :navi="navi2" v-if="awesome" />
    <MenuFly :navigation="navigation" :navi="navi2" v-if="awesome" />
    <Menu2 :navigation="navigation" :navi="navi2" />
    <hr>
    <TitlePortal @search-event="callback" :openSearch="openSearch" />
    <Palette @search-event="callback" :openSearch="openSearch" />
    <News />
    <Footer></Footer>
  </div>
</template>
