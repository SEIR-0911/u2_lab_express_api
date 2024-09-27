//constants
const movieBtn = document.querySelector('#movieBtn')
const reviewBtn = document.querySelector('#reviewBtn')
const actorBtn = document.querySelector('#actorBtn')
const allMovies = document.querySelector('#allMovies')
const allReviews = document.querySelector('#allReviews')
const allActors = document.querySelector('#allActors')

//HTML manipulation functions
function addOneMovie(oneMovie){
    const {title, runtime_mins, rating, release_year, desc} = oneMovie
    //all the html creation nonsense would go here
    //should go in a list, but hide the list from screen readers if there's only one? not sure I can include a conditional based on context outside of the function. A different function for the full list of movies would do it. Visually no different, and more code, but I'll take more lines of code for an added feature. Settling for a janky screen reader experience just for the sake of shorter code is selfish and lame.
}


//click handlers
movieBtn.onclick = async () => {
    const input = document.querySelector('#movieInput').value
    const oneMovie = await axios.get(`http://localhost:3001/movies/${input}`)
    console.log(oneMovie)


    const movieID = oneMovie.data._id
    //const allReviews = await axios.get(``) //I'd need to go back into the controllers and app file and create a way to search reviews by movie id... need to change /reviews/:id to /reviews/:movieID, since that makes much more sense for user search function...
    //run a loop over the reviews and add an addReviews function to list out the reviews

}

actorBtn.onclick = async () => {
    const input = document.querySelector('#actorInput').value
    const oneActor = await axios.get(`http://localhost:3001/actors/${input}`)
    console.log(oneActor)
}

allMovies.onclick = async () => {
    const dbMovies = await axios.get('http://localhost:3001/movies')
    console.log(dbMovies)
}

allReviews.onclick = async () => {
    const dbReviews = await axios.get('http://localhost:3001/reviews')
    console.log(dbReviews)
}

allActors.onclick = async () => {
    const dbActors = await axios.get('http://localhost:3001/actors')
    console.log(dbActors)
}