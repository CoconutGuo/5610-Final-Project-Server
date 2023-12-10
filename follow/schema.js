import mongoose from 'mongoose'

const followingSchema = new mongoose.Schema({
  uid: { type: mongoose.Types.ObjectId, required: true, unique: true, ref: 'users'  },
  following: [{ type: mongoose.Types.ObjectId, ref: 'users' }],
})

export default followingSchema
