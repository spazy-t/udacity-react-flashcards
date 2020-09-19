import thunk from 'redux-thunk'
import logger from './logger'
import { applyMiddleware } from 'redux'

//combine required middleware for redux store to be passed into createStore in DeckList
export default applyMiddleware(
    thunk,
    logger
)