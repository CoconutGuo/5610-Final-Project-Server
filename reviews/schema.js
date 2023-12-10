import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
  uid: { type: mongoose.Types.ObjectId, required: true },
  imdbID: { type: String, required: true },
  rated: String, // 评分
  content: String, // 评论
  Poster: String, // 海报
  movieTitle: String, // 电影名称
  createAt: Date,
  status: {
    type: String,
    enum: ['Pending', 'Public', 'Conform'], // 评论状态
    default: 'Pending',
  },
})

export default reviewSchema
