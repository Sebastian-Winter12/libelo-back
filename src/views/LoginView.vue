<script setup>
import BaseInput from '../components/BaseInput.vue';
import BaseButton from '../components/BaseButton.vue';
</script>

<template>
    <div class="flex flex-col justify-between min-h-full">
        <div>
            <div class="flex items-center justify-center text-white font-semibold text-3xl w-full h-28 bg-gradient-to-b from-libelo-600 to-libelo-500 rounded-br-xl rounded-bl-xl">Libelo</div>
            <div class="h-full p-2">
                <div class="flex flex-col mt-2 mb-6">
                    <h1 class="font-semibold text-2xl">Iniciar sesión</h1>
                    <p class="text-neutral-700">Bienvenido de nuevo a Libelo</p>
                </div>
                <div class="flex flex-col gap-5">
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
                    <div class="flex flex-col gap-2">
                        <BaseButton primary content="Iniciar sesión" path="/home" />
                        <div class="grid grid-cols-[1fr_auto_1fr] items-center justify-center gap-2 h-12 w-full">
                            <hr class="w-full border-neutral-300" />
                            <span class="text-neutral-700 text-sm text-center">o inicia sesión con</span>
                            <hr class="w-full border-neutral-300" />
                        </div>
                        <button class="flex items-center justify-center gap-2 h-12 w-full bg-neutral-200 text-neutral-700 font-semibold rounded-xl hover:bg-neutral-300">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.06 12.25C23.06 11.47 22.99 10.72 22.86 10H12.5V14.255H18.42C18.165 15.63 17.39 16.795 16.225 17.575V20.335H19.78C21.86 18.42 23.06 15.6 23.06 12.25Z" fill="#4285F4"/>
                                <path d="M12.5 23C15.47 23 17.96 22.015 19.78 20.335L16.225 17.575C15.24 18.235 13.98 18.625 12.5 18.625C9.63501 18.625 7.21001 16.69 6.34501 14.09H2.67001V16.94C4.48001 20.535 8.20001 23 12.5 23Z" fill="#34A853"/>
                                <path d="M6.345 14.09C6.125 13.43 6 12.725 6 12C6 11.275 6.125 10.57 6.345 9.91V7.06H2.67C1.9 8.59286 1.49932 10.2846 1.5 12C1.5 13.775 1.925 15.455 2.67 16.94L6.345 14.09Z" fill="#FBBC05"/>
                                <path d="M12.5 5.375C14.115 5.375 15.565 5.93 16.705 7.02L19.86 3.865C17.955 2.09 15.465 1 12.5 1C8.20001 1 4.48001 3.465 2.67001 7.06L6.34501 9.91C7.21001 7.31 9.63501 5.375 12.5 5.375Z" fill="#EA4335"/>
                            </svg>
                            <span>Continuar con Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-2">
            <div class="flex items-center justify-center h-12 w-full">
                <p class="text-neutral-700">¿No tienes una cuenta? <router-link to="/register" class="text-libelo-500 font-semibold ml-1">Regístrate ahora</router-link></p>
            </div>
        </div>
    </div>
</template>