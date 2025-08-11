<script setup lang="ts">
import { useNewsStore } from '@/stores/News'
import { storeToRefs } from 'pinia'

const store = useNewsStore()
const { news } = storeToRefs(store)
</script>

<template>
  <div v-if="news">
    <h1 class="text-4xl mb-6">{{ news.topic }}</h1>

    <nav class="mb-4">
      <RouterLink
        class="font-bold text-gray-700"
        exact-active-class="text-green-500"
        :to="{ name: 'news-detail-view' }"
      >
        Details
      </RouterLink>
      |
      <RouterLink
        class="font-bold text-gray-700"
        exact-active-class="text-green-500"
        :to="{ name: 'news-register-view' }"
      >
        Register
      </RouterLink>
      |
      <RouterLink
        class="font-bold text-gray-700"
        exact-active-class="text-green-500"
        :to="{ name: 'news-edit-view' }"
      >
        Edit
      </RouterLink>
    </nav>

    <RouterView :news="news" />
  </div>
</template>
