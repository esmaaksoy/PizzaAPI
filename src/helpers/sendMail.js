"use strict"


const nodemailer = require('nodemailer')

module.exports = function (to, subject, message) {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: `${process.env.EMAIL}`,
            pass: `${process.env.EMAIL_PASS}`
        }
    })

    transporter.sendMail({

        to: to, 
        subject: subject, 
        text: message, 
        html: message, 

    }, (error, success) => console.log(success, error))
}