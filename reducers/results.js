import { SAVE_RESULT, RECEIVE_RESULTS, DELETE_DECK } from '../constants/actionTypes'

//reducer for results slice of store state, initially populates with data from storage,
//saves a new result when quiz is completed, deletes a result via deckId when user deletes deck
const results = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_RESULTS:
            return {
                ...state,
                ...action.results
            }
        case SAVE_RESULT:
            const { deckId, score, date, cardNum, timesPlayed } = action.resultData

            return {
                ...state,
                [deckId]: {
                    ...state[deckId],
                    deckId,
                    score,
                    cardNum,
                    date,
                    timesPlayed
                }
            }
        case DELETE_DECK:
            let currentResults = { ...state }
            delete currentResults[action.deckId]

            return currentResults
        default:
            return state
    }
}

export default results