import express from 'express'
import User from '../models/userModel.js'
import expressAsyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import { generateToken } from '../utils.js'

const userRouter = express.Router()

userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    // Finding user by Email
    const user = await User.findOne({ email: req.body.email })
    if (user) {
      // Comparing passwords in DB and in request
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          // returning user info
          _id: user._id,
          name: user.name,
          email: user.email,
          token: generateToken(user)
        })
        return
      }
    }

    res.status(401).send({ message: 'Invalid password/user' })
  })
)

userRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password)
    })
    const user = await newUser.save()

    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user)
    })
  })
)

export default userRouter
