'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const handlers = require('./handlers.js');
const app = express();
const models = require('./models');

models.sequelize.sync({force:true}).then(() => {
  app.use(bodyParser.json());

  app.get('/', function (req, res) {
    res.send('Hello World!');
  });

  app.post('/tags/:tagname', handlers.createCollection);
  app.get('/tags/:tagname', handlers.getCollection);

  var port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log('app listening on port ' + port);
  });
});
