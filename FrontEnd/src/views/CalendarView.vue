<script setup>
// import { ref } from 'vue';
// import axios from 'axios';
import BaseBody from "@/components/BaseBody.vue";
import BaseNav from "@/components/BaseNav.vue";

// URL del calendario
// const calendarUrl = ref("https://calendar.google.com/calendar/embed?src=11e395b11c75f744b50b8474b7105d5e84bbcee94f3dcff80e1fe8d4699bf68a@group.calendar.google.com");

// // Función para crear un evento en el calendario
// const addEvent = async () => {
//     try {
//         const response = await axios.post('http://localhost:3000/api/calendar');
//         alert(`Evento creado con éxito: ${response.data.id}`);
//     } catch (error) {
//         console.error('Error al crear el evento:', error);
//         alert('Error al crear el evento');
//     }
// };

// // Función para eliminar un evento en el calendario
// const deleteEvent = async () => {
//     const eventId = prompt("Ingrese el ID del evento a eliminar:");
//     if (eventId) {
//         try {
//             await axios.delete(`http://localhost:3000/api/calendar/${eventId}`);
//             alert('Evento eliminado con éxito');
//         } catch (error) {
//             console.error('Error al eliminar el evento:', error);
//             alert('Error al eliminar el evento');
//         }
//     }
// };
</script>

<template>
    <BaseBody>
        <BaseNav title="Calendario" />
        <div class="mt-8 p-4">
            <h2 class="text-xl font-semibold mb-2">Revisa tus próximas fechas</h2>
            <!-- URL del calendario fija -->
            <iframe 
                src="https://calendar.google.com/calendar/embed?src=11e395b11c75f744b50b8474b7105d5e84bbcee94f3dcff80e1fe8d4699bf68a@group.calendar.google.com" 
                style="border: 0" 
                width="350" 
                height="400" 
                frameborder="0" 
                scrolling="no">
            </iframe>

            <!-- Botones para agregar y eliminar eventos
            <button @click="addEvent" class="mt-4 p-2 bg-blue-500 text-white">Agregar Evento</button>
            <button @click="deleteEvent" class="mt-2 p-2 bg-red-500 text-white">Eliminar Evento</button> -->
        </div> 
    </BaseBody>
</template>
