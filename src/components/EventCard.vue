<script setup lang="ts">
import { type Event } from '@/types'
defineProps<{
  event: Event
}>()
</script>

<template>
  <RouterLink
    class="no-underline text-[#2c3e50]"
    :to="{ name: 'event-detail-view', params: { id: event.id } }"
  >
    <div
      class="cursor-pointer border border-gray-600 p-5 w-[250px] mb-[18px] hover:scale-[1.01] hover:shadow-sp transition-transform duration-200"
    >
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
    </div>
  </RouterLink>
</template>
