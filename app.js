const express = require('express');
const path = require('path');

const app = express();

// Define la ruta principal "/" para redirigir al archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/forms', express.static(path.join(__dirname, 'forms')));
// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});