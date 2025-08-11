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
      class="cursor-pointer border p-5 w-[270px] h-[400px] rounded-2xl hover:scale-[1.01] hover:shadow-sp transition-transform duration-200"
      :style="{
        backgroundColor:
          news.status === 'True'
            ? '#A6D189'
            : news.status === 'False'
              ? '#FA7F72'
              : news.status === 'Pending'
                ? '#FFDB4D'
                : 'white',
      }"
    >
      <h2>{{ news.topic }}</h2>
      <p class="text-[15px] text-left text-gray-700 mb-2">{{ news.short_detail }}</p>
      <span class="block mb-1">
        <span
          class="inline-block px-4 py-1 rounded-md font-semibold text-sm cursor-default select-none bg-white bg-opacity-80 text-gray-900 shadow-sm"
        >
          Status: {{ news.status }}
        </span>
      </span>
      <span class="block text-left text-sm text-gray-700"> by {{ news.reporter }} </span>
      <span class="block text-left text-sm text-gray-700">
        on {{ news.date }} @ {{ news.time }}
      </span>
    </div>
  </RouterLink>
</template>
