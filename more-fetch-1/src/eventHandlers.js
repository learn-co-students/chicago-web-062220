

function handleSearchInput(event, allPokemonData, pokemonContainer) {
  const filteredPokes = allPokemonData.filter(pokeObj => {
    return pokeObj.name.includes(event.target.value.toLowerCase())
  })

  const filteredPokeHTML = renderAllPokemon(filteredPokes)
  pokemonContainer.innerHTML = filteredPokeHTML ? filteredPokeHTML : `<p><center>There are no Pokémon here</center></p>`
}



function handleClick(event, allPokemonData) {
  if (event.target.tagName === 'IMG') {
    const clickedPokemon = allPokemonData.find((pokemonObject) => pokemonObject.id == event.target.dataset.id)
    event.target.src = (event.target.src === clickedPokemon.sprites.front ? clickedPokemon.sprites.back : clickedPokemon.sprites.front)
  } else if (event.target.tagName === 'BUTTON') {
    console.log(event.target)
    const pokeId = event.target.dataset.id
    console.log(pokeId)


    const reqObj = {
      method: 'DELETE'
    }


    fetch(`http://localhost:3000/pokemon/${pokeId}`, reqObj)
    .then(resp => resp.json())
    .then(data => {
      event.target.parentNode.parentNode.nextElementSibling.remove()
    })

    // extract the id using data-attributes of the pokemon that needs to be deleted
    //  fetch request with that id in the URL
    //
    // update the frontend
    //  remove the pokemon card
  }
}

/************************* Helper Fns for Producing HTML **********************/
function renderAllPokemon(pokemonArray) {
  return pokemonArray.map(renderSinglePokemon).join('')
}




function renderSinglePokemon(pokemon) {
  return (`
  <div class="pokemon-card">
    <div class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
      <div class="pokemon-image">
        <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
      </div>
      <button data-id=${pokemon.id} data-action="delete" class="pokemon-button">Delete</button>
    </div>
  </div>`)
}














