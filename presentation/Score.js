import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { StyledTitle } from '../styled/common'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'
import { handleSaveResult } from '../actions/results'

class Score extends Component {
    componentDidMount() {
        const { dispatch, deckId, score, totalCards, currentBest, lastDate, timesPlayed } = this.props
        //user has completed quiz therefore clear notification to study for the day
        clearLocalNotification()
        .then(setLocalNotification())

        //checks current deck results best score and if it's better or score hasn't been set yet,
        //add current score and todays date to store state
        const newTopScore = () => {
            return score >= currentBest || currentBest === null
        }
        //dispatches thunk action to save new top score or just times played + 1 if not top score
        dispatch(handleSaveResult({
            deckId,
            score: newTopScore() === true ? score : currentBest,
            cardNum: totalCards,
            date: newTopScore() === true ? new Date().toLocaleDateString() : lastDate,
            timesPlayed: timesPlayed + 1
        }))
    }

    render() {
        const { totalCards, score } = this.props

        return(
            <View>
                <StyledTitle>{`You're score ${score} / ${totalCards}`}</StyledTitle>
            </View>
        )
    }
}

function mapStateToProps({results}, {deckId}) {
    return {
        currentBest: results[deckId] !== undefined ? results[deckId].score : null,
        timesPlayed: results[deckId] !== undefined ? results[deckId].timesPlayed : 0,
        lastDate: results[deckId] !== undefined ? results[deckId].date : null,
    }
}

export default connect(mapStateToProps)(Score)