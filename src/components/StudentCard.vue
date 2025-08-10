<script setup lang="ts">
interface Student {
  id: string
  name: string
  surname: string
  gpa: number
}

defineProps<{ student: Student }>()
</script>

<template>
  <div
    class="border border-gray-700 rounded-lg p-4 w-[220px] shadow-md bg-white text-center m-2 transition-transform duration-200 hover:scale-[1.01] hover:shadow-sp"
  >
    <h2>{{ student.name }} {{ student.surname }}</h2>
    <p>GPA: {{ student.gpa }}</p>
  </div>
</template>
