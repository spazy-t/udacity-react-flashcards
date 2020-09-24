import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { StyledTouchable, StyledView, StyledTitle } from '../styled/common'
import { deleteCard } from '../actions/decks'

//Details screen for an individual deck, shows the title and number of cards, buttons to start quiz or add card
class DeckDetails extends Component {
    handleDelete = () => {
        const { navigation, dispatch, deckToShow } = this.props
        navigation.navigate('Home')

        dispatch(deleteCard(deckToShow.title))
    }

    render() {
        const { navigation, deckToShow } = this.props
        //show deck information in ui, on buttons pass in params so corresponding component knows which deck to deal with in store state
        return(
            <StyledView>
                <StyledTitle>{deckToShow.title}</StyledTitle>
                <Text>{deckToShow.cards.length} Cards</Text>
                <StyledTouchable onPress={() => navigation.navigate('Quiz', { id: deckToShow.title})}>
                    <Text>Start Quiz</Text>
                </StyledTouchable>
                <StyledTouchable onPress={() => navigation.navigate('NewCard', { id: deckToShow.title })}>
                    <Text>Add Card</Text>
                </StyledTouchable>
                <StyledTouchable onPress={this.handleDelete}>
                    <Text>Delete Deck</Text>
                </StyledTouchable>
            </StyledView>
        )
    }
}

function mapStateToProps(state, { route }) {
    const { id } = route.params

    return {
        deckToShow: state[id]
    }
}

export default connect(mapStateToProps)(DeckDetails)