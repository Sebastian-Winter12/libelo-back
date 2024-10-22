<script setup>
import BaseBody from "@/components/BaseBody.vue";
import BaseNav from "@/components/BaseNav.vue";
import BaseTitle from "@/components/BaseTitle.vue";
import ClassBanner from "@/components/ClassBanner.vue";
import StateCard from "@/components/Work/StateCard.vue";
</script>

<template>
    <BaseBody>
        <BaseNav title="Trabajos" />
        <div class="flex flex-col gap-4 p-2">
            <ClassBanner />
            <BaseTitle title="Gestión de trabajos" description="Supervisa tu progreso revisando los trabajos y celebra tus logros con los trabajos completados.">
                <div class="grid grid-cols-2 gap-2 w-full">
                    <StateCard count="2" description="Trabajos pendientes" />
                    <StateCard count="0" description="Trabajos completados" />
                </div>
            </BaseTitle>
            <BaseTitle title="Trabajos pendientes" description="Los trabajos están conectados con Classroom.">
                
            </BaseTitle>
        </div>
    </BaseBody>
</template>