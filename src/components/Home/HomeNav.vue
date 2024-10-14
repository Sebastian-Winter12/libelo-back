<script setup>
import { Bell } from 'lucide-vue-next';
</script>

<template>  
  <div class="flex justify-between items-center px-2 bg-white border-b border-gray-300">
    <div>
      <!-- <img src="/img/libelo-a.png" alt="Logo de Libelo" class="h-8"> -->
      <p>logo</p>
    </div>
    <div class="flex gap-2 items-center">
      <div class="flex items-center justify-center size-10 bg-gray-100 rounded-full">
        <Bell :size="20"/>
      </div>
      <img src="https://avatar.iran.liara.run/public/2" alt="Imagen de perfil" class="size-10">
    </div>
  </div>
</template>