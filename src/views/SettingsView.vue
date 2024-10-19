<script setup>
import BaseBody from "@/components/BaseBody.vue";
import BaseNav from "@/components/BaseNav.vue";
import { ChevronRight, Book } from "lucide-vue-next";
</script>

<template>
    <BaseBody>
        <BaseNav title="Configuración" />
        <div class="flex flex-col gap-4 p-2">
            <div class="flex flex-col">
                <h2 class="uppercase py-2 px-3 font-semibold text-sm">Perfil</h2>
                <div class="flex items-center justify-between bg-white w-full p-3 rounded-xl">
                    <div class="flex gap-2 items-center">
                        <img src="https://avatar.iran.liara.run/public/2" alt="Imagen de perfil" class="size-12">
                        <div class="flex flex-col">
                            <p class="font-semibold">Mariano Buranits</p>
                            <p class="text-sm text-neutral-500">mariano.buranits@davinci.edu.ar</p>
                        </div>
                    </div>
                    <ChevronRight :size="24" />
                </div>
            </div>
            <div class="flex flex-col">
                <h2 class="uppercase py-2 px-3 font-semibold text-sm">Aprendizaje</h2>
                <div class="flex items-center justify-between bg-white w-full p-3 rounded-xl">
                    <div class="flex gap-2 items-center">
                        <div class="flex items-center justify-center bg-neutral-200/60 size-10 rounded-lg">
                            <Book :size="20" />
                        </div>
                        <p>Materias</p>
                    </div>
                    <ChevronRight :size="24" />
                </div>
            </div>
        </div>
    </BaseBody>
</template>