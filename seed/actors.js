//Seed your db with at least 4 airports. Use your
//Mongo shell (mongosh), or your query.js file to Read all of your data

//pulling in our db and modules
const db = require("../db");
const { Actor } = require("../Models"); // getting the schema
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

  const actors = [
    { name: "Brad Pitt", age: 56, alive: true, movie: benjamin[0]._id },
    { name: "Cate Blanchett", age: 55, alive: true, movie: benjamin[0]._id },
    { name: "Ben Stiller", age: 55, alive: true, movie: WalterMitty[0]._id },
    { name: "Kristen Wiig", age: 56, alive: true, movie: WalterMitty[0]._id },
    {
      name: "Robert Pattinson",
      age: 34,
      alive: true,
      movie: RememberMe[0]._id,
    },
    { name: "Emilie de Ravin", age: 36, alive: true, movie: RememberMe[0]._id },
    { name: "Thomas Horn", age: 25, alive: true, movie: extremelyLoud[0]._id },
    { name: "Tom Hanks", age: 65, alive: true, movie: extremelyLoud[0]._id },
    { name: "Jared Leto", age: 35, alive: true, movie: req[0]._id },
    { name: "Jennifer Connelly", age: 35, alive: true, movie: req[0]._id },
  ];

  //running our Mongo commands through JS! How cool is that!
  //it is cool
  await Actor.insertMany(actors);
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
