'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const handlers = require('./handlers.js');
const app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/tags/:tagname/', handlers.createCollection);
app.get('/tags/:tagname/', handlers.getCollection);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
