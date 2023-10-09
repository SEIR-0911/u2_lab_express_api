const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const bodyParser = require('body-parser')
// include controller name and path here
const movieController = require('./controllers/movies')
const actorController = require('./controllers/actors')
const reviewController = require('./controllers/reviews')


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/movies', movieController.getAllMovies)
app.get('/actors', actorController.getAllActors)
app.get('/reviews', reviewController.getAllReviews)

// app.get('/movies/:id', movieController.getOneMovie)
app.get('/actors/:id', actorController.getOneActor)
// app.get('/reviews/:id', reviewController.getOneReview)

app.get('/', (req, res) => {
    res.send('This is root!!')
  })

  app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })  