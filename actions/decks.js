import { RECEIVE_DECKS, ADD_DECK, ADD_CARD, DELETE_DECK, DELETE_CARD } from '../constants/actionTypes'
import { saveNewDeck, saveCardToDeck, removeDeck, removeCardFromDeck } from '../utils/api'

/**
 * Thunk action creators
 */
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
export const receiveDecksData = (decksData) => {
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