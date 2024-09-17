const db = require('../db')
const {Movie, Actor, Review} = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const reviews = [
        {
          movie: 'Forrest Gump',
          score: 9,
          comment: 'One of the best movies I have ever seen!'
        },
        {
          movie: 'The Devil Wears Prada',
          score: 10,
          comment: 'A truly remarkable film with incredible storytelling.'
        },
        {
          movie: 'Fight Club',
          score: 9,
          comment: 'Performance is legendary!'
        },
        {
          movie: 'Titanic',
          score: 8,
          comment: 'A classic romantic drama that tugs at the heartstrings.'
        },
        {
          movie: 'Silver Linings Playbook',
          score: 8,
          comment: 'Great performances and a touching story.'
        },
        {
          movie: 'Iron Man',
          score: 9,
          comment: 'A fantastic start to the Marvel Cinematic Universe!'
        },
        {
          movie: 'The Avengers',
          score: 9,
          comment: 'Epic and action-packed, a true Marvel masterpiece.'
        },
        {
          movie: 'Pirates of the Caribbean: The Curse of the Black Pearl',
          score: 8,
          comment: 'A fun and entertaining adventure on the high seas.'
        },
        {
          movie: 'Training Day',
          score: 9,
          comment: 'Denzel Washington delivers an Oscar-worthy performance.'
        },
        {
          movie: 'Maleficent',
          score: 8,
          comment: 'A fresh perspective on a classic tale with stunning visuals.'
        },
        {
          movie: 'Cast Away',
          score: 9,
          comment: 'Tom Hanks shines in this compelling survival drama.'
        },
        {
          movie: 'Les Misérables',
          score: 8,
          comment: 'A powerful musical with emotional depth.'
        },
        {
          movie: 'Se7en',
          score: 9,
          comment: 'A dark and intense thriller that keeps you guessing.'
        },
        {
          movie: 'The Revenant',
          score: 9,
          comment: 'Incredible cinematography and a gripping story of survival.'
        },
        {
          movie: 'American Hustle',
          score: 8,
          comment: 'Great performances and a fascinating look at a con game.'
        },
        {
          movie: 'Avengers: Endgame',
          score: 10,
          comment: 'A satisfying conclusion to the Avengers saga.'
        },
        {
          movie: 'Pirates of the Caribbean: Dead Man\'s Chest',
          score: 8,
          comment: 'More swashbuckling adventure with Captain Jack Sparrow.'
        },
        {
          movie: 'Man on Fire',
          score: 9,
          comment: 'Denzel Washington delivers a powerful and intense performance.'
        },
        {
          movie: 'Maleficent: Mistress of Evil',
          score: 8,
          comment: 'A visually stunning and engaging sequel.'
        }
      ];
      
      module.exports = reviews;




    await Review.insertMany(reviews)
    console.log("added reviews")
}
const run = async () => {
    await main()
    db.close()
}

run()