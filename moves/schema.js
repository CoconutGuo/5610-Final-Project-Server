import mongoose from 'mongoose'

const moveSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  imdbID: { type: String, required: true, unique: true },
  Year: String,
  Rated: String,
  Released: String,
  Runtime: String,
  Genre: String,
  Director: String,
  Writer: String,
  Actors: String,
  Plot: String,
  Language: String,
  Country: String,
  Awards: String,
  Poster: String,
  Ratings: [],
  Metascore: String,
  imdbRating: String,
  imdbVotes: String,
  Type: String,
  DVD: String,
  BoxOffice: String,
  Production: String,
  Website: String,
  Response: String,
})

export default moveSchema
