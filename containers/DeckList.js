import React, { Component } from 'react'
import DeckContainer from '../presentation/DeckContainer'
import { connect } from 'react-redux'
import { handleInitData } from '../actions/decks'
import { StyledView, StyledTouchable } from '../styled/common'

//A list of all the available decks, each has a container showing the initial data
//navigation is sent through as the container doesn't inherit that component
class DeckList extends Component {
    //calls thunk action creator to grab asyncstorage data, if null puts in dummy data for Store also.
    componentDidMount() {
        this.props.handleInitData()
    }

    render() {
        const { currentDecks, navigation } = this.props
        //TODO: stop reordering when a new card is added, maybe a for loop instead of map?
        return(
            <StyledView>
                {Object.keys(currentDecks).map((deck) => (
                    <StyledTouchable key={deck} onPress={() => navigation.navigate('DeckDetails', { id: deck })}>
                        <DeckContainer
                            title={currentDecks[deck].title}
                            cardNum={currentDecks[deck].cards.length} />
                    </StyledTouchable>
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
export default connect(mapStateToProps, { handleInitData })(DeckList)