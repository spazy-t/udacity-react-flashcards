import AsyncStorage from '@react-native-community/async-storage'
import { DECKS_STORAGE_KEY, RESULTS_STORAGE_KEY } from '../constants/actionTypes'

/**
 * get function
 */
//gets deck state from storage and returns the data (if any)
export function getDecks() {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((result) => {
        const data = JSON.parse(result)
        return data
    })
}

//grabs results data, if any, from asyncStorage and passes it back to caller
export function getResults() {
    return AsyncStorage.getItem(RESULTS_STORAGE_KEY)
    .then((result) => {
        const data = JSON.parse(result)
        return data
    })
}

/**
 * save functions results
 */
//is passed a results data object which is then added to storage data object
 export function saveResultToStorage(resultData) {
    return getResults()
    .then(data => {
        AsyncStorage.setItem(RESULTS_STORAGE_KEY, JSON.stringify({
            ...data,
            [resultData.deckId] : {
                ...resultData
            }
        }))
    })
 }

/**
 * save functions decks
 */
//only for dummy data one off, if app is opened for first time, for dev purposes
export function saveDummyData(dummyData) {
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify({
        ...dummyData
    }))
}

//merges a new deck obj into the existing deck data in storage
export function saveNewDeck(deckInfo) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [deckInfo]: {
            title: deckInfo,
            cards: []
        }
    }))
}

//grabs the current data from storage, adds new card obj to releveant item cards array and replaces storage data with the updated version.
export function saveCardToDeck(deckId, cardInfo) {
    return getDecks()
    .then((data) => {
        data[deckId].cards.push(cardInfo)
        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    })
}

/**
 * delete functions
 */
//gets the current data from storage, deletes the releveant deck from it and replaces the data with the updated version.
export function removeDeck(deckId) {
    return getDecks()
    .then((data) => {
        delete data[deckId]
        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data))
    })
}

//is passed a deckId string to identify the corresponding deck object to remove from results data object
export function removeDeckFromResults(deckId) {
    return getResults()
    .then((data) => {
        delete data[deckId]
        AsyncStorage.setItem(RESULTS_STORAGE_KEY, JSON.stringify(data))
    })
}

//gets the current data from storage, grabs the relevant deck's card array and filters out the card to be removed
//than it merges the updated array into the relevant deck's card property.
export function removeCardFromDeck(deckId, cardIndex) {
    return getDecks()
    .then((data) => {
        const newData = data[deckId].cards.filter((card, index) => index !== cardIndex)
        AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
            [deckId]: {
                title: deckId,
                cards: newData
            }
        }))
    })
}