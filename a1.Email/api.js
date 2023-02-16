const nodemailer=require('nodemailer');
let transporter = nodemailer.createTransport({
    host:'smtp.example.com',
    port:8009,
    secure:'false',
    auth:{
        user:'user@example.com',
        pass:'password'
    }

});
let mailOptions = {
    from: 'sender@example.com',
    to: 'recipient@example.com',
    subject: 'Subject of the email',
    text: 'This is the body of the email'
};
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
