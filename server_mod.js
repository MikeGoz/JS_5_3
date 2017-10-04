// Task 5.3 - zadanie z treści modułu

const express = require('express');
const app = express();

app.get('/', function(req, res) {
  console.log('Otrzymałem żądanie GET do strony głównej');
  res.send('Hello GET!');
});
app.post('/', function (req, res) {
  console.log('Otrzymałem żądanie POST do strony głównej');
  res.send('Hello POST!');
});
app.delete('/del_user', function (req, res) {
  console.log('Otrzymałem żądanie DELETE do strony /del_user');
  res.send('Hello DELETE!');
});
app.get('/list_user', function (req, res) {
  console.log('Otrzymałem żądanie GET do strony /list_user');
  res.send('Strona z listą użytkowników!');
});
app.get('/ab*cd', function(req, res) {
  console.log('Otrzymałem żądanie GET do strony /ab*cd');
  res.send('Wzór pasuje');
});
/* const server = app.listen(3000, function() {
  console.log('Przykładowa aplikacja nasłuchuje na http://localhost:3000');
});*/
app.use(function (req, res, next) {
  res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});

app.get('/', function (req, res) {
  res.send('Identyfikator : ' + req.params.id);
});

app.listen(3000);