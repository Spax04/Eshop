import express from 'express'
import data from './data.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import seedRouter from './routes/seedRoutes.js'

dotenv.config()


const PORT = process.env.PORT || 5000

const app = express()

app.use("/api/v1/seed",seedRouter);

// endpoints
app.get('/api/v1/products', (req, res) => {
  res.send(data.products)
})



mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
      })
    console.log('Connected to MongoDB')
  })
  .catch(error => {
    console.log('Faild to connect to MongoDB ' + error.message)
  })