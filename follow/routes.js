import * as dao from './dao.js'
import { Types } from 'mongoose'

function FollowingRoutes(app) {

  const createFollowing = async (req, res) => {
    const { flowId } = req.body
    const curUser = req.session['currentUser']
    let following = await dao.findFollowingById(curUser._id)
    if (following) {
      following = await dao.updateFollowing(curUser._id, flowId)
    } else {
      following = await dao.createFollowing({ uid: curUser._id, following: [new Types.ObjectId(flowId)] })
    }
    res.json(following)
  }
  app.post('/api/following/set', createFollowing)

  const findFollowings = async (req, res) => {
    const followings = await dao.findAllFollowsById(req.params.userId)
    res.json(followings)
  }
  app.get('/api/following/:userId', findFollowings)

  const getFollowersByUid = async (req, res) => {
    const { userId } = req.params
    let followers = await dao.findFollowersByUid(userId)
    res.json(followers)
  }

  app.get('/api/followers/:userId', getFollowersByUid)
}
export default FollowingRoutes
