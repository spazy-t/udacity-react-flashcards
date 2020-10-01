import { SAVE_RESULT, RECEIVE_RESULTS } from '../constants/actionTypes'

const results = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_RESULTS:
            return {
                ...state,
                ...action.resultsData
            }
        case SAVE_RESULT:
            const { deckId, score, date } = action.resultData

            return {
                [deckId]: {
                    ...state[deckId],
                    bestScore: score,
                    date: date
                }
            }
        default:
            return state
    }
}

export default results