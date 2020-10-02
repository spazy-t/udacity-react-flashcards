import { getResults, getDecks, saveDummyData } from '../utils/api'
import { receiveDecksData } from './decks'
import { receiveResultsData } from './results'

const dummyData = {
    java: {
        title: 'java',
        cards: [
            {
                question: 'Will trump get a second term?',
                answer: 'No!'
            },
            {
                question: 'which is better: Android or iOS?',
                answer: 'Android'
            },
            {
                question: 'front end or back end developer?',
                answer: 'front'
            },
        ]
    },
    javaScript: {
        title: 'javaScript',
        cards: []
    },
    python: {
        title: 'python',
        cards: []
    },
}

export const handleInitData = () => {
    return (dispatch) => {
        Promise.all([getDecks(), getResults()])
        .then(([decks, results]) => {
            if(decks !== null) {
                dispatch(receiveDecksData(decks))
            } else {
                saveDummyData(dummyData)
                dispatch(receiveDecksData(dummyData))
            }
            
            dispatch(receiveResultsData(results))
        })
        .catch(err => {
            console.log('error retrieving initial data', err)
        })
    }
}

//TODO: write action to delete deck and remove same from results data