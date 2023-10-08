// connect moviesDatabase using Mongoose boilerplate aka:
// create a mongoose const, then mongoose.connect.then.catch, then db and exports

const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/moviesDatabase').then().catch()

const db = mongoose.connection

module.exports = db