const express = require('express')

const db = require('./db')
const PORT = process.env.PORT || 3001

const app = express()

const Actor = require('./models/actor')
const Movie = require('./models/movie')
const Review = require('./models/review')

const moviesController = require('./controllers/movieController')

app.get('/', (req, res) => {
    res.send('This is root!')
})

//MOVIES INDEX & SHOW ROUTE FUNCTION CALLS
app.get('/movies', moviesController.getAllMovies)
app.get('/movies/:id', moviesController.getOneMovie)

//ACTORS INDEX & SHOW ROUTE FUNCTION CALLS
app.get('/actors', moviesController.getAllActors)
app.get('/actors/:id', moviesController.getOneActor)

//REVIEWS INDEX & SHOW ROUTE FUNCTION CALLS
app.get('/reviews', moviesController.getAllReviews)
app.get('/reviews/:id', moviesController.getOneReview)

app.listen(PORT, () => console.log(`Express server listening on port: ${PORT}`))
