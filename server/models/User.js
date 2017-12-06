const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  id: String,
  nickname: String,
  name: String,
  surname: String,
  phone: String,
  password: String
})

const User = mongoose.model('User', userSchema)

module.exports = User