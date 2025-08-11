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

const edit = () => {
  store.updateMessage('Data of ' + props.news.topic + ' has been updated.')
  setTimeout(() => {
    store.resetMessage()
  }, 3000)
  router.push({ name: 'news-detail-view', params: { id: props.news.id } })
}
</script>

<template>
  <p>Edit news here</p>
  <button @click="edit" class="btn-primary">Edit</button>
</template>
