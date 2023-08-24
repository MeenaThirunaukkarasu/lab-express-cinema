// models/Movie.model.js

const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
  {
    title: String,
    description: String,
    author: String,
    rating: Number
  },
  {
    timestamps: true
  }
);

module.exports = model('Movie', movieSchema);
