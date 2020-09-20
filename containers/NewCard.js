import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { addCard } from '../actions/decks'

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
            <View>
                <Text>{id}</Text>
                <TextInput
                    placeholder='Question'
                    value={question}
                    onChangeText={(text) => this.setState({ question: text })} />
                <TextInput
                    placeholder='Answer'
                    value={answer}
                    onChangeText={(text) => this.setState({ answer: text })} />
                <TouchableOpacity onPress={this.handleSubmit}>
                    <Text>SUBMIT</Text>
                </TouchableOpacity>
            </View>
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