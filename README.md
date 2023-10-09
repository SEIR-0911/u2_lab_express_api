# SEIR 0911

### Express / Mongoose API From Scratch

## GAMEMDB - The GA Mongoose Express Movie Database (this name still needs work)

For this lab we are going to create our own backend server! 

1) Necessary installations

```sh
npm init -y
npm i cors express mongoose morgan
touch server.js
```

2) Update your Scripts block in your package.json
```
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
```

4) In your config/db file, connect to a moviesDatabase using our standard Mongoose boilerplate
```sh
mkdir db
touch db/index.js
```
db/index.js ==> store db connection
```js
const mongoose = require('mongoose');

mongoose
    .connect('mongodb://127.0.0.1:27017/moviesDatabase')
    .then(() => {
        console.log('Successfully connected to MongoDB.');
    })
    .catch(e => {
        console.error('Connection error', e.message);
    });

const db = mongoose.connection;

module.exports = db;
```

6) Create 3 schemas, Movies, Reviews and Actors.
```
mkdir models seed
touch models/actor.js models/movie.js models/review.js
touch seed/actors.js seed/movies.js seed/reviews.js
```
models ==> we store the Schemas
seed ==> we seed the data in the db

7) Requriments for data:

-  Your movies model should have a Title, Runtime, Rating, Year Released and a brief description. You can also include a link to a poster image for it, or try to upload an image file if you want a challenge! Think of what data types you'll want to use for each of these additional properties
```js
const { Schema } = require('mongoose');

const Movie = new Schema(
    {
        move_id: { type: Number, required: true },
        title: { type: String, required: true },
        runtime: { type: Number, required: true },
        rating: { type: String, required: true },
        released: { type: Date },
        description: { type: String },
        url: { type: String }
    },
    { timestamps: true }
);

module.exports = Movie;
```

- Your actors model should have properties for Name and Age, and one that says if they are Alive or not, plus any other properties you'll want to include. Again, try to add images using either method. What datatypes would we use for our other properties?

```js
const { Schema } = require('mongoose');

const Actor = new Schema(
    {
        act_id: { type: Number, required: true },
        name: { type: String, required: true },
        age: { type: Number, required: true },
        stillAlive: { type: Boolean, required: true },
        url: { type: String }
    },
    { timestamps: true }
);

module.exports = Actor;
```

- Reviews should be owned by movies and have a score and a comment. Your score can be 1-5, 1-10, or 0-100%, either way, it will need some kind of Constraint put on it to make sure it can only hold valid information.
```js
  const { Schema } = require('mongoose');

const Review = new Schema(
    {
        rev_id: { type: Number, required: true },
        email: { type: String, required: true },
        score: { type: Number, required: true },
        date: { type: Date, required: true },
        description: { type: String }
    },
    { timestamps: true }
);

module.exports = Review;
```

- Use your Foreign Key references to connect your data! You will have the choice of which you want the parent and child to be. Should Actors own many movies? Or movies own any actors?

- Attach Reviews to movies using Foreign Key refs.

- Populate your db so that you have at least 5 of your parent data (movie or actor) and 10 of your child. Once you have Actors and Movies seeded, add at least 2 reviews to at least 3 of your movies.

- Attach all of the necessary boilerplate to your express server.js file. Your landing page (localhost:3001/) should be the index list of your top parent data. We will want endpoints that have index and show routes for all three collections


### Requirements

- At least 3 Collections with a relation. You can have either Actor->Movie->Review, or you can have Movie as a parent with both Actor and Review children. The choice is yours!
- Index and Show Routes for each of these routes


### Bonus I
- AAU I want to sort my reviews by ascending or descending order
- AAU I want to sort my movies by newest or oldest
- AAU I want an error message to display if I search for an Actor, Movie, or Review with an incorrect ID
- AAU I want to Create, Update, and Delete my Actors, Movies, and Reviews using either ThunderClient or a query.js file


### Bonus II

- AAU I want a Front End page that will allow me to pull, log, and render this information on screen using the Axios library to a url of localhost:3001 with all of our respective routes and endpoints
- As A Picky and Opinionated User I also want this page to have some style to it!

### Bonus III
- If you've gotten this far, we have a real challenge for you... use the Axios library to give your front end full CRUD as well!
