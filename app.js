const express = require('express')
const db = require('./db/index')
const logger = require('morgan')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3001

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Root Setup')
})

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`))