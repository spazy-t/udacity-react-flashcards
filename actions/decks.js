import { RECEIVE_DECKS, ADD_DECK, ADD_CARD, DELETE_DECK } from '../constants/actionTypes'

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

export const deleteCard = (deckId) => {
    return {
        type: DELETE_DECK,
        deckId
    }
}