<script setup>
import HomeNav from "@/components/Home/HomeNav.vue";
import BaseBody from "@/components/BaseBody.vue";
import BaseTitle from "@/components/BaseTitle.vue";
import { Plus, X } from "lucide-vue-next";
import { goTo } from "@/router/index";
import { ref } from "vue";
import BaseButton from "@/components/BaseButton.vue";

const showModal = ref(false);

const closeModal = () => {
    showModal.value = false;
};

const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
        closeModal();
    }
};
</script>

<template>
    <BaseBody>
        <HomeNav />
        <div class="flex flex-col gap-4 p-2">
            <div class="h-[150px] w-full bg-libelo-500 rounded-xl">
                <div class="p-3 flex flex-col text-neutral-100">
                    <p>¡Bienvenido <span class="text-orange-400 font-semibold">Usuario</span>!</p>
                    <p class="text-neutral-300 text-sm text-balance">Empieza ahora y conecta con mentores expertos en la materia que elijas, ¡ellos te ayudarán!</p>
                </div>
            </div>
            <BaseTitle title="Tus materias" description="Descubre una variedad de materias y encuentra el mentor perfecto para tus necesidades educativas.">
                <div class="grid grid-cols-2 gap-2 w-full text-white font-semibold">
                    <div @click="goTo('/class')" class="flex items-center justify-center w-full h-20 p-3 rounded-xl bg-red-800 uppercase">Literatura</div>
                </div>
            </BaseTitle>
        </div>
        <button id="show-modal" @click="showModal = true" class="fixed bottom-0 right-0 size-12 flex items-center justify-center bg-libelo-500 rounded-full mr-2 mb-2 text-white">
            <Plus :size="24" />
        </button>

        <div v-if="showModal" class="fixed inset-0 flex items-end justify-center bg-black bg-opacity-60 z-50" @click="handleOverlayClick">
            <div class="bg-white p-2 rounded-t-xl w-full">
                <div class="flex justify-between items-center py-2">
                    <p class="text-lg font-semibold">Nueva materia</p>
                    <button class="flex items-center justify-center bg-neutral-100 rounded-full p-2 text-neutral-600" @click="closeModal">
                        <X :size="16" :stroke-width="3" />
                    </button>
                </div>
                <hr>
                <div class="py-2">
                    <div class="relative">
                        <input type="subject" id="hs-floating-input-subject" class="peer p-4 block w-full border border-neutral-500 rounded-lg text-sm placeholder:text-transparent focus:border-libelo-500 focus:ring-libelo-500 disabled:opacity-50 disabled:pointer-events-none 
                        focus:pt-6
                        focus:pb-2
                        [&:not(:placeholder-shown)]:pt-6
                        [&:not(:placeholder-shown)]:pb-2
                        autofill:pt-6
                        autofill:pb-2" placeholder="Agregar nueva materia">
                        <label for="hs-floating-input-subject" class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500">Agregar nueva materia</label>
                    </div>
                </div>
                <div class="py-2">
                    <BaseButton content="Agregar materia" primary />
                </div>
            </div>
        </div>
    </BaseBody>
</template>
