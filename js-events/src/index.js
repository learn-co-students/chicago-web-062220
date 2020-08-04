







// grab the form 
// bind it to an eventlistenere (submit event)
// once submitted:
//   scrape the data from the comment field
//   create a ptag
//   grab the commentcontainer
//   append the ptag to the commentsContainer




const form = document.querySelector('form')

form.addEventListener('submit', function(event){
  event.preventDefault()
  const commentText = event.target['comment-field'].value
  const pTag = document.createElement('p')
  pTag.innerText = commentText




  // const img = document.createElement('img')
  // img.src = 'https://images.unsplash.com/photo-1596525728348-7b13f6e6d7a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  // img.style.height = '100px'
  // img.style.width= '100px'




  const commentsContainer = document.querySelector('#comments-container')

  commentsContainer.append(pTag)

  form.reset()

})




































// const alertBtn = document.getElementById('alert-btn')

// alertBtn.addEventListener('mouseover', function(event){
  // console.log(event)
  // alert('youve been alerted')
// })






// const logBtn = document.querySelector('#console-btn')


// logBtn.addEventListener('click', handleLogBtn)


// function handleLogBtn(){
  // console.log('were logging something')
// }

