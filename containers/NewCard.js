import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { addCard } from '../actions/decks'
import { StyledSubmitBtn, StyledSubmitText, StyledInput, StyledView } from '../styled/common'

class NewCard extends Component {
    state = {
        question: '',
        answer: ''
    }
    
    //called when submit btn is pressed, adds new card to deck and navigates back to deck
    handleSubmit = () => {
        const { question, answer } = this.state
        const { dispatch, navigation } = this.props
        const { id } = this.props.route.params

        if(question !== '' && answer !== '') {
            dispatch(addCard({
                deckId: id,
                card: {
                    question,
                    answer
                }
            }))

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
                <Text>{id}</Text>
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

export default connect()(NewCard)