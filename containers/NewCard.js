import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddCardToDeck } from '../actions/decks'
import { StyledSubmitBtn, StyledSubmitText, StyledInput, StyledView, StyledTitle } from '../styled/common'

class NewCard extends Component {
    state = {
        question: '',
        answer: ''
    }
    
    //called when submit btn is pressed, adds new card to deck and navigates back to deck
    handleSubmit = () => {
        const { question, answer } = this.state
        const { handleAddCardToDeck, navigation } = this.props
        const { id } = this.props.route.params

        //if there is data to enter as a new card then call thunk action to store in Asyncstorage and then Store.
        if(question !== '' && answer !== '') {
            handleAddCardToDeck({
                deckId: id,
                card: {
                    question,
                    answer
                }
            })

            //clear the input fields
            this.setState(() => ({
                question: '',
                answer: ''
            }))

            navigation.goBack()
        }
    }

    render() {
        const { question, answer } = this.state
        const { id } = this.props.route.params

        //should the submit btn be disabled
        const disabledSubmit = question === '' || answer === ''

        return(
            <StyledView>
                <StyledTitle>{id}</StyledTitle>
                <StyledInput
                    placeholder='Question'
                    value={question}
                    onChangeText={(text) => this.setState({ question: text })} />
                <StyledInput
                    placeholder='Answer'
                    value={answer}
                    onChangeText={(text) => this.setState({ answer: text })} />
                <StyledSubmitBtn onPress={this.handleSubmit} disabled={disabledSubmit} style={disabledSubmit ? {opacity: 0.2} : null}>
                    <StyledSubmitText>SUBMIT</StyledSubmitText>
                </StyledSubmitBtn>
            </StyledView>
        )
    }
}

export default connect(null, { handleAddCardToDeck })(NewCard)