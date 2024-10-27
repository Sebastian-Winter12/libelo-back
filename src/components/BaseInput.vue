<script setup>
import { defineProps } from 'vue'

defineProps({
  identifier: String,
  placeholder: String,
  label: String,
  type: {
    type: String,
    default: 'text'
  }
})
</script>

<template>
  <div class="flex flex-col w-full">
    <label class="text-gray-700 font-semibold" :for="identifier">{{ label }}</label>
    <input class="w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" :name="identifier" :id="identifier" :type="type" :placeholder="placeholder">
  </div>
</template>