<script setup lang="ts">
import { toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { type News } from '@/types'

const props = defineProps<{
  news: News
  id: string
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { news } = toRefs(props)
const router = useRouter()
const store = useMessageStore()

const register = () => {
  store.updateMessage('You are successfully registered for ' + props.news.topic)
  setTimeout(() => {
    store.resetMessage()
  }, 3000)
  router.push({ name: 'news-detail-view', params: { id: props.news.id } })
}
</script>

<template>
  <p>Register news here</p>
  <button @click="register" class="btn-primary">Register</button>
</template>
