const button = document.querySelector('#movieBtn')
const button2 = document.querySelector('#actorBtn')
const imageDiv = document.querySelector('#imageDiv')
const actorInfo = document.getElementById('actorInfo')


const getMovies = async () => {
   const movies = await axios.get('http://localhost:3001/movies')
   console.log(movies)
}

getMovies()


button.addEventListener('click', async () => {
   console.log('button clicked')

   const movieInput = document.getElementById('movieText')
   const title = movieInput.value
   console.log(title)
   let response = await axios.get(
      `http://localhost:3001/movies/${title}`
   )
   console.log(response)
   let { data } = response
   let moviePic = data.image
      movieInfo.innerHTML = `
      <li>Title: ${data.title}</li>
      <li>Duration: ${data.duration}</li>
      <li>Rating: ${data.rating}</li>
      <li>Release Date: ${data.releaseDate}</li>
      <li>Description: ${data.description}</li>
      `
      let actorPic = data.actors[0].image
      actorInfo.innerHTML = `
      <li>Name: ${data.actors[0].name}</li>
      <li>Age: ${data.actors[0].age}</li>
      <li>Born In: ${data.actors[0].location}</li>
      <li>Movie Genre: ${data.actors[0].movieGenre}</li>
      <li>Still Alive: ${data.actors[0].stillAlive? 'yes': 'no'}</li>
      `
      actorImage.src = actorPic

   imageDiv.src = moviePic 
})





const getActors = async () => {
   const actors = await axios.get('http://localhost:3001/actors')
   console.log(actors)
}

getActors()


button2.addEventListener('click', async () => {
   console.log('button clicked')
   const actorInput = document.getElementById('actorText')
   const name = actorInput.value
   console.log(actor)
   let response = await axios.get(
      `http://localhost:3001/actors/${name}`
   )
   console.log(response)
   let { data } = response
   let actorPic = data.image
      actorInfo.innerHTML = `
      <li>Name: ${data.name}</li>
      <li>Age: ${data.age}</li>
      <li>Born In: ${data.location}</li>
      <li>Movie Genre: ${data.movieGenre}</li>
      <li>Still Alive: ${data.stillAlive? 'yes': 'no'}</li>
      `
   actorImage.src = actorPic
   
})
console.log('working')

