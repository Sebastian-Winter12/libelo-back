<script setup>
import { ChevronRight } from 'lucide-vue-next';
import { defineProps } from 'vue';

defineProps({
    title: String,
    icon: Object,
    account: {
        type: Boolean,
        default: false
    },
});
</script>

<template>
    <div class="flex items-center justify-between bg-white w-full p-3 rounded-xl">
        <div class="flex gap-2 items-center">
            <template v-if="account">
                <img src="https://avatar.iran.liara.run/public/2" alt="Imagen de perfil" class="size-12">
                <div class="flex flex-col">
                    <p class="font-semibold">Mariano Buranits</p>
                    <p class="text-sm text-neutral-500">mariano.buranits@davinci.edu.ar</p>
                </div>
            </template>
            <template v-else>
                <div class="flex items-center justify-center bg-neutral-200/60 size-10 rounded-lg">
                    <component :is="icon" :size="24" />
                </div>
            </template>
            <p>{{ title }}</p>
        </div>
        <ChevronRight :size="24" />
    </div>
</template>