const express = require('express');
const router = express.Router();

const movies = require('../models/Movie.model'); 

router.get('/movies', (req, res) => {

    movies.find()
      .then(moviesList => {
          console.log( moviesList)
          res.render('movies', { moviesList:moviesList })
      })
      .catch(err => console.log(err))

})


router.get("/movies/:moviesId", (req, res, next) => {

    const { moviesId } = req.params

    movies.findById(moviesId)
        .then(movieDetails => {
            console.log(moviesId)
            res.render('movie-detail', { movieDetails })
        }).catch(err => {
            next(err)
        })

});

module.exports = router;