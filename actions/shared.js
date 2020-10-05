import { 
    getResults,
    getDecks,
    saveDummyData,
    removeDeck,
    removeDeckFromResults
} from '../utils/api'
import { receiveDecksData, addDeck } from './decks'
import { receiveResultsData } from './results'
import { DELETE_DECK } from '../constants/actionTypes'

//for dev purposes, gives initial decks data inn order to see how app works
const dummyData = {
    History: {
        title: 'History',
        cards: [
            {
                question: 'Who were the white roses in the war of the roses?',
                answer: 'Yorkshire'
            },
            {
                question: 'How many wives did King Henry the 8th have?',
                answer: 'Six'
            },
            {
                question: 'Who discovered Penicillin?',
                answer: 'Alexander Fleming'
            },
        ]
    },
    Space: {
        title: 'Space',
        cards: [
            {
                question: 'What temperature is the hottest planet in the solar system?',
                answer: '450 degrees C'
            },
            {
                question: 'How much does a NASA space suit cost?',
                answer: '$12,000,000'
            }
        ]
    },
    Programming: {
        title: 'Programming',
        cards: []
    },
}

/**
 * Thunk actions
 */
//grabs decks and results data from asyncStorage, if any, and passes it to relevant regular actions to store in store state
//if no data in storage, use dummy data for testing purposes.
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
//a shared action for both results and decks to delete referenced deck via reducers
export const deleteDeck = (deckId) => {
    return {
        type: DELETE_DECK,
        deckId
    }
}