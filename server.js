const express = require('express')
// const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const db = require('./db')
const moviesController = require('./controllers/movieController')
const actorsController = require('./controllers/actorController')
const reviewsController = require('./controllers/reviewController')

const PORT = process.env.PORT || 3001

const app = express()

// app.use(cors)
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.json())

app.get('/', (req, res) => res.send('This is root!'))

app.get('/movies', moviesController.getAllMovies)
app.get('/actors', actorsController.getAllActors)
app.get('/reviews', reviewsController.getAllReviews)

app.get('/movies/:id', moviesController.getOneMovie)
app.get('/actors/:id', actorsController.getOneActor)
app.get('/reviews/:id', reviewsController.getOneReview)

app.post('/movies', moviesController.createMovie)
app.post('/actors', actorsController.createActor)
app.post('/reviews', reviewsController.createReview)

app.put('/movies/:id', moviesController.updateMovie)
app.put('/actors/:id', actorsController.updateActor)
app.put('/reviews/:id', reviewsController.updateReview)

app.delete('/movies/:id', moviesController.deleteMovie)
app.delete('/actors/:id', actorsController.deleteActor)
app.delete('/reviews/:id', reviewsController.deleteReview)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
