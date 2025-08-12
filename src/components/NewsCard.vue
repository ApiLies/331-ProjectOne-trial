<script setup lang="ts">
import { type News } from '@/types'

defineProps<{
  news: News
}>()
</script>

<template>
  <RouterLink
    class="no-underline text-white"
    :to="{ name: 'news-detail-view', params: { id: news.id } }"
  >
    <div
      class="cursor-pointer p-5 w-[270px] h-[400px] rounded-2xl hover:scale-[1.01] hover:shadow-sp transition-transform duration-200"
      :class="{
        'bg-gradient-to-r from-gray-800 to-green-300': news.status === 'True',
        'bg-gradient-to-r from-gray-800 to-red-400': news.status === 'False',
        'bg-gradient-to-r from-gray-800 to-yellow-300': news.status === 'Pending',
        'bg-white': !['True', 'False', 'Pending'].includes(news.status),
      }"
    >
      <h2>{{ news.topic }}</h2>
      <p class="text-[15px] text-left text-white mb-2">{{ news.short_detail }}</p>
      <span class="block mb-1">
        <span
          class="inline-block px-4 py-1 rounded-md font-semibold text-sm cursor-default select-none bg-white bg-opacity-80 text-gray-900 shadow-sm"
        >
          Status: {{ news.status }}
        </span>
      </span>
      <span class="block text-left text-sm text-white"> by {{ news.reporter }} </span>
      <span class="block text-left text-sm text-white"> on {{ news.date }} @ {{ news.time }} </span>
    </div>
  </RouterLink>
</template>
