


const initialState = []


export default function paintings(state=initialState, action) {
  switch (action.type) {
    case 'FETCH_PAINTINGS_SUCCESS':
      return [...action.paintings]
    case 'DELETE_PAINTING':
      const filteredPaintings = state.filter(p => p.id !== action.id)
      return filteredPaintings
    default:
      return state
  }
}

















