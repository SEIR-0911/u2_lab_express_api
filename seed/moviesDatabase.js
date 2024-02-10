const db = require('../db')
const { Actor, Movie, Review } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
   await Actor.deleteMany({})
   await Movie.deleteMany({})
   await Review.deleteMany({})
   const actor1 = await new Actor({
      name: 'Jason Statham',
      age: 56,
      location: 'Shirebrook, United Kingdom',
      stillAlive: true,
      movieGenre: 'Action',
      image: 'https://www.onthisday.com/images/people/jason-statham.jpg?w=360'
   })
   await actor1.save()

   const actor2 = await new Actor({
      name: 'Bruce Willis',
      age: 68,
      location: 'Idar-Oberstein, Germany',
      stillAlive: true,
      movieGenre: 'Action',
      image: 'https://cdn.britannica.com/48/194248-050-4EE825CF/Bruce-Willis-2013.jpg'
   })
   await actor2.save()

   const actor3 = await new Actor({
      name: 'Jackie Chan',
      age: 69,
      location: 'Victoria Peak, Hong Kong',
      stillAlive: true,
      movieGenre: 'Action / Martial Arts',
      image: 'https://m.media-amazon.com/images/M/MV5BMTk4MDM0MDUzM15BMl5BanBnXkFtZTcwOTI4MzU1Mw@@._V1_FMjpg_UX1000_.jpg'
   })
   await actor3.save()

   const actor4 = await new Actor({
      name: 'Sylvester Stallone',
      age: 77,
      location: `Hell's Kitchen, New York, NY`,
      stillAlive: true,
      movieGenre: 'Action',
      image: 'https://ntvb.tmsimg.com/assets/assets/1682_v9_bb.jpg?w=270&h=360'
   })
   await actor4.save()

   const actor5 = await new Actor({
      name: 'Jet Li',
      age: 60,
      location: 'Beijing, China',
      stillAlive: true,
      movieGenre: 'Action / Martial Arts',
      image: 'https://people.com/thmb/spM7KYEA69p2UTAkezCQYsqdm50=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(667x0:669x2)/jet-li-1-2ac952250ddd4ac1af3c633eebc19153.jpg'
   })
   await actor5.save()

   const movies = [
      {
         title: 'The Transporter',
         duration: '1hr 32min',
         rating: 'PG-13',
         releaseDate: '10/11/2002',
         description: 'https://en.wikipedia.org/wiki/The_Transporter',
         image: 'https://upload.wikimedia.org/wikipedia/en/6/68/Transporterposter.jpg',
         actors: actor1._id
      },
      {
         title: 'Crank',
         duration: '1hr 22min',
         rating: 'R',
         releaseDate: '9/1/2006',
         description: 'https://en.wikipedia.org/wiki/Crank_(film)',
         image: 'https://upload.wikimedia.org/wikipedia/en/2/26/Crank_final.jpg',
         actors: actor1._id
      },
      {
         title: 'Armageddon',
         duration: '2hrs 31min',
         rating: 'PG-13',
         releaseDate: '7/1/1998',
         description: 'https://en.wikipedia.org/wiki/Armageddon_(1998_film)',
         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI-yW6ynBUOtJweDniqSZIeds2kXGED_zyfM1ej5R02ZYSjusn',
         actors: actor2._id
      },
      {
         title: 'RED',
         duration: '1hr 51min',
         rating: 'R',
         releaseDate: '10/15/2010',
         description: 'https://en.wikipedia.org/wiki/Red_(2010_film)',
         image: 'https://upload.wikimedia.org/wikipedia/en/4/41/Red_ver7.jpg',
         actors: actor2._id
      },
      {
         title: 'The Forbidden Kingdom',
         duration: '1hr 44min',
         rating: 'PG-13',
         releaseDate: '4/18/2008',
         description: 'https://en.wikipedia.org/wiki/The_Forbidden_Kingdom',
         image: 'https://upload.wikimedia.org/wikipedia/en/5/51/ForbiddenKingdomPoster.jpg',
         actors: actor3._id
      },
      {
         title: 'Drunken Master 2', 
         duration: '1hr 42min',
         rating: 'PG-13',
         releaseDate: '2/3/1994',
         description: 'https://en.wikipedia.org/wiki/Drunken_Master_II',
         image: 'https://upload.wikimedia.org/wikipedia/en/f/fc/DrunkenMasterII.jpg',
         actors: actor3._id
      },
      {
         title: 'First Blood',
         duration: '1hr 33min',
         rating: 'R',
         releaseDate: '10/22/1982',
         description: 'https://en.wikipedia.org/wiki/First_Blood',
         image: 'https://upload.wikimedia.org/wikipedia/en/d/d6/First_blood_poster.jpg',
         actors: actor4._id
      },
      {
         title: 'Judge Dredd',
         duration: '1hr 36min',
         rating: 'R',
         releaseDate: '6/30/1995',
         description: 'https://en.wikipedia.org/wiki/Judge_Dredd_(film)',
         image: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Judge_Dredd_promo_poster.jpg',
         actors: actor4._id
      },
      {
         title: 'The Expendables',
         duration: '1hr 43min',
         rating: 'R',
         releaseDate: '8/13/2010',
         description: 'https://en.wikipedia.org/wiki/The_Expendables_(2010_film)',
         image: 'https://upload.wikimedia.org/wikipedia/en/7/76/Expendablesposter.jpg',
         actors: actor4._id
      },
      {
         title: 'Hero',
         duration: '1hr 39min',
         rating: 'PG-13',
         releaseDate: '10/24/2002',
         description: 'https://en.wikipedia.org/wiki/Hero_(2002_film)',
         image: 'https://upload.wikimedia.org/wikipedia/en/0/08/Hero_poster.jpg',
         actors: actor5._id
      },
      {
         title: 'The Sorcerer and the White Snake',
         duration: '1hr 42min',
         rating: 'PG-13',
         releaseDate: '9/28/2011',
         description: 'https://en.wikipedia.org/wiki/The_Sorcerer_and_the_White_Snake',
         image: 'https://upload.wikimedia.org/wikipedia/en/a/af/The_Sorcerer_and_the_White_Snake_poster.jpg',
         actors: actor5._id
      }
   ]

   const reviews = [
      {
         idx: 8,
         score: '8 / 10',
         title: 'Awesome guy movie!',
         description: `Ultimate cast of action badass extraordinary men been meaning to rewatch these movies I don't understand why they aren't streaming on anything I had to rent yet still worth it! I think back in the day I considered it pretty good but it's quite excellent very entertaining glad it is R rated. The soundtrack is fire, the amazing manly actors make everything better, story is solid enough and the action is the best aspect hands down. I'm gonna enjoy catching up for the 4th one coming out soon that'll be great too. Eric Robert's is always great, I love Jason Stratham, Sylvester is a legend, and everyone else involved is wonderful.`,
         
      },
      {
         idx: 8,
         score: '4 / 10',
         title: 'Ok. Overrated Action Movie',
         description: `I had expectations from this movie, and it didn't deliver a penny. So much action, so much explosion, sometimes good, sometimes unnecessary, but do we need only that in a Movie? What about the story? The story is highly predictable with not much to offer. It's just the action scenes that keep you in awe, but wait, that's not enough right? I don't understand why is it unnecessarily made so dark, gloomy and depressing in the middle? The emotions during the halfway point has no meaning. I do not recommend this movie. Plus it's highly overrated. Trailer was better, movie was worse.`,
         
      }
   ]

   const createdMovies = await Movie.insertMany(movies)
   console.log('Created movies!', createdMovies)

   reviews.forEach(rev => {
      rev.movies = createdMovies[rev.idx]._id
   })

   const createdReviews = await Review.insertMany(reviews)
   console.log('Created reviews!', createdReviews)
}

const run = async () => {
   await main()
   await db.close()
}

run()