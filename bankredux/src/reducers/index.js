



import { combineReducers } from 'redux'
import transactions from './transactions'
import searchInput from './searchInput'

export default combineReducers({
  transactions,
  searchInput
})
