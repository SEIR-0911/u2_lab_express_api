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
app.get('/actors', actorController.getAllActors)
app.get('/actors/:name', actorController.getOneActor)
app.get('/reviews', reviewController.getAllReviews)
app.get('/reviews/:id', reviewController.getOneReview)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))