const express = require('express')
const app = express();
const path = require('path');

const port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, 'dist')));

// Manejar todas las rutas (cualquier ruta que no coincida con un archivo estático) para servir el archivo 'index.html' del proyecto Angular
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist\app\browser\index.html'));
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});