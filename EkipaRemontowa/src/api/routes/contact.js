
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
        user: 'mailer@ekipa-remontowa.wroclaw.pl',
        pass: 'eBN-MFv-N86-5WF',
      },
      tls: {
        rejectUnauthorized: false
      },
    });

    let info = await transporter.sendMail({
      from: `"Ekipa Remontowa Mailer 🛠️" < mailer@ekipa-remontowa.wroclaw.pl >`,
      to: 'ekiparemontowa2@gmail.com',
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

async function sendCopy (address, message) {
  var data = fs.readFileSync('./resources/indexCopy.html',
    { encoding: 'utf8', flag: 'r' });

  if (fs.existsSync('./resources/images')) {
    console.log('./resources/images exists')
    data = data.replace('~', "Ekipa remontowa dostała Państwa prośbę o kontakt i skontaktuję się z Państwem jak najszybciej jak to możliwe");
    let transporter = nodemailer.createTransport({
      host: 'mail.ekipa-remontowa.xaa.pl',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: 'mailer@ekipa-remontowa.wroclaw.pl',
        pass: 'eBN-MFv-N86-5WF',
      },
      tls: {
        rejectUnauthorized: false
      },
    });

    let info = await transporter.sendMail({
      from: `"Ekipa Remontowa Mailer 🛠️" < mailer@ekipa-remontowa.wroclaw.pl >`,
      to: `${address}`,
      subject: "[Ekipa Remontowa] Odpowiedź automatyczna",
      html: data,
      attachments: [
        {
          filename: 'image-1.ico',
          path: './/resources//images//image-1.ico',
          cid: 'unique@logo'
        }
      ]
    });
    console.log("Message sent: %s", info.messageId);
  }
  else
    console.log('./resources/images does not exist')
  throw "";
}

router.post('/request-contact', function (req, res) {
  console.log('Got request body: ' + req.body)
  senEmail(req.body.email, req.body.message).then(() => {
    res.json("Success");
    sendCopy(req.body.email, req.body.message).then(() => {
      console.log("Copy sent");
  }).catch(error => {
    console.error(error);
  })
  }).catch(error => {
    console.error(error);
    res.json(error);
  })
});

module.exports = router;
