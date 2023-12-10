import { Types } from 'mongoose'
import model from './model.js'

export const createReview = (review) => model.create(review)

export const findAllReviews = () => model.find({ status: { $eq: 'Public' } })

export const findLatestReviews = () =>
  model
    .find({ status: { $eq: 'Public' } })
    .sort({ createAt: 1 })
    .limit(10)

export const findPendingReviews = () => model.find({ status: { $eq: 'Pending' } }).sort({ createAt: 1 })

export const findReviewsByUid = (uid) => model.find({ uid: new Types.ObjectId(uid), status: { $eq: 'Public' } }).sort({ createAt: 1 })

export const updateReviews = (rId, review) => model.updateOne({ _id: rId }, { $set: review })
