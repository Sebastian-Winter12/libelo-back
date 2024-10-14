<script setup>
import BaseBody from "@/components/BaseBody.vue";
import HomeNav from "@/components/Home/HomeNav.vue";
import { Plus } from "lucide-vue-next";
</script>

<template>
  <BaseBody>
    <HomeNav />
    <div class="flex flex-col gap-4 p-2">
      <div class="h-[150px] w-full bg-libelo-500 rounded-xl">
        <div class="p-3 flex flex-col text-neutral-100">
          <p>¡Bienvenido Mariano!</p>
          <p class="text-neutral-300 text-sm text-balance">Empieza ahora y conecta con mentores expertos en la materia que elijas, ¡ellos te ayudarán!</p>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex flex-col">
          <h1 class="text-lg text-zinc-900 font-semibold">Tus materias</h1>
          <p class="text-sm text-zinc-700">Descubre una variedad de materias y encuentra el mentor perfecto para tus necesidades educativas.</p>
        </div>
        <div class="grid grid-cols-2 gap-2 w-full text-white font-semibold">
          <div class="w-full h-20 p-3 rounded-xl bg-red-800 uppercase">Literatura</div>
        </div>
      </div>
    </div>
    <div class="fixed bottom-0 right-0 size-12 flex items-center justify-center bg-libelo-500 rounded-full mr-2 mb-2 text-white">
      <Plus :size="24" />
    </div>
  </BaseBody>
</template>
