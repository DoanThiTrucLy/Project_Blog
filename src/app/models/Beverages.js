const mongoose = require('mongoose');

const Beverage = new mongoose.Schema({
  
  ID: {type: String, maxLength: 10, unique: true},
  name: {type: String, require: true},
  image: {type: String, maxLength: 256},
  description: {type: String},
  price: {type: String, require: true },
  typeOf: {type: String, maxLength: 256},

}, {collection: 'beverages'});

module.exports = mongoose.model('Beverage', Beverage);