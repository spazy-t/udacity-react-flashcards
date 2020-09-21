import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

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
        if((cardNum + 1) < quizCards.length) {
            this.nextCard()
        }
        //TODO: show score screen if all cards done
    }

    render() {
        //grab props and local state in order to show relevant information in ui dependant on user interaction
        const { quizCards} = this.props
        const { cardNum, showAnswer, score } = this.state
        //show card question and all response buttons, if the user clicks to show answer show
        //the answer at top and change button text
        return(
            <View>
                <Text>{score}</Text>
                {showAnswer === false
                    ? <Text>{quizCards[cardNum].question}</Text>
                    : <Text>{quizCards[cardNum].answer}</Text>
                }
                <TouchableOpacity onPress={this.handleCardFlip}>
                    <Text>{showAnswer === false
                            ? 'Answer'
                            : 'Question'
                        }
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    ref='correct'
                    onPress={() => this.handleCardComplete('correct')}>
                    <Text>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    ref='incorrect'
                    onPress={this.handleCardComplete}>
                    <Text>Incorrect</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

//map state to grab the relevant deck cards (questions + answers)
function mapStateToProps(state, { route }) {
    const { id } = route.params

    return {
        quizCards: state[id].cards
    }
}

export default connect(mapStateToProps)(Quiz)