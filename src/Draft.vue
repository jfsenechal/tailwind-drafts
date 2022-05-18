<script setup>
import ImgText from "./components/drafts/ImgText.vue";
import Breadcrumb from "./components/article/Breadcrumb.vue";
import Title from "./components/article/Title.vue";
import Widgets from "./components/article/Widgets.vue";
</script>

<template>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <div class="bg-white overflow-hidden shadow rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <Breadcrumb />
        <img class="h-40 w-full object-cover lg:h-56 mb-3"
             src="./assets/classroom-kindergarten-interior-design.jpg"
             alt="">
        <Title />
      </div>
    </div>
    <hr>
    <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
      <div class="px-4 py-5 sm:px-6">
        Job Postings
      </div>
      <div class="px-4 py-5 sm:p-6">
        Cet après-midi, nous avons tourné un film pour le carnaval de la Grosse Biesse.
        <br/>Après, nous avons dansé la danse
        de la Grosse Biesse et pour finir, nous avons fait une bataille de confettis.<br/><br/> Vu tous les sourires sur les
        visages, on peut se dire que les enfants se sont bien amusés.<br/><br/>
        Vous pourrez découvrir cette vidéo le samedi 13 février en regardant la chaîne YouTube de la Grosse Biesse.
<br/><br/>
        De plus, il y aura 3 spectacles différents.<br/>
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat
        veniam occaecat fugiat aliqua.<br/>
      </div>
    </div>
    <Widgets/>
    <ImgText/>
  </div>
</template>