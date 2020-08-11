


const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`


function main(){
  fetchTrainers()
  addClickListener()
}


function addClickListener(){
  const main = document.querySelector('main')

  main.addEventListener('click', function(event){
    if (event.target.className === 'add') {
      handleAddPokemon(event)
    } else if (event.target.className === 'release') {
      handleReleasePokemon(event)
    }
  })
}



function handleReleasePokemon(event){
  const pokeId = event.target.dataset.pokemonId
  console.log(pokeId)


  fetch(`http://localhost:3000/pokemons/${pokeId}`, { method: 'DELETE' })
  .then(resp => resp.json())
  .then(data => {
    if (data.error) {
      alert('ooops somethign went wrong')
    } else {
      event.target.parentNode.remove()
    }
  })



  // make a delete request
  // build out the request object (DELETE)
  // find the id of the pokemon im trying to delete
  //
  // remove the li node from the frontend
}




function handleAddPokemon(event){
  const trainerId = event.target.dataset.trainerId
  const ul = document.querySelector(`#ul-${trainerId}`)

  if (ul.children.length > 5){
    alert('you cant add anymore pokemon')
    return
  }




  const reqObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ trainerId: trainerId })
  }

  fetch(POKEMONS_URL, reqObj)
  .then(resp => resp.json())
  .then(pokemon => {
      console.log(pokemon)

      const pokeLi = `<li>${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id=${pokemon.id}>Release</button></li>`

    ul.innerHTML += pokeLi
  })





  // grab the trainer id from the data- attr
  //
  // make a post request (send botht the method and trainerID
  //
  // when it comes back
  // add the new li

}








function fetchTrainers(){
  fetch(TRAINERS_URL)
  .then(resp => resp.json())
  .then(trainers => {
    console.log(trainers, '------');
    trainers.forEach(function(trainer){

      // const pokemonLis = trainer.pokemons.map(function(pokemomn){
        // return `<li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>`
      // }).join('')



      const mainElement = document.querySelector('main')
      const pokeCard = `<div class="card" data-id=${trainer.id}><p>${trainer.name}</p><button class='add' data-trainer-id=${trainer.id}>Add Pokemon</button><ul id="ul-${trainer.id}"></ul></div>`


      mainElement.innerHTML += pokeCard

      const ul = document.querySelector(`#ul-${trainer.id}`)

      trainer.pokemons.forEach(pokemon => {
        const pokeLi = `<li>${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id=${pokemon.id}>Release</button></li>`
        ul.innerHTML += pokeLi
      })

    })
  })




  // make a get request to pour rails server
  //
  //
  //  when it comes back: 
    // iterate over the trainers data
    // render a card for each of them
  //   along with their pokemon
}



main()



