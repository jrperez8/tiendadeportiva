const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
  title: String,
  article: String,
  amount: String,
  description: String,
  color:String
});

module.exports = mongoose.model('productos', ProductSchema);