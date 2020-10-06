import React, { Component } from 'react'
import DeckContainer from '../screens/DeckContainer'
import { connect } from 'react-redux'
import { handleInitData } from '../actions/shared'
import { StyledScroll, DashDeck, HeaderText } from '../styled/common'
import { setLocalNotification } from '../utils/helpers'
import PropTypes from 'prop-types'

//A list of all the available decks, each has a container showing the initial data
//navigation is sent through as the container doesn't inherit that component
class DeckList extends Component {
    //calls thunk action creator to grab asyncstorage data and sets notification to study.
    componentDidMount() {
        setLocalNotification()
        this.props.handleInitData()
    }

    //renders each deck from data via store state and contains them in a styled scorll view
    render() {
        const { currentDecks, navigation } = this.props
        const decksKeys = Object.keys(currentDecks).sort()
        
        //if the deck list is empty prompt user to make one
        if(decksKeys.length === 0) {
            return(
                <HeaderText>No Decks, go make one in the New Deck Tab</HeaderText>
            )
        }
        
        return(
            <StyledScroll contentContainerStyle={{ alignItems: 'center' }}>
                {currentDecks !== null &&(decksKeys.map((deck) => (
                    <DashDeck key={deck} onPress={() => navigation.navigate('DeckDetails', { id: deck })}>
                        <DeckContainer
                               title={currentDecks[deck].title}
                               cardNum={currentDecks[deck].cards.length} />
                    </DashDeck>
                )))}
            </StyledScroll>
        )
    }
}

//grabs current list of decks in store state
function mapStateToProps({ decks }) {
    return {
        currentDecks: { ...decks }
    }
}

DeckList.propTypes = {
    currentDecks: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired
}

//connect to redux store in order to grab initial data and create decklist
export default connect(mapStateToProps, { handleInitData })(DeckList)