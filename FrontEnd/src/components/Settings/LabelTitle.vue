<script setup>
import { defineProps } from 'vue'

defineProps({
    label: String
})
</script>

<template>
    <div class="flex flex-col">
        <h2 class="uppercase py-2 px-3 font-semibold text-sm">{{ label }}</h2>
        <div class="flex flex-col gap-2">
            <slot />
        </div>
    </div>
</template>