let addToy = false;

function addButtonListener(){
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
}

function fetchToys(){
  fetch('http://localhost:3000/toys')
  .then(resp => resp.json())
  .then(toys => {
    toys.forEach(function(toy){
      renderToy(toy)
    })
  })
}

function createFormListener(){
  const form = document.querySelector('form')
  form.addEventListener('submit', function(event){
    event.preventDefault()
    const newToy = {
      name: event.target['name'].value,
      image: event.target['image'].value,
      likes: 0
    }

    form.reset()

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(newToy)
    }


    fetch('http://localhost:3000/toys', reqObj)
    .then(resp => resp.json())
    .then(toy => {
      renderToy(toy)
    })

  }) 
}

function renderToy(toy){
    const toyContainer = document.querySelector('#toy-collection')
    const toyCard = `<div class="card"><h2>${toy.name}</h2><img src=${toy.image} class="toy-avatar" /><p>${toy.likes} Likes </p><button class="like-btn" data-id=${toy.id}>Like <3</button></div>`

    toyContainer.innerHTML += toyCard
}


function createLikeListener(){
  const toyContainer = document.querySelector('#toy-collection')
  toyContainer.addEventListener('click', function(event){
    if (event.target.className === 'like-btn'){
      const toyId = event.target.dataset.id


      likes = event.target.previousElementSibling
      likeCount = parseInt(likes.innerHTML.split(' ')[0]) + 1

      // likeCount = parseInt(likes)

      const reqObj = {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          likes: likeCount
        })
      }


      fetch(`http://localhost:3000/toys/${toyId}`, reqObj)
      .then(resp => resp.json())
      .then(toy => {
        likes.innerText = `${likeCount} Likes`
 
      })

    }
  })

}




function main(){
  addButtonListener()
  fetchToys()
  createFormListener()
  createLikeListener()

  // find the container that holds all of the like buttons
  // add an eventlistener to that div
  //  once clicked:
  //    update the backend by making a patch request:
  //      grab the id of the toy
  //      construct the req OBj
  //      make fetch request
  //    update the frontend by incrementing the like count
  //
}

main()
