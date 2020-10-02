import { SAVE_RESULT, RECEIVE_RESULTS } from '../constants/actionTypes'
import { saveResultToStorage } from '../utils/api'

/**
 * Thunk actions
 */
 export const handleSaveResult = (result) => {
     return (dispatch) => {
        saveResultToStorage(result)
        .then(
            dispatch(saveResult(result))
        )
        .catch(err => console.log('error saving result to async storage', err))
     }
 }

/**
 * regular actions
 */
export const receiveResultsData = (results) => {
    return {
        type: RECEIVE_RESULTS,
        results
    }
}

export const saveResult = (resultData) => {
    return {
        type: SAVE_RESULT,
        resultData
    }
}