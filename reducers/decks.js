import { RECEIVE_DECKS, ADD_DECK, ADD_CARD, DELETE_DECK, DELETE_CARD } from '../constants/actionTypes'

/**
 * reducer to take in relevant actions and place in data in cloned store obj before replacing the current store state
 * receive current decks from AsyncStorage, add new user created deck, add new card/question to a specified deck from user
 */
const decks = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decksData
            }
        case ADD_DECK:
            return {
                ...state,
                [action.newDeck]: {
                    title: action.newDeck,
                    cards: []
                }
            }

        //https://github.com/ayushmaz/mobile-flashcards/blob/master/reducers/index.js
        case DELETE_DECK:
            let currentDecks = { ...state }
            delete currentDecks[action.deckId]
            
            return currentDecks
        case ADD_CARD:
            const { deckId, card } = action.cardInfo

            return {
                ...state,
                [deckId]: {
                    ...state[deckId],
                    cards: state[deckId].cards.concat([card])
                }
            }
        case DELETE_CARD:
            const { deck, cardNum } = action.cardInfo

            return {
                ...state,
                [deck]: {
                    ...state[deck],
                    cards: state[deck].cards.filter((card, index) => index !== cardNum)
                }
            }
        default:
            return state
    }
}

export default decks