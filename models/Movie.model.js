/* 
    IMPORTACIONES
*/

const mongoose = require("mongoose")
const Schema = mongoose.Schema

/* 
    SCHEMA
*/

const movieSchema = new Schema(
  {
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String],
  },
  {
    timestamps: true, // genera fecha de cuando se crea el documento
  }
)
/* 
    MODELO
*/

const Movie = mongoose.model("Movie", movieSchema)

/* 
    EXPORTACIONES
*/

module.exports = Movie
