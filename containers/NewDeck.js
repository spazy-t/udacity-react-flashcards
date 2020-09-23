import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addDeck } from '../actions/decks'
import { StyledSubmitBtn, StyledSubmitText, StyledInput, StyledView } from '../styled/common'

class NewDeck extends Component {
    state = {
        title: ''
    }

    //called when new deck is submitted, adds to store state and navigates to new deck
    onSubmit = () => {
        const { title } = this.state
        const { navigation } = this.props
        //TODO: instead of if only allow to submit when title is not blank and therefore not disabled
        //TODO: call a thunk action crestor instead when AysncStorage is implemented
        if(title !== '') {
            this.props.dispatch(addDeck(title))

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

export default connect()(NewDeck)