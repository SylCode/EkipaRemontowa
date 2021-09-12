const nodemailer = require('nodemailer')
var express = require('express');
var router = express.Router();

async function senEmail(address, message) {

  let transporter = nodemailer.createTransport({
    host: 'mail.ekipa-remontowa.xaa.pl',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: '_mainaccount@ekipa-remontowa.xaa.pl',
      pass: 'fSzaJu8Y3',
    },
    tls: {
      rejectUnauthorized: false
    },
  });

  let info = await transporter.sendMail({
    from: address,
    to: 'p573808@ekipa-remontowa.xaa.pl',
    subject: "[Ekipa Remontowa] Prośba o kontakt",
    text: message,
  });

  console.log("Message sent: %s", info.messageId);
  return "Success";
}

router.post('/request-contact', function (req, res) {
  console.log('Got request body: ' + req.body)
  senEmail(req.body.email, req.body.message).then( () => {
    res.json("Success");
  }).catch(error => {
    console.error(error);
    res.json(error);
  })
});

module.exports = router;
