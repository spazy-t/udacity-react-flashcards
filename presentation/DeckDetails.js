import React from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { StyledTouchable, StyledView, StyledTitle } from '../styled/common'

//Details screen for an individual deck, shows the title and number of cards, buttons to start quiz or add card
const DeckDetails = (props) => {
    const { navigation, deckToShow } = props
    //show deck information in ui, on buttons pass in params so corresponding component knows which deck to deal with in store state
    return(
        <StyledView>
            <StyledTitle>{deckToShow.title}</StyledTitle>
            <Text>{deckToShow.cards.length} Cards</Text>
            <StyledTouchable onPress={() => navigation.navigate('Quiz', { id: deckToShow.title})}>
                <Text>QUIZ</Text>
            </StyledTouchable>
            <StyledTouchable onPress={() => navigation.navigate('NewCard', { id: deckToShow.title })}>
                <Text>NEW CARD</Text>
            </StyledTouchable>
        </StyledView>
    )
}

function mapStateToProps(state, { route }) {
    const { id } = route.params

    return {
        deckToShow: state[id]
    }
}

export default connect(mapStateToProps)(DeckDetails)