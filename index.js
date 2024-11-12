const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const routerAPI = require('./routes'); // Asegúrate de que este archivo exista y esté configurado correctamente
const cors = require('cors');
const app = express();

app.use(cors()); // Permite todas las solicitudes de todos los orígenes. Personalízalo si deseas mayor control.


// Accedemos a la variable de Entorno
const port = process.env.PORT || 3000; // Puedes establecer un puerto predeterminado

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


// Ruta para iniciar el proceso de autenticación con Google
app.get('/google/auth', (req, res) => {
    const authUrl = getAuthUrl();
    res.redirect(authUrl);
});

// Ruta de redirección de Google después de autenticarse
app.get('/google/callback', async (req, res) => {
    const code = req.query.code;

    try {
        const { tokens } = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);
        // Puedes guardar estos tokens si necesitas hacer más peticiones en nombre del usuario
        res.redirect('http://localhost:8080/home'); // Redirige al usuario de vuelta a tu frontend
    } catch (error) {
        console.error('Error al obtener el token de acceso:', error);
        res.status(500).send('Error al autenticarse con Google');
    }
});



// Middleware para parsear el JSON
app.use(express.json());

// Definimos la carpeta para servir archivos estáticos
app.use(express.static('public'));

// Middleware adicional (opcional)
app.use((req, res, next) => {
    console.log('Soy el middleware');
    next();
});

// Ruta raíz
app.get('/', (req, res) => {
    res.status(200).send('<h1>API REST</h1>');
});

// Llamamos a las rutas
routerAPI(app);

app.listen(port, () => {
    console.log(`Servidor en el puerto ${port}`);
});
