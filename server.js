const express = require(`express`)
const db = require(`./db/index`)
const bodyParser = require('body-parser');
const logger = require('morgan');


//IMPORTS HERE
const { Movie, Actor, Review } = require(`./models/index`)

const movieController = require(`./controllers/movieController`)
const actorController = require(`./controllers/actorController`)
const reviewController = require(`./controllers/reviewController`)

//
const PORT = process.env.PORT || 3001
//

const app = express()
app.use(bodyParser.json())
app.use(logger('dev'))

//APP.USE HERE ^^


app.get('/', (req, res) => res.send('This is root!'))

//GET
app.get(`/movies`, movieController.getAll)
app.get(`/movies/sort`, movieController.getSortNewToOld)
app.put(`/movies/add-reviews/:movID/:revID`, movieController.addReviews)
app.put(`/movies/update-ratings/:id`, movieController.aggregateReviewScores)
app.get(`/movies/:id`, movieController.getByID)


app.get(`/actors`, actorController.getAll)
app.get(`/actors/:id`, actorController.getByID)
app.delete(`/actors/delete/:id`, actorController.deleteActor)


app.get(`/reviews`, reviewController.getAll)
app.get(`/reviews/sort`, reviewController.getScoreHighToLow)
app.get(`/reviews/:id`, reviewController.getByID)

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))