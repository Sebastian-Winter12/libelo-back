<script setup>
import { defineProps } from 'vue'

defineProps({
    identifier: String,
    placeholder: String,
    label: String,
    type: {
        type: String,
        default: 'text'
    },
    password: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <div class="flex flex-col gap-1 w-full">
        <div class="flex justify-between">
            <label class="font-semibold" :for="identifier">{{ label }}</label>
            <span v-if="password" class="text-libelo-500 text-sm">Me olvidé la contraseña</span>
        </div>
        <input class="w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500" :name="identifier" :id="identifier" :type="type" :placeholder="placeholder">
    </div>
</template>