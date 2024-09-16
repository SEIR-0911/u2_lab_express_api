//Attach all of the necessary boilerplate to your express server.js file.
//Your landing page (localhost:3001/) should be the index list of your top parent data.
//We will want endpoints that have index and show routes for all three collections

const express = require("express");
const db = require("./db");
const logger = require("morgan");
const bodyParser = require("body-parser");
const movieController = require("./Controllers/movieController");
const actorController = require("./Controllers/actorController");
const reviewController = require("./Controllers/reviewController");
// require() imports here ^ ///////

const PORT = process.env.PORT || 3001;

const app = express();

//middleware:
//making morgan track in terminal every request (without it, doesn't print requests in terminal)
app.use(logger("dev"));
app.use(bodyParser.json());
// app.use() middleware here ^ ///////////////////

//app.get("/", (req, res) => res.send("This is root!"));

app.get("/", movieController.getAllMovies);

app.get("/:id", movieController.getOneMovie);

app.post("/movies", movieController.createMovie);

app.put("/movies/:id", movieController.updateMovie);

app.put("/movies/:id", movieController.updateMovie);

app.delete("/movies/:id", movieController.deleteMovie);

app.get("/actors", actorController.getAllActors);

app.get("/actors/:id", actorController.getOneActor);

app.get("/reviews", reviewController.getAllReviews);

app.get("/reviews/:id", reviewController.getOneReview);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
