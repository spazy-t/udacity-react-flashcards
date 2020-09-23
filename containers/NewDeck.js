import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addDeck } from '../actions/decks'
import { StyledSubmitBtn, StyledSubmitText, StyledInput, StyledView } from '../styled/common'

class NewDeck extends Component {
    state = {
        title: ''
    }

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

            navigation.navigate('DeckList')
        }
    }

    textChanged = (text) => {
        this.setState(() => ({
            title: text
        }))
    }

    render() {
        return(
            <StyledView>
                <StyledInput
                    placeholder='Enter deck title'
                    value={this.state.title}
                    onChangeText={this.textChanged} />
                <StyledSubmitBtn onPress={this.onSubmit}>
                    <StyledSubmitText>SUBMIT</StyledSubmitText>
                </StyledSubmitBtn>
            </StyledView>
        )
    }
}

export default connect()(NewDeck)