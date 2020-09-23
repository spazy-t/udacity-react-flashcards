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
    //TODO: see why the list screen reoreders the list whena new card is added to a few decks
    handleSubmit = () => {
        const { question, answer } = this.state
        const { dispatch, id, navigation } = this.props

        if(question !== '' && answer !== '') {
            dispatch(addCard({
                deckId: id,
                card: {
                    question,
                    answer
                }
            }))

            this.setState(() => ({
                question: '',
                answer: ''
            }))

            navigation.goBack()
        }
    }

    render() {
        const { question, answer } = this.state
        const { id } = this.props

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
                <StyledSubmitBtn onPress={this.handleSubmit}>
                    <StyledSubmitText>SUBMIT</StyledSubmitText>
                </StyledSubmitBtn>
            </StyledView>
        )
    }
}

///TODO: see if we need to have state first here?
function mapStateToProps(state, { route }) {
    return {
        id: route.params.id
    }
}

export default connect(mapStateToProps)(NewCard)