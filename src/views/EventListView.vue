<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import { type Event } from '@/types'
import { ref, onMounted, computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import EventService from '@/services/EventService'

const events = ref<Event[] | null>(null)
const totalEvents = ref(0)

const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
})

const page = computed(() => props.page)
const selectedSize = ref(props.size)

const router = useRouter()

function changeSize() {
  router.push({
    name: 'event-list-view',
    query: {
      page: 1,
      size: selectedSize.value,
    },
  })
}

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / selectedSize.value)
  return page.value < totalPages
})

onMounted(() => {
  watchEffect(() => {
    EventService.getEvents(selectedSize.value, page.value)
      .then((response) => {
        events.value = response.data
        totalEvents.value = parseInt(response.headers['x-total-count'])
      })
      .catch((error) => {
        console.error('There was an error!', error)
      })
  })
})
</script>

<template>
  <h1 class="text-4xl mb-8">Events for Good</h1>

  <!-- Size selector -->
  <div class="mb-4">
    <label for="size" class="mr-2 text-base font-medium text-gray-700">Events per page:</label>
    <select
      id="size"
      v-model.number="selectedSize"
      @change="changeSize"
      class="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      <option :value="2">2</option>
      <option :value="3">3</option>
      <option :value="5">5</option>
    </select>
  </div>

  <div class="flex flex-col items-center gap-4">
    <EventCard v-for="event in events" :key="event.id" :event="event" />

    <div class="flex justify-between w-[290px] text-base">
      <RouterLink
        id="page-prev"
        :to="{ name: 'event-list-view', query: { page: page - 1, size: selectedSize } }"
        rel="prev"
        class="flex-1 text-left no-underline text-[#2c3e50] font-medium hover:underline"
        v-if="page != 1"
      >
        &#60; Prev Page
      </RouterLink>

      <RouterLink
        id="page-next"
        :to="{ name: 'event-list-view', query: { page: page + 1, size: selectedSize } }"
        rel="next"
        class="flex-1 text-right no-underline text-[#2c3e50] font-medium hover:underline"
        v-if="hasNextPage"
      >
        Next Page &#62;
      </RouterLink>
    </div>
  </div>
</template>
