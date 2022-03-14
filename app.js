require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Servir contenido estatico
app.use( express.static('public') );
 
/*
Esto seria el path static que lo hemos cambiado por el index de la carpeta publica coge por defecto
lo que hay dentro de la carpeta publica, por lo que si queremos si añadimos mas paginas en la carpeta public con el nombre
de las referencias de abajo, estas no se mostraran, las comparara e ira bajando hasta not found

app.get('/', (req, res) => {
  res.send('Hello World')
});
*/

app.get('/hola-mundo', (req, res) => {
  res.send('Hola mundo en su respectiva ruta')
});

app.get('/', (req, res) => {
  res.render('home', {
      nombre: 'Ivan Cabanillas',
      titulo: 'Curso INTALENT'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
      nombre: 'Ivan Cabanillas',
      titulo: 'Curso INTALENT'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
      nombre: 'Ivan Cabanillas',
      titulo: 'Curso INTALENT'
  });
});

/*
Antigua manera de llamar a las paginas ahora utilizamos handlerbar

app.get('/generic', (req, res) => {
  res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', (req, res) => {
  res.sendFile(__dirname + '/public/elements.html');
});
*/
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})