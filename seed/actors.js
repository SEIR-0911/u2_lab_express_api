const db = require('../db');
const { Actor, Movie } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error'));

const main = async () => {
    try {
        const movies = await Movie.find({
            title: {
                $in: [
                    'The Shawshank Redemption',
                    'Inception',
                    'The Godfather',
                    'Jurassic Park',
                ]
            }
        });

        const actors = [
            {
                name: 'Tim Robbins',
                birthday: 'October 16, 1958',
                deceased: false,
                imageURL: 'https://en.wikipedia.org/wiki/Tim_Robbins#/media/File:Tim_Robbins_at_Cannes.jpg',
                movies: [{ movieId: movies[0]._id }]
            },
            {
                name: 'Morgan Freeman',
                birthday: 'June 1, 1937',
                deceased: false,
                imageURL: 'https://en.wikipedia.org/wiki/Morgan_Freeman#/media/File:Morgan_Freeman_by_Gage_Skidmore.jpg',
                movies: [{ movieId: movies[0]._id }]
            },
            {
                name: 'Leonardo DiCaprio',
                birthday: 'November 11, 1974',
                deceased: false,
                imageURL: 'https://en.wikipedia.org/wiki/Leonardo_DiCaprio#/media/File:Leonardo_DiCaprio_by_Gage_Skidmore.jpg',
                movies: [{ movieId: movies[1]._id }]
            },
            {
                name: 'Al Pacino',
                birthday: 'April 25, 1940',
                deceased: false,
                imageURL: 'https://en.wikipedia.org/wiki/Al_Pacino#/media/File:Al_Pacino_(setembro_de_2014).jpg',
                movies: [{ movieId: movies[2]._id }]
            },
            {
                name: 'Robert De Niro',
                birthday: 'August 17, 1943',
                deceased: false,
                imageURL: 'https://en.wikipedia.org/wiki/Robert_De_Niro#/media/File:Robert_De_Niro_Cannes_2016.jpg',
                movies: [{ movieId: movies[2]._id }]
            },
            {
                name: 'Sam Neill',
                birthday: 'September 14, 1947',
                deceased: false,
                imageURL: 'https://en.wikipedia.org/wiki/Sam_Neill#/media/File:Sam_Neill.jpg',
                movies: [{ movieId: movies[3]._id }]
            },
            {
                name: 'Laura Dern',
                birthday: 'February 10, 1967',
                deceased: false,
                imageURL: 'https://en.wikipedia.org/wiki/Laura_Dern#/media/File:Laura_Dern_(cropped).jpg',
                movies: [{ movieId: movies[3]._id }]
            },
        ];

        await Actor.insertMany(actors);
        console.log('The actors have been cast');
    } catch (error) {
        console.error('Error:', error);
    }
};

const run = async () => {
    try {
        await main();
    } catch (error) {
        console.error('Error running the seed script:', error);
    } finally {
        db.close();
    }
}

run();
