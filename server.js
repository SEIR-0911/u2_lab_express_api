const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT || 3003;
const db = require('./db');
const actorController = require('./controllers/actorController')
const movieController = require('./controllers/movieController')
const reviewController = require('./controllers/reviewController')
const logger = require('morgan')

const app = express();


app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(bodyParser.json())
app.get('/', (req, res) => {
   res.send({msg:'This is Root!'})
})



app.get('/actors', actorController.getAllActors)
app.get('/actors/:name', actorController.getOneActor)
app.post('/actors', actorController.createActor)
app.put('/actors/:id', actorController.updateActor)
app.delete('/actors/:id', actorController.deleteActor)

app.get('/movies', movieController.getAllMovies)
app.get('/movies/:title', movieController.getOneMovie)
app.post('/movies', movieController.createMovie)
app.put('/movies/:id', movieController.updateMovie)
app.delete('/movies/:id', movieController.deleteMovie)

app.get('/reviews', reviewController.getAllReviews)
app.get('/reviews/:id', reviewController.getReviewById)
app.post('/reviews', reviewController.createReview)
app.put('/reviews/:id', reviewController.updateReview)
app.delete('/reviews/:id', reviewController.deleteReview)



app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
   })