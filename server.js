const express = require('express')
const db = require('./db')
const logger = require('morgan')
const bodyParser = require('body-parser')
const moviesController = require('./controllers/movieController')
const actorsController = require('./controllers/actorController')
const reveiewsController = require('./controllers/reviewController')

const PORT = process.env.PORT || 3001

const app = express()

//middleware
app.use(logger ('dev'))
app.use(bodyParser.json())

//show routes using app.get
app.get('/', (req, res) => res.send('I am the root yo!'))
app.get('/movies', moviesController.getAllMovies)



app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))