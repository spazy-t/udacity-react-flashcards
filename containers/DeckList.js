import React, { Component } from 'react'
import { View } from 'react-native'
import DeckContainer from '../presentation/DeckContainer'
import { connect } from 'react-redux'
import { receiveData } from '../actions/decks'

//TODO: remove dummy data when AsyncStorage is set up
const dummyData = {
    java: {
        title: 'java',
        cards: []
    },
    javaScript: {
        title: 'javaScript',
        cards: []
    },
    python: {
        title: 'python',
        cards: []
    },
}

//A list of all the available decks, each has a container showing the initial data
//navigation is sent through as the container doesn't inherit that component
class DeckList extends Component {
    //dummy init data to test redux
    componentDidMount() {
        this.props.dispatch(receiveData(dummyData))
    }

    render() {
        const { currentDecks } = this.props
        //TODO: try version with keys to maintain order when updated
        return(
            <View>
                {Object.values(currentDecks).map((deck) => (
                    <DeckContainer
                        key={deck.title}
                        title={deck.title}
                        cardNum={deck.cards.length}
                        navigation={this.props.navigation} />
                ))}
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentDecks: state
    }
}

//connect to redux store in order to grab initial data and create decklist
export default connect(mapStateToProps)(DeckList)