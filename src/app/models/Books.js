const mongoose = require('mongoose');

const Books = new mongoose.Schema({
  
  ID: {type: String, maxLength: 6, unique: true},
  name: {type: String, require: true},
  image: {type: String, maxLength: 256},
  description: {type: String},
  typeOf: {type: String, maxLength: 256},

}, {collection: 'books'});

module.exports = mongoose.model('Books', Books);