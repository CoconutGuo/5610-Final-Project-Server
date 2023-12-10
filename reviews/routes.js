import * as dao from './dao.js'

function ReviewRoutes(app) {
  const createReview = async (req, res) => {
    const curUser = req.session['currentUser']
    if (curUser) {
      const { movie, ...oth } = req.body
      const tmp = {
        uid: curUser._id,
        imdbID: movie.imdbID,
        Poster: movie.Poster,
        movieTitle: movie.Title,
        createAt: new Date(),
        ...oth,
      }

      const review = await dao.createReview(tmp)
      res.json(review)
    } else {
      res.json([])
    }
  }

  app.post('/api/reviews', createReview)

  const findLatestReviews = async (req, res) => {
    const reviews = await dao.findLatestReviews()
    res.json(reviews)
  }
  app.get('/api/reviews/latest', findLatestReviews)

  const findPendingReviews = async (req, res) => {
    const curUser = req.session['currentUser']
    if (curUser && curUser.role == 'REVIEW') {
      const reviews = await dao.findPendingReviews()
      res.json(reviews)
    } else {
      res.status(403).json({ msg: 'No Permission!' })
    }
  }
  app.get('/api/reviews/pending', findPendingReviews)

  const updateReviews = async (req, res) => {
    const curUser = req.session['currentUser']
    if (curUser && curUser.role == 'REVIEW') {
      const { rId } = req.params
      const status = await dao.updateReviews(rId, req.body)
      res.json(status)
    } else {
      res.status(403).json({ msg: 'No Permission!' })
    }
  }

  app.put('/api/reviews/:rId', updateReviews)

  const findReviewsByUid = async (req, res) => {
    const { userId } = req.params
    const reviews = await dao.findReviewsByUid(userId)
    res.json(reviews)
  }
  app.get('/api/reviews/:userId', findReviewsByUid)
}
export default ReviewRoutes
