import model from './model.js'

export const createMovie = (movie) => model.create(movie)
export const findAllMovies = () => model.find()
export const findMovieById = (mId) => model.findById(mId)
