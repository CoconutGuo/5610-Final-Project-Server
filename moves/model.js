import mongoose from 'mongoose'
import schema from './schema.js'

const model = mongoose.model('moves', schema)

export default model
