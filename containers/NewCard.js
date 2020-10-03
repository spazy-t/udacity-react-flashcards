import React, { Component } from 'react'
import { ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { handleAddCardToDeck } from '../actions/decks'
import { StyledSubmitBtn, StyledSubmitText, StyledInput, StyledView } from '../styled/common'
import studyImage from '../images/studyImage.jpg'
import PropTypes from 'prop-types'

class NewCard extends Component {
    state = {
        question: '',
        answer: ''
    }

    componentDidMount() {
        const { navigation, route } = this.props

        navigation.setOptions({ headerTitle: `New Card: ${route.params.id}`})
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

        //should the submit btn be disabled
        const disabledSubmit = question === '' || answer === ''

        return(
            <ImageBackground source={studyImage} style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
                <StyledView>
                    <StyledInput
                        placeholderTextColor='#fff'
                        placeholder='Question'
                        value={question}
                        onChangeText={(text) => this.setState({ question: text })} />
                    <StyledInput
                        placeholderTextColor='#fff'
                        placeholder='Answer'
                        value={answer}
                        onChangeText={(text) => this.setState({ answer: text })} />
                    <StyledSubmitBtn onPress={this.handleSubmit} disabled={disabledSubmit} style={disabledSubmit ? {backgroundColor: '#ccc', opacity: 0.6} : null}>
                        <StyledSubmitText>SUBMIT</StyledSubmitText>
                    </StyledSubmitBtn>
                </StyledView>
            </ImageBackground>
        )
    }
}

NewCard.propTypes = {
    handleAddCardToDeck: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
}

export default connect(null, { handleAddCardToDeck })(NewCard)