<script setup lang="ts">
import { toRefs, defineProps } from 'vue'
import { type News } from '@/types'

const props = defineProps<{
  news: News
}>()
const { news } = toRefs(props)
</script>

<template>
  <p>Status: {{ news.status }}</p>
  <p>Reported by {{ news.reporter }}</p>
  <p>{{ news.date }} @ {{ news.time }}</p>
  <p>{{ news.short_detail }}</p>
</template>
