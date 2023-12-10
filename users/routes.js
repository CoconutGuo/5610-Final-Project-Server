import * as dao from './dao.js'

function UserRoutes(app) {
  const createUser = async (req, res) => {
    const newUser = req.body
    if (['ADMIN', 'REVIEW'].includes(newUser.role)) {
      const curUser = req.session['currentUser']
      if (curUser && curUser.role == 'ADMIN') {
        const status = await dao.deleteUser(req.params.userId)
        res.json(status)
      } else {
        res.status(403).json({ msg: 'No Permission!' })
      }
    } else {
      const user = await dao.createUser(req.body)
      res.json(user)
    }
  }

  const deleteUser = async (req, res) => {
    const curUser = req.session['currentUser']
    if (curUser && curUser.role == 'ADMIN') {
      const status = await dao.deleteUser(req.params.userId)
      res.json(status)
    } else {
      res.status(403).json({ msg: 'No Permission!' })
    }
  }

  const findAllUsers = async (req, res) => {
    const curUser = req.session['currentUser']
    if (curUser && curUser.role == 'ADMIN') {
      const users = await dao.findAllUsers()
      res.json(users)
    } else {
      res.status(403).json({ msg: 'No Permission!' })
    }
  }

  const findUserById = async (req, res) => {
    const user = await dao.findUserBaseById(req.params.userId)
    res.json(user)
  }

  const updateUser = async (req, res) => {
    const { userId } = req.params
    const status = await dao.updateUser(userId, req.body)
    const currentUser = await dao.findUserById(userId)
    req.session['currentUser'] = currentUser
    res.json(status)
  }

  const signup = async (req, res) => {
    const user = await dao.findUserByUsername(req.body.username)
    if (user) {
      res.status(400).json({ msg: 'Username already taken' })
    }
    const currentUser = await dao.createUser(req.body)
    delete createUser.password
    req.session['currentUser'] = currentUser
    res.json(currentUser)
  }

  const signin = async (req, res) => {
    const { username, password } = req.body
    const currentUser = await dao.findUserByCredentials(username, password)
    req.session['currentUser'] = currentUser
    if (currentUser) {
      res.json(currentUser)
    } else {
      res.status(403).json({ msg: 'Your email or password was incorrect. Please try again.' })
    }
  }

  const signout = (req, res) => {
    req.session.destroy()
    res.json(200)
  }

  const account = async (req, res) => {
    res.json(req.session['currentUser'])
  }

  app.post('/api/users', createUser)
  app.get('/api/users', findAllUsers)
  app.get('/api/users/:userId', findUserById)
  app.put('/api/users/:userId', updateUser)
  app.delete('/api/users/:userId', deleteUser)
  app.post('/api/users/signup', signup)
  app.post('/api/users/signin', signin)
  app.post('/api/users/signout', signout)
  app.post('/api/users/account', account)
}
export default UserRoutes
