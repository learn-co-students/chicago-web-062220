


const initialState = []


export default function transactions(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_TRANSACTIONS_SUCCESS':
      return [...action.transactions]
    case 'DELETE_TRANSACTION':
      const updatedTransactions = state.filter(t => t.id !== action.id)
      return updatedTransactions
    default:
      return state
  }
}
