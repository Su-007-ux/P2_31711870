import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (_req, res) => {
  res.render('index', {
    nombre: 'Jesus Dobles',
    cedula: '31711870',
    seccion: '01'
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});