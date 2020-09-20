import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

//Details screen for an individual deck, shows the title and number of cards, buttons to start quiz or add card
const DeckDetails = (props) => {
    const { navigation, deckToShow } = props

    return(
        <View>
            <Text>{deckToShow.title}</Text>
            <Text>{deckToShow.cards.length} Cards</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
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