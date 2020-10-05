import { combineReducers } from 'redux'
import decks from './decks'
import results from './results'

//combines reducers to form both deck and results slices for store state
export default combineReducers({
    decks,
    results
})