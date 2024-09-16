const express = require('express')
const db = require('./db')

const logger = require('morgan')
const bodyParser = require('body-parser')

const actorController = require('./controllers/actorController')
const movieController = require('./controllers/movieController')
const reviewController = require('./controllers/reviewController')

const PORT = process.env.PORT || 3001

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Here is where we begin our journey into MARS (Movies, Actors, Reviews System'))

app.get('/actors', actorController.getActors)
app.get('/actors/:id', actorController.getActor)

app.get('/movies', movieController.getMovies)
app.get('/movies/:id', movieController.getMovie)

app.get('/reviews', reviewController.getReviews)
app.get('/reviews/:id', reviewController.getReview)

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`))