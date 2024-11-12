<script setup>
import BaseNav from '../components/BaseNav.vue';
import BaseBody from '../components/BaseBody.vue';
import { SendHorizontalIcon, Bot } from 'lucide-vue-next';
</script>

<template>
    <BaseBody class="max-h-screen">
        <BaseNav title="Chat rápido" />
        <div class="flex flex-col justify-between gap-10 p-2 pt-0 max-h-[calc(100vh-60px)]">
            <div class="flex flex-col items-end overflow-y-auto">
                <div class="flex flex-col justify-end gap-5 pt-2">
                    <div class="flex gap-2">
                        <div class="flex items-center justify-center size-9 bg-orange-600 rounded-full text-white flex-shrink-0">
                            <Bot :size="20" />
                        </div>
                        <div class="flex flex-col w-full gap-1">
                            <span class="text-sm text-orange-600 font-semibold">Inteligencia Artificial</span>
                            <div class="bg-orange-600/40 p-2 rounded-xl w-fit">
                                <p class="text-sm">¡Hola! Bienvenido al chat de Inteligencia Artificial especializado en (materia). ¿En qué puedo asistirte hoy?</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-2">
                        <div class="flex items-center justify-center size-9 rounded-full text-white flex-shrink-0">
                            <img src="https://avatar.iran.liara.run/public/2" alt="Imagen de perfil">
                        </div>
                        <div class="flex flex-col w-full gap-1">
                            <span class="text-sm text-libelo-500 font-semibold">Mariano Buranits</span>
                            <div class="bg-libelo-500 p-2 rounded-xl w-fit">
                                <p class="text-sm text-white">¿Cuál es la capital de Argentina?</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-2">
                        <div class="flex items-center justify-center size-9 bg-orange-600 rounded-full text-white flex-shrink-0">
                            <Bot :size="20" />
                        </div>
                        <div class="flex flex-col w-full gap-1">
                            <span class="text-sm text-orange-600 font-semibold">Inteligencia Artificial</span>
                            <div class="bg-orange-600/40 p-2 rounded-xl w-fit">
                                <p class="text-sm">La capital de Argentina es Buenos Aires y se encuentra en la región central-este del país, en la costa occidental del Río de la Plata.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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