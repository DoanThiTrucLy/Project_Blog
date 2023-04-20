const mongoose = require('mongoose');

const Beverage = new mongoose.Schema({
  
  ID: {type: String, maxLength: 5, unique: true},
  name: {type: String, require: true},
  image: {type: String, maxLength: 256},
  description: {type: String},
  price: {type: Number, require: true },
  typeOf: {type: String, maxLength: 256},

}, {collection: 'beverages'});

module.exports = mongoose.model('Beverage', Beverage);