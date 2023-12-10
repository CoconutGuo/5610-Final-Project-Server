import * as dao from './dao.js'

function MovieRoutes(app) {
  const createUser = async (req, res) => {
    const user = await dao.createUser(req.body)
    res.json(user)
  }
  
  app.post('/api/movies', createUser)

}
export default MovieRoutes
