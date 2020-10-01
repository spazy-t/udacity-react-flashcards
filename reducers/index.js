import { combineReducers } from 'redux'
import decks from './decks'
import results from './results'

export default combineReducers({
    decks,
    results
})