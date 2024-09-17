const db = require('../db')
const {Movie, Actor, Review} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const fg = await Movie.find({ title: 'Forrest Gump' })
  const tdwp = await Movie.find({ title: 'The Devil Wears Prada' })
  const fc = await Movie.find({ title: 'Fight Club' })
  const t = await Movie.find({ title: 'Titanic' })
  const slp = await Movie.find({ title: 'Silver Linings Playbook' })
  const im = await Movie.find({ title: 'Iron Man' })
  const ta = await Movie.find({ title: 'The Avengers' })
  const potctcotbp = await Movie.find({ title: 'Pirates of the Caribbean: The Curse of the Black Pearl' })
  const td = await Movie.find({ title: 'Training Day' })
  const m = await Movie.find({ title: 'Maleficent' })
  const ca = await Movie.find({ title: 'Cast Away' })
  const lm = await Movie.find({ title: 'Les Misérables' })
  const s = await Movie.find({ title: 'Se7en' })
  const tr = await Movie.find({ title: 'The Revenant' })
  const ah = await Movie.find({ title: 'American Hustle' })
  const ae = await Movie.find({ title: 'Avengers: Endgame' })
  const potcdmc = await Movie.find({ title: 'Pirates of the Caribbean: Dead Man\'s Chest' })
  const mof = await Movie.find({ title: 'Man on Fire' })
  const mmoe = await Movie.find({ title: 'Maleficent: Mistress of Evil' })

    const actors = [
        {
          name: 'Tom Hanks',
          age: 65,
          alive: true,
          movies: [fg[0]._id,ca[0]._id],
          photo: 'https://www.imdb.com/name/nm0000158/mediaviewer/rm3040001536/?ref_=nm_ov_ph'
        },
        {
          name: 'Meryl Streep',
          age: 72,
          alive: true,
          movies: [tdwp[0]._id],
          photo: 'https://www.imdb.com/name/nm0000658/mediaviewer/rm2047512320/?ref_=nm_ov_ph'
        },
        {
          name: 'Brad Pitt',
          age: 57,
          alive: true,
          movies: [fc[0]._id,s[0]._id],
          photo: 'https://www.imdb.com/name/nm0000093/mediaviewer/rm864335360/?ref_=nm_ov_ph'
        },
        {
          name: 'Leonardo DiCaprio',
          age: 46,
          alive: true,
          movies: [t[0]._id, tr[0]._id],
          photo: 'https://www.imdb.com/name/nm0000138/mediaviewer/rm487490304/?ref_=nm_ov_ph'
        },
        {
          name: 'Jennifer Lawrence',
          age: 31,
          alive: true,
          movies: [slp[0]._id, ah[0]._id],
          photo: 'https://www.imdb.com/name/nm2225369/mediaviewer/rm2555577344/?ref_=nm_ov_ph'
        },
        {
          name: 'Robert Downey Jr.',
          age: 56,
          alive: true,
          movies: [im[0]._id,ta[0]._id,ae[0]._id],
          photo: 'https://www.imdb.com/name/nm0000375/mediaviewer/rm421447168/?ref_=nm_ov_ph'
        },
        {
          name: 'Scarlett Johansson',
          age: 36,
          alive: true,
          movies: [ta[0]._id,ae[0]._id],
          photo: 'https://www.imdb.com/name/nm0424060/mediaviewer/rm1916122112/?ref_=nm_ov_ph'
        },
        {
          name: 'Johnny Depp',
          age: 58,
          alive: true,
          movies: [potctcotbp[0]._id,potcdmc[0]._id],
          photo: 'https://www.imdb.com/name/nm0000136/mediaviewer/rm4061373441/?ref_=nm_ov_ph'
        },
        {
          name: 'Denzel Washington',
          age: 67,
          alive: true,
          movies: [td[0]._id, mof[0]._id],
          photo: 'https://www.imdb.com/name/nm0000243/mediaviewer/rm615504640/?ref_=nm_ov_ph'
        },
        {
          name: 'Angelina Jolie',
          age: 46,
          alive: true,
          movies: [m[0]._id, mmoe[0]._id],
          photo: 'https://www.imdb.com/name/nm0001401/mediaviewer/rm3738743040/?ref_=nm_ov_ph'
        }
      ];
      
      module.exports = actors;

    await Actor.insertMany(actors)
    console.log("added actors")
}
const run = async () => {
    await main()
    db.close()
}

run()