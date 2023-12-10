import mongoose from 'mongoose'
import schema from './schema.js'

const Following = mongoose.model('follows', schema)

export default Following
