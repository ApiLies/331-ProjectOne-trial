<script setup lang="ts">
import type { Event } from '@/types'

defineProps<{
  event: Event
}>()
</script>

<template>
  <div
    class="text-right text-base p-5 w-[200px] cursor-pointer border border-gray-700 mb-[18px] transition-transform duration-200 hover:scale-[1.01] hover:shadow-sp"
  >
    <div>{{ event.category }}</div>
    <div>{{ event.organizer }}</div>
  </div>
</template>
