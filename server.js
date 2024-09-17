const express = require('express')
const db = require('./db')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001

const app = express()
app.use(bodyParser.json())

const Actor = require('./models/actor')
const Movie = require('./models/movie')
const Review = require('./models/review')

const moviesController = require('./controllers/movieController')

app.get('/', (req, res) => {
    res.send('This is root!')
})

//MOVIES ROUTE FUNCTION CALLS
app.get('/movies', moviesController.getAllMovies)
app.get('/movies/:id', moviesController.getOneMovie)
app.post('/movies', moviesController.createMovie)
app.put('/movies:id', moviesController.updateMovie)
app.delete('/movies/:id', moviesController.deleteMovie)

//ACTORS ROUTE FUNCTION CALLS
app.get('/actors', moviesController.getAllActors)
app.get('/actors/:id', moviesController.getOneActor)
app.post('/actors', moviesController.createActor)
app.put('/actors/:id', moviesController.updateActor)
app.delete('/actors/:id', moviesController.deleteActor)

//REVIEWS ROUTE FUNCTION CALLS
app.get('/reviews', moviesController.getAllReviews)
app.get('/reviews/:id', moviesController.getOneReview)
app.post('/reviews', moviesController.createReview)
app.put('/reviews/:id', moviesController.updateReview)
app.delete('/reviews/:id', moviesController.deleteReview)

app.listen(PORT, () => console.log(`Express server listening on port: ${PORT}`))
