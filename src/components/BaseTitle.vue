<script setup>
import { defineProps } from 'vue'

defineProps({
    title: String,
    description: String,
})
</script>

<template>
    <div class="flex flex-col gap-2">
        <div class="flex flex-col">
            <h1 class="text-lg text-zinc-900 font-semibold">{{ title }}</h1>
            <p class="text-sm text-zinc-700">{{ description }}</p>
        </div>
        <slot />
    </div>
</template>