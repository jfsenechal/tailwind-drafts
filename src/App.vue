<script setup>
import { computed, ref } from "vue";
import MenuTop from "./components/MenuTop.vue";
import Menu2 from "./components/Menu2.vue";
import Menu3 from "./components/Menu3.vue";
import TitlePortal from "./components/TitlePortal.vue";
import News from "./components/News.vue";
import MenuSingle from "./components/MenuSingle.vue";
import MenuFly from "./components/MenuFly.vue";
import { BookmarkAltIcon, CalendarIcon, ShieldCheckIcon, SupportIcon } from "@heroicons/vue/outline";
import Palette from "./components/Palette.vue";
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
  <Menu3 :navigation="navigation" :navi="navi2" v-if="awesome" />
  <MenuFly :navigation="navigation" :navi="navi2" v-if="awesome" />
  <Menu2 :navigation="navigation" :navi="navi2" />
  <hr>
  <TitlePortal @search-event="callback" :openSearch="openSearch" />
  <Palette @search-event="callback" :openSearch="openSearch" />
  <News />
</template>
