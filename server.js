const express = require('express')
const db = require('./db')
const actorController = require('./controllers/actorcontroller')
const movieController = require('./controllers/movieController')
const reviewController = require('./controllers/reviewController')
const logger = require('morgan')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3001

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
app.get('/', (req, res) => res.send('Welcome to the Movie API!'))

// Actor routes
app.get('/actors', actorController.getAllActors)
app.get('/actors/:id', actorController.getActorById)
app.post('/actors', actorController.createActor)
app.put('/actors/:id', actorController.updateActor)
app.delete('/actors/:id', actorController.deleteActor)

// Movie routes
app.get('/movies', movieController.getAllMovies)
app.get('/movies/:id', movieController.getMovieById)
app.post('/movies', movieController.createMovie)
app.put('/movies/:id', movieController.updateMovie)
app.delete('/movies/:id', movieController.deleteMovie)

// Review routes
app.get('/reviews', reviewController.getAllReviews)
app.get('/reviews/:id', reviewController.getReviewById)
app.post('/reviews', reviewController.createReview)
app.put('/reviews/:id', reviewController.updateReview)
app.delete('/reviews/:id', reviewController.deleteReview)