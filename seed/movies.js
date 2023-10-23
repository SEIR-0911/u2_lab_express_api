const db = require('../db');
const { Movie, Actor } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error'));

const main = async () => {
    const movies = [
        {
            title: 'The Shawshank Redemption',
            runtimeMins: 142,
            rating: 5,
            released: 'September 23, 1994',
            description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
            imageURL: 'https://thesaintaq.files.wordpress.com/2018/11/picture1.png'
        },
        {
            title: 'Inception',
            runtimeMins: 148,
            rating: 4.5,
            released: 'July 16, 2010',
            description: 'A thief who enters the dreams of others to steal their secrets is given the task of planting an idea into the mind of a CEO.',
            imageURL: 'https://play-lh.googleusercontent.com/buKf27Hxendp3tLNpNtP3E-amP0o4yYV-SGKyS2u-Y3GdGRTyfNCIT5WAVs2OudOz6so5K1jtYdAUKI9nw8=w480-h960-rw'
        },
        {
            title: 'The Godfather',
            runtimeMins: 175,
            rating: 4.8,
            released: 'March 24, 1972',
            description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
            imageURL: 'https://play-lh.googleusercontent.com/ZucjGxDqQ-cHIN-8YA1HgZx7dFhXkfnz73SrdRPmOOHEax08sngqZMR_jMKq0sZuv5P7-T2Z2aHJ1uGQiys=w480-h960-rw'
        },
        {
            title: 'Jurassic Park',
            runtimeMins: 127,
            rating: 4.2, 
            released: 'June 11, 1993',
            description: 'During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.',
            imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfk7jEd8xiMQzqnS0OYR_VBTMlvQB6jeRBouSw9sARYxhsy0RHxDBlcZZ8iX6fP0eQCTI&usqp=CAU'
        },
    ];
    
    await Movie.insertMany(movies);
    console.log('Movies have been inserted!');
};
// await movie.save()

const run = async () => {
    await main();
    db.close();
};

run();
