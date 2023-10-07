const express = require("express");
const colors = require('colors')
const connectDB= require('./config/db')
const res = require("express/lib/response");
const dotenv = require("dotenv").config()
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT 


const app = express()
connectDB();
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use('/api/goals', require('./routes/goalRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`));