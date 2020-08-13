


const myUser = {"id":1, "username":"pouros"}


function main(){
  fetchBooks()
  createClickListener()
}

function createClickListener(){
  const ul = document.querySelector('ul')
  ul.addEventListener('click', function(event){
    if(event.target.tagName === 'LI') {

      const bookId = event.target.dataset.id

      fetch(`http://localhost:3000/books/${bookId}`)
      .then(resp => resp.json())
      .then(book => {
        renderShowBook(book)
      })

    }
  })
}

function renderShowBook(book) {
  const showPanel = document.getElementById('show-panel')
  const likeText = book.users.find(function(user){ return user.id === myUser.id } ) ? 'unlike' : 'like'

  const bookHtml =  `<img src='${book.img_url}'/><h4>${book.title}</h4><p>${book.description}</p><button>${likeText}</button><h6>liked by:</h6><ul id='liked-users'></ul>`

  showPanel.innerHTML = bookHtml


  book.users.forEach(function(user){
    const likedList = document.querySelector('#liked-users')
    const li = `<li>${user.username}</li>`

    likedList.innerHTML += li
  })

   

  const likeButton = document.querySelector('button')

  likeButton.addEventListener('click', function(event){
    if (event.target.innerText === 'like') {
      addLike(book, event)
    } else {
      removeLike(book, event)
    }
  })
}

function removeLike(book, event){
    const bookId = book.id

    const updatedUsers = book.users.filter(user => user.id !== myUser.id)


    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        users: updatedUsers
      })
    }

    fetch(`http://localhost:3000/books/${bookId}`, reqObj)
    .then(resp => resp.json())
    .then(book => {
      const likedList = document.querySelector('#liked-users')
      likedList.innerHTML =''

      book.users.forEach(function(user){
        const li = `<li>${user.username}</li>`
        likedList.innerHTML += li
      })

      event.target.innerText = 'like'

    })
}


function addLike(book, event){
    const bookId = book.id

    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        users: [...book.users, myUser]
      })
    }

    fetch(`http://localhost:3000/books/${bookId}`, reqObj)
    .then(resp => resp.json())
    .then(book => {
      const likedList = document.querySelector('#liked-users')
      const li = `<li>${myUser.username}</li>`

      likedList.innerHTML += li
      event.target.innerText = 'unlike'


    })
}



function fetchBooks(){
  fetch('http://localhost:3000/books')
  .then(resp => resp.json())
  .then(books => {
    renderBooks(books)
  })
}


function renderBooks(books){
  books.forEach(function(book){
    const ul = document.querySelector('ul')
    const bookLi = document.createElement('li')
    bookLi.dataset.id = book.id
    bookLi.innerText = book.title

    ul.append(bookLi)



    // grab the ul
    // create a new li for each book
    // throw that li into the ul
  })
}



main()
