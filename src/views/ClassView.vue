<script setup>
import BaseBody from "@/components/BaseBody.vue";
import BaseNav from "@/components/BaseNav.vue";
import BaseInfo from "@/components/BaseInfo.vue";
import BaseCard from "@/components/Class/BaseCard.vue";
import { BookOpenCheck, Bot, CalendarDays, Goal, NotebookPen, UserRound } from "lucide-vue-next";
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
                    <BaseCard title="Chat rápido" description="Realiza una consulta instantánea.">
                        <Bot :size="20" />
                    </BaseCard>
                    <BaseCard title="Chat profesional" description="Habla con un experto y resuelve tus dudas.">
                        <UserRound :size="20" />
                    </BaseCard>
                </div>
            </BaseInfo>

            <BaseInfo title="Progreso y planificación" description="Gestiona tus sesiones, evalúa tu avance y mejora con ejercicios prácticos.">
                <div class="grid grid-cols-2 gap-2">
                    <BaseCard title="Objetivos" description="Establece y sigue tus metas de aprendizaje." :color="false">
                        <Goal :size="20" />
                    </BaseCard>
                    <BaseCard title="Calendario" description="Planifica y agenda tus próximas sesiones." :color="false">
                        <CalendarDays :size="20" />
                    </BaseCard>
                    <BaseCard title="Trabajos" description="Revisa y evalúa tu progreso académico." :color="false">
                        <BookOpenCheck :size="20" />
                    </BaseCard>
                    <BaseCard title="Ejercicios" description="Practica con ejercicios y mejora tus habilidades." :color="false">
                        <NotebookPen :size="20" />
                    </BaseCard>
                </div>
            </BaseInfo>

            <button class="w-full h-12 bg-libelo-500 rounded-xl text-white font-semibold hover:bg-libelo-600">Configuración</button>
        </div>
    </BaseBody>
</template>