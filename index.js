//

const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

// middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola Soy Milton y este es mi primer server backend ❤️😉 ');
});

// mas practica para el metodo GET
// productos/id categorias/id usuarios/id ,

app.listen(port, () => {
  console.log('Corriendo en el puerto: ' + port);
});

routerApi(app);
