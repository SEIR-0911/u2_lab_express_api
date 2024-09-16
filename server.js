const express = require('express')
const db = require('./db')
const movieController = require('./controllers/movieController')
const actorController = require('./controllers/actorController')
const reviewController = require('./controllers/reviewController')
// import and middleware
const PORT = process.env.PORT || 3001

const app = express()
// app.use() middleware

app.get('/', (req, res) => res.send('Welcome to the NCU (Netflix Christmas Universe)'))
app.get('/movies', movieController.getAllMovies)
app.get('/movies/:id', movieController.getOneMovie)
app.get('/actors', actorController.getAllActors)
app.get('/actors/:id', actorController.getOneActor)
app.get('/reviews', reviewController.getAllReviews)
app.get('/reviews/:id', reviewController.getOneReview)



app.listen(PORT, ()=> console.log('Lights. Cameras. Action'))