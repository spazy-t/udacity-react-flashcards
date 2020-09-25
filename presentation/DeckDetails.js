import React, { Component } from 'react'
import { Text, Alert } from 'react-native'
import { connect } from 'react-redux'
import { StyledTouchable, StyledView, StyledTitle } from '../styled/common'
import { deleteDeck } from '../actions/decks'

//Details screen for an individual deck, shows the title and number of cards, buttons to start quiz or add card
class DeckDetails extends Component {
    //stops the component from rerendering a deck that has been deleted
    shouldComponentUpdate(nextProps) {
        if(this.props.deckToShow !== nextProps.deckToShow) {
            return false
        } else {
            return true
        }
    }
    
    //deletes deck when delete btn pressed
    handleDelete = () => {
        const { navigation, dispatch, deckToShow } = this.props
        
        //show warning before navigating and deleting
        Alert.alert('Delete Deck?',
            'Are you sure you want to delete this deck?',
            [{
                text: 'cancel',
                onPress: () => console.log('cancel deck delete'),
                style: 'cancel'
            },
            {
                text: 'OK',
                onPress: () => {
                    navigation.goBack()
                    dispatch(deleteDeck(deckToShow.title))
                }
            }]
        )
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