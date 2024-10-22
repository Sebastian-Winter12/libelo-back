<script setup>
import { defineProps } from 'vue'

defineProps({
    count: Number,
    description: String
})
</script>

<template>
    <div class="flex flex-col items-center justify-center border border-neutral-300 rounded-xl w-full py-2">
        <div class="text-2xl font-semibold">{{ count }}</div>
        <div>{{ description }}</div>
    </div>
</template>