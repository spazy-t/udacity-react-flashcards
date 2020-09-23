import React, { Component } from 'react'
import DeckContainer from '../presentation/DeckContainer'
import { connect } from 'react-redux'
import { receiveData } from '../actions/decks'
import { StyledView } from '../styled/common'

//TODO: remove dummy data when AsyncStorage is set up
const dummyData = {
    java: {
        title: 'java',
        cards: [
            {
                question: 'Will trump get a second term?',
                answer: 'No!'
            },
            {
                question: 'whic is better: Android or iOS?',
                answer: 'Android'
            },
            {
                question: 'front end or back end developer?',
                answer: 'front'
            },
        ]
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
        //TODO: stop reordering when a new card is added
        return(
            <StyledView>
                {Object.keys(currentDecks).map((deck) => (
                    <DeckContainer
                        key={currentDecks[deck].title}
                        title={currentDecks[deck].title}
                        cardNum={currentDecks[deck].cards.length}
                        navigation={this.props.navigation} />
                ))}
            </StyledView>
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