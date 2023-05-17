import express from 'express'
import data from './data.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import seedRouter from './routes/seedRoutes.js'

dotenv.config()


const PORT = process.env.PORT || 5000

const app = express()

// app.use(cors());
// app.use(express.json());

app.use("/api/v1/seed",seedRouter);
app.use("/api/v1/product/token/:token", async (req,res)=>{
  const product = await data.products.find(x => x.token === req.params.token);
  if(product){
    res.send(product);
  }else{
    res.status(404).send({message: "Product was not found"});
  }
});

app.use("/api/v1/products/:_id", async (req,res)=>{
  const product = await data.products.find(x => x._id === req.params._id);
  if(product){
    res.send(product);
  }else{
    res.status(404).send({message: "Product was not found"});
  }
});

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