var express = require('express');
var router = express.Router();
const GalleryFolder = '../../../public_html/ekipa-remontowa.wroclaw.pl/Galery';
const fs = require('fs');
let files = [];
var path = require('path');



/* GET users listing. */
router.get('/', function (req, res, next) {
  fs.readdirSync(GalleryFolder).forEach(file => {
    files.push(file);
  });
  res.json(files);
  files = [];
});

router.get('/about', function (req, res, next) {
  const data = fs.readFileSync('./resources/about.txt',
    { encoding: 'utf8', flag: 'r' });
  res.json(data);
});

router.get('/reservation', function (req, res, next) {
  const rezdata = fs.readFileSync('./resources/rezerwacja.txt',
    { encoding: 'utf8', flag: 'r' });
  res.json(rezdata);
});

router.get('/realisations', function (req, res, next) {
  const data = fs.readFileSync('./resources/realizacje.json',
    { encoding: 'utf8', flag: 'r' });//.replace(/\r?\n|\r/g,'');
  res.send(data);
});

router.get('/activemodules', function (req, res) {
  data = fs.readFileSync('./resources/activeModules.json', { encoding: 'utf8', flag: 'r' });
  res.send(data);
})

router.get('/services', function (req, res) {
  data = fs.readFileSync('./resources/uslugi.json', { encoding: 'utf8', flag: 'r' });
  res.send(data);
})

module.exports = router;
