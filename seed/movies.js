const db = require('../db')
const {Movie, Actor, Review} = require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const th = await Actor.find({name: 'Tom Hanks' })
  const ms = await Actor.find({name: 'Meryl Streep' })
  const bp = await Actor.find({name: 'Brad Pitt' })
  const ld = await Actor.find({name: 'Leonardo DiCaprio' })
  const jl = await Actor.find({name: 'Jennifer Lawrence' })
  const rdj = await Actor.find({name: 'Robert Downey Jr.' })
  const sj = await Actor.find({name: 'Scarlett Johansson' })
  const jd = await Actor.find({name: 'Johnny Depp' })
  const dw = await Actor.find({name: 'Denzel Washington' })
  const aj = await Actor.find({name: 'Angelina Jolie' })

    const movies = [
        {
          title: 'Forrest Gump',
          runtime: 142,
          rating: 8.8,
          release_date: new Date('1994-07-06'),
          actors: [th[0]._id],
          description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.'
        },
        {
          title: 'The Devil Wears Prada',
          runtime: 109,
          rating: 6.9,
          release_date: new Date('2006-06-30'),
          actors: [ms[0]._id],
          description: 'A smart but sensible new graduate lands a job as an assistant to Miranda Priestly, the demanding editor-in-chief of a high fashion magazine.'
        },
        {
          title: 'Fight Club',
          runtime: 139,
          rating: 8.8,
          release_date: new Date('1999-10-15'),
          actors: [bp[0]._id],
          description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.'
        },
        {
          title: 'Titanic',
          runtime: 195,
          rating: 7.8,
          release_date: new Date('1997-12-19'),
          actors: [ld[0]._id],
          description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.'
        },
        {
          title: 'Silver Linings Playbook',
          runtime: 122,
          rating: 7.7,
          release_date: new Date('2012-12-25'),
          actors: [jl[0]._id],
          description: 'After a stint in a mental institution, former teacher Pat Solitano moves back in with his parents and tries to reconcile with his ex-wife.'
        },
        {
          title: 'Iron Man',
          runtime: 126,
          rating: 7.9,
          release_date: new Date('2008-05-02'),
          actors: [rdj[0]._id],
          description: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.'
        },
        {
          title: 'The Avengers',
          runtime: 143,
          rating: 8.0,
          release_date: new Date('2012-05-04'),
          actors: [rdj[0]._id, sj[0]._id],
          description: 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.'
        },
        {
          title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
          runtime: 143,
          rating: 8.0,
          release_date: new Date('2003-07-09'),
          actors: [jd[0]._id],
          description: 'Blacksmith Will Turner teams up with eccentric pirate "Captain" Jack Sparrow to save his love, the governor\'s daughter, from Jack\'s former pirate allies, who are now undead.'
        },
        {
          title: 'Training Day',
          runtime: 122,
          rating: 7.7,
          release_date: new Date('2001-10-05'),
          actors: [dw[0]._id],
          description: 'On his first day on the job as a Los Angeles narcotics officer, a rookie cop goes beyond a full work day in training within the narcotics division of the LAPD with a rogue detective who isn\'t what he appears to be.'
        },
        {
          title: 'Maleficent',
          runtime: 97,
          rating: 7.0,
          release_date: new Date('2014-05-30'),
          actors: [aj[0]._id],
          description: 'A vengeful fairy is driven to curse an infant princess, only to discover that the child may be the one person who can restore peace to their troubled land.'
        },
        {
          title: 'Cast Away',
          runtime: 143,
          rating: 7.8,
          release_date: new Date('2000-12-22'),
          actors: [th[0]._id],
          description: 'A FedEx executive undergoes a physical and emotional transformation after crash landing on a deserted island.'
        },
        {
          title: 'Julia and Julia',
          runtime: 158,
          rating: 7.6,
          release_date: new Date('2012-12-25'),
          actors: [ms[0]._id],
          description: 'Person starts a blog about cooking their way through the Julia Childs cookbook.'
        },
        {
          title: 'Se7en',
          runtime: 127,
          rating: 8.6,
          release_date: new Date('1995-09-22'),
          actors: [bp[0]._id],
          description: 'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.'
        },
        {
          title: 'The Revenant',
          runtime: 156,
          rating: 8.0,
          release_date: new Date('2015-12-25'),
          actors: [ld[0]._id],
          description: 'A frontiersman on a fur trading expedition fights for survival after being mauled by a bear and left for dead by members of his own hunting team.'
        },
        {
          title: 'American Hustle',
          runtime: 138,
          rating: 7.2,
          release_date: new Date('2013-12-20'),
          actors: [jl[0]._id],
          description: 'A con artist and his partner are forced to work for a federal agent to turn the tables on other cons, mobsters, and politicians in 1970s New Jersey.'
        },
        {
          title: 'Avengers: Endgame',
          runtime: 181,
          rating: 8.4,
          release_date: new Date('2019-04-26'),
          actors: [rdj[0]._id,sj[0]._id],
          description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.'
        },
        {
          title: 'Pirates of the Caribbean: Dead Man\'s Chest',
          runtime: 151,
          rating: 7.3,
          release_date: new Date('2006-07-07'),
          actors: [jd[0]._id],
          description: 'Jack Sparrow races to recover the heart of Davy Jones to avoid enslaving his soul to Jones\' service, as other friends and foes seek the heart for their own agenda as well.'
        },
        {
          title: 'Man on Fire',
          runtime: 146,
          rating: 7.7,
          release_date: new Date('2004-04-23'),
          actors: [dw[0]._id],
          description: 'In Mexico City, a former assassin swears vengeance on those who committed an unspeakable act against the family he was hired to protect.'
        },
        {
          title: 'Maleficent: Mistress of Evil',
          runtime: 119,
          rating: 6.6,
          release_date: new Date('2019-10-18'),
          actors: [aj[0]._id],
          description: 'Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.'
        }
      ];
      
      module.exports = movies;

    await Movie.insertMany(movies)
    console.log("Added some movies!")
}
const run = async () => {
    await main()
    db.close()
}

run()