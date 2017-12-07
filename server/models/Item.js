const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
  id: String,
  text: String,
  completed: Boolean,
  editing: Boolean,
  userName: String
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item