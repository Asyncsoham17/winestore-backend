import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDb connection failed", err);
    process.exit(1);
  });

/*
require('dotenv').config()
import express from 'express'

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/x handle',(req,res) => {
    res.send('welcome on x handle')
})

app.listen(process.env.PORT,() =>{
    console.log('example port listening on ${port}')
})
*/