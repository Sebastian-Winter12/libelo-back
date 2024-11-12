<script setup>
import { goTo } from '@/router';
import { defineProps } from 'vue';

const props = defineProps({
    title: String,
    description: String,
    color: {
        type: Boolean,
        default: true
    },
    icon: Function,
    linkTo: String
});

const handleClick = () => {
    if (props.linkTo) {
        goTo(props.linkTo);
    }
};
</script>

<template>
    <div @click="handleClick" class="flex flex-col p-3 h-fit rounded-xl text-neutral-700" :class="props.color ? 'bg-gradient-to-b from-[#D8D8D8] to-[#CECECE]' : 'border border-neutral-300'" >
        <div class="flex gap-2">
            <component :is="props.icon" :size="20" />
            <p class="font-bold">{{ props.title }}</p>
        </div>
        <p class="text-sm">{{ props.description }}</p>
    </div>
</template>