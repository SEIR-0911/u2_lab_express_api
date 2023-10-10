const db = require('./db')
const express = require('express')
const logger = require('morgan')
const app = express()
const actorsController = require('./controllers/actorsController');
const moviesController = require('./controllers/moviesController');
const reviewsController = require('./controllers/reviewsController');


const PORT = process.env.PORT || 3001

app.use(logger('dev'))

app.get('/reviews', reviewsController.getAllReviews)
app.get('/movies', moviesController.getAllMovies)
app.get('/actors', actorsController.getAllActors)
app.listen(PORT, () => console.log(`Listening on port: ${PORT}'`))
app.get('/', (req, res) => res.send('This is root!'))