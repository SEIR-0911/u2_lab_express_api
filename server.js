const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')


const { Movie } = require('./models')
const { Actor } = require('./models')
const { Review } = require('./models')

const app = express() 

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('This is root!')
})

app.get('/movies', async (req, res) => {
    const movies = await Movie.find({})
    res.json(movies)
})

app.get('/movies/:id', async (req, res) =>{
    try {
        const { id } = req.params
        const movies = await Movie.findById(id)
        if (!movies) throw Error('Movie Not Found')
        res.json(movies)
    } catch (e) {
        console.log(e)
        res.send('Movie Not Found!')
    }
})

app.get('/actors', async (req, res) => {
    const actors = await Actor.find({})
    res.json(actors)
})

app.get('/actors/:id', async (req, res) => {
    try {
        const { id } = req.params
        const actors = await Actor.findById(id)
        if(!actors) throw Error('Actor not found')
        res.json(actors)
    } catch (e) {
        console.log(e)
        res.send('Actor not found!')
    }
})


app.get('/reviews', async (req, res) => {
    const reviews = await Review.find({})
    res.json(reviews)
})

app.get('/reviews/:id', async (req, res) => {
    try {
        const { id } = req.params
        const reviews = await Review.findById(id)
        if(!reviews) throw Error('Review not Found')
        res.json(reviews)
    } catch (e) {
        console.log(e)
        res.send('Review not found!')
    }
})


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
