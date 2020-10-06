import React, { useState, useEffect } from 'react'
import { ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { handleAddCardToDeck } from '../actions/decks'
import {
    StyledSubmitBtn,
    StyledSubmitText,
    StyledInput,
    StyledView,
    styles
} from '../styled/common'
import studyImage from '../images/studyImage.jpg'
import PropTypes from 'prop-types'

function NewCard(props) {
    //state to keep track of if both fields are populated
    //uses hooks to create state const and adds a callback to set the state const
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')

    //on mount set stack screen header title
    useEffect(() => {
        const { navigation, route } = props

        navigation.setOptions({ headerTitle: `New Card: ${route.params.id}` })
    })
    
    //called when submit btn is pressed, adds new card to deck and navigates back to deck
    handleSubmit = () => {
        const { handleAddCardToDeck, navigation } = props
        const { id } = props.route.params

        //if there is data to enter as a new card then call thunk action to store in Asyncstorage and then Store.
        if(question !== '' && answer !== '') {
            handleAddCardToDeck({
                deckId: id,
                card: {
                    question,
                    answer
                }
            })

            //clear the input fields via setting state
            setQuestion('')
            setAnswer('')

            //go back to deck details screen
            navigation.navigate('DeckDetails', { id: id })
        }
    }

    //should the submit btn be disabled? (check if inputs are populated)
    const disabledSubmit = question === '' || answer === ''

    return(
        <ImageBackground source={studyImage} style={styles.backgroundImage}>
            <StyledView>
                <StyledInput
                    placeholderTextColor='#fff'
                    placeholder='Question'
                    value={question}
                    onChangeText={(text) => setQuestion(text)} />
                <StyledInput
                    placeholderTextColor='#fff'
                    placeholder='Answer'
                    value={answer}
                    onChangeText={(text) => setAnswer(text)} />
                <StyledSubmitBtn
                    onPress={this.handleSubmit}
                    disabled={disabledSubmit}
                    style={disabledSubmit ? styles.SubmitBtn : null}>
                    <StyledSubmitText>SUBMIT</StyledSubmitText>
                </StyledSubmitBtn>
             </StyledView>
        </ImageBackground>
    )
}

NewCard.propTypes = {
    handleAddCardToDeck: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired
}

//no state to pass into props, just a dispatchable thunk action to save new card to deck
export default connect(null, { handleAddCardToDeck })(NewCard)