const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/user')
const userRoutes = require('./routes/user-routes')

const PORT = 3000
const URL = 'mongodb://localhost:27017/albadik'

const app = express()
app.use(express.json())
app.use(userRoutes)

// Connet to DB
mongoose
	.connect(URL)
	.then(() => console.log('Connected to MongoDB'))
	.catch((err) => console.log(`DB connection error: ${err}`))

// Listen server fot fatal error
app.listen(PORT, err => {
	err ? console.log(err) : console.log(`Listening port ${PORT}`)
})






