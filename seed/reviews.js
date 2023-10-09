const db = require("../db");
const { Review } = require("../Models"); // getting the schema
const { Movie } = require("../Models");
//attaching to the db, and giving us an error if anything goes wrong
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//because we are taking a quick detour out of JS and into Mongo, we need to
//make sure these are all async functions. That way, even if it only takes
//.01 of second, it still won't throw things out of order
const main = async () => {
  const WalterMitty = await Movie.find({
    title: "The Secret Life of Walter Mitty",
  });
  const RememberMe = await Movie.find({ title: "Remember Me" });
  const extremelyLoud = await Movie.find({
    title: "Extremely Loud and Incredibly Close",
  });
  const benjamin = await Movie.find({
    title: "The Curious Case of Benjamin Button",
  });
  const req = await Movie.find({ title: "Requium for a Dream" });

  const reviews = [
    {
      score: 5,
      comment: "Made viewers feel the weight of time.",
      movie: benjamin[0]._id,
    },
    {
      score: 4.5,
      comment:
        "Contained a melancholic saddness throughout that was masterfully acheived.",
      movie: benjamin[0]._id,
    },

    {
      score: 5,
      comment:
        "Established the genre of a romance before shockingly flipping the genre to a tragedy within the last 10 minutes.",
      movie: RememberMe[0]._id,
    },
    {
      score: 4,
      comment:
        "Reminds the viewer of the important things in life: relationships.",
      movie: RememberMe[0]._id,
    },

    {
      score: 5,
      comment:
        "Makes the viewer want to go out and seize the day and their lives after watching.",
      movie: WalterMitty[0]._id,
    },
    {
      score: 5,
      comment: "Amazing, incredible cinematography.",
      movie: WalterMitty[0]._id,
    },
  ];

  //running our Mongo commands through JS! How cool is that!
  //it is cool
  await Review.insertMany(reviews);
  // using console.log to see the data we've seen
  console.log("Created actors!");
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
