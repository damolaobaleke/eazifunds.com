var express = require('express')
let User = require('../models/user');

let middleWareObj = {}

middleWareObj.isSignedUp = function(req, res, next) {

}

middleWareObj.checkEmailExists = function(req, res, next) {
    let user = User.findOne({ email: req.body.user.email })
    if (!user) {
        return next();
    } else {
        req.flash("error_message", "email already registered")
        res.redirect("/")
    }
}

module.exports = middleWareObj;