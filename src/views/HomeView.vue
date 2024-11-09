<script setup>
import HomeNav from "@/components/Home/HomeNav.vue";
import BaseBody from "@/components/BaseBody.vue";
import BaseTitle from "@/components/BaseTitle.vue";
import { Plus } from "lucide-vue-next";
import { goTo } from "@/router/index";
import { ref } from "vue";
import BaseInput from "@/components/BaseInput.vue";
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
                <div class="flex justify-center">
                    <span class="text-lg font-semibold">Agregar nueva materia</span>
                </div>
                <div class="flex flex-col pt-6 pb-2">
                    <BaseInput identifier="subject" placeholder="Introduzca una materia" label="Materia" type="text" />
                </div>
                <div class="grid grid-cols-[1fr_2fr] gap-2">
                    <BaseButton content="Cerrar" :action="closeModal" />
                    <BaseButton primary content="Agregar" />
                </div>
            </div>
        </div>
    </BaseBody>
</template>
