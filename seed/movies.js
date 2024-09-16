const db = require("../db");
const { Movie } = require("../Models"); // getting the schema
//this code goes into models, then goes into Index.js (always goes into Index.js after Models) and within
//index.js, it looks for Movie. So {Movie} must match this variable from index.js --> const Movie = mongoose.model("Movie", movieSchema);

//attaching to the db, and giving us an error if anything goes wrong
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//because we are taking a quick detour out of JS and into Mongo ehen we insert, we need to
//make sure these are all async functions. That way, even if it only takes
//.01 of second, it still won't throw things out of order
const main = async () => {
  const movies = [
    {
      title: "Extremely Loud and Incredibly Close",
      description:
        "A son heals from losing his father after 9/11 terrorist attacks",
      yearReleased: 2011,
      runtime: 120,
      rating: "PG13",
    },

    {
      title: "Remember Me",
      description:
        "A couple falls in love right before the 9/11 terrorist attacks that claims their relationship",
      yearReleased: 2011,
      runtime: 110,
      rating: "PG13",
    },

    {
      title: "The Curious Case of Benjamin Button",
      description: "a baby is born an old man",
      yearReleased: 2008,
      runtime: 130,
      rating: "PG13",
    },

    {
      title: "Requium for a Dream",
      description: "Addiction claims a mother and son",
      yearReleased: 2005,
      runtime: 120,
      rating: "R",
    },

    {
      title: "The Secret Life of Walter Mitty",
      description:
        "A man decides to make his life as adventurous as his daydreaming",
      yearReleased: 2017,
      runtime: 115,
      rating: "PG13",
    },
  ];

  //running our Mongo commands through JS! How cool is that!
  //it is cool
  await Movie.insertMany(movies);
  // using console.log to see the data we've seen
  console.log("Created movies!");
};

//we keep these functions seperate so they can each run independently (Atomically) and perform their necessary task.
//this is a bit complicated, yes, but it will prevent A Lot of errors we'd see if we didn't do this
const run = async () => {
  //runs our main function and awaits for the data to populate
  await main();
  //closes our db after its run so things don't break
  db.close();
};

run();
