let mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
    email: String
})

let user = mongoose.model('user', UserSchema)
module.exports = user