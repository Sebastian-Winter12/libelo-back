// src/axios.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/api', // Cambia esto si tu API se sirve en otro puerto o dominio
});

export default instance;
