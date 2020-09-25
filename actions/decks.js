import { RECEIVE_DECKS, ADD_DECK, ADD_CARD, DELETE_DECK, DELETE_CARD } from '../constants/actionTypes'

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