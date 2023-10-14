const mongoose = require('mongoose')

mongoose
   .connect('mongodb://127.0.0.1:27017/moviesDatabase', 
   {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000  // Increase timeout to 5 seconds
    })
   .then(() => {
      console.log('Successfully connected to MongoDB')
   })
   .catch(e => {
      console.error('Connection error', e.message)
   })
const db = mongoose.connection

module.exports = db