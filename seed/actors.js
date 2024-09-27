const db = require('../db')
const { Actor } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const seedActors = async () => {
    const actors = [
        {
            name: 'Chloë Grace Moretz',
            age: 26,
            living: true,
            movie_eg: '6521c534bd2cecc02c95e928'
        },
        {
            name: 'Riz Ahmed',
            age: 40,
            living: true,
            movie_eg: '6521c534bd2cecc02c95e928'
        },
        {
            name: 'Tom Hanks',
            age: 67,
            living: true,
            movie_eg: '6521c534bd2cecc02c95e929'
        },
        {
            name: 'Halle Berry',
            age: 57,
            living: true,
            movie_eg: '6521c534bd2cecc02c95e929'
        },
        {
            name: 'Chris Pine',
            age: 43,
            living: true,
            movie_eg: '6521c534bd2cecc02c95e92a'
        },
        {
            name: 'Michelle Rodriguez',
            age: 45,
            living: true,
            movie_eg: '6521c534bd2cecc02c95e92a'
        },
        {
            name: 'Margot Robbie',
            age: 33,
            living: true,
            movie_eg: '6521c534bd2cecc02c95e92b'
        },
        {
            name: 'Ryan Gosling',
            age: 42,
            living: true,
            movie_eg: '6521c534bd2cecc02c95e92b'
        },
        {
            name: 'Michelle Yeoh',
            age: 61,
            living: true,
            movie_eg: '6521c534bd2cecc02c95e92c'
        },
        {
            name: 'Stephanie Hsu',
            age: 32,
            living: true,
            movie_eg: '6521c534bd2cecc02c95e92c'
        },
    ]
    await Actor.insertMany(actors)
    console.log('actors added')
}

async function run() {
    await seedActors()
    db.close()
}

run()