import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

//Details screen for an individual deck, shows the title and number of cards, buttons to start quiz or add card
const DeckDetails = (props) => {
    const { navigation, deckToShow } = props
    //show deck information in ui, on buttons pass in params so corresponding component knows which deck to deal with in store state
    return(
        <View>
            <Text>{deckToShow.title}</Text>
            <Text>{deckToShow.cards.length} Cards</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz', { id: deckToShow.title})}>
                <Text>QUIZ</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('NewCard', { id: deckToShow.title })}>
                <Text>NEW CARD</Text>
            </TouchableOpacity>
        </View>
    )
}

function mapStateToProps(state, { route }) {
    const { id } = route.params

    return {
        deckToShow: state[id]
    }
}

export default connect(mapStateToProps)(DeckDetails)