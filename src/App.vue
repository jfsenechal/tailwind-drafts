<script setup>
import MenuTop from './components/MenuTop.vue';
import Menu2 from './components/Menu2.vue';
import TitlePortal from "./components/TitlePortal.vue";
import News from "./components/News.vue";
import MenuSingle from "./components/MenuSingle.vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

const navigation = [
  { name: 'Aye', href: '#' },
  { name: 'Hargimont', href: '#' },
  { name: 'Humain', href: '#' },
  { name: 'Hollogne', href: '#' },
  { name: 'On', href: '#' },
  { name: 'Waha', href: '#' },
]
</script>

<template>

  <Menu2 :navigation="navigation" />
  <hr>
  <TitlePortal />
  <News/>
</template>
