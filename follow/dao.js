import { Types } from 'mongoose'
import Following from './model.js'

export const createFollowing = (flowing) => {
  Following.create(flowing)
}
export const updateFollowing = (uid, flowId) => {
  return Following.updateOne({ uid: new Types.ObjectId(uid) }, { $addToSet: { following: new Types.ObjectId(flowId) } })
}

export const findAllFollowsById = (uid) => Following.findOne({ uid: new Types.ObjectId(uid) }).populate({ path: 'following' })

export const findFollowingById = (uid) => Following.findOne({ uid: new Types.ObjectId(uid) })

export const findFollowersByUid = (uid) =>
  Following.find(
    {
      following: {
        $elemMatch: {
          $eq: new Types.ObjectId(uid),
        },
      },
    },
    { uid: 1, _id: 0 }
  ).populate('uid')
