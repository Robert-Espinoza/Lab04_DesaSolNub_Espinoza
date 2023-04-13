const express = require('express');
const app = express();
const clientes = require('./clientes.json');
const productos = require('./productos.json');


app.get('/', (req, res) => {
  res.send('Bienvenido a la página principal');
});

app.get('/clientes', (req, res) => {
    res.send(clientes);
  });
  

  app.get('/productos', (req, res) => {
    res.send(productos);
  });


app.listen(5000, () => {
  console.log('Servidor iniciado en el puerto 5000');
});