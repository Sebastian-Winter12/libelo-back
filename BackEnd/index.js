const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const routerAPI = require('./routes');
const cors = require('cors');
const { getAuthUrl, oauth2Client, createEvent, deleteEvent } = require('./googleAuth'); // Importa desde googleAuth.js
const app = express();

app.use(cors());

// Accedemos a la variable de Entorno
const port = process.env.PORT || 3000;

// Conectamos a la base de datos
mongoose.connect('mongodb://127.0.0.1:27017/app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', () => console.error('Error al conectar a la base de datos'));
db.once('open', () => {
    console.log('Conexión correcta a la base de datos');
});

// Ruta para obtener la URL de autenticación de Google
app.get('/google/auth', (req, res) => {
    const authUrl = getAuthUrl();
    res.redirect(authUrl);
});

// Ruta de redireccionamiento de OAuth
app.get('/google/callback', async (req, res) => {
    const code = req.query.code;

    try {
        const { tokens } = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);
        // Redirige al usuario a la vista donde está el calendario después de autenticarse
        res.redirect('http://localhost:8080/class/calendar');
    } catch (error) {
        console.error('Error al obtener el token de acceso:', error);
        res.status(500).send('Error al autenticarse con Google');
    }
});

// // Rutas para crear y eliminar eventos
// app.post('/api/calendar/event', async (req, res) => {
//     try {
//         const calendarId = 'primary';
//         await createEvent(oauth2Client, calendarId); // Llama a la función createEvent desde googleAuth.js
//         res.status(201).send('Evento creado');
//     } catch (error) {
//         console.error('Error al crear el evento:', error);
//         res.status(500).send('Error al crear el evento');
//     }
// });

// app.delete('/api/calendar/event/:eventId', async (req, res) => {
//     const eventId = req.params.eventId;
//     try {
//         const calendarId = 'primary';
//         await deleteEvent(oauth2Client, calendarId, eventId); // Llama a la función deleteEvent desde googleAuth.js
//         res.status(200).send('Evento eliminado');
//     } catch (error) {
//         console.error('Error al eliminar el evento:', error);
//         res.status(500).send('Error al eliminar el evento');
//     }
// });

// Middleware para parsear el JSON
app.use(express.json());

// Definimos la carpeta para servir archivos estáticos
app.use(express.static('public'));

// Llamamos a las rutas
routerAPI(app);

// Ruta raíz
app.get('/', (req, res) => {
    res.status(200).send('<h1>API REST</h1>');
});

app.listen(port, () => {
    console.log(`Servidor en el puerto ${port}`);
});
