const express = require('express')
require('dotenv').config();
const app = express();
const port = process.env.PORT;
const hbs = require('hbs');

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials',  srr = (err)=>{})
//middleware servir contenido estatico

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.render('home',{
    nombre: 'Ramon Cabrera',
    tema: 'Curso Node'
  });
})
app.get('/generic', (req, res) => {
  res.render('generic',{
    nombre: 'Ramon Cabrera',
    tema: 'Curso Node'
  });
})
app.get('/elements', (req, res) => {
  res.render('elements',{
    nombre: 'Ramon Cabrera',
    tema: 'Curso Node'
  });
})

app.get('*', (req, res) => {
  res.render('404');
})

app.listen(port, ()=>{
    console.log(`La aplicacion se esta ejecutando en  http://localhost:${port}`)
})