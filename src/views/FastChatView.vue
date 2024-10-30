<script setup>
import BaseNav from '../components/BaseNav.vue';
import BaseBody from '../components/BaseBody.vue';
import { SendHorizontalIcon } from 'lucide-vue-next';
</script>

<template>
    <BaseBody>
        <BaseNav title="Chat rápido" />
        <div class="flex flex-col justify-between gap-10 p-2">
            <div class="bg-slate-700 w-full h-full"></div>
            <div class="flex flex-col gap-3 w-full">
                <div class="flex justify-center items-center w-full py-2 bg-white rounded-full">
                    <span class="text-sm text-neutral-700">Estás en un chat rápido de (materia)</span>
                </div>
                <div class="flex items-center gap-3 bg-white rounded-full w-full h-14 p-2">
                    <div class="size-10 rounded-full flex-shrink-0">
                        <img src="https://avatar.iran.liara.run/public/2" alt="Imagen de perfil">
                    </div>
                    <div class="bg-blue-950 h-full w-full">
                        <input type="text" class="w-full h-full text-black" placeholder="Escribe un mensaje..." />
                    </div>
                    <div class="flex items-center justify-center bg-libelo-500 size-10 rounded-full flex-shrink-0 text-white">
                        <SendHorizontalIcon :size="20" />
                    </div>
                </div>
            </div>
        </div>
    </BaseBody>
</template>