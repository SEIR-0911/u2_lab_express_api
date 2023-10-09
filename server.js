const express = require('express');
const db = require('./config');
const logger = require('morgan')

const actorsController = require('./controllers/actorController')
const moviesController = require('./controllers/movieController')
const reviewsController = require('./controllers/reviewController');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger('dev'))


app.get('/', actorsController.getAllActors)

app.get('/actors', actorsController.getAllActors)
app.get('/actors/:id', actorsController.getOneActor)
app.get('/movies', moviesController.getAllMovies)
app.get('/movies/:id', moviesController.getOneMovie)
app.get('/reviews', reviewsController.getAllReviews)
app.get('/reviews/:id', reviewsController.getOneReview)


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))