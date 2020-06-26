$(document).ready(function(){
  $('.modal').modal();
});

// const contactEmail = (event) => {
//   event.preventDefault();
  
//   console.log('contactEmail(); run');
//   let sender = document.getElementById('email');
//   console.log(sender);

//   const sgMail = require('@sendgrid/mail');
//   // using Twilio SendGrid's v3 Node.js Library
//   // https://github.com/sendgrid/sendgrid-nodejs
//   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//   const msg = {
//     to: process.env.RECIPIENT,
//     from: sender,
//     subject: 'Sending with Twilio SendGrid is Fun',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//   };
//   sgMail.send(msg);
// }