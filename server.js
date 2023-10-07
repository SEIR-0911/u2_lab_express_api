const express = require('express')

const db = require('./db')
const PORT = process.env.PORT || 3001

const app = express()

const Actor = require('./models/actors')
const Movie = require('./models/movies')
const Review = require('./models/reviews')

app.get('/', (req, res) => {
    res.send('This is root!')
})





app.listen(PORT, () => console.log(`Express server listening on port: ${PORT}`))
