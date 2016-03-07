var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));

// app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

app.get('/login', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/views/login.html'));
});

app.get('/register', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/views/register.html'));
});


app.listen(1337);
console.log('Server is running 13337');