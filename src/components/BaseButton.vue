<script setup>
import { defineProps } from 'vue'
import { goTo } from '@/router';

const props = defineProps({
    content: {
        type: String,
        required: true
    },
    primary: {
        type: Boolean,
        default: false
    },
    path: {
        type: String,
        default: null
    },
    action: {
        type: Function,
        default: null
    }
});

const handleClick = () => {
    if (props.action) {
        props.action();
    } else if (props.path) {
        goTo(props.path);
    }
};
</script>

<template>
    <button @click="handleClick" 
        class="w-full h-12 rounded-xl font-semibold"
        :class="props.primary ? 'bg-libelo-500 text-white hover:bg-libelo-600' : 'bg-neutral-200 text-black border border-neutral-300 hover:bg-neutral-300'">
        {{ props.content }}
    </button>
</template>