const BASE_URL = "http://localhost:3001";

const movieConent = document.getElementById('movie-content');
const createActorForm = document.getElementsByName('create-actor-form');
const createActorBtn = document.getElementById('create-actor');


async function getAllMovies() {
    let movieStr = "";
    try {
        const movies = await axios.get(`${BASE_URL}/movies`);
        console.log(movies.data);
        movies.data.forEach(movie => {
            movieStr += ` <p> ${movie.title}</p>`;


        });
        movieConent.innerHTML += movieStr;

    } catch (err) {
        console.log(err);
    }

}

//getAllMovies();
//console.log(createActorForm);
createActorBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log('btn clicked');
    console.log(createActorForm);
    const formData = new FormData(createActorForm[0]);
    let actorData = {};
    for (let [key, value] of formData.entries()) {
        console.log(key, value);
        actorData[key] = value;
    }
    //console.log(formData.append(name, name.value))
    console.log(formData);
    try {
        const actor = await axios.post(`${BASE_URL}/actors`, actorData);
        console.log(actor);
    } catch (error) {
        console.log(error);
    }

})



