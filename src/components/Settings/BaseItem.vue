<script setup>
import { defineProps } from 'vue'

defineProps({
    title: String,
    icon: Object
})
</script>

<template>
    <div class="flex flex-col">
        <h2 class="uppercase py-2 px-3 font-semibold text-sm"></h2>
        <div class="flex items-center justify-between bg-white w-full p-3 rounded-xl">
            <div class="flex gap-2 items-center">
                <div class="flex items-center justify-center bg-neutral-200/60 size-10 rounded-lg">
                    <component :is="icon" :size="20" />
                </div>
                <p>{{ title }}</p>
            </div>
            <ChevronRight :size="24" />
        </div>
    </div>
</template>