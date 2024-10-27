<script setup>
import BaseInput from '../components/BaseInput.vue';
</script>

<template>
    <div class="flex items-center justify-center text-white font-semibold text-3xl w-full h-28 bg-gradient-to-b from-libelo-600 to-libelo-500 rounded-br-xl rounded-bl-xl">Libelo</div>
    <div class="p-2">
        <div class="flex flex-col mt-2 mb-6">
            <h1 class="font-semibold text-2xl">Iniciar sesión</h1>
            <p class="text-neutral-700">Bienvenido de nuevo a Libelo</p>
        </div>
        <div class="flex flex-col gap-4">
            <BaseInput identifier="email" placeholder="Introduzca su correo electrónico" label="Correo electrónico" type="text" />
            <BaseInput identifier="password" placeholder="Introduzca su contraseña" label="Contraseña" type="password" password />
        </div>
    </div>
</template>