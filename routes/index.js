const express = require("express")
const router = express.Router()
const Movie = require("./../models/Movie.model")

/* GET home page */
router.get("/", (req, res, next) => res.render("index"))
router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then((moviesFound) => {
      res.render("movies", {
        movies: moviesFound,
      })
    })
    .catch((e) => {
      console.log(e)
    })
})
router.get("/movies/:movieId", (req, res, next) => {
  const { movieId } = req.params

  Movie.findById(movieId)
    .then((movieFound) => {
      console.log(movieFound)
      res.render("singleMovie", {
        movie: movieFound,
      })
    })
    .catch((e) => console.log(e))
})

module.exports = router
