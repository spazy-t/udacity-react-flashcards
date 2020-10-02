import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddDeck } from '../actions/decks'
import { StyledSubmitBtn, StyledSubmitText, StyledInput, StyledView } from '../styled/common'

class NewDeck extends Component {
    state = {
        title: ''
    }

    //TODO: check that title isn't already in use
    //called when new deck is submitted, adds to store state and navigates to new deck
    onSubmit = () => {
        const { title } = this.state
        const { navigation, handleAddDeck } = this.props

        //if a new title has been entered then call thunk action to save new deck in asyncstorage and store state.
        if(title !== '') {
            handleAddDeck(title)

            this.setState(() => ({
                title: ''
            }))

            navigation.navigate('DeckDetails', { id: title })
        }
    }

    //updates local state when title is typed in by user
    textChanged = (text) => {
        this.setState(() => ({
            title: text
        }))
    }

    render() {
        //should the submit btn be disabled
        const disabledSubmit = this.state.title === ''

        return(
            <StyledView>
                <StyledInput
                    placeholderTextColor='#fff'
                    placeholder='Enter deck title'
                    value={this.state.title}
                    onChangeText={this.textChanged} />
                <StyledSubmitBtn onPress={this.onSubmit} disabled={disabledSubmit} style={disabledSubmit ? {opacity: 0.2} : null}>
                    <StyledSubmitText>Create Deck</StyledSubmitText>
                </StyledSubmitBtn>
            </StyledView>
        )
    }
}

export default connect(null, { handleAddDeck })(NewDeck)