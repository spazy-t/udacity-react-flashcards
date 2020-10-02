import { SAVE_RESULT, RECEIVE_RESULTS } from '../constants/actionTypes'

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
        default:
            return state
    }
}

export default results