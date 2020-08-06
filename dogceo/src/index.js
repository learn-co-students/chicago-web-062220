console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function main(){
  fetchImages()
  fetchBreeds()
  addClickListener()
  addFilterListener()
}

function addFilterListener(){
  const dropdown = document.querySelector('select')

  dropdown.addEventListener('change', function(event){
    const filterLetter = event.target.value
    const ul = document.querySelector('ul')
    ul.innerHTML = ''



    fetch(breedUrl)
    .then(resp => resp.json())
    .then(jsonData => {
      const breedObj = jsonData.message

      const filteredBreedObj = {}

      for (breed in breedObj ){
        if (breed[0] === filterLetter) {
          filteredBreedObj[breed] = breedObj[breed]
        }
      }


      renderBreeds(filteredBreedObj)

    })



  })


}





function addClickListener(){
  const ul = document.getElementById('dog-breeds')
  ul.addEventListener('click', function(event){
    if (event.target.tagName === 'LI') {
      event.target.style.color = 'red'
    }
  })
}


function renderBreeds(breedObj){
  for(breed in breedObj) {
    const subBreedArr = breedObj[breed]

    if (subBreedArr.length === 0) {

      const li = document.createElement('li')
      li.innerText = breed
      // const button = document.createElement('button')
      // button.innerText = 'dont do anything if i get clicked'
      // li.append(button)

      const ul = document.getElementById('dog-breeds')

      ul.append(li)
    } else {

      subBreedArr.forEach(function(subBreed){
        const fullBreedName = `${subBreed} ${breed}`
        const li = document.createElement('li')
        li.innerText = fullBreedName
        const ul = document.getElementById('dog-breeds')
        ul.append(li)

      })
    }


    // if the breed key points  to an empty arr:
    //  do what we did below
    //  otherwise:
    //    loop through the array
    //     and create additional lis for them


  }
}



function fetchBreeds(){
  fetch(breedUrl)
  .then(resp => resp.json())
  .then(jsonData => {
    const breedObj = jsonData.message

    renderBreeds(breedObj)


  })
}


function fetchImages(){
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(jsonData => {
    const images = jsonData.message
    images.forEach(function(image){
      const imgElement = document.createElement('img')
      imgElement.src = image
      imgElement.style.height = '100px'
      imgElement.style.width= '100px'

      const imageContainer = document.querySelector('#dog-image-container')
      imageContainer.append(imgElement)
    })


  })
}



main()
