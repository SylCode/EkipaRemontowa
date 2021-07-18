var express = require('express');
var bodyParser = require('body-parser');

var path = require('path');
var cookieParser = require('cookie-parser');
const port = 3000;

var media = require('./routes/media');
var pricer = require('./routes/pricer');
var contact = require('./routes/contact');

var app = express();
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api/media', media);
app.use('/api/media/about', media);
app.use('/api/media/reservation', media);
app.use('/api/media/realisations', media);
app.use('/api/pricer', pricer);
app.use('/api/contact', contact);

app.listen(port, () => {
    console.log(`API http://localhost:${port}`)
  })
module.exports = app;
