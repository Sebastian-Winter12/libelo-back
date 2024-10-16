<script setup>
import { defineProps } from 'vue';

defineProps({
    title: String,
    description: String,
    color: {
        type: Boolean,
        default: true
    }
});
</script>

<template>
    <div class="flex flex-col p-3 h-fit rounded-xl text-neutral-700" :class="color ? 'bg-gradient-to-b from-[#D8D8D8] to-[#CECECE]' : 'border border-neutral-300'" >
        <div class="flex gap-2">
            <slot />
            <p class="font-bold">{{ title }}</p>
        </div>
        <p class="text-sm">{{ description }}</p>
    </div>
</template>