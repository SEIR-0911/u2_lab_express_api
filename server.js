const express = require("express");
const db = require('./db');
const cors = require("cors");
const bodyParser = require('body-parser');
const logger = require('morgan');
const movieController = require('./controllers/movieController');



const PORT = process.env.PORT || 3001;

const app = express();

//middlewar
app.use(cors());
app.use(express.json());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => res.send("This is root!"));
app.get("/movies", movieController.getAllMovies);//get all movies
app.get("/movies/:id", movieController.getOneMovie);//get one movie
app.get("/actors", movieController.getAllActors);//get all actors
app.get("/actors/:id", movieController.getOneActor);//get one actor
app.get("/reviews", movieController.getAllActors);//get all reviews
app.get("/reviews/:id", movieController.getOneActor);//get one review


app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`));