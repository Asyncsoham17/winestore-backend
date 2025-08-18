import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config()



connectDB()

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