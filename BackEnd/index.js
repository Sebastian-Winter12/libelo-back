const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const routerAPI = require('./routes'); // Asegúrate de que este archivo exista y esté configurado correctamente

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

const app = express();

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
