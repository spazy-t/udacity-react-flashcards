import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../constants/actionTypes'

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
        case ADD_CARD:
            const { deckId, card } = action.cardInfo

            return {
                ...state,
                [deckId]: {
                    ...state[deckId],
                    cards: state[deckId].cards.concat([card])
                }
            }
        default:
            return state
    }
}

export default decks