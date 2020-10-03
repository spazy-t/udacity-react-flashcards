import React, { Component } from 'react'
import DeckContainer from '../presentation/DeckContainer'
import { connect } from 'react-redux'
import { handleInitData } from '../actions/shared'
import { StyledScroll, DashDeck } from '../styled/common'
import { setLocalNotification } from '../utils/helpers'
import PropTypes from 'prop-types'

//A list of all the available decks, each has a container showing the initial data
//navigation is sent through as the container doesn't inherit that component
class DeckList extends Component {
    //calls thunk action creator to grab asyncstorage data, if null puts in dummy data for Store also.
    componentDidMount() {
        setLocalNotification()
        this.props.handleInitData()
    }

    render() {
        const { currentDecks, navigation } = this.props
        
        //TODO: stop reordering when a new card is added, maybe a for loop instead of map?
        return(
            <StyledScroll contentContainerStyle={{ alignItems: 'center' }}>
                {currentDecks !== null &&(Object.keys(currentDecks).map((deck) => (
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