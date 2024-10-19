<script setup>
import BaseBody from "@/components/BaseBody.vue";
import BaseNav from "@/components/BaseNav.vue";
import LabelTitle from "@/components/Settings/LabelTitle.vue";
import BaseItem from "@/components/Settings/BaseItem.vue";
import { Book } from "lucide-vue-next";
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
                <BaseItem title="Objetivos" :icon="Book" />
                <BaseItem title="Calendario" :icon="Book" />
                <BaseItem title="Evaluaciones" :icon="Book" />
                <BaseItem title="Ejercicios" :icon="Book" />
            </LabelTitle>
            <LabelTitle label="General">
                <BaseItem title="Notificaciones" :icon="Book" />
                <BaseItem title="Idioma" :icon="Book" />
                <BaseItem title="Personalización" :icon="Book" />
            </LabelTitle>
        </div>
    </BaseBody>
</template>