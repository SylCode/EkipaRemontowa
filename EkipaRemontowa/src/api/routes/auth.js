var express = require('express');
var router = express.Router();
const fs = require('fs');

router.post('/', function (req, res) {
    authData = JSON.parse(fs.readFileSync('./auth/storedCredentials.json', { encoding: 'utf8', flag: 'r' }));
    reqData = req.body;
    if (reqData.login == authData.login) {
        if (reqData.pass == authData.pass) {
            console.log("Authorization successful\n");
            res.send({ "Status": "OK", "Token": "GVIKS8zGVczmhheHE3Sf" });
        }
        else res.sendStatus(401);
    }
    else res.sendStatus(401);
})

router.post('/authenticate', function (req, res) {
    reqData = req.body;
    if (reqData.token == "GVIKS8zGVczmhheHE3Sf") {
        res.send({ "Status": "OK", "Token": "GVIKS8zGVczmhheHE3Sf" });
    }
    else res.sendStatus(401);
})

module.exports = router;