import mongoose from 'mongoose'
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: String,
    phone: String,
    nickname: String,
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
      default: 'Other',
    },
    intro: String,
    role: {
      type: String,
      enum: ['REVIEW', 'ADMIN', 'USER'],
      default: 'USER',
    },
  },
  { collection: 'users' }
)

export default userSchema
