require('dotenv').config();
import { join } from 'path';
import express, { urlencoded, static, json } from 'express';
import helmet from 'helmet'; // helps set headers, https://www.npmjs.com/package/helmet
const PORT = process.env.PORT || 3000;

const app = express();
app.use(helmet());
app.use(urlencoded({ extended: false })); 
app.use(static(join(__dirname))); // uses static file
app.use(json());

app.use((req, res, next) => { // not clear on what this section does...
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
	next();
});

app.options('*', function(req, res) {
	res.send(200);
});

app.get('/', (req, res) => { res.sendFile(join(__dirname + '/index.html')); });

app.get('/resume', (req, res) => { res.sendFile(join(__dirname + '/Curtis-Humphrey-Resume-webdev.pdf')); });

// contact form email handler
app.post('/email', (req, res) => {
  let sender = req.body.formName;
  let email = req.body.formEmail;
  let message = req.body.formMessage;

  // using Twilio SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs
  console.log('recipient:', process.env.RECIPIENT);

  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: process.env.RECIPIENT,
    from: email,
    subject: 'contact form submission from ' + sender,
    text: message,
  };
  sgMail
  .send(msg)
  .then(() => {}, error => {
    console.log(error);

    console.error(error);
    if (error.response) {
      console.error(error.response.body)
    }
  });

  res.redirect('/');
});

app.listen(PORT, (err) => {
  if (err) { throw err; }
  console.log('server running on port '+ PORT);
});