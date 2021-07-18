const nodemailer = require('nodemailer')
var express = require('express');
var router = express.Router();

async function senEmail(address, message) {

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tapp7012@gmail.com',
      pass: '11SavvaS11'
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let info = await transporter.sendMail({
    from: '"Ekipa Remontowa Mailer" tapp7012@gmail.com',
    to: address,
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
