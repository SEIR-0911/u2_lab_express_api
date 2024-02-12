const db = require('../db')
const Review = require('../models/review') 
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


// Replace these with the actual _id values of your movies
const theDarkKnightId = '65ca087ec5ccddbb28856665'
const prisonersId = '65ca087ec5ccddbb28856666'
const superbadId = '65ca087ec5ccddbb28856667'

const main = async () => {
const reviews = [
  // Reviews for The Dark Knight
  { score: 10, comment: "A cinematic masterpiece, truly defining the superhero genre.", movieId: theDarkKnightId },
  { score: 9, comment: "Heath Ledger's performance as the Joker is iconic.", movieId: theDarkKnightId },
  
  // Reviews for Prisoners
  { score: 9, comment: "A gripping thriller that keeps you on the edge of your seat.", movieId: prisonersId },
  { score: 8, comment: "Hugh Jackman and Jake Gyllenhaal deliver powerful performances.", movieId: prisonersId },
  
  // Reviews for Superbad
  { score: 8, comment: "Hilarious from start to finish, a true coming-of-age comedy.", movieId: superbadId },
  { score: 7, comment: "Captures the awkwardness and excitement of high school.", movieId: superbadId },
]

try {
  await Review.insertMany(reviews)
  console.log('Reviews seeded successfully')
}
catch (error) {
  console.error('Error seeding reviews:', error.message)
}
}

const run = async () => {
await main()
db.close()
}
run()


