import { getResults, getDecks, saveDummyData, removeDeck, removeDeckFromResults } from '../utils/api'
import { receiveDecksData, addDeck } from './decks'
import { receiveResultsData } from './results'
import { DELETE_DECK } from '../constants/actionTypes'

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

/**
 * Thunk actions
 */
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
//Call AsyncStorage api method to delete a deck and then calls redux store to do same if successful
export const handleDeleteDeck = (deckId) => {
    return (dispatch) => {
        Promise.all([removeDeck(deckId), removeDeckFromResults(deckId)])
        .then(
            dispatch(deleteDeck(deckId))
        )
        .catch(err => {
            dispatch(addDeck(deckId))
            console.log('error removing deck from storage', err)
        })
    }
}

/**
 * regular actions
 */
export const deleteDeck = (deckId) => {
    return {
        type: DELETE_DECK,
        deckId
    }
}