<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
import { type News } from '@/types'
import NewsService from '@/services/NewsService'

const news = ref<News | null>(null)

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

onMounted(() => {
  NewsService.getNewsItem(parseInt(props.id))
    .then((response) => {
      news.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
</script>

<template>
  <div v-if="news">
    <h1>{{ news.topic }}</h1>
    <p>Status: {{ news.status }}</p>
    <p>Reported by {{ news.reporter }}</p>
    <p>{{ news.date }} @ {{ news.time }}</p>
    <p>{{ news.short_detail }}</p>
  </div>
</template>
