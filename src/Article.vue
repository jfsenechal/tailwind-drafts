<script setup>
import Breadcrumb from "./components/article/Breadcrumb.vue";
import Title from "./components/article/Title.vue";
import Widgets from "./components/article/Widgets.vue";
import Footer from "./components/homepage/Footer.vue";
import Gallery from "./components/article/Gallery.vue";
import { BookmarkAltIcon, CalendarIcon, ShieldCheckIcon, SupportIcon } from "@heroicons/vue/outline";
import MenuFly from "./components/homepage/MenuFly.vue";

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
</script>

<template>
  <MenuFly :implantations="implantations" :informations="informations" />
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">

    <div class="bg-white overflow-hidden shadow rounded-lg mb-3">
      <img class="h-40 w-full object-cover lg:h-56 mb-3"
           src="./assets/carnaval.jpg"
           alt="">
      <Breadcrumb />
      <div class="px-4 py-5 sm:p-6">
        <Title />
      </div>
    </div>

    <div class="grid grid-cols-10 gap-3 h-full">
      <div class="col-span-7 border-2 border-gray-200 rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <article class="prose">
            Cet après-midi, nous avons tourné un film pour le carnaval de la Grosse Biesse.
            <br />Après, nous avons dansé la danse
            de la Grosse Biesse et pour finir, nous avons fait une bataille de confettis.<br /><br /> Vu tous
            les sourires sur les
            visages, on peut se dire que les enfants se sont bien amusés.<br /><br />
            Vous pourrez découvrir cette vidéo le samedi 13 février en regardant la chaîne YouTube de la
            Grosse Biesse.
            <br /><br />
            De plus, il y aura 3 spectacles différents.<br />
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
            sunt amet fugiat
            veniam occaecat fugiat aliqua.<br /><br />
          </article>
          <Gallery />
        </div>
      </div>
      <div class="col-span-3">
        <Widgets />
      </div>
    </div>
    <Footer />
  </div>
</template>