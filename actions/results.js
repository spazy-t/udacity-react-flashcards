import { SAVE_RESULT, RECEIVE_RESULTS } from '../constants/actionTypes'
import { saveResultToStorage } from '../utils/api'

/**
 * Thunk actions
 */
//handles quiz result data for asyncstorage saving and then call regular action.
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
//dispatches initial received results data to reducer
export const receiveResultsData = (results) => {
    return {
        type: RECEIVE_RESULTS,
        results
    }
}

//dispatches quiz result data to reducer to save into store state
export const saveResult = (resultData) => {
    return {
        type: SAVE_RESULT,
        resultData
    }
}