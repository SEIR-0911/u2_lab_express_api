const db = require('../db')
const { Review, Movie } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB Connection Errored'))

//REVIEWS

const run = async () => {
    await main()
    db.close()
}

run()