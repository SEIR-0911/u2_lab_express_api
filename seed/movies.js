const db = require('../db')
const { Movie, Actor } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB Connection Errored'))

//MOVIES

const run = async () => {
    await main()
    db.close()
}

run()