import { SAVE_RESULT, RECEIVE_RESULTS } from '../constants/actionTypes'
//TODO: AsyncStorage method import

/*export const receiveResults = () => {

}*/

export const saveResult = (resultData) => {
    return {
        type: SAVE_RESULT,
        resultData
    }
}