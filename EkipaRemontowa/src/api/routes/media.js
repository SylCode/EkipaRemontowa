var express = require('express');
var router = express.Router();
const GalleryFolder = '../../public_html/assets/Galery';
const fs = require('fs');
let files = [];
var path = require('path');
const { stringify } = require('querystring');



/* GET users listing. */
router.get('/', function (req, res, next) {
  fs.readdirSync(GalleryFolder).forEach(file => {
    files.push(file);
  });
  res.json(files);
  files = [];
});

router.get('/sitedata', function (req, res) {
  data = fs.readFileSync('./resources/siteData.json', { encoding: 'utf8', flag: 'r' });
  res.send(data);
})

router.post('/update', function (req, res) {
  fs.writeFile('./resources/siteData.json', JSON.stringify(req.body, null, '\t'), {
    encoding: "utf8",
    flag: "w",
    mode: 0o666
  },
    (err) => {
      if (err)
        console.log(err);
      else {
        console.log("File written successfully\n");
        res.send({ "Status": "Success" });
      }
    });
})

module.exports = router;
