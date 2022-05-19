<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
    <h3 class="text-3xl leading-6 font-medium text-pink-500">Le carnaval de l’école</h3>
    <div class="mt-3 flex sm:mt-0 sm:ml-4 gap-2">
      <button type="button"
              class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

        <span class="sr-only">Partager</span>
        <ShareIcon class="h-6 w-6" aria-hidden="true" />
      </button>
      <button type="button"
              class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

        <span class="sr-only">Imprimer</span>
        <PrinterIcon class="h-6 w-6" aria-hidden="true" />
      </button>

    </div>
  </div>
</template>
<script setup>

import { PrinterIcon } from "@heroicons/vue/outline";
import { ShareIcon } from "@heroicons/vue/outline";
</script>