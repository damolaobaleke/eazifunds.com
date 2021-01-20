var express = require('express')

module.exports = {
    displayHome: (req, res) => {
        res.render("Home/home");
    }

}