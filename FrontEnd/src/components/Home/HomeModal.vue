<script setup>
import BaseButton from "@/components/BaseButton.vue";
import { X } from "lucide-vue-next";
import { defineProps, defineEmits, ref } from "vue";

const props = defineProps({
    showModal: Boolean
});

const emit = defineEmits(["close", "add-subject"]);
const subjectName = ref("");

const closeModal = () => {
    emit("close");
};

const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
        closeModal();
    }
};

const handleAddSubject = () => {
    if (subjectName.value.trim()) {
        emit("add-subject", subjectName.value.trim());
        subjectName.value = "";
        closeModal();
    }
};
</script>

<template>
    <div v-if="props.showModal" class="fixed inset-0 flex items-end justify-center bg-black bg-opacity-60 z-50 max-w-mobile" @click="handleOverlayClick">
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
                    <input v-model="subjectName" type="subject" id="hs-floating-input-subject" class="peer p-4 block w-full border border-neutral-500 rounded-lg text-sm placeholder:text-transparent focus:border-libelo-500 focus:ring-libelo-500 disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2" placeholder="Agregar nueva materia">
                    <label for="hs-floating-input-subject" class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500">Agregar nueva materia</label>
                </div>
            </div>
            <div class="py-2">
                <BaseButton @click="handleAddSubject" content="Agregar materia" primary />
            </div>
        </div>
    </div>
</template>