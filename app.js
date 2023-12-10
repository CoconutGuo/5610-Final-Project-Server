import express from 'express'
import cors from 'cors'
import session from 'express-session'
import mongoose from 'mongoose'
import 'dotenv/config'

import UserRoutes from './users/routes.js'
import ReviewRoutes from './reviews/routes.js'
import FollowingRoutes from './follow/routes.js'


const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/project'
mongoose.connect(CONNECTION_STRING)

const app = express()
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
)

const sessionOptions = {
  secret: 'any string',
  resave: false,
  saveUninitialized: false,
}
if (process.env.NODE_ENV !== 'development') {
  sessionOptions.proxy = true
  sessionOptions.cookie = {
    sameSite: 'none',
    secure: true,
  }
}
app.use(session(sessionOptions))

app.use(express.json())
UserRoutes(app)
ReviewRoutes(app)
FollowingRoutes(app)

app.listen(process.env.PORT || 4000)
