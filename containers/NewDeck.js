import React, { Component } from 'react'
import { Alert } from 'react-native'
import { connect } from 'react-redux'
import { handleAddDeck } from '../actions/decks'
import { StyledSubmitBtn, StyledSubmitText, StyledInput, StyledView } from '../styled/common'

class NewDeck extends Component {
    state = {
        title: ''
    }

    //called when new deck is submitted, adds to store state and navigates to new deck
    onSubmit = () => {
        const { title } = this.state
        const { navigation, handleAddDeck, currentDecks } = this.props

        //if a new title has been entered and it doesn't already exist, 
        //call thunk action to save new deck in asyncstorage and store state,
        //or show alert to say pick another title
        if(title !== '' && !currentDecks.includes(title)) {
            handleAddDeck(title)

            this.setState(() => ({
                title: ''
            }))

            navigation.navigate('DeckDetails', { id: title })
        } else {
            Alert.alert('Deck title already exists',
                'Please choose another title',
                [{
                    text: 'OK',
                    onPress: () => {
                        this.setState(() => ({
                            title: ''
                        }))
                    }
                }])
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

function mapStateToProps({ decks }) {
    const currentDecks = Object.keys(decks)

    return {
        currentDecks
    }
}

export default connect(mapStateToProps, { handleAddDeck })(NewDeck)