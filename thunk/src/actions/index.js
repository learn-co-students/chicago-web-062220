


// action creators

export const fetchPaintingsSuccess = (paintings) => {
  return {
    type: 'FETCH_PAINTINGS_SUCCESS',
    paintings 
  }
}


export const deletePainting = (id) => {
  return {
    type: 'DELETE_PAINTING',
    id
  }
}

export const thunkDeletePainting = (id) => {
  return function(dispatch) {
    fetch(`http://localhost:3000/paintings/${id}`, {method: 'DELETE'})
    .then(resp => resp.json())
    .then(data => {
      dispatch(deletePainting(id))
    })
  };
}






export const thunkFetchPaintings = (forPerson) => {
  return function(dispatch) {
     fetch('http://localhost:3000/paintings')
     .then(resp => resp.json())
     .then(paintings => {
       dispatch(fetchPaintingsSuccess(paintings))
     })
  };
}




