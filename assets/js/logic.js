

$(document).ready(function(){
  $('.modal').modal();
});

$('#contactSubmit').on('click', function(){
  console.log('contact form coming soon...')

  const sgMail = require('@sendgrid/mail');
  // 'require' problem, require must be in a node file (like server.js)

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'curtishumphrey1@gmail.com',
    from: $('#last_name').val(),
    subject: 'email from portfolio website',
    text: $('textarea1').val(),
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg);
});