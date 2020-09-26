import React, { Component } from 'react'
import { Text, Alert } from 'react-native'
import { connect } from 'react-redux'
import Score from '../presentation/Score'
import NoCards from '../presentation/NoCards'
import { StyledTouchable, StyledView, StyledTitle } from '../styled/common'
import { handleDeleteCard } from '../actions/decks'

class Quiz extends Component {
    //local state to hold score to show at the end of quiz
    state = {
        score: 0,
        cardNum: 0,
        showAnswer: false
    }

    //helper to move to next card q+a
    nextCard = () => {
        this.setState((prevState) => ({
            cardNum: prevState.cardNum += 1
        }))
    }

    //flip answer and question onPress, show answer/question and change btn text
    handleCardFlip = () => {
        this.setState((prevState) => ({
            showAnswer: !prevState.showAnswer
        }))
    }

    //callback fnct to move on to next card via state carNum(?), when incorrect / correct is pressed
    handleCardComplete = (response = '') => {
        const { quizCards } = this.props
        const { cardNum } = this.state
        //if the presss event comes form the 'correct' btn add one to score
        if(response === 'correct') {
            this.setState((prevState) => ({
                score: prevState.score += 1
            }))
        }
        //make sure we're not trying to show cards that don't exist i.e. not past number of cards in deck
        if(cardNum < quizCards.length) {
            this.nextCard()
        }
    }

    //if quiz is completed and user presses restart quiz, reset the state to go back to first card
    resetQuiz = () => {
        this.setState(() => ({
            score: 0,
            cardNum: 0,
            showAnswer: false
        }))
    }

    //handles dispatch of action to delete card from store and AsyncStorage on Delete btn press
    handleDeleteCard = () => {
        const { dispatch, id } = this.props
        const { cardNum } = this.state

        //TODO: map dispatch to props
        //show warning before deleting
        Alert.alert('Delete Card?',
            'Are you sure you want to delete this card?',
            [{
                text: 'Cancel',
                onPress: () => console.log('cancel delete card'),
                style: 'cancel'
            },
            {
                text: 'OK',
                onPress: () => {
                    dispatch(handleDeleteCard({ deck: id, cardNum: cardNum }))
                }
            }]
        )
    }

    render() {
        //grab props and local state in order to show relevant information in ui dependant on user interaction
        const { quizCards, navigation, id } = this.props
        const { cardNum, showAnswer, score } = this.state

        //if all cards have been shown, show score for the quiz
        //if no cards in the deck show NoCards component
        if(quizCards.length === 0) {
            return(
                <NoCards />
            )
        } else if(cardNum === quizCards.length) {
            return(
                <StyledView>
                    <Score score={score} totalCards={quizCards.length} />
                    <StyledTouchable onPress={this.resetQuiz}>
                        <Text>Restart Quiz</Text>
                    </StyledTouchable>
                    <StyledTouchable onPress={() => navigation.navigate('DeckDetails', { id: id })}>
                        <Text>Back to Deck</Text>
                    </StyledTouchable>
                </StyledView>
            )
        }
        //show card question and all response buttons, if the user clicks to show answer show
        //the answer at top and change button text
        return(
            <StyledView>
                <StyledTitle>{showAnswer === false
                    ? quizCards[cardNum].question
                    : quizCards[cardNum].answer
                }</StyledTitle>
                <StyledTouchable onPress={this.handleCardFlip}>
                    <Text>{showAnswer === false
                            ? 'Show Answer'
                            : 'Show Question'
                        }
                    </Text>
                </StyledTouchable>
                <StyledTouchable onPress={() => this.handleCardComplete('correct')}>
                    <Text>Correct</Text>
                </StyledTouchable>
                <StyledTouchable onPress={this.handleCardComplete}>
                    <Text>Incorrect</Text>
                </StyledTouchable>
                <StyledTouchable onPress={this.handleDeleteCard}>
                    <Text>Delete Card</Text>
                </StyledTouchable>
            </StyledView>
        )
    }
}

//map state to grab the relevant deck cards (questions + answers)
function mapStateToProps(state, { route }) {
    const { id } = route.params

    return {
        quizCards: state[id].cards, 
        id: id
    }
}

export default connect(mapStateToProps)(Quiz)