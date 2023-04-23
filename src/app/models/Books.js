const mongoose = require('mongoose');

const Book = new mongoose.Schema({
  
  ID: {type: String, maxLength: 10, unique: true},
  name: {type: String, require: true},
  image: {type: String, maxLength: 256},
  description: {type: String},
  typeOf: {type: String, maxLength: 256},
  category: {type: String, maxLength: 256}

}, {collection: 'books'});

module.exports = mongoose.model('Book', Book);