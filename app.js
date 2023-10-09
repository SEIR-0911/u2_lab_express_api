const express = require('express')
const db = require('./db')
const logger = require('morgan')
const bodyParser = require('body-parser')

app.get('/', (req, res) => {
    res.send('Root Setup')
})