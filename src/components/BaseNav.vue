<script setup>
import { ArrowLeft, EllipsisVertical } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';

defineProps({
    title: String
});

const router = useRouter();
const goBack = () => router.back();
</script>

<template>
    <div class="flex justify-between items-center px-2 bg-white border-b border-gray-300">
        <div @click="goBack" class="size-10 flex items-center justify-center">
            <ArrowLeft :size="20" />
        </div>
        <div class="font-semibold text-lg">{{ title }}</div>
        <div class="size-10 flex items-center justify-center">
            <EllipsisVertical :size="20" />
        </div>
    </div>
</template>