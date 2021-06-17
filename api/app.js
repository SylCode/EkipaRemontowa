var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const port = 3000;

var media = require('./routes/media');
var pricer = require('./routes/pricer');

var app = express();
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/media', media);
app.use('/api/media/about', media);
app.use('/api/media/reservation', media);
app.use('/api/media/realisations', media);
app.use('/api/pricer', pricer);

app.listen(port, () => {
    console.log(`API http://localhost:${port}`)
  })
module.exports = app;
