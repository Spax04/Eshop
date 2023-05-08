import express from 'express';
import data from "./data.js";

const PORT = process.env.PORT || 5000

const app = express();


// endpoints
app.get('/api/v1/products',(req,res)=>{
    res.send(data.products[0]);
});

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})