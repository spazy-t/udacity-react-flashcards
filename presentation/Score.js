import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Animated } from 'react-native'
import { HeaderView, styles } from '../styled/common'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'
import { handleSaveResult } from '../actions/results'
import PropTypes from 'prop-types'

class Score extends Component {
    //init animation position for score text at top of screen
    state = {
        pos: new Animated.ValueXY({ x: 0, y: -100 })
    }

    componentDidMount() {
        const { handleSaveResult, deckId, score, totalCards, currentBest, lastDate, timesPlayed } = this.props
        //user has completed quiz therefore clear notification to study for the day
        clearLocalNotification()
        .then(setLocalNotification())

        //animate in the score text
        Animated.spring(this.state.pos, {
            toValue: { x: 0, y: 0 },
            friction: 6,
            tension: 90,
            useNativeDriver: false
        }).start()

        //helper method, checks current deck results best score and if it's better or score hasn't been set yet,
        //add current score and todays date to store state. Returns a boolean to state wether to save all info
        const newTopScore = () => {
            return score >= currentBest || currentBest === null
        }
        //dispatches thunk action to save new top score or just times played + 1 if not top score (both storage and store state)
        handleSaveResult({
            deckId,
            score: newTopScore() === true ? score : currentBest,
            cardNum: totalCards,
            date: newTopScore() === true ? new Date().toLocaleDateString() : lastDate,
            timesPlayed: timesPlayed + 1
        })
    }

    //renders score text which is nested in relevant quiz screen when called, animates in
    render() {
        const { totalCards, score } = this.props

        return(
            <HeaderView>
                <Animated.Text
                    style={[styles.animationText, this.state.pos.getLayout()]}>
                    {`You're score ${score} / ${totalCards}`}
                </Animated.Text>
            </HeaderView>
        )
    }
}

//grabs state date and best score to compare with this quiz score, and times played to plus 1
function mapStateToProps({ results }, { deckId }) {
    return {
        currentBest: results[deckId] !== undefined ? results[deckId].score : null,
        timesPlayed: results[deckId] !== undefined ? results[deckId].timesPlayed : 0,
        lastDate: results[deckId] !== undefined ? results[deckId].date : null,
    }
}

Score.propTypes = {
    deckId: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    totalCards: PropTypes.number.isRequired,
    currentBest: PropTypes.number.isRequired,
    lastDate: PropTypes.string.isRequired,
    timesPlayed: PropTypes.number.isRequired,
    handleSaveResult: PropTypes.func.isRequired
}

//maps required comparison state to props and dispatchable thunk action to save results to storage and state
export default connect(mapStateToProps, { handleSaveResult })(Score)