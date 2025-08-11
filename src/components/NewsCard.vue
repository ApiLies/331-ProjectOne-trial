<script setup lang="ts">
import { type News } from '@/types'

defineProps<{
  news: News
}>()
</script>

<template>
  <RouterLink
    class="no-underline text-[#2c3e50]"
    :to="{ name: 'news-detail-view', params: { id: news.id } }"
  >
    <div
      class="cursor-pointer border border-gray-600 p-5 w-[250px] mb-[18px] hover:scale-[1.01] hover:shadow-sp transition-transform duration-200"
    >
      <h2>{{ news.topic }}</h2>
      <p class="text-sm text-gray-400 mb-2">{{ news.short_detail }}</p>
      <span class="block mb-1">
        Status:
        <span
          :class="{
            'text-green-400': news.status === 'True',
            'text-red-400': news.status === 'False',
            'text-yellow-400': news.status === 'Pending',
          }"
        >
          {{ news.status }}
        </span>
      </span>
      <span class="block text-sm text-gray-500"> by {{ news.reporter }} </span>
      <span class="block text-sm text-gray-500"> on {{ news.date }} @ {{ news.time }}</span>
    </div>
  </RouterLink>
</template>
