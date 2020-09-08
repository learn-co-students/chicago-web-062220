
const initialState = ''

export default function transactions(state = initialState, action) {
  switch (action.type) {
    case 'HANDLE_SEARCH':
      return action.input
    default:
      return state
  }
}
