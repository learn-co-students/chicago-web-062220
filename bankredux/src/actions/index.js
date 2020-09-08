


export const fetchTransactionsSuccess = (transactions) => {
  return {
    type: 'FETCH_TRANSACTIONS_SUCCESS',
    transactions: transactions
  }
}

export const deleteTransaction = (id) => {
  return {
    type: 'DELETE_TRANSACTION',
    id: id
  }
}

export const handleSearch = (input) => {
  return {
    type: 'HANDLE_SEARCH',
    input: input
  }
}


// Action Creator is a f(x) that produces an action



// 1. A new event happens (fetch, a button gets clicked, a form gets submitted)
// 2. We need to wire the component to be able to dispatch an action
// 3. define the action creator in the actions folder
// 4. define mapDispatchToProps so that it makes available that action disaptch to the compoennt
// 5. The component will call that actionDispatch when the even happens
// 6. At this point, the action is being dispatched and sent to the reducer (we can check in
//    our redux extension for this).
// 7. Update the reducer so that it can account for this new action type 
//
