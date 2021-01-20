let mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({

})

let user = mongoose.model('user', UserSchema)
module.exports = user