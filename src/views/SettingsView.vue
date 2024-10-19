<script setup>
import BaseBody from "@/components/BaseBody.vue";
import BaseNav from "@/components/BaseNav.vue";
import LabelTitle from "@/components/Settings/LabelTitle.vue";
import BaseItem from "@/components/Settings/BaseItem.vue";
import { Book, BookOpenCheck, CalendarDays, Goal, Languages, LayoutDashboard, MessageSquareDot, NotebookPen } from "lucide-vue-next";

const SHORTCUTS = {
    profile: {
        label: "Perfil",
        special: true,
    },
    learning: {
        label: "Aprendizaje",
        items: [
            { title: "Materias", icon: Book },
            { title: "Objetivos", icon: Goal },
            { title: "Calendario", icon: CalendarDays },
            { title: "Evaluaciones", icon: BookOpenCheck },
            { title: "Ejercicios", icon: NotebookPen },
        ],
    },
    general: {
        label: "General",
        items: [
            { title: "Notificaciones", icon: MessageSquareDot },
            { title: "Idioma", icon: Languages },
            { title: "Personalización", icon: LayoutDashboard },
        ],
    },
}
</script>

<template>
    <BaseBody>
        <BaseNav title="Configuración" />
        <div class="flex flex-col gap-4 p-2">
            <template v-for="(category, key) in SHORTCUTS" :key="key">
                <LabelTitle :label="category.label">
                    <template v-if="category.special">
                        <BaseItem account />
                    </template>
                    <template v-else>
                        <template v-for="(item, index) in category.items" :key="index">
                            <BaseItem :title="item.title" :icon="item.icon" />
                        </template>
                    </template>
                </LabelTitle>
            </template>
        </div>
    </BaseBody>
</template>