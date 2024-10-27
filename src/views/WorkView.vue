<script setup>
import BaseBody from "@/components/BaseBody.vue";
import BaseNav from "@/components/BaseNav.vue";
import BaseTitle from "@/components/BaseTitle.vue";
import ClassBanner from "@/components/ClassBanner.vue";
import StatusCard from "@/components/Work/StatusCard.vue";
import PendingCard from "@/components/Work/PendingCard.vue";
</script>

<template>
    <BaseBody>
        <BaseNav title="Trabajos" />
        <div class="flex flex-col gap-4 p-2">
            <ClassBanner />
            <BaseTitle title="Gestión de trabajos" description="Supervisa tu progreso revisando los trabajos y celebra tus logros con los trabajos completados.">
                <div class="grid grid-cols-2 gap-2 w-full">
                    <StatusCard count="2" description="Trabajos pendientes" />
                    <StatusCard count="0" description="Trabajos completados" />
                </div>
            </BaseTitle>
            <BaseTitle title="Trabajos pendientes" description="Los trabajos están conectados con Classroom.">
                <PendingCard title="Trabajo Practico 2" date="28/06/2024 | 9:00" />
                <PendingCard title="Introducción al Análisis Literario II" date="03/07/2024 | 11:00" />
            </BaseTitle>
        </div>
    </BaseBody>
</template>