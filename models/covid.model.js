'use strict';

const mongoose = require('mongoose');

const card = new mongoose.Schema({
  country: String,
  date: String,
})

const cardModel = mongoose.model('card', card);

module.exports = {
  cardModel
}
