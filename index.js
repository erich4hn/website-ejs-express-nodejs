const express = require('express');
const path = require('path');
const app = express();
const port = process.env.port || 8080;

app.use(express.static(path.join(__dirname, 'assets')));
app.set('view engine', 'ejs');
const fullYear = () => new Date().getFullYear();

app.get('/', (req, res) => {
  res.render('pages/index', { year: fullYear(), });
});

app.get('/sobre', (req, res) => {
  res.render('pages/about', { year: fullYear(), });
});

app.get('/contato', (req, res) => {
  res.render('pages/contact', { year: fullYear(), });
});

app.listen(port, () => {
  console.log(`O servidor foi iniciado na porta ${port}`);
});
