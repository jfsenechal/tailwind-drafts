<template>
  <div class="pt-4 pb-20 lg:pt-4 lg:pb-28">
      <div class="text-left pb-5 border-b border-orange flex flex-row gap-2 items-center text-gray-600">
        <NewspaperIcon class="h-12 w-12 flex-grow-0" />
        <h2 class="text-2xl tracking-tight font-extrabold sm:text-3xl">Actualités</h2>
      </div>
      <div class="mt-12 grid gap-2 grid-cols-1 lg:grid-cols-2">
        <div v-for="post in posts" :key="post.title"
             class="flex flex-col rounded-lg shadow-lg overflow-hidden transition ease-in-out delay-100 hover:brightness-50 hover:scale-100">
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" :src="post.imageUrl" alt="" />
          </div>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm font-medium text-indigo-600">
                <a :href="post.category.href" class="hover:underline">
                  {{ post.category.name }}
                </a>
              </p>
              <a :href="post.href" class="block mt-2">
                <p class="text-xl font-semibold text-pink-400">
                  {{ post.title }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {{ post.description }}
                </p>
              </a>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NewspaperIcon } from "@heroicons/vue/outline";

const posts = [
  {
    title: "Visite du War Museum",
    href: "#",
    category: { name: "Aye", href: "#" },
    description:
      "C’est en décembre 1944 que Bastogne et les villages qui l’entourent vont connaître la dernière et la plus tragique page de leur histoire. Pendant près d’un mois, soldats allemands et américains s’affrontent dans une terrible bataille.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://ecolescommunales.marche.be/aye/wp-content/uploads/sites/2/2017/11/DSC05378.jpg",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  },
  {
    title: "Les tablettes envahissent la classe",
    href: "#",
    category: { name: "Portail", href: "#" },
    description:
      "L’année dernière, l’école a décidé de répondre à l’appel au projet « École numérique ».  Notre classe étant retenue, la Région Wallonne a offert la possibilité à nos élèves d’utiliser des tablettes numériques en classe.  Notre instituteur, fan d’informatique, a pris le projet en mains",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl:
      "https://ecolescommunales.marche.be/aye/wp-content/uploads/sites/2/2017/11/DSC05394.jpg",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  },
  {
    title: "Caspoggio 2022: récit de notre voyage!",
    href: "#",
    category: { name: "Waha", href: "#" },
    description:
      "Notre dernière journée entière en Italie se termine sur une victoire! En effet, une de nos équipes de mini-foot ramènera la coupe à la maison! Nous avons encore passé une belle journée sous le soleil de Caspoggio. Au programme: ski, visite de l'apiculteur et mini-foot!",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://ecolescommunales.marche.be/waha/wp-content/uploads/sites/3/2022/03/274849072_228240972790726_2748748359421998970_n.jpg",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  },
  {
    title: "Belle première journée pour les cinquièmes et sixièmes",
    href: "#",
    category: { name: "Hollogne", href: "#" },
    description:
      "Après un trajet assez long en car, nous sommes arrivés vers midi à Nausicaa. Nous avons vite mangé notre casse-croute puis sommes partis à la découverte de ce lieu magique. Nous avons passé trois heures magnifiques et en avons pris plein les yeux.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://ecolescommunales.marche.be/hollogne/wp-content/uploads/sites/4/2019/09/sportica1.png",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  },
  {
    title: "Le petit magasin",
    href: "#",
    category: { name: "Humain", href: "#" },
    description:
      "Tous les mercredis du mois d’octobre, les élèves des classes maternelles tiendront un petit magasin afin de récolter de l’argent pour réaliser différents projets. Aujourd’hui, c’était pop-corn. Comme on peut voir sur les photos,  grâce au magasin, ils ont fait des mathématiques.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://ecolescommunales.marche.be/humain/wp-content/uploads/sites/5/2021/10/IMG-20211006-WA0007.jpg",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  },
  {
    title: "Building heroes",
    href: "#",
    category: { name: "Hargimont", href: "#" },
    description:
      "Les enfants de 5-6 immersion ont pu découvrir quelques métiers de la construction, visiter un chantier réel et faire une descente en tyrolienne !L'organisation était top!",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://ecolescommunales.marche.be/hargimont/wp-content/uploads/sites/7/2022/05/IMG_20220429_091628-scaled.jpg",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  }
];
</script>