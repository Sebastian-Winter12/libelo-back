<script setup>
import BaseBody from "@/components/BaseBody.vue";
import BaseNav from "@/components/BaseNav.vue";
import BaseInfo from "@/components/BaseInfo.vue";
</script>

<template>
    <BaseBody>
        <BaseNav />
        <div class="flex flex-col gap-4 p-2">
            <div class="flex flex-col justify-end p-3 h-[100px] w-full bg-red-800 rounded-xl">
                <div class="text-white font-semibold text-xl uppercase">Literatura</div>
            </div>
            <BaseInfo title="Opciones de chat" description="Elige entre asistencia inmediata de IA o asesoramiento experto de mentores.">
                <div class="grid grid-cols-2 gap-2">
                    <div class="bg-red-300 h-24 rounded-xl"></div>
                </div>
            </BaseInfo>
        </div>
    </BaseBody>
</template>