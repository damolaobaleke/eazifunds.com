var express = require('express')

const sgMail = require('@sendgrid/mail')
let User = require('../../models/user')

module.exports = {
    displayHome: (req, res) => {

        res.render("Home/home");
    },


    createUser: (req, res) => {
        User.create(req.body.user, function(err, userInDb) {
            if (err) {
                console.log(err)
            } else {
                console.log(userInDb)

                var emailText = `Welcome ${userInDb.email}`

                sgMail.setApiKey(process.env.SENDGRID_API_KEY);
                const msg = {
                    to: userInDb.email,
                    from: 'info@eazifunds.com',
                    subject: 'eazifunds.com - Confirmation for early access',
                    text: emailText,
                    html: `<h1>Hello</h1>
                    <p>Thanks for joining the waiting list ${userInDb.email}</p>
                    <p>We will keep you updated on the API</p>`,
                };

                sgMail.send(msg).then(function() {
                    console.log("Email sent successfully")

                }).catch(error => {
                    console.log(error)
                });

                req.flash("success_message", "Registered successfully")
                res.redirect("/")
            }
        })
    }

}