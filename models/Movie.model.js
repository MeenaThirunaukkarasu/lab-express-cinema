// // models/Movie.model.js

// const { Schema, model } = require('mongoose');

// const movieSchema = new Schema(
//   {
//     title: String,
//     description: String,
    
//   },
//   {
//     timestamps: true
//   }
// );

// module.exports = model('Movie', movieSchema);


const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const moviesSchema = new Schema(
  {
    title: String,
    director: String,
    stars: [String, String, String],
    image: String,
    description:String,
    showtimes: [String, String, String]
    },

);

const Movie = model("Movie", moviesSchema);

module.exports = Movie;