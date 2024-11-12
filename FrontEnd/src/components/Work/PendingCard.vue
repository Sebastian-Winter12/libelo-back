<script setup>
import { ChevronRight } from 'lucide-vue-next';
import defineProps from 'vue';

defineProps({
    title: String,
    date: String
})
</script>

<template>
    <div class="flex items-center justify-between bg-white w-full p-3 rounded-xl">
        <div class="flex gap-2 items-center">
            <div class="flex items-center justify-center bg-gradient-to-t from-red-800 to-red-700 size-10 rounded-lg text-white font-semibold">
                L
            </div>
            <div class="flex flex-col">
                <div class="font-semibold">{{ title }}</div>
                <div class="text-sm text-neutral-700">{{ date }}</div>
            </div>
        </div>
        <ChevronRight :size="24" />
    </div>
</template>