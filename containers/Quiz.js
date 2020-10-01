import React, { Component } from 'react'
import { Alert, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import Score from '../presentation/Score'
import NoCards from '../presentation/NoCards'
import { RegularBtn, StyledView, StyledTitle, CorrectBtn, InCorrectBtn, JustTextBtn, StyledText } from '../styled/common'
import { handleDeleteCard } from '../actions/decks'
import studyImage from '../images/studyImage.jpg'

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
        const { handleDeleteCard, id } = this.props
        const { cardNum } = this.state

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
                    handleDeleteCard({ deck: id, cardNum: cardNum })
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
                <ImageBackground source={studyImage} style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
                    <NoCards nav={navigation} id={id} />
                </ImageBackground>
            )
        } else if(cardNum === quizCards.length) {
            return(
                <ImageBackground source={studyImage} style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
                    <StyledView>
                        <Score score={score} totalCards={quizCards.length} />
                        <RegularBtn onPress={this.resetQuiz}>
                            <StyledText>Restart Quiz</StyledText>
                        </RegularBtn>
                        <RegularBtn onPress={() => navigation.navigate('DeckDetails', { id: id })}>
                            <StyledText>Back to Deck</StyledText>
                        </RegularBtn>
                    </StyledView>
                </ImageBackground>
            )
        }
        //show card question and all response buttons, if the user clicks to show answer show
        //the answer at top and change button text
        return(
            <ImageBackground source={studyImage} style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
                <StyledView>
                    <StyledTitle>{showAnswer === false
                        ? quizCards[cardNum].question
                        : quizCards[cardNum].answer
                    }</StyledTitle>
                    <JustTextBtn onPress={this.handleCardFlip}>
                        <StyledText>{showAnswer === false
                                ? 'Show Answer'
                                : 'Show Question'
                            }
                        </StyledText>
                    </JustTextBtn>
                    <CorrectBtn onPress={() => this.handleCardComplete('correct')}>
                        <StyledText>Correct</StyledText>
                    </CorrectBtn>
                    <InCorrectBtn onPress={this.handleCardComplete}>
                        <StyledText>Incorrect</StyledText>
                    </InCorrectBtn>
                    <JustTextBtn onPress={this.handleDeleteCard}>
                        <StyledText>Delete Card</StyledText>
                    </JustTextBtn>
                </StyledView>
            </ImageBackground>
        )
    }
}

//map state to grab the relevant deck cards (questions + answers)
function mapStateToProps({decks}, { route }) {
    const { id } = route.params

    return {
        quizCards: decks[id].cards,
        id: id
    }
}

export default connect(mapStateToProps, { handleDeleteCard })(Quiz)