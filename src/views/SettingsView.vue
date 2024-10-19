<script setup>
import BaseBody from "@/components/BaseBody.vue";
import BaseNav from "@/components/BaseNav.vue";
import LabelTitle from "@/components/Settings/LabelTitle.vue";
import BaseItem from "@/components/Settings/BaseItem.vue";
import { Book, BookOpenCheck, CalendarDays, Goal, Languages, LayoutDashboard, MessageSquareDot, NotebookPen } from "lucide-vue-next";
</script>

<template>
    <BaseBody>
        <BaseNav title="Configuración" />
        <div class="flex flex-col gap-4 p-2">
            <LabelTitle label="Perfil">
                <BaseItem account />
            </LabelTitle>
            <LabelTitle label="Aprendizaje">
                <BaseItem title="Materias" :icon="Book" />
                <BaseItem title="Objetivos" :icon="Goal" />
                <BaseItem title="Calendario" :icon="CalendarDays" />
                <BaseItem title="Evaluaciones" :icon="BookOpenCheck" />
                <BaseItem title="Ejercicios" :icon="NotebookPen" />
            </LabelTitle>
            <LabelTitle label="General">
                <BaseItem title="Notificaciones" :icon="MessageSquareDot" />
                <BaseItem title="Idioma" :icon="Languages" />
                <BaseItem title="Personalización" :icon="LayoutDashboard" />
            </LabelTitle>
        </div>
    </BaseBody>
</template>