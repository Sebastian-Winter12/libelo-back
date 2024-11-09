<script setup>
import BaseBody from "@/components/BaseBody.vue";
import BaseNav from "@/components/BaseNav.vue";
import BaseTitle from "@/components/BaseTitle.vue";
import BaseCard from "@/components/Class/BaseCard.vue";
import { BookOpenCheck, Bot, CalendarDays, Goal, NotebookPen, UserRound } from "lucide-vue-next";
import ClassBanner from "@/components/ClassBanner.vue";
import BaseButton from "@/components/BaseButton.vue";
</script>

<template>
    <BaseBody>
        <BaseNav title="Materia" />
        <div class="flex flex-col gap-4 p-2">
            <ClassBanner />
            <BaseTitle title="Opciones de chat" description="Elige entre asistencia inmediata de IA o asesoramiento experto de mentores.">
                <div class="grid grid-cols-2 gap-2">
                    <BaseCard link-to="chat/fast" title="Chat rápido" description="Realiza una consulta instantánea." :icon="Bot" />
                    <BaseCard title="Chat profesional" description="Habla con un experto y resuelve tus dudas." :icon="UserRound" />
                </div>
            </BaseTitle>

            <BaseTitle title="Progreso y planificación" description="Gestiona tus sesiones, evalúa tu avance y mejora con ejercicios prácticos.">
                <div class="grid grid-cols-2 gap-2">
                    <BaseCard title="Objetivos" description="Establece y sigue tus metas de aprendizaje." :color="false" :icon="Goal" />
                    <BaseCard title="Calendario" description="Planifica y agenda tus próximas sesiones." :color="false" :icon="CalendarDays" />
                    <BaseCard link-to="work" title="Trabajos" description="Revisa y evalúa tu progreso académico." :color="false" :icon="BookOpenCheck" />
                    <BaseCard title="Ejercicios" description="Practica con ejercicios y mejora tus habilidades." :color="false" :icon="NotebookPen" />
                </div>
            </BaseTitle>

            <BaseButton primary content="Configuración" path="/settings" />
        </div>
    </BaseBody>
</template>