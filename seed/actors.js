const db = require('../db')
const { Actor, Movie } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB Connection Errored'))

const main = async () => {
  const movies = await Movie.find()
  const actors = [
    {
      name: 'Anne Hathaway',
      age: 40,
      is_alive: true,
      image: 'https://m.media-amazon.com/images/M/MV5BMTRhNzQ3NGMtZmQ1Mi00ZTViLTk3OTgtOTk0YzE2YTgwMmFjXkEyXkFqcGdeQXVyNzg5MzIyOA@@._V1_.jpg',
      movies: [{ moviesID: movies[1]._id }]
    },
    {
      name: 'Meryl Streep',
      age: 74,
      is_alive: true,
      image: 'https://cdn.britannica.com/49/137449-050-6F351130/Meryl-Streep-The-Devil-Wears-Prada.jpg',
      movies: [{ moviesID: movies[1]._id }]
    },
    {
      name: 'Christian Bale',
      age: 49,
      is_alive: true,
      image: 'https://snworksceo.imgix.net/ohi/9fe8fa43-2888-4652-8f80-49e221f7d1af.sized-1000x1000.jpeg?w=1500&ar=4%3A3&fit=crop&crop=faces&facepad=3&auto=format',
      movies: [{ moviesID: movies[4]._id }]
    },
    {
      name: 'Tom Hardy',
      age: 46,
      is_alive: true,
      image: 'https://images.ladbible.com/resize?type=jpeg&quality=70&width=648&fit=contain&gravity=null&url=https://s3-images.ladbible.com/s3/content/249ad2e55b1b7dfabc0b930a101dcd0f.jpg',
      movies: [{ moviesID: movies[4]._id }]
    },
    {
      name: 'Rebel Wilson',
      age: 43,
      is_alive: true,
      image: 'https://content.api.news/v3/images/bin/7cc40ad36f63f978662d41ccb95a0ec4',
      movies: [{ moviesID: movies[1]._id }]
    }
  ]

  // Corrected this line to properly loop through actors and assign movies
  actors.forEach((actor, index) => {
    actor.movies = [{ moviesID: movies[index].id }]
  })

  await Actor.insertMany(actors)
}

const run = async () => {
  await main()
  db.close()
}

run()
