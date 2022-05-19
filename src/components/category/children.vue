<template>
  <dl class="mt-16 max-w-2xl mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
    <div v-for="feature in features" :key="feature.name" class="border-t border-gray-200 pt-4">
      <dt class="font-medium text-gray-900">{{ feature.name }}</dt>
      <dd class="mt-2 text-sm text-gray-500">{{ feature.description }}</dd>
    </div>
  </dl>
</template>