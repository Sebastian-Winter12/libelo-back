<script setup>
import { useRouter } from 'vue-router';
import { ArrowLeft } from 'lucide-vue-next';
import { defineProps } from 'vue';

const router = useRouter();
const goBack = () => router.back();

defineProps({
    title: String,
    description: String
});
</script>

<template>
    <div @click="goBack" class="size-12 flex items-center justify-center border border-neutral-300 rounded-xl">
        <ArrowLeft :size="20" />
    </div>
    <div class="flex flex-col mt-2 mb-6">
        <h1 class="font-semibold text-2xl">{{ title }}</h1>
        <p class="text-neutral-700">{{ description }}</p>
    </div>
</template>