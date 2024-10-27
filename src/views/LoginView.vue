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
            <div class="inline-flex items-center">
                <label class="flex items-center cursor-pointer relative" for="check-2">
                    <input type="checkbox" checked class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded border border-neutral-300 checked:bg-libelo-500 checked:border-libelo-500" id="check-2" />
                    <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                    </span>
                </label>
                <label class="cursor-pointer ml-2 text-neutral-700 text-sm" for="check-2">Mantener la sesión iniciada</label>
            </div>
        </div>
    </div>
</template>