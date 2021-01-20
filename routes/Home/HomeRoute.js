var express = require('express')
let router = express.Router()

const { displayHome } = require('../../controllers/Home/HomeController')

router.get("/", displayHome)

module.exports = router;