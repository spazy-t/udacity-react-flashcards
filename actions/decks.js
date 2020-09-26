import { RECEIVE_DECKS, ADD_DECK, ADD_CARD, DELETE_DECK, DELETE_CARD } from '../constants/actionTypes'
import { getDecks, saveNewDeck, saveCardToDeck, removeDeck, removeCardFromDeck } from '../utils/api'

//TODO: remove dummy data when AsyncStorage is set up
const dummyData = {
    java: {
        title: 'java',
        cards: [
            {
                question: 'Will trump get a second term?',
                answer: 'No!'
            },
            {
                question: 'whic is better: Android or iOS?',
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
 * Thunk action creators
 */
//TODO: once complete remove dummy data and just pass null so user needs to create first deck
export const handleInitData = () => {
    return (dispatch) => {
        getDecks()
        .then((results) => {
            if(results !== null){
                dispatch(receiveData(results))
            } else {
                dispatch(receiveData(dummyData))
            }
        })
        .catch(err => {
            console.log('error getting init data', err)
        })
    }
}
//Call AsyncStorage api method to add a deck and then calls redux store to do same if successful
export const handleAddDeck = (deckTitle) => {
    return (dispatch) => {
        saveNewDeck(deckTitle)
        .then(
            dispatch(addDeck(deckTitle))
        )
        .catch(err => {
            dispatch(deleteDeck(deckTitle))
            console.log('error adding new deck to DB', err)
        })
    }
}

//Call AsyncStorage api method to add a card and then calls redux store to do same if successful
export const handleAddCardToDeck = ({ deckId, card }) => {
    return (dispatch) => {
        saveCardToDeck(deckId, card)
        .then(
            dispatch(addCard({ deckId, card }))
        )
        .catch(err => {
            dispatch(deleteCard({ deckId, card }))
            console.log('error adding new card to deck in DB', err)
        })
    }
}

//Call AsyncStorage api method to delete a deck and then calls redux store to do same if successful
export const handleDeleteDeck = (deckId) => {
    return (dispatch) => {
        removeDeck(deckId)
        .then(
            dispatch(deleteDeck(deckId))
        )
        .catch(err => {
            dispatch(addDeck(deckId))
            console.log('error removing deck from DB', err)
        })
    }
}

//Call AsyncStorage api method to delete a card and then calls redux store to do same if successful
export const handleDeleteCard = (cardInfo) => {
    const { deck, cardNum } = cardInfo

    return (dispatch) => {
        removeCardFromDeck(deck, cardNum)
        .then(
            dispatch(deleteCard(cardInfo))
        )
        .catch(err => {
            dispatch(addCard(cardInfo))
            console.log('error removing card from deck in DB', err)
        })
    }
}

/**
 * regular action creators
 */
export const receiveData = (decksData) => {
    return {
        type: RECEIVE_DECKS,
        decksData
    }
}

export const addDeck = (newDeck) => {
    return {
        type: ADD_DECK,
        newDeck
    }
}

export const addCard = (cardInfo) => {
    return {
        type: ADD_CARD,
        cardInfo
    }
}

export const deleteDeck = (deckId) => {
    return {
        type: DELETE_DECK,
        deckId
    }
}

export const deleteCard = (cardInfo) => {
    return {
        type: DELETE_CARD,
        cardInfo
    }
}