const static = require('node-static');
const http = require('http');

const file = new(static.Server)();

http.createServer((req, res) => {
  file.serve(req, res);
}).listen(8080)

let sender = document.getElementById();

const contactEmail = () => {
  const sgMail = require('@sendgrid/mail');
  // using Twilio SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: process.env.RECIPIENT,
    from: 'test@example.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg);
}