




function main() {
  fetchBooks()
  createFormListener()
}


function createFormListener(){
  const form = document.querySelector('form')


  form.addEventListener('submit', function(event){
    event.preventDefault()

    const newBook = {
      title: event.target['title'].value,
      author: event.target['author'].value
    }


    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBook)
    }


    fetch('http://localhost:3000/books', reqObj)
    .then(resp => resp.json())
    .then(book => {
      renderBook(book)
    })

  })




  // X find the form
  // X bind the form to an eventlistener (submit)
  // X once submitted:
  //    X prevent default behavior of the form
  //    X scrape the form data
  //    X  update the backend
  //    update the frontend
}


function fetchBooks(){
  fetch('http://localhost:3000/books')
  .then(resp => resp.json())
  .then(books => {

    books.forEach(renderBook)


    // find the booklist div
    // iterate over the book array
    // for each book: 
    //   assign each book a ptag and place it in the bookList div
  })

}


function renderBook(book){
  const bookList = document.querySelector('#book-list')
  const pTag = document.createElement('p')
  pTag.innerText = `${book.title} - ${book.author}`

  bookList.append(pTag)
}




main()


















