const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const db = require ('./db')
const movieController = require('./controllers/movieController')
const actorController = require('./controllers/actorController')
const reviewController = require('./controllers/reviewController')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Welcome to the tiniest movie API ever!'))
app.get('/movies', movieController.getAllMovies)
app.get('/movies/:title', movieController.getOneMovie)
app.post('/movies', movieController.createMovie)
app.put('/movies/:title', movieController.updateMovie) //note: this is case sensitive
app.delete('/movies/:title', movieController.deleteMovie)

app.get('/actors', actorController.getAllActors)
app.get('/actors/:name', actorController.getOneActor)
app.post('/actors', actorController.createActor)
app.put('/actors/:name', actorController.updateActor)
app.delete('/actors/:name', actorController.deleteActor)

app.get('/reviews', reviewController.getAllReviews)
app.get('/reviews/:id', reviewController.getOneReview)
app.post('/reviews', reviewController.createReview)
app.put('/reviews/:id', reviewController.updateReview)
app.delete('/reviews/:id', reviewController.deleteReview)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))