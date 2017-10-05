//Task 5.3

var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var stringifyFile;

app.use(bodyParser.json()); 

app.get('/getNote', function(req, res) {
  console.log('request: GET');
  fs.readFile('./test.json', 'utf8', function(err, data) {
    if (err) throw err;
    stringifyFile = data
    res.send(data);
  });
});
app.post('/updateNote/:note', function (req, res) {
  console.log('request :POST');
  stringifyFile += "\r\n" + req.params.note;   
  fs.writeFile('./test.json', stringifyFile, function(err) {
    if (err) throw err;
    res.send('file test.json updated with: ' + req.params.note);
  });    
});
app.post('/overwriteNote/:note', function (req, res) {
  console.log('request :POST');
  stringifyFile = req.params.note;   
  fs.writeFile('./test.json', stringifyFile, function(err) {
    if (err) throw err;
    res.send('file test.json overwritten by: ' + req.params.note);
  });    
});  
app.use(function (req, res, next) {
  res.status(404).send('Sorry...wrong request');
});
app.listen(3000);