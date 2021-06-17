var express = require('express');
var router = express.Router();
const PricesPath = '../api/resources/cennik.json';
const fs = require('fs');

router.get('/', (req, res, next) => {
    const data = fs.readFileSync(PricesPath,
        { encoding: 'utf8', flag: 'r' });
    res.send(data);
})

module.exports = router;