const express = require('express')
const db = require('./db')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const moviesController = require('./controllers/movieController')
const actorsController = require('./controllers/actorController')
const reviewsController = require('./controllers/reviewController')

const PORT = process.env.PORT || 3001

const app = express()

//middleware
app.use(logger ('dev'))
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

//show routes using app.get
app.get('/', (req, res) => res.send('I am the root yo!'))
app.get('/movies', moviesController.getAllMovies)
app.get('/actors', actorsController.getAllActors)
app.get('/reviews', reviewsController.getAllReviews)


//sorting for bonuses
app.get('/reviews/sort', reviewsController.sortReviews)
app.get('/movies/sort', moviesController.sortMovies)

//show routes by ID
app.get('/movies/:id', moviesController.getMovieById)
app.get('/actors/:id', actorsController.getActorById)
app.get('/reviews/:id', reviewsController.getReviewById)






app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))