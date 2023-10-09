const db = require('../db')
const { Actor, Movie } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB Connection Errored'))

//ACTORS

const run = async () => {
    await main()
    db.close()
}

run()