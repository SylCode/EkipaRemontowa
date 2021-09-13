
const nodemailer = require('nodemailer')
var express = require('express');
var router = express.Router();
const fs = require('fs');

async function senEmail(address, message) {
  var data = fs.readFileSync('./resources/index.html',
    { encoding: 'utf8', flag: 'r' });

  if (fs.existsSync('./resources/images')) {
    console.log('./resources/images exists')
    data = data.replace('$', address);
    data = data.replace('~', message);
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
      from: `"Ekipa Remontowa Mailer 🛠️" < ${address} >`,
      to: 'noccolas@gmail.com;ekiparemontowa2@gmail.com',
      subject: "[Ekipa Remontowa] Prośba o kontakt",
      html: data,
      attachments: [
        {
          filename: 'image-2.png',
          path: './/resources//images//image-2.png',
          cid: 'uniq@back'
        },
        {
          filename: 'image-1.ico',
          path: './/resources//images//image-1.ico',
          cid: 'unique@logo'
        }
      ]
    });

    console.log("Message sent: %s", info.messageId);
    return "Success";
  }
  else
    console.log('./resources/images does not exist')
  throw "";

}

router.post('/request-contact', function (req, res) {
  console.log('Got request body: ' + req.body)
  senEmail(req.body.email, req.body.message).then(() => {
    res.json("Success");
  }).catch(error => {
    console.error(error);
    res.json(error);
  })
});

module.exports = router;
