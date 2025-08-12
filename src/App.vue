<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from './stores/message'
import { storeToRefs } from 'pinia'
import { SpeedInsights } from '@vercel/speed-insights/vue'

const store = useMessageStore()
const { message } = storeToRefs(store)
</script>

<template>
  <div class="bg-white p-4 rounded">
    <div class="text-center font-sans text-gray-700 antialias">
      <header>
        <div id="flashMessage" class="animate-fade" v-if="message">
          <h4>{{ message }}</h4>
        </div>

        <div class="max-w-4xl mx-auto px-4">
          <nav class="py-6">
            <RouterLink
              class="font-bold text-gray-700"
              exact-active-class="text-green-500"
              :to="{ name: 'news-list-view' }"
              >News</RouterLink
            >
          </nav>
        </div>
      </header>
      <RouterView />
    </div>
  </div>
  <SpeedInsights />
</template>
