import mongoose from 'mongoose'
import model from './model.js'

export const createUser = (user) => model.create(user)
export const findAllUsers = () => model.find({ role: { $ne: 'ADMIN' } })
export const findUserById = (userId) => model.findById(userId)
export const findUserBaseById = (userId) => model.findById(userId, { password: 0, email: 0, phone: 0 })
export const findUserByUsername = (username) => model.findOne({ username }, { password: 0 })
export const findUserByCredentials = (username, password) => model.findOne({ username, password }, { password: 0 })
export const updateUser = (userId, user) => model.updateOne({ _id: userId }, { $set: user })
export const deleteUser = (userId) => model.deleteOne({ _id: userId })
