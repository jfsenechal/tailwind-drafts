<template>
  <Disclosure as="nav" class="bg-white shadow" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <img class="block lg:hidden h-8 w-auto"
                 src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
            <img class="hidden lg:block h-12 w-auto"
                 src="../assets/logo-ecole.png"
                 alt="Workflow" />
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
            <a v-for="item in navigation" :key="item.name" :href="item.href"
               href="#"
               class="border-transparent text-gray-500 hover:border-orange hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
              {{ item.name }}
            </a>
            <MenuSingle/>
          </div>
        </div>
      </div>
    </div>
  </Disclosure>
</template>

<script setup>
import MenuSingle from "./MenuSingle.vue";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/vue/outline";

defineProps(["navigation"]);
</script>